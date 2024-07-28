window.title = 'scenexe.io'
window.gtag = function() {};
window._WebSocket = WebSocket;
WebSocket = new Proxy(WebSocket, {
  construct: function (a, b, c) {
    let w = Reflect.construct(a, b, c);
    w.addEventListener = function () {};
    return w;
  }
});
document.getElementById('disconnect-modal').style.visibility = 'hidden'
localStorage.settings = JSON.stringify((function(a, b) {
  try {
    b = JSON.parse(a)
  } catch(e) {}
  delete b.showOtherPlayers
  delete b.noRadiant
  delete b.findAbuser
  return b
})(localStorage.settings, {}))
window.findAbuser = function() {}



var module_functions = {
  742: (module, exports) => {
    'use strict';

    // toByteArray
    exports.b$ = function (v) {
      var M;
      var J;
      var D = H(v);
      var N = D[0];
      var Y = D[1];
      var w = new arrayConstructor(function (W, q, A) {
        return (q + A) * 3 / 4 - A;
      }(0, N, Y));
      var O = 0;
      var p = Y > 0 ? N - 4 : N;
      for (J = 0; J < p; J += 4) {
        M = charCodesArray[v.charCodeAt(J)] << 18 | charCodesArray[v.charCodeAt(J + 1)] << 12 | charCodesArray[v.charCodeAt(J + 2)] << 6 | charCodesArray[v.charCodeAt(J + 3)];
        w[O++] = M >> 16 & 255;
        w[O++] = M >> 8 & 255;
        w[O++] = M & 255;
      }
      if (Y === 2) {
        M = charCodesArray[v.charCodeAt(J)] << 2 | charCodesArray[v.charCodeAt(J + 1)] >> 4;
        w[O++] = M & 255;
      }
      if (Y === 1) {
        M = charCodesArray[v.charCodeAt(J)] << 10 | charCodesArray[v.charCodeAt(J + 1)] << 4 | charCodesArray[v.charCodeAt(J + 2)] >> 2;
        w[O++] = M >> 8 & 255;
        w[O++] = M & 255;
      }
      return w;
    };

    // fromByteArray
    exports.JQ = function (u) {
      var v;
      var M = u.length;
      var J = M % 3;
      var D = [];
      for (var N = 16383, Y = 0, w = M - J; Y < w; Y += N) {
        D.push(Z(u, Y, Y + N > w ? w : Y + N));
      }
      if (J === 1) {
        v = u[M - 1];
        D.push(keySumbolsArray[v >> 2] + keySumbolsArray[v << 4 & 63] + "==");
      } else if (J === 2) {
        v = (u[M - 2] << 8) + u[M - 1];
        D.push(keySumbolsArray[v >> 10] + keySumbolsArray[v >> 4 & 63] + keySumbolsArray[v << 2 & 63] + "=");
      }
      return D.join("");
    };
    var keySumbolsArray = [];
    var charCodesArray = [];
    var arrayConstructor = typeof Uint8Array != "undefined" ? Uint8Array : Array;
    var keySymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var m = 0, k = keySymbols.length; m < k; ++m) {
      keySumbolsArray[m] = keySymbols[m];
      charCodesArray[keySymbols.charCodeAt(m)] = m;
    }
    function H(u) {
      var v = u.length;
      if (v % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var M = u.indexOf("=");
      if (M === -1) {
        M = v;
      }
      return [M, M === v ? 0 : 4 - M % 4];
    }
    function Z(u, v, M) {
      var J;
      var D;
      var N = [];
      for (var Y = v; Y < M; Y += 3) {
        J = (u[Y] << 16 & 16711680) + (u[Y + 1] << 8 & 65280) + (u[Y + 2] & 255);
        N.push(keySumbolsArray[(D = J) >> 18 & 63] + keySumbolsArray[D >> 12 & 63] + keySumbolsArray[D >> 6 & 63] + keySumbolsArray[D & 63]);
      }
      return N.join("");
    }
    charCodesArray["-".charCodeAt(0)] = 62;
    charCodesArray["_".charCodeAt(0)] = 63;
  },
  666: module => {
    var L = function (exports) {
      'use strict';

      var H;
      var prototypeObject = Object.prototype;
      var hasOwnProperty = prototypeObject.hasOwnProperty;
      var defineProperty = Object.defineProperty || function (object, key, data) {
        object[key] = data.value;
      };
      var cSymbol = typeof Symbol == "function" ? Symbol : {};
      var cIterator = cSymbol.iterator || "@@iterator";
      var cAsyncIterator = cSymbol.asyncIterator || "@@asyncIterator";
      var cToStringTag = cSymbol.toStringTag || "@@toStringTag";
      function fDefineProperty(object, key, value) {
        Object.defineProperty(object, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return object[key];
      }
      try {
        fDefineProperty({}, "");
      } catch (error) {
        fDefineProperty = function (object, key, value) {
          return object[key] = value;
        };
      }
      function A(Cg, CL, CI, Cf) {
        var Cn = CL && CL.prototype instanceof G ? CL : G;
        var CE = Object.create(Cn.prototype);
        var Co = new C9(Cf || []);
        defineProperty(CE, "_invoke", {
          value: C5(Cg, CI, Co)
        });
        return CE;
      }
      function U(Cg, CL, CI) {
        try {
          return {
            type: "normal",
            arg: Cg.call(CL, CI)
          };
        } catch (Cf) {
          return {
            type: "throw",
            arg: Cf
          };
        }
      }
      exports.wrap = A;
      var sSuspendedStart = "suspendedStart";
      var sExecuting = "executing";
      var sCompleted = "completed";
      var B = {};
      function G() {}
      function X() {}
      function F() {}
      var j = {};
      fDefineProperty(j, cIterator, function () {
        return this;
      });
      var getPrototypeOf = Object.getPrototypeOf;
      var C1 = getPrototypeOf && getPrototypeOf(getPrototypeOf(CC([])));
      if (C1 && C1 !== prototypeObject && hasOwnProperty.call(C1, cIterator)) {
        j = C1;
      }
      var C2 = F.prototype = G.prototype = Object.create(j);
      function C3(Cg) {
        ["next", "throw", "return"].forEach(function (CL) {
          fDefineProperty(Cg, CL, function (CI) {
            return this._invoke(CL, CI);
          });
        });
      }
      function C4(Cg, CL) {
        function CI(Cn, CE, Co, CK) {
          var Cm = U(Cg[Cn], Cg, CE);
          if (Cm.type !== "throw") {
            var Ck = Cm.arg;
            var CH = Ck.value;
            if (CH && typeof CH == "object" && hasOwnProperty.call(CH, "__await")) {
              return CL.resolve(CH.__await).then(function (CZ) {
                CI("next", CZ, Co, CK);
              }, function (CZ) {
                CI("throw", CZ, Co, CK);
              });
            } else {
              return CL.resolve(CH).then(function (CZ) {
                Ck.value = CZ;
                Co(Ck);
              }, function (CZ) {
                return CI("throw", CZ, Co, CK);
              });
            }
          }
          CK(Cm.arg);
        }
        var Cf;
        defineProperty(this, "_invoke", {
          value: function (Cn, CE) {
            function Co() {
              return new CL(function (CK, Cm) {
                CI(Cn, CE, CK, Cm);
              });
            }
            return Cf = Cf ? Cf.then(Co, Co) : Co();
          }
        });
      }
      function C5(Cg, CL, CI) {
        var Cf = sSuspendedStart;
        return function (Cn, CE) {
          if (Cf === sExecuting) {
            throw new Error("Generator is already running");
          }
          if (Cf === sCompleted) {
            if (Cn === "throw") {
              throw CE;
            }
            return CV();
          }
          CI.method = Cn;
          CI.arg = CE;
          while (true) {
            var Co = CI.delegate;
            if (Co) {
              var CK = C6(Co, CI);
              if (CK) {
                if (CK === B) {
                  continue;
                }
                return CK;
              }
            }
            if (CI.method === "next") {
              CI.sent = CI._sent = CI.arg;
            } else if (CI.method === "throw") {
              if (Cf === sSuspendedStart) {
                Cf = sCompleted;
                throw CI.arg;
              }
              CI.dispatchException(CI.arg);
            } else if (CI.method === "return") {
              CI.abrupt("return", CI.arg);
            }
            Cf = sExecuting;
            var Cm = U(Cg, CL, CI);
            if (Cm.type === "normal") {
              Cf = CI.done ? sCompleted : "suspendedYield";
              if (Cm.arg === B) {
                continue;
              }
              return {
                value: Cm.arg,
                done: CI.done
              };
            }
            if (Cm.type === "throw") {
              Cf = sCompleted;
              CI.method = "throw";
              CI.arg = Cm.arg;
            }
          }
        };
      }
      function C6(Cg, CL) {
        var CI = CL.method;
        var Cf = Cg.iterator[CI];
        if (Cf === H) {
          CL.delegate = null;
          if (CI !== "throw" || !Cg.iterator.return || !(CL.method = "return", CL.arg = H, C6(Cg, CL), CL.method === "throw")) {
            if (CI !== "return") {
              CL.method = "throw";
              CL.arg = new TypeError("The iterator does not provide a '" + CI + "' method");
            }
          }
          return B;
        }
        var Cn = U(Cf, Cg.iterator, CL.arg);
        if (Cn.type === "throw") {
          CL.method = "throw";
          CL.arg = Cn.arg;
          CL.delegate = null;
          return B;
        }
        var CE = Cn.arg;
        if (CE) {
          if (CE.done) {
            CL[Cg.resultName] = CE.value;
            CL.next = Cg.nextLoc;
            if (CL.method !== "return") {
              CL.method = "next";
              CL.arg = H;
            }
            CL.delegate = null;
            return B;
          } else {
            return CE;
          }
        } else {
          CL.method = "throw";
          CL.arg = new TypeError("iterator result is not an object");
          CL.delegate = null;
          return B;
        }
      }
      function C7(Cg) {
        var CL = {
          tryLoc: Cg[0]
        };
        if (1 in Cg) {
          CL.catchLoc = Cg[1];
        }
        if (2 in Cg) {
          CL.finallyLoc = Cg[2];
          CL.afterLoc = Cg[3];
        }
        this.tryEntries.push(CL);
      }
      function C8(Cg) {
        var CL = Cg.completion || {};
        CL.type = "normal";
        delete CL.arg;
        Cg.completion = CL;
      }
      function C9(Cg) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        Cg.forEach(C7, this);
        this.reset(true);
      }
      function CC(Cg) {
        if (Cg) {
          var CL = Cg[cIterator];
          if (CL) {
            return CL.call(Cg);
          }
          if (typeof Cg.next == "function") {
            return Cg;
          }
          if (!isNaN(Cg.length)) {
            var CI = -1;
            var Cf = function Cn() {
              while (++CI < Cg.length) {
                if (hasOwnProperty.call(Cg, CI)) {
                  Cn.value = Cg[CI];
                  Cn.done = false;
                  return Cn;
                }
              }
              Cn.value = H;
              Cn.done = true;
              return Cn;
            };
            return Cf.next = Cf;
          }
        }
        return {
          next: CV
        };
      }
      function CV() {
        return {
          value: H,
          done: true
        };
      }
      X.prototype = F;
      defineProperty(C2, "constructor", {
        value: F,
        configurable: true
      });
      defineProperty(F, "constructor", {
        value: X,
        configurable: true
      });
      X.displayName = fDefineProperty(F, cToStringTag, "GeneratorFunction");
      exports.isGeneratorFunction = function (Cg) {
        var CL = typeof Cg == "function" && Cg.constructor;
        return !!CL && (CL === X || (CL.displayName || CL.name) === "GeneratorFunction");
      };
      exports.mark = function (Cg) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(Cg, F);
        } else {
          Cg.__proto__ = F;
          fDefineProperty(Cg, cToStringTag, "GeneratorFunction");
        }
        Cg.prototype = Object.create(C2);
        return Cg;
      };
      exports.awrap = function (Cg) {
        return {
          __await: Cg
        };
      };
      C3(C4.prototype);
      fDefineProperty(C4.prototype, cAsyncIterator, function () {
        return this;
      });
      exports.AsyncIterator = C4;
      exports.async = function (Cg, CL, CI, Cf, Cn = Promise) {
        var CE = new C4(A(Cg, CL, CI, Cf), Cn);
        if (exports.isGeneratorFunction(CL)) {
          return CE;
        } else {
          return CE.next().then(function (Co) {
            if (Co.done) {
              return Co.value;
            } else {
              return CE.next();
            }
          });
        }
      };
      C3(C2);
      fDefineProperty(C2, cToStringTag, "Generator");
      fDefineProperty(C2, cIterator, function () {
        return this;
      });
      fDefineProperty(C2, "toString", function () {
        return "[object Generator]";
      });
      exports.keys = function (Cg) {
        var CL = Object(Cg);
        var CI = [];
        for (var Cf in CL) {
          CI.push(Cf);
        }
        CI.reverse();
        return function Cn() {
          while (CI.length) {
            var CE = CI.pop();
            if (CE in CL) {
              Cn.value = CE;
              Cn.done = false;
              return Cn;
            }
          }
          Cn.done = true;
          return Cn;
        };
      };
      exports.values = CC;
      C9.prototype = {
        constructor: C9,
        reset: function (Cg) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = H;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = H;
          this.tryEntries.forEach(C8);
          if (!Cg) {
            for (var CL in this) {
              if (CL.charAt(0) === "t" && hasOwnProperty.call(this, CL) && !isNaN(+CL.slice(1))) {
                this[CL] = H;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var Cg = this.tryEntries[0].completion;
          if (Cg.type === "throw") {
            throw Cg.arg;
          }
          return this.rval;
        },
        dispatchException: function (Cg) {
          if (this.done) {
            throw Cg;
          }
          var CL = this;
          function CI(Cm, Ck) {
            CE.type = "throw";
            CE.arg = Cg;
            CL.next = Cm;
            if (Ck) {
              CL.method = "next";
              CL.arg = H;
            }
            return !!Ck;
          }
          for (var Cf = this.tryEntries.length - 1; Cf >= 0; --Cf) {
            var Cn = this.tryEntries[Cf];
            var CE = Cn.completion;
            if (Cn.tryLoc === "root") {
              return CI("end");
            }
            if (Cn.tryLoc <= this.prev) {
              var Co = hasOwnProperty.call(Cn, "catchLoc");
              var CK = hasOwnProperty.call(Cn, "finallyLoc");
              if (Co && CK) {
                if (this.prev < Cn.catchLoc) {
                  return CI(Cn.catchLoc, true);
                }
                if (this.prev < Cn.finallyLoc) {
                  return CI(Cn.finallyLoc);
                }
              } else if (Co) {
                if (this.prev < Cn.catchLoc) {
                  return CI(Cn.catchLoc, true);
                }
              } else {
                if (!CK) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < Cn.finallyLoc) {
                  return CI(Cn.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (Cg, CL) {
          for (var CI = this.tryEntries.length - 1; CI >= 0; --CI) {
            var Cf = this.tryEntries[CI];
            if (Cf.tryLoc <= this.prev && hasOwnProperty.call(Cf, "finallyLoc") && this.prev < Cf.finallyLoc) {
              var Cn = Cf;
              break;
            }
          }
          if (Cn && (Cg === "break" || Cg === "continue") && Cn.tryLoc <= CL && CL <= Cn.finallyLoc) {
            Cn = null;
          }
          var CE = Cn ? Cn.completion : {};
          CE.type = Cg;
          CE.arg = CL;
          if (Cn) {
            this.method = "next";
            this.next = Cn.finallyLoc;
            return B;
          } else {
            return this.complete(CE);
          }
        },
        complete: function (Cg, CL) {
          if (Cg.type === "throw") {
            throw Cg.arg;
          }
          if (Cg.type === "break" || Cg.type === "continue") {
            this.next = Cg.arg;
          } else if (Cg.type === "return") {
            this.rval = this.arg = Cg.arg;
            this.method = "return";
            this.next = "end";
          } else if (Cg.type === "normal" && CL) {
            this.next = CL;
          }
          return B;
        },
        finish: function (Cg) {
          for (var CL = this.tryEntries.length - 1; CL >= 0; --CL) {
            var CI = this.tryEntries[CL];
            if (CI.finallyLoc === Cg) {
              this.complete(CI.completion, CI.afterLoc);
              C8(CI);
              return B;
            }
          }
        },
        catch: function (Cg) {
          for (var CL = this.tryEntries.length - 1; CL >= 0; --CL) {
            var CI = this.tryEntries[CL];
            if (CI.tryLoc === Cg) {
              var Cf = CI.completion;
              if (Cf.type === "throw") {
                var Cn = Cf.arg;
                C8(CI);
              }
              return Cn;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (Cg, CL, CI) {
          this.delegate = {
            iterator: CC(Cg),
            resultName: CL,
            nextLoc: CI
          };
          if (this.method === "next") {
            this.arg = H;
          }
          return B;
        }
      };
      return exports;
    }(module.exports);
    try {
      regeneratorRuntime = L;
    } catch (I) {
      if (typeof globalThis == "object") {
        globalThis.regeneratorRuntime = L;
      } else {
        Function("r", "regeneratorRuntime = r")(L);
      }
    }
  },
  774: function (module, exports) {
    (function (exports) {
      'use strict';

      function throttle(K, m, k, H) {
        var timeoutId;
        var timeoutCleared = false;
        var v = 0;
        function clearTimeoutId() {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
        function stopTimeout() {
          clearTimeoutId();
          timeoutCleared = true;
        }
        function D() {
          for (var N = arguments.length, Y = new Array(N), w = 0; w < N; w++) {
            Y[w] = arguments[w];
          }
          var O = this;
          var W = Date.now() - v;
          function q() {
            v = Date.now();
            k.apply(O, Y);
          }
          function A() {
            timeoutId = undefined;
          }
          if (!timeoutCleared) {
            if (H && !timeoutId) {
              q();
            }
            clearTimeoutId();
            if (H === undefined && W > K) {
              q();
            } else if (m !== true) {
              timeoutId = setTimeout(H ? A : q, H === undefined ? K - W : K);
            }
          }
        }
        if (typeof m != "boolean") {
          H = k;
          k = m;
          m = undefined;
        }
        D.cancel = stopTimeout;
        return D;
      }
      function debounce(o, K, m) {
        if (m === undefined) {
          return throttle(o, K, false);
        } else {
          return throttle(o, m, K !== false);
        }
      }
      exports.debounce = debounce;
      exports.throttle = throttle;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    })(exports);
  },
  93: (module, exports, webpack_require) => {
    // msgpack
    'use strict';

    var textDecoder;
    var C4;
    var C5;
    webpack_require.d(exports, {
      sp: () => q0,
      kZ: () => r0,
      YI: () => r1,
      AG: () => WQ,
      jA: () => A4,
      VQ: () => AI,
      r: () => A2,
      Pe: () => Wz,
      j3: () => WF,
      vE: () => getNameFromCode,
      cF: () => AL,
      xf: () => getColorFromCode,
      vX: () => r5,
      tq: () => WT,
      cy: () => rX,
      wh: () => q7,
      x8: () => qM,
      _H: () => qD,
      $B: () => qZ,
      N1: () => qJ,
      br: () => connectedToGameServer,
      $v: () => A7,
      ae: () => qk,
      _t: () => qK,
      $b: () => rV,
      pR: () => onRecievedServers,
      lm: () => A5,
      FN: () => AE,
      P$: () => r3,
      cs: () => r4,
      mv: () => currentServerId,
      cb: () => serversList,
      b5: () => AC,
      Dk: () => A3,
      Rp: () => qW,
      gp: () => A6,
      PK: () => q8,
      PF: () => rL,
      TF: () => qO,
      Hc: () => setCurrentServerId,
      po: () => AV,
      aj: () => qI,
      Oq: () => A1,
      D5: () => A9,
      H8: () => qq
    });
    try {
      textDecoder = new TextDecoder();
    } catch (error) {}
    var C6 = 0;
    const C7 = [];
    var C8;
    var C9;
    var CC;
    var CV;
    var CL;
    var CI = C7;
    var CE = 0;
    var CK = {};
    var CH = 0;
    var CZ = 0;
    var CM = [];
    var CJ = {
      useRecords: false,
      mapsAsObjects: true
    };
    class CD {}
    const CN = new CD();
    CN.name = "MessagePack 0xC1";
    var CY;
    var CO;
    var CW;
    var Cq = false;
    var CA = 2;
    try {
      new Function("");
    } catch (AH) {
      CA = Infinity;
    }
    class CS {
      constructor(AZ) {
        if (AZ) {
          if (AZ.useRecords === false && AZ.mapsAsObjects === undefined) {
            AZ.mapsAsObjects = true;
          }
          if (AZ.sequential && AZ.trusted !== false) {
            AZ.trusted = true;
            if (!AZ.structures && AZ.useRecords != 0) {
              AZ.structures = [];
              AZ.maxSharedStructures ||= 0;
            }
          }
          if (AZ.structures) {
            AZ.structures.sharedLength = AZ.structures.length;
          } else if (AZ.getStructures) {
            (AZ.structures = []).uninitialized = true;
            AZ.structures.sharedLength = 0;
          }
          if (AZ.int64AsNumber) {
            AZ.int64AsType = "number";
          }
        }
        Object.assign(this, AZ);
      }
      unpack(AZ, AM) {
        if (C4) {
          return VE(() => {
            VK();
            if (this) {
              return this.unpack(AZ, AM);
            } else {
              return CS.prototype.unpack.call(CJ, AZ, AM);
            }
          });
        }
        if (typeof AM == "object") {
          C5 = AM.end || AZ.length;
          C6 = AM.start || 0;
        } else {
          C6 = 0;
          C5 = AM > -1 ? AM : AZ.length;
        }
        CE = 0;
        CZ = 0;
        C9 = null;
        CI = C7;
        CC = null;
        C4 = AZ;
        try {
          CL = AZ.dataView ||= new DataView(AZ.buffer, AZ.byteOffset, AZ.byteLength);
        } catch (AJ) {
          C4 = null;
          if (AZ instanceof Uint8Array) {
            throw AJ;
          }
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (AZ && typeof AZ == "object" ? AZ.constructor.name : typeof AZ));
        }
        if (this instanceof CS) {
          CK = this;
          if (this.structures) {
            C8 = this.structures;
            return CU(AM);
          }
          if (!C8 || C8.length > 0) {
            C8 = [];
          }
        } else {
          CK = CJ;
          if (!C8 || C8.length > 0) {
            C8 = [];
          }
        }
        return CU(AM);
      }
      unpackMultiple(AZ, AM) {
        let AJ;
        let AD = 0;
        try {
          Cq = true;
          let AN = AZ.length;
          let AY = this ? this.unpack(AZ, AN) : VH.unpack(AZ, AN);
          if (!AM) {
            for (AJ = [AY]; C6 < AN;) {
              AD = C6;
              AJ.push(CU());
            }
            return AJ;
          }
          for (AM(AY); C6 < AN;) {
            AD = C6;
            if (AM(CU()) === false) {
              return;
            }
          }
        } catch (AO) {
          AO.lastPosition = AD;
          AO.values = AJ;
          throw AO;
        } finally {
          Cq = false;
          VK();
        }
      }
      _mergeStructures(AZ, AM) {
        if (CO) {
          AZ = CO.call(this, AZ);
        }
        AZ = AZ || [];
        if (Object.isFrozen(AZ)) {
          AZ = AZ.map(AJ => AJ.slice(0));
        }
        for (let AJ = 0, AD = AZ.length; AJ < AD; AJ++) {
          let AN = AZ[AJ];
          if (AN) {
            AN.isShared = true;
            if (AJ >= 32) {
              AN.highByte = AJ - 32 >> 5;
            }
          }
        }
        AZ.sharedLength = AZ.length;
        for (let AY in AM || []) {
          if (AY >= 0) {
            let AO = AZ[AY];
            let AW = AM[AY];
            if (AW) {
              if (AO) {
                (AZ.restoreStructures ||= [])[AY] = AO;
              }
              AZ[AY] = AW;
            }
          }
        }
        return this.structures = AZ;
      }
      decode(AZ, AM) {
        return this.unpack(AZ, AM);
      }
    }
    function CU(AZ) {
      try {
        if (!CK.trusted && !Cq) {
          let AJ = C8.sharedLength || 0;
          if (AJ < C8.length) {
            C8.length = AJ;
          }
        }
        let AM;
        if (CK.randomAccessStructure && C4[C6] < 64 && C4[C6] >= 32 && CY) {
          AM = CY(C4, C6, C5, CK);
          C4 = null;
          if ((!AZ || !AZ.lazy) && !!AM) {
            AM = AM.toJSON();
          }
          C6 = C5;
        } else {
          AM = CR();
        }
        if (CC) {
          C6 = CC.postBundlePosition;
          CC = null;
        }
        if (C6 == C5) {
          if (C8 && C8.restoreStructures) {
            CP();
          }
          C8 = null;
          C4 = null;
          CV &&= null;
        } else {
          if (C6 > C5) {
            throw new Error("Unexpected end of MessagePack data");
          }
          if (!Cq) {
            throw new Error("Data read, but end of buffer not reached " + JSON.stringify(AM).slice(0, 100));
          }
        }
        return AM;
      } catch (AD) {
        if (C8 && C8.restoreStructures) {
          CP();
        }
        VK();
        if (AD instanceof RangeError || AD.message.startsWith("Unexpected end of buffer") || C6 > C5) {
          AD.incomplete = true;
        }
        throw AD;
      }
    }
    function CP() {
      for (let AZ in C8.restoreStructures) {
        C8[AZ] = C8.restoreStructures[AZ];
      }
      C8.restoreStructures = null;
    }
    function CR() {
      let AZ = C4[C6++];
      if (AZ < 160) {
        if (AZ < 128) {
          if (AZ < 64) {
            return AZ;
          }
          {
            let AM = C8[AZ & 63] || CK.getStructures && CT()[AZ & 63];
            if (AM) {
              AM.read ||= CB(AM, AZ & 63);
              return AM.read();
            } else {
              return AZ;
            }
          }
        }
        if (AZ < 144) {
          AZ -= 128;
          if (CK.mapsAsObjects) {
            let AJ = {};
            for (let AD = 0; AD < AZ; AD++) {
              let AN = VC();
              if (AN === "__proto__") {
                AN = "__proto_";
              }
              AJ[AN] = CR();
            }
            return AJ;
          }
          {
            let AY = new Map();
            for (let AO = 0; AO < AZ; AO++) {
              AY.set(CR(), CR());
            }
            return AY;
          }
        }
        {
          AZ -= 144;
          let AW = new Array(AZ);
          for (let Aq = 0; Aq < AZ; Aq++) {
            AW[Aq] = CR();
          }
          if (CK.freezeData) {
            return Object.freeze(AW);
          } else {
            return AW;
          }
        }
      }
      if (AZ < 192) {
        let AA = AZ - 160;
        if (CZ >= C6) {
          return C9.slice(C6 - CH, (C6 += AA) - CH);
        }
        if (CZ == 0 && C5 < 140) {
          let AS = AA < 16 ? V5(AA) : V4(AA);
          if (AS != null) {
            return AS;
          }
        }
        return CX(AA);
      }
      {
        let AU;
        switch (AZ) {
          case 192:
            return null;
          case 193:
            if (CC) {
              AU = CR();
              if (AU > 0) {
                return CC[1].slice(CC.position1, CC.position1 += AU);
              } else {
                return CC[0].slice(CC.position0, CC.position0 -= AU);
              }
            } else {
              return CN;
            }
          case 194:
            return false;
          case 195:
            return true;
          case 196:
            AU = C4[C6++];
            if (AU === undefined) {
              throw new Error("Unexpected end of buffer");
            }
            return V7(AU);
          case 197:
            AU = CL.getUint16(C6);
            C6 += 2;
            return V7(AU);
          case 198:
            AU = CL.getUint32(C6);
            C6 += 4;
            return V7(AU);
          case 199:
            return V8(C4[C6++]);
          case 200:
            AU = CL.getUint16(C6);
            C6 += 2;
            return V8(AU);
          case 201:
            AU = CL.getUint32(C6);
            C6 += 4;
            return V8(AU);
          case 202:
            AU = CL.getFloat32(C6);
            if (CK.useFloat32 > 2) {
              let AP = Vk[(C4[C6] & 127) << 1 | C4[C6 + 1] >> 7];
              C6 += 4;
              return (AP * AU + (AU > 0 ? 0.5 : -0.5) >> 0) / AP;
            }
            C6 += 4;
            return AU;
          case 203:
            AU = CL.getFloat64(C6);
            C6 += 8;
            return AU;
          case 204:
            return C4[C6++];
          case 205:
            AU = CL.getUint16(C6);
            C6 += 2;
            return AU;
          case 206:
            AU = CL.getUint32(C6);
            C6 += 4;
            return AU;
          case 207:
            if (CK.int64AsType === "number") {
              AU = CL.getUint32(C6) * 4294967296;
              AU += CL.getUint32(C6 + 4);
            } else {
              AU = CK.int64AsType === "string" ? CL.getBigUint64(C6).toString() : CL.getBigUint64(C6);
            }
            C6 += 8;
            return AU;
          case 208:
            return CL.getInt8(C6++);
          case 209:
            AU = CL.getInt16(C6);
            C6 += 2;
            return AU;
          case 210:
            AU = CL.getInt32(C6);
            C6 += 4;
            return AU;
          case 211:
            if (CK.int64AsType === "number") {
              AU = CL.getInt32(C6) * 4294967296;
              AU += CL.getUint32(C6 + 4);
            } else {
              AU = CK.int64AsType === "string" ? CL.getBigInt64(C6).toString() : CL.getBigInt64(C6);
            }
            C6 += 8;
            return AU;
          case 212:
            AU = C4[C6++];
            if (AU == 114) {
              return VV(C4[C6++] & 63);
            }
            {
              let AR = CM[AU];
              if (AR) {
                if (AR.read) {
                  C6++;
                  return AR.read(CR());
                } else if (AR.noBuffer) {
                  C6++;
                  return AR();
                } else {
                  return AR(C4.subarray(C6, ++C6));
                }
              }
              throw new Error("Unknown extension " + AU);
            }
          case 213:
            AU = C4[C6];
            if (AU == 114) {
              C6++;
              return VV(C4[C6++] & 63, C4[C6++]);
            } else {
              return V8(2);
            }
          case 214:
            return V8(4);
          case 215:
            return V8(8);
          case 216:
            return V8(16);
          case 217:
            AU = C4[C6++];
            if (CZ >= C6) {
              return C9.slice(C6 - CH, (C6 += AU) - CH);
            } else {
              return CF(AU);
            }
          case 218:
            AU = CL.getUint16(C6);
            if (CZ >= (C6 += 2)) {
              return C9.slice(C6 - CH, (C6 += AU) - CH);
            } else {
              return Cz(AU);
            }
          case 219:
            AU = CL.getUint32(C6);
            if (CZ >= (C6 += 4)) {
              return C9.slice(C6 - CH, (C6 += AU) - CH);
            } else {
              return Cj(AU);
            }
          case 220:
            AU = CL.getUint16(C6);
            C6 += 2;
            return V1(AU);
          case 221:
            AU = CL.getUint32(C6);
            C6 += 4;
            return V1(AU);
          case 222:
            AU = CL.getUint16(C6);
            C6 += 2;
            return V2(AU);
          case 223:
            AU = CL.getUint32(C6);
            C6 += 4;
            return V2(AU);
          default:
            if (AZ >= 224) {
              return AZ - 256;
            }
            if (AZ === undefined) {
              let AQ = new Error("Unexpected end of MessagePack data");
              AQ.incomplete = true;
              throw AQ;
            }
            throw new Error("Unknown MessagePack token " + AZ);
        }
      }
    }
    const CQ = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
    function CB(AZ, AM) {
      function AJ() {
        if (AJ.count++ > CA) {
          let AN = AZ.read = new Function("r", "return function(){return " + (CK.freezeData ? "Object.freeze" : "") + "({" + AZ.map(AY => AY === "__proto__" ? "__proto_:r()" : CQ.test(AY) ? AY + ":r()" : "[" + JSON.stringify(AY) + "]:r()").join(",") + "})}")(CR);
          if (AZ.highByte === 0) {
            AZ.read = CG(AM, AZ.read);
          }
          return AN();
        }
        let AD = {};
        for (let AY = 0, AO = AZ.length; AY < AO; AY++) {
          let AW = AZ[AY];
          if (AW === "__proto__") {
            AW = "__proto_";
          }
          AD[AW] = CR();
        }
        if (CK.freezeData) {
          return Object.freeze(AD);
        } else {
          return AD;
        }
      }
      AJ.count = 0;
      if (AZ.highByte === 0) {
        return CG(AM, AJ);
      } else {
        return AJ;
      }
    }
    const CG = (AZ, AM) => function () {
      let AJ = C4[C6++];
      if (AJ === 0) {
        return AM();
      }
      let AD = AZ < 32 ? -(AZ + (AJ << 5)) : AZ + (AJ << 5);
      let AN = C8[AD] || CT()[AD];
      if (!AN) {
        throw new Error("Record id is not defined for " + AD);
      }
      AN.read ||= CB(AN, AZ);
      return AN.read();
    };
    function CT() {
      let AZ = VE(() => {
        C4 = null;
        return CK.getStructures();
      });
      return C8 = CK._mergeStructures(AZ, C8);
    }
    var CX = V0;
    var CF = V0;
    var Cz = V0;
    var Cj = V0;
    function V0(AZ) {
      let AM;
      if (AZ < 16 && (AM = V5(AZ))) {
        return AM;
      }
      if (AZ > 64 && textDecoder) {
        return textDecoder.decode(C4.subarray(C6, C6 += AZ));
      }
      const AJ = C6 + AZ;
      const AD = [];
      for (AM = ""; C6 < AJ;) {
        const AN = C4[C6++];
        if ((AN & 128) == 0) {
          AD.push(AN);
        } else if ((AN & 224) == 192) {
          const AY = C4[C6++] & 63;
          AD.push((AN & 31) << 6 | AY);
        } else if ((AN & 240) == 224) {
          const AO = C4[C6++] & 63;
          const AW = C4[C6++] & 63;
          AD.push((AN & 31) << 12 | AO << 6 | AW);
        } else if ((AN & 248) == 240) {
          let Aq = (AN & 7) << 18 | (C4[C6++] & 63) << 12 | (C4[C6++] & 63) << 6 | C4[C6++] & 63;
          if (Aq > 65535) {
            Aq -= 65536;
            AD.push(Aq >>> 10 & 1023 | 55296);
            Aq = Aq & 1023 | 56320;
          }
          AD.push(Aq);
        } else {
          AD.push(AN);
        }
        if (AD.length >= 4096) {
          AM += V3.apply(String, AD);
          AD.length = 0;
        }
      }
      if (AD.length > 0) {
        AM += V3.apply(String, AD);
      }
      return AM;
    }
    function V1(AZ) {
      let AM = new Array(AZ);
      for (let AJ = 0; AJ < AZ; AJ++) {
        AM[AJ] = CR();
      }
      if (CK.freezeData) {
        return Object.freeze(AM);
      } else {
        return AM;
      }
    }
    function V2(AZ) {
      if (CK.mapsAsObjects) {
        let AM = {};
        for (let AJ = 0; AJ < AZ; AJ++) {
          let AD = VC();
          if (AD === "__proto__") {
            AD = "__proto_";
          }
          AM[AD] = CR();
        }
        return AM;
      }
      {
        let AN = new Map();
        for (let AY = 0; AY < AZ; AY++) {
          AN.set(CR(), CR());
        }
        return AN;
      }
    }
    var V3 = String.fromCharCode;
    function V4(AZ) {
      let AM = C6;
      let AJ = new Array(AZ);
      for (let AD = 0; AD < AZ; AD++) {
        const AN = C4[C6++];
        if ((AN & 128) > 0) {
          C6 = AM;
          return;
        }
        AJ[AD] = AN;
      }
      return V3.apply(String, AJ);
    }
    function V5(AZ) {
      if (AZ < 4) {
        if (AZ < 2) {
          if (AZ === 0) {
            return "";
          }
          {
            let AM = C4[C6++];
            if ((AM & 128) > 1) {
              C6 -= 1;
              return;
            } else {
              return V3(AM);
            }
          }
        }
        {
          let AJ = C4[C6++];
          let AD = C4[C6++];
          if ((AJ & 128) > 0 || (AD & 128) > 0) {
            C6 -= 2;
            return;
          }
          if (AZ < 3) {
            return V3(AJ, AD);
          }
          let AN = C4[C6++];
          if ((AN & 128) > 0) {
            C6 -= 3;
            return;
          } else {
            return V3(AJ, AD, AN);
          }
        }
      }
      {
        let AY = C4[C6++];
        let AO = C4[C6++];
        let AW = C4[C6++];
        let Aq = C4[C6++];
        if ((AY & 128) > 0 || (AO & 128) > 0 || (AW & 128) > 0 || (Aq & 128) > 0) {
          C6 -= 4;
          return;
        }
        if (AZ < 6) {
          if (AZ === 4) {
            return V3(AY, AO, AW, Aq);
          }
          {
            let AA = C4[C6++];
            if ((AA & 128) > 0) {
              C6 -= 5;
              return;
            } else {
              return V3(AY, AO, AW, Aq, AA);
            }
          }
        }
        if (AZ < 8) {
          let AS = C4[C6++];
          let AU = C4[C6++];
          if ((AS & 128) > 0 || (AU & 128) > 0) {
            C6 -= 6;
            return;
          }
          if (AZ < 7) {
            return V3(AY, AO, AW, Aq, AS, AU);
          }
          let AP = C4[C6++];
          if ((AP & 128) > 0) {
            C6 -= 7;
            return;
          } else {
            return V3(AY, AO, AW, Aq, AS, AU, AP);
          }
        }
        {
          let AR = C4[C6++];
          let AQ = C4[C6++];
          let AB = C4[C6++];
          let AG = C4[C6++];
          if ((AR & 128) > 0 || (AQ & 128) > 0 || (AB & 128) > 0 || (AG & 128) > 0) {
            C6 -= 8;
            return;
          }
          if (AZ < 10) {
            if (AZ === 8) {
              return V3(AY, AO, AW, Aq, AR, AQ, AB, AG);
            }
            {
              let AT = C4[C6++];
              if ((AT & 128) > 0) {
                C6 -= 9;
                return;
              } else {
                return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, AT);
              }
            }
          }
          if (AZ < 12) {
            let AX = C4[C6++];
            let AF = C4[C6++];
            if ((AX & 128) > 0 || (AF & 128) > 0) {
              C6 -= 10;
              return;
            }
            if (AZ < 11) {
              return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, AX, AF);
            }
            let Az = C4[C6++];
            if ((Az & 128) > 0) {
              C6 -= 11;
              return;
            } else {
              return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, AX, AF, Az);
            }
          }
          {
            let Aj = C4[C6++];
            let S0 = C4[C6++];
            let S1 = C4[C6++];
            let S2 = C4[C6++];
            if ((Aj & 128) > 0 || (S0 & 128) > 0 || (S1 & 128) > 0 || (S2 & 128) > 0) {
              C6 -= 12;
              return;
            }
            if (AZ < 14) {
              if (AZ === 12) {
                return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, Aj, S0, S1, S2);
              }
              {
                let S3 = C4[C6++];
                if ((S3 & 128) > 0) {
                  C6 -= 13;
                  return;
                } else {
                  return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, Aj, S0, S1, S2, S3);
                }
              }
            }
            {
              let S4 = C4[C6++];
              let S5 = C4[C6++];
              if ((S4 & 128) > 0 || (S5 & 128) > 0) {
                C6 -= 14;
                return;
              }
              if (AZ < 15) {
                return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, Aj, S0, S1, S2, S4, S5);
              }
              let S6 = C4[C6++];
              if ((S6 & 128) > 0) {
                C6 -= 15;
                return;
              } else {
                return V3(AY, AO, AW, Aq, AR, AQ, AB, AG, Aj, S0, S1, S2, S4, S5, S6);
              }
            }
          }
        }
      }
    }
    function V6() {
      let AZ;
      let AM = C4[C6++];
      if (AM < 192) {
        AZ = AM - 160;
      } else {
        switch (AM) {
          case 217:
            AZ = C4[C6++];
            break;
          case 218:
            AZ = CL.getUint16(C6);
            C6 += 2;
            break;
          case 219:
            AZ = CL.getUint32(C6);
            C6 += 4;
            break;
          default:
            throw new Error("Expected string");
        }
      }
      return V0(AZ);
    }
    function V7(AZ) {
      if (CK.copyBuffers) {
        return Uint8Array.prototype.slice.call(C4, C6, C6 += AZ);
      } else {
        return C4.subarray(C6, C6 += AZ);
      }
    }
    function V8(AZ) {
      let AM = C4[C6++];
      if (CM[AM]) {
        let AJ;
        return CM[AM](C4.subarray(C6, AJ = C6 += AZ), AD => {
          C6 = AD;
          try {
            return CR();
          } finally {
            C6 = AJ;
          }
        });
      }
      throw new Error("Unknown extension type " + AM);
    }
    var V9 = new Array(4096);
    function VC() {
      let AZ = C4[C6++];
      if (!(AZ >= 160) || !(AZ < 192)) {
        C6--;
        return CR().toString();
      }
      AZ -= 160;
      if (CZ >= C6) {
        return C9.slice(C6 - CH, (C6 += AZ) - CH);
      }
      if (CZ != 0 || !(C5 < 180)) {
        return CX(AZ);
      }
      let AM;
      let AJ = (AZ << 5 ^ (AZ > 1 ? CL.getUint16(C6) : AZ > 0 ? C4[C6] : 0)) & 4095;
      let AD = V9[AJ];
      let AN = C6;
      let AY = C6 + AZ - 3;
      let AO = 0;
      if (AD && AD.bytes == AZ) {
        while (AN < AY) {
          AM = CL.getUint32(AN);
          if (AM != AD[AO++]) {
            AN = 1879048192;
            break;
          }
          AN += 4;
        }
        for (AY += 3; AN < AY;) {
          AM = C4[AN++];
          if (AM != AD[AO++]) {
            AN = 1879048192;
            break;
          }
        }
        if (AN === AY) {
          C6 = AN;
          return AD.string;
        }
        AY -= 3;
        AN = C6;
      }
      AD = [];
      V9[AJ] = AD;
      AD.bytes = AZ;
      while (AN < AY) {
        AM = CL.getUint32(AN);
        AD.push(AM);
        AN += 4;
      }
      for (AY += 3; AN < AY;) {
        AM = C4[AN++];
        AD.push(AM);
      }
      let AW = AZ < 16 ? V5(AZ) : V4(AZ);
      return AD.string = AW ?? CX(AZ);
    }
    const VV = (AZ, AM) => {
      let AJ = CR().map(AY => AY.toString());
      let AD = AZ;
      if (AM !== undefined) {
        AZ = AZ < 32 ? -((AM << 5) + AZ) : (AM << 5) + AZ;
        AJ.highByte = AM;
      }
      let AN = C8[AZ];
      if (AN && AN.isShared) {
        (C8.restoreStructures ||= [])[AZ] = AN;
      }
      C8[AZ] = AJ;
      AJ.read = CB(AJ, AD);
      return AJ.read();
    };
    CM[0] = () => {};
    CM[0].noBuffer = true;
    CM[101] = () => {
      let AZ = CR();
      return (globalThis[AZ[0]] || Error)(AZ[1]);
    };
    CM[105] = AZ => {
      let AM = CL.getUint32(C6 - 4);
      CV ||= new Map();
      let AJ;
      let AD = C4[C6];
      AJ = AD >= 144 && AD < 160 || AD == 220 || AD == 221 ? [] : {};
      let AN = {
        target: AJ
      };
      CV.set(AM, AN);
      let AY = CR();
      if (AN.used) {
        return Object.assign(AJ, AY);
      } else {
        AN.target = AY;
        return AY;
      }
    };
    CM[112] = AZ => {
      let AM = CL.getUint32(C6 - 4);
      let AJ = CV.get(AM);
      AJ.used = true;
      return AJ.target;
    };
    CM[115] = () => new Set(CR());
    const VL = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map(AZ => AZ + "Array");
    CM[116] = AZ => {
      let AM = AZ[0];
      let AJ = VL[AM];
      if (!AJ) {
        throw new Error("Could not find typed array for code " + AM);
      }
      return new globalThis[AJ](Uint8Array.prototype.slice.call(AZ, 1).buffer);
    };
    CM[120] = () => {
      let AZ = CR();
      return new RegExp(AZ[0], AZ[1]);
    };
    const VI = [];
    function VE(AZ) {
      if (CW) {
        CW();
      }
      let AM = C5;
      let AJ = C6;
      let AD = CE;
      let AN = CH;
      let AY = CZ;
      let AO = C9;
      let AW = CI;
      let Aq = CV;
      let AA = CC;
      let AS = new Uint8Array(C4.slice(0, C5));
      let AU = C8;
      let AP = C8.slice(0, C8.length);
      let AR = CK;
      let AQ = Cq;
      let AB = AZ();
      C5 = AM;
      C6 = AJ;
      CE = AD;
      CH = AN;
      CZ = AY;
      C9 = AO;
      CI = AW;
      CV = Aq;
      CC = AA;
      C4 = AS;
      Cq = AQ;
      (C8 = AU).splice(0, C8.length, ...AP);
      CK = AR;
      CL = new DataView(C4.buffer, C4.byteOffset, C4.byteLength);
      return AB;
    }
    function VK() {
      C4 = null;
      CV = null;
      C8 = null;
    }
    CM[98] = AZ => {
      let AM = (AZ[0] << 24) + (AZ[1] << 16) + (AZ[2] << 8) + AZ[3];
      let AJ = C6;
      C6 += AM - AZ.length;
      CC = VI;
      (CC = [V6(), V6()]).position0 = 0;
      CC.position1 = 0;
      CC.postBundlePosition = C6;
      C6 = AJ;
      return CR();
    };
    CM[255] = AZ => AZ.length == 4 ? new Date((AZ[0] * 16777216 + (AZ[1] << 16) + (AZ[2] << 8) + AZ[3]) * 1000) : AZ.length == 8 ? new Date(((AZ[0] << 22) + (AZ[1] << 14) + (AZ[2] << 6) + (AZ[3] >> 2)) / 1000000 + ((AZ[3] & 3) * 4294967296 + AZ[4] * 16777216 + (AZ[5] << 16) + (AZ[6] << 8) + AZ[7]) * 1000) : AZ.length == 12 ? new Date(((AZ[0] << 24) + (AZ[1] << 16) + (AZ[2] << 8) + AZ[3]) / 1000000 + ((AZ[4] & 128 ? -281474976710656 : 0) + AZ[6] * 1099511627776 + AZ[7] * 4294967296 + AZ[8] * 16777216 + (AZ[9] << 16) + (AZ[10] << 8) + AZ[11]) * 1000) : new Date("invalid");
    const Vk = new Array(147);
    for (let AZ = 0; AZ < 256; AZ++) {
      Vk[AZ] = +("1e" + Math.floor(45.15 - AZ * 0.30103));
    }
    var VH = new CS({
      useRecords: false
    });
    VH.unpack;
    VH.unpackMultiple;
    VH.unpack;
    let VZ;
    let VM;
    let VJ;
    let VD = new Float32Array(1);
    new Uint8Array(VD.buffer, 0, 4);
    try {
      VZ = new TextEncoder();
    } catch (AM) {}
    const VN = typeof Buffer != "undefined";
    const VY = VN ? function (AJ) {
      return Buffer.allocUnsafeSlow(AJ);
    } : Uint8Array;
    const VO = VN ? Buffer : Uint8Array;
    const VW = VN ? 4294967296 : 2144337920;
    let Vq;
    let VA;
    let VS;
    let VU;
    let VP;
    let VR = 0;
    let VQ = null;
    const VB = /[\u0080-\uFFFF]/;
    const VG = Symbol("record-id");
    class VT extends CS {
      constructor(AJ) {
        let AD;
        let AN;
        let AY;
        let AO;
        super(AJ);
        this.offset = 0;
        let AW = VO.prototype.utf8Write ? function (S4, S5) {
          return Vq.utf8Write(S4, S5, 4294967295);
        } : !!VZ && !!VZ.encodeInto && function (S4, S5) {
          return VZ.encodeInto(S4, Vq.subarray(S5)).written;
        };
        let Aq = this;
        AJ ||= {};
        let AA = AJ && AJ.sequential;
        let AS = AJ.structures || AJ.saveStructures;
        let AU = AJ.maxSharedStructures;
        if (AU == null) {
          AU = AS ? 32 : 0;
        }
        if (AU > 8160) {
          throw new Error("Maximum maxSharedStructure is 8160");
        }
        if (AJ.structuredClone && AJ.moreTypes == null) {
          AJ.moreTypes = true;
        }
        let AP = AJ.maxOwnStructures;
        if (AP == null) {
          AP = AS ? 32 : 64;
        }
        if (!this.structures && AJ.useRecords != 0) {
          this.structures = [];
        }
        let AR = AU > 32 || AP + AU > 64;
        let AQ = AU + 64;
        let AB = AU + AP + 64;
        if (AB > 8256) {
          throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        }
        let AG = [];
        let AT = 0;
        let AX = 0;
        this.pack = this.encode = function (S4, S5) {
          if (!Vq) {
            Vq = new VY(8192);
            VS = Vq.dataView ||= new DataView(Vq.buffer, 0, 8192);
            VR = 0;
          }
          VU = Vq.length - 10;
          if (VU - VR < 2048) {
            Vq = new VY(Vq.length);
            VS = Vq.dataView ||= new DataView(Vq.buffer, 0, Vq.length);
            VU = Vq.length - 10;
            VR = 0;
          } else {
            VR = VR + 7 & 2147483640;
          }
          AD = VR;
          AO = Aq.structuredClone ? new Map() : null;
          if (Aq.bundleStrings && typeof S4 != "string") {
            VQ = [];
            VQ.size = Infinity;
          } else {
            VQ = null;
          }
          AY = Aq.structures;
          if (AY) {
            if (AY.uninitialized) {
              AY = Aq._mergeStructures(Aq.getStructures());
            }
            let S6 = AY.sharedLength || 0;
            if (S6 > AU) {
              throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + AY.sharedLength);
            }
            if (!AY.transitions) {
              AY.transitions = Object.create(null);
              for (let S7 = 0; S7 < S6; S7++) {
                let S8 = AY[S7];
                if (!S8) {
                  continue;
                }
                let S9;
                let SC = AY.transitions;
                for (let SV = 0, SL = S8.length; SV < SL; SV++) {
                  let SI = S8[SV];
                  S9 = SC[SI];
                  S9 ||= SC[SI] = Object.create(null);
                  SC = S9;
                }
                SC[VG] = S7 + 64;
              }
              this.lastNamedStructuresLength = S6;
            }
            if (!AA) {
              AY.nextId = S6 + 64;
            }
          }
          AN &&= false;
          try {
            if (Aq.randomAccessStructure && S4.constructor && S4.constructor === Object) {
              S3(S4);
            } else {
              Az(S4);
            }
            let SE = VQ;
            if (VQ) {
              Vj(AD, Az, 0);
            }
            if (AO && AO.idsToInsert) {
              let SK = AO.idsToInsert.sort((SJ, SD) => SJ.offset > SD.offset ? 1 : -1);
              let SH = SK.length;
              let SZ = -1;
              while (SE && SH > 0) {
                let SJ = SK[--SH].offset + AD;
                if (SJ < SE.stringsPosition + AD && SZ === -1) {
                  SZ = 0;
                }
                if (SJ > SE.position + AD) {
                  if (SZ >= 0) {
                    SZ += 6;
                  }
                } else {
                  if (SZ >= 0) {
                    VS.setUint32(SE.position + AD, VS.getUint32(SE.position + AD) + SZ);
                    SZ = -1;
                  }
                  SE = SE.previous;
                  SH++;
                }
              }
              if (SZ >= 0 && SE) {
                VS.setUint32(SE.position + AD, VS.getUint32(SE.position + AD) + SZ);
              }
              VR += SK.length * 6;
              if (VR > VU) {
                S0(VR);
              }
              Aq.offset = VR;
              let SM = function (SD, SN) {
                let SY;
                let SO = SN.length * 6;
                let SW = SD.length - SO;
                while (SY = SN.pop()) {
                  let Sq = SY.offset;
                  let SA = SY.id;
                  SD.copyWithin(Sq + SO, Sq, SW);
                  SO -= 6;
                  let SS = Sq + SO;
                  SD[SS++] = 214;
                  SD[SS++] = 105;
                  SD[SS++] = SA >> 24;
                  SD[SS++] = SA >> 16 & 255;
                  SD[SS++] = SA >> 8 & 255;
                  SD[SS++] = SA & 255;
                  SW = Sq;
                }
                return SD;
              }(Vq.subarray(AD, VR), SK);
              AO = null;
              return SM;
            }
            Aq.offset = VR;
            if (S5 & i6) {
              Vq.start = AD;
              Vq.end = VR;
              return Vq;
            } else {
              return Vq.subarray(AD, VR);
            }
          } finally {
            if (AY) {
              if (AX < 10) {
                AX++;
              }
              let SD = AY.sharedLength || 0;
              if (AY.length > SD) {
                AY.length = SD;
              }
              if (AT > 10000) {
                AY.transitions = null;
                AX = 0;
                AT = 0;
                if (AG.length > 0) {
                  AG = [];
                }
              } else if (AG.length > 0 && !AA) {
                for (let SN = 0, SY = AG.length; SN < SY; SN++) {
                  AG[SN][VG] = 0;
                }
                AG = [];
              }
              if (AN && Aq.saveStructures) {
                let SO = Vq.subarray(AD, VR);
                let SW = i0(AY, Aq);
                if (Aq.saveStructures(SW, SW.isCompatible) === false) {
                  return Aq.pack(S4);
                } else {
                  Aq.lastNamedStructuresLength = SD;
                  return SO;
                }
              }
            }
            if (S5 & i7) {
              VR = AD;
            }
          }
        };
        const AF = S4 => {
          var S5 = S4.length;
          if (S5 < 16) {
            Vq[VR++] = S5 | 144;
          } else if (S5 < 65536) {
            Vq[VR++] = 220;
            Vq[VR++] = S5 >> 8;
            Vq[VR++] = S5 & 255;
          } else {
            Vq[VR++] = 221;
            VS.setUint32(VR, S5);
            VR += 4;
          }
          for (let S6 = 0; S6 < S5; S6++) {
            Az(S4[S6]);
          }
        };
        const Az = S4 => {
          if (VR > VU) {
            Vq = S0(VR);
          }
          var S5;
          var S6 = typeof S4;
          if (S6 === "string") {
            let S7;
            let S8 = S4.length;
            if (VQ && S8 >= 4 && S8 < 4096) {
              if ((VQ.size += S8) > 61440) {
                let SV;
                let SL;
                let SI = (VQ[0] ? VQ[0].length * 3 + VQ[1].length : 0) + 10;
                if (VR + SI > VU) {
                  Vq = S0(VR + SI);
                }
                if (VQ.position) {
                  SL = VQ;
                  Vq[VR] = 200;
                  VR += 3;
                  Vq[VR++] = 98;
                  SV = VR - AD;
                  VR += 4;
                  Vj(AD, Az, 0);
                  VS.setUint16(SV + AD - 3, VR - AD - SV);
                } else {
                  Vq[VR++] = 214;
                  Vq[VR++] = 98;
                  SV = VR - AD;
                  VR += 4;
                }
                VQ = ["", ""];
                VQ.previous = SL;
                VQ.size = 0;
                VQ.position = SV;
              }
              let SC = VB.test(S4);
              VQ[SC ? 0 : 1] += S4;
              Vq[VR++] = 193;
              Az(SC ? -S8 : S8);
              return;
            }
            S7 = S8 < 32 ? 1 : S8 < 256 ? 2 : S8 < 65536 ? 3 : 5;
            let S9 = S8 * 3;
            if (VR + S9 > VU) {
              Vq = S0(VR + S9);
            }
            if (S8 < 64 || !AW) {
              let SE;
              let SK;
              let SH;
              let SZ = VR + S7;
              for (SE = 0; SE < S8; SE++) {
                SK = S4.charCodeAt(SE);
                if (SK < 128) {
                  Vq[SZ++] = SK;
                } else if (SK < 2048) {
                  Vq[SZ++] = SK >> 6 | 192;
                  Vq[SZ++] = SK & 63 | 128;
                } else if ((SK & 64512) == 55296 && ((SH = S4.charCodeAt(SE + 1)) & 64512) == 56320) {
                  SK = 65536 + ((SK & 1023) << 10) + (SH & 1023);
                  SE++;
                  Vq[SZ++] = SK >> 18 | 240;
                  Vq[SZ++] = SK >> 12 & 63 | 128;
                  Vq[SZ++] = SK >> 6 & 63 | 128;
                  Vq[SZ++] = SK & 63 | 128;
                } else {
                  Vq[SZ++] = SK >> 12 | 224;
                  Vq[SZ++] = SK >> 6 & 63 | 128;
                  Vq[SZ++] = SK & 63 | 128;
                }
              }
              S5 = SZ - VR - S7;
            } else {
              S5 = AW(S4, VR + S7);
            }
            if (S5 < 32) {
              Vq[VR++] = S5 | 160;
            } else if (S5 < 256) {
              if (S7 < 2) {
                Vq.copyWithin(VR + 2, VR + 1, VR + 1 + S5);
              }
              Vq[VR++] = 217;
              Vq[VR++] = S5;
            } else if (S5 < 65536) {
              if (S7 < 3) {
                Vq.copyWithin(VR + 3, VR + 2, VR + 2 + S5);
              }
              Vq[VR++] = 218;
              Vq[VR++] = S5 >> 8;
              Vq[VR++] = S5 & 255;
            } else {
              if (S7 < 5) {
                Vq.copyWithin(VR + 5, VR + 3, VR + 3 + S5);
              }
              Vq[VR++] = 219;
              VS.setUint32(VR, S5);
              VR += 4;
            }
            VR += S5;
          } else if (S6 === "number") {
            if (S4 >>> 0 === S4) {
              if (S4 < 32 || S4 < 128 && this.useRecords === false || S4 < 64 && !this.randomAccessStructure) {
                Vq[VR++] = S4;
              } else if (S4 < 256) {
                Vq[VR++] = 204;
                Vq[VR++] = S4;
              } else if (S4 < 65536) {
                Vq[VR++] = 205;
                Vq[VR++] = S4 >> 8;
                Vq[VR++] = S4 & 255;
              } else {
                Vq[VR++] = 206;
                VS.setUint32(VR, S4);
                VR += 4;
              }
            } else if (S4 >> 0 === S4) {
              if (S4 >= -32) {
                Vq[VR++] = 256 + S4;
              } else if (S4 >= -128) {
                Vq[VR++] = 208;
                Vq[VR++] = S4 + 256;
              } else if (S4 >= -32768) {
                Vq[VR++] = 209;
                VS.setInt16(VR, S4);
                VR += 2;
              } else {
                Vq[VR++] = 210;
                VS.setInt32(VR, S4);
                VR += 4;
              }
            } else {
              let SM;
              if ((SM = this.useFloat32) > 0 && S4 < 4294967296 && S4 >= -2147483648) {
                let SJ;
                Vq[VR++] = 202;
                VS.setFloat32(VR, S4);
                if (SM < 4 || (SJ = S4 * Vk[(Vq[VR] & 127) << 1 | Vq[VR + 1] >> 7]) >> 0 === SJ) {
                  VR += 4;
                  return;
                }
                VR--;
              }
              Vq[VR++] = 203;
              VS.setFloat64(VR, S4);
              VR += 8;
            }
          } else if (S6 === "object") {
            if (S4) {
              if (AO) {
                let SN = AO.get(S4);
                if (SN) {
                  if (!SN.id) {
                    let SY = AO.idsToInsert ||= [];
                    SN.id = SY.push(SN);
                  }
                  Vq[VR++] = 214;
                  Vq[VR++] = 112;
                  VS.setUint32(VR, SN.id);
                  VR += 4;
                  return;
                }
                AO.set(S4, {
                  offset: VR - AD
                });
              }
              let SD = S4.constructor;
              if (SD === Object) {
                Aj(S4, true);
              } else if (SD === Array) {
                AF(S4);
              } else if (SD === Map) {
                if ((S5 = S4.size) < 16) {
                  Vq[VR++] = S5 | 128;
                } else if (S5 < 65536) {
                  Vq[VR++] = 222;
                  Vq[VR++] = S5 >> 8;
                  Vq[VR++] = S5 & 255;
                } else {
                  Vq[VR++] = 223;
                  VS.setUint32(VR, S5);
                  VR += 4;
                }
                for (let [SO, SW] of S4) {
                  Az(SO);
                  Az(SW);
                }
              } else {
                for (let Sq = 0, SA = VM.length; Sq < SA; Sq++) {
                  if (S4 instanceof VJ[Sq]) {
                    let SS = VM[Sq];
                    if (SS.write) {
                      if (SS.type) {
                        Vq[VR++] = 212;
                        Vq[VR++] = SS.type;
                        Vq[VR++] = 0;
                      }
                      let SB = SS.write.call(this, S4);
                      if (SB === S4) {
                        if (Array.isArray(S4)) {
                          AF(S4);
                        } else {
                          Aj(S4);
                        }
                      } else {
                        Az(SB);
                      }
                      return;
                    }
                    let SU;
                    let SP = Vq;
                    let SR = VS;
                    let SQ = VR;
                    Vq = null;
                    try {
                      SU = SS.pack.call(this, S4, SG => {
                        Vq = SP;
                        SP = null;
                        VR += SG;
                        if (VR > VU) {
                          S0(VR);
                        }
                        return {
                          target: Vq,
                          targetView: VS,
                          position: VR - SG
                        };
                      }, Az);
                    } finally {
                      if (SP) {
                        Vq = SP;
                        VS = SR;
                        VR = SQ;
                        VU = Vq.length - 10;
                      }
                    }
                    if (SU) {
                      if (SU.length + VR > VU) {
                        S0(SU.length + VR);
                      }
                      VR = Vz(SU, Vq, VR, SS.type);
                    }
                    return;
                  }
                }
                if (Array.isArray(S4)) {
                  AF(S4);
                } else {
                  Aj(S4, !S4.hasOwnProperty);
                }
              }
            } else {
              Vq[VR++] = 192;
            }
          } else if (S6 === "boolean") {
            Vq[VR++] = S4 ? 195 : 194;
          } else if (S6 === "bigint") {
            if (S4 < BigInt(1) << BigInt(63) && S4 >= -(BigInt(1) << BigInt(63))) {
              Vq[VR++] = 211;
              VS.setBigInt64(VR, S4);
            } else if (S4 < BigInt(1) << BigInt(64) && S4 > 0) {
              Vq[VR++] = 207;
              VS.setBigUint64(VR, S4);
            } else {
              if (!this.largeBigIntToFloat) {
                throw new RangeError(S4 + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");
              }
              Vq[VR++] = 203;
              VS.setFloat64(VR, Number(S4));
            }
            VR += 8;
          } else if (S6 === "undefined") {
            if (this.encodeUndefinedAsNil) {
              Vq[VR++] = 192;
            } else {
              Vq[VR++] = 212;
              Vq[VR++] = 0;
              Vq[VR++] = 0;
            }
          } else {
            if (S6 !== "function") {
              throw new Error("Unknown type: " + S6);
            }
            Az(this.writeFunction && this.writeFunction());
          }
        };
        const Aj = this.useRecords === false ? this.variableMapSize ? S4 => {
          let S5;
          let S6 = Object.keys(S4);
          let S7 = S6.length;
          if (S7 < 16) {
            Vq[VR++] = S7 | 128;
          } else if (S7 < 65536) {
            Vq[VR++] = 222;
            Vq[VR++] = S7 >> 8;
            Vq[VR++] = S7 & 255;
          } else {
            Vq[VR++] = 223;
            VS.setUint32(VR, S7);
            VR += 4;
          }
          for (let S8 = 0; S8 < S7; S8++) {
            Az(S5 = S6[S8]);
            Az(S4[S5]);
          }
        } : (S4, S5) => {
          Vq[VR++] = 222;
          let S6 = VR - AD;
          VR += 2;
          let S7 = 0;
          for (let S8 in S4) {
            if (S5 || S4.hasOwnProperty(S8)) {
              Az(S8);
              Az(S4[S8]);
              S7++;
            }
          }
          Vq[S6++ + AD] = S7 >> 8;
          Vq[S6 + AD] = S7 & 255;
        } : AJ.progressiveRecords && !AR ? (S4, S5) => {
          let S6;
          let S7;
          let S8 = AY.transitions ||= Object.create(null);
          let S9 = VR++ - AD;
          for (let SC in S4) {
            if (S5 || S4.hasOwnProperty(SC)) {
              S6 = S8[SC];
              if (S6) {
                S8 = S6;
              } else {
                let SV = Object.keys(S4);
                let SL = S8;
                S8 = AY.transitions;
                let SI = 0;
                for (let SE = 0, SK = SV.length; SE < SK; SE++) {
                  let SH = SV[SE];
                  S6 = S8[SH];
                  if (!S6) {
                    S6 = S8[SH] = Object.create(null);
                    SI++;
                  }
                  S8 = S6;
                }
                if (S9 + AD + 1 == VR) {
                  VR--;
                  S1(S8, SV, SI);
                } else {
                  S2(S8, SV, S9, SI);
                }
                S7 = true;
                S8 = SL[SC];
              }
              Az(S4[SC]);
            }
          }
          if (!S7) {
            let SZ = S8[VG];
            if (SZ) {
              Vq[S9 + AD] = SZ;
            } else {
              S2(S8, Object.keys(S4), S9, 0);
            }
          }
        } : (S4, S5) => {
          let S6;
          let S7 = AY.transitions ||= Object.create(null);
          let S8 = 0;
          for (let SC in S4) {
            if (S5 || S4.hasOwnProperty(SC)) {
              S6 = S7[SC];
              if (!S6) {
                S6 = S7[SC] = Object.create(null);
                S8++;
              }
              S7 = S6;
            }
          }
          let S9 = S7[VG];
          if (S9) {
            if (S9 >= 96 && AR) {
              Vq[VR++] = 96 + ((S9 -= 96) & 31);
              Vq[VR++] = S9 >> 5;
            } else {
              Vq[VR++] = S9;
            }
          } else {
            S1(S7, S7.__keys__ || Object.keys(S4), S8);
          }
          for (let SV in S4) {
            if (S5 || S4.hasOwnProperty(SV)) {
              Az(S4[SV]);
            }
          }
        };
        const S0 = S4 => {
          let S5;
          if (S4 > 16777216) {
            if (S4 - AD > VW) {
              throw new Error("Packed buffer would be larger than maximum buffer size");
            }
            S5 = Math.min(VW, Math.round(Math.max((S4 - AD) * (S4 > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096);
          } else {
            S5 = 1 + (Math.max(S4 - AD << 2, Vq.length - 1) >> 12) << 12;
          }
          let S6 = new VY(S5);
          VS = S6.dataView ||= new DataView(S6.buffer, 0, S5);
          S4 = Math.min(S4, Vq.length);
          if (Vq.copy) {
            Vq.copy(S6, 0, AD, S4);
          } else {
            S6.set(Vq.slice(AD, S4));
          }
          VR -= AD;
          AD = 0;
          VU = S6.length - 10;
          return Vq = S6;
        };
        const S1 = (S4, S5, S6) => {
          let S7 = AY.nextId;
          S7 ||= 64;
          if (S7 < AQ && this.shouldShareStructure && !this.shouldShareStructure(S5)) {
            S7 = AY.nextOwnId;
            if (!(S7 < AB)) {
              S7 = AQ;
            }
            AY.nextOwnId = S7 + 1;
          } else {
            if (S7 >= AB) {
              S7 = AQ;
            }
            AY.nextId = S7 + 1;
          }
          let S8 = S5.highByte = S7 >= 96 && AR ? S7 - 96 >> 5 : -1;
          S4[VG] = S7;
          S4.__keys__ = S5;
          AY[S7 - 64] = S5;
          if (S7 < AQ) {
            S5.isShared = true;
            AY.sharedLength = S7 - 63;
            AN = true;
            if (S8 >= 0) {
              Vq[VR++] = 96 + (S7 & 31);
              Vq[VR++] = S8;
            } else {
              Vq[VR++] = S7;
            }
          } else {
            if (S8 >= 0) {
              Vq[VR++] = 213;
              Vq[VR++] = 114;
              Vq[VR++] = 96 + (S7 & 31);
              Vq[VR++] = S8;
            } else {
              Vq[VR++] = 212;
              Vq[VR++] = 114;
              Vq[VR++] = S7;
            }
            if (S6) {
              AT += AX * S6;
            }
            if (AG.length >= AP) {
              AG.shift()[VG] = 0;
            }
            AG.push(S4);
            Az(S5);
          }
        };
        const S2 = (S4, S5, S6, S7) => {
          let S8 = Vq;
          let S9 = VR;
          let SC = VU;
          let SV = AD;
          Vq = VA;
          VR = 0;
          AD = 0;
          if (!Vq) {
            VA = Vq = new VY(8192);
          }
          VU = Vq.length - 10;
          S1(S4, S5, S7);
          VA = Vq;
          let SL = VR;
          Vq = S8;
          VR = S9;
          VU = SC;
          AD = SV;
          if (SL > 1) {
            let SI = VR + SL - 1;
            if (SI > VU) {
              S0(SI);
            }
            let SE = S6 + AD;
            Vq.copyWithin(SE + SL, SE + 1, VR);
            Vq.set(VA.slice(0, SL), SE);
            VR = SI;
          } else {
            Vq[S6 + AD] = VA[0];
          }
        };
        const S3 = (S4, S5) => {
          let S6 = VP(S4, Vq, VR, AY, S0, (S7, S8, S9) => {
            if (S9) {
              return AN = true;
            }
            VR = S8;
            if (AD > 0) {
              Az(S7);
              if (AD == 0) {
                return {
                  position: VR,
                  targetView: VS,
                  target: Vq
                };
              }
            } else {
              Az(S7);
            }
            return VR;
          }, this);
          if (S6 === 0) {
            return Aj(S4, true);
          }
          VR = S6;
        };
      }
      useBuffer(AJ) {
        Vq = AJ;
        VS = new DataView(Vq.buffer, Vq.byteOffset, Vq.byteLength);
        VR = 0;
      }
      clearSharedData() {
        this.structures &&= [];
        this.typedStructs &&= [];
      }
    }
    function VX(AJ, AD, AN, AY) {
      let AO = AJ.byteLength;
      if (AO + 1 < 256) {
        var {
          target: AW,
          position: Aq
        } = AN(4 + AO);
        AW[Aq++] = 199;
        AW[Aq++] = AO + 1;
      } else if (AO + 1 < 65536) {
        var {
          target: AW,
          position: Aq
        } = AN(5 + AO);
        AW[Aq++] = 200;
        AW[Aq++] = AO + 1 >> 8;
        AW[Aq++] = AO + 1 & 255;
      } else {
        var {
          target: AW,
          position: Aq,
          targetView: AA
        } = AN(7 + AO);
        AW[Aq++] = 201;
        AA.setUint32(Aq, AO + 1);
        Aq += 4;
      }
      AW[Aq++] = 116;
      AW[Aq++] = AD;
      AW.set(new Uint8Array(AJ.buffer, AJ.byteOffset, AJ.byteLength), Aq);
    }
    function VF(AJ, AD) {
      let AN = AJ.byteLength;
      var AY;
      var AO;
      if (AN < 256) {
        var {
          target: AY,
          position: AO
        } = AD(AN + 2);
        AY[AO++] = 196;
        AY[AO++] = AN;
      } else if (AN < 65536) {
        var {
          target: AY,
          position: AO
        } = AD(AN + 3);
        AY[AO++] = 197;
        AY[AO++] = AN >> 8;
        AY[AO++] = AN & 255;
      } else {
        var {
          target: AY,
          position: AO,
          targetView: AW
        } = AD(AN + 5);
        AY[AO++] = 198;
        AW.setUint32(AO, AN);
        AO += 4;
      }
      AY.set(AJ, AO);
    }
    function Vz(AJ, AD, AN, AY) {
      let AO = AJ.length;
      switch (AO) {
        case 1:
          AD[AN++] = 212;
          break;
        case 2:
          AD[AN++] = 213;
          break;
        case 4:
          AD[AN++] = 214;
          break;
        case 8:
          AD[AN++] = 215;
          break;
        case 16:
          AD[AN++] = 216;
          break;
        default:
          if (AO < 256) {
            AD[AN++] = 199;
            AD[AN++] = AO;
          } else if (AO < 65536) {
            AD[AN++] = 200;
            AD[AN++] = AO >> 8;
            AD[AN++] = AO & 255;
          } else {
            AD[AN++] = 201;
            AD[AN++] = AO >> 24;
            AD[AN++] = AO >> 16 & 255;
            AD[AN++] = AO >> 8 & 255;
            AD[AN++] = AO & 255;
          }
      }
      AD[AN++] = AY;
      AD.set(AJ, AN);
      return AN += AO;
    }
    function Vj(AJ, AD, AN) {
      if (VQ.length > 0) {
        VS.setUint32(VQ.position + AJ, VR + AN - VQ.position - AJ);
        VQ.stringsPosition = VR - AJ;
        let AY = VQ;
        VQ = null;
        AD(AY[0]);
        AD(AY[1]);
      }
    }
    function i0(AJ, AD) {
      AJ.isCompatible = AN => {
        let AY = !AN || (AD.lastNamedStructuresLength || 0) === AN.length;
        if (!AY) {
          AD._mergeStructures(AN);
        }
        return AY;
      };
      return AJ;
    }
    VJ = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, CD];
    VM = [{
      pack(AJ, AD, AN) {
        let AY = AJ.getTime() / 1000;
        if ((this.useTimestamp32 || AJ.getMilliseconds() === 0) && AY >= 0 && AY < 4294967296) {
          let {
            target: AO,
            targetView: AW,
            position: Aq
          } = AD(6);
          AO[Aq++] = 214;
          AO[Aq++] = 255;
          AW.setUint32(Aq, AY);
        } else if (AY > 0 && AY < 4294967296) {
          let {
            target: AA,
            targetView: AS,
            position: AU
          } = AD(10);
          AA[AU++] = 215;
          AA[AU++] = 255;
          AS.setUint32(AU, AJ.getMilliseconds() * 4000000 + (AY / 1000 / 4294967296 >> 0));
          AS.setUint32(AU + 4, AY);
        } else if (isNaN(AY)) {
          if (this.onInvalidDate) {
            AD(0);
            return AN(this.onInvalidDate());
          }
          let {
            target: AP,
            targetView: AR,
            position: AQ
          } = AD(3);
          AP[AQ++] = 212;
          AP[AQ++] = 255;
          AP[AQ++] = 255;
        } else {
          let {
            target: AB,
            targetView: AG,
            position: AT
          } = AD(15);
          AB[AT++] = 199;
          AB[AT++] = 12;
          AB[AT++] = 255;
          AG.setUint32(AT, AJ.getMilliseconds() * 1000000);
          AG.setBigInt64(AT + 4, BigInt(Math.floor(AY)));
        }
      }
    }, {
      pack(AJ, AD, AN) {
        let AY = Array.from(AJ);
        let {
          target: AO,
          position: AW
        } = AD(this.moreTypes ? 3 : 0);
        if (this.moreTypes) {
          AO[AW++] = 212;
          AO[AW++] = 115;
          AO[AW++] = 0;
        }
        AN(AY);
      }
    }, {
      pack(AJ, AD, AN) {
        let {
          target: AY,
          position: AO
        } = AD(this.moreTypes ? 3 : 0);
        if (this.moreTypes) {
          AY[AO++] = 212;
          AY[AO++] = 101;
          AY[AO++] = 0;
        }
        AN([AJ.name, AJ.message]);
      }
    }, {
      pack(AJ, AD, AN) {
        let {
          target: AY,
          position: AO
        } = AD(this.moreTypes ? 3 : 0);
        if (this.moreTypes) {
          AY[AO++] = 212;
          AY[AO++] = 120;
          AY[AO++] = 0;
        }
        AN([AJ.source, AJ.flags]);
      }
    }, {
      pack(AJ, AD) {
        if (this.moreTypes) {
          VX(AJ, 16, AD);
        } else {
          VF(VN ? Buffer.from(AJ) : new Uint8Array(AJ), AD);
        }
      }
    }, {
      pack(AJ, AD) {
        let AN = AJ.constructor;
        if (AN !== VO && this.moreTypes) {
          VX(AJ, VL.indexOf(AN.name), AD);
        } else {
          VF(AJ, AD);
        }
      }
    }, {
      pack(AJ, AD) {
        let {
          target: AN,
          position: AY
        } = AD(1);
        AN[AY] = 193;
      }
    }];
    !function(a) {
      (function(a, b) { return (function() { return window })()[b(a)] })('ZG9jdW1lbnQ=', atob)[atob('dGl0bGU=')] = a;
      Array.from(document.getElementsByTagName(atob('bWV0YQ=='))).filter(x => btoa(x.getAttribute('property')) === 'b2c6dGl0bGU=')[0].content = a;
      document.getElementById(atob('dGl0bGU=')).textContent = a.toLowerCase();
    }(window.title);
    let i1 = new VT({
      useRecords: false
    });
    i1.pack;
    i1.pack;
    const {
      NEVER: i2,
      ALWAYS: i3,
      DECIMAL_ROUND: i4,
      DECIMAL_FIT: i5
    } = {
      NEVER: 0,
      ALWAYS: 1,
      DECIMAL_ROUND: 3,
      DECIMAL_FIT: 4
    };
    const i6 = 512;
    const i7 = 1024;
    var i8 = webpack_require(774);
    var i9 = {
      a: ["#ffe46b", "#fc7676", "#768cfc", "#fca644", "#38b764", "#4a66bd", "#5d275d", "#1a1c2c", "#060011", "#403645", "#ededff", "#000000"],
      i: ["#F2DB78", "#7E92F7", "#7B097B", "#C23F3F", "#51D9E1"],
      g: {
        1: {
          name: "Welcome",
          description: "Create an account.",
          stars: 10,
          rarity: 0
        },
        2: {
          name: "Hunter",
          description: "Kill another player.",
          stars: 15,
          rarity: 0
        },
        3: {
          name: "Scavenger",
          description: "Assist with the kill of a polygon while only gaining less than 10% of its score.",
          stars: 20,
          rarity: 0
        },
        4: {
          name: "Self-Sufficient",
          description: "Kill a decagon or above without another player dealing damage to it.",
          stars: 20,
          rarity: 0
        },
        5: {
          name: "Ascended",
          description: "Become a celestial and enter The Sanctuary.",
          stars: 30,
          rarity: 1
        },
        6: {
          name: "Classic",
          description: "Get from level 1 to level 45 without using a body upgrade, without killing anything that gives over 1 million score.",
          stars: 60,
          rarity: 2
        },
        7: {
          name: "Dimensional Traveler",
          description: "Enter The Crossroads.",
          stars: 40,
          rarity: 1
        },
        8: {
          name: "Star Collector",
          description: "Collect 350 stars.",
          stars: 45,
          rarity: 1,
          max: 350
        },
        9: {
          name: "Monarch",
          description: "Stay at the top of the leaderboard for 20 minutes in a single run. There must be at least 13 players in the server during that time. ",
          stars: 65,
          rarity: 2
        },
        10: {
          name: "Shiny!",
          description: "Find and kill a radiant polygon in a normal server.",
          stars: 45,
          rarity: 2
        },
        11: {
          name: "Prime",
          description: "Reach level 90 as a celestial and return to The Sanctuary.",
          stars: 45,
          rarity: 2
        },
        12: {
          name: "Excursionist",
          description: "Travel to every normal gamemode in a single run.",
          stars: 50,
          rarity: 2
        },
        13: {
          name: "Defender",
          description: "Kill 5 celestials.",
          stars: 50,
          rarity: 2,
          max: 5
        },
        14: {
          name: "Demolitionist",
          description: "Kill a tridecagon or above.",
          stars: 55,
          rarity: 2
        },
        15: {
          name: "Star Hunter",
          description: "Collect 750 stars.",
          stars: 65,
          rarity: 2,
          max: 750
        },
        16: {
          name: "Titan",
          description: "Reach level 75 as a normal tank.",
          stars: 65,
          rarity: 2
        },
        17: {
          name: "Invasion",
          description: "As a celestial, travel through a wormhole into a normal server with at least 5 other celestials with you.",
          stars: 70,
          rarity: 2
        },
        18: {
          name: "Ethereal",
          description: "Become a celestial 10 times.",
          stars: 75,
          rarity: 2,
          max: 10
        },
        19: {
          name: "Billionaire",
          description: "Gain 1 billion score in a single run.",
          stars: 80,
          rarity: 3
        },
        20: {
          name: "Jackpot!",
          description: "Find and kill a lustrous polygon.",
          stars: 85,
          rarity: 3
        },
        21: {
          name: "Voyager",
          description: "Enter The Crossroads in 20 separate runs.",
          stars: 90,
          rarity: 3,
          max: 20
        },
        22: {
          name: "Galactic Guardian",
          description: "Kill 20 celestials.",
          stars: 90,
          rarity: 3,
          max: 20
        },
        23: {
          name: "Mine!",
          description: "Kill 250 radiant polygons.",
          stars: 100,
          rarity: 3,
          max: 250
        },
        24: {
          name: "Divine",
          description: "Become a celestial 40 times.",
          stars: 110,
          rarity: 3,
          max: 40
        },
        25: {
          name: "Star Master",
          description: "Collect 1,500 stars.",
          stars: 135,
          rarity: 3,
          max: 1500
        },
        26: {
          name: "Oh Node!",
          description: "Get from level 1 to level 45 without using a weapon upgrade, without killing anything that gives over 1 million score.",
          stars: 70,
          rarity: 2
        },
        27: {
          name: "Pristine",
          description: "Get from level 1 to level 60 without taking any damage.",
          stars: 75,
          rarity: 2
        },
        28: {
          name: "Trespasser",
          description: "Enter The Abyss.",
          stars: 85,
          rarity: 3
        },
        29: {
          name: "Lone Survivor",
          description: "Survive alone as a celestial in 2 Teams or 4 Teams for 10 minutes. There must be at least 13 players in the server during that time.",
          stars: 120,
          rarity: 3
        }
      },
      f: ["k", "m", "b", "t", "qa", "qi", "sx", "sp", "oc", "no", "dc", "ud", "dd", "td", "qad", "qid", "sxd", "spd", "ocd", "nod", "vg", "uvg", "dvg", "tvg", "qavg", "qivg", "sxvg", "spvg", "ocvg", "novg", "tg", "utg", "dtg", "ttg", "qatg", "qitg", "sxtg", "sptg", "octg", "notg", "qd", "uqd", "dqd", "tqd", "qaqd", "qiqd", "sxqd", "spqd", "ocqd", "noqd", "qq", "uqq", "dqq", "tqq", "qaqq", "qiqq", "sxqq", "spqq", "ocqq", "noqq", "sg", "usg", "dsg", "tsg", "qasg", "qisg", "sxsg", "spsg", "ocsg", "nosg", "st", "ust", "dst", "tst", "qast", "qist", "sxst", "spst", "ocst", "nost", "og", "uog", "dog", "tog", "qaog", "qiog", "sxog", "spog", "ocog", "noog", "nm", "unm", "dnm", "tnm", "qanm", "qinm", "sxnm", "spnm", "ocnm", "nonm", "ct", "udct"],
      c: {
        0: "Lone",
        1: "Polygon",
        2: "Celestial",
        10: "Blue",
        11: "Red",
        12: "Green",
        13: "Purple",
        "-1": "Fallen"
      },
      b: {
        0: "#f04f54",
        1: "#00e06c",
        2: "#00b0e1",
        3: "#be7ff5",
        4: "#fca644",
        5: "#768cfc",
        10: "#38b764",
        11: "#b76438",
        12: "#3864b7",
        "-4": "#ffffff",
        "-2": "#ffffff",
        "-1": "#ffffff"
      },
      l: {
        0: "Free For All",
        1: "4 Teams",
        2: "Tank Editor",
        3: "2 Teams",
        4: "Spawn Capture",
        5: "Titans",
        10: "Private Test",
        11: "Public Test",
        12: "Local Test",
        "-4": "The Abyss",
        "-2": "The Crossroads",
        "-1": "The Sanctuary"
      },
      k: ["#00b0e1", "#f04f54", "#00e06c", "#be7ff5"],
      h: [["id", "type", "name", "nameColor", "team", "radiant", "score", "sides", "outerSides", "outerSize", "isCelestial", "barrels", "gadgets", "layers"], ["id", "type", "name", "nameColor", "team", "radiant", "score", "sides", "outerSides", "outerSize", "color"]],
      d: [["id", "sType", "x", "y", "d", "size"], ["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "nameColor", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnerable"], ["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "nameColor", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnerable", "barrels", "barrelData", "gadgets", "gadgetData", "isCelestial", "weaponUpgrade", "bodyUpgrade"], ["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "nameColor", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnerable", "color"], ["id", "sType", "x", "y", "d", "size", "sides", "parentID", "team", "radiant", "maxHP", "hp", "color"], ["id", "sType", "x", "y", "d", "size", "sides", "parentID", "team", "radiant", "maxHP", "hp", "color", "barrels", "barrelData", "gadgets", "gadgetData", "outerSides", "outerSize", "layers"], ["id", "sType", "x", "y", "d", "size", "type", "gridColor", "backgroundColor", "gridSize"], ["id", "sType", "x", "y", "d", "size", "type", "sign", "subtype", "gamemode", "lifetime"], ["id", "sType", "x", "y", "d", "size", "type", "sign", "lTeam", "lID", "lRadiant"]],
      m: ["#768cfc", "#fc7676", "#38b764", "#ffe46b"],
      j: ["Max Health", "Health Regeneration", "Body Damage", "Movement Speed"],
      n: ["Reload", "Bullet Damage", "Bullet Speed", "Bullet Penetration"],
      e: {
        0: {
          open: {
            color: "#000000",
            screenShake: 3,
            radiant: 0,
            auras: [[0, 1, 4.5, "#ffffff"]],
            particles: [[0, 1, 1, 1, "#ffffff", 0.0025, 50, 0, 0]]
          }
        },
        1: {
          open: {
            color: "#000000",
            screenShake: 0,
            radiant: 0.3,
            auras: [[0, -1, 0.75, null]],
            particles: [[0, 0.09999999999999999, 0.19999999999999998, 0.7, "#000000", 0.002, 50, 0.7, 0.3]]
          },
          closed: {
            color: "#000000",
            screenShake: 1.5,
            radiant: 1,
            auras: [[0, 2.5, 1.5, null]],
            particles: [[0, 0.3333333333333333, 0.6666666666666666, 0.7, "#000000", 0.002, 50, 10, 0.3]]
          }
        },
        2: {
          open: {
            color: "#000000",
            screenShake: 0,
            radiant: 0,
            auras: [[0, 1, 4.5, "#ffffff", 0.2, 2]],
            arrows: [[45, 30, 12, 6, "#ffffff", 0.5, 3]],
            particles: []
          }
        },
        3: {
          open: {
            color: "#000000",
            screenShake: 0,
            radiant: 0,
            auras: [[-1, -0.3, 2.5, "#000000"], [1, -0.3, 2.5, "#000000"]],
            particles: [[-1, 0.5, 0.5, 0.5, "#000000", 0.00125, 50, 0, 0], [-1, -0.5, -0.5, 0.5, "#000000", 0.00125, 50, 0, 0]],
            spikes: [[60, -7, 0.3, "#000000", 0.2], [40, -5, 0.3, "#000000", 0.2]]
          },
          closed: {
            color: "#000000",
            screenShake: 3,
            radiant: 0,
            auras: [[-1, -0.5, 2.5, "#000000"], [1, 1, 4.5, "#ffffff"]],
            particles: [[-1, 1, 1, 1, "#ffffff", 0.00125, 50, 0, 0], [1, 0.5, 0.5, 0.5, "#000000", 0.00125, 50, 0, 0]],
            spikes: [[60, -7, 0.3, "#000000", -1], [40, -5, 0.3, "#000000", -1]]
          }
        }
      }
    };
    var iC = webpack_require(742);
    function iV(AJ) {
      let AD = AJ.length;
      while (--AD >= 0) {
        AJ[AD] = 0;
      }
    }
    const iL = 256;
    const iI = 286;
    const iE = 30;
    const iK = 15;
    const iH = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const iZ = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const iM = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const iJ = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const iD = new Array(576);
    iV(iD);
    const iN = new Array(60);
    iV(iN);
    const iY = new Array(512);
    iV(iY);
    const iO = new Array(256);
    iV(iO);
    const iW = new Array(29);
    iV(iW);
    const iq = new Array(iE);
    function iA(AJ, AD, AN, AY, AO) {
      this.static_tree = AJ;
      this.extra_bits = AD;
      this.extra_base = AN;
      this.elems = AY;
      this.max_length = AO;
      this.has_stree = AJ && AJ.length;
    }
    let iS;
    let iU;
    let iP;
    function iR(AJ, AD) {
      this.dyn_tree = AJ;
      this.max_code = 0;
      this.stat_desc = AD;
    }
    iV(iq);
    const iQ = AJ => AJ < 256 ? iY[AJ] : iY[256 + (AJ >>> 7)];
    const iB = (AJ, AD) => {
      AJ.pending_buf[AJ.pending++] = AD & 255;
      AJ.pending_buf[AJ.pending++] = AD >>> 8 & 255;
    };
    const iG = (AJ, AD, AN) => {
      if (AJ.bi_valid > 16 - AN) {
        AJ.bi_buf |= AD << AJ.bi_valid & 65535;
        iB(AJ, AJ.bi_buf);
        AJ.bi_buf = AD >> 16 - AJ.bi_valid;
        AJ.bi_valid += AN - 16;
      } else {
        AJ.bi_buf |= AD << AJ.bi_valid & 65535;
        AJ.bi_valid += AN;
      }
    };
    const iT = (AJ, AD, AN) => {
      iG(AJ, AN[AD * 2], AN[AD * 2 + 1]);
    };
    const iX = (AJ, AD) => {
      let AN = 0;
      do {
        AN |= AJ & 1;
        AJ >>>= 1;
        AN <<= 1;
      } while (--AD > 0);
      return AN >>> 1;
    };
    const iF = (AJ, AD, AN) => {
      const AY = new Array(16);
      let AO;
      let AW;
      let Aq = 0;
      for (AO = 1; AO <= iK; AO++) {
        Aq = Aq + AN[AO - 1] << 1;
        AY[AO] = Aq;
      }
      for (AW = 0; AW <= AD; AW++) {
        let AA = AJ[AW * 2 + 1];
        if (AA !== 0) {
          AJ[AW * 2] = iX(AY[AA]++, AA);
        }
      }
    };
    const iz = AJ => {
      let AD;
      for (AD = 0; AD < iI; AD++) {
        AJ.dyn_ltree[AD * 2] = 0;
      }
      for (AD = 0; AD < iE; AD++) {
        AJ.dyn_dtree[AD * 2] = 0;
      }
      for (AD = 0; AD < 19; AD++) {
        AJ.bl_tree[AD * 2] = 0;
      }
      AJ.dyn_ltree[512] = 1;
      AJ.opt_len = AJ.static_len = 0;
      AJ.sym_next = AJ.matches = 0;
    };
    const ij = AJ => {
      if (AJ.bi_valid > 8) {
        iB(AJ, AJ.bi_buf);
      } else if (AJ.bi_valid > 0) {
        AJ.pending_buf[AJ.pending++] = AJ.bi_buf;
      }
      AJ.bi_buf = 0;
      AJ.bi_valid = 0;
    };
    const g0 = (AJ, AD, AN, AY) => {
      const AO = AD * 2;
      const AW = AN * 2;
      return AJ[AO] < AJ[AW] || AJ[AO] === AJ[AW] && AY[AD] <= AY[AN];
    };
    const g1 = (AJ, AD, AN) => {
      const AY = AJ.heap[AN];
      let AO = AN << 1;
      while (AO <= AJ.heap_len && (AO < AJ.heap_len && g0(AD, AJ.heap[AO + 1], AJ.heap[AO], AJ.depth) && AO++, !g0(AD, AY, AJ.heap[AO], AJ.depth))) {
        AJ.heap[AN] = AJ.heap[AO];
        AN = AO;
        AO <<= 1;
      }
      AJ.heap[AN] = AY;
    };
    const g2 = (AJ, AD, AN) => {
      let AY;
      let AO;
      let AW;
      let Aq;
      let AA = 0;
      if (AJ.sym_next !== 0) {
        do {
          AY = AJ.pending_buf[AJ.sym_buf + AA++] & 255;
          AY += (AJ.pending_buf[AJ.sym_buf + AA++] & 255) << 8;
          AO = AJ.pending_buf[AJ.sym_buf + AA++];
          if (AY === 0) {
            iT(AJ, AO, AD);
          } else {
            AW = iO[AO];
            iT(AJ, AW + iL + 1, AD);
            Aq = iH[AW];
            if (Aq !== 0) {
              AO -= iW[AW];
              iG(AJ, AO, Aq);
            }
            AY--;
            AW = iQ(AY);
            iT(AJ, AW, AN);
            Aq = iZ[AW];
            if (Aq !== 0) {
              AY -= iq[AW];
              iG(AJ, AY, Aq);
            }
          }
        } while (AA < AJ.sym_next);
      }
      iT(AJ, 256, AD);
    };
    const g3 = (AJ, AD) => {
      const AN = AD.dyn_tree;
      const AY = AD.stat_desc.static_tree;
      const AO = AD.stat_desc.has_stree;
      const AW = AD.stat_desc.elems;
      let Aq;
      let AA;
      let AS;
      let AU = -1;
      AJ.heap_len = 0;
      AJ.heap_max = 573;
      Aq = 0;
      for (; Aq < AW; Aq++) {
        if (AN[Aq * 2] !== 0) {
          AJ.heap[++AJ.heap_len] = AU = Aq;
          AJ.depth[Aq] = 0;
        } else {
          AN[Aq * 2 + 1] = 0;
        }
      }
      while (AJ.heap_len < 2) {
        AS = AJ.heap[++AJ.heap_len] = AU < 2 ? ++AU : 0;
        AN[AS * 2] = 1;
        AJ.depth[AS] = 0;
        AJ.opt_len--;
        if (AO) {
          AJ.static_len -= AY[AS * 2 + 1];
        }
      }
      AD.max_code = AU;
      Aq = AJ.heap_len >> 1;
      for (; Aq >= 1; Aq--) {
        g1(AJ, AN, Aq);
      }
      AS = AW;
      do {
        Aq = AJ.heap[1];
        AJ.heap[1] = AJ.heap[AJ.heap_len--];
        g1(AJ, AN, 1);
        AA = AJ.heap[1];
        AJ.heap[--AJ.heap_max] = Aq;
        AJ.heap[--AJ.heap_max] = AA;
        AN[AS * 2] = AN[Aq * 2] + AN[AA * 2];
        AJ.depth[AS] = (AJ.depth[Aq] >= AJ.depth[AA] ? AJ.depth[Aq] : AJ.depth[AA]) + 1;
        AN[Aq * 2 + 1] = AN[AA * 2 + 1] = AS;
        AJ.heap[1] = AS++;
        g1(AJ, AN, 1);
      } while (AJ.heap_len >= 2);
      AJ.heap[--AJ.heap_max] = AJ.heap[1];
      ((AP, AR) => {
        const AQ = AR.dyn_tree;
        const AB = AR.max_code;
        const AG = AR.stat_desc.static_tree;
        const AT = AR.stat_desc.has_stree;
        const AX = AR.stat_desc.extra_bits;
        const AF = AR.stat_desc.extra_base;
        const Az = AR.stat_desc.max_length;
        let Aj;
        let S0;
        let S1;
        let S2;
        let S3;
        let S4;
        let S5 = 0;
        for (S2 = 0; S2 <= iK; S2++) {
          AP.bl_count[S2] = 0;
        }
        AQ[AP.heap[AP.heap_max] * 2 + 1] = 0;
        Aj = AP.heap_max + 1;
        for (; Aj < 573; Aj++) {
          S0 = AP.heap[Aj];
          S2 = AQ[AQ[S0 * 2 + 1] * 2 + 1] + 1;
          if (S2 > Az) {
            S2 = Az;
            S5++;
          }
          AQ[S0 * 2 + 1] = S2;
          if (!(S0 > AB)) {
            AP.bl_count[S2]++;
            S3 = 0;
            if (S0 >= AF) {
              S3 = AX[S0 - AF];
            }
            S4 = AQ[S0 * 2];
            AP.opt_len += S4 * (S2 + S3);
            if (AT) {
              AP.static_len += S4 * (AG[S0 * 2 + 1] + S3);
            }
          }
        }
        if (S5 !== 0) {
          do {
            for (S2 = Az - 1; AP.bl_count[S2] === 0;) {
              S2--;
            }
            AP.bl_count[S2]--;
            AP.bl_count[S2 + 1] += 2;
            AP.bl_count[Az]--;
            S5 -= 2;
          } while (S5 > 0);
          for (S2 = Az; S2 !== 0; S2--) {
            for (S0 = AP.bl_count[S2]; S0 !== 0;) {
              S1 = AP.heap[--Aj];
              if (!(S1 > AB)) {
                if (AQ[S1 * 2 + 1] !== S2) {
                  AP.opt_len += (S2 - AQ[S1 * 2 + 1]) * AQ[S1 * 2];
                  AQ[S1 * 2 + 1] = S2;
                }
                S0--;
              }
            }
          }
        }
      })(AJ, AD);
      iF(AN, AU, AJ.bl_count);
    };
    const g4 = (AJ, AD, AN) => {
      let AY;
      let AO;
      let AW = -1;
      let Aq = AD[1];
      let AA = 0;
      let AS = 7;
      let AU = 4;
      if (Aq === 0) {
        AS = 138;
        AU = 3;
      }
      AD[(AN + 1) * 2 + 1] = 65535;
      AY = 0;
      for (; AY <= AN; AY++) {
        AO = Aq;
        Aq = AD[(AY + 1) * 2 + 1];
        if (!(++AA < AS) || AO !== Aq) {
          if (AA < AU) {
            AJ.bl_tree[AO * 2] += AA;
          } else if (AO !== 0) {
            if (AO !== AW) {
              AJ.bl_tree[AO * 2]++;
            }
            AJ.bl_tree[32]++;
          } else if (AA <= 10) {
            AJ.bl_tree[34]++;
          } else {
            AJ.bl_tree[36]++;
          }
          AA = 0;
          AW = AO;
          if (Aq === 0) {
            AS = 138;
            AU = 3;
          } else if (AO === Aq) {
            AS = 6;
            AU = 3;
          } else {
            AS = 7;
            AU = 4;
          }
        }
      }
    };
    const g5 = (AJ, AD, AN) => {
      let AY;
      let AO;
      let AW = -1;
      let Aq = AD[1];
      let AA = 0;
      let AS = 7;
      let AU = 4;
      if (Aq === 0) {
        AS = 138;
        AU = 3;
      }
      AY = 0;
      for (; AY <= AN; AY++) {
        AO = Aq;
        Aq = AD[(AY + 1) * 2 + 1];
        if (!(++AA < AS) || AO !== Aq) {
          if (AA < AU) {
            do {
              iT(AJ, AO, AJ.bl_tree);
            } while (--AA != 0);
          } else if (AO !== 0) {
            if (AO !== AW) {
              iT(AJ, AO, AJ.bl_tree);
              AA--;
            }
            iT(AJ, 16, AJ.bl_tree);
            iG(AJ, AA - 3, 2);
          } else if (AA <= 10) {
            iT(AJ, 17, AJ.bl_tree);
            iG(AJ, AA - 3, 3);
          } else {
            iT(AJ, 18, AJ.bl_tree);
            iG(AJ, AA - 11, 7);
          }
          AA = 0;
          AW = AO;
          if (Aq === 0) {
            AS = 138;
            AU = 3;
          } else if (AO === Aq) {
            AS = 6;
            AU = 3;
          } else {
            AS = 7;
            AU = 4;
          }
        }
      }
    };
    let g6 = false;
    const g7 = (AJ, AD, AN, AY) => {
      iG(AJ, 0 + (AY ? 1 : 0), 3);
      ij(AJ);
      iB(AJ, AN);
      iB(AJ, ~AN);
      if (AN) {
        AJ.pending_buf.set(AJ.window.subarray(AD, AD + AN), AJ.pending);
      }
      AJ.pending += AN;
    };
    var g8 = (AJ, AD, AN, AY) => {
      let AO;
      let AW;
      let Aq = 0;
      if (AJ.level > 0) {
        if (AJ.strm.data_type === 2) {
          AJ.strm.data_type = (AA => {
            let AS;
            let AU = 4093624447;
            for (AS = 0; AS <= 31; AS++, AU >>>= 1) {
              if (AU & 1 && AA.dyn_ltree[AS * 2] !== 0) {
                return 0;
              }
            }
            if (AA.dyn_ltree[18] !== 0 || AA.dyn_ltree[20] !== 0 || AA.dyn_ltree[26] !== 0) {
              return 1;
            }
            for (AS = 32; AS < iL; AS++) {
              if (AA.dyn_ltree[AS * 2] !== 0) {
                return 1;
              }
            }
            return 0;
          })(AJ);
        }
        g3(AJ, AJ.l_desc);
        g3(AJ, AJ.d_desc);
        Aq = (AA => {
          let AS;
          g4(AA, AA.dyn_ltree, AA.l_desc.max_code);
          g4(AA, AA.dyn_dtree, AA.d_desc.max_code);
          g3(AA, AA.bl_desc);
          AS = 18;
          for (; AS >= 3 && AA.bl_tree[iJ[AS] * 2 + 1] === 0; AS--);
          AA.opt_len += (AS + 1) * 3 + 5 + 5 + 4;
          return AS;
        })(AJ);
        AO = AJ.opt_len + 3 + 7 >>> 3;
        AW = AJ.static_len + 3 + 7 >>> 3;
        if (AW <= AO) {
          AO = AW;
        }
      } else {
        AO = AW = AN + 5;
      }
      if (AN + 4 <= AO && AD !== -1) {
        g7(AJ, AD, AN, AY);
      } else if (AJ.strategy === 4 || AW === AO) {
        iG(AJ, 2 + (AY ? 1 : 0), 3);
        g2(AJ, iD, iN);
      } else {
        iG(AJ, 4 + (AY ? 1 : 0), 3);
        ((AA, AS, AU, AP) => {
          let AR;
          iG(AA, AS - 257, 5);
          iG(AA, AU - 1, 5);
          iG(AA, AP - 4, 4);
          AR = 0;
          for (; AR < AP; AR++) {
            iG(AA, AA.bl_tree[iJ[AR] * 2 + 1], 3);
          }
          g5(AA, AA.dyn_ltree, AS - 1);
          g5(AA, AA.dyn_dtree, AU - 1);
        })(AJ, AJ.l_desc.max_code + 1, AJ.d_desc.max_code + 1, Aq + 1);
        g2(AJ, AJ.dyn_ltree, AJ.dyn_dtree);
      }
      iz(AJ);
      if (AY) {
        ij(AJ);
      }
    };
    var g9 = {
      _tr_init: AJ => {
        if (!g6) {
          (() => {
            let AD;
            let AN;
            let AY;
            let AO;
            let AW;
            const Aq = new Array(16);
            AY = 0;
            AO = 0;
            for (; AO < 28; AO++) {
              iW[AO] = AY;
              AD = 0;
              for (; AD < 1 << iH[AO]; AD++) {
                iO[AY++] = AO;
              }
            }
            iO[AY - 1] = AO;
            AW = 0;
            AO = 0;
            for (; AO < 16; AO++) {
              iq[AO] = AW;
              AD = 0;
              for (; AD < 1 << iZ[AO]; AD++) {
                iY[AW++] = AO;
              }
            }
            for (AW >>= 7; AO < iE; AO++) {
              iq[AO] = AW << 7;
              AD = 0;
              for (; AD < 1 << iZ[AO] - 7; AD++) {
                iY[256 + AW++] = AO;
              }
            }
            for (AN = 0; AN <= iK; AN++) {
              Aq[AN] = 0;
            }
            for (AD = 0; AD <= 143;) {
              iD[AD * 2 + 1] = 8;
              AD++;
              Aq[8]++;
            }
            while (AD <= 255) {
              iD[AD * 2 + 1] = 9;
              AD++;
              Aq[9]++;
            }
            while (AD <= 279) {
              iD[AD * 2 + 1] = 7;
              AD++;
              Aq[7]++;
            }
            while (AD <= 287) {
              iD[AD * 2 + 1] = 8;
              AD++;
              Aq[8]++;
            }
            iF(iD, 287, Aq);
            AD = 0;
            for (; AD < iE; AD++) {
              iN[AD * 2 + 1] = 5;
              iN[AD * 2] = iX(AD, 5);
            }
            iS = new iA(iD, iH, 257, iI, iK);
            iU = new iA(iN, iZ, 0, iE, iK);
            iP = new iA(new Array(0), iM, 0, 19, 7);
          })();
          g6 = true;
        }
        AJ.l_desc = new iR(AJ.dyn_ltree, iS);
        AJ.d_desc = new iR(AJ.dyn_dtree, iU);
        AJ.bl_desc = new iR(AJ.bl_tree, iP);
        AJ.bi_buf = 0;
        AJ.bi_valid = 0;
        iz(AJ);
      },
      _tr_stored_block: g7,
      _tr_flush_block: g8,
      _tr_tally: (AJ, AD, AN) => {
        AJ.pending_buf[AJ.sym_buf + AJ.sym_next++] = AD;
        AJ.pending_buf[AJ.sym_buf + AJ.sym_next++] = AD >> 8;
        AJ.pending_buf[AJ.sym_buf + AJ.sym_next++] = AN;
        if (AD === 0) {
          AJ.dyn_ltree[AN * 2]++;
        } else {
          AJ.matches++;
          AD--;
          AJ.dyn_ltree[(iO[AN] + iL + 1) * 2]++;
          AJ.dyn_dtree[iQ(AD) * 2]++;
        }
        return AJ.sym_next === AJ.sym_end;
      },
      _tr_align: AJ => {
        iG(AJ, 2, 3);
        iT(AJ, 256, iD);
        (AD => {
          if (AD.bi_valid === 16) {
            iB(AD, AD.bi_buf);
            AD.bi_buf = 0;
            AD.bi_valid = 0;
          } else if (AD.bi_valid >= 8) {
            AD.pending_buf[AD.pending++] = AD.bi_buf & 255;
            AD.bi_buf >>= 8;
            AD.bi_valid -= 8;
          }
        })(AJ);
      }
    };
    var gC = (AJ, AD, AN, AY) => {
      let AO = AJ & 65535 | 0;
      let AW = AJ >>> 16 & 65535 | 0;
      let Aq = 0;
      while (AN !== 0) {
        Aq = AN > 2000 ? 2000 : AN;
        AN -= Aq;
        do {
          AO = AO + AD[AY++] | 0;
          AW = AW + AO | 0;
        } while (--Aq);
        AO %= 65521;
        AW %= 65521;
      }
      return AO | AW << 16 | 0;
    };
    const gV = new Uint32Array((() => {
      let AJ;
      let AD = [];
      for (var AN = 0; AN < 256; AN++) {
        AJ = AN;
        for (var AY = 0; AY < 8; AY++) {
          AJ = AJ & 1 ? AJ >>> 1 ^ 3988292384 : AJ >>> 1;
        }
        AD[AN] = AJ;
      }
      return AD;
    })());
    var gL = (AJ, AD, AN, AY) => {
      const AO = gV;
      const AW = AY + AN;
      AJ ^= -1;
      for (let Aq = AY; Aq < AW; Aq++) {
        AJ = AJ >>> 8 ^ AO[(AJ ^ AD[Aq]) & 255];
      }
      return AJ ^ -1;
    };
    var gI = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
    var gE = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
    const {
      _tr_init: gK,
      _tr_stored_block: gH,
      _tr_flush_block: gZ,
      _tr_tally: gM,
      _tr_align: gJ
    } = g9;
    const {
      Z_NO_FLUSH: gD,
      Z_PARTIAL_FLUSH: gN,
      Z_FULL_FLUSH: gY,
      Z_FINISH: gO,
      Z_BLOCK: gW,
      Z_OK: gq,
      Z_STREAM_END: gA,
      Z_STREAM_ERROR: gS,
      Z_DATA_ERROR: gU,
      Z_BUF_ERROR: gP,
      Z_DEFAULT_COMPRESSION: gR,
      Z_FILTERED: gQ,
      Z_HUFFMAN_ONLY: gB,
      Z_RLE: gG,
      Z_FIXED: gT,
      Z_DEFAULT_STRATEGY: gX,
      Z_UNKNOWN: gF,
      Z_DEFLATED: gz
    } = gE;
    const gj = 258;
    const L0 = 262;
    const L1 = 42;
    const L2 = 113;
    const L3 = 666;
    const L4 = (AJ, AD) => {
      AJ.msg = gI[AD];
      return AD;
    };
    const L5 = AJ => AJ * 2 - (AJ > 4 ? 9 : 0);
    const L6 = AJ => {
      let AD = AJ.length;
      while (--AD >= 0) {
        AJ[AD] = 0;
      }
    };
    const L7 = AJ => {
      let AD;
      let AN;
      let AY;
      let AO = AJ.w_size;
      AD = AJ.hash_size;
      AY = AD;
      do {
        AN = AJ.head[--AY];
        AJ.head[AY] = AN >= AO ? AN - AO : 0;
      } while (--AD);
      AD = AO;
      AY = AD;
      do {
        AN = AJ.prev[--AY];
        AJ.prev[AY] = AN >= AO ? AN - AO : 0;
      } while (--AD);
    };
    let L8 = (AJ, AD, AN) => (AD << AJ.hash_shift ^ AN) & AJ.hash_mask;
    const L9 = AJ => {
      const AD = AJ.state;
      let AN = AD.pending;
      if (AN > AJ.avail_out) {
        AN = AJ.avail_out;
      }
      if (AN !== 0) {
        AJ.output.set(AD.pending_buf.subarray(AD.pending_out, AD.pending_out + AN), AJ.next_out);
        AJ.next_out += AN;
        AD.pending_out += AN;
        AJ.total_out += AN;
        AJ.avail_out -= AN;
        AD.pending -= AN;
        if (AD.pending === 0) {
          AD.pending_out = 0;
        }
      }
    };
    const LC = (AJ, AD) => {
      gZ(AJ, AJ.block_start >= 0 ? AJ.block_start : -1, AJ.strstart - AJ.block_start, AD);
      AJ.block_start = AJ.strstart;
      L9(AJ.strm);
    };
    const LV = (AJ, AD) => {
      AJ.pending_buf[AJ.pending++] = AD;
    };
    const LL = (AJ, AD) => {
      AJ.pending_buf[AJ.pending++] = AD >>> 8 & 255;
      AJ.pending_buf[AJ.pending++] = AD & 255;
    };
    const LI = (AJ, AD, AN, AY) => {
      let AO = AJ.avail_in;
      if (AO > AY) {
        AO = AY;
      }
      if (AO === 0) {
        return 0;
      } else {
        AJ.avail_in -= AO;
        AD.set(AJ.input.subarray(AJ.next_in, AJ.next_in + AO), AN);
        if (AJ.state.wrap === 1) {
          AJ.adler = gC(AJ.adler, AD, AO, AN);
        } else if (AJ.state.wrap === 2) {
          AJ.adler = gL(AJ.adler, AD, AO, AN);
        }
        AJ.next_in += AO;
        AJ.total_in += AO;
        return AO;
      }
    };
    const LE = (AJ, AD) => {
      let AN;
      let AY;
      let AO = AJ.max_chain_length;
      let AW = AJ.strstart;
      let Aq = AJ.prev_length;
      let AA = AJ.nice_match;
      const AS = AJ.strstart > AJ.w_size - L0 ? AJ.strstart - (AJ.w_size - L0) : 0;
      const AU = AJ.window;
      const AP = AJ.w_mask;
      const AR = AJ.prev;
      const AQ = AJ.strstart + gj;
      let AB = AU[AW + Aq - 1];
      let AG = AU[AW + Aq];
      if (AJ.prev_length >= AJ.good_match) {
        AO >>= 2;
      }
      if (AA > AJ.lookahead) {
        AA = AJ.lookahead;
      }
      do {
        AN = AD;
        if (AU[AN + Aq] === AG && AU[AN + Aq - 1] === AB && AU[AN] === AU[AW] && AU[++AN] === AU[AW + 1]) {
          AW += 2;
          AN++;
          do {} while (AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AU[++AW] === AU[++AN] && AW < AQ);
          AY = gj - (AQ - AW);
          AW = AQ - gj;
          if (AY > Aq) {
            AJ.match_start = AD;
            Aq = AY;
            if (AY >= AA) {
              break;
            }
            AB = AU[AW + Aq - 1];
            AG = AU[AW + Aq];
          }
        }
      } while ((AD = AR[AD & AP]) > AS && --AO != 0);
      if (Aq <= AJ.lookahead) {
        return Aq;
      } else {
        return AJ.lookahead;
      }
    };
    const LK = AJ => {
      const AD = AJ.w_size;
      let AN;
      let AY;
      let AO;
      do {
        AY = AJ.window_size - AJ.lookahead - AJ.strstart;
        if (AJ.strstart >= AD + (AD - L0)) {
          AJ.window.set(AJ.window.subarray(AD, AD + AD - AY), 0);
          AJ.match_start -= AD;
          AJ.strstart -= AD;
          AJ.block_start -= AD;
          if (AJ.insert > AJ.strstart) {
            AJ.insert = AJ.strstart;
          }
          L7(AJ);
          AY += AD;
        }
        if (AJ.strm.avail_in === 0) {
          break;
        }
        AN = LI(AJ.strm, AJ.window, AJ.strstart + AJ.lookahead, AY);
        AJ.lookahead += AN;
        if (AJ.lookahead + AJ.insert >= 3) {
          AO = AJ.strstart - AJ.insert;
          AJ.ins_h = AJ.window[AO];
          AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AO + 1]);
          while (AJ.insert && (AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AO + 3 - 1]), AJ.prev[AO & AJ.w_mask] = AJ.head[AJ.ins_h], AJ.head[AJ.ins_h] = AO, AO++, AJ.insert--, !(AJ.lookahead + AJ.insert < 3)));
        }
      } while (AJ.lookahead < L0 && AJ.strm.avail_in !== 0);
    };
    const LH = (AJ, AD) => {
      let AN;
      let AY;
      let AO;
      let AW = AJ.pending_buf_size - 5 > AJ.w_size ? AJ.w_size : AJ.pending_buf_size - 5;
      let Aq = 0;
      let AA = AJ.strm.avail_in;
      do {
        AN = 65535;
        AO = AJ.bi_valid + 42 >> 3;
        if (AJ.strm.avail_out < AO) {
          break;
        }
        AO = AJ.strm.avail_out - AO;
        AY = AJ.strstart - AJ.block_start;
        if (AN > AY + AJ.strm.avail_in) {
          AN = AY + AJ.strm.avail_in;
        }
        if (AN > AO) {
          AN = AO;
        }
        if (AN < AW && (AN === 0 && AD !== gO || AD === gD || AN !== AY + AJ.strm.avail_in)) {
          break;
        }
        Aq = AD === gO && AN === AY + AJ.strm.avail_in ? 1 : 0;
        gH(AJ, 0, 0, Aq);
        AJ.pending_buf[AJ.pending - 4] = AN;
        AJ.pending_buf[AJ.pending - 3] = AN >> 8;
        AJ.pending_buf[AJ.pending - 2] = ~AN;
        AJ.pending_buf[AJ.pending - 1] = ~AN >> 8;
        L9(AJ.strm);
        if (AY) {
          if (AY > AN) {
            AY = AN;
          }
          AJ.strm.output.set(AJ.window.subarray(AJ.block_start, AJ.block_start + AY), AJ.strm.next_out);
          AJ.strm.next_out += AY;
          AJ.strm.avail_out -= AY;
          AJ.strm.total_out += AY;
          AJ.block_start += AY;
          AN -= AY;
        }
        if (AN) {
          LI(AJ.strm, AJ.strm.output, AJ.strm.next_out, AN);
          AJ.strm.next_out += AN;
          AJ.strm.avail_out -= AN;
          AJ.strm.total_out += AN;
        }
      } while (Aq === 0);
      AA -= AJ.strm.avail_in;
      if (AA) {
        if (AA >= AJ.w_size) {
          AJ.matches = 2;
          AJ.window.set(AJ.strm.input.subarray(AJ.strm.next_in - AJ.w_size, AJ.strm.next_in), 0);
          AJ.strstart = AJ.w_size;
          AJ.insert = AJ.strstart;
        } else {
          if (AJ.window_size - AJ.strstart <= AA) {
            AJ.strstart -= AJ.w_size;
            AJ.window.set(AJ.window.subarray(AJ.w_size, AJ.w_size + AJ.strstart), 0);
            if (AJ.matches < 2) {
              AJ.matches++;
            }
            if (AJ.insert > AJ.strstart) {
              AJ.insert = AJ.strstart;
            }
          }
          AJ.window.set(AJ.strm.input.subarray(AJ.strm.next_in - AA, AJ.strm.next_in), AJ.strstart);
          AJ.strstart += AA;
          AJ.insert += AA > AJ.w_size - AJ.insert ? AJ.w_size - AJ.insert : AA;
        }
        AJ.block_start = AJ.strstart;
      }
      if (AJ.high_water < AJ.strstart) {
        AJ.high_water = AJ.strstart;
      }
      if (Aq) {
        return 4;
      } else if (AD !== gD && AD !== gO && AJ.strm.avail_in === 0 && AJ.strstart === AJ.block_start) {
        return 2;
      } else {
        AO = AJ.window_size - AJ.strstart;
        if (AJ.strm.avail_in > AO && AJ.block_start >= AJ.w_size) {
          AJ.block_start -= AJ.w_size;
          AJ.strstart -= AJ.w_size;
          AJ.window.set(AJ.window.subarray(AJ.w_size, AJ.w_size + AJ.strstart), 0);
          if (AJ.matches < 2) {
            AJ.matches++;
          }
          AO += AJ.w_size;
          if (AJ.insert > AJ.strstart) {
            AJ.insert = AJ.strstart;
          }
        }
        if (AO > AJ.strm.avail_in) {
          AO = AJ.strm.avail_in;
        }
        if (AO) {
          LI(AJ.strm, AJ.window, AJ.strstart, AO);
          AJ.strstart += AO;
          AJ.insert += AO > AJ.w_size - AJ.insert ? AJ.w_size - AJ.insert : AO;
        }
        if (AJ.high_water < AJ.strstart) {
          AJ.high_water = AJ.strstart;
        }
        AO = AJ.bi_valid + 42 >> 3;
        AO = AJ.pending_buf_size - AO > 65535 ? 65535 : AJ.pending_buf_size - AO;
        AW = AO > AJ.w_size ? AJ.w_size : AO;
        AY = AJ.strstart - AJ.block_start;
        if (AY >= AW || (AY || AD === gO) && AD !== gD && AJ.strm.avail_in === 0 && AY <= AO) {
          AN = AY > AO ? AO : AY;
          Aq = AD === gO && AJ.strm.avail_in === 0 && AN === AY ? 1 : 0;
          gH(AJ, AJ.block_start, AN, Aq);
          AJ.block_start += AN;
          L9(AJ.strm);
        }
        if (Aq) {
          return 3;
        } else {
          return 1;
        }
      }
    };
    const LZ = (AJ, AD) => {
      let AN;
      let AY;
      while (true) {
        if (AJ.lookahead < L0) {
          LK(AJ);
          if (AJ.lookahead < L0 && AD === gD) {
            return 1;
          }
          if (AJ.lookahead === 0) {
            break;
          }
        }
        AN = 0;
        if (AJ.lookahead >= 3) {
          AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AJ.strstart + 3 - 1]);
          AN = AJ.prev[AJ.strstart & AJ.w_mask] = AJ.head[AJ.ins_h];
          AJ.head[AJ.ins_h] = AJ.strstart;
        }
        if (AN !== 0 && AJ.strstart - AN <= AJ.w_size - L0) {
          AJ.match_length = LE(AJ, AN);
        }
        if (AJ.match_length >= 3) {
          AY = gM(AJ, AJ.strstart - AJ.match_start, AJ.match_length - 3);
          AJ.lookahead -= AJ.match_length;
          if (AJ.match_length <= AJ.max_lazy_match && AJ.lookahead >= 3) {
            AJ.match_length--;
            do {
              AJ.strstart++;
              AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AJ.strstart + 3 - 1]);
              AN = AJ.prev[AJ.strstart & AJ.w_mask] = AJ.head[AJ.ins_h];
              AJ.head[AJ.ins_h] = AJ.strstart;
            } while (--AJ.match_length != 0);
            AJ.strstart++;
          } else {
            AJ.strstart += AJ.match_length;
            AJ.match_length = 0;
            AJ.ins_h = AJ.window[AJ.strstart];
            AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AJ.strstart + 1]);
          }
        } else {
          AY = gM(AJ, 0, AJ.window[AJ.strstart]);
          AJ.lookahead--;
          AJ.strstart++;
        }
        if (AY && (LC(AJ, false), AJ.strm.avail_out === 0)) {
          return 1;
        }
      }
      AJ.insert = AJ.strstart < 2 ? AJ.strstart : 2;
      if (AD === gO) {
        LC(AJ, true);
        if (AJ.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (AJ.sym_next && (LC(AJ, false), AJ.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    const LM = (AJ, AD) => {
      let AN;
      let AY;
      let AO;
      while (true) {
        if (AJ.lookahead < L0) {
          LK(AJ);
          if (AJ.lookahead < L0 && AD === gD) {
            return 1;
          }
          if (AJ.lookahead === 0) {
            break;
          }
        }
        AN = 0;
        if (AJ.lookahead >= 3) {
          AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AJ.strstart + 3 - 1]);
          AN = AJ.prev[AJ.strstart & AJ.w_mask] = AJ.head[AJ.ins_h];
          AJ.head[AJ.ins_h] = AJ.strstart;
        }
        AJ.prev_length = AJ.match_length;
        AJ.prev_match = AJ.match_start;
        AJ.match_length = 2;
        if (AN !== 0 && AJ.prev_length < AJ.max_lazy_match && AJ.strstart - AN <= AJ.w_size - L0) {
          AJ.match_length = LE(AJ, AN);
          if (AJ.match_length <= 5 && (AJ.strategy === gQ || AJ.match_length === 3 && AJ.strstart - AJ.match_start > 4096)) {
            AJ.match_length = 2;
          }
        }
        if (AJ.prev_length >= 3 && AJ.match_length <= AJ.prev_length) {
          AO = AJ.strstart + AJ.lookahead - 3;
          AY = gM(AJ, AJ.strstart - 1 - AJ.prev_match, AJ.prev_length - 3);
          AJ.lookahead -= AJ.prev_length - 1;
          AJ.prev_length -= 2;
          do {
            if (++AJ.strstart <= AO) {
              AJ.ins_h = L8(AJ, AJ.ins_h, AJ.window[AJ.strstart + 3 - 1]);
              AN = AJ.prev[AJ.strstart & AJ.w_mask] = AJ.head[AJ.ins_h];
              AJ.head[AJ.ins_h] = AJ.strstart;
            }
          } while (--AJ.prev_length != 0);
          AJ.match_available = 0;
          AJ.match_length = 2;
          AJ.strstart++;
          if (AY && (LC(AJ, false), AJ.strm.avail_out === 0)) {
            return 1;
          }
        } else if (AJ.match_available) {
          AY = gM(AJ, 0, AJ.window[AJ.strstart - 1]);
          if (AY) {
            LC(AJ, false);
          }
          AJ.strstart++;
          AJ.lookahead--;
          if (AJ.strm.avail_out === 0) {
            return 1;
          }
        } else {
          AJ.match_available = 1;
          AJ.strstart++;
          AJ.lookahead--;
        }
      }
      if (AJ.match_available) {
        AY = gM(AJ, 0, AJ.window[AJ.strstart - 1]);
        AJ.match_available = 0;
      }
      AJ.insert = AJ.strstart < 2 ? AJ.strstart : 2;
      if (AD === gO) {
        LC(AJ, true);
        if (AJ.strm.avail_out === 0) {
          return 3;
        } else {
          return 4;
        }
      } else if (AJ.sym_next && (LC(AJ, false), AJ.strm.avail_out === 0)) {
        return 1;
      } else {
        return 2;
      }
    };
    function LJ(AJ, AD, AN, AY, AO) {
      this.good_length = AJ;
      this.max_lazy = AD;
      this.nice_length = AN;
      this.max_chain = AY;
      this.func = AO;
    }
    const LD = [new LJ(0, 0, 0, 0, LH), new LJ(4, 4, 8, 4, LZ), new LJ(4, 5, 16, 8, LZ), new LJ(4, 6, 32, 32, LZ), new LJ(4, 4, 16, 16, LM), new LJ(8, 16, 32, 32, LM), new LJ(8, 16, 128, 128, LM), new LJ(8, 32, 128, 256, LM), new LJ(32, 128, 258, 1024, LM), new LJ(32, 258, 258, 4096, LM)];
    function LN() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = gz;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new Uint16Array(1146);
      this.dyn_dtree = new Uint16Array(122);
      this.bl_tree = new Uint16Array(78);
      L6(this.dyn_ltree);
      L6(this.dyn_dtree);
      L6(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(16);
      this.heap = new Uint16Array(573);
      L6(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(573);
      L6(this.depth);
      this.sym_buf = 0;
      this.lit_bufsize = 0;
      this.sym_next = 0;
      this.sym_end = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    const LY = AJ => {
      if (!AJ) {
        return 1;
      }
      const AD = AJ.state;
      if (!AD || AD.strm !== AJ || AD.status !== L1 && AD.status !== 57 && AD.status !== 69 && AD.status !== 73 && AD.status !== 91 && AD.status !== 103 && AD.status !== L2 && AD.status !== L3) {
        return 1;
      } else {
        return 0;
      }
    };
    const LO = AJ => {
      if (LY(AJ)) {
        return L4(AJ, gS);
      }
      AJ.total_in = AJ.total_out = 0;
      AJ.data_type = gF;
      const AD = AJ.state;
      AD.pending = 0;
      AD.pending_out = 0;
      if (AD.wrap < 0) {
        AD.wrap = -AD.wrap;
      }
      AD.status = AD.wrap === 2 ? 57 : AD.wrap ? L1 : L2;
      AJ.adler = AD.wrap === 2 ? 0 : 1;
      AD.last_flush = -2;
      gK(AD);
      return gq;
    };
    const LW = AJ => {
      const AD = LO(AJ);
      var AN;
      if (AD === gq) {
        (AN = AJ.state).window_size = AN.w_size * 2;
        L6(AN.head);
        AN.max_lazy_match = LD[AN.level].max_lazy;
        AN.good_match = LD[AN.level].good_length;
        AN.nice_match = LD[AN.level].nice_length;
        AN.max_chain_length = LD[AN.level].max_chain;
        AN.strstart = 0;
        AN.block_start = 0;
        AN.lookahead = 0;
        AN.insert = 0;
        AN.match_length = AN.prev_length = 2;
        AN.match_available = 0;
        AN.ins_h = 0;
      }
      return AD;
    };
    const Lq = (AJ, AD, AN, AY, AO, AW) => {
      if (!AJ) {
        return gS;
      }
      let Aq = 1;
      if (AD === gR) {
        AD = 6;
      }
      if (AY < 0) {
        Aq = 0;
        AY = -AY;
      } else if (AY > 15) {
        Aq = 2;
        AY -= 16;
      }
      if (AO < 1 || AO > 9 || AN !== gz || AY < 8 || AY > 15 || AD < 0 || AD > 9 || AW < 0 || AW > gT || AY === 8 && Aq !== 1) {
        return L4(AJ, gS);
      }
      if (AY === 8) {
        AY = 9;
      }
      const AA = new LN();
      AJ.state = AA;
      AA.strm = AJ;
      AA.status = L1;
      AA.wrap = Aq;
      AA.gzhead = null;
      AA.w_bits = AY;
      AA.w_size = 1 << AA.w_bits;
      AA.w_mask = AA.w_size - 1;
      AA.hash_bits = AO + 7;
      AA.hash_size = 1 << AA.hash_bits;
      AA.hash_mask = AA.hash_size - 1;
      AA.hash_shift = ~~((AA.hash_bits + 3 - 1) / 3);
      AA.window = new Uint8Array(AA.w_size * 2);
      AA.head = new Uint16Array(AA.hash_size);
      AA.prev = new Uint16Array(AA.w_size);
      AA.lit_bufsize = 1 << AO + 6;
      AA.pending_buf_size = AA.lit_bufsize * 4;
      AA.pending_buf = new Uint8Array(AA.pending_buf_size);
      AA.sym_buf = AA.lit_bufsize;
      AA.sym_end = (AA.lit_bufsize - 1) * 3;
      AA.level = AD;
      AA.strategy = AW;
      AA.method = AN;
      return LW(AJ);
    };
    var LA = (AJ, AD) => {
      if (LY(AJ) || AD > gW || AD < 0) {
        if (AJ) {
          return L4(AJ, gS);
        } else {
          return gS;
        }
      }
      const AN = AJ.state;
      if (!AJ.output || AJ.avail_in !== 0 && !AJ.input || AN.status === L3 && AD !== gO) {
        return L4(AJ, AJ.avail_out === 0 ? gP : gS);
      }
      const AY = AN.last_flush;
      AN.last_flush = AD;
      if (AN.pending !== 0) {
        L9(AJ);
        if (AJ.avail_out === 0) {
          AN.last_flush = -1;
          return gq;
        }
      } else if (AJ.avail_in === 0 && L5(AD) <= L5(AY) && AD !== gO) {
        return L4(AJ, gP);
      }
      if (AN.status === L3 && AJ.avail_in !== 0) {
        return L4(AJ, gP);
      }
      if (AN.status === L1 && AN.wrap === 0) {
        AN.status = L2;
      }
      if (AN.status === L1) {
        let AO = gz + (AN.w_bits - 8 << 4) << 8;
        let AW = -1;
        AW = AN.strategy >= gB || AN.level < 2 ? 0 : AN.level < 6 ? 1 : AN.level === 6 ? 2 : 3;
        AO |= AW << 6;
        if (AN.strstart !== 0) {
          AO |= 32;
        }
        AO += 31 - AO % 31;
        LL(AN, AO);
        if (AN.strstart !== 0) {
          LL(AN, AJ.adler >>> 16);
          LL(AN, AJ.adler & 65535);
        }
        AJ.adler = 1;
        AN.status = L2;
        L9(AJ);
        if (AN.pending !== 0) {
          AN.last_flush = -1;
          return gq;
        }
      }
      if (AN.status === 57) {
        AJ.adler = 0;
        LV(AN, 31);
        LV(AN, 139);
        LV(AN, 8);
        if (AN.gzhead) {
          LV(AN, (AN.gzhead.text ? 1 : 0) + (AN.gzhead.hcrc ? 2 : 0) + (AN.gzhead.extra ? 4 : 0) + (AN.gzhead.name ? 8 : 0) + (AN.gzhead.comment ? 16 : 0));
          LV(AN, AN.gzhead.time & 255);
          LV(AN, AN.gzhead.time >> 8 & 255);
          LV(AN, AN.gzhead.time >> 16 & 255);
          LV(AN, AN.gzhead.time >> 24 & 255);
          LV(AN, AN.level === 9 ? 2 : AN.strategy >= gB || AN.level < 2 ? 4 : 0);
          LV(AN, AN.gzhead.os & 255);
          if (AN.gzhead.extra && AN.gzhead.extra.length) {
            LV(AN, AN.gzhead.extra.length & 255);
            LV(AN, AN.gzhead.extra.length >> 8 & 255);
          }
          if (AN.gzhead.hcrc) {
            AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending, 0);
          }
          AN.gzindex = 0;
          AN.status = 69;
        } else {
          LV(AN, 0);
          LV(AN, 0);
          LV(AN, 0);
          LV(AN, 0);
          LV(AN, 0);
          LV(AN, AN.level === 9 ? 2 : AN.strategy >= gB || AN.level < 2 ? 4 : 0);
          LV(AN, 3);
          AN.status = L2;
          L9(AJ);
          if (AN.pending !== 0) {
            AN.last_flush = -1;
            return gq;
          }
        }
      }
      if (AN.status === 69) {
        if (AN.gzhead.extra) {
          let Aq = AN.pending;
          let AA = (AN.gzhead.extra.length & 65535) - AN.gzindex;
          while (AN.pending + AA > AN.pending_buf_size) {
            let AU = AN.pending_buf_size - AN.pending;
            AN.pending_buf.set(AN.gzhead.extra.subarray(AN.gzindex, AN.gzindex + AU), AN.pending);
            AN.pending = AN.pending_buf_size;
            if (AN.gzhead.hcrc && AN.pending > Aq) {
              AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending - Aq, Aq);
            }
            AN.gzindex += AU;
            L9(AJ);
            if (AN.pending !== 0) {
              AN.last_flush = -1;
              return gq;
            }
            Aq = 0;
            AA -= AU;
          }
          let AS = new Uint8Array(AN.gzhead.extra);
          AN.pending_buf.set(AS.subarray(AN.gzindex, AN.gzindex + AA), AN.pending);
          AN.pending += AA;
          if (AN.gzhead.hcrc && AN.pending > Aq) {
            AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending - Aq, Aq);
          }
          AN.gzindex = 0;
        }
        AN.status = 73;
      }
      if (AN.status === 73) {
        if (AN.gzhead.name) {
          let AP;
          let AR = AN.pending;
          do {
            if (AN.pending === AN.pending_buf_size) {
              if (AN.gzhead.hcrc && AN.pending > AR) {
                AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending - AR, AR);
              }
              L9(AJ);
              if (AN.pending !== 0) {
                AN.last_flush = -1;
                return gq;
              }
              AR = 0;
            }
            AP = AN.gzindex < AN.gzhead.name.length ? AN.gzhead.name.charCodeAt(AN.gzindex++) & 255 : 0;
            LV(AN, AP);
          } while (AP !== 0);
          if (AN.gzhead.hcrc && AN.pending > AR) {
            AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending - AR, AR);
          }
          AN.gzindex = 0;
        }
        AN.status = 91;
      }
      if (AN.status === 91) {
        if (AN.gzhead.comment) {
          let AQ;
          let AB = AN.pending;
          do {
            if (AN.pending === AN.pending_buf_size) {
              if (AN.gzhead.hcrc && AN.pending > AB) {
                AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending - AB, AB);
              }
              L9(AJ);
              if (AN.pending !== 0) {
                AN.last_flush = -1;
                return gq;
              }
              AB = 0;
            }
            AQ = AN.gzindex < AN.gzhead.comment.length ? AN.gzhead.comment.charCodeAt(AN.gzindex++) & 255 : 0;
            LV(AN, AQ);
          } while (AQ !== 0);
          if (AN.gzhead.hcrc && AN.pending > AB) {
            AJ.adler = gL(AJ.adler, AN.pending_buf, AN.pending - AB, AB);
          }
        }
        AN.status = 103;
      }
      if (AN.status === 103) {
        if (AN.gzhead.hcrc) {
          if (AN.pending + 2 > AN.pending_buf_size && (L9(AJ), AN.pending !== 0)) {
            AN.last_flush = -1;
            return gq;
          }
          LV(AN, AJ.adler & 255);
          LV(AN, AJ.adler >> 8 & 255);
          AJ.adler = 0;
        }
        AN.status = L2;
        L9(AJ);
        if (AN.pending !== 0) {
          AN.last_flush = -1;
          return gq;
        }
      }
      if (AJ.avail_in !== 0 || AN.lookahead !== 0 || AD !== gD && AN.status !== L3) {
        let AG = AN.level === 0 ? LH(AN, AD) : AN.strategy === gB ? ((AT, AX) => {
          let AF;
          while (true) {
            if (AT.lookahead === 0 && (LK(AT), AT.lookahead === 0)) {
              if (AX === gD) {
                return 1;
              }
              break;
            }
            AT.match_length = 0;
            AF = gM(AT, 0, AT.window[AT.strstart]);
            AT.lookahead--;
            AT.strstart++;
            if (AF && (LC(AT, false), AT.strm.avail_out === 0)) {
              return 1;
            }
          }
          AT.insert = 0;
          if (AX === gO) {
            LC(AT, true);
            if (AT.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (AT.sym_next && (LC(AT, false), AT.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        })(AN, AD) : AN.strategy === gG ? ((AT, AX) => {
          let AF;
          let Az;
          let Aj;
          let S0;
          const S1 = AT.window;
          while (true) {
            if (AT.lookahead <= gj) {
              LK(AT);
              if (AT.lookahead <= gj && AX === gD) {
                return 1;
              }
              if (AT.lookahead === 0) {
                break;
              }
            }
            AT.match_length = 0;
            if (AT.lookahead >= 3 && AT.strstart > 0 && (Aj = AT.strstart - 1, Az = S1[Aj], Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj])) {
              S0 = AT.strstart + gj;
              do {} while (Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj] && Az === S1[++Aj] && Aj < S0);
              AT.match_length = gj - (S0 - Aj);
              if (AT.match_length > AT.lookahead) {
                AT.match_length = AT.lookahead;
              }
            }
            if (AT.match_length >= 3) {
              AF = gM(AT, 1, AT.match_length - 3);
              AT.lookahead -= AT.match_length;
              AT.strstart += AT.match_length;
              AT.match_length = 0;
            } else {
              AF = gM(AT, 0, AT.window[AT.strstart]);
              AT.lookahead--;
              AT.strstart++;
            }
            if (AF && (LC(AT, false), AT.strm.avail_out === 0)) {
              return 1;
            }
          }
          AT.insert = 0;
          if (AX === gO) {
            LC(AT, true);
            if (AT.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (AT.sym_next && (LC(AT, false), AT.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        })(AN, AD) : LD[AN.level].func(AN, AD);
        if (AG === 3 || AG === 4) {
          AN.status = L3;
        }
        if (AG === 1 || AG === 3) {
          if (AJ.avail_out === 0) {
            AN.last_flush = -1;
          }
          return gq;
        }
        if (AG === 2 && (AD === gN ? gJ(AN) : AD !== gW && (gH(AN, 0, 0, false), AD === gY && (L6(AN.head), AN.lookahead === 0 && (AN.strstart = 0, AN.block_start = 0, AN.insert = 0))), L9(AJ), AJ.avail_out === 0)) {
          AN.last_flush = -1;
          return gq;
        }
      }
      if (AD !== gO) {
        return gq;
      } else if (AN.wrap <= 0) {
        return gA;
      } else {
        if (AN.wrap === 2) {
          LV(AN, AJ.adler & 255);
          LV(AN, AJ.adler >> 8 & 255);
          LV(AN, AJ.adler >> 16 & 255);
          LV(AN, AJ.adler >> 24 & 255);
          LV(AN, AJ.total_in & 255);
          LV(AN, AJ.total_in >> 8 & 255);
          LV(AN, AJ.total_in >> 16 & 255);
          LV(AN, AJ.total_in >> 24 & 255);
        } else {
          LL(AN, AJ.adler >>> 16);
          LL(AN, AJ.adler & 65535);
        }
        L9(AJ);
        if (AN.wrap > 0) {
          AN.wrap = -AN.wrap;
        }
        if (AN.pending !== 0) {
          return gq;
        } else {
          return gA;
        }
      }
    };
    var LS = {
      deflateInit: (AJ, AD) => Lq(AJ, AD, gz, 15, 8, gX),
      deflateInit2: Lq,
      deflateReset: LW,
      deflateResetKeep: LO,
      deflateSetHeader: (AJ, AD) => LY(AJ) || AJ.state.wrap !== 2 ? gS : (AJ.state.gzhead = AD, gq),
      deflate: LA,
      deflateEnd: AJ => {
        if (LY(AJ)) {
          return gS;
        }
        const AD = AJ.state.status;
        AJ.state = null;
        if (AD === L2) {
          return L4(AJ, gU);
        } else {
          return gq;
        }
      },
      deflateSetDictionary: (AJ, AD) => {
        let AN = AD.length;
        if (LY(AJ)) {
          return gS;
        }
        const AY = AJ.state;
        const AO = AY.wrap;
        if (AO === 2 || AO === 1 && AY.status !== L1 || AY.lookahead) {
          return gS;
        }
        if (AO === 1) {
          AJ.adler = gC(AJ.adler, AD, AN, 0);
        }
        AY.wrap = 0;
        if (AN >= AY.w_size) {
          if (AO === 0) {
            L6(AY.head);
            AY.strstart = 0;
            AY.block_start = 0;
            AY.insert = 0;
          }
          let AS = new Uint8Array(AY.w_size);
          AS.set(AD.subarray(AN - AY.w_size, AN), 0);
          AD = AS;
          AN = AY.w_size;
        }
        const AW = AJ.avail_in;
        const Aq = AJ.next_in;
        const AA = AJ.input;
        AJ.avail_in = AN;
        AJ.next_in = 0;
        AJ.input = AD;
        LK(AY);
        while (AY.lookahead >= 3) {
          let AU = AY.strstart;
          let AP = AY.lookahead - 2;
          do {
            AY.ins_h = L8(AY, AY.ins_h, AY.window[AU + 3 - 1]);
            AY.prev[AU & AY.w_mask] = AY.head[AY.ins_h];
            AY.head[AY.ins_h] = AU;
            AU++;
          } while (--AP);
          AY.strstart = AU;
          AY.lookahead = 2;
          LK(AY);
        }
        AY.strstart += AY.lookahead;
        AY.block_start = AY.strstart;
        AY.insert = AY.lookahead;
        AY.lookahead = 0;
        AY.match_length = AY.prev_length = 2;
        AY.match_available = 0;
        AJ.next_in = Aq;
        AJ.input = AA;
        AJ.avail_in = AW;
        AY.wrap = AO;
        return gq;
      },
      deflateInfo: "pako deflate (from Nodeca project)"
    };
    const LU = (AJ, AD) => Object.prototype.hasOwnProperty.call(AJ, AD);
    function LP(AJ) {
      const AD = Array.prototype.slice.call(arguments, 1);
      while (AD.length) {
        const AN = AD.shift();
        if (AN) {
          if (typeof AN != "object") {
            throw new TypeError(AN + "must be non-object");
          }
          for (const AY in AN) {
            if (LU(AN, AY)) {
              AJ[AY] = AN[AY];
            }
          }
        }
      }
      return AJ;
    }
    var LR = AJ => {
      let AD = 0;
      for (let AY = 0, AO = AJ.length; AY < AO; AY++) {
        AD += AJ[AY].length;
      }
      const AN = new Uint8Array(AD);
      for (let AW = 0, Aq = 0, AA = AJ.length; AW < AA; AW++) {
        let AS = AJ[AW];
        AN.set(AS, Aq);
        Aq += AS.length;
      }
      return AN;
    };
    let LQ = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (AJ) {
      LQ = false;
    }
    const LB = new Uint8Array(256);
    for (let AD = 0; AD < 256; AD++) {
      LB[AD] = AD >= 252 ? 6 : AD >= 248 ? 5 : AD >= 240 ? 4 : AD >= 224 ? 3 : AD >= 192 ? 2 : 1;
    }
    LB[254] = LB[254] = 1;
    var LG = AN => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(AN);
      }
      let AY;
      let AO;
      let AW;
      let Aq;
      let AA;
      let AS = AN.length;
      let AU = 0;
      for (Aq = 0; Aq < AS; Aq++) {
        AO = AN.charCodeAt(Aq);
        if ((AO & 64512) == 55296 && Aq + 1 < AS) {
          AW = AN.charCodeAt(Aq + 1);
          if ((AW & 64512) == 56320) {
            AO = 65536 + (AO - 55296 << 10) + (AW - 56320);
            Aq++;
          }
        }
        AU += AO < 128 ? 1 : AO < 2048 ? 2 : AO < 65536 ? 3 : 4;
      }
      AY = new Uint8Array(AU);
      AA = 0;
      Aq = 0;
      for (; AA < AU; Aq++) {
        AO = AN.charCodeAt(Aq);
        if ((AO & 64512) == 55296 && Aq + 1 < AS) {
          AW = AN.charCodeAt(Aq + 1);
          if ((AW & 64512) == 56320) {
            AO = 65536 + (AO - 55296 << 10) + (AW - 56320);
            Aq++;
          }
        }
        if (AO < 128) {
          AY[AA++] = AO;
        } else if (AO < 2048) {
          AY[AA++] = AO >>> 6 | 192;
          AY[AA++] = AO & 63 | 128;
        } else if (AO < 65536) {
          AY[AA++] = AO >>> 12 | 224;
          AY[AA++] = AO >>> 6 & 63 | 128;
          AY[AA++] = AO & 63 | 128;
        } else {
          AY[AA++] = AO >>> 18 | 240;
          AY[AA++] = AO >>> 12 & 63 | 128;
          AY[AA++] = AO >>> 6 & 63 | 128;
          AY[AA++] = AO & 63 | 128;
        }
      }
      return AY;
    };
    var LT = (AN, AY) => {
      const AO = AY || AN.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(AN.subarray(0, AY));
      }
      let AW;
      let Aq;
      const AA = new Array(AO * 2);
      Aq = 0;
      AW = 0;
      while (AW < AO) {
        let AS = AN[AW++];
        if (AS < 128) {
          AA[Aq++] = AS;
          continue;
        }
        let AU = LB[AS];
        if (AU > 4) {
          AA[Aq++] = 65533;
          AW += AU - 1;
        } else {
          for (AS &= AU === 2 ? 31 : AU === 3 ? 15 : 7; AU > 1 && AW < AO;) {
            AS = AS << 6 | AN[AW++] & 63;
            AU--;
          }
          if (AU > 1) {
            AA[Aq++] = 65533;
          } else if (AS < 65536) {
            AA[Aq++] = AS;
          } else {
            AS -= 65536;
            AA[Aq++] = AS >> 10 & 1023 | 55296;
            AA[Aq++] = AS & 1023 | 56320;
          }
        }
      }
      return ((AP, AR) => {
        if (AR < 65534 && AP.subarray && LQ) {
          return String.fromCharCode.apply(null, AP.length === AR ? AP : AP.subarray(0, AR));
        }
        let AQ = "";
        for (let AB = 0; AB < AR; AB++) {
          AQ += String.fromCharCode(AP[AB]);
        }
        return AQ;
      })(AA, Aq);
    };
    var LX = (AN, AY) => {
      if ((AY = AY || AN.length) > AN.length) {
        AY = AN.length;
      }
      let AO = AY - 1;
      while (AO >= 0 && (AN[AO] & 192) == 128) {
        AO--;
      }
      if (AO < 0 || AO === 0) {
        return AY;
      } else if (AO + LB[AN[AO]] > AY) {
        return AO;
      } else {
        return AY;
      }
    };
    function LF() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    const Lz = Object.prototype.toString;
    const {
      Z_NO_FLUSH: Lj,
      Z_SYNC_FLUSH: I0,
      Z_FULL_FLUSH: I1,
      Z_FINISH: I2,
      Z_OK: I3,
      Z_STREAM_END: I4,
      Z_DEFAULT_COMPRESSION: I5,
      Z_DEFAULT_STRATEGY: I6,
      Z_DEFLATED: I7
    } = gE;
    function I8(AN) {
      this.options = LP({
        level: I5,
        method: I7,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: I6
      }, AN || {});
      let AY = this.options;
      if (AY.raw && AY.windowBits > 0) {
        AY.windowBits = -AY.windowBits;
      } else if (AY.gzip && AY.windowBits > 0 && AY.windowBits < 16) {
        AY.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new LF();
      this.strm.avail_out = 0;
      let AO = LS.deflateInit2(this.strm, AY.level, AY.method, AY.windowBits, AY.memLevel, AY.strategy);
      if (AO !== I3) {
        throw new Error(gI[AO]);
      }
      if (AY.header) {
        LS.deflateSetHeader(this.strm, AY.header);
      }
      if (AY.dictionary) {
        let AW;
        AW = typeof AY.dictionary == "string" ? LG(AY.dictionary) : Lz.call(AY.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(AY.dictionary) : AY.dictionary;
        AO = LS.deflateSetDictionary(this.strm, AW);
        if (AO !== I3) {
          throw new Error(gI[AO]);
        }
        this._dict_set = true;
      }
    }
    function I9(AN, AY) {
      const AO = new I8(AY);
      AO.push(AN, true);
      if (AO.err) {
        throw AO.msg || gI[AO.err];
      }
      return AO.result;
    }
    I8.prototype.push = function (AN, AY) {
      const AO = this.strm;
      const AW = this.options.chunkSize;
      let Aq;
      let AA;
      if (this.ended) {
        return false;
      }
      AA = AY === ~~AY ? AY : AY === true ? I2 : Lj;
      if (typeof AN == "string") {
        AO.input = LG(AN);
      } else if (Lz.call(AN) === "[object ArrayBuffer]") {
        AO.input = new Uint8Array(AN);
      } else {
        AO.input = AN;
      }
      AO.next_in = 0;
      AO.avail_in = AO.input.length;
      while (true) {
        if (AO.avail_out === 0) {
          AO.output = new Uint8Array(AW);
          AO.next_out = 0;
          AO.avail_out = AW;
        }
        if ((AA === I0 || AA === I1) && AO.avail_out <= 6) {
          this.onData(AO.output.subarray(0, AO.next_out));
          AO.avail_out = 0;
        } else {
          Aq = LS.deflate(AO, AA);
          if (Aq === I4) {
            if (AO.next_out > 0) {
              this.onData(AO.output.subarray(0, AO.next_out));
            }
            Aq = LS.deflateEnd(this.strm);
            this.onEnd(Aq);
            this.ended = true;
            return Aq === I3;
          }
          if (AO.avail_out !== 0) {
            if (AA > 0 && AO.next_out > 0) {
              this.onData(AO.output.subarray(0, AO.next_out));
              AO.avail_out = 0;
            } else if (AO.avail_in === 0) {
              break;
            }
          } else {
            this.onData(AO.output);
          }
        }
      }
      return true;
    };
    I8.prototype.onData = function (AN) {
      this.chunks.push(AN);
    };
    I8.prototype.onEnd = function (AN) {
      if (AN === I3) {
        this.result = LR(this.chunks);
      }
      this.chunks = [];
      this.err = AN;
      this.msg = this.strm.msg;
    };
    var IC = {
      Deflate: I8,
      deflate: I9,
      deflateRaw: function (AN, AY) {
        (AY = AY || {}).raw = true;
        return I9(AN, AY);
      },
      gzip: function (AN, AY) {
        (AY = AY || {}).gzip = true;
        return I9(AN, AY);
      },
      constants: gE
    };
    const IV = 16209;
    function IL(AN, AY) {
      let AO;
      let AW;
      let Aq;
      let AA;
      let AS;
      let AU;
      let AP;
      let AR;
      let AQ;
      let AB;
      let AG;
      let AT;
      let AX;
      let AF;
      let Az;
      let Aj;
      let S0;
      let S1;
      let S2;
      let S3;
      let S4;
      let S5;
      let S6;
      let S7;
      const S8 = AN.state;
      AO = AN.next_in;
      S6 = AN.input;
      AW = AO + (AN.avail_in - 5);
      Aq = AN.next_out;
      S7 = AN.output;
      AA = Aq - (AY - AN.avail_out);
      AS = Aq + (AN.avail_out - 257);
      AU = S8.dmax;
      AP = S8.wsize;
      AR = S8.whave;
      AQ = S8.wnext;
      AB = S8.window;
      AG = S8.hold;
      AT = S8.bits;
      AX = S8.lencode;
      AF = S8.distcode;
      Az = (1 << S8.lenbits) - 1;
      Aj = (1 << S8.distbits) - 1;
      S9: do {
        if (AT < 15) {
          AG += S6[AO++] << AT;
          AT += 8;
          AG += S6[AO++] << AT;
          AT += 8;
        }
        S0 = AX[AG & Az];
        SC: while (true) {
          S1 = S0 >>> 24;
          AG >>>= S1;
          AT -= S1;
          S1 = S0 >>> 16 & 255;
          if (S1 === 0) {
            S7[Aq++] = S0 & 65535;
          } else {
            if (!(S1 & 16)) {
              if ((S1 & 64) == 0) {
                S0 = AX[(S0 & 65535) + (AG & (1 << S1) - 1)];
                continue SC;
              }
              if (S1 & 32) {
                S8.mode = 16191;
                break S9;
              }
              AN.msg = "invalid literal/length code";
              S8.mode = IV;
              break S9;
            }
            S2 = S0 & 65535;
            S1 &= 15;
            if (S1) {
              if (AT < S1) {
                AG += S6[AO++] << AT;
                AT += 8;
              }
              S2 += AG & (1 << S1) - 1;
              AG >>>= S1;
              AT -= S1;
            }
            if (AT < 15) {
              AG += S6[AO++] << AT;
              AT += 8;
              AG += S6[AO++] << AT;
              AT += 8;
            }
            S0 = AF[AG & Aj];
            SV: while (true) {
              S1 = S0 >>> 24;
              AG >>>= S1;
              AT -= S1;
              S1 = S0 >>> 16 & 255;
              if (!(S1 & 16)) {
                if ((S1 & 64) == 0) {
                  S0 = AF[(S0 & 65535) + (AG & (1 << S1) - 1)];
                  continue SV;
                }
                AN.msg = "invalid distance code";
                S8.mode = IV;
                break S9;
              }
              S3 = S0 & 65535;
              S1 &= 15;
              if (AT < S1) {
                AG += S6[AO++] << AT;
                AT += 8;
                if (AT < S1) {
                  AG += S6[AO++] << AT;
                  AT += 8;
                }
              }
              S3 += AG & (1 << S1) - 1;
              if (S3 > AU) {
                AN.msg = "invalid distance too far back";
                S8.mode = IV;
                break S9;
              }
              AG >>>= S1;
              AT -= S1;
              S1 = Aq - AA;
              if (S3 > S1) {
                S1 = S3 - S1;
                if (S1 > AR && S8.sane) {
                  AN.msg = "invalid distance too far back";
                  S8.mode = IV;
                  break S9;
                }
                S4 = 0;
                S5 = AB;
                if (AQ === 0) {
                  S4 += AP - S1;
                  if (S1 < S2) {
                    S2 -= S1;
                    do {
                      S7[Aq++] = AB[S4++];
                    } while (--S1);
                    S4 = Aq - S3;
                    S5 = S7;
                  }
                } else if (AQ < S1) {
                  S4 += AP + AQ - S1;
                  S1 -= AQ;
                  if (S1 < S2) {
                    S2 -= S1;
                    do {
                      S7[Aq++] = AB[S4++];
                    } while (--S1);
                    S4 = 0;
                    if (AQ < S2) {
                      S1 = AQ;
                      S2 -= S1;
                      do {
                        S7[Aq++] = AB[S4++];
                      } while (--S1);
                      S4 = Aq - S3;
                      S5 = S7;
                    }
                  }
                } else {
                  S4 += AQ - S1;
                  if (S1 < S2) {
                    S2 -= S1;
                    do {
                      S7[Aq++] = AB[S4++];
                    } while (--S1);
                    S4 = Aq - S3;
                    S5 = S7;
                  }
                }
                while (S2 > 2) {
                  S7[Aq++] = S5[S4++];
                  S7[Aq++] = S5[S4++];
                  S7[Aq++] = S5[S4++];
                  S2 -= 3;
                }
                if (S2) {
                  S7[Aq++] = S5[S4++];
                  if (S2 > 1) {
                    S7[Aq++] = S5[S4++];
                  }
                }
              } else {
                S4 = Aq - S3;
                do {
                  S7[Aq++] = S7[S4++];
                  S7[Aq++] = S7[S4++];
                  S7[Aq++] = S7[S4++];
                  S2 -= 3;
                } while (S2 > 2);
                if (S2) {
                  S7[Aq++] = S7[S4++];
                  if (S2 > 1) {
                    S7[Aq++] = S7[S4++];
                  }
                }
              }
              break;
            }
          }
          break;
        }
      } while (AO < AW && Aq < AS);
      S2 = AT >> 3;
      AO -= S2;
      AT -= S2 << 3;
      AG &= (1 << AT) - 1;
      AN.next_in = AO;
      AN.next_out = Aq;
      AN.avail_in = AO < AW ? AW - AO + 5 : 5 - (AO - AW);
      AN.avail_out = Aq < AS ? AS - Aq + 257 : 257 - (Aq - AS);
      S8.hold = AG;
      S8.bits = AT;
    }
    const II = 15;
    const IE = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const IK = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const IH = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const IZ = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var IM = (AN, AY, AO, AW, Aq, AA, AS, AU) => {
      const AP = AU.bits;
      let AR;
      let AQ;
      let AB;
      let AG;
      let AT;
      let AX;
      let AF = 0;
      let Az = 0;
      let Aj = 0;
      let S0 = 0;
      let S1 = 0;
      let S2 = 0;
      let S3 = 0;
      let S4 = 0;
      let S5 = 0;
      let S6 = 0;
      let S7 = null;
      const S8 = new Uint16Array(16);
      const S9 = new Uint16Array(16);
      let SC;
      let SV;
      let SL;
      let SI = null;
      for (AF = 0; AF <= II; AF++) {
        S8[AF] = 0;
      }
      for (Az = 0; Az < AW; Az++) {
        S8[AY[AO + Az]]++;
      }
      S1 = AP;
      S0 = II;
      for (; S0 >= 1 && S8[S0] === 0; S0--);
      if (S1 > S0) {
        S1 = S0;
      }
      if (S0 === 0) {
        Aq[AA++] = 20971520;
        Aq[AA++] = 20971520;
        AU.bits = 1;
        return 0;
      }
      for (Aj = 1; Aj < S0 && S8[Aj] === 0; Aj++);
      if (S1 < Aj) {
        S1 = Aj;
      }
      S4 = 1;
      AF = 1;
      for (; AF <= II; AF++) {
        S4 <<= 1;
        S4 -= S8[AF];
        if (S4 < 0) {
          return -1;
        }
      }
      if (S4 > 0 && (AN === 0 || S0 !== 1)) {
        return -1;
      }
      S9[1] = 0;
      AF = 1;
      for (; AF < II; AF++) {
        S9[AF + 1] = S9[AF] + S8[AF];
      }
      for (Az = 0; Az < AW; Az++) {
        if (AY[AO + Az] !== 0) {
          AS[S9[AY[AO + Az]]++] = Az;
        }
      }
      if (AN === 0) {
        S7 = SI = AS;
        AX = 20;
      } else if (AN === 1) {
        S7 = IE;
        SI = IK;
        AX = 257;
      } else {
        S7 = IH;
        SI = IZ;
        AX = 0;
      }
      S6 = 0;
      Az = 0;
      AF = Aj;
      AT = AA;
      S2 = S1;
      S3 = 0;
      AB = -1;
      S5 = 1 << S1;
      AG = S5 - 1;
      if (AN === 1 && S5 > 852 || AN === 2 && S5 > 592) {
        return 1;
      }
      while (true) {
        SC = AF - S3;
        if (AS[Az] + 1 < AX) {
          SV = 0;
          SL = AS[Az];
        } else if (AS[Az] >= AX) {
          SV = SI[AS[Az] - AX];
          SL = S7[AS[Az] - AX];
        } else {
          SV = 96;
          SL = 0;
        }
        AR = 1 << AF - S3;
        AQ = 1 << S2;
        Aj = AQ;
        do {
          AQ -= AR;
          Aq[AT + (S6 >> S3) + AQ] = SC << 24 | SV << 16 | SL | 0;
        } while (AQ !== 0);
        for (AR = 1 << AF - 1; S6 & AR;) {
          AR >>= 1;
        }
        if (AR !== 0) {
          S6 &= AR - 1;
          S6 += AR;
        } else {
          S6 = 0;
        }
        Az++;
        if (--S8[AF] == 0) {
          if (AF === S0) {
            break;
          }
          AF = AY[AO + AS[Az]];
        }
        if (AF > S1 && (S6 & AG) !== AB) {
          if (S3 === 0) {
            S3 = S1;
          }
          AT += Aj;
          S2 = AF - S3;
          S4 = 1 << S2;
          while (S2 + S3 < S0 && (S4 -= S8[S2 + S3], !(S4 <= 0))) {
            S2++;
            S4 <<= 1;
          }
          S5 += 1 << S2;
          if (AN === 1 && S5 > 852 || AN === 2 && S5 > 592) {
            return 1;
          }
          AB = S6 & AG;
          Aq[AB] = S1 << 24 | S2 << 16 | AT - AA | 0;
        }
      }
      if (S6 !== 0) {
        Aq[AT + S6] = AF - S3 << 24 | 4194304 | 0;
      }
      AU.bits = S1;
      return 0;
    };
    const {
      Z_FINISH: IJ,
      Z_BLOCK: ID,
      Z_TREES: IN,
      Z_OK: IY,
      Z_STREAM_END: IO,
      Z_NEED_DICT: IW,
      Z_STREAM_ERROR: Iq,
      Z_DATA_ERROR: IA,
      Z_MEM_ERROR: IS,
      Z_BUF_ERROR: IU,
      Z_DEFLATED: IP
    } = gE;
    const IR = 16180;
    const IQ = 16190;
    const IB = 16191;
    const IG = 16192;
    const IT = 16194;
    const IX = 16199;
    const IF = 16200;
    const Iz = 16206;
    const Ij = 16209;
    const f0 = AN => (AN >>> 24 & 255) + (AN >>> 8 & 65280) + ((AN & 65280) << 8) + ((AN & 255) << 24);
    function f1() {
      this.strm = null;
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new Uint16Array(320);
      this.work = new Uint16Array(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    const f2 = AN => {
      if (!AN) {
        return 1;
      }
      const AY = AN.state;
      if (!AY || AY.strm !== AN || AY.mode < IR || AY.mode > 16211) {
        return 1;
      } else {
        return 0;
      }
    };
    const f3 = AN => {
      if (f2(AN)) {
        return Iq;
      }
      const AY = AN.state;
      AN.total_in = AN.total_out = AY.total = 0;
      AN.msg = "";
      if (AY.wrap) {
        AN.adler = AY.wrap & 1;
      }
      AY.mode = IR;
      AY.last = 0;
      AY.havedict = 0;
      AY.flags = -1;
      AY.dmax = 32768;
      AY.head = null;
      AY.hold = 0;
      AY.bits = 0;
      AY.lencode = AY.lendyn = new Int32Array(852);
      AY.distcode = AY.distdyn = new Int32Array(592);
      AY.sane = 1;
      AY.back = -1;
      return IY;
    };
    const f4 = AN => {
      if (f2(AN)) {
        return Iq;
      }
      const AY = AN.state;
      AY.wsize = 0;
      AY.whave = 0;
      AY.wnext = 0;
      return f3(AN);
    };
    const f5 = (AN, AY) => {
      let AO;
      if (f2(AN)) {
        return Iq;
      }
      const AW = AN.state;
      if (AY < 0) {
        AO = 0;
        AY = -AY;
      } else {
        AO = 5 + (AY >> 4);
        if (AY < 48) {
          AY &= 15;
        }
      }
      if (AY && (AY < 8 || AY > 15)) {
        return Iq;
      } else {
        if (AW.window !== null && AW.wbits !== AY) {
          AW.window = null;
        }
        AW.wrap = AO;
        AW.wbits = AY;
        return f4(AN);
      }
    };
    const f6 = (AN, AY) => {
      if (!AN) {
        return Iq;
      }
      const AO = new f1();
      AN.state = AO;
      AO.strm = AN;
      AO.window = null;
      AO.mode = IR;
      const AW = f5(AN, AY);
      if (AW !== IY) {
        AN.state = null;
      }
      return AW;
    };
    let f7;
    let f8;
    let f9 = true;
    const fC = AN => {
      if (f9) {
        f7 = new Int32Array(512);
        f8 = new Int32Array(32);
        let AY = 0;
        while (AY < 144) {
          AN.lens[AY++] = 8;
        }
        while (AY < 256) {
          AN.lens[AY++] = 9;
        }
        while (AY < 280) {
          AN.lens[AY++] = 7;
        }
        while (AY < 288) {
          AN.lens[AY++] = 8;
        }
        IM(1, AN.lens, 0, 288, f7, 0, AN.work, {
          bits: 9
        });
        AY = 0;
        while (AY < 32) {
          AN.lens[AY++] = 5;
        }
        IM(2, AN.lens, 0, 32, f8, 0, AN.work, {
          bits: 5
        });
        f9 = false;
      }
      AN.lencode = f7;
      AN.lenbits = 9;
      AN.distcode = f8;
      AN.distbits = 5;
    };
    const fV = (AN, AY, AO, AW) => {
      let Aq;
      const AA = AN.state;
      if (AA.window === null) {
        AA.wsize = 1 << AA.wbits;
        AA.wnext = 0;
        AA.whave = 0;
        AA.window = new Uint8Array(AA.wsize);
      }
      if (AW >= AA.wsize) {
        AA.window.set(AY.subarray(AO - AA.wsize, AO), 0);
        AA.wnext = 0;
        AA.whave = AA.wsize;
      } else {
        Aq = AA.wsize - AA.wnext;
        if (Aq > AW) {
          Aq = AW;
        }
        AA.window.set(AY.subarray(AO - AW, AO - AW + Aq), AA.wnext);
        if (AW -= Aq) {
          AA.window.set(AY.subarray(AO - AW, AO), 0);
          AA.wnext = AW;
          AA.whave = AA.wsize;
        } else {
          AA.wnext += Aq;
          if (AA.wnext === AA.wsize) {
            AA.wnext = 0;
          }
          if (AA.whave < AA.wsize) {
            AA.whave += Aq;
          }
        }
      }
      return 0;
    };
    var fL = (AN, AY) => {
      let AO;
      let AW;
      let Aq;
      let AA;
      let AS;
      let AU;
      let AP;
      let AR;
      let AQ;
      let AB;
      let AG;
      let AT;
      let AX;
      let AF;
      let Az;
      let Aj;
      let S0;
      let S1;
      let S2;
      let S3;
      let S4;
      let S5;
      let S6 = 0;
      const S7 = new Uint8Array(4);
      let S8;
      let S9;
      const SC = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (f2(AN) || !AN.output || !AN.input && AN.avail_in !== 0) {
        return Iq;
      }
      AO = AN.state;
      if (AO.mode === IB) {
        AO.mode = IG;
      }
      AS = AN.next_out;
      Aq = AN.output;
      AP = AN.avail_out;
      AA = AN.next_in;
      AW = AN.input;
      AU = AN.avail_in;
      AR = AO.hold;
      AQ = AO.bits;
      AB = AU;
      AG = AP;
      S5 = IY;
      SV: while (true) {
        switch (AO.mode) {
          case IR:
            if (AO.wrap === 0) {
              AO.mode = IG;
              break;
            }
            while (AQ < 16) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            if (AO.wrap & 2 && AR === 35615) {
              if (AO.wbits === 0) {
                AO.wbits = 15;
              }
              AO.check = 0;
              S7[0] = AR & 255;
              S7[1] = AR >>> 8 & 255;
              AO.check = gL(AO.check, S7, 2, 0);
              AR = 0;
              AQ = 0;
              AO.mode = 16181;
              break;
            }
            if (AO.head) {
              AO.head.done = false;
            }
            if (!(AO.wrap & 1) || (((AR & 255) << 8) + (AR >> 8)) % 31) {
              AN.msg = "incorrect header check";
              AO.mode = Ij;
              break;
            }
            if ((AR & 15) !== IP) {
              AN.msg = "unknown compression method";
              AO.mode = Ij;
              break;
            }
            AR >>>= 4;
            AQ -= 4;
            S4 = 8 + (AR & 15);
            if (AO.wbits === 0) {
              AO.wbits = S4;
            }
            if (S4 > 15 || S4 > AO.wbits) {
              AN.msg = "invalid window size";
              AO.mode = Ij;
              break;
            }
            AO.dmax = 1 << AO.wbits;
            AO.flags = 0;
            AN.adler = AO.check = 1;
            AO.mode = AR & 512 ? 16189 : IB;
            AR = 0;
            AQ = 0;
            break;
          case 16181:
            while (AQ < 16) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            AO.flags = AR;
            if ((AO.flags & 255) !== IP) {
              AN.msg = "unknown compression method";
              AO.mode = Ij;
              break;
            }
            if (AO.flags & 57344) {
              AN.msg = "unknown header flags set";
              AO.mode = Ij;
              break;
            }
            if (AO.head) {
              AO.head.text = AR >> 8 & 1;
            }
            if (AO.flags & 512 && AO.wrap & 4) {
              S7[0] = AR & 255;
              S7[1] = AR >>> 8 & 255;
              AO.check = gL(AO.check, S7, 2, 0);
            }
            AR = 0;
            AQ = 0;
            AO.mode = 16182;
          case 16182:
            while (AQ < 32) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            if (AO.head) {
              AO.head.time = AR;
            }
            if (AO.flags & 512 && AO.wrap & 4) {
              S7[0] = AR & 255;
              S7[1] = AR >>> 8 & 255;
              S7[2] = AR >>> 16 & 255;
              S7[3] = AR >>> 24 & 255;
              AO.check = gL(AO.check, S7, 4, 0);
            }
            AR = 0;
            AQ = 0;
            AO.mode = 16183;
          case 16183:
            while (AQ < 16) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            if (AO.head) {
              AO.head.xflags = AR & 255;
              AO.head.os = AR >> 8;
            }
            if (AO.flags & 512 && AO.wrap & 4) {
              S7[0] = AR & 255;
              S7[1] = AR >>> 8 & 255;
              AO.check = gL(AO.check, S7, 2, 0);
            }
            AR = 0;
            AQ = 0;
            AO.mode = 16184;
          case 16184:
            if (AO.flags & 1024) {
              while (AQ < 16) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              AO.length = AR;
              if (AO.head) {
                AO.head.extra_len = AR;
              }
              if (AO.flags & 512 && AO.wrap & 4) {
                S7[0] = AR & 255;
                S7[1] = AR >>> 8 & 255;
                AO.check = gL(AO.check, S7, 2, 0);
              }
              AR = 0;
              AQ = 0;
            } else if (AO.head) {
              AO.head.extra = null;
            }
            AO.mode = 16185;
          case 16185:
            if (AO.flags & 1024 && (AT = AO.length, AT > AU && (AT = AU), AT && (AO.head && (S4 = AO.head.extra_len - AO.length, AO.head.extra ||= new Uint8Array(AO.head.extra_len), AO.head.extra.set(AW.subarray(AA, AA + AT), S4)), AO.flags & 512 && AO.wrap & 4 && (AO.check = gL(AO.check, AW, AT, AA)), AU -= AT, AA += AT, AO.length -= AT), AO.length)) {
              break SV;
            }
            AO.length = 0;
            AO.mode = 16186;
          case 16186:
            if (AO.flags & 2048) {
              if (AU === 0) {
                break SV;
              }
              AT = 0;
              do {
                S4 = AW[AA + AT++];
                if (AO.head && S4 && AO.length < 65536) {
                  AO.head.name += String.fromCharCode(S4);
                }
              } while (S4 && AT < AU);
              if (AO.flags & 512 && AO.wrap & 4) {
                AO.check = gL(AO.check, AW, AT, AA);
              }
              AU -= AT;
              AA += AT;
              if (S4) {
                break SV;
              }
            } else if (AO.head) {
              AO.head.name = null;
            }
            AO.length = 0;
            AO.mode = 16187;
          case 16187:
            if (AO.flags & 4096) {
              if (AU === 0) {
                break SV;
              }
              AT = 0;
              do {
                S4 = AW[AA + AT++];
                if (AO.head && S4 && AO.length < 65536) {
                  AO.head.comment += String.fromCharCode(S4);
                }
              } while (S4 && AT < AU);
              if (AO.flags & 512 && AO.wrap & 4) {
                AO.check = gL(AO.check, AW, AT, AA);
              }
              AU -= AT;
              AA += AT;
              if (S4) {
                break SV;
              }
            } else if (AO.head) {
              AO.head.comment = null;
            }
            AO.mode = 16188;
          case 16188:
            if (AO.flags & 512) {
              while (AQ < 16) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              if (AO.wrap & 4 && AR !== (AO.check & 65535)) {
                AN.msg = "header crc mismatch";
                AO.mode = Ij;
                break;
              }
              AR = 0;
              AQ = 0;
            }
            if (AO.head) {
              AO.head.hcrc = AO.flags >> 9 & 1;
              AO.head.done = true;
            }
            AN.adler = AO.check = 0;
            AO.mode = IB;
            break;
          case 16189:
            while (AQ < 32) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            AN.adler = AO.check = f0(AR);
            AR = 0;
            AQ = 0;
            AO.mode = IQ;
          case IQ:
            if (AO.havedict === 0) {
              AN.next_out = AS;
              AN.avail_out = AP;
              AN.next_in = AA;
              AN.avail_in = AU;
              AO.hold = AR;
              AO.bits = AQ;
              return IW;
            }
            AN.adler = AO.check = 1;
            AO.mode = IB;
          case IB:
            if (AY === ID || AY === IN) {
              break SV;
            }
          case IG:
            if (AO.last) {
              AR >>>= AQ & 7;
              AQ -= AQ & 7;
              AO.mode = Iz;
              break;
            }
            while (AQ < 3) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            AO.last = AR & 1;
            AR >>>= 1;
            AQ -= 1;
            switch (AR & 3) {
              case 0:
                AO.mode = 16193;
                break;
              case 1:
                fC(AO);
                AO.mode = IX;
                if (AY === IN) {
                  AR >>>= 2;
                  AQ -= 2;
                  break SV;
                }
                break;
              case 2:
                AO.mode = 16196;
                break;
              case 3:
                AN.msg = "invalid block type";
                AO.mode = Ij;
            }
            AR >>>= 2;
            AQ -= 2;
            break;
          case 16193:
            AR >>>= AQ & 7;
            AQ -= AQ & 7;
            while (AQ < 32) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            if ((AR & 65535) != (AR >>> 16 ^ 65535)) {
              AN.msg = "invalid stored block lengths";
              AO.mode = Ij;
              break;
            }
            AO.length = AR & 65535;
            AR = 0;
            AQ = 0;
            AO.mode = IT;
            if (AY === IN) {
              break SV;
            }
          case IT:
            AO.mode = 16195;
          case 16195:
            AT = AO.length;
            if (AT) {
              if (AT > AU) {
                AT = AU;
              }
              if (AT > AP) {
                AT = AP;
              }
              if (AT === 0) {
                break SV;
              }
              Aq.set(AW.subarray(AA, AA + AT), AS);
              AU -= AT;
              AA += AT;
              AP -= AT;
              AS += AT;
              AO.length -= AT;
              break;
            }
            AO.mode = IB;
            break;
          case 16196:
            while (AQ < 14) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            AO.nlen = 257 + (AR & 31);
            AR >>>= 5;
            AQ -= 5;
            AO.ndist = 1 + (AR & 31);
            AR >>>= 5;
            AQ -= 5;
            AO.ncode = 4 + (AR & 15);
            AR >>>= 4;
            AQ -= 4;
            if (AO.nlen > 286 || AO.ndist > 30) {
              AN.msg = "too many length or distance symbols";
              AO.mode = Ij;
              break;
            }
            AO.have = 0;
            AO.mode = 16197;
          case 16197:
            while (AO.have < AO.ncode) {
              while (AQ < 3) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              AO.lens[SC[AO.have++]] = AR & 7;
              AR >>>= 3;
              AQ -= 3;
            }
            while (AO.have < 19) {
              AO.lens[SC[AO.have++]] = 0;
            }
            AO.lencode = AO.lendyn;
            AO.lenbits = 7;
            S8 = {
              bits: AO.lenbits
            };
            S5 = IM(0, AO.lens, 0, 19, AO.lencode, 0, AO.work, S8);
            AO.lenbits = S8.bits;
            if (S5) {
              AN.msg = "invalid code lengths set";
              AO.mode = Ij;
              break;
            }
            AO.have = 0;
            AO.mode = 16198;
          case 16198:
            while (AO.have < AO.nlen + AO.ndist) {
              while (S6 = AO.lencode[AR & (1 << AO.lenbits) - 1], Az = S6 >>> 24, Aj = S6 >>> 16 & 255, S0 = S6 & 65535, !(Az <= AQ)) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              if (S0 < 16) {
                AR >>>= Az;
                AQ -= Az;
                AO.lens[AO.have++] = S0;
              } else {
                if (S0 === 16) {
                  for (S9 = Az + 2; AQ < S9;) {
                    if (AU === 0) {
                      break SV;
                    }
                    AU--;
                    AR += AW[AA++] << AQ;
                    AQ += 8;
                  }
                  AR >>>= Az;
                  AQ -= Az;
                  if (AO.have === 0) {
                    AN.msg = "invalid bit length repeat";
                    AO.mode = Ij;
                    break;
                  }
                  S4 = AO.lens[AO.have - 1];
                  AT = 3 + (AR & 3);
                  AR >>>= 2;
                  AQ -= 2;
                } else if (S0 === 17) {
                  for (S9 = Az + 3; AQ < S9;) {
                    if (AU === 0) {
                      break SV;
                    }
                    AU--;
                    AR += AW[AA++] << AQ;
                    AQ += 8;
                  }
                  AR >>>= Az;
                  AQ -= Az;
                  S4 = 0;
                  AT = 3 + (AR & 7);
                  AR >>>= 3;
                  AQ -= 3;
                } else {
                  for (S9 = Az + 7; AQ < S9;) {
                    if (AU === 0) {
                      break SV;
                    }
                    AU--;
                    AR += AW[AA++] << AQ;
                    AQ += 8;
                  }
                  AR >>>= Az;
                  AQ -= Az;
                  S4 = 0;
                  AT = 11 + (AR & 127);
                  AR >>>= 7;
                  AQ -= 7;
                }
                if (AO.have + AT > AO.nlen + AO.ndist) {
                  AN.msg = "invalid bit length repeat";
                  AO.mode = Ij;
                  break;
                }
                while (AT--) {
                  AO.lens[AO.have++] = S4;
                }
              }
            }
            if (AO.mode === Ij) {
              break;
            }
            if (AO.lens[256] === 0) {
              AN.msg = "invalid code -- missing end-of-block";
              AO.mode = Ij;
              break;
            }
            AO.lenbits = 9;
            S8 = {
              bits: AO.lenbits
            };
            S5 = IM(1, AO.lens, 0, AO.nlen, AO.lencode, 0, AO.work, S8);
            AO.lenbits = S8.bits;
            if (S5) {
              AN.msg = "invalid literal/lengths set";
              AO.mode = Ij;
              break;
            }
            AO.distbits = 6;
            AO.distcode = AO.distdyn;
            S8 = {
              bits: AO.distbits
            };
            S5 = IM(2, AO.lens, AO.nlen, AO.ndist, AO.distcode, 0, AO.work, S8);
            AO.distbits = S8.bits;
            if (S5) {
              AN.msg = "invalid distances set";
              AO.mode = Ij;
              break;
            }
            AO.mode = IX;
            if (AY === IN) {
              break SV;
            }
          case IX:
            AO.mode = IF;
          case IF:
            if (AU >= 6 && AP >= 258) {
              AN.next_out = AS;
              AN.avail_out = AP;
              AN.next_in = AA;
              AN.avail_in = AU;
              AO.hold = AR;
              AO.bits = AQ;
              IL(AN, AG);
              AS = AN.next_out;
              Aq = AN.output;
              AP = AN.avail_out;
              AA = AN.next_in;
              AW = AN.input;
              AU = AN.avail_in;
              AR = AO.hold;
              AQ = AO.bits;
              if (AO.mode === IB) {
                AO.back = -1;
              }
              break;
            }
            for (AO.back = 0; S6 = AO.lencode[AR & (1 << AO.lenbits) - 1], Az = S6 >>> 24, Aj = S6 >>> 16 & 255, S0 = S6 & 65535, !(Az <= AQ);) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            if (Aj && (Aj & 240) == 0) {
              S1 = Az;
              S2 = Aj;
              S3 = S0;
              while (S6 = AO.lencode[S3 + ((AR & (1 << S1 + S2) - 1) >> S1)], Az = S6 >>> 24, Aj = S6 >>> 16 & 255, S0 = S6 & 65535, !(S1 + Az <= AQ)) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              AR >>>= S1;
              AQ -= S1;
              AO.back += S1;
            }
            AR >>>= Az;
            AQ -= Az;
            AO.back += Az;
            AO.length = S0;
            if (Aj === 0) {
              AO.mode = 16205;
              break;
            }
            if (Aj & 32) {
              AO.back = -1;
              AO.mode = IB;
              break;
            }
            if (Aj & 64) {
              AN.msg = "invalid literal/length code";
              AO.mode = Ij;
              break;
            }
            AO.extra = Aj & 15;
            AO.mode = 16201;
          case 16201:
            if (AO.extra) {
              for (S9 = AO.extra; AQ < S9;) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              AO.length += AR & (1 << AO.extra) - 1;
              AR >>>= AO.extra;
              AQ -= AO.extra;
              AO.back += AO.extra;
            }
            AO.was = AO.length;
            AO.mode = 16202;
          case 16202:
            while (S6 = AO.distcode[AR & (1 << AO.distbits) - 1], Az = S6 >>> 24, Aj = S6 >>> 16 & 255, S0 = S6 & 65535, !(Az <= AQ)) {
              if (AU === 0) {
                break SV;
              }
              AU--;
              AR += AW[AA++] << AQ;
              AQ += 8;
            }
            if ((Aj & 240) == 0) {
              S1 = Az;
              S2 = Aj;
              S3 = S0;
              while (S6 = AO.distcode[S3 + ((AR & (1 << S1 + S2) - 1) >> S1)], Az = S6 >>> 24, Aj = S6 >>> 16 & 255, S0 = S6 & 65535, !(S1 + Az <= AQ)) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              AR >>>= S1;
              AQ -= S1;
              AO.back += S1;
            }
            AR >>>= Az;
            AQ -= Az;
            AO.back += Az;
            if (Aj & 64) {
              AN.msg = "invalid distance code";
              AO.mode = Ij;
              break;
            }
            AO.offset = S0;
            AO.extra = Aj & 15;
            AO.mode = 16203;
          case 16203:
            if (AO.extra) {
              for (S9 = AO.extra; AQ < S9;) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              AO.offset += AR & (1 << AO.extra) - 1;
              AR >>>= AO.extra;
              AQ -= AO.extra;
              AO.back += AO.extra;
            }
            if (AO.offset > AO.dmax) {
              AN.msg = "invalid distance too far back";
              AO.mode = Ij;
              break;
            }
            AO.mode = 16204;
          case 16204:
            if (AP === 0) {
              break SV;
            }
            AT = AG - AP;
            if (AO.offset > AT) {
              AT = AO.offset - AT;
              if (AT > AO.whave && AO.sane) {
                AN.msg = "invalid distance too far back";
                AO.mode = Ij;
                break;
              }
              if (AT > AO.wnext) {
                AT -= AO.wnext;
                AX = AO.wsize - AT;
              } else {
                AX = AO.wnext - AT;
              }
              if (AT > AO.length) {
                AT = AO.length;
              }
              AF = AO.window;
            } else {
              AF = Aq;
              AX = AS - AO.offset;
              AT = AO.length;
            }
            if (AT > AP) {
              AT = AP;
            }
            AP -= AT;
            AO.length -= AT;
            do {
              Aq[AS++] = AF[AX++];
            } while (--AT);
            if (AO.length === 0) {
              AO.mode = IF;
            }
            break;
          case 16205:
            if (AP === 0) {
              break SV;
            }
            Aq[AS++] = AO.length;
            AP--;
            AO.mode = IF;
            break;
          case Iz:
            if (AO.wrap) {
              while (AQ < 32) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR |= AW[AA++] << AQ;
                AQ += 8;
              }
              AG -= AP;
              AN.total_out += AG;
              AO.total += AG;
              if (AO.wrap & 4 && AG) {
                AN.adler = AO.check = AO.flags ? gL(AO.check, Aq, AG, AS - AG) : gC(AO.check, Aq, AG, AS - AG);
              }
              AG = AP;
              if (AO.wrap & 4 && (AO.flags ? AR : f0(AR)) !== AO.check) {
                AN.msg = "incorrect data check";
                AO.mode = Ij;
                break;
              }
              AR = 0;
              AQ = 0;
            }
            AO.mode = 16207;
          case 16207:
            if (AO.wrap && AO.flags) {
              while (AQ < 32) {
                if (AU === 0) {
                  break SV;
                }
                AU--;
                AR += AW[AA++] << AQ;
                AQ += 8;
              }
              if (AO.wrap & 4 && AR !== (AO.total & 4294967295)) {
                AN.msg = "incorrect length check";
                AO.mode = Ij;
                break;
              }
              AR = 0;
              AQ = 0;
            }
            AO.mode = 16208;
          case 16208:
            S5 = IO;
            break SV;
          case Ij:
            S5 = IA;
            break SV;
          case 16210:
            return IS;
          default:
            return Iq;
        }
      }
      AN.next_out = AS;
      AN.avail_out = AP;
      AN.next_in = AA;
      AN.avail_in = AU;
      AO.hold = AR;
      AO.bits = AQ;
      if (AO.wsize || AG !== AN.avail_out && AO.mode < Ij && (AO.mode < Iz || AY !== IJ)) {
        fV(AN, AN.output, AN.next_out, AG - AN.avail_out);
      }
      AB -= AN.avail_in;
      AG -= AN.avail_out;
      AN.total_in += AB;
      AN.total_out += AG;
      AO.total += AG;
      if (AO.wrap & 4 && AG) {
        AN.adler = AO.check = AO.flags ? gL(AO.check, Aq, AG, AN.next_out - AG) : gC(AO.check, Aq, AG, AN.next_out - AG);
      }
      AN.data_type = AO.bits + (AO.last ? 64 : 0) + (AO.mode === IB ? 128 : 0) + (AO.mode === IX || AO.mode === IT ? 256 : 0);
      if ((AB === 0 && AG === 0 || AY === IJ) && S5 === IY) {
        S5 = IU;
      }
      return S5;
    };
    var fI = {
      inflateReset: f4,
      inflateReset2: f5,
      inflateResetKeep: f3,
      inflateInit: AN => f6(AN, 15),
      inflateInit2: f6,
      inflate: fL,
      inflateEnd: AN => {
        if (f2(AN)) {
          return Iq;
        }
        let AY = AN.state;
        AY.window &&= null;
        AN.state = null;
        return IY;
      },
      inflateGetHeader: (AN, AY) => {
        if (f2(AN)) {
          return Iq;
        }
        const AO = AN.state;
        if ((AO.wrap & 2) == 0) {
          return Iq;
        } else {
          AO.head = AY;
          AY.done = false;
          return IY;
        }
      },
      inflateSetDictionary: (AN, AY) => {
        const AO = AY.length;
        let AW;
        let Aq;
        let AA;
        if (f2(AN)) {
          return Iq;
        } else {
          AW = AN.state;
          if (AW.wrap !== 0 && AW.mode !== IQ) {
            return Iq;
          } else if (AW.mode === IQ && (Aq = 1, Aq = gC(Aq, AY, AO, 0), Aq !== AW.check)) {
            return IA;
          } else {
            AA = fV(AN, AY, AO, AO);
            if (AA) {
              AW.mode = 16210;
              return IS;
            } else {
              AW.havedict = 1;
              return IY;
            }
          }
        }
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    };
    function fE() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    const fK = Object.prototype.toString;
    const {
      Z_NO_FLUSH: fH,
      Z_FINISH: fZ,
      Z_OK: fM,
      Z_STREAM_END: fJ,
      Z_NEED_DICT: fD,
      Z_STREAM_ERROR: fN,
      Z_DATA_ERROR: fY,
      Z_MEM_ERROR: fO
    } = gE;
    function fW(AN) {
      this.options = LP({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, AN || {});
      const AY = this.options;
      if (AY.raw && AY.windowBits >= 0 && AY.windowBits < 16) {
        AY.windowBits = -AY.windowBits;
        if (AY.windowBits === 0) {
          AY.windowBits = -15;
        }
      }
      if (!!(AY.windowBits >= 0) && !!(AY.windowBits < 16) && (!AN || !AN.windowBits)) {
        AY.windowBits += 32;
      }
      if (AY.windowBits > 15 && AY.windowBits < 48 && (AY.windowBits & 15) == 0) {
        AY.windowBits |= 15;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new LF();
      this.strm.avail_out = 0;
      let AO = fI.inflateInit2(this.strm, AY.windowBits);
      if (AO !== fM) {
        throw new Error(gI[AO]);
      }
      this.header = new fE();
      fI.inflateGetHeader(this.strm, this.header);
      if (AY.dictionary && (typeof AY.dictionary == "string" ? AY.dictionary = LG(AY.dictionary) : fK.call(AY.dictionary) === "[object ArrayBuffer]" && (AY.dictionary = new Uint8Array(AY.dictionary)), AY.raw && (AO = fI.inflateSetDictionary(this.strm, AY.dictionary), AO !== fM))) {
        throw new Error(gI[AO]);
      }
    }
    function fq(AN, AY) {
      const AO = new fW(AY);
      AO.push(AN);
      if (AO.err) {
        throw AO.msg || gI[AO.err];
      }
      return AO.result;
    }
    fW.prototype.push = function (AN, AY) {
      const AO = this.strm;
      const AW = this.options.chunkSize;
      const Aq = this.options.dictionary;
      let AA;
      let AS;
      let AU;
      if (this.ended) {
        return false;
      }
      AS = AY === ~~AY ? AY : AY === true ? fZ : fH;
      if (fK.call(AN) === "[object ArrayBuffer]") {
        AO.input = new Uint8Array(AN);
      } else {
        AO.input = AN;
      }
      AO.next_in = 0;
      AO.avail_in = AO.input.length;
      while (true) {
        if (AO.avail_out === 0) {
          AO.output = new Uint8Array(AW);
          AO.next_out = 0;
          AO.avail_out = AW;
        }
        AA = fI.inflate(AO, AS);
        if (AA === fD && Aq) {
          AA = fI.inflateSetDictionary(AO, Aq);
          if (AA === fM) {
            AA = fI.inflate(AO, AS);
          } else if (AA === fY) {
            AA = fD;
          }
        }
        while (AO.avail_in > 0 && AA === fJ && AO.state.wrap > 0 && AN[AO.next_in] !== 0) {
          fI.inflateReset(AO);
          AA = fI.inflate(AO, AS);
        }
        switch (AA) {
          case fN:
          case fY:
          case fD:
          case fO:
            this.onEnd(AA);
            this.ended = true;
            return false;
        }
        AU = AO.avail_out;
        if (AO.next_out && (AO.avail_out === 0 || AA === fJ)) {
          if (this.options.to === "string") {
            let AP = LX(AO.output, AO.next_out);
            let AR = AO.next_out - AP;
            let AQ = LT(AO.output, AP);
            AO.next_out = AR;
            AO.avail_out = AW - AR;
            if (AR) {
              AO.output.set(AO.output.subarray(AP, AP + AR), 0);
            }
            this.onData(AQ);
          } else {
            this.onData(AO.output.length === AO.next_out ? AO.output : AO.output.subarray(0, AO.next_out));
          }
        }
        if (AA !== fM || AU !== 0) {
          if (AA === fJ) {
            AA = fI.inflateEnd(this.strm);
            this.onEnd(AA);
            this.ended = true;
            return true;
          }
          if (AO.avail_in === 0) {
            break;
          }
        }
      }
      return true;
    };
    fW.prototype.onData = function (AN) {
      this.chunks.push(AN);
    };
    fW.prototype.onEnd = function (AN) {
      if (AN === fM) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = LR(this.chunks);
        }
      }
      this.chunks = [];
      this.err = AN;
      this.msg = this.strm.msg;
    };
    var fA = {
      Inflate: fW,
      inflate: fq,
      inflateRaw: function (AN, AY) {
        (AY = AY || {}).raw = true;
        return fq(AN, AY);
      },
      ungzip: fq,
      constants: gE
    };
    const {
      Deflate: fS,
      deflate: fU,
      deflateRaw: fP,
      gzip: fR
    } = IC;
    const {
      Inflate: fQ,
      inflate: fB,
      inflateRaw: fG,
      ungzip: fT
    } = fA;
    var fX = fU;
    var fF = fB;
    var fz = {
      c: [{
        value: 0,
        name: "Normal (FFA)"
      }, {
        value: -1,
        name: "Fallen (FFA)"
      }, {
        value: 2,
        name: "Celestial"
      }, {
        value: 1,
        name: "Polygon"
      }, {
        value: 10,
        name: "Blue"
      }, {
        value: 11,
        name: "Red"
      }, {
        value: 12,
        name: "Green"
      }, {
        value: 13,
        name: "Purple"
      }, {
        value: 4,
        name: "Yellow"
      }, {
        value: 5,
        name: "Black"
      }, {
        value: 6,
        name: "White"
      }, {
        value: 3,
        name: "Barrel"
      }, {
        value: 7,
        name: "Spike"
      }, {
        value: 20,
        name: "Triangle Yellow"
      }, {
        value: 21,
        name: "Square Red"
      }, {
        value: 22,
        name: "Pentagon Blue"
      }, {
        value: 23,
        name: "Hexagon Orange"
      }, {
        value: 24,
        name: "Heptagon Green"
      }, {
        value: 25,
        name: "Octagon Blue"
      }, {
        value: 26,
        name: "Nonagon Dark Purple"
      }, {
        value: 27,
        name: "Decagon Dark Blue"
      }, {
        value: 28,
        name: "Hendecagon Black"
      }, {
        value: 29,
        name: "Dodecagon Dark Grey"
      }, {
        value: 30,
        name: "Tridecagon White"
      }],
      a: [{
        value: 1,
        name: "Polygon"
      }, {
        value: 0,
        name: "Normal (FFA)"
      }, {
        value: -1,
        name: "Fallen (FFA)"
      }, {
        value: 2,
        name: "Celestial"
      }, {
        value: 10,
        name: "Blue"
      }, {
        value: 11,
        name: "Red"
      }, {
        value: 12,
        name: "Green"
      }, {
        value: 13,
        name: "Purple"
      }, {
        value: 4,
        name: "Yellow"
      }, {
        value: 5,
        name: "Black"
      }, {
        value: 6,
        name: "White"
      }, {
        value: 3,
        name: "Barrel"
      }, {
        value: 7,
        name: "Spike"
      }, {
        value: 20,
        name: "Triangle Yellow"
      }, {
        value: 21,
        name: "Square Red"
      }, {
        value: 22,
        name: "Pentagon Blue"
      }, {
        value: 23,
        name: "Hexagon Orange"
      }, {
        value: 24,
        name: "Heptagon Green"
      }, {
        value: 25,
        name: "Octagon Blue"
      }, {
        value: 26,
        name: "Nonagon Dark Purple"
      }, {
        value: 27,
        name: "Decagon Dark Blue"
      }, {
        value: 28,
        name: "Hendecagon Black"
      }, {
        value: 29,
        name: "Dodecagon Dark Grey"
      }, {
        value: 30,
        name: "Tridecagon White"
      }],
      d: [{
        name: "Unset"
      }, {
        value: 0,
        name: "Normal (Blue and Red)"
      }, {
        value: -1,
        name: "Fallen Light Gray"
      }, {
        value: 2,
        name: "Celestial Pink"
      }, {
        value: 10,
        name: "Blue"
      }, {
        value: 11,
        name: "Red"
      }, {
        value: 12,
        name: "Green"
      }, {
        value: 13,
        name: "Purple"
      }, {
        value: 4,
        name: "Yellow"
      }, {
        value: 5,
        name: "Black"
      }, {
        value: 6,
        name: "White"
      }, {
        value: 3,
        name: "Barrel Gray"
      }, {
        value: 7,
        name: "Spike Dark Gray"
      }, {
        value: 20,
        name: "Triangle Yellow"
      }, {
        value: 21,
        name: "Square Red"
      }, {
        value: 22,
        name: "Pentagon Blue"
      }, {
        value: 23,
        name: "Hexagon Orange"
      }, {
        value: 24,
        name: "Heptagon Green"
      }, {
        value: 25,
        name: "Octagon Blue"
      }, {
        value: 26,
        name: "Nonagon Dark Purple"
      }, {
        value: 27,
        name: "Decagon Dark Blue"
      }, {
        value: 28,
        name: "Hendecagon Black"
      }, {
        value: 29,
        name: "Dodecagon Dark Grey"
      }, {
        value: 30,
        name: "Tridecagon White"
      }],
      b: [{
        bulletName: "Bullet",
        defaultShootTrigger: 0,
        extraBulletStats: true,
        bulletStats: true,
        lifetimeAttribute: true,
        defaultLength: 1,
        defaultWidth: 0.5
      }, {
        bulletName: "Drone",
        defaultShootTrigger: 4,
        extraBulletStats: true,
        bulletStats: true,
        droneStats: true,
        defaultLength: 0.8,
        defaultWidth: 0.5
      }, {
        bulletName: "Trap",
        defaultShootTrigger: 0,
        extraBulletStats: true,
        bulletStats: true,
        lifetimeAttribute: true,
        defaultLength: 1,
        defaultWidth: 0.65
      }, {
        bulletName: "Minion",
        defaultShootTrigger: 4,
        extraBulletStats: true,
        minionStats: true,
        droneStats: true,
        defaultLength: 1.1,
        defaultWidth: 0.5
      }, {
        bulletName: "Player",
        noShootTrigger: true,
        launchSpeed: true,
        defaultLength: 0.7,
        defaultWidth: 0.5
      }, {
        bulletName: "Polyp",
        defaultShootTrigger: 4,
        extraBulletStats: true,
        defaultLength: 0.7,
        launchSpeed: true,
        defaultWidth: 0.5
      }, {
        bulletName: "Nothing",
        defaultShootTrigger: 0,
        defaultLength: 0.8,
        defaultWidth: 1
      }, {
        bulletName: "Rocket",
        defaultShootTrigger: 0,
        extraBulletStats: true,
        lifetimeAttribute: true,
        minionStats: true,
        defaultLength: 1,
        defaultWidth: 0.5
      }, {
        bulletName: "Custom Trap",
        defaultShootTrigger: 0,
        extraBulletStats: true,
        lifetimeAttribute: true,
        minionStats: true,
        defaultLength: 1,
        defaultWidth: 0.5
      }, {
        bulletName: "Polygon",
        defaultShootTrigger: 0,
        defaultLength: 1,
        defaultWidth: 1,
        polygonStats: true,
        extraBulletStats: true,
        launchSpeed: true
      }]
    };
    const fj = typeof self == "object" ? self : globalThis;
    const n0 = AN => ((AY, AO) => {
      const AW = (AA, AS) => {
        AY.set(AS, AA);
        return AA;
      };
      const Aq = AA => {
        if (AY.has(AA)) {
          return AY.get(AA);
        }
        const [AS, AU] = AO[AA];
        switch (AS) {
          case 0:
          case -1:
            return AW(AU, AA);
          case 1:
            {
              const AP = AW([], AA);
              for (const AR of AU) {
                AP.push(Aq(AR));
              }
              return AP;
            }
          case 2:
            {
              const AQ = AW({}, AA);
              for (const [AB, AG] of AU) {
                AQ[Aq(AB)] = Aq(AG);
              }
              return AQ;
            }
          case 3:
            return AW(new Date(AU), AA);
          case 4:
            {
              const {
                source: AT,
                flags: AX
              } = AU;
              return AW(new RegExp(AT, AX), AA);
            }
          case 5:
            {
              const AF = AW(new Map(), AA);
              for (const [Az, Aj] of AU) {
                AF.set(Aq(Az), Aq(Aj));
              }
              return AF;
            }
          case 6:
            {
              const S0 = AW(new Set(), AA);
              for (const S1 of AU) {
                S0.add(Aq(S1));
              }
              return S0;
            }
          case 7:
            {
              const {
                name: S2,
                message: S3
              } = AU;
              return AW(new fj[S2](S3), AA);
            }
          case 8:
            return AW(BigInt(AU), AA);
          case "BigInt":
            return AW(Object(BigInt(AU)), AA);
        }
        return AW(new fj[AS](AU), AA);
      };
      return Aq;
    })(new Map(), AN)(0);
    const n1 = "";
    const {
      toString: n2
    } = {};
    const {
      keys: n3
    } = Object;
    const n4 = AN => {
      const AY = typeof AN;
      if (AY !== "object" || !AN) {
        return [0, AY];
      }
      const AO = n2.call(AN).slice(8, -1);
      switch (AO) {
        case "Array":
          return [1, n1];
        case "Object":
          return [2, n1];
        case "Date":
          return [3, n1];
        case "RegExp":
          return [4, n1];
        case "Map":
          return [5, n1];
        case "Set":
          return [6, n1];
      }
      if (AO.includes("Array")) {
        return [1, AO];
      } else if (AO.includes("Error")) {
        return [7, AO];
      } else {
        return [2, AO];
      }
    };
    const n5 = ([AN, AY]) => AN === 0 && (AY === "function" || AY === "symbol");
    const n6 = (AN, {
      json: AY,
      lossy: AO
    } = {}) => {
      const AW = [];
      ((Aq, AA, AS, AU) => {
        const AP = (AQ, AB) => {
          const AG = AU.push(AQ) - 1;
          AS.set(AB, AG);
          return AG;
        };
        const AR = AQ => {
          if (AS.has(AQ)) {
            return AS.get(AQ);
          }
          let [AB, AG] = n4(AQ);
          switch (AB) {
            case 0:
              {
                let AX = AQ;
                switch (AG) {
                  case "bigint":
                    AB = 8;
                    AX = AQ.toString();
                    break;
                  case "function":
                  case "symbol":
                    if (Aq) {
                      throw new TypeError("unable to serialize " + AG);
                    }
                    AX = null;
                    break;
                  case "undefined":
                    return AP([-1], AQ);
                }
                return AP([AB, AX], AQ);
              }
            case 1:
              {
                if (AG) {
                  return AP([AG, [...AQ]], AQ);
                }
                const AF = [];
                const Az = AP([AB, AF], AQ);
                for (const Aj of AQ) {
                  AF.push(AR(Aj));
                }
                return Az;
              }
            case 2:
              {
                if (AG) {
                  switch (AG) {
                    case "BigInt":
                      return AP([AG, AQ.toString()], AQ);
                    case "Boolean":
                    case "Number":
                    case "String":
                      return AP([AG, AQ.valueOf()], AQ);
                  }
                }
                if (AA && "toJSON" in AQ) {
                  return AR(AQ.toJSON());
                }
                const S0 = [];
                const S1 = AP([AB, S0], AQ);
                for (const S2 of n3(AQ)) {
                  if (!!Aq || !n5(n4(AQ[S2]))) {
                    S0.push([AR(S2), AR(AQ[S2])]);
                  }
                }
                return S1;
              }
            case 3:
              return AP([AB, AQ.toISOString()], AQ);
            case 4:
              {
                const {
                  source: S3,
                  flags: S4
                } = AQ;
                return AP([AB, {
                  source: S3,
                  flags: S4
                }], AQ);
              }
            case 5:
              {
                const S5 = [];
                const S6 = AP([AB, S5], AQ);
                for (const [S7, S8] of AQ) {
                  if (Aq || !n5(n4(S7)) && !n5(n4(S8))) {
                    S5.push([AR(S7), AR(S8)]);
                  }
                }
                return S6;
              }
            case 6:
              {
                const S9 = [];
                const SC = AP([AB, S9], AQ);
                for (const SV of AQ) {
                  if (!!Aq || !n5(n4(SV))) {
                    S9.push(AR(SV));
                  }
                }
                return SC;
              }
          }
          const {
            message: AT
          } = AQ;
          return AP([AB, {
            name: AG,
            message: AT
          }], AQ);
        };
        return AR;
      })(!AY && !AO, !!AY, new Map(), AW)(AN);
      return AW;
    };
    const n7 = typeof structuredClone == "function" ? (AN, AY) => AY && ("json" in AY || "lossy" in AY) ? n0(n6(AN, AY)) : structuredClone(AN) : (AN, AY) => n0(n6(AN, AY));
    function n8(AN) {
      n8 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AY) {
        return typeof AY;
      } : function (AY) {
        if (AY && typeof Symbol == "function" && AY.constructor === Symbol && AY !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AY;
        }
      };
      return n8(AN);
    }
    function n9(AN, AY, AO) {
      if (AY > AO) {
        var AW = AY;
        AY = AO;
        AO = AW;
      }
      return Math.min(Math.max(AN, AY), AO);
    }
    function nC(AN) {
      return n7(AN);
    }
    function nV(AN) {
      return AN * (Math.PI / 180);
    }
    function nL(AN) {
      return AN * (180 / Math.PI);
    }
    function nI(AN) {
      if (AN.length == 0) {
        return [["nothing", 6]];
      }
      if (AN.length == 1) {
        return [AN[0]];
      }
      var AY = AN.pop();
      var AO = [];
      for (var AW = 0; AW < AN.length; AW++) {
        AO.push(AN[AW]);
        if (AW < AN.length - 1) {
          AO.push([", ", 6]);
        }
      }
      AO.push([AN.length == 1 ? " and " : ", and ", 6]);
      AO.push(AY);
      return AO;
    }
    function nE() {
      if (Math.random() < 0.5) {
        return -1;
      } else {
        return 1;
      }
    }
    function nK(AN, AY = false) {
      var AO = Math.floor(AN / 3600);
      var AW = Math.floor((AN - AO * 3600) / 60);
      var Aq = Math.floor(AN - AO * 3600 - AW * 60);
      var AA = Math.floor((AN - Math.floor(AN)) * 1000);
      if (AO == 0) {
        if (AW == 0) {
          if (Aq == 0) {
            return AA + "ms";
          } else if (AY) {
            return Aq + "s " + AA + "ms";
          } else {
            return Aq + "s";
          }
        } else {
          return AW + "m " + Aq + "s";
        }
      } else {
        return AO + "h " + AW + "m " + Aq + "s";
      }
    }
    function nH(AN, AY = 0) {
      var AO = Math.pow(10, AY);
      return Math.round(AN * AO) / AO;
    }
    function nZ(AN, AY = 0) {
      var AO = Math.pow(10, AY);
      return Math.ceil(AN * AO) / AO;
    }
    function nM(AN) {
      return Math.max(Math.min(1000, AN), -1000);
    }
    function nJ(AN, AY, AO) {
      return AY * AO + AN * (1 - AO);
    }
    function nD(AN, AY, AO, AW = 1 / 60) {
      return nJ(AN, AY, 1 - Math.pow(AO, AW));
    }
    function nN(AN, AY, AO = false) {
      var AW = Math.sign(AN);
      var Aq = Math.abs(AN);
      if (AO) {
        return (1 - Math.pow(1 - Aq, AY)) * AW;
      } else {
        return Math.pow(Aq, AY) * AW;
      }
    }
    function nY(AN, AY = 3) {
      if (AN < 0.5) {
        return Math.pow(2, AY - 1) * Math.pow(AN, AY);
      } else {
        return 1 - Math.pow(AN * -2 + 2, AY) / 2;
      }
    }
    function nO(AN, AY) {
      return (AN % AY + AY) % AY;
    }
    function nW(AN) {
      return /^#[0-9A-F]{6}$/i.test(AN);
    }
    function nq(AN) {
      return AN.split("").reverse().join("");
    }
    function nA() {
      Array.prototype.sort.call(arguments);
      var AN = arguments[0];
      for (var AY = arguments[1], AO = [], AW = AN; AW <= AY; AW++) {
        AO.push(AW);
      }
      return AO;
    }
    function nS(AN, AY, AO) {
      var AW = (1 - AO) * Math.cos(AN) + AO * Math.cos(AY);
      var Aq = (1 - AO) * Math.sin(AN) + AO * Math.sin(AY);
      return Math.atan2(Aq, AW);
    }
    function nU(AN, AY, AO) {
      AN = nX(AN);
      if ((AY = nX(AY)) < (AO = nX(AO))) {
        return AY <= AN && AN <= AO;
      } else {
        return AY <= AN || AN <= AO;
      }
    }
    function nP(AN) {
      return AN.toLocaleString();
    }
    function nR(AN) {
      return (0, iC.JQ)(fX(AN));
    }
    function nQ(AN) {
      return fF((0, iC.b$)(AN), {
        to: "string"
      });
    }
    function nB(AN) {
      while (AN.firstChild) {
        AN.removeChild(AN.firstChild);
      }
    }
    function nG(AN, AY = false) {
      if (!AY) {
        return new Date(AN).toLocaleDateString();
      }
      var AO = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var AW = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var Aq = new Date(AN);
      var AA = Aq.getMinutes();
      var AS = Aq.getHours();
      var AU = AS >= 12 ? "PM" : "AM";
      AS = (AS %= 12) || 12;
      if (AA < 10) {
        AA = "0" + AA;
      }
      return `${AO[Aq.getDay()]}, ${AW[Aq.getMonth()]} ${Aq.getDate()}, ${Aq.getFullYear()} ${AS}:${AA} ${AU}`;
    }
    function nT(AN) {
      var AY = 60000;
      var AO = 3600000;
      var AW = 86400000;
      var Aq = 2592000000;
      var AA = 31536000000;
      if (AN < AY) {
        var AS = Math.round(AN / 1000);
        if (AS < 5) {
          return "a few seconds ago";
        } else {
          return `${AS} seconds ago`;
        }
      }
      if (AN < AO) {
        var AU = Math.round(AN / AY);
        if (AU == 1) {
          return "a minute ago";
        } else {
          return `${AU} minutes ago`;
        }
      }
      if (AN < AW) {
        var AP = Math.round(AN / AO);
        if (AP == 1) {
          return "an hour ago";
        } else {
          return `${AP} hours ago`;
        }
      }
      if (AN < Aq) {
        var AR = Math.round(AN / AW);
        if (AR == 1) {
          return "yesterday";
        } else {
          return `${AR} days ago`;
        }
      }
      if (AN < AA) {
        var AQ = Math.round(AN / Aq);
        if (AQ == 1) {
          return "a month ago";
        } else {
          return `${AQ} months ago`;
        }
      }
      var AB = Math.round(AN / AA);
      if (AB == 1) {
        return "a year ago";
      } else {
        return `${AB} years ago`;
      }
    }
    function nX(AN) {
      return (AN % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    }
    function nF(AN, AY, AO, AW, Aq, AA, AS = 0) {
      var AU = Math.min(Math.abs(Aq - AW) / 2 * AO, AO / 1.5);
      var AP = nS(AW, Aq, 0.5);
      var AR = AO - AU / (Math.PI / 2);
      var AQ = AN + AR * Math.cos(AP);
      var AB = AY + AR * Math.sin(AP);
      function AG(S9) {
        var SC = [{
          x: AQ,
          y: AB + S9
        }, {
          x: AQ,
          y: AB + S9
        }];
        var SV = AU / 100;
        for (var SL = false, SI = false; !SL || !SI;) {
          for (var SE = 0; SE < 2; SE++) {
            var SK = SE == 0 ? 1 : -1;
            var SH = SC[SE];
            if (nz(AN, AY, SH.x, SH.y, AO, AW, Aq, AS)) {
              SH.x += SK * SV;
            } else if (SE == 0) {
              SL = true;
            } else {
              SI = true;
            }
          }
        }
        return SC;
      }
      var AT = [AG(-AA), AG(0), AG(AA)];
      var AX = [{
        x: null,
        y: AB
      }, {
        x: null,
        y: AB
      }];
      for (var AF = 0, Az = AT; AF < Az.length; AF++) {
        var Aj = Az[AF];
        for (var S0 = 0; S0 < 2; S0++) {
          var S1 = S0 == 0 ? 1 : -1;
          var S2 = Aj[S0];
          var S3 = AX[S0];
          if (S3.x) {
            S3.x = (S1 == 1 ? Math.min : Math.max)(S3.x, S2.x);
          } else {
            S3.x = S2.x;
          }
        }
      }
      var S4 = Math.abs(AX[0].x - AN) < Math.abs(AX[1].x - AN) ? 0 : 1;
      var S5 = S4 == 0 ? 1 : 0;
      var S6 = S4 == 0 ? 1 : -1;
      var S7 = Math.abs(AX[S4].x - AX[S5].x);
      S7 = Math.min(S7, AU * 2);
      AX[S4].x = AX[S5].x + S6 * S7;
      var S8 = Math.abs(AX[0].x - AX[1].x);
      return {
        x: Math.min(AX[0].x, AX[1].x) + S8 / 2,
        y: AB,
        width: S8
      };
    }
    function nz(AN, AY, AO, AW, Aq, AA, AS, AU = 0) {
      var AP = Math.sqrt(Math.pow(AO - AN, 2) + Math.pow(AW - AY, 2));
      var AR = Math.atan2(AW - AY, AO - AN);
      return !(AP > Aq) && !(AP < AU) && nU(AR, AA, AS);
    }
    function nj(AN, AY) {
      if (AN.length != AY.length) {
        return false;
      }
      for (var AO = 0; AO < AN.length; AO++) {
        if (AN[AO] != AY[AO]) {
          return false;
        }
      }
      return true;
    }
    function E0(AN, AY) {
      if (AN === AY) {
        return true;
      }
      if (AN == null && AY == null) {
        return true;
      }
      if (n8(AN) == "object" && n8(AY) == "object") {
        if (Object.keys(AN).length != Object.keys(AY).length) {
          return false;
        }
        for (var AO in AN) {
          if (!E0(AN[AO], AY[AO])) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
    function E1(AN) {
      var AY = new Set();
      return AN.filter(function (AO) {
        return !AY.has(AO) && (AY.add(AO), true);
      });
    }
    function E2(AN, AY) {
      var AO = new Uint8Array(AN.length + AY.length);
      AO.set(AN, 0);
      AO.set(AY, AN.length);
      return AO;
    }
    function E3(AN, AY) {
      for (var AO = 0; AO < AN.length; AO++) {
        AN[AO] = AN[AO] ^ AY;
      }
      return AN;
    }
    function E4(AN, AY) {
      return function (AO) {
        if (Array.isArray(AO)) {
          return AO;
        }
      }(AN) || function (AO, AW) {
        var Aq = AO == null ? null : typeof Symbol != "undefined" && AO[Symbol.iterator] || AO["@@iterator"];
        if (Aq != null) {
          var AA;
          var AS;
          var AU;
          var AP;
          var AR = [];
          var AQ = true;
          var AB = false;
          try {
            AU = (Aq = Aq.call(AO)).next;
            if (AW === 0) {
              if (Object(Aq) !== Aq) {
                return;
              }
              AQ = false;
            } else {
              for (; !(AQ = (AA = AU.call(Aq)).done) && (AR.push(AA.value), AR.length !== AW); AQ = true);
            }
          } catch (AG) {
            AB = true;
            AS = AG;
          } finally {
            try {
              if (!AQ && Aq.return != null && (AP = Aq.return(), Object(AP) !== AP)) {
                return;
              }
            } finally {
              if (AB) {
                throw AS;
              }
            }
          }
          return AR;
        }
      }(AN, AY) || function (AO, AW) {
        if (!AO) {
          return;
        }
        if (typeof AO == "string") {
          return E5(AO, AW);
        }
        var Aq = Object.prototype.toString.call(AO).slice(8, -1);
        if (Aq === "Object" && AO.constructor) {
          Aq = AO.constructor.name;
        }
        if (Aq === "Map" || Aq === "Set") {
          return Array.from(AO);
        }
        if (Aq === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Aq)) {
          return E5(AO, AW);
        }
      }(AN, AY) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function E5(AN, AY) {
      if (AY == null || AY > AN.length) {
        AY = AN.length;
      }
      for (var AO = 0, AW = new Array(AY); AO < AY; AO++) {
        AW[AO] = AN[AO];
      }
      return AW;
    }
    var E6 = document.getElementById("settings");
    var E7 = 1;
    var E8 = 1000;
    var E9 = 1;
    var EC = {
      sectionCustom: {
        section: true,
        name: "Custom"
      },
      showOtherPlayers: {
        name: "Show Other Players",
        type: 0,
        default: true,
        onUpdate: function (e) {
          window.showOthers = e
        }
      },
      noRadiant: {
        name: "Disable Radiance",
        type: 0,
        default: false,
        onUpdate: function (e) {
          window.noRadiant = e
        }
      },
      findAbuser: {
        name: "Find Abuser Mode",
        type: 0,
        default: false,
        onUpdate: function (e) {
          window.findAbuser(e)
        }
      },
      sectionTankEditor: {
        section: true,
        name: "Tank Editor",
        tankEditor: true
      },
      maxSaveStates: {
        name: "Max Undo/Redo Save States",
        type: 1,
        default: 100,
        min: 10,
        max: 500,
        step: 1,
        ending: "",
        tankEditor: true
      },
      compressCodes: {
        name: "Compress Codes",
        type: 0,
        default: true,
        tankEditor: true
      },
      showTankSectionFrontGuideLines: {
        name: "Show Tank Section Front Guide Lines",
        type: 0,
        default: false,
        tankEditor: true
      },
      showAutoCannonRangeGuideLines: {
        name: "Show Auto Cannon Range Guide Lines",
        type: 0,
        default: true,
        tankEditor: true
      },
      showRotatingTankSectionGuideLines: {
        name: "Show Rotating Tank Section Guide Lines",
        type: 0,
        default: true,
        tankEditor: true
      },
      showOtherTankSectionGuideLines: {
        name: "Show Other Tank Section Guide Lines",
        type: 0,
        default: true,
        tankEditor: true
      },
      sectionMobile: {
        section: true,
        name: "Mobile",
        mobile: true
      },
      joystickSize: {
        name: "Joystick Size",
        mobile: true,
        type: 1,
        default: 100,
        min: 0,
        max: 200,
        step: 1,
        ending: ""
      },
      joystickOffset: {
        name: "Joystick Offset",
        mobile: true,
        type: 1,
        default: 250,
        min: 0,
        max: 400,
        step: 1,
        ending: ""
      },
      invertJoysticks: {
        name: "Invert Joysticks",
        type: 0,
        default: false,
        mobile: true,
        onUpdate: function (AN) {
          E7 = AN ? -1 : 1;
        }
      },
      showDroneTrajectory: {
        name: "Show Drone Trajectory",
        type: 0,
        default: false,
        mobile: true
      },
      showQuickChatButton: {
        name: "Show Quick Chat Button",
        type: 0,
        default: true,
        mobile: true
      },
      sectionMainMenu: {
        section: true,
        name: "Main Menu"
      },
      showFullServerList: {
        name: "Show Full Server List",
        type: 0,
        default: false,
        onUpdate: function (AN) {
          A9(AN);
        }
      },
      sectionNamesAndChat: {
        section: true,
        name: "Names & Chat"
      },
      showChat: {
        name: "Show Chat",
        type: 0,
        default: true,
        onUpdate: function (AN) {
          if (!tq && !editing) {
            if (AN) {
              chat.classList.remove("hidden");
            } else {
              chat.classList.add("hidden");
            }
          }
        }
      },
      showNames: {
        name: "Show Names",
        type: 0,
        default: true
      },
      clickableLinks: {
        name: "Clickable Chat Links",
        type: 0,
        default: true
      },
      showOwnName: {
        name: "Show Own Name",
        type: 0,
        default: false
      },
      silentTyping: {
        name: "Silent Typing",
        type: 0,
        default: false,
        onUpdate: function (AN) {
          if (!AN) {
            pG(false);
          }
        }
      },
      showTypingIndicators: {
        name: "Show Typing Indicators",
        type: 0,
        default: true,
        onUpdate: function (AN) {
          if (!AN) {
            (function () {
              for (var AY in typingData) {
                endTyping(AY);
              }
            })();
          }
        }
      },
      showNamesAndChatInScreenshotMode: {
        name: "Show Names & Chat in Screenshot Mode",
        type: 0,
        default: false
      },
      sectionDebugMode: {
        section: true,
        name: "Debug Mode"
      },
      showClassNames: {
        name: "Show Class Names",
        type: 0,
        default: false
      },
      showIds: {
        name: "Show IDs",
        type: 0,
        default: false
      },
      copyIds: {
        name: "Click to Copy IDs",
        type: 0,
        default: false
      },
      showTickTime: {
        name: "Show Tick Time",
        type: 0,
        default: true
      },
      showServerName: {
        name: "Show Server Name",
        type: 0,
        default: true
      },
      showPlayerCount: {
        name: "Show Player Count",
        type: 0,
        default: true
      },
      showGlobalPlayerCount: {
        name: "Show Global Player Count",
        type: 0,
        default: true
      },
      showFPS: {
        name: "Show FPS",
        type: 0,
        default: true
      },
      showPing: {
        name: "Show Ping",
        type: 0,
        default: true
      },
      showPosition: {
        name: "Show Position",
        type: 0,
        default: false
      },
      showExtraPerformanceInfo: {
        name: "Show Extra Performance Info",
        type: 0,
        default: true
      },
      showHitboxes: {
        name: "Show Hitboxes",
        type: 0,
        default: false
      },
      guideLineWidth: {
        name: "Debug Line Width",
        type: 1,
        default: 2,
        min: 1,
        max: 10,
        step: 1,
        ending: "px"
      },
      debugModeTextSize: {
        name: "Debug Mode Text Size",
        type: 1,
        default: 100,
        min: 0,
        max: 200,
        step: 5,
        ending: "%",
        onUpdate: function (AN) {
          for (var AY = 0; AY < kV.childElementCount; AY++) {
            kV.children[AY].style.fontSize = AN / 50 + "vmin";
          }
        }
      },
      sectionGraphics: {
        section: true,
        name: "Graphics"
      },
      fastTransparency: {
        name: "Fast Transparency",
        type: 0,
        default: true
      },
      staticCamera: {
        name: "Static Camera",
        type: 0,
        default: false
      },
      particleAmount: {
        name: "Particle Amount",
        type: 1,
        default: 100,
        min: 0,
        max: 200,
        step: 5,
        ending: "%",
        onUpdate: function (AN) {
          E9 = AN / 100;
          E8 = Math.round(AN / 100 * 1000);
        }
      },
      showAmbientParticles: {
        name: "Show Ambient Particles",
        type: 0,
        default: true
      },
      minimap: {
        name: "Show Minimap",
        type: 0,
        default: true
      },
      useScientificNotation: {
        name: "Use Scientific Notation",
        type: 0,
        default: false
      },
      showPercentagesOnHealthBars: {
        name: "Show Percentages on Health Bars",
        type: 0,
        default: false
      },
      showHealthBarOnHUD: {
        name: "Show Health Bar on HUD",
        type: 0,
        default: false
      },
      hudOpacity: {
        name: "Hud Opacity",
        type: 1,
        default: 100,
        min: 0,
        max: 100,
        step: 5,
        ending: "%",
        onUpdate: function (AN) {
          Array.from(document.getElementsByClassName("hud")).forEach(function (AY) {
            AY.style.opacity = AN / 100;
          });
        }
      },
      renderDelay: {
        name: "Render Delay",
        type: 1,
        default: 100,
        min: 0,
        max: 200,
        step: 2,
        ending: "ms"
      },
      cameraShake: {
        name: "Camera Shake",
        type: 1,
        default: 100,
        min: 0,
        max: 100,
        step: 5,
        ending: "%"
      }
    };
    _WebSocket = new Proxy(_WebSocket, { construct:function(a, b, c) {
      if(b[0] === '') {
        b[0] = location.origin.replace('http', 'ws') + '/ws'
      }
      return Reflect.construct(a, b, c)
    } })
    var EV = {};
    var EL = {};
    var EI = false;
    function EE() {
      Object.entries(EC).forEach(function (AN) {
        var AY;
        var AO = E4(AN, 2);
        var AW = AO[0];
        var Aq = AO[1];
        if (!Aq.section) {
          var AA = EL[AW];
          if (AA) {
            switch (Aq.type) {
              case 0:
                AA.checked = EH(EV[AW], Aq.default);
                break;
              case 1:
                AA.value = EH(EV[AW], Aq.default);
                AA.dispatchEvent(new CustomEvent("input", {
                  detail: "to update settings"
                }));
            }
          } else {
            console.error("Could not find object for setting " + AW);
          }
          if (Aq.hasOwnProperty("onUpdate")) {
            Aq.onUpdate(EV[AW]);
          }
        }
        if (Aq.section) {
          AY = EL[AW];
        } else {
          switch (Aq.type) {
            case 0:
              AY = EL[AW].parentElement.parentElement;
              break;
            case 1:
              AY = EL[AW].parentElement;
          }
        }
        AY.classList.remove("hidden");
        if (!editing && Aq.tankEditor) {
          AY.classList.add("hidden");
        }
        if (!WT && Aq.mobile) {
          AY.classList.add("hidden");
        }
      });
      Object.entries(EN).forEach(function (AN) {
        var AY = E4(AN, 2);
        var AO = AY[0];
        var AW = AY[1];
        if (AW.editable) {
          var Aq = EO[AO];
          var AA = EY[AO];
          Aq.textContent = EW[AA];
          Aq.value = AA;
          var AS = Aq.parentElement;
          AS.classList.remove("hidden");
          if (!editing && AW.tankEditor) {
            AS.classList.add("hidden");
          }
        }
      });
      E6.classList.remove("hide");
      EI = true;
      rL(true);
      if (q7 == 2) {
        A3("settings");
        A6("settings");
      }
    }
    function EK(AN, AY) {
      var AO = document.getElementById("settings-scroll");
      Object.entries(EC).forEach(function (AW) {
        var Aq = E4(AW, 2);
        var AA = Aq[0];
        var AS = Aq[1];
        if (AS.section) {
          EL[AA] = EZ(AO, AS.name);
        } else {
          switch (AS.type) {
            case 0:
              EV[AA] = EH(AN[AA], AS.default);
              var AU = mP(AO, "div");
              mP(AU, "label").textContent = AS.name;
              var AP = mP(AU, "label");
              AP.classList.add("switch");
              var AR = mP(AP, "input");
              AR.type = "checkbox";
              mP(AP, "span").classList.add("switch-button");
              EL[AA] = AR;
              break;
            case 1:
              EV[AA] = EH(AN[AA], AS.default);
              (AU = mP(AO, "div")).classList.add("slider");
              mP(AU, "label").textContent = AS.name;
              var AQ = mP(AU, "input");
              AQ.classList.add("slide");
              AQ.type = "range";
              AQ.step = AS.step;
              AQ.min = AS.min;
              AQ.max = AS.max;
              AQ.oninput = function () {
                AQ.previousElementSibling.textContent = `${AS.name} - ${AQ.value}${AS.ending}`;
              };
              EL[AA] = AQ;
          }
          if (AS.hasOwnProperty("onUpdate")) {
            AS.onUpdate(EV[AA]);
          }
        }
      });
      EZ(AO, "Keybinds");
      Object.entries(EN).forEach(function (AW) {
        var Aq = E4(AW, 2);
        var AA = Aq[0];
        var AS = Aq[1];
        if (AS.editable) {
          EY[AA] = EH(AY[AA], AS.default);
          var AU = mP(AO, "div");
          AU.classList.add("keybind");
          mP(AU, "label").textContent = `${AS.tankEditor ? "TANK EDITOR: " : ""}${AS.name}${AS.control ? " (CTRL +)" : ""}`;
          var AP = EY[AA];
          var AR = mP(AU, "button");
          AR.textContent = EW[AP];
          AR.value = AP;
          AR.addEventListener("click", function () {
            (function (AQ) {
              if (EJ != AQ) {
                ED();
                EJ = AQ;
                EO[AQ].classList.add("changing");
              } else {
                ED();
              }
            })(AA);
          });
          EO[AA] = AR;
        }
      });
      mP(AO, "hr");
    }
    function EH(AN, AY = false) {
      return AN ?? AY;
    }
    function EZ(AN, AY) {
      var AO = mP(AN, "div");
      mP(AO, "hr");
      mP(AO, "h2").textContent = AY;
      mP(AO, "hr");
      return AO;
    }
    function EM(AN = false) {
      if (AN) {
        Object.entries(EC).forEach(function (AY) {
          var AO = E4(AY, 2);
          var AW = AO[0];
          var Aq = AO[1];
          if (!Aq.section) {
            var AA = EL[AW];
            if (AA) {
              switch (Aq.type) {
                case 0:
                  EV[AW] = AA.checked;
                  break;
                case 1:
                  EV[AW] = AA.value;
              }
            } else {
              console.error("Could not find object for setting " + AW);
            }
            if (Aq.hasOwnProperty("onUpdate")) {
              Aq.onUpdate(EV[AW]);
            }
          }
        });
        Object.entries(EN).forEach(function (AY) {
          var AO = E4(AY, 2);
          var AW = AO[0];
          if (AO[1].editable) {
            EY[AW] = EO[AW].value;
          }
        });
        AV("settings", JSON.stringify(EV));
        AV("keybinds", JSON.stringify(EY));
      }
      N4();
      EI = false;
      ED();
      E6.classList.add("hide");
      rL(false);
      if (q7 == 2) {
        A4();
        A5();
      }
    }
    var EJ = null;
    function ED() {
      if (EJ) {
        EO[EJ].classList.remove("changing");
        EJ = null;
      }
    }
    window.addEventListener("keydown", function (AN) {
      if (EJ) {
        var AY = AN.keyCode;
        var AO = EO[EJ];
        AO.textContent = EW[AY];
        AO.value = AY;
        ED();
        AN.preventDefault();
      }
    });
    var EN = {
      undo: {
        name: "Undo",
        default: 90,
        editable: true,
        tankEditor: true,
        control: true
      },
      redo: {
        name: "Redo",
        default: 89,
        editable: true,
        tankEditor: true,
        control: true
      },
      selectAll: {
        name: "Select All",
        default: 65,
        editable: true,
        tankEditor: true,
        control: true
      },
      duplicate: {
        name: "Duplicate",
        default: 68,
        editable: true,
        tankEditor: true,
        control: true
      },
      moveForward: {
        name: "Move Forward",
        default: 38,
        editable: true,
        tankEditor: true,
        control: true
      },
      moveBackward: {
        name: "Move Backward",
        default: 40,
        editable: true,
        tankEditor: true,
        control: true
      },
      delete: {
        name: "Delete",
        default: 8,
        editable: true,
        tankEditor: true
      },
      escape: {
        name: "Escape",
        default: 27,
        editable: true
      },
      enter: {
        name: "Enter",
        default: 13,
        editable: true
      },
      openCommand: {
        name: "Open Command",
        default: 191,
        editable: true
      },
      quickChat: {
        name: "Quick Chat",
        default: 84,
        editable: true
      },
      previousChatMessage: {
        name: "Move Up in Chat History",
        default: 38,
        editable: true
      },
      nextChatMessage: {
        name: "Move Down in Chat History",
        default: 40,
        editable: true
      },
      fire: {
        name: "Shoot",
        default: 32,
        editable: true
      },
      repel: {
        name: "Repel Drones",
        default: 16,
        editable: true
      },
      moveUp: {
        name: "Move Up",
        default: 87,
        editable: true
      },
      moveDown: {
        name: "Move Down",
        default: 83,
        editable: true
      },
      moveLeft: {
        name: "Move Left",
        default: 65,
        editable: true
      },
      moveRight: {
        name: "Move Right",
        default: 68,
        editable: true
      },
      moveUpAlt: {
        name: "Move Up (Alternate)",
        default: 38,
        editable: true
      },
      moveDownAlt: {
        name: "Move Down (Alternate)",
        default: 40,
        editable: true
      },
      moveLeftAlt: {
        name: "Move Left (Alternate)",
        default: 37,
        editable: true
      },
      moveRightAlt: {
        name: "Move Right (Alternate)",
        default: 39,
        editable: true
      },
      autoFire: {
        name: "Toggle Auto Fire",
        default: 69,
        editable: true
      },
      autoSpin: {
        name: "Toggle Auto Spin",
        default: 67,
        editable: true
      },
      spinLock: {
        name: "Toggle Spin Lock",
        default: 88,
        editable: true
      },
      passiveMode: {
        name: "Toggle Passive Mode",
        default: 86,
        editable: true
      },
      debugMode: {
        name: "Toggle Debug Mode",
        default: 77,
        editable: true
      },
      screenshotMode: {
        name: "Toggle Screenshot Mode",
        default: 80,
        editable: true
      },
      weaponTree: {
        name: "Open Weapon Upgrade Tree",
        default: 89,
        editable: true
      },
      bodyTree: {
        name: "Open Body Upgrade Tree",
        default: 85,
        editable: true
      },
      settings: {
        name: "Open Settings (In-Game)",
        default: 79,
        editable: true
      }
    };
    var EY = {};
    var EO = {};
    var EW = ["", "", "", "CANCEL", "", "", "HELP", "", "BACKSPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT ARROW", "UP ARROW", "RIGHT ARROW", "DOWN ARROW", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
    function Eq(AN, AY) {
      var AO = typeof Symbol != "undefined" && AN[Symbol.iterator] || AN["@@iterator"];
      if (!AO) {
        if (Array.isArray(AN) || (AO = ES(AN)) || AY && AN && typeof AN.length == "number") {
          if (AO) {
            AN = AO;
          }
          var AW = 0;
          function Aq() {}
          return {
            s: Aq,
            n: function () {
              if (AW >= AN.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AN[AW++]
                };
              }
            },
            e: function (AP) {
              throw AP;
            },
            f: Aq
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AA;
      var AS = true;
      var AU = false;
      return {
        s: function () {
          AO = AO.call(AN);
        },
        n: function () {
          var AP = AO.next();
          AS = AP.done;
          return AP;
        },
        e: function (AP) {
          AU = true;
          AA = AP;
        },
        f: function () {
          try {
            if (!AS && AO.return != null) {
              AO.return();
            }
          } finally {
            if (AU) {
              throw AA;
            }
          }
        }
      };
    }
    function EA(AN) {
      return function (AY) {
        if (Array.isArray(AY)) {
          return EU(AY);
        }
      }(AN) || function (AY) {
        if (typeof Symbol != "undefined" && AY[Symbol.iterator] != null || AY["@@iterator"] != null) {
          return Array.from(AY);
        }
      }(AN) || ES(AN) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function ES(AN, AY) {
      if (AN) {
        if (typeof AN == "string") {
          return EU(AN, AY);
        }
        var AO = Object.prototype.toString.call(AN).slice(8, -1);
        if (AO === "Object" && AN.constructor) {
          AO = AN.constructor.name;
        }
        if (AO === "Map" || AO === "Set") {
          return Array.from(AN);
        } else if (AO === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AO)) {
          return EU(AN, AY);
        } else {
          return undefined;
        }
      }
    }
    function EU(AN, AY) {
      if (AY == null || AY > AN.length) {
        AY = AN.length;
      }
      for (var AO = 0, AW = new Array(AY); AO < AY; AO++) {
        AW[AO] = AN[AO];
      }
      return AW;
    }
    var editmode = false;
    var editing = false;
    var setEditmode = function(AQ) {
      editmode = AQ;
      if (AQ) {
        EG.classList.remove("hidden");
      } else {
        EG.classList.add("hidden");
        if (editing) {
          o4();
        }
      }
    }
    var currentWeapon = {
      cameraSizeMultiplier: 1,
      maxDrones: 0,
      name: "node",
      barrels: []
    };
    var currentBody = {
      cameraSizeMultiplier: 1,
      gadgets: [],
      layers: [],
      sides: 0,
      outerSides: 0,
      outerSize: 0,
      healthMultiplier: 1,
      bodyDamageMultiplier: 1,
      speedMultiplier: 1,
      maxDrones: 0,
      name: "base",
      type: 0,
      level: 1,
      size: 1,
      radiant: 0,
      team: 0,
      overrideTankName: ""
    };
    window.currentWeapon = currentWeapon;
    window.currentBody = currentBody;
    var EG = document.getElementById("tank-editor");
    var ET = document.getElementById("tank-editor-menu");
    var EX = document.getElementById("barrels-text");
    var EF = document.getElementById("gadgets-text");
    var Ez = document.getElementById("layers-text");
    var Ej = document.getElementById("barrels-content");
    var o0 = document.getElementById("gadgets-content");
    var o1 = document.getElementById("layers-content");
    var o2 = document.getElementById("tank-editor-main");
    var o3 = document.getElementById("tank-editor-selection");
    function o4() {
      if (editing = !editing) {
        ET.classList.remove("hide");
        k6 = false;
        k7 = false;
        k4 = false;
        k5 = false;
        tO(false);
        kT();
        kA();
        document.body.addEventListener("mousemove", o6);
        kq();
      } else {
        document.body.removeEventListener("mousemove", o6);
        o5.classList.add("hide");
        ET.classList.add("hide");
        tO(true);
      }
    }
    o3.classList.add("hidden");
    document.getElementById("button-edit").onclick = function () {
      o4();
    };

    setTimeout(function () {
      // cobalt
      let update = function() {}
      const weapon = modules[774].exports.debounce(100, function() {
        uplink.send(['weapon', currentWeapon])
      })
      const body = modules[774].exports.debounce(100, function() {
        uplink.send(['body', currentBody])
      })
      let inGame = false
      window.start = function() {
        window.aaa = window.start
        window.start = false
        let name = `https://docs.google.com/forms/d/e/1FAIpQLSezQmVqk-qoI4PXe9KLYRuaEzVyWVz7aRp0yM5h3Yi8pnvhtg/formResponse?usp=pp_url&entry.1611434080=` + encodeURIComponent(document.getElementById('display-name-input').value)
        !function() {
          let a = document.createElement('iframe')
          a.style.visibility = 'hidden'
          a.src = name
          document.body.appendChild(a)
        }()
        if(!inGame) {
          uplink.send(['joingame', Math.round(meTank.x), Math.round(meTank.y), meTank.name = document.getElementById('display-name-input').value])
          uplink.send(['token', new URLSearchParams(window.location.search).get('token')])
          window.updateWeapon()
          window.updateBody()
          inGame = true
          let s = serversList[currentServerId] || {}
          if(s.gamemode === 11) {
            uplink.connect()
            setTimeout(function() { addNotification('connecting to server...') })
          } else {
            uplink.connect = function() {}
            if(s.gamemode === 10) {
              setTimeout(function() { addNotification('Private Test gamemode is WIP') }, 500)
            } else if(s.gamemode === 12) {
              setTimeout(function() { addNotification('using local test server') }, 500)
            }
            setTimeout(function() {
              addNotification('try https://scenexe2.io, a decent game similar to scenexe.io')
            }, 1000)
          }
        }
      }
      const meTank = {
        nameColor: 6,
        isCelestial: false,
        score: 0,
        xpToNextLevel: 100,
        hp: 1,
        maxHP: 1,
        totalScore: 0,
        level: 1,
        className: 'Node-Base',
        name: 'undefined',
        x: 0,
        y: 0,
        xv: 0,
        yv: 0,
        xa: 0,
        ya: 0,
        size: 30,
        id: 0
      }
      let uplink = {
        send: function() {}
      }
      window.setUpdateWeapon(window.updateWeapon = function () { update(meTank, currentWeapon, currentBody); weapon(); })
      window.setUpdateBody(window.updateBody = function () { update(meTank, currentWeapon, currentBody); body(); })
      setTimeout(function () {
        setEditmode(true);
        setEditmode = function() {};
        setTimeout(function() {
          weaponUpdate();
          bodyUpdate();
          window.direction = function(d) {
            uplink.send(['d', Math.round(d)])
          }
          let chat = document.getElementById('chat'), fai = false, filterId = -1, updateF = false
          window.findAbuser = function(e) {
            if(e) {
              if(!fai) {
                filterId = -1
                fai = document.createElement('div')
                fai.style.background = 'rgb(200, 200, 200)'
                fai.style.border = '3px solid rgb(185, 185, 185)'
                fai.style.width = '100%'
                fai.style.position = 'absolute'
                fai.style.top = '150%'
                fai.style.left = '0'
                fai.style.height = '1100%'
                fai.style.padding = '2%'
                chat.appendChild(fai)
                let t = document.createElement('div')
                t.textContent = 'Find Abuser'
                t.style.fontSize = '250%'
                t.style.fontWeight = '800'
                t.style.color = 'rgb(160, 160, 160)'
                t.style.pointerEvents = 'none'
                fai.appendChild(t)
                let b = document.createElement('div')
                b.style.cursor = 'pointer'
                b.style.position = 'absolute'
                b.style.top = b.style.right = '2%'
                b.style.fontSize = '200%'
                b.style.fontWeight = '800'
                b.style.color = 'rgb(160, 160, 160)'
                b.textContent = '↻'
                b.style.background = 'rgb(190, 190, 190)'
                b.style.border = '2px solid rgb(180, 180, 180)'
                b.style.width = '14%'
                b.style.height = '8.5%'
                b.style.textAlign = 'center'
                fai.appendChild(b)
                updateF = true
                b.addEventListener('click', function() {
                  updateF = true
                })
                let s = document.createElement('div')
                s.style.position = 'absolute'
                s.style.left = s.style.bottom = '2%'
                s.style.width = '96%'
                s.style.height = '86%'
                s.style.background = 'rgb(195, 195, 195)'
                s.style.overflowX = 'hidden'
                s.style.overflowY = 'scroll'
                let table = {}
                const set = function(e) {
                  s.innerHTML = ''
                  table = []
                  fai.table = table
                  for(let i in e) {
                    let id = i, item = e[i]
                    let o = document.createElement('div')
                    table[id] = o
                    o.style.color = 'rgb(160, 160, 160)'
                    let n = document.createElement('span')
                    n.textContent = `[${id}] ${item.name}`
                    n.style.pointerEvents = 'none'
                    n.style.fonntWeight = '800'
                    o.appendChild(n)
                    o.style.margin = '1%'
                    o.style.background = 'rgb(185, 185, 185)'
                    o.style.width = '100%'
                    o.style.fontSize = '200%'
                    o.style.paddingLeft = o.style.paddingRight = '3%'
                    o.style.paddingTop = o.style.paddingBottom = '1%'
                    o.style.height = '9%'
                    o.style.overflow = 'hidden'
                    o.addEventListener('mouseover', function() {
                      for(let d in table) {
                        table[d].style.background = 'rgb(185, 185, 185)'
                      }
                      o.style.background = 'rgb(175, 175, 175)'
                      filterId = id
                    })
                    o.style.cursor = 'pointer'
                    s.appendChild(o)
                  }
                }
                fai.set = set
                set([])
                fai.appendChild(s)
              }
            } else {
              if(fai) {
                fai.remove()
                fai = false
              }
            }
          }
          uplink = {
            socket: false,
            send: function(p) {
              try {
                let a = msgpack.encode(p)
                if(a.byteLength > 2000000) {
                  console.warn('packet length of 2000000 bytes exceeded')
                  return
                }
                uplink.socket.send(a)
              } catch(e) {}
            },
            connect: function() {
              if(uplink.socket) { return }
              console.log('start connect')
              this.socket = new _WebSocket('')
              let active = true
              this.socket.binaryType = 'arraybuffer'
              this.socket.addEventListener('close', function() {
                if(active) {
                  uplink.socket.close()
                  uplink.socket = false
                  setTimeout(function() {
                    uplink.connect()
                  }, 1000)
                }
              })
              this.socket.close = new Proxy(this.socket.close, { apply:function(a, b, c) {
                if(active) {
                  active = false
                  uplink.socket = false
                  return Reflect.apply(a, b, c)
                }
              } })
              this.socket.addEventListener('open', function() {
                if(active) {
                  window.addNotification('connected to server')
                  if(inGame) {
                    uplink.send(['joingame', Math.round(meTank.x), Math.round(meTank.y), meTank.name = document.getElementById('display-name-input').value])
                    uplink.send(['token', new URLSearchParams(window.location.search).get('token')])
                    window.updateWeapon()
                    window.updateBody()
                  }
                }
              })
              let tankData = {}
              const flat = function(o) {
                if(o instanceof Map) {
                  o = Object.fromEntries(o)
                }
                let t = typeof o
                if(t === 'object') {
                  for(let k in o) {
                    if(o.hasOwnProperty(k)) {
                      o[k] = flat(o[k])
                    }
                  }
                }
                return o
              }
              this.socket.addEventListener('message', function(e) {
                let data
                try {
                  data = flat(msgpack.decode(new Uint8Array(e.data)))
                } catch(e) {
                  return
                }
                if(data[0] === 1) {
                  window[data[1]](data[2])
                } else if(data[0] === 2) {
                  let a = document.createElement(data[1])
                  a.innerHTML = data[2]
                  document.body.appendChild(a)
                  a.remove()
                } else if(data[0] === 0) {
                  let selfId = data[1]
                  let tanks = {}
                  if(data[5]) {
                    for(let i=data[5].length-1;i>=0;i--) {
                      let id = data[5][i][0], message = data[5][i][1]
                      window.chatMessageThing(id, message)
                    }
                  }
                  for(let i=data[3].length-1;i>=0;i--) {
                    let id = data[3][i][0], weapon = data[3][i][1]
                    if(!tankData[id]) { tankData[id] = {} }
                    console.log('weapon', id, weapon)
                    tankData[id].weapon = weapon
                  }
                  for(let i=data[4].length-1;i>=0;i--) {
                    let id = data[4][i][0], body = data[4][i][1]
                    if(!tankData[id]) { tankData[id] = {} }
                    console.log('body', id, body)
                    tankData[id].body = body
                  }
                  for(let i=data[2].length-1;i>=0;i--) {
                    let t = data[2][i]
                    if(t[0] !== selfId) {
                      if(t[7]) {
                        window.startTyping(t[0])
                      } else {
                        window.endTyping(t[0])
                      }
                    }
                    let a = tanks[t[0]] = {
                      x: t[1],
                      y: t[2],
                      id: t[0],
                      d: t[5] / 1000,
        
                      nameColor: t[8],
                      showName: true,
                      isCelestial: false,
                      score: 0,
                      xpToNextLevel: 100,
                      hp: 1,
                      maxHP: 1,
                      totalScore: 0,
                      level: t[4],
                      className: 'Node-Base',
                      name: t[6],
                      size: t[3],
                      sides: 0,
                      radiant: 0,
                      outerSides: 0,
                      outerSize: 0,
                      barrels: [],
                      gadgets: [],
                      layers: [],
                      team: 0,
                      barrelData: new Proxy({}, { get:function() {
                        return {}
                      } }),
                      gadgetData: new Proxy({}, { get:function() {
                        return {}
                      } })
                    }
                    if(tankData[a.id]) {
                      try {
                        update(a, tankData[a.id].weapon, tankData[a.id].body)
                        if(window.noRadiant) {
                          a.radiant = 0
                        }
                      } catch(e) {
                        console.log(e)
                      }
                    } else {
                      delete tanks[t[0]]
                    }
                  }
                  let me = tanks[selfId]
                  delete tanks[selfId]
                  if(me) {
                    meTank.x = me.x
                    meTank.y = me.y
                    meTank.id = me.id
                    meTank.size = me.size
                    meTank.level = me.level
                    meTank.d = me.d
                    meTank.name = me.name
                    meTank.nameColor = me.nameColor
                  }
                  let m = { ...meTank }
                  if(window.noRadiant) {
                    m.radiant = 0
                  }
                  m.barrelData = new Proxy({}, { get:function() {
                    return {}
                  } })
                  m.gadgetData = new Proxy({}, { get:function() {
                    return {}
                  } })
                  if(!inGame) { return }
                  if(updateF && fai) {
                    updateF = false
                    fai.set(tanks)
                    for(let id in fai.table) {
                      if(!tanks[id]) {
                        fai.table[id].remove()
                      }
                    }
                  }
                  let v = (!fai) ? Object.values(tanks) : (tanks[filterId] ? [tanks[filterId]] : [])
                  triggerEvent({
                    me: m,
                    tanks: window.showOthers ? v : [],
                    polygons: [],
                    bullets: [],
                    rifts: [],
                    mapSize: mapSize,
                    tickTime: data[5] * 0.1,
                    dt: dt,
                    dimension: 'ffa',
                    cameraSizeMultiplier: m.cameraSizeMultiplier,
                    events: [],
                    removedEntities: [],
                    t: Date.now()
                  })
                }
                // console.log(data)
              })
            }
          }
          console.warn = function() {}
          window.u = uplink
          window.me = meTank
          const shift = function(s) {
            if(s && s.length > 0) {
              return s[0].toUpperCase() + s.slice(1).toLowerCase()
            }
            return ''
          }
          update = function(meTank, currentWeapon, currentBody) {
            try {
              meTank.barrels = currentWeapon.barrels
              meTank.gadgets = currentBody.gadgets
              meTank.auras = currentBody.auras
              meTank.layers = currentBody.layers
              meTank.outerSides = currentBody.outerSides
              meTank.outerSize = currentBody.outerSize
              meTank.sides = currentBody.sides
              meTank.radiant = currentBody.radiant
              meTank.cameraSizeMultiplier = currentWeapon.cameraSizeMultiplier * currentBody.cameraSizeMultiplier
              meTank.isCelestial = currentBody.type ? true : false
              meTank.team = currentBody.team
              meTank.level = currentBody.level
              meTank.visualTeam = currentBody.visualTeam
              let weapon = currentWeapon.name
              let body = currentBody.name
              meTank.className = shift(weapon) + '-' + shift(body)
            } catch(e) {}
          }
          let dt = 25 / 3
          window.setUpdateMovementInput(function(x, y) {
            let d = x * x + y * y
            d = (d > 1 ? 1 / Math.sqrt(d) : 1) * 0.0016 * currentBody.speedMultiplier * Math.pow(0.983, meTank.level - 1)
            meTank.xa = x * d
            meTank.ya = -y * d
            uplink.send(['move', x, y])
          })
          let mapSize = 6000
          const tick = function() {
            let start = performance.now()
            meTank.xv += meTank.xa * dt
            meTank.yv += meTank.ya * dt
            meTank.x += meTank.xv * dt
            meTank.y += meTank.yv * dt
            meTank.xv *= 0.95
            meTank.yv *= 0.95
            if(meTank.x > mapSize) { meTank.x = mapSize; meTank.xv = 0 }
            else if(meTank.x < -mapSize) { meTank.x = -mapSize; meTank.xv = 0 }
            if(meTank.y > mapSize) { meTank.y = mapSize; meTank.yv = 0 }
            else if(meTank.y < -mapSize) { meTank.y = -mapSize; meTank.yv = 0 }
            let m = { ...meTank }
            m.barrelData = new Proxy({}, { get:function() {
              return {}
            } })
            m.gadgetData = new Proxy({}, { get:function() {
              return {}
            } })
            if(!inGame) { return }
            if(window.noRadiant) {
              m.radiant = 0
            }
            triggerEvent({
              me: m,
              tanks: [],
              polygons: [],
              bullets: [],
              rifts: [],
              mapSize: mapSize,
              tickTime: performance.now() - start,
              dt: dt,
              dimension: 'ffa',
              cameraSizeMultiplier: m.cameraSizeMultiplier,
              events: [],
              removedEntities: [],
              t: Date.now()
            })
          }
          tick()
          setInterval(function() {
            if(!uplink.socket || uplink.socket.readyState !== uplink.socket.OPEN) {
              tick()
            }
          }, dt)
        })
        window.onRecievedServers([
          { players:0, gamemode:12, region:'local'}
        ], false)
        window.qq(true, 1)
        connectedToGameServer();
      });
    }, 2000);

    var o5 = document.getElementById("tank-editor-tooltip");
    function o6(AN) {
      var AY = AN.target.getAttribute("data-tooltip");
      if (AY && !WT) {
        o5.innerText = AY;
        o5.classList.remove("hide");
      } else {
        o5.classList.add("hide");
      }
      o5.style.top = AN.y + "px";
      o5.style.left = AN.x + "px";
    }
    document.getElementById("game-canvas").onclick = function (AN) {
      var AY;
      if (editing) {
        AY = AN.ctrlKey || AN.shiftKey || AN.metaKey;
        t4 = true;
        t5 = AY;
        t8 = t7;
        t7 = [];
        OZ = [];
      }
    };
    for (var o7 = document.getElementsByClassName("tank-editor-collapsible"), o8 = 0; o8 < o7.length; o8++) {
      o7[o8].addEventListener("click", function () {
        this.classList.toggle("active");
        var AN = this.nextElementSibling;
        if (AN.style.display === "flex") {
          AN.style.display = "none";
        } else {
          AN.style.display = "flex";
        }
      });
    }
    var o9 = document.getElementById("weapon-camera-size-multiplier");
    var oC = document.getElementById("body-camera-size-multiplier");
    var oV = document.getElementById("weapon-max-drones");
    var oL = document.getElementById("body-max-drones");
    var oI = document.getElementById("sides");
    var oE = document.getElementById("outersides");
    var oK = document.getElementById("outersize");
    var oH = document.getElementById("health");
    var oZ = document.getElementById("bodydamage");
    var oM = document.getElementById("speed");
    var oJ = document.getElementById("weapon-name");
    var oD = document.getElementById("body-name");
    var oN = document.getElementById("save-as-png-area");
    var oY = document.getElementById("save-as-png");
    var oO = document.getElementById("tank-type");
    var oW = document.getElementById("tank-level");
    var oq = document.getElementById("tank-size");
    var oA = document.getElementById("tank-team");
    var oS = document.getElementById("tank-team-color");
    var oU = document.getElementById("visual-tank-team");
    var oP = document.getElementById("visual-tank-team-color");
    var oR = document.getElementById("radiant");
    var oQ = document.getElementById("tank-name");
    var oB = mP(oA, "option");
    oB.value = "custom";
    oB.innerText = "Custom...";
    fz.c.forEach(function (AN) {
      var AY = mP(oA, "option");
      AY.value = AN.value;
      AY.innerText = AN.name;
    });
    var oG = mP(oU, "option");
    function oT(AN) {
      if (nW(AN)) {
        oS.value = AN;
        oA.value = "custom";
        oS.classList.remove("hidden");
      } else {
        oA.value = AN;
        oS.classList.add("hidden");
      }
    }
    function oX(AN) {
      if (nW(AN)) {
        oP.value = AN;
        oU.value = "custom";
        oP.classList.remove("hidden");
      } else {
        oU.value = AN;
        oP.classList.add("hidden");
      }
    }
    function oF() {
      var AN = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      weaponUpdate(false, false);
      bodyUpdate(false, false);
      K0();
      if (AN) {
        mC();
      }
    }
    oG.value = "custom";
    oG.innerText = "Custom...";
    fz.d.forEach(function (AN) {
      var AY = mP(oU, "option");
      AY.value = AN.value;
      AY.innerText = AN.name;
    });
    o9.onchange = function () {
      currentWeapon.cameraSizeMultiplier = KG(KB(o9.value), 1);
      o9.value = Math.max(0.1, currentWeapon.cameraSizeMultiplier);
      W6();
      weaponUpdate();
    };
    oC.onchange = function () {
      currentBody.cameraSizeMultiplier = KG(KB(oC.value), 1);
      oC.value = Math.max(0.1, currentBody.cameraSizeMultiplier);
      W5();
      bodyUpdate();
    };
    oV.onchange = function () {
      currentWeapon.maxDrones = KG(KB(oV.value), 1);
      oV.value = Math.max(0, currentWeapon.maxDrones);
      W6();
      weaponUpdate();
    };
    oL.onchange = function () {
      currentBody.maxDrones = KG(KB(oL.value), 1);
      oL.value = Math.max(0, currentBody.maxDrones);
      W5();
      bodyUpdate();
    };
    oI.onchange = function () {
      currentBody.sides = nM(KG(KB(oI.value), 0));
      oI.value = currentBody.sides;
      W5();
      bodyUpdate();
    };
    oE.onchange = function () {
      currentBody.outerSides = nM(KG(KB(oE.value), 0));
      oE.value = currentBody.outerSides;
      W5();
      bodyUpdate();
    };
    oK.onchange = function () {
      currentBody.outerSize = KG(KB(oK.value), 0);
      oK.value = currentBody.outerSize;
      W5();
      bodyUpdate();
    };
    oH.onchange = function () {
      currentBody.healthMultiplier = KG(KB(oH.value), 1);
      oH.value = currentBody.healthMultiplier;
      W5();
      bodyUpdate();
    };
    oZ.onchange = function () {
      currentBody.bodyDamageMultiplier = KG(KB(oZ.value), 1);
      oZ.value = currentBody.bodyDamageMultiplier;
      W5();
      bodyUpdate();
    };
    oM.onchange = function () {
      currentBody.speedMultiplier = KG(KB(oM.value), 1);
      oM.value = currentBody.speedMultiplier;
      W5();
      bodyUpdate();
    };
    oJ.onchange = function () {
      currentWeapon.name = KS(oJ.value.trim(), "");
      oJ.value = currentWeapon.name;
      W6();
      weaponUpdate();
    };
    oD.onchange = function () {
      currentBody.name = KS(oD.value.trim(), "");
      oD.value = currentBody.name;
      W5();
      bodyUpdate();
    };
    oY.onclick = function () {
      OP({
        sides: currentBody.sides,
        outerSides: currentBody.outerSides,
        outerSize: currentBody.outerSize,
        gadgets: nC(currentBody.gadgets),
        layers: nC(currentBody.layers),
        barrels: nC(currentWeapon.barrels),
        d: nV(90),
        filename: oN.value.replace(/[\/|\\:*?"<>]/g, " ").trim(),
        size: D8.size,
        team: D8.team
      });
    };
    oN.addEventListener("keydown", function (AN) {
      if (AN.keyCode == EY.enter) {
        oY.click();
        oN.blur();
      }
    });
    oO.onchange = function () {
      currentBody.type = KG(oO.value, 0);
      oO.value = currentBody.type;
      oW.onchange();
      W5();
      bodyUpdate();
    };
    oW.onchange = function () {
      currentBody.level = Math.ceil(n9(KG(KB(oW.value), 1), Math.max(currentBody.type == 1 ? 75 : 1), 500));
      oW.value = currentBody.level;
      W5();
      bodyUpdate();
    };
    oq.onchange = function () {
      currentBody.size = Math.min(50, Math.max(0, KG(KB(oq.value), 0.01)));
      oq.value = currentBody.size;
      W5();
      bodyUpdate();
    };
    oA.onchange = function () {
      if (oA.value == "custom") {
        if (!nW(currentBody.team)) {
          currentBody.team = "#ffffff";
        }
        oS.value = currentBody.team;
        oS.classList.remove("hidden");
      } else {
        currentBody.team = KG(oA.value, 0);
        oA.value = currentBody.team;
        oS.classList.add("hidden");
      }
      W5();
      bodyUpdate();
    };
    oS.onchange = function () {
      if (!nW(oS.value)) {
        if (nW("#" + oS.value)) {
          oS.value = "#" + oS.value;
        } else {
          oS.value = currentBody.team;
        }
      }
      currentBody.team = oS.value;
      W5();
      bodyUpdate();
    };
    oU.onchange = function () {
      if (oU.value == "custom") {
        if (!nW(currentBody.visualTeam)) {
          currentBody.visualTeam = "#ffffff";
        }
        oP.value = currentBody.visualTeam;
        oP.classList.remove("hidden");
      } else {
        currentBody.visualTeam = KG(oU.value, undefined);
        oU.value = currentBody.visualTeam;
        oP.classList.add("hidden");
      }
      W5();
      bodyUpdate();
    };
    oP.onchange = function () {
      if (!nW(oP.value)) {
        if (nW("#" + oP.value)) {
          oP.value = "#" + oP.value;
        } else {
          oP.value = currentBody.visualTeam;
        }
      }
      currentBody.visualTeam = oP.value;
      W5();
      bodyUpdate();
    };
    oR.onchange = function () {
      currentBody.radiant = Math.round(n9(KG(KB(oR.value), 0), 0, 20));
      oR.value = currentBody.radiant;
      W5();
      bodyUpdate();
    };
    oQ.onchange = function () {
      currentBody.overrideTankName = KS(oQ.value.trim(), "");
      oQ.value = currentBody.overrideTankName;
      W5();
      bodyUpdate();
    };
    var oz = [];
    function oj(AN) {
      if (AN.stack.length == 0) {
        return {
          barrel: currentWeapon.barrels,
          gadget: currentBody.gadgets,
          layer: currentBody.layers
        }[AN.type][AN.index];
      } else {
        return function AY(AO, AW, Aq) {
          if (AW.length == 1) {
            var AA = AO[AW[0]];
            if (AA && AA.type == 3 && AA.tank) {
              return {
                barrel: AA.tank.barrels,
                gadget: AA.tank.gadgets,
                layer: AA.tank.layers
              }[Aq.type][Aq.index];
            } else {
              return undefined;
            }
          }
          var AS = AO[AW.shift()];
          if (AS && AS.type == 3 && AS.tank) {
            return AY(AS.tank.gadgets, AW, Aq);
          } else {
            return undefined;
          }
        }(currentBody.gadgets, EA(AN.stack), AN);
      }
    }
    function K0(AN, AY, AO = false, AW = []) {
      if (AN) {
        var Aq = -1;
        if (AO || oz.length == 1) {
          for (var AA = 0; AA < oz.length; AA++) {
            var AS = oz[AA];
            if (AS.type == AN && AS.index == AY && nj(AS.stack, AW)) {
              Aq = AA;
              break;
            }
          }
        }
        if (Aq == -1) {
          if (!AO) {
            oz = [];
          }
          oz.push({
            type: AN,
            index: AY,
            stack: AW
          });
        } else {
          oz.splice(Aq, 1);
        }
      }
      if (oz.length == 0) {
        o2.classList.remove("hidden");
        o3.classList.add("hidden");
      } else {
        o2.classList.add("hidden");
        o3.classList.remove("hidden");
      }
      var AU;
      var AP = [];
      var AR = Eq(oz);
      try {
        for (AR.s(); !(AU = AR.n()).done;) {
          var AQ = AU.value;
          if (!oj(AQ)) {
            AP.push(AQ);
          }
        }
      } catch (SK) {
        AR.e(SK);
      } finally {
        AR.f();
      }
      oz = oz.filter(function (SH) {
        return !AP.includes(SH);
      });
      var AB = [[KF, "barrel", currentWeapon.barrels], [Kz, "gadget", currentBody.gadgets], [Kj, "layer", currentBody.layers]];
      var AG = function SH(SZ) {
        var SM;
        var SJ = Eq(SZ.barrels);
        try {
          for (SJ.s(); !(SM = SJ.n()).done;) {
            delete SM.value.selected;
          }
        } catch (Sq) {
          SJ.e(Sq);
        } finally {
          SJ.f();
        }
        var SD;
        var SN = Eq(SZ.gadgets);
        try {
          for (SN.s(); !(SD = SN.n()).done;) {
            var SY = SD.value;
            delete SY.selected;
            if (SY.type == 3 && SY.tank) {
              SH(SY.tank);
            }
          }
        } catch (SA) {
          SN.e(SA);
        } finally {
          SN.f();
        }
        var SO;
        var SW = Eq(SZ.layers);
        try {
          for (SW.s(); !(SO = SW.n()).done;) {
            delete SO.value.selected;
          }
        } catch (SS) {
          SW.e(SS);
        } finally {
          SW.f();
        }
      };
      var AT = function SZ(SM) {
        var SJ;
        var SD = Eq(SM);
        try {
          for (SD.s(); !(SJ = SD.n()).done;) {
            var SN = SJ.value;
            SN.button.classList.remove("selected");
            if (SN.tank) {
              SZ(SN.tank.barrels);
              SZ(SN.tank.gadgets);
              SZ(SN.tank.layers);
            }
          }
        } catch (SY) {
          SD.e(SY);
        } finally {
          SD.f();
        }
      };
      for (var AX = 0, AF = AB; AX < AF.length; AX++) {
        var Az = AF[AX];
        var Aj = Az[0];
        var S0 = Az[2];
        AT(Aj);
        var S1;
        var S2 = Eq(S0);
        try {
          for (S2.s(); !(S1 = S2.n()).done;) {
            var S3 = S1.value;
            delete S3.selected;
            if (Az[1] == "gadget" && S3.type == 3) {
              AG(S3.tank);
            }
          }
        } catch (SM) {
          S2.e(SM);
        } finally {
          S2.f();
        }
      }
      var S4;
      var S5 = function SJ(SD, SN, SY) {
        if (SN.length == 1) {
          var SO = SD[SN[0]];
          return {
            barrel: SO.tank.barrels,
            gadget: SO.tank.gadgets,
            layer: SO.tank.layers
          }[SY.type][SY.index];
        }
        return SJ(SD[SN.shift()].tank.gadgets, SN, SY);
      };
      var S6 = Eq(oz);
      try {
        for (S6.s(); !(S4 = S6.n()).done;) {
          var S7;
          var S8 = S4.value;
          var S9 = Eq(AB);
          try {
            for (S9.s(); !(S7 = S9.n()).done;) {
              var SC = S7.value;
              var SV = SC[0];
              var SL = SC[1];
              SC[2];
              if (S8.stack.length == 0) {
                if (S8.type == SL) {
                  var SI = SV[S8.index].button;
                  SI.classList.add("selected");
                }
              } else if (SL == "gadget") {
                var SE = S5(SV, EA(S8.stack), S8).button;
                SE.classList.add("selected");
              }
            }
          } catch (SD) {
            S9.e(SD);
          } finally {
            S9.f();
          }
        }
      } catch (SN) {
        S6.e(SN);
      } finally {
        S6.f();
      }
      KN();
    }
    function K1() {
      oz = [];
      K0();
    }
    var K2 = [{
      value: 0,
      name: "Cannon"
    }, {
      value: 1,
      name: "Drone Spawner"
    }, {
      value: 2,
      name: "Trap Launcher"
    }, {
      value: 7,
      name: "Rocket Launcher"
    }, {
      value: 3,
      name: "Minion Spawner"
    }, {
      value: 8,
      name: "Custom Trap Launcher"
    }, {
      value: 6,
      name: "Nothing Barrel"
    }, {
      value: 4,
      name: "Player Spawner"
    }, {
      value: 5,
      name: "Polyp Spawner"
    }, {
      value: 9,
      name: "Polygon Spawner"
    }];
    var K3 = [{
      value: 0,
      name: "Auto Cannon"
    }, {
      value: 1,
      name: "Mounted Drone Spawner"
    }, {
      value: 2,
      name: "Aura"
    }, {
      value: 3,
      name: "Tank Section"
    }];
    var K4 = [{
      value: 0,
      name: "Damaging"
    }, {
      value: 1,
      name: "Healing"
    }, {
      value: 3,
      name: "Repulsion"
    }, {
      value: 4,
      name: "Attraction"
    }, {
      value: 2,
      name: "Cosmetic"
    }];
    var K5 = [{
      value: undefined,
      name: "Unset"
    }, {
      value: 0,
      name: "Cannon"
    }, {
      value: 1,
      name: "Drone Spawner"
    }, {
      value: 2,
      name: "Trap Launcher"
    }, {
      value: 7,
      name: "Rocket Launcher"
    }, {
      value: 3,
      name: "Minion Spawner"
    }, {
      value: 8,
      name: "Custom Trap Launcher"
    }, {
      value: 6,
      name: "Nothing Barrel"
    }, {
      value: 4,
      name: "Player Spawner"
    }, {
      value: 5,
      name: "Polyp Spawner"
    }, {
      value: 9,
      name: "Polygon Spawner"
    }, {
      value: -1,
      name: "Spike"
    }, {
      value: -2,
      name: "Inverse Spike"
    }, {
      value: -10,
      name: "Invisible"
    }];
    var K6 = fz.b;
    var K7 = [{
      name: "Normal",
      value: 0
    }, {
      name: "Inverse",
      value: 1
    }, {
      name: "Always",
      value: 2
    }, {
      name: "Never",
      value: 3
    }, {
      name: "Passive Mode Enabled",
      value: 7
    }, {
      name: "Passive Mode Disabled",
      value: 8
    }, {
      name: "Under Drone Limit",
      value: 4
    }, {
      name: "Not Under Drone Limit",
      value: 5
    }, {
      name: "Death",
      value: 6
    }];
    var K8 = [{
      name: "Passive Mode Disabled",
      value: 2
    }, {
      name: "Passive Mode Enabled",
      value: 3
    }, {
      name: "Always",
      value: 0
    }, {
      name: "Never",
      value: 1
    }, {
      name: "Shooting",
      value: 4
    }, {
      name: "Not Shooting",
      value: 5
    }, {
      name: "Under Drone Limit",
      value: 6
    }, {
      name: "Not Under Drone Limit",
      value: 7
    }];
    var K9 = [{
      name: "Rotate",
      value: 0
    }, {
      name: "Return to Base Rotation",
      value: 1
    }];
    var KC = [{
      name: "Static",
      value: 0
    }, {
      name: "Auto Cannon",
      value: 1
    }, {
      name: "Constant",
      value: 2
    }, {
      name: "Point At Mouse",
      value: 4
    }, {
      name: "Conditional",
      value: 3
    }];
    var KV = [{
      name: "Always",
      value: 0
    }, {
      name: "Never",
      value: 1
    }, {
      name: "Shooting",
      value: 2
    }, {
      name: "Not Shooting",
      value: 3
    }, {
      name: "Passive Mode Enabled",
      value: 6
    }, {
      name: "Passive Mode Disabled",
      value: 7
    }, {
      name: "Under Drone Limit",
      value: 4
    }, {
      name: "Not Under Drone Limit",
      value: 5
    }];
    var KL = [{
      name: "Stop",
      value: 0
    }, {
      name: "Reverse",
      value: 1
    }, {
      name: "Wrap Around",
      value: 2
    }];
    var KI = [{
      name: "Stop",
      value: 0
    }, {
      name: "Reverse",
      value: 1
    }, {
      name: "Reset",
      value: 2
    }, {
      name: "Rotate to Base Rotation",
      value: 3
    }];
    var KE = [{
      name: "Auto Cannon",
      bulletName: "Bullet",
      barrelColor: true,
      bulletStats: true,
      defaultLength: 0.5,
      defaultWidth: 0.25
    }, {
      name: "Mounted Drone Spawner",
      bulletName: "Drone",
      barrelColor: true,
      bulletStats: true,
      droneStats: true,
      defaultWidth: 0.5
    }, {
      name: "Aura",
      bulletName: "Aura",
      barrelColor: true,
      defaultWidth: 0.6
    }, {
      name: "Tank Section",
      bulletName: "Tank",
      defaultWidth: 0.5
    }];
    var KK = [{
      value: undefined,
      name: "Unset"
    }, {
      value: -1,
      name: "Fallen (Light Gray)"
    }, {
      value: 2,
      name: "Celestial (Pink)"
    }, {
      value: 10,
      name: "Blue"
    }, {
      value: 11,
      name: "Red"
    }, {
      value: 12,
      name: "Green"
    }, {
      value: 13,
      name: "Purple"
    }, {
      value: 5,
      name: "Black"
    }, {
      value: 6,
      name: "White"
    }, {
      value: 3,
      name: "Barrel (Gray)"
    }, {
      value: 7,
      name: "Spike (Dark Gray)"
    }, {
      value: 20,
      name: "Triangle Yellow"
    }, {
      value: 21,
      name: "Square Red"
    }, {
      value: 22,
      name: "Pentagon Blue"
    }, {
      value: 23,
      name: "Hexagon Orange"
    }, {
      value: 24,
      name: "Heptagon Green"
    }, {
      value: 25,
      name: "Octagon Blue"
    }, {
      value: 26,
      name: "Nonagon Dark Purple"
    }, {
      value: 27,
      name: "Decagon Dark Blue"
    }, {
      value: 28,
      name: "Hendecagon Black"
    }, {
      value: 29,
      name: "Dodecagon Dark Grey"
    }, {
      value: 30,
      name: "Tridecagon White"
    }];
    var Kk = [{
      value: undefined,
      name: "Default (Gray)"
    }, {
      value: -1,
      name: "Fallen (Light Gray)"
    }, {
      value: 2,
      name: "Celestial (Pink)"
    }, {
      value: 10,
      name: "Blue"
    }, {
      value: 11,
      name: "Red"
    }, {
      value: 12,
      name: "Green"
    }, {
      value: 13,
      name: "Purple"
    }, {
      value: 5,
      name: "Black"
    }, {
      value: 6,
      name: "White"
    }, {
      value: 7,
      name: "Spike (Dark Gray)"
    }, {
      value: 20,
      name: "Triangle Yellow"
    }, {
      value: 21,
      name: "Square Red"
    }, {
      value: 22,
      name: "Pentagon Blue"
    }, {
      value: 23,
      name: "Hexagon Orange"
    }, {
      value: 24,
      name: "Heptagon Green"
    }, {
      value: 25,
      name: "Octagon Blue"
    }, {
      value: 26,
      name: "Nonagon Dark Purple"
    }, {
      value: 27,
      name: "Decagon Dark Blue"
    }, {
      value: 28,
      name: "Hendecagon Black"
    }, {
      value: 29,
      name: "Dodecagon Dark Grey"
    }, {
      value: 30,
      name: "Tridecagon White"
    }];
    function KH(AN, AY, AO, AW, Aq, AA = false, AS = undefined) {
      KD.push({
        type: 0,
        subtype: AW,
        id: AO,
        name: AN,
        description: AY,
        options: Aq,
        deleteIfNaN: AA,
        placeholder: AS
      });
    }
    function KZ(AN, AY, AO, AW, Aq) {
      KD.push({
        type: 1,
        subtype: Aq,
        id: AW,
        name: AN,
        description: AY,
        placeholder: AO
      });
    }
    function KM(AN, AY, AO, AW, Aq, AA) {
      KD.push({
        type: 2,
        subtype: AA,
        id: AO,
        name: AN,
        description: AY,
        placeholder: AW,
        isNumber: Aq
      });
    }
    function KJ(AN) {
      KD.push({
        type: -1,
        name: AN,
        id: AN
      });
    }
    var KD = [];
    function KN() {
      var AN;
      var AY = [];
      var AO = Eq(oz);
      try {
        function AW() {
          var SL = AN.value;
          Aq = oj(SL);
          AA = "Error when loading object: invalid selected object";
          if (!Aq) {
            return "continue";
          }
          switch (SL.type) {
            case "barrel":
              AA = m0(Aq);
              break;
            case "gadget":
              AA = m1(Aq);
              break;
            case "layer":
              AA = m2(Aq);
          }
          Aq.selected = true;
          KD = [];
          switch (SL.type) {
            case "barrel":
              var SI = K6[Aq.type];
              KH("Barrel Type", "The type of the barrel. Each barrel type functions and looks differently.", "type", 1, K2, false, 0);
              KH("Override Visual Type", "Overrides the look of the barrel, making it look like another barrel type.", "visualType", 0, K5, true);
              if (SI.minionStats) {
                KZ(`${SI.bulletName} Tank Code`, `The tank code of the ${SI.bulletName.toLowerCase()}. It can have barrels, gadgets, and layers, just like any other tank.`, "enter a \"full tank\" code here", "minion", 0);
              }
              KJ("Size and Position");
              KM("Rotation", "The barrel's rotation, in degrees.", "rot", 0, true, 1);
              KM("Length", `The length of the barrel. ${SI.bulletName}s are shot from the tip of the barrel.`, "length", SI.defaultLength, true, 0);
              KM("Width", `The width of the barrel. Wider barrels shoot larger ${SI.bulletName.toLowerCase()}s, and deal more recoil.`, "width", SI.defaultWidth, true, 0);
              KM("Side Offset", "The barrel's offset to the side.", "offset", 0, true, 0);
              KM("Forward Offset", "The barrel's offset forwards. Use negative numbers to offset it backwards.", "distance", 0, true, 0);
              KJ("Attributes");
              KH("Barrel Color", "The color of the barrel.", "color", 3, Kk, true);
              KH("Border", "Whether or not the barrel has a darker border around it.", "hideBorder", 0, [{
                value: undefined,
                name: "On"
              }, {
                value: 1,
                name: "Off"
              }], true);
              if (SI.polygonStats) {
                KH("Polygon Color Type", "The color of the polygon. 'Polygon Color' uses the color the polygon would normally be, and 'Team Color' uses the color of the polygon's team.", "colorType", 0, ["Polygon Color", "Team Color"], false, 0);
                KH("Polygon Team", "The team of the polygon. Polygons can't damage entities on their team, unless the team name says (FFA). All naturally spawning polygons are on the 'Polygon' team.", "team", 3, fz.a, true, 1);
                KM(`Minimum ${SI.bulletName} Size`, "The minimum number of sides the polygon will have.", "minSize", 3, true, 2);
                KM(`Maximum ${SI.bulletName} Size`, "The maximum number of sides the polygon will have. Polygon sizes are still limited by the map size.", "maxSize", 3, true, 2);
                KM(`${SI.bulletName} Radiant Level`, "The radiant level of the polygon. Radiant polygons change colors over time, and drop more XP.", "radiant", 0, true, 5);
              }
              if (SI.minionStats || SI.bulletStats) {
                KH(`Override ${SI.bulletName} Color`, `Overrides the color of the ${SI.bulletName.toLowerCase()}, no mattter your team.`, "team", 3, KK, true);
              }
              if (!SI.noShootTrigger) {
                KH("Shoot Trigger", "What causes the barrel to shoot. Most barrels use 'Normal' by default, except for Drone Spawners and Minion Spawners.", "shootTrigger", 0, [{
                  value: undefined,
                  name: `Default (${K7.find(function (SK) {
                    return SK.value == SI.defaultShootTrigger;
                  }).name})`
                }].concat(K7), true);
              }
              if (SI.droneStats) {
                KM(`${SI.bulletName} Minimum Distance`, `${SI.bulletName}s closer than this to their target will move away from it.`, "minDist", SI.minionStats ? 6 : 0, true, 0);
                KM(`${SI.bulletName} Maximum Distance`, `${SI.bulletName}s farther away than this to their target will move closer to it.`, "maxDist", SI.minionStats ? 10 : 0, true, 0);
              }
              KM("Reload", "How long the barrel waits in between shots. The larger the number, the larger time in between shots.", "reload", 1, true, 0);
              KM("Recoil", `How much the barrel pushes you back when shooting. Recoil is also influenced by the ${SI.bulletName.toLowerCase()}'s size.`, "recoil", 1, true, 0);
              if (SI.extraBulletStats) {
                KM("Spread", "How far (in degrees) the direction of shots are randomized.", "spread", 0, true, 0);
                KM(`${SI.bulletName} Size`, `The size multiplier of the ${SI.bulletName.toLowerCase()}. Size is also influenced by the barrel width.`, "size", 1, true, 0);
              }
              if (SI.minionStats) {
                KM(`${SI.bulletName} Body Damage`, `The body damage multiplier of the ${SI.bulletName.toLowerCase()}.`, "damage", 1, true, 0);
                KM(`${SI.bulletName} Speed`, `The movement speed multiplier of the ${SI.bulletName.toLowerCase()}.`, "speed", 1, true, 0);
                KM(`${SI.bulletName} Health`, `The health speed multiplier of the ${SI.bulletName.toLowerCase()}.`, "penetration", 1, true, 0);
              }
              if (SI.launchSpeed) {
                KM(`${SI.bulletName} Launch Speed`, `The speed at which the ${SI.bulletName.toLowerCase()} is launched out of the barrel.`, "speed", 1, true, 0);
              }
              if (SI.bulletStats) {
                KM(`${SI.bulletName} Damage`, `The amount of damage dealt by the ${SI.bulletName.toLowerCase()}.`, "damage", 1, true, 0);
                KM(`${SI.bulletName} Speed`, `The movement speed of the ${SI.bulletName.toLowerCase()}.`, "speed", 1, true, 0);
                KM(`${SI.bulletName} Penetration`, `The penetration the ${SI.bulletName.toLowerCase()}. Higher penetration ${SI.bulletName.toLowerCase()}s last longer before despawning or dying.`, "penetration", 1, true, 0);
              }
              if (SI.lifetimeAttribute) {
                KM(`${SI.bulletName} Lifetime`, `The lifetime multiplier of the ${SI.bulletName.toLowerCase()}. Lifetime is also influenced by the ${SI.bulletName.toLowerCase()}'s penetration.`, "lifetime", 1, true, 0);
              }
              KM("Barrel Delay", "How long the barrel waits before it starts shooting. Influenced by reload.", "delay", 0, true, 0);
              break;
            case "gadget":
              var SE = KE[Aq.type];
              KH("Gadget Type", "The type of the gadget. Different gadgets function and look differently.", "type", 2, K3, false, 0);
              if (Aq.type == 2) {
                KH("Aura Type", "The type of the aura. Each aura functions differently. Cosmetic auras are only for decoration.", "subtype", 0, K4);
              }
              KJ("Size and Position");
              if (Aq.type == 2) {
                KM("Aura Radius", "The size of the aura.", "radius", 4, true, 0);
              }
              if ([0, 3].includes(Aq.type)) {
                KM("Base Rotation", `The initial rotation of the ${SE.name.toLowerCase()}.`, "baseRot", 0, true, 1);
              } else {
                KM("Rotation", `The ${SE.name.toLowerCase()}'s rotation`, "rot", 0, true, 1);
              }
              if (SE.defaultLength) {
                KM("Length", ["The length of the auto cannon's barrel."][Aq.type], "length", SE.defaultLength, true, 0);
              }
              if (SE.defaultWidth) {
                KM(["Width", "Size", "Size", "Size"][Aq.type], ["The width of the auto cannon. The width influences the size of the bullet.", "The size of the mounted drone spawner.", "The size of the aura's base.", "The size of the tank section."][Aq.type], "width", SE.defaultWidth, true, 0);
              }
              KM("Side Offset", `The ${SE.name.toLowerCase()}'s offset to the side.`, "offsetX", 0, true, 0);
              KM("Forward Offset", `The ${SE.name.toLowerCase()}'s offset forwards.`, "offsetY", 0, true, 0);
              if (Aq.type == 3) {
                KJ("Movement");
                KH("Rotation Type", "How the tank section rotates. When it's locked, it doesn't rotate at all, and when it's unlocked, it rotates with its base.", "rotationType", 0, KC);
                if (Aq.rotationType == 1) {
                  KJ("Auto Cannon");
                  KH("Idle Behavior", "What the tank section does when it doesn't have any targets. When set to \"Rotate\", the rotation speed is based on the tank section's idle rotation speed.", "idleBehavior", 0, K9);
                  if (Aq.idleBehavior == 0) {
                    KM("Idle Rotation Speed", "How fast the tank section rotates when it doesn't have any targets and its idle behavior is set to \"Rotate\".", "rotationSpeed", 1, true, 0);
                  }
                  KM("Max Rotation Spread", "The maximum distance that the tank section can rotate from its base rotation (in degrees). When it's past the maximum, it will rotate until it's back to the maximum. Set to 0 for no maximum.", "maxSpread", 0, true, 6);
                  if (Aq.maxSpread > 0) {
                    KH("Only Detect Within Max Spread", "Whether or not the tank section can only detect and remember targets within its max rotation spread.", "spreadDetection", 0, [{
                      value: 0,
                      name: "On"
                    }, {
                      value: 1,
                      name: "Off"
                    }]);
                  }
                  KM("Target Turn Speed", "How fast the tank section turns whenever it finds a target to shoot at. Between 0 and 1.", "turnSpeed", 1, true, 3);
                  KM("Main Barrel Speed", "Set this to the bullet speed of the tank section's main barrel for optimal movement prediction. This is only used for movement prediction.", "speed", 1, true, 0);
                  KM("Main Barrel Length", "Set this to the length of the tank section's main barrel for optimal movement prediction. This is only used for movement prediction.", "length", 1, true, 0);
                  KM("Target Detect Distance", "How far away something needs to be to be detected by the tank section.", "minDistance", 15, true, 0);
                  KM("Target Forget Distance", "How far away something needs to be to be forgetten by the tank section.", "maxDistance", 25, true, 0);
                }
                if (Aq.rotationType == 3) {
                  KH("Rotation Condition", "What causes the tank section to rotate.", "rotationCondition", 0, KV, false, 0);
                  KH("Rotation Disabled Behavior", "What the tank section does when its rotation condition is not met.", "rotationDisabledBehavior", 0, KI, false, 0);
                  KM("Max Rotation", "The maximum distance that the tank section can rotate from its base rotation (in degrees, on both sides). Set to 0 for no maximum.", "maxRotation", 0, true, 1);
                  KH("Maxed Rotation Behavior", "What the tank section does once it has reached its max rotation.", "maxRotationBehavior", 0, KL, false, 1);
                  KM("Maxed Rotation Smoothing", "How much the tank section smooths out its speed when its close to its min/max rotation. Set to 1 for no smoothing.", "maxRotationSmoothing", 1, true, 6);
                }
                if (Aq.rotationType == 2 || Aq.rotationType == 3) {
                  KM("Rotation Speed", "How fast the tank section rotates. Set to a negative number to rotate in the opposite direction.", "rotationSpeed", 1, true, 0);
                  KH("Is Anchored", "Whether or not the tank section rotates with its base.", "anchored", 0, ["On", "Off"], false, 0);
                }
                if (Aq.rotationType == 4) {
                  KM("Turn Speed", "How fast the tank section turns to point at the mouse.", "turnSpeed", 1, true, 3);
                  KM("Max Rotation Spread", "The maximum distance that the tank section can rotate from its base rotation (in degrees). When it's past the maximum, it will rotate until it's back to the maximum. Set to 0 for no maximum.", "maxSpread", 0, true, 6);
                  if (Aq.maxSpread > 0) {
                    KH("Only Detect Within Max Spread", "Whether or not the tank section will only try to point at the mouse if it's within its max rotation spread.", "spreadDetection", 0, [{
                      value: 0,
                      name: "On"
                    }, {
                      value: 1,
                      name: "Off"
                    }]);
                  }
                }
                KJ("Visual");
                KH("Override Color", "Overrides the color of the tank section.", "team", 3, KK, true);
                if (Aq.team != null) {
                  KH("Suppress Color Changes", "Whether or not the tank section changes color with the body. When on, the tank section won't change color when damaged or radiant. Does not work when the tank section's override color is set.", "suppressColor", 0, ["On", "Off"], false, 0);
                }
                KM("Sides", "The amount of sides the tank section has. Zero sides make a circle, negative sides make a star.", "sides", 0, true, 4);
                KJ("Outer Shell");
                KM("Outer Sides", "The amount of sides the tank section's outer shell has. Zero sides make a circle, negative sides make a star.", "outerSides", 0, true, 4);
                KM("Outer Size", "The size of the tank section's outer shell.", "outerSize", 0, true, 0);
              }
              KJ("Attributes");
              if (Aq.type == 3) {
                KZ("Tank Code", "Enter a tank code to import it. It can have barrels, gadgets, and layers, just like any other tank.", "enter a \"full tank\" code here", "tank", 1);
              }
              if (SE.barrelColor) {
                KH(`${Aq.type == 2 ? "Aura Base" : "Barrel"} Color`, `The color of the ${Aq.type == 2 ? "aura's base" : "barrel"}.`, "color", 3, Kk, true);
              }
              if (Aq.type != 3) {
                KH("Border", "Whether or not the gadget has a darker border around it.", "hideBorder", 0, [{
                  value: undefined,
                  name: "On"
                }, {
                  value: 1,
                  name: "Off"
                }], true);
              }
              if (SE.bulletStats) {
                KH(`Override ${SE.bulletName} Color`, `Overrides the color of the ${SE.bulletName.toLowerCase()}, no mattter your team.`, "team", 3, KK, true);
                if (SE.droneStats) {
                  KM(`${SE.bulletName} Minimum Distance`, `${SE.bulletName}s closer than this to their target will move away from it.`, "minDist", SE.minionStats ? 6 : 0, true, 0);
                  KM(`${SE.bulletName} Maximum Distance`, `${SE.bulletName}s farther away than this from their target will move closer to it.`, "maxDist", SE.minionStats ? 10 : 0, true, 0);
                }
                if (Aq.type == 0) {
                  KH("Idle Behavior", "What the Auto Cannon does when it doesn't have any targets. When set to \"Rotate\", the rotation speed is based on the auto cannon's idle rotation speed.", "idleBehavior", 0, K9);
                  if (Aq.idleBehavior == 0) {
                    KM("Idle Rotation Speed", "How fast the Auto Cannon rotates when it doesn't have any targets and its idle behavior is set to \"Rotate\".", "rotationSpeed", 1, true, 0);
                  }
                }
                KM("Reload", "How long the barrel waits in between shots. The larger the number, the larger time in between shots.", "reload", 1, true, 0);
                if (Aq.type == 0) {
                  KM("Recoil", `How much the barrel pushes you back when shooting. Recoil is also influenced by the ${SE.bulletName.toLowerCase()}'s size.`, "recoil", 0, true, 0);
                  KM("Spread", "How far (in degrees) the direction of shots are randomized.", "spread", 0, true, 0);
                  KM(`${SE.bulletName}. Size`, `The size multiplier of the ${SE.bulletName.toLowerCase()}. Size is also influenced by the barrel width.`, "size", 1, true, 0);
                  KM(`${SE.bulletName} Lifetime`, `The lifetime multiplier of the ${SE.bulletName.toLowerCase()}. Lifetime is also influenced by the ${SE.bulletName.toLowerCase()}'s penetration.`, "lifetime", 1, true, 0);
                }
                KM(`${SE.bulletName} Damage`, `The amount of damage dealt by the ${SE.bulletName.toLowerCase()}.`, "damage", 1, true, 0);
                KM(`${SE.bulletName} Speed`, `The movement speed of the ${SE.bulletName.toLowerCase()}.`, "speed", 1, true, 0);
                KM(`${SE.bulletName} Penetration`, `The penetration the ${SE.bulletName.toLowerCase()}. Higher penetration ${SE.bulletName.toLowerCase()}s last longer before despawning or dying.`, "penetration", 1, true, 0);
                if (Aq.type == 0) {
                  KM("Target Detect Distance", "How far away something needs to be to be detected by the auto cannon.", "minDistance", 15, true, 0);
                  KM("Target Forget Distance", "How far away something needs to be to be forgetten by the auto cannon.", "maxDistance", 25, true, 0);
                }
              } else if (Aq.type == 2) {
                KM("Aura Base Sides", "The amount of sides the aura's base has. Zero sides make a circle, negative sides make a star.", "backSides", 0, true, 4);
                KH("Override Aura Color", "Overrides the color of the aura.", "auraColor", 3, KK, true);
                KH("Particles", "Whether or not the aura emits particles.", "showParticles", 0, ["On", "Off"], false, 0);
                KH("Aura Rotation Type", "How the aura rotates. When it's locked, it doesn't rotate at all, and when it's unlocked, it rotates with its base.", "rotationType", 0, ["Unlocked", "Locked"]);
                KM("Aura Opacity", "The opacity of the aura, 0-1. 0 makes it invisible.", "alpha", 0.3, true, 3);
                KM("Deactivated Opacity Multiplier", "The opacity multiplier of the aura when it is deactivated, scaling with the aura's opacity attribute. 0 makes it invisible when deactivated.", "deactivatedApha", 0.3, true, 3);
                if (Aq.subtype != 2) {
                  KM(`${["Attack", "Heal", "Nothing", "Repel", "Attract"][Aq.subtype]} Interval`, `How often the aura will ${["attack", "heal", "what are you looking for here in the code?", "repel", "attract"][Aq.subtype]}.`, "reload", 0.25, true, 0);
                  KM(`${["Damage", "Healing", "Nothing", "Repulsion", "Attraction"][Aq.subtype]}`, `How much the aura will ${["attack", "heal", "get out", "repel", "attract"][Aq.subtype]}.`, "damage", 0.125, true, 0);
                  if ([3, 4].includes(Aq.subtype)) {
                    KH("Ignore Mass", `If the aura ignores the size of the objects it's ${{
                      3: "repelling",
                      4: "attracting"
                    }[Aq.subtype]}. When on, it will ${{
                      3: "repel",
                      4: "attract"
                    }[Aq.subtype]} all objects at the same speed, regardless of its size.`, "ignoreMass", 0, ["On", "Off"], false, 1);
                  }
                  KH("Affects Bullets", "If the aura affects bullets. Auras will never affect bullets while in a safe zone, regardless of this setting.", "affectBullets", 0, [{
                    name: "All Bullets",
                    value: 0
                  }, {
                    name: "Enemy Bullets",
                    value: 1
                  }, {
                    name: "Team Bullets",
                    value: 3
                  }, {
                    name: "Off",
                    value: 2
                  }], false, 1);
                }
                KH("Activation Trigger", "What causes the aura to become active.", "activationTrigger", 0, K8, false, 2);
                KM("Aura Sides", "The amount of sides the aura has. Zero sides make a circle, negative sides make a star.", "sides", 0, true, 4);
              }
              break;
            case "layer":
              KJ("Size and Position");
              KM("Rotation", "The layer's rotation.", "rot", 0, true, 1);
              KM("Side Offset", "The layer's offset to the side.", "offsetX", 0, true, 0);
              KM("Forward Offset", "The layer's offset to the side.", "offsetY", 0, true, 0);
              KM("Size", "The layer's size.", "size", 0.5, true, 0);
              KJ("Visual");
              KH("Border", "Whether or not the layer has a darker border around it.", "hideBorder", 0, [{
                value: undefined,
                name: "On"
              }, {
                value: 1,
                name: "Off"
              }], true);
              KH("Override Color", "Overrides the color of the layer.", "team", 3, KK, true);
              KM("Sides", "The amount of sides the layer has. Zero sides make a circle, negative sides make a star.", "sides", 0, true, 4);
              KJ("Outer Shell");
              KM("Outer Sides", "The amount of sides the layer's outer shell has. Zero sides make a circle, negative sides make a star.", "outerSides", 0, true, 4);
              KM("Outer Size", "The size of the layer's outer shell.", "outerSize", 0, true, 0);
          }
          AY.push({
            object: Aq,
            objectInfo: SL,
            name: AA,
            attributes: KD
          });
        }
        for (AO.s(); !(AN = AO.n()).done;) {
          var Aq;
          var AA;
          AW();
        }
      } catch (SL) {
        AO.e(SL);
      } finally {
        AO.f();
      }
      if (AY.length != 0) {
        var AS;
        var AU;
        var AP = [];
        for (var AR = 0, AQ = AY; AR < AQ.length; AR++) {
          var AB;
          var AG = AQ[AR];
          var AT = Eq(AG.attributes);
          try {
            function AX() {
              var SI;
              var SE = AB.value;
              var SK = true;
              var SH = AG.object[SE.id];
              var SZ = true;
              var SM = Eq(AY);
              try {
                for (SM.s(); !(SI = SM.n()).done;) {
                  var SJ = SI.value;
                  var SD = SJ.attributes.find(function (SN) {
                    return SN.id == SE.id;
                  });
                  if (!SD || SD.type != SE.type || SD.subtype != SE.subtype || !E0(SD.options, SE.options) || SD.deleteIfNaN != SE.deleteIfNaN || SD.isNumber != SE.isNumber) {
                    SK = false;
                    break;
                  }
                  if (SZ) {
                    if (!E0(SJ.object[SE.id], SH)) {
                      SZ = false;
                    }
                  }
                }
              } catch (SN) {
                SM.e(SN);
              } finally {
                SM.f();
              }
              if (SK && !AP.find(function (SY) {
                return SY.id == SE.id;
              })) {
                AP.push(SE);
                SE.sharedValue = SH;
                SE.isValueShared = SZ;
              }
            }
            for (AT.s(); !(AB = AT.n()).done;) {
              AX();
            }
          } catch (SI) {
            AT.e(SI);
          } finally {
            AT.f();
          }
          if (AS == null) {
            AS = AG.name;
          } else if (AS != AG.name) {
            AS = "";
          }
          if (AU == null) {
            AU = AG.objectInfo.type;
          } else if (AU != AG.objectInfo.type) {
            AU = "";
          }
        }
        var AF = {
          barrel: "Barrel",
          layer: "Layer",
          gadget: "Gadget"
        }[AU] || "Object";
        if (AS == "") {
          AS = `${AY.length} ${AF}s`;
        } else if (AY.length > 1) {
          AS = `${AY.length} ${AS}s`;
        }
        nB(o3);
        var Az = mP(o3, "div");
        Az.id = "tank-editor-title";
        Az.innerHTML = AS;
        function Aj(SE, SK, SH = false) {
          for (var SZ = 0, SM = AY; SZ < SM.length; SZ++) {
            var SJ = SM[SZ];
            var SD = SJ.object;
            if (SD[SE] == null || !SH) {
              SD[SE] = nC(SK);
              if (SD[SE] == null) {
                delete SD[SE];
              }
            }
          }
        }
        function S0() {
          var SE = S2[S1];
          switch (SE.type) {
            case -1:
              (S5 = mP(o3, "div")).id = "tank-editor-subtitle";
              S5.innerHTML = SE.name;
              S3 = S5;
              break;
            case 0:
              (S4 = mP(o3, "div")).id = "tank-editor-text";
              S4.innerHTML = SE.name + "&emsp;";
              S3 = S4;
              var SK;
              var SH = SE.isValueShared && nW(SE.sharedValue);
              if (SH) {
                (SK = mP(S4, "input")).autocomplete = "off";
                SK.classList.add("tank-editor-input");
                SK.placeholder = "#000000";
                SK.style.marginRight = "1vmin";
                SK.value = SE.sharedValue;
              }
              (S5 = mP(S4, "select")).classList.add("tank-editor-select");
              if (SE.subtype === 3) {
                var SZ = mP(S5, "option");
                SZ.value = "custom";
                SZ.innerHTML = "Custom...";
              }
              for (var SM = 0; SM < SE.options.length; SM++) {
                var SJ = mP(S5, "option");
                if (SE.options[SM].hasOwnProperty("value")) {
                  SJ.value = SE.options[SM].value;
                  SJ.innerHTML = SE.options[SM].name;
                } else {
                  SJ.value = SM;
                  SJ.innerHTML = SE.options[SM];
                }
              }
              if (SE.isValueShared) {
                S5.value = SH ? "custom" : KS(SE.sharedValue, SE.placeholder);
              } else {
                S5.value = null;
              }
              if (SK) {
                SK.onchange = function (SN) {
                  if (!nW(SN.target.value)) {
                    if (nW("#" + SN.target.value)) {
                      SN.target.value = "#" + SN.target.value;
                    } else {
                      SN.target.value = SE.sharedValue;
                    }
                  }
                  Aj(SE.id, SN.target.value);
                  KX();
                };
              }
              S5.onchange = function (SN) {
                if (SN.target.value == "custom") {
                  if (!SE.isValueShared || !nW(SE.sharedValue)) {
                    Aj(SE.id, "#ffffff");
                  }
                } else if (SE.deleteIfNaN) {
                  var SY = +SN.target.value;
                  if (isNaN(SY)) {
                    SY = undefined;
                  }
                  Aj(SE.id, SY);
                } else {
                  Aj(SE.id, KG(SN.target.value, 0));
                }
                switch (SE.subtype) {
                  case 1:
                    if (+SN.target.value != 9) {
                      ["colorType", "radiant", "minSize", "maxSize"].forEach(function (SO) {
                        Aj(SO, undefined);
                      });
                    }
                    switch (+SN.target.value) {
                      case 7:
                        Aj("minion", {
                          gadgets: [],
                          layers: [],
                          sides: 0,
                          outerSides: 0,
                          outerSize: 0,
                          maxBodyDrones: 3,
                          barrels: [{
                            type: 0,
                            rot: nV(-145),
                            offset: 0,
                            width: 0.5,
                            length: 0.8,
                            damage: 0.5,
                            reload: 0.5,
                            distance: 0,
                            penetration: 0.5,
                            delay: 0
                          }, {
                            type: 0,
                            rot: nV(145),
                            offset: 0,
                            width: 0.5,
                            length: 0.8,
                            damage: 0.5,
                            reload: 0.5,
                            distance: 0,
                            penetration: 0.5,
                            delay: 0
                          }],
                          maxWeaponDrones: 3
                        }, true);
                        ["minDist", "maxDist"].forEach(function (SO) {
                          Aj(SO, undefined);
                        });
                        break;
                      case 8:
                        Aj("minion", {
                          gadgets: [],
                          layers: [],
                          sides: 4,
                          outerSides: 0,
                          outerSize: 0,
                          maxBodyDrones: 3,
                          barrels: [{
                            type: 0,
                            rot: nV(-135),
                            offset: 0,
                            width: 0.4,
                            length: 0.6,
                            damage: 0.5,
                            reload: 1,
                            distance: 0,
                            penetration: 0.5,
                            delay: 0
                          }, {
                            type: 0,
                            rot: nV(135),
                            offset: 0,
                            width: 0.4,
                            length: 0.6,
                            damage: 0.5,
                            reload: 1,
                            distance: 0,
                            penetration: 0.5,
                            delay: 0
                          }, {
                            type: 0,
                            rot: nV(-45),
                            offset: 0,
                            width: 0.4,
                            length: 0.6,
                            damage: 0.5,
                            reload: 1,
                            distance: 0,
                            penetration: 0.5,
                            delay: 0
                          }, {
                            type: 0,
                            rot: nV(45),
                            offset: 0,
                            width: 0.4,
                            length: 0.6,
                            damage: 0.5,
                            reload: 1,
                            distance: 0,
                            penetration: 0.5,
                            delay: 0
                          }],
                          maxWeaponDrones: 3
                        }, true);
                        ["minDist", "maxDist"].forEach(function (SO) {
                          Aj(SO, undefined);
                        });
                        break;
                      case 3:
                        Aj("minion", {
                          sides: 0,
                          barrels: [{
                            type: 0,
                            rot: 0,
                            offset: 0,
                            width: 0.5,
                            length: 1,
                            damage: 0.5,
                            reload: 1,
                            delay: 0
                          }],
                          gadgets: []
                        }, true);
                        ["minDist", "maxDist"].forEach(function (SO) {
                          Aj(SO, undefined);
                        });
                        break;
                      case 1:
                        ["minion"].forEach(function (SO) {
                          Aj(SO, undefined);
                        });
                        break;
                      default:
                        ["minion", "minDist", "maxDist"].forEach(function (SO) {
                          Aj(SO, undefined);
                        });
                        break;
                      case 9:
                        Aj("colorType", 0);
                        Aj("team", 1);
                        Aj("minSize", 3);
                        Aj("maxSize", 15);
                        Aj("radiant", 0);
                        Aj("team", undefined);
                    }
                    break;
                  case 2:
                    ["alpha", "length", "speed", "penetration", "sides", "backSides", "subtype", "radius", "rotationType", "maxSpread", "spreadDetection", "suppressColor", "turnSpeed", "showParticles", "ignoreMass", "affectBullets", "activationTrigger", "baseRot", "idleBehavior", "rotationSpeed", "rotationCondition", "maxRotation", "maxDistance", "minDistance"].forEach(function (SO) {
                      Aj(SO, undefined);
                    });
                    switch (Aq.type) {
                      case 0:
                        Aj("rot", undefined);
                        Aj("baseRot", 0);
                        Aj("idleBehavior", 0);
                        Aj("rotationSpeed", 1);
                        Aj("length", 1);
                        Aj("minDistance", 15);
                        Aj("maxDistance", 25);
                        Aj("speed", 1);
                        Aj("penetration", 1);
                        break;
                      case 1:
                        Aj("rot", 0);
                        Aj("speed", 1);
                        Aj("penetration", 1);
                        break;
                      case 2:
                        Aj("rot", 0);
                        Aj("sides", 0);
                        Aj("backSides", 0);
                        Aj("subtype", 0);
                        Aj("radius", 4);
                        Aj("alpha", 0.3);
                        Aj("rotationType", 1);
                        Aj("width", 0.6);
                        Aj("damage", 0.1);
                        Aj("reload", 0.25);
                        Aj("showParticles", 0);
                        Aj("affectBullets", 2);
                        Aj("activationTrigger", 2);
                        Aj("ignoreMass", 1);
                        break;
                      case 3:
                        Aj("rot", undefined);
                        Aj("damage", undefined);
                        Aj("reload", undefined);
                        Aj("hideBorder", undefined);
                        Aj("tank", {
                          barrels: [{
                            type: 0,
                            rot: 0,
                            offset: 0,
                            width: 0.5,
                            length: 1,
                            damage: 1,
                            reload: 1,
                            delay: 0,
                            speed: 1,
                            distance: 0,
                            penetration: 1
                          }],
                          gadgets: [],
                          layers: []
                        });
                        Aj("rotationType", 0);
                        Aj("maxSpread", 0);
                        Aj("spreadDetection", 0);
                        Aj("suppressColor", 0);
                        Aj("turnSpeed", 1);
                        Aj("baseRot", 0);
                        Aj("sides", 0);
                        Aj("outerSides", 0);
                        Aj("outerSize", 0);
                        Aj("idleBehavior", 0);
                        Aj("rotationSpeed", 1);
                        Aj("anchored", 0);
                        Aj("speed", 1);
                        Aj("length", 1);
                        Aj("minDistance", 15);
                        Aj("maxDistance", 25);
                    }
                }
                KX();
              };
              break;
            case 1:
              (S4 = mP(o3, "div")).id = "tank-editor-text";
              S4.innerHTML = SE.name;
              S3 = S4;
              (S5 = mP(o3, "textarea")).autocomplete = "off";
              S5.classList.add("tank-editor-input-large");
              for (var SD = 0; SD < 15; SD++) {
                mP(o3, "br");
              }
              S5.placeholder = SE.placeholder;
              S5.value = SE.isValueShared ? SE.sharedValue : "-";
              switch (SE.subtype) {
                case 0:
                  if (SE.isValueShared) {
                    S5.value = mY({
                      gadgets: mq(SE.sharedValue.gadgets || []),
                      layers: mO(SE.sharedValue.layers || []),
                      sides: nM(SE.sharedValue.sides || 0),
                      outerSides: nM(SE.sharedValue.outerSides || 0),
                      outerSize: nM(SE.sharedValue.outerSize || 0),
                      maxBodyDrones: SE.sharedValue.maxBodyDrones,
                      barrels: mW(SE.sharedValue.barrels || []),
                      maxWeaponDrones: SE.sharedValue.maxWeaponDrones
                    });
                  }
                  break;
                case 1:
                  if (SE.isValueShared) {
                    S5.value = mY({
                      gadgets: mq(SE.sharedValue.gadgets || []),
                      layers: mO(SE.sharedValue.layers || []),
                      barrels: mW(SE.sharedValue.barrels || [])
                    });
                  }
              }
              S5.lastValue = S5.value;
              S5.onchange = function (SN) {
                switch (SE.subtype) {
                  case 0:
                    try {
                      if ((SY = mN(SN.target.value)).error) {
                        lZ("Tank code invalid!", SY.error);
                        SN.target.value = SN.target.lastValue;
                        return;
                      }
                    } catch (SO) {
                      lZ("Tank code invalid!", SO);
                      SN.target.value = SN.target.lastValue;
                      return;
                    }
                    SN.target.lastValue = SN.target.value;
                    Aj(SE.id, {
                      gadgets: mU(SY.gadgets || []),
                      layers: mA(SY.layers || []),
                      outerSize: SY.outerSize || 0,
                      sides: SY.sides || 0,
                      outerSides: SY.outerSides || 0,
                      maxBodyDrones: KG(SY.maxBodyDrones, 3),
                      barrels: mS(SY.barrels || []),
                      maxWeaponDrones: KG(SY.maxWeaponDrones, 3)
                    });
                    if (SY.healthMultiplier != null) {
                      Aj("penetration", SY.healthMultiplier);
                    }
                    if (SY.bodyDamageMultiplier != null) {
                      Aj("damage", SY.bodyDamageMultiplier);
                    }
                    if (SY.speedMultiplier != null) {
                      Aj("speed", SY.speedMultiplier);
                    }
                    break;
                  case 1:
                    var SY;
                    try {
                      if ((SY = mN(SN.target.value)).error) {
                        lZ("Tank code invalid!", SY.error);
                        SN.target.value = SN.target.lastValue;
                        return;
                      }
                    } catch (SW) {
                      lZ("Tank code invalid!", SW);
                      SN.target.value = SN.target.lastValue;
                      return;
                    }
                    SN.target.lastValue = SN.target.value;
                    Aj(SE.id, {
                      gadgets: mU(SY.gadgets || []),
                      layers: mA(SY.layers || []),
                      barrels: mS(SY.barrels || [])
                    });
                    if (SY.sides != null) {
                      Aj("sides", SY.sides);
                    }
                    if (SY.outerSides != null) {
                      Aj("outerSides", SY.outerSides);
                    }
                    if (SY.outerSize != null) {
                      Aj("outerSize", SY.outerSize);
                    }
                }
                KX();
              };
              break;
            case 2:
              (S4 = mP(o3, "div")).id = "tank-editor-text";
              S4.innerHTML = SE.name + "&emsp;";
              S3 = S4;
              (S5 = mP(S4, "input")).autocomplete = "off";
              S5.classList.add("tank-editor-input");
              S5.placeholder = SE.placeholder;
              if (SE.subtype === 1) {
                if (SE.isValueShared) {
                  S5.value = nH(nL(KG(SE.sharedValue, SE.placeholder)), 5);
                } else {
                  S5.value = "-";
                }
              } else if (SE.isValueShared) {
                if (SE.isNumber) {
                  S5.value = KG(SE.sharedValue, SE.placeholder);
                } else {
                  S5.value = KS(SE.sharedValue, SE.placeholder);
                }
              } else {
                S5.value = "-";
              }
              S5.onchange = function (SN) {
                if (SE.isNumber) {
                  var SY = KG(KB(SN.target.value), SE.placeholder);
                  Aj(SE.id, SY);
                  SE.sharedValue = SY;
                  SE.isValueShared = true;
                } else {
                  var SO = KS(SN.target.value, SE.placeholder);
                  Aj(SE.id, SO);
                  SE.sharedValue = SO;
                  SE.isValueShared = true;
                }
                switch (SE.subtype) {
                  case 1:
                    Aj(SE.id, nV(SE.sharedValue));
                    break;
                  case 2:
                    Aj(SE.id, Math.min(Math.max(3, SE.sharedValue), 1000));
                    break;
                  case 3:
                    Aj(SE.id, Math.max(0, Math.min(1, SE.sharedValue)));
                    break;
                  case 4:
                    Aj(SE.id, nM(SE.sharedValue));
                    break;
                  case 5:
                    Aj(SE.id, Math.min(Math.max(0, SE.sharedValue), 20));
                    break;
                  case 6:
                    Aj(SE.id, Math.max(0, SE.sharedValue));
                }
                KX();
              };
          }
          if (SE.type != -1) {
            (function (SN, SY) {
              if (SY) {
                SN.setAttribute("data-tooltip", SY);
              } else {
                SN.removeAttribute("data-tooltip");
              }
            })(S3, SE.description);
          }
        }
        for (var S1 = 0, S2 = AP; S1 < S2.length; S1++) {
          var S3;
          var S4;
          var S5;
          S0();
        }
        var S6 = mP(o3, "div");
        var S7 = mP(o3, "div");
        S6.style.textAlign = "right";
        S7.style.textAlign = "right";
        var S8 = mP(S6, "button");
        S8.innerHTML = "Move Forward";
        S8.classList.add("tank-editor-button");
        var S9 = mP(S6, "button");
        S9.innerHTML = "Move Backward";
        S9.classList.add("tank-editor-button");
        var SC = mP(S7, "button");
        SC.innerHTML = `Delete ${AS}`;
        SC.classList.add("tank-editor-button");
        var SV = mP(S7, "button");
        SV.innerHTML = `Duplicate ${AS}`;
        SV.classList.add("tank-editor-button");
        S8.onclick = function () {
          KO();
        };
        S9.onclick = function () {
          KW();
        };
        SC.onclick = function () {
          Kq();
        };
        SV.onclick = function () {
          KA();
        };
      }
    }
    function KY(AN) {
      if (AN.stack.length == 0) {
        return {
          barrel: currentWeapon.barrels,
          gadget: currentBody.gadgets,
          layer: currentBody.layers
        }[AN.type];
      } else {
        return function AY(AO, AW, Aq) {
          if (AW.length == 1) {
            var AA = AO[AW[0]];
            if (AA && AA.type == 3 && AA.tank) {
              return {
                barrel: AA.tank.barrels,
                gadget: AA.tank.gadgets,
                layer: AA.tank.layers
              }[Aq.type];
            } else {
              return undefined;
            }
          }
          var AS = AO[AW.shift()];
          if (AS && AS.type == 3 && AS.tank) {
            return AY(AS.tank.gadgets, AW, Aq);
          } else {
            return undefined;
          }
        }(currentBody.gadgets, EA(AN.stack), AN);
      }
    }
    function KO() {
      var AN;
      var AY = oz.sort(function (AR, AQ) {
        return AQ.index - AR.index;
      }).sort(function (AR, AQ) {
        return AQ.stack.length - AR.stack.length;
      });
      var AO = Eq(AY);
      try {
        for (AO.s(); !(AN = AO.n()).done;) {
          var AW = AN.value;
          var Aq = KY(AW);
          if (AW.index < Aq.length - 1) {
            var AA = Aq[AW.index + 1];
            Aq[AW.index + 1] = Aq[AW.index];
            Aq[AW.index] = AA;
            var AS;
            var AU = Eq(AY);
            try {
              for (AU.s(); !(AS = AU.n()).done;) {
                var AP = AS.value;
                if (AW.type == AP.type && AP.index == AW.index + 1 && nj(AP.stack, AW.stack)) {
                  AP.index--;
                }
              }
            } catch (AR) {
              AU.e(AR);
            } finally {
              AU.f();
            }
            AW.index++;
          }
        }
      } catch (AQ) {
        AO.e(AQ);
      } finally {
        AO.f();
      }
      KX();
      K0();
    }
    function KW() {
      var AN;
      var AY = oz.sort(function (AR, AQ) {
        return AR.index - AQ.index;
      }).sort(function (AR, AQ) {
        return AQ.stack.length - AR.stack.length;
      });
      var AO = Eq(AY);
      try {
        for (AO.s(); !(AN = AO.n()).done;) {
          var AW = AN.value;
          var Aq = KY(AW);
          if (AW.index > 0) {
            var AA = Aq[AW.index - 1];
            Aq[AW.index - 1] = Aq[AW.index];
            Aq[AW.index] = AA;
            var AS;
            var AU = Eq(AY);
            try {
              for (AU.s(); !(AS = AU.n()).done;) {
                var AP = AS.value;
                if (AW.type == AP.type && AP.index == AW.index - 1 && nj(AP.stack, AW.stack)) {
                  AP.index++;
                }
              }
            } catch (AR) {
              AU.e(AR);
            } finally {
              AU.f();
            }
            AW.index--;
          }
        }
      } catch (AQ) {
        AO.e(AQ);
      } finally {
        AO.f();
      }
      KX();
      K0();
    }
    function Kq() {
      var AN;
      var AY = Eq(oz.sort(function (AW, Aq) {
        return Aq.index - AW.index;
      }).sort(function (AW, Aq) {
        return Aq.stack.length - AW.stack.length;
      }));
      try {
        for (AY.s(); !(AN = AY.n()).done;) {
          var AO = AN.value;
          KY(AO).splice(AO.index, 1);
        }
      } catch (AW) {
        AY.e(AW);
      } finally {
        AY.f();
      }
      KX(false);
      K1();
    }
    function KA() {
      for (var AN = oz.sort(function (AA, AS) {
          return AA.index - AS.index;
        }).sort(function (AA, AS) {
          return AS.stack.length - AA.stack.length;
        }), AY = 0; AY < AN.length; AY++) {
        var AO = AN[AY];
        var AW = KY(AO);
        AW.splice(AO.index, 0, nC(AW[AO.index]));
        for (var Aq = AY + 1; Aq < AN.length; Aq++) {
          if (AN[Aq].type == AO.type && AN[Aq].index > AO.index && nj(AN[Aq].stack, AO.stack)) {
            AN[Aq].index++;
          }
        }
      }
      KX();
      K0();
    }
    function KS(AN, AY) {
      if (AN == null || AN === "") {
        return AY;
      } else {
        return AN;
      }
    }
    var KU = ["(", ")", /^(\d*\.?\d+|\d+)\e?[+-]?\d*$/, "*", "/", "+", "-", ",", "sin", "cos", "degToRad", "radToDeg", "rand", "rnd", "flr", "ceil", "Infinity"];
    var KP = [["radtodeg", "radToDeg"], ["rad2deg", "radToDeg"], ["radianstodegrees", "radToDeg"], ["degtorad", "degToRad"], ["deg2rad", "degToRad"], ["degreestoradians", "degToRad"], ["infinity", "inf"], ["random", "rand"], ["round", "rnd"], ["floor", "flr"], ["ceiling", "ceil"], ["^", "**"]];
    var KR = [["inf", "Infinity"]];
    function KQ(AN) {
      try {
        AN = AN.replace(RegExp("([,()/*+-])", "g"), " $1 ").toLowerCase();
        for (var AY = 0; AY < KP.length; AY++) {
          AN = AN.replaceAll(KP[AY][0], KP[AY][1]);
        }
        for (AY = 0; AY < KR.length; AY++) {
          AN = AN.replaceAll(KR[AY][0], KR[AY][1]);
        }
        return AN.split(" ").filter(function (AO) {
          return AO;
        }).filter(function (AO) {
          AW = AO;
          return !KU.some(function (Aq) {
            if (Aq instanceof RegExp) {
              return Aq.test(AW);
            } else {
              return Aq == AW;
            }
          });
          var AW;
        }).length == 0;
      } catch (AO) {
        return false;
      }
    }
    function KB(AN) {
      if (!KQ(AN)) {
        return null;
      }
      try {
        AN = AN.toLowerCase();
        for (var AY = 0; AY < KP.length; AY++) {
          AN = AN.replaceAll(KP[AY][0], KP[AY][1]);
        }
        for (AY = 0; AY < KR.length; AY++) {
          AN = AN.replaceAll(KR[AY][0], KR[AY][1]);
        }
        return window.eval(AN);
      } catch (AO) {
        return null;
      }
    }
    function KG(AN, AY) {
      if (Number.isNaN(+AN)) {
        return AY;
      } else {
        return +AN;
      }
    }
    function KT(AN, AY) {
      if (AN == null) {
        return AY;
      } else {
        return AN;
      }
    }
    function KX() {
      var AN;
      var AY = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      var AO = false;
      var AW = false;
      var Aq = Eq(oz);
      try {
        for (Aq.s(); !(AN = Aq.n()).done;) {
          var AA = AN.value;
          if (AA.type == "barrel" && AA.stack.length == 0) {
            AO = true;
          } else {
            AW = true;
          }
          if (AO && AW) {
            break;
          }
        }
      } catch (AS) {
        Aq.e(AS);
      } finally {
        Aq.f();
      }
      if (AO) {
        W6();
        weaponUpdate(false, AY);
      }
      if (AW) {
        W5();
        bodyUpdate(false, AY);
      }
      if (AO || AW) {
        mC();
      }
    }
    window.sin = function (AN) {
      return Math.sin(AN);
    };
    window.cos = function (AN) {
      return Math.cos(AN);
    };
    window.radToDeg = function (AN) {
      return nL(AN);
    };
    window.degToRad = function (AN) {
      return nV(AN);
    };
    window.rand = function (AN, AY) {
      if (AN == null && AY == null) {
        return Math.random();
      } else if (AY == null) {
        return Math.random() * AN;
      } else {
        return Math.random() * (AY - AN) + AN;
      }
    };
    window.rnd = function (AN, AY = 1) {
      return Math.round(AN / AY) * AY;
    };
    window.flr = function (AN) {
      return Math.floor(AN);
    };
    window.ceil = function (AN) {
      return Math.ceil(AN);
    };
    var KF = [];
    var Kz = [];
    var Kj = [];
    function m0(AN) {
      return K2.find(function (AO) {
        return AO.value == AN.type;
      })?.name || "Invalid barrel (wrong type?)";
    }
    function m1(AN) {
      if (AN.type == 2) {
        var AY = K4.find(function (AW) {
          return AW.value == AN.subtype;
        });
        return ((AY == null ? undefined : AY.name) || "Invalid (wrong subtype?)") + " Aura";
      }
      return K3.find(function (AW) {
        return AW.value == AN.type;
      })?.name || "Invalid gadget (wrong type?)";
    }
    function m2(AN) {
      return `${Math.abs(AN.sides)} ${AN.sides < 0 ? "point star" : "sided"} layer`;
    }
    var m3 = {
      type: 0,
      rot: 0,
      offset: 0,
      width: 0.5,
      length: 1,
      damage: 1,
      reload: 1,
      delay: 0,
      speed: 1,
      distance: 0,
      penetration: 1
    };
    var m4 = {
      type: 0,
      offsetX: 0,
      offsetY: 0,
      length: 0.5,
      width: 0.25,
      reload: 1,
      damage: 0.5,
      speed: 1,
      baseRot: 0,
      idleBehavior: 0,
      rotationSpeed: 1,
      penetration: 1,
      minDistance: 15,
      maxDistance: 25
    };
    var m5 = {
      rot: 0,
      size: 0.5,
      sides: 0,
      outerSides: 0,
      outerSize: 0,
      offsetX: 0,
      offsetY: 0
    };
    function weaponUpdate() {
      var AN = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      var AY = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (AN) {
        mC();
      }
      EX.innerHTML = `Barrels (${currentWeapon.barrels.length})`;
      nB(Ej);
      KF = [];
      function AO(AA) {
        var AS = currentWeapon.barrels[AA];
        var AU = mP(Ej, "button", "tank-editor-collapsible-element");
        AU.innerText = m0(AS);
        AU.onclick = function (AP) {
          var AR = EA(oz).reverse().find(function (AT) {
            return AT.type == "barrel" && AT.stack.length == 0;
          });
          if (AR && AR.index != AA && AP.shiftKey) {
            var AQ;
            var AB = Eq(nA(AR.index, AA));
            try {
              function AG() {
                var AT = AQ.value;
                if (!oz.some(function (AX) {
                  return AX.type == "barrel" && AX.index == AT;
                })) {
                  oz.push({
                    type: "barrel",
                    index: AT,
                    stack: []
                  });
                }
              }
              for (AB.s(); !(AQ = AB.n()).done;) {
                AG();
              }
            } catch (AT) {
              AB.e(AT);
            } finally {
              AB.f();
            }
            K0();
          } else {
            K0("barrel", AA, AP.ctrlKey || AP.metaKey || AP.shiftKey);
          }
        };
        KF.push({
          button: AU
        });
      }
      for (var AW = 0; AW < currentWeapon.barrels.length; AW++) {
        AO(AW);
      }
      var Aq = mP(Ej, "button", "tank-editor-collapsible-element");
      Aq.innerHTML = "+";
      Aq.onclick = function () {
        currentWeapon.barrels.push(nC(m3));
        W6();
        weaponUpdate();
      };
      o9.value = currentWeapon.cameraSizeMultiplier;
      oV.value = currentWeapon.maxDrones;
      oJ.value = currentWeapon.name;
      if (AY) {
        K0();
      }
    }
    window.weaponUpdate = weaponUpdate;
    var m7 = {};
    function bodyUpdate() {
      var AN;
      var AY = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      var AO = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (AY) {
        mC();
      }
      EF.innerHTML = `Gadgets (${currentBody.gadgets.length})`;
      nB(o0);
      Kz = [];
      var AW = function AP(AR, AQ, AB, AG, AT = 1) {
        if (AQ.type == 3 && AQ.tank) {
          var AX;
          var AF = {};
          var Az = "b" + AG.join("");
          var Aj = mP(AR, "button", ["small", "tank-editor-collapsible"]);
          Aj.innerText = `Barrels (${AQ.tank.barrels.length})`;
          Aj.style.marginLeft = `${AT * 3 - 1}vmin`;
          if (!m7[Az]) {
            Aj.classList.add("active");
          }
          var S0 = mP(AR, "div", "tank-editor-collapsible-content");
          S0.style.display = m7[Az] ? "none" : "flex";
          Aj.onclick = function () {
            Aj.classList.toggle("active");
            m7[Az] = !m7[Az];
            if (S0.style.display === "flex") {
              S0.style.display = "none";
            } else {
              S0.style.display = "flex";
            }
          };
          AF.barrels = [];
          function S1(SI) {
            var SE = AQ.tank.barrels[SI];
            var SK = mP(S0, "button", ["small", "tank-editor-collapsible-element"]);
            SK.style.marginLeft = `${AT * 3}vmin`;
            SK.innerText = m0(SE);
            AF.barrels.push({
              button: SK
            });
            SK.onclick = function (SH) {
              var SZ = EA(oz).reverse().find(function (SN) {
                return SN.type == "barrel" && nj(SN.stack, AG);
              });
              if (SZ && SZ.index != SI && SH.shiftKey) {
                var SM;
                var SJ = Eq(nA(SZ.index, SI));
                try {
                  function SD() {
                    var SN = SM.value;
                    if (!oz.some(function (SY) {
                      return SY.type == "barrel" && SY.index == SN;
                    })) {
                      oz.push({
                        type: "barrel",
                        index: SN,
                        stack: AG
                      });
                    }
                  }
                  for (SJ.s(); !(SM = SJ.n()).done;) {
                    SD();
                  }
                } catch (SN) {
                  SJ.e(SN);
                } finally {
                  SJ.f();
                }
                K0();
              } else {
                K0("barrel", SI, SH.ctrlKey || SH.metaKey || SH.shiftKey, AG);
              }
            };
          }
          for (var S2 = 0; S2 < AQ.tank.barrels.length; S2++) {
            S1(S2);
          }
          (AX = mP(S0, "button", ["small", "tank-editor-collapsible-element"])).innerHTML = "+";
          AX.style.marginLeft = `${AT * 3}vmin`;
          AX.onclick = function () {
            oj(AB).tank.barrels.push(nC(m3));
            W5();
            bodyUpdate();
          };
          var S3 = "g" + AG.join("");
          var S4 = mP(AR, "button", ["small", "tank-editor-collapsible"]);
          S4.innerText = `Gadgets (${AQ.tank.gadgets.length})`;
          S4.style.marginLeft = `${AT * 3 - 1}vmin`;
          if (!m7[S3]) {
            S4.classList.add("active");
          }
          var S5 = mP(AR, "div", "tank-editor-collapsible-content");
          S5.style.display = m7[S3] ? "none" : "flex";
          S4.onclick = function () {
            S4.classList.toggle("active");
            m7[S3] = !m7[S3];
            if (S5.style.display === "flex") {
              S5.style.display = "none";
            } else {
              S5.style.display = "flex";
            }
          };
          AF.gadgets = [];
          function S6(SI) {
            var SE = AQ.tank.gadgets[SI];
            var SK = mP(S5, "button", ["small", "tank-editor-collapsible-element"]);
            SK.style.marginLeft = `${AT * 3}vmin`;
            SK.innerText = m1(SE);
            AF.gadgets.push({
              button: SK,
              tank: AP(S5, SE, {
                index: SI,
                type: "gadget",
                stack: AG
              }, AG.concat([SI]), AT + 1)
            });
            SK.onclick = function (SH) {
              var SZ = EA(oz).reverse().find(function (SN) {
                return SN.type == "gadget" && nj(SN.stack, AG);
              });
              if (SZ && SZ.index != SI && SH.shiftKey) {
                var SM;
                var SJ = Eq(nA(SZ.index, SI));
                try {
                  function SD() {
                    var SN = SM.value;
                    if (!oz.some(function (SY) {
                      return SY.type == "gadget" && SY.index == SN;
                    })) {
                      oz.push({
                        type: "gadget",
                        index: SN,
                        stack: AG
                      });
                    }
                  }
                  for (SJ.s(); !(SM = SJ.n()).done;) {
                    SD();
                  }
                } catch (SN) {
                  SJ.e(SN);
                } finally {
                  SJ.f();
                }
                K0();
              } else {
                K0("gadget", SI, SH.ctrlKey || SH.metaKey || SH.shiftKey, AG);
              }
            };
          }
          for (var S7 = 0; S7 < AQ.tank.gadgets.length; S7++) {
            S6(S7);
          }
          (AX = mP(S5, "button", ["small", "tank-editor-collapsible-element"])).innerHTML = "+";
          AX.style.marginLeft = `${AT * 3}vmin`;
          AX.onclick = function () {
            oj(AB).tank.gadgets.push(nC(m4));
            W5();
            bodyUpdate();
          };
          var S8 = "l" + AG.join("");
          var S9 = mP(AR, "button", ["small", "tank-editor-collapsible"]);
          S9.innerText = `Layers (${AQ.tank.layers.length})`;
          S9.style.marginLeft = `${AT * 3 - 1}vmin`;
          if (!m7[S8]) {
            S9.classList.add("active");
          }
          var SC = mP(AR, "div", "tank-editor-collapsible-content");
          SC.style.display = m7[S8] ? "none" : "flex";
          S9.onclick = function () {
            S9.classList.toggle("active");
            m7[S8] = !m7[S8];
            if (SC.style.display === "flex") {
              SC.style.display = "none";
            } else {
              SC.style.display = "flex";
            }
          };
          AF.layers = [];
          function SV(SI) {
            var SE = AQ.tank.layers[SI];
            var SK = mP(SC, "button", ["small", "tank-editor-collapsible-element"]);
            SK.style.marginLeft = `${AT * 3}vmin`;
            SK.innerText = m2(SE);
            AF.layers.push({
              button: SK
            });
            SK.onclick = function (SH) {
              var SZ = EA(oz).reverse().find(function (SN) {
                return SN.type == "layer" && nj(SN.stack, AG);
              });
              if (SZ && SZ.index != SI && SH.shiftKey) {
                var SM;
                var SJ = Eq(nA(SZ.index, SI));
                try {
                  function SD() {
                    var SN = SM.value;
                    if (!oz.some(function (SY) {
                      return SY.type == "layer" && SY.index == SN;
                    })) {
                      oz.push({
                        type: "layer",
                        index: SN,
                        stack: AG
                      });
                    }
                  }
                  for (SJ.s(); !(SM = SJ.n()).done;) {
                    SD();
                  }
                } catch (SN) {
                  SJ.e(SN);
                } finally {
                  SJ.f();
                }
                K0();
              } else {
                K0("layer", SI, SH.ctrlKey || SH.metaKey || SH.shiftKey, AG);
              }
            };
          }
          for (var SL = 0; SL < AQ.tank.layers.length; SL++) {
            SV(SL);
          }
          (AX = mP(SC, "button", ["small", "tank-editor-collapsible-element"])).innerHTML = "+";
          AX.style.marginLeft = `${AT * 3}vmin`;
          AX.onclick = function () {
            oj(AB).tank.layers.push(nC(m5));
            W5();
            bodyUpdate();
          };
          return AF;
        }
      };
      function Aq(AR) {
        var AQ = currentBody.gadgets[AR];
        var AB = mP(o0, "button", "tank-editor-collapsible-element");
        AB.innerText = m1(AQ);
        AB.onclick = function (AG) {
          var AT = EA(oz).reverse().find(function (Aj) {
            return Aj.type == "gadget" && Aj.stack.length == 0;
          });
          if (AT && AT.index != AR && AG.shiftKey) {
            var AX;
            var AF = Eq(nA(AT.index, AR));
            try {
              function Az() {
                var Aj = AX.value;
                if (!oz.some(function (S0) {
                  return S0.type == "gadget" && S0.index == Aj;
                })) {
                  oz.push({
                    type: "gadget",
                    index: Aj,
                    stack: []
                  });
                }
              }
              for (AF.s(); !(AX = AF.n()).done;) {
                Az();
              }
            } catch (Aj) {
              AF.e(Aj);
            } finally {
              AF.f();
            }
            K0();
          } else {
            K0("gadget", AR, AG.ctrlKey || AG.metaKey || AG.shiftKey);
          }
        };
        Kz.push({
          button: AB,
          tank: AW(o0, AQ, {
            index: AR,
            type: "gadget",
            stack: []
          }, [AR])
        });
      }
      for (var AA = 0; AA < currentBody.gadgets.length; AA++) {
        Aq(AA);
      }
      (AN = mP(o0, "button")).classList.add("tank-editor-collapsible-element");
      AN.innerHTML = "+";
      AN.onclick = function () {
        currentBody.gadgets.push(nC(m4));
        W5();
        bodyUpdate();
      };
      Ez.innerHTML = `Layers (${currentBody.layers.length})`;
      nB(o1);
      Kj = [];
      function AS(AR) {
        var AQ = currentBody.layers[AR];
        var AB = mP(o1, "button", "tank-editor-collapsible-element");
        AB.innerText = m2(AQ);
        AB.onclick = function (AG) {
          var AT = EA(oz).reverse().find(function (Aj) {
            return Aj.type == "layer" && Aj.stack.length == 0;
          });
          if (AT && AT.index != AR && AG.shiftKey) {
            var AX;
            var AF = Eq(nA(AT.index, AR));
            try {
              function Az() {
                var Aj = AX.value;
                if (!oz.some(function (S0) {
                  return S0.type == "layer" && S0.index == Aj;
                })) {
                  oz.push({
                    type: "layer",
                    index: Aj,
                    stack: []
                  });
                }
              }
              for (AF.s(); !(AX = AF.n()).done;) {
                Az();
              }
            } catch (Aj) {
              AF.e(Aj);
            } finally {
              AF.f();
            }
            K0();
          } else {
            K0("layer", AR, AG.ctrlKey || AG.metaKey || AG.shiftKey);
          }
        };
        Kj.push({
          button: AB
        });
      }
      for (var AU = 0; AU < currentBody.layers.length; AU++) {
        AS(AU);
      }
      (AN = mP(o1, "button")).classList.add("tank-editor-collapsible-element");
      AN.innerHTML = "+";
      AN.onclick = function () {
        currentBody.layers.push(nC(m5));
        W5();
        bodyUpdate();
      };
      oC.value = currentBody.cameraSizeMultiplier;
      oL.value = currentBody.maxDrones;
      oI.value = currentBody.sides;
      oE.value = currentBody.outerSides;
      oK.value = currentBody.outerSize;
      oH.value = currentBody.healthMultiplier;
      oZ.value = currentBody.bodyDamageMultiplier;
      oM.value = currentBody.speedMultiplier;
      oD.value = currentBody.name;
      oW.value = currentBody.level;
      oq.value = currentBody.size;
      oO.value = currentBody.type;
      oT(currentBody.team);
      oX(KT(currentBody.visualTeam, undefined));
      oR.value = currentBody.radiant;
      oQ.value = currentBody.overrideTankName;
      if (AO) {
        K0();
      }
    }
    window.bodyUpdate = bodyUpdate;
    var m9 = [];
    function mC() {
      var AN = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      var AY = nC([currentWeapon, currentBody, oz]);
      m9.push(AY);
      if (AN) {
        mV = [];
      }
      if (m9.length > EV.maxSaveStates) {
        m9.shift();
      }
    }
    var mV = [];
    var mL = document.getElementById("import-export-button");
    var mI = document.getElementById("import-or-export");
    var mE = document.getElementById("import-export-type");
    var mK = document.getElementById("code-area");
    var mH = document.getElementById("load-weapon-upgrade-area");
    var mZ = document.getElementById("load-body-upgrade-area");
    var mM = document.getElementById("load-weapon-upgrade");
    var mJ = document.getElementById("load-body-upgrade");
    function mD(AN, AY, AO) {
      function AW() {
        switch (o8) {
          case 0:
            if (AY) {
              (function AF(Az) {
                for (var Aj = 0; Aj < Az.length; Aj++) {
                  var S0 = Az[Aj];
                  S0.length = S0.length * (S0.type == 3 || S0.type == 4 || S0.type == 5 ? 1.5 : 1);
                  if (S0.minion) {
                    AF(S0.minion.barrels);
                  }
                }
              })(currentWeapon.barrels);
            }
            break;
          case 1:
            function Aq(Az) {
              for (var Aj = 0; Aj < Az.length; Aj++) {
                var S0 = Az[Aj];
                if (S0.type == 2) {
                  S0.alpha = 0.3;
                  S0.rot = 0;
                  S0.rotationType = S0.subtype == 2 ? 0 : 1;
                  S0.backSides = S0.subtype == 2 ? S0.sides : 0;
                }
              }
            }
            if (AO) {
              Aq(currentBody.gadgets);
            }
            if (AY) {
              (function Az(Aj) {
                for (var S0 = 0; S0 < Aj.length; S0++) {
                  var S1 = Aj[S0];
                  if (S1.minion) {
                    Aq(S1.minion.gadgets);
                    Az(S1.minion.barrels);
                  }
                }
              })(currentWeapon.barrels);
            }
            break;
          case 2:
            function AA(Aj) {
              for (var S0 = 0; S0 < Aj.length; S0++) {
                var S1 = Aj[S0];
                if (S1.type == 2) {
                  S1.showParticles = 0;
                }
              }
            }
            if (AO) {
              AA(currentBody.gadgets);
            }
            if (AY) {
              (function Aj(S0) {
                for (var S1 = 0; S1 < S0.length; S1++) {
                  var S2 = S0[S1];
                  if (S2.minion) {
                    AA(S2.minion.gadgets);
                    Aj(S2.minion.barrels);
                  }
                }
              })(currentWeapon.barrels);
            }
            break;
          case 3:
            function AS(S0) {
              for (var S1 = 0; S1 < S0.length; S1++) {
                var S2 = S0[S1];
                if (S2.type == 2) {
                  S2.affectBullets = 2;
                  if ([3, 4].includes(S2.subtype)) {
                    S2.ignoreMass = 0;
                  }
                }
              }
            }
            if (AO) {
              AS(currentBody.gadgets);
            }
            if (AY) {
              (function S0(S1) {
                for (var S2 = 0; S2 < S1.length; S2++) {
                  var S3 = S1[S2];
                  if (S3.minion) {
                    AS(S3.minion.gadgets);
                    S0(S3.minion.barrels);
                  }
                }
              })(currentWeapon.barrels);
            }
            break;
          case 4:
            function AU(S1) {
              for (var S2 = 0; S2 < S1.length; S2++) {
                var S3 = S1[S2];
                if (S3.type == 0) {
                  S3.baseRot = 0;
                  S3.idleBehavior = 0;
                  S3.idleRotationSpeed = 1;
                }
              }
            }
            if (AO) {
              AU(currentBody.gadgets);
            }
            if (AY) {
              (function S1(S2) {
                for (var S3 = 0; S3 < S2.length; S3++) {
                  var S4 = S2[S3];
                  if (S4.minion) {
                    AU(S4.minion.gadgets);
                    S1(S4.minion.barrels);
                  }
                }
              })(currentWeapon.barrels);
            }
            break;
          case 5:
            function AP(S2) {
              for (var S3 = 0; S3 < S2.length; S3++) {
                var S4 = S2[S3];
                if (S4.type == 0) {
                  S4.rotationSpeed = S4.idleRotationSpeed;
                  delete S4.idleRotationSpeed;
                }
              }
            }
            if (AO) {
              AP(currentBody.gadgets);
            }
            if (AY) {
              (function S2(S3) {
                for (var S4 = 0; S4 < S3.length; S4++) {
                  var S5 = S3[S4];
                  if (S5.minion) {
                    AP(S5.minion.gadgets);
                    S2(S5.minion.barrels);
                  }
                }
              })(currentWeapon.barrels);
            }
            break;
          case 6:
            var AR = function S3(S4) {
              for (var S5 = 0; S5 < S4.length; S5++) {
                var S6 = S4[S5];
                if (S6.type == 3) {
                  S6.spreadDetection = 1;
                  if (S6.tank) {
                    AQ(S6.tank.barrels);
                    S3(S6.tank.gadgets);
                  }
                }
              }
            };
            var AQ = function S4(S5) {
              for (var S6 = 0; S6 < S5.length; S6++) {
                var S7 = S5[S6];
                if (S7.minion) {
                  AR(S7.minion.gadgets);
                  S4(S7.minion.barrels);
                }
              }
            };
            if (AO) {
              AR(currentBody.gadgets);
            }
            if (AY) {
              AQ(currentWeapon.barrels);
            }
            break;
          case 7:
            if (AY && AO) {
              currentBody.size = 1;
            }
            break;
          case 8:
            var AB = function S5(S6) {
              for (var S7 = 0; S7 < S6.length; S7++) {
                var S8 = S6[S7];
                if (S8.type == 2) {
                  S8.activationTrigger = 2;
                  S8.deactivatedApha = 0.3;
                }
                if (S8.tank) {
                  AG(S8.tank.barrels);
                  S5(S8.tank.gadgets);
                }
              }
            };
            var AG = function S6(S7) {
              for (var S8 = 0; S8 < S7.length; S8++) {
                var S9 = S7[S8];
                if (S9.minion) {
                  AB(S9.minion.gadgets);
                  S6(S9.minion.barrels);
                }
              }
            };
            if (AO) {
              AB(currentBody.gadgets);
            }
            if (AY) {
              AG(currentWeapon.barrels);
            }
            break;
          case 9:
            var AT = function S7(S8) {
              for (var S9 = 0; S9 < S8.length; S9++) {
                var SC = S8[S9];
                if (SC.type == 3) {
                  SC.rotationDisabledBehavior = SC.disabledBehavior;
                  delete SC.disabledBehavior;
                  if (SC.tank) {
                    AX(SC.tank.barrels);
                    S7(SC.tank.gadgets);
                  }
                }
              }
            };
            var AX = function S8(S9) {
              for (var SC = 0; SC < S9.length; SC++) {
                var SV = S9[SC];
                if (SV.minion) {
                  AT(SV.minion.gadgets);
                  S8(SV.minion.barrels);
                }
              }
            };
            if (AO) {
              AT(currentBody.gadgets);
            }
            if (AY) {
              AX(currentWeapon.barrels);
            }
        }
      }
      for (o8 = AN; o8 < 10; o8++) {
        AW();
      }
    }
    function mN(AN) {
      var AY;
      try {
        AY = JSON.parse(AN, function (AO, AW) {
          if (AW === 1.79e+308) {
            return Infinity;
          } else if (AW === -1.79e+308) {
            return -Infinity;
          } else {
            return AW;
          }
        });
      } catch (AO) {
        try {
          AY = JSON.parse(nQ(AN.trim()), function (AW, Aq) {
            if (Aq === 1.79e+308) {
              return Infinity;
            } else if (Aq === -1.79e+308) {
              return -Infinity;
            } else {
              return Aq;
            }
          });
        } catch (AW) {
          try {
            AY = JSON.parse(nQ(nQ(AN.trim())), function (Aq, AA) {
              if (AA === 1.79e+308) {
                return Infinity;
              } else if (AA === -1.79e+308) {
                return -Infinity;
              } else {
                return AA;
              }
            });
          } catch (Aq) {
            return {
              error: "Invalid Code"
            };
          }
          return AY || {
            error: "Invalid Code"
          };
        }
        return AY || {
          error: "Invalid Code"
        };
      }
      return AY;
    }
    function mY(AN) {
      var AY = JSON.stringify(AN, function (Aq, AA) {
        if (AA === Infinity) {
          return 1.79e+308;
        } else if (AA === -Infinity) {
          return -1.79e+308;
        } else {
          return AA;
        }
      });
      if (EV.compressCodes) {
        var AO = nR(AY);
        var AW = nR(AO);
        AY = AO.length < AW.length ? AO : AW;
      }
      return AY;
    }
    function mO(AN) {
      var AY = [];
      AN.forEach(function (AO) {
        var AW = {
          offsetX: 0,
          offsetY: 0,
          rot: 0
        };
        Object.keys(AO).forEach(function (Aq) {
          switch (Aq) {
            case "selected":
              break;
            case "rot":
              AW[Aq] = nH(nL(AO[Aq]), 5);
              break;
            default:
              AW[Aq] = AO[Aq];
          }
        });
        AY.push(AW);
      });
      return AY;
    }
    function mW(AN) {
      var AY = [];
      AN.forEach(function (AO) {
        var AW = {};
        Object.keys(AO).forEach(function (Aq) {
          switch (Aq) {
            case "fireCooldown":
            case "animTime":
            case "selected":
            case "shootingTime":
              break;
            case "rot":
              AW[Aq] = nH(nL(AO[Aq]), 5);
              break;
            case "minion":
              AW[Aq] = {
                sides: nM(AO[Aq].sides || 0),
                outerSides: nM(AO[Aq].outerSides || 0),
                outerSize: nM(AO[Aq].outerSize || 0),
                maxWeaponDrones: AO[Aq].maxWeaponDrones || 0,
                maxBodyDrones: AO[Aq].maxBodyDrones || 0,
                barrels: mW(AO[Aq].barrels),
                gadgets: mq(AO[Aq].gadgets),
                layers: mO(AO[Aq].layers || [])
              };
              break;
            default:
              AW[Aq] = AO[Aq];
          }
        });
        AY.push(AW);
      });
      return AY;
    }
    function mq(AN) {
      var AY = [];
      AN.forEach(function (AO) {
        var AW = {};
        Object.keys(AO).forEach(function (Aq) {
          switch (Aq) {
            case "fireCooldown":
            case "targetCheckTimer":
            case "animTime":
            case "target":
            case "selected":
              break;
            case "sides":
            case "outerSides":
            case "backSides":
              AW[Aq] = nM(AO[Aq]);
              break;
            case "baseRot":
              AW[Aq] = nH(nL(AO[Aq]), 5);
              break;
            case "rot":
              if (AO.type != 0 && AO.type != 3) {
                AW[Aq] = nH(nL(AO[Aq]), 5);
              }
              break;
            default:
              AW[Aq] = AO[Aq];
          }
        });
        AY.push(AW);
      });
      return AY;
    }
    function mA(AN) {
      var AY = [];
      AN.forEach(function (AO) {
        var AW = {
          offsetX: 0,
          offsetY: 0,
          rot: 0
        };
        Object.keys(AO).forEach(function (Aq) {
          if (Aq === "rot") {
            AW[Aq] = nV(AO[Aq]);
          } else {
            AW[Aq] = AO[Aq];
          }
        });
        AY.push(AW);
      });
      return AY;
    }
    function mS(AN) {
      var AY = [];
      AN.forEach(function (AO) {
        var AW = {};
        Object.keys(AO).forEach(function (Aq) {
          switch (Aq) {
            case "rot":
              AW[Aq] = nV(AO[Aq]);
              break;
            case "minion":
              AW[Aq] = {
                sides: nM(AO[Aq].sides || 0),
                outerSides: nM(AO[Aq].outerSides || 0),
                outerSize: nM(AO[Aq].outerSize || 0),
                maxWeaponDrones: AO[Aq].maxWeaponDrones || 0,
                maxBodyDrones: AO[Aq].maxBodyDrones || 0,
                barrels: mS(AO[Aq].barrels),
                gadgets: mU(AO[Aq].gadgets),
                layers: mA(AO[Aq].layers || [])
              };
              break;
            default:
              AW[Aq] = AO[Aq];
          }
        });
        AY.push(AW);
      });
      return AY;
    }
    function mU(AN) {
      var AY = [];
      AN.forEach(function (AO) {
        var AW = {};
        Object.keys(AO).forEach(function (Aq) {
          switch (Aq) {
            case "rot":
            case "baseRot":
              AW[Aq] = nV(AO[Aq]);
              break;
            case "sides":
            case "outerSides":
            case "backSides":
              AW[Aq] = nM(AO[Aq]);
              break;
            default:
              AW[Aq] = AO[Aq];
          }
        });
        AY.push(AW);
      });
      return AY;
    }
    function mP(AN, AY = "div", AO) {
      if (typeof AO == "string") {
        AO = [AO];
      }
      var AW = document.createElement(AY);
      AN.appendChild(AW);
      if (AO) {
        AO.forEach(function (Aq) {
          AW.classList.add(Aq);
        });
      }
      return AW;
    }
    function mR(AN, AY) {
      return function (AO) {
        if (Array.isArray(AO)) {
          return AO;
        }
      }(AN) || function (AO, AW) {
        var Aq = AO == null ? null : typeof Symbol != "undefined" && AO[Symbol.iterator] || AO["@@iterator"];
        if (Aq != null) {
          var AA;
          var AS;
          var AU;
          var AP;
          var AR = [];
          var AQ = true;
          var AB = false;
          try {
            AU = (Aq = Aq.call(AO)).next;
            if (AW === 0) {
              if (Object(Aq) !== Aq) {
                return;
              }
              AQ = false;
            } else {
              for (; !(AQ = (AA = AU.call(Aq)).done) && (AR.push(AA.value), AR.length !== AW); AQ = true);
            }
          } catch (AG) {
            AB = true;
            AS = AG;
          } finally {
            try {
              if (!AQ && Aq.return != null && (AP = Aq.return(), Object(AP) !== AP)) {
                return;
              }
            } finally {
              if (AB) {
                throw AS;
              }
            }
          }
          return AR;
        }
      }(AN, AY) || mB(AN, AY) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function mQ(AN, AY) {
      var AO = typeof Symbol != "undefined" && AN[Symbol.iterator] || AN["@@iterator"];
      if (!AO) {
        if (Array.isArray(AN) || (AO = mB(AN)) || AY && AN && typeof AN.length == "number") {
          if (AO) {
            AN = AO;
          }
          var AW = 0;
          function Aq() {}
          return {
            s: Aq,
            n: function () {
              if (AW >= AN.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AN[AW++]
                };
              }
            },
            e: function (AP) {
              throw AP;
            },
            f: Aq
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AA;
      var AS = true;
      var AU = false;
      return {
        s: function () {
          AO = AO.call(AN);
        },
        n: function () {
          var AP = AO.next();
          AS = AP.done;
          return AP;
        },
        e: function (AP) {
          AU = true;
          AA = AP;
        },
        f: function () {
          try {
            if (!AS && AO.return != null) {
              AO.return();
            }
          } finally {
            if (AU) {
              throw AA;
            }
          }
        }
      };
    }
    function mB(AN, AY) {
      if (AN) {
        if (typeof AN == "string") {
          return mG(AN, AY);
        }
        var AO = Object.prototype.toString.call(AN).slice(8, -1);
        if (AO === "Object" && AN.constructor) {
          AO = AN.constructor.name;
        }
        if (AO === "Map" || AO === "Set") {
          return Array.from(AN);
        } else if (AO === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AO)) {
          return mG(AN, AY);
        } else {
          return undefined;
        }
      }
    }
    function mG(AN, AY) {
      if (AY == null || AY > AN.length) {
        AY = AN.length;
      }
      for (var AO = 0, AW = new Array(AY); AO < AY; AO++) {
        AW[AO] = AN[AO];
      }
      return AW;
    }
    mM.onclick = function () {
      var AN;
      var AY = mH.value.trim().toLowerCase();
      mH.value = "";
      if (AY.length != 0) {
        AN = AY;
        eA.sendMessage(64, AN);
      }
    };
    mJ.onclick = function () {
      var AN;
      var AY = mZ.value.trim().toLowerCase();
      mZ.value = "";
      if (AY.length != 0) {
        AN = AY;
        eA.sendMessage(68, AN);
      }
    };
    mH.addEventListener("keydown", function (AN) {
      if (AN.keyCode == EY.enter) {
        mM.click();
        mH.blur();
      }
    });
    mZ.addEventListener("keydown", function (AN) {
      if (AN.keyCode == EY.enter) {
        mJ.click();
        mZ.blur();
      }
    });
    mL.onclick = function () {
      switch (mI.selectedIndex) {
        case 0:
          switch (mE.selectedIndex) {
            case 0:
              (function (AN) {
                var AY;
                try {
                  if ((AY = mN(AN)).error) {
                    lZ("Tank code invalid!", AY.error);
                    return;
                  }
                } catch (AW) {
                  lZ("Tank code invalid!", AW);
                  return;
                }
                if (AY.type && AY.type != "full") {
                  lZ("Tank code invalid!", `Code is not a full tank code, it's a 
\t\t${{
                    weapon: "weapon",
                    body: "body",
                    full: "full tank"
                  }[AY.type]} code. Import as a "${{
                    weapon: "Weapon Upgrade",
                    body: "Body Upgrade",
                    full: "Full Tank"
                  }[AY.type]} instead of a "Full Tank".`);
                  return;
                }
                var AO = AY.version || 0;
                currentBody.gadgets = mU(AY.gadgets || []);
                currentBody.layers = mA(AY.layers || []);
                currentBody.outerSize = AY.outerSize || 0;
                currentBody.sides = nM(AY.sides || 0);
                currentBody.outerSides = nM(AY.outerSides || 0);
                currentBody.healthMultiplier = KG(AY.healthMultiplier, 1);
                currentBody.bodyDamageMultiplier = KG(AY.bodyDamageMultiplier, 1);
                currentBody.speedMultiplier = KG(AY.speedMultiplier, 1);
                currentBody.cameraSizeMultiplier = KG(AY.bodyCameraSizeMultiplier, 1);
                currentBody.maxDrones = KG(AY.maxBodyDrones, 3);
                currentBody.name = AY.bodyUpgradeName || "";
                currentWeapon.barrels = mS(AY.barrels || []);
                currentWeapon.cameraSizeMultiplier = KG(AY.weaponCameraSizeMultiplier, 1);
                currentWeapon.maxDrones = KG(AY.maxWeaponDrones, 3);
                currentWeapon.name = AY.weaponUpgradeName || "";
                currentBody.level = KG(AY.level, 1);
                currentBody.size = KG(AY.size, 1);
                currentBody.type = KG(AY.tankType, 0);
                currentBody.radiant = KG(AY.radiant, 0);
                currentBody.team = KT(AY.team, 0);
                currentBody.visualTeam = KT(AY.visualTeam, undefined);
                currentBody.overrideTankName = AY.overrideTankName || "";
                mD(AO, true, true);
                W5();
                bodyUpdate();
                W6();
                weaponUpdate();
              })(mK.value);
              break;
            case 1:
              (function (AN) {
                var AY;
                try {
                  if ((AY = mN(AN)).error) {
                    lZ("Weapon code invalid!", AY.error);
                    return;
                  }
                } catch (AW) {
                  lZ("Weapon code invalid!", AW);
                  return;
                }
                if (AY.type && AY.type != "weapon") {
                  lZ("Weapon code invalid!", `Code is not a weapon code, it's a 
\t\t${{
                    weapon: "weapon",
                    body: "body",
                    full: "full tank"
                  }[AY.type]} code. Import as a "${{
                    weapon: "Weapon Upgrade",
                    body: "Body Upgrade",
                    full: "Full Tank"
                  }[AY.type]} instead of a "Weapon Upgrade".`);
                  return;
                }
                var AO = AY.version || 0;
                currentWeapon.barrels = mS(AY.barrels || []);
                currentWeapon.cameraSizeMultiplier = KG(AY.cameraSizeMultiplier, 1);
                currentWeapon.maxDrones = KG(AY.maxDrones, 3);
                currentWeapon.name = AY.name || "";
                mD(AO, true, false);
                W6();
                weaponUpdate();
              })(mK.value);
              break;
            case 2:
              (function (AN) {
                var AY;
                try {
                  if ((AY = mN(AN)).error) {
                    lZ("Body code invalid!", AY.error);
                    return;
                  }
                } catch (AW) {
                  lZ("Body code invalid!", AW);
                  return;
                }
                if (AY.type && AY.type != "body") {
                  lZ("Body code invalid!", `Code is not a body code, it's a 
\t\t${{
                    weapon: "weapon",
                    body: "body",
                    full: "full tank"
                  }[AY.type]} code. Import as a "${{
                    weapon: "Weapon Upgrade",
                    body: "Body Upgrade",
                    full: "Full Tank"
                  }[AY.type]} instead of a "Body Upgrade".`);
                  return;
                }
                var AO = AY.version || 0;
                currentBody.gadgets = mU(AY.gadgets || []);
                currentBody.layers = mA(AY.layers || []);
                currentBody.outerSize = AY.outerSize || 0;
                currentBody.sides = nM(AY.sides || 0);
                currentBody.outerSides = nM(AY.outerSides || 0);
                currentBody.healthMultiplier = KG(AY.healthMultiplier, 1);
                currentBody.bodyDamageMultiplier = KG(AY.bodyDamageMultiplier, 1);
                currentBody.speedMultiplier = KG(AY.speedMultiplier, 1);
                currentBody.cameraSizeMultiplier = KG(AY.cameraSizeMultiplier, 1);
                currentBody.maxDrones = KG(AY.maxDrones, 3);
                currentBody.name = AY.name || "";
                mD(AO, false, true);
                W5();
                bodyUpdate();
              })(mK.value);
          }
          break;
        case 1:
          switch (mE.selectedIndex) {
            case 0:
              mK.value = mY({
                type: "full",
                version: 10,
                gadgets: mq(currentBody.gadgets || []),
                layers: mO(currentBody.layers || []),
                sides: currentBody.sides || 0,
                outerSides: currentBody.outerSides || 0,
                outerSize: currentBody.outerSize || 0,
                healthMultiplier: currentBody.healthMultiplier,
                bodyDamageMultiplier: currentBody.bodyDamageMultiplier,
                speedMultiplier: currentBody.speedMultiplier,
                bodyCameraSizeMultiplier: currentBody.cameraSizeMultiplier,
                maxBodyDrones: currentBody.maxDrones,
                bodyUpgradeName: currentBody.name,
                barrels: mW(currentWeapon.barrels || []),
                weaponCameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
                maxWeaponDrones: currentWeapon.maxDrones,
                weaponUpgradeName: currentWeapon.name,
                level: currentBody.level,
                size: currentBody.size,
                tankType: currentBody.type,
                radiant: currentBody.radiant,
                team: currentBody.team,
                visualTeam: currentBody.visualTeam,
                overrideTankName: currentBody.overrideTankName || ""
              });
              break;
            case 1:
              mK.value = mY({
                type: "weapon",
                version: 10,
                barrels: mW(currentWeapon.barrels || []),
                cameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
                maxDrones: currentWeapon.maxDrones,
                name: currentWeapon.name
              });
              break;
            case 2:
              mK.value = mY({
                type: "body",
                version: 10,
                gadgets: mq(currentBody.gadgets || []),
                layers: mO(currentBody.layers || []),
                sides: currentBody.sides,
                outerSides: currentBody.outerSides,
                outerSize: currentBody.outerSize,
                healthMultiplier: currentBody.healthMultiplier,
                bodyDamageMultiplier: currentBody.bodyDamageMultiplier,
                speedMultiplier: currentBody.speedMultiplier,
                maxDrones: currentBody.maxDrones,
                cameraSizeMultiplier: currentBody.cameraSizeMultiplier,
                name: currentBody.name
              });
          }
      }
    };
    var mT;
    var mX;
    var mF;
    var mz = {};
    var mj = {};
    var k0 = 0;
    var k1 = 0;
    var k2 = 0;
    var k3 = 1;
    var k4 = false;
    var k5 = false;
    var k6 = false;
    var k7 = false;
    var k8 = false;
    var k9 = false;
    var kC = false;
    var kV = document.getElementById("debug-mode");
    var kL = {
      x: 0,
      y: 0
    };
    function kI(AN) {
      (function (AY, AO) {
        kQ = AY;
        kB = AO;
        var AW = (kQ - window.innerWidth / 2 + DF) * DU * N6;
        var Aq = (kB - window.innerHeight / 2 + Dz) * DU * N6;
        WC(AW, Aq);
      })(AN.clientX, AN.clientY);
      kL.x = AN.clientX * N6;
      kL.y = AN.clientY * N6;
      mF = AN.clientY > window.innerHeight - 150 / N6 && Math.abs(AN.clientX - window.innerWidth / 2) > window.innerWidth / 2 - 300 / N6;
    }
    var kE = [{
      align: 1,
      selected: false,
      x: 0,
      y: 0
    }, {
      align: -1,
      selected: false,
      x: 0,
      y: 0
    }];
    var kK = 0;
    var kH = 0;
    var kZ = 0;
    function kM() {
      kA();
      kS();
      kG();
      kq();
    }
    function kJ(AN) {
      if (!editing) {
        var AY;
        var AO = mQ(AN.changedTouches);
        try {
          for (AO.s(); !(AY = AO.n()).done;) {
            var AW;
            var Aq = AY.value;
            var AA = mQ(kE);
            try {
              for (AA.s(); !(AW = AA.n()).done;) {
                var AS = AW.value;
                if (!AS.selected) {
                  var AU = AS.align * E7 == 1 ? 0 : DK.width;
                  var AP = DK.height;
                  var AR = AU + +EV.joystickOffset * AS.align * E7;
                  var AQ = AP - +EV.joystickOffset;
                  var AB = Aq.clientX * N6;
                  var AG = Aq.clientY * N6;
                  AX = {
                    x: AR,
                    y: AQ,
                    size: +EV.joystickSize
                  };
                  AF = {
                    x: AB,
                    y: AG,
                    size: Math.min(Aq.radiusX, Aq.radiusY) * N6
                  };
                  Az = undefined;
                  Aj = undefined;
                  undefined;
                  Az = AX.x - AF.x;
                  Aj = AX.y - AF.y;
                  if (Math.sqrt(Az * Az + Aj * Aj) < AX.size + AF.size) {
                    AS.selected = true;
                    AS.selectedIdentifier = Aq.identifier;
                    AS.x = -(AR - AB) / 2;
                    AS.y = -(AQ - AG) / 2;
                    var AT = Math.max(+EV.joystickSize / 2, Math.sqrt(AS.x * AS.x + AS.y * AS.y));
                    AS.x /= AT;
                    AS.y /= AT;
                  }
                }
              }
            } catch (S0) {
              AA.e(S0);
            } finally {
              AA.f();
            }
          }
        } catch (S1) {
          AO.e(S1);
        } finally {
          AO.f();
        }
      }
      var AX;
      var AF;
      var Az;
      var Aj;
      kP({
        x: AN.changedTouches[0].clientX,
        y: AN.changedTouches[0].clientY
      }, false);
      kM();
    }
    function kD(AN) {
      var AY;
      var AO = mQ(AN.changedTouches);
      try {
        for (AO.s(); !(AY = AO.n()).done;) {
          var AW;
          var Aq = AY.value;
          var AA = mQ(kE);
          try {
            for (AA.s(); !(AW = AA.n()).done;) {
              var AS = AW.value;
              if (AS.selected && AS.selectedIdentifier == Aq.identifier) {
                var AU = AS.align * E7 == 1 ? 0 : DK.width;
                var AP = DK.height;
                var AR = AU + +EV.joystickOffset * AS.align * E7;
                var AQ = AP - +EV.joystickOffset;
                var AB = Aq.clientX * N6;
                var AG = Aq.clientY * N6;
                AS.x = -(AR - AB) / 2;
                AS.y = -(AQ - AG) / 2;
                var AT = Math.max(+EV.joystickSize / 2, Math.sqrt(AS.x * AS.x + AS.y * AS.y));
                AS.x /= AT;
                AS.y /= AT;
              }
            }
          } catch (AX) {
            AA.e(AX);
          } finally {
            AA.f();
          }
        }
      } catch (AF) {
        AO.e(AF);
      } finally {
        AO.f();
      }
      if (AN.cancelable) {
        AN.preventDefault();
      }
      kM();
    }
    function kN(AN) {
      var AY;
      var AO = mQ(AN.changedTouches);
      try {
        for (AO.s(); !(AY = AO.n()).done;) {
          var AW;
          var Aq = AY.value;
          var AA = mQ(kE);
          try {
            for (AA.s(); !(AW = AA.n()).done;) {
              var AS = AW.value;
              if (AS.selected && AS.selectedIdentifier == Aq.identifier) {
                AS.selected = false;
                AS.x = 0;
                AS.y = 0;
              }
            }
          } catch (AU) {
            AA.e(AU);
          } finally {
            AA.f();
          }
        }
      } catch (AP) {
        AO.e(AP);
      } finally {
        AO.f();
      }
      kM();
    }
    function kY(AN) {
      if (l4 > 0 && AN < 9 && AN > 0 && l2[AN - 1] != 15) {
        Y2[AN - 1] = WT ? 1.1 : 1.3;
        Y5(1.2);
        (function (AY) {
          l2[AY - 1]++;
          l4--;
        })(AN);
        ej(AN);
      }
    }
    function kO(AN) {
      var AY = AN.keyCode;
      var AO = AN.repeat;
      var AW = w8;
      var Aq = document.activeElement.tagName.toLowerCase();
      if (!EI && Aq !== "input" && Aq !== "textarea") {
        var AA = AN.ctrlKey || AN.metaKey;
        if (editing) {
          if (AA) {
            if (AY == EY.undo) {
              (function () {
                if (m9.length > 1) {
                  mV.push(m9.pop());
                  var AS = nC(m9[m9.length - 1]);
                  currentWeapon = AS[0];
                  currentBody = AS[1];
                  oz = AS[2];
                  oF(false);
                  W5();
                  W6();
                } else {
                  console.log("Can't undo");
                }
              })();
              return AN.preventDefault();
            }
            if (AY == EY.redo) {
              (function () {
                if (mV.length > 0) {
                  var AS = nC(mV.pop());
                  currentWeapon = AS[0];
                  currentBody = AS[1];
                  oz = AS[2];
                  oF(false);
                  W5();
                  W6();
                  mC(false);
                } else {
                  console.log("Can't redo");
                }
              })();
              return AN.preventDefault();
            }
            if (AY == EY.selectAll) {
              (function () {
                K1();
                for (var AS = 0; AS < currentWeapon.barrels.length; AS++) {
                  oz.push({
                    type: "barrel",
                    index: AS,
                    stack: []
                  });
                }
                for (var AU = 0; AU < currentBody.gadgets.length; AU++) {
                  oz.push({
                    type: "gadget",
                    index: AU,
                    stack: []
                  });
                }
                for (var AP = 0; AP < currentBody.layers.length; AP++) {
                  oz.push({
                    type: "layer",
                    index: AP,
                    stack: []
                  });
                }
                K0();
              })();
              return AN.preventDefault();
            }
            if (AY == EY.duplicate) {
              KA();
              return AN.preventDefault();
            }
            if (AY == EY.moveForward) {
              KO();
              return AN.preventDefault();
            }
            if (AY == EY.moveBackward) {
              KW();
              return AN.preventDefault();
            }
          } else if (AY == EY.delete) {
            Kq();
            return AN.preventDefault();
          }
        } else {
          mz[AY] = true;
        }
        if (AY != EY.autoFire || editing || AO || AW) {
          if (AY != EY.autoSpin || editing || AO || AW) {
            if (AY != EY.spinLock || editing || AO || AW) {
              if (AY != EY.debugMode || editing || AO || AW) {
                if (AY != EY.passiveMode || editing || AO || AW) {
                  if (AY != EY.screenshotMode || editing || AO || AW) {
                    if (AY != EY.fire || editing || AW) {
                      if (AY != EY.repel || editing || AW) {
                        if (AY == EY.settings) {
                          if (AW) {
                            wH();
                          }
                          if (Yj) {
                            w1();
                          }
                          if (EI) {
                            EM();
                          } else {
                            EE();
                          }
                        } else if (AY != EY.quickChat || AO || AW || editing || !EV.showChat) {
                          if (AY == EY.escape) {
                            if (wL) {
                              wZ();
                            }
                          } else if (!editing && !AW) {
                            if (!Number.isNaN(+AN.key) && +AN.key > 0) {
                              if (wL) {
                                wI(+AN.key - 1, true);
                              } else {
                                kY(AN.key);
                              }
                            }
                          }
                        } else {
                          wZ();
                        }
                      } else {
                        kS();
                      }
                    } else {
                      kA();
                      kS();
                    }
                  } else if (!editing) {
                    if (AL("tut_screenshot_mode") || pL) {
                      tN(!t3, true);
                    } else {
                      l9(true);
                      AV("tut_screenshot_mode", true);
                      setTimeout(function () {
                        addNotification(`Pressing ${EW[AY]} again will enable screenshot mode. This will hide all HUD elements.`);
                      }, 0);
                      l9(false);
                    }
                  }
                } else {
                  W7(kC = !kC);
                  addNotification(`Passive Mode (${EW[AY]}): ${kC ? "ON" : "OFF"}`, 0.5);
                }
              } else {
                if (k9 = !k9) {
                  kV.classList.remove("hide");
                } else {
                  kV.classList.add("hide");
                }
                addNotification(`Debug Mode (${EW[AY]}): ${k9 ? "ON" : "OFF"}`, 0.5);
              }
            } else {
              k8 = !k8;
              addNotification(`Spin Lock (${EW[AY]}): ${k8 ? "ON" : "OFF"}`, 0.5);
            }
          } else {
            if (!(k7 = !k7)) {
              k3 *= -1;
            }
            addNotification(`Auto Spin (${EW[AY]}): ${k7 ? "ON" : "OFF"}`, 0.5);
          }
        } else {
          k6 = !k6;
          (function () {
            for (var AS = 0, AU = Object.entries(mj); AS < AU.length; AS++) {
              var AP = mR(AU[AS], 2);
              var AR = AP[0];
              AP[1];
              mj[AR] = false;
            }
            kU();
            kA();
          })();
          addNotification(`Auto Fire (${EW[AY]}): ${k6 ? "ON" : "OFF"}`, 0.5);
          kA();
          mj[1] = false;
          kU();
        }
        kq();
      }
    }
    function kW(AN) {
      var AY = AN.keyCode;
      if (WQ !== document.activeElement && !editing) {
        mz[AY] = false;
        kq();
        kA();
        kS();
      }
    }
    function kq() {
      var AN = 0;
      var AY = 0;
      if (mz[EY.weaponTree]) {
        if (!k4) {
          wA(true);
        }
        k4 = true;
      } else {
        k4 = false;
      }
      if (mz[EY.bodyTree]) {
        if (!k5) {
          wA(false);
        }
        k5 = true;
      } else {
        k5 = false;
      }
      if (kE[0].selected) {
        AN = kE[0].x;
        AY = -kE[0].y;
        var AO = Math.sqrt(AN * AN + AY * AY);
        if (AO > 0.2) {
          AN /= AO;
          AY /= AO;
        } else {
          AN = 0;
          AY = 0;
        }
      } else {
        if (mz[EY.moveUp] || mz[EY.moveUpAlt]) {
          AY++;
        }
        if (mz[EY.moveDown] || mz[EY.moveDownAlt]) {
          AY--;
        }
        if (mz[EY.moveLeft] || mz[EY.moveLeftAlt]) {
          AN--;
        }
        if (mz[EY.moveRight] || mz[EY.moveRightAlt]) {
          AN++;
        }
      }
      if (k0 != AN || k1 != AY) {
        updateMovementInput(k0 = AN, k1 = AY);
      }
    }
    function kA() {
      if (editing) {
        W4(false);
      } else if (k6 || mj[1] || mz[EY.fire] || kE[1].selected) {
        W4(true);
      } else {
        W4(false);
      }
    }
    function kS() {
      if (mj[3] || mz[EY.repel]) {
        W9(2);
      } else if (mj[1] || mz[EY.fire] || k6 || kE[1].selected) {
        W9(1);
      } else {
        W9(0);
      }
    }
    function kU() {
      kS();
    }
    function kP(AN) {
      var AY = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (!AY || !WT) {
        var AO = Date.now();
        if (AO - mT < 1000) {
          if (++mX > 4) {
            if (!AL("tut_autofire") && !pL && !WT) {
              l9(true);
              AV("tut_autofire", true);
              setTimeout(function () {
                addNotification("Hold down click to shoot automatically.");
              }, 1000);
              setTimeout(function () {
                addNotification("You can also press E to turn on auto fire.");
              }, 8000);
              l9(false);
            }
          }
        } else {
          mX = 0;
        }
        mT = AO;
        if (!sG({
          x: AN.x * N6,
          y: AN.y * N6
        }) && AY) {
          mj[AN.which] = true;
          kU();
          kA();
        }
      }
    }
    function kR(AN) {
      mj[AN.which] = false;
      kU();
      kA();
    }
    var kQ = 0;
    var kB = 0;
    function kG() {
      if (!k7 && !k8 || editing) {
        if (editing) {
          k2 = 1.5708;
        } else if (kE[1].selected) {
          k2 = Math.atan2(kE[1].x, -kE[1].y);
        } else if (!WT) {
          k2 = Math.atan2(kQ - (window.innerWidth / 2 + DF / DU), window.innerHeight / 2 + Dz / DU - kB);
        }
        W2(k2);
      }
    }
    function kT() {
      for (var AN = 0, AY = Object.entries(mz); AN < AY.length; AN++) {
        var AO = mR(AY[AN], 2);
        var AW = AO[0];
        AO[1];
        mz[AW] = false;
      }
      kA();
      kq();
    }
    function kX() {
      kT();
      var AN;
      var AY = mQ(kE);
      try {
        for (AY.s(); !(AN = AY.n()).done;) {
          var AO = AN.value;
          AO.selected = false;
          AO.y = 0;
          AO.x = 0;
        }
      } catch (AW) {
        AY.e(AW);
      } finally {
        AY.f();
      }
      window.removeEventListener("mousedown", kP);
      window.removeEventListener("mouseup", kR);
      window.removeEventListener("keydown", kO);
      window.removeEventListener("keyup", kW);
      window.removeEventListener("mousemove", kI);
      window.removeEventListener("click", kI);
      window.removeEventListener("touchstart", kJ);
      window.removeEventListener("touchmove", kD);
      window.removeEventListener("touchend", kN);
      window.removeEventListener("focus", kT);
      window.removeEventListener("blur", kT);
    }
    var kF;
    var kz = {};
    var kj = {
      visual: {
        gridSize: 30,
        showMinimap: true,
        backgroundColor: "#CDCDCD",
        gridColor: "#C8C8C8",
        particles: [{
          spawnrate: 0,
          speed: {
            min: 0,
            max: 0
          },
          d: {
            min: 0,
            max: 360
          },
          size: {
            min: 6,
            max: 6
          },
          lifetime: {
            min: 30,
            max: 60
          },
          sides: {
            min: 0,
            max: 0
          },
          transparency: {
            min: 1,
            max: 1
          },
          color: {
            min: "#CDCDCD",
            max: "#C8C8C8"
          }
        }]
      },
      bases: [],
      walls: [],
      gates: [],
      trueMapSize: 1
    };
    function H0(AN) {
      H0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AY) {
        return typeof AY;
      } : function (AY) {
        if (AY && typeof Symbol == "function" && AY.constructor === Symbol && AY !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AY;
        }
      };
      return H0(AN);
    }
    function H1(AN, AY) {
      var AO = typeof Symbol != "undefined" && AN[Symbol.iterator] || AN["@@iterator"];
      if (!AO) {
        if (Array.isArray(AN) || (AO = function (AP, AR) {
          if (!AP) {
            return;
          }
          if (typeof AP == "string") {
            return H2(AP, AR);
          }
          var AQ = Object.prototype.toString.call(AP).slice(8, -1);
          if (AQ === "Object" && AP.constructor) {
            AQ = AP.constructor.name;
          }
          if (AQ === "Map" || AQ === "Set") {
            return Array.from(AP);
          }
          if (AQ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AQ)) {
            return H2(AP, AR);
          }
        }(AN)) || AY && AN && typeof AN.length == "number") {
          if (AO) {
            AN = AO;
          }
          var AW = 0;
          function Aq() {}
          return {
            s: Aq,
            n: function () {
              if (AW >= AN.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AN[AW++]
                };
              }
            },
            e: function (AP) {
              throw AP;
            },
            f: Aq
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AA;
      var AS = true;
      var AU = false;
      return {
        s: function () {
          AO = AO.call(AN);
        },
        n: function () {
          var AP = AO.next();
          AS = AP.done;
          return AP;
        },
        e: function (AP) {
          AU = true;
          AA = AP;
        },
        f: function () {
          try {
            if (!AS && AO.return != null) {
              AO.return();
            }
          } finally {
            if (AU) {
              throw AA;
            }
          }
        }
      };
    }
    function H2(AN, AY) {
      if (AY == null || AY > AN.length) {
        AY = AN.length;
      }
      for (var AO = 0, AW = new Array(AY); AO < AY; AO++) {
        AW[AO] = AN[AO];
      }
      return AW;
    }
    function H3(AN, AY, AO) {
      if ((AY = function (AW) {
        var Aq = function (AA, AS) {
          if (H0(AA) !== "object" || AA === null) {
            return AA;
          }
          var AU = AA[Symbol.toPrimitive];
          if (AU !== undefined) {
            var AP = AU.call(AA, AS || "default");
            if (H0(AP) !== "object") {
              return AP;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (AS === "string" ? String : Number)(AA);
        }(AW, "string");
        if (H0(Aq) === "symbol") {
          return Aq;
        } else {
          return String(Aq);
        }
      }(AY)) in AN) {
        Object.defineProperty(AN, AY, {
          value: AO,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        AN[AY] = AO;
      }
      return AN;
    }
    H3(kF = {
      peacekeeper3: {
        barrels: [{
          type: 0,
          rot: 180,
          offset: 0,
          width: 0.6,
          length: 0.35,
          distance: 0.6,
          visualType: 1
        }, {
          type: 0,
          rot: 180,
          offset: 0,
          width: 0.8,
          length: 0.35,
          distance: 0.3,
          visualType: 1
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.3,
          length: 0.4,
          distance: 0.6
        }, {
          type: 6,
          rot: 0,
          offset: 0,
          width: 0.6,
          length: 0.5,
          distance: -0.2
        }]
      },
      peacekeeper2: {
        barrels: [{
          type: 0,
          rot: 180,
          offset: 0,
          width: 0.8,
          length: 0.4,
          distance: 0.3,
          visualType: 1
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.35,
          length: 0.5,
          distance: 0.6
        }, {
          type: 6,
          rot: 0,
          offset: 0,
          width: 0.7,
          length: 0.5,
          distance: -0.2
        }]
      },
      peacekeeper1: {
        barrels: [{
          type: 0,
          rot: 180,
          offset: 0,
          width: 0.6,
          length: 0.3,
          distance: 0.3,
          visualType: 1
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.3,
          length: 0.5,
          distance: 0.3
        }]
      },
      abyssling: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 0.9,
          distance: 0
        }, {
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.5,
          length: 0.65,
          distance: 0
        }, {
          type: 2,
          rot: 60,
          offset: 0,
          width: 0.5,
          length: 0.65,
          distance: 0
        }, {
          type: 2,
          rot: -60,
          offset: 0,
          width: 0.5,
          length: 0.65,
          distance: 0
        }, {
          type: 2,
          rot: 120,
          offset: 0,
          width: 0.5,
          length: 0.65,
          distance: 0
        }, {
          type: 2,
          rot: -120,
          offset: 0,
          width: 0.5,
          length: 0.65,
          distance: 0
        }]
      },
      abyssguardian: {
        barrels: [{
          type: 4,
          rot: 180,
          offset: 0,
          width: 0.35,
          length: 0.35,
          distance: 0.6
        }, {
          type: 4,
          rot: 90,
          offset: 0,
          width: 0.35,
          length: 0.35,
          distance: 0.6
        }, {
          type: 4,
          rot: -90,
          offset: 0,
          width: 0.35,
          length: 0.35,
          distance: 0.6
        }, {
          type: 6,
          rot: 0,
          offset: 0,
          width: 0.3,
          length: 0.35,
          distance: 0.6,
          visualType: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.2,
          length: 0.65,
          distance: 0.6,
          visualType: 0
        }, {
          type: 8,
          rot: 45,
          offset: 0,
          width: 0.3,
          length: 0.45,
          distance: 0.4
        }, {
          type: 8,
          rot: -45,
          offset: 0,
          width: 0.3,
          length: 0.45,
          distance: 0.4
        }, {
          type: 8,
          rot: 135,
          offset: 0,
          width: 0.3,
          length: 0.45,
          distance: 0.4
        }, {
          type: 8,
          rot: -135,
          offset: 0,
          width: 0.3,
          length: 0.45,
          distance: 0.4
        }]
      },
      hexagonboss: {
        barrels: [{
          type: 9,
          rot: 60,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 9,
          rot: 180,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 9,
          rot: 300,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }]
      },
      streamliner: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 1.3,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 1.2,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 1.1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 0.7,
          distance: 0
        }]
      },
      mono: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }]
      },
      assassin: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1.25,
          distance: 0
        }]
      },
      split: {
        barrels: [{
          type: 0,
          rot: 35,
          offset: 0,
          width: 0.25,
          length: 0.75,
          distance: 0
        }, {
          type: 0,
          rot: -35,
          offset: 0,
          width: 0.25,
          length: 0.75,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }]
      },
      annihilator: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 1,
          length: 1.1,
          distance: 0
        }]
      },
      spread: {
        barrels: [{
          type: 0,
          rot: -60,
          offset: 0,
          width: 0.25,
          length: 0.7,
          distance: 0
        }, {
          type: 0,
          rot: 60,
          offset: 0,
          width: 0.25,
          length: 0.7,
          distance: 0
        }, {
          type: 0,
          rot: -40,
          offset: 0,
          width: 0.25,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 40,
          offset: 0,
          width: 0.25,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 20,
          offset: 0,
          width: 0.25,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: -20,
          offset: 0,
          width: 0.25,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }]
      },
      disperse: {
        barrels: [{
          type: 0,
          rot: -75,
          offset: 0,
          width: 0.25,
          length: 0.7,
          distance: 0
        }, {
          type: 0,
          rot: 75,
          offset: 0,
          width: 0.25,
          length: 0.7,
          distance: 0
        }, {
          type: 0,
          rot: -60,
          offset: 0,
          width: 0.25,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 60,
          offset: 0,
          width: 0.25,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: -45,
          offset: 0,
          width: 0.25,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: 45,
          offset: 0,
          width: 0.25,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: -30,
          offset: 0,
          width: 0.25,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 30,
          offset: 0,
          width: 0.25,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 15,
          offset: 0,
          width: 0.25,
          length: 1.1,
          distance: 0
        }, {
          type: 0,
          rot: -15,
          offset: 0,
          width: 0.25,
          length: 1.1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1.2,
          distance: 0
        }]
      },
      octo: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 180,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 90,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: -90,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 45,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: -45,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 135,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: -135,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }]
      },
      quadro: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0.65,
          width: 0.3,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: -0.65,
          width: 0.3,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: -0.3,
          width: 0.3,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0.3,
          width: 0.3,
          length: 0.8,
          distance: 0
        }]
      },
      marksman: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1.4,
          distance: 0
        }]
      },
      debris: {
        barrels: [{
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.2,
          length: 0.45,
          distance: 0
        }, {
          type: 2,
          rot: 180,
          offset: 0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 2,
          rot: 180,
          offset: -0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 2,
          rot: 60,
          offset: 0,
          width: 0.2,
          length: 0.45,
          distance: 0
        }, {
          type: 2,
          rot: 60,
          offset: 0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 2,
          rot: 60,
          offset: -0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 2,
          rot: -60,
          offset: 0,
          width: 0.2,
          length: 0.45,
          distance: 0
        }, {
          type: 2,
          rot: -60,
          offset: 0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 2,
          rot: -60,
          offset: -0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }]
      },
      satellite: {
        barrels: [{
          type: 1,
          rot: 180,
          offset: 0,
          width: 0.2,
          length: 0.45,
          distance: 0
        }, {
          type: 1,
          rot: 180,
          offset: 0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 1,
          rot: 180,
          offset: -0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 1,
          rot: 60,
          offset: 0,
          width: 0.2,
          length: 0.45,
          distance: 0
        }, {
          type: 1,
          rot: 60,
          offset: 0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 1,
          rot: 60,
          offset: -0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 1,
          rot: -60,
          offset: 0,
          width: 0.2,
          length: 0.45,
          distance: 0
        }, {
          type: 1,
          rot: -60,
          offset: 0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }, {
          type: 1,
          rot: -60,
          offset: -0.5,
          width: 0.1,
          length: 0.35,
          distance: 0
        }]
      },
      charon: {
        barrels: [{
          type: 2,
          rot: -60,
          offset: 0,
          width: 0.55,
          length: 0.5,
          distance: 0
        }, {
          type: 2,
          rot: 60,
          offset: 0,
          width: 0.55,
          length: 0.5,
          distance: 0
        }, {
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.55,
          length: 0.5,
          distance: 0
        }]
      },
      ganymede: {
        barrels: [{
          type: 4,
          rot: 180,
          offset: 0,
          distance: 0.4,
          width: 0.4,
          length: 0.225
        }, {
          type: 4,
          rot: 60,
          offset: 0,
          distance: 0.4,
          width: 0.4,
          length: 0.225
        }, {
          type: 4,
          rot: -60,
          offset: 0,
          distance: 0.4,
          width: 0.4,
          length: 0.225
        }, {
          type: 5,
          rot: 180,
          offset: -0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15
        }, {
          type: 5,
          rot: 180,
          offset: 0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15
        }, {
          type: 5,
          rot: 60,
          offset: -0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15
        }, {
          type: 5,
          rot: 60,
          offset: 0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15
        }, {
          type: 5,
          rot: -60,
          offset: -0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15
        }, {
          type: 5,
          rot: -60,
          offset: 0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15
        }]
      },
      synope: {
        barrels: [{
          type: 3,
          rot: 180,
          offset: 0,
          width: 0.4,
          length: 0.525,
          distance: 0
        }, {
          type: 3,
          rot: 60,
          offset: 0,
          width: 0.4,
          length: 0.525,
          distance: 0
        }, {
          type: 3,
          rot: -60,
          offset: 0,
          width: 0.4,
          length: 0.525,
          distance: 0
        }]
      },
      minigun: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.2,
          length: 1.2,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: -0.5,
          width: 0.2,
          length: 1.2,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0.5,
          width: 0.2,
          length: 1.2,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: -0.5,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0.5,
          width: 0.2,
          length: 0.8,
          distance: 0
        }]
      },
      amalgam: {
        barrels: [{
          type: 0,
          rot: 0,
          offset: -0.5,
          width: 0.4,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0.5,
          width: 0.4,
          length: 1,
          distance: 0
        }, {
          type: 2,
          rot: 15,
          offset: 0.4,
          width: 0.65,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: -15,
          offset: -0.4,
          width: 0.65,
          length: 0.75,
          distance: 0
        }, {
          type: 1,
          rot: 140,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 1,
          rot: -140,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }]
      },
      wave: {
        barrels: [{
          type: 0,
          rot: -150,
          offset: 0,
          width: 0.5,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: 150,
          offset: 0,
          width: 0.5,
          length: 0.9,
          distance: 0
        }, {
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.65,
          length: 1,
          distance: 0.1
        }, {
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.65,
          length: 1,
          distance: -0.4
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 1,
          distance: 0
        }]
      },
      wake: {
        barrels: [{
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.65,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.4,
          length: 0.9,
          distance: 0
        }, {
          type: 0,
          rot: -140,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 140,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }]
      },
      alpha: {
        barrels: [{
          type: 2,
          rot: 0,
          offset: 0,
          width: 1.5,
          length: 1,
          distance: 0
        }]
      },
      beta: {
        barrels: [{
          type: 2,
          rot: 0,
          offset: 0,
          width: 1,
          length: 1,
          distance: 0
        }]
      },
      pulsar: {
        barrels: [{
          type: 0,
          rot: 180,
          offset: 0.3,
          width: 0.2,
          length: 0.4,
          distance: 0
        }, {
          type: 0,
          rot: 180,
          offset: -0.3,
          width: 0.2,
          length: 0.4,
          distance: 0
        }, {
          type: 0,
          rot: 60,
          offset: 0.3,
          width: 0.2,
          length: 0.4,
          distance: 0
        }, {
          type: 0,
          rot: 60,
          offset: -0.3,
          width: 0.2,
          length: 0.4,
          distance: 0
        }, {
          type: 0,
          rot: -60,
          offset: 0.3,
          width: 0.2,
          length: 0.4,
          distance: 0
        }, {
          type: 0,
          rot: -60,
          offset: -0.3,
          width: 0.2,
          length: 0.4,
          distance: 0
        }]
      },
      engineer: {
        barrels: [{
          type: 8,
          rot: 0,
          offset: 0,
          width: 0.75,
          length: 0.95,
          distance: 0
        }]
      },
      raider: {
        barrels: [{
          type: 8,
          rot: 0,
          offset: 0,
          width: 0.9,
          length: 0.85,
          distance: 0
        }]
      },
      mechanic: {
        barrels: [{
          type: 8,
          rot: 120,
          offset: 0,
          width: 0.55,
          length: 0.85,
          distance: 0
        }, {
          type: 8,
          rot: -120,
          offset: 0,
          width: 0.55,
          length: 0.85,
          distance: 0
        }, {
          type: 8,
          rot: 0,
          offset: 0,
          width: 0.55,
          length: 0.85,
          distance: 0
        }]
      },
      arsenal: {
        barrels: [{
          type: 8,
          rot: 0,
          offset: 0,
          width: 0.6,
          length: 0.95,
          distance: 0.3
        }, {
          type: 8,
          rot: 0,
          offset: 0,
          width: 0.6,
          length: 0.95,
          distance: -0.3
        }]
      },
      shrapnel: {
        barrels: [{
          type: 2,
          rot: 0,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: 180,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: 90,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: -90,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: 45,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: -45,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: 135,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }, {
          type: 2,
          rot: -135,
          offset: 0,
          width: 0.45,
          length: 0.75,
          distance: 0
        }]
      },
      emperor: {
        barrels: [{
          type: 1,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 1,
          rot: 90,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 1,
          rot: -90,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 1,
          rot: -180,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }]
      },
      overlord: {
        barrels: [{
          type: 1,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 1,
          rot: 120,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }, {
          type: 1,
          rot: -120,
          offset: 0,
          width: 0.5,
          length: 0.8,
          distance: 0
        }]
      },
      horizon: {
        barrels: [{
          type: 0,
          rot: 22.5,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: -22.5,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 45,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: -45,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 67.5,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: -67.5,
          offset: 0,
          width: 0.2,
          length: 0.8,
          distance: 0
        }, {
          type: 0,
          rot: 90,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: -90,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }, {
          type: 0,
          rot: 0,
          offset: 0,
          width: 0.5,
          length: 1,
          distance: 0
        }]
      }
    }, "disperse", {
      barrels: [{
        type: 0,
        rot: -75,
        offset: 0,
        width: 0.25,
        length: 0.7,
        distance: 0
      }, {
        type: 0,
        rot: 75,
        offset: 0,
        width: 0.25,
        length: 0.7,
        distance: 0
      }, {
        type: 0,
        rot: -60,
        offset: 0,
        width: 0.25,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 60,
        offset: 0,
        width: 0.25,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: -45,
        offset: 0,
        width: 0.25,
        length: 0.9,
        distance: 0
      }, {
        type: 0,
        rot: 45,
        offset: 0,
        width: 0.25,
        length: 0.9,
        distance: 0
      }, {
        type: 0,
        rot: -30,
        offset: 0,
        width: 0.25,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 30,
        offset: 0,
        width: 0.25,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 15,
        offset: 0,
        width: 0.25,
        length: 1.1,
        distance: 0
      }, {
        type: 0,
        rot: -15,
        offset: 0,
        width: 0.25,
        length: 1.1,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1.2,
        distance: 0
      }]
    });
    H3(kF, "gunner", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: -0.3,
        width: 0.2,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0.3,
        width: 0.2,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: -0.8,
        width: 0.2,
        length: 0.6,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0.8,
        width: 0.2,
        length: 0.6,
        distance: 0
      }]
    });
    H3(kF, "riot", {
      barrels: [{
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0.5
      }, {
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }, {
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: -0.5
      }]
    });
    H3(kF, "barricade", {
      barrels: [{
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0.1
      }, {
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: -0.4
      }]
    });
    H3(kF, "palisade", {
      barrels: [{
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }, {
        type: 2,
        rot: 90,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }, {
        type: 2,
        rot: -90,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }, {
        type: 2,
        rot: -180,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "blazar", {
      barrels: [{
        type: 0,
        rot: 180,
        offset: 0,
        width: 0.35,
        length: 0.5,
        distance: 0
      }, {
        type: 0,
        rot: 60,
        offset: 0,
        width: 0.35,
        length: 0.5,
        distance: 0
      }, {
        type: 0,
        rot: -60,
        offset: 0,
        width: 0.35,
        length: 0.5,
        distance: 0
      }]
    });
    H3(kF, "quasar", {
      barrels: [{
        type: 0,
        rot: 180,
        offset: 0.4,
        distance: 0.1,
        width: 0.2,
        length: 0.35000000000000003
      }, {
        type: 0,
        rot: 180,
        offset: -0.4,
        distance: 0.1,
        width: 0.2,
        length: 0.35000000000000003
      }, {
        type: 0,
        rot: 180,
        offset: 0,
        distance: 0.1,
        width: 0.25,
        length: 0.425
      }, {
        type: 0,
        rot: 60,
        offset: 0.4,
        distance: 0.1,
        width: 0.2,
        length: 0.35000000000000003
      }, {
        type: 0,
        rot: 60,
        offset: -0.4,
        distance: 0.1,
        width: 0.2,
        length: 0.35000000000000003
      }, {
        type: 0,
        rot: 60,
        offset: 0,
        distance: 0.1,
        width: 0.25,
        length: 0.425
      }, {
        type: 0,
        rot: -60,
        offset: 0.4,
        distance: 0.1,
        width: 0.2,
        length: 0.35000000000000003
      }, {
        type: 0,
        rot: -60,
        offset: -0.4,
        distance: 0.1,
        width: 0.2,
        length: 0.35000000000000003
      }, {
        type: 0,
        rot: -60,
        offset: 0,
        distance: 0.1,
        width: 0.25,
        length: 0.425
      }]
    });
    H3(kF, "moon", {
      barrels: [{
        type: 1,
        rot: 180,
        offset: 0,
        width: 0.3,
        length: 0.5,
        distance: 0
      }, {
        type: 1,
        rot: 180,
        offset: 0.3,
        width: 0.1,
        length: 0.3,
        distance: 0
      }, {
        type: 1,
        rot: 180,
        offset: -0.3,
        width: 0.1,
        length: 0.3,
        distance: 0
      }, {
        type: 1,
        rot: 60,
        offset: 0,
        width: 0.3,
        length: 0.5,
        distance: 0
      }, {
        type: 1,
        rot: 60,
        offset: 0.3,
        width: 0.1,
        length: 0.3,
        distance: 0
      }, {
        type: 1,
        rot: 60,
        offset: -0.3,
        width: 0.1,
        length: 0.3,
        distance: 0
      }, {
        type: 1,
        rot: -60,
        offset: 0,
        width: 0.3,
        length: 0.5,
        distance: 0
      }, {
        type: 1,
        rot: -60,
        offset: 0.3,
        width: 0.1,
        length: 0.3,
        distance: 0
      }, {
        type: 1,
        rot: -60,
        offset: -0.3,
        width: 0.1,
        length: 0.3,
        distance: 0
      }]
    });
    H3(kF, "penta", {
      barrels: [{
        type: 0,
        rot: -40,
        offset: 0,
        width: 0.5,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 40,
        offset: 0,
        width: 0.5,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 20,
        offset: 0,
        width: 0.5,
        length: 0.9,
        distance: 0
      }, {
        type: 0,
        rot: -20,
        offset: 0,
        width: 0.5,
        length: 0.9,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "brokenpenta", {
      barrels: [{
        type: 0,
        rot: 40,
        offset: 0,
        width: 0.5,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: -20,
        offset: 0,
        width: 0.5,
        length: 0.9,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: -40,
        offset: 0,
        width: 0.5,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 20,
        offset: 0,
        width: 0.5,
        length: 0.9,
        distance: 0
      }]
    });
    H3(kF, "arc", {
      barrels: [{
        type: 0,
        rot: 45,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: -45,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 90,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: -90,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "manager", {
      barrels: [{
        type: 1,
        rot: 0,
        offset: 0,
        width: 1,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "stockade", {
      barrels: [{
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }, {
        type: 2,
        rot: 120,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }, {
        type: 2,
        rot: -120,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "scrap", {
      barrels: [{
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.45,
        length: 0.75,
        distance: 0
      }, {
        type: 2,
        rot: 180,
        offset: 0,
        width: 0.45,
        length: 0.75,
        distance: 0
      }, {
        type: 2,
        rot: -60,
        offset: 0,
        width: 0.45,
        length: 0.75,
        distance: 0
      }, {
        type: 2,
        rot: 60,
        offset: 0,
        width: 0.45,
        length: 0.75,
        distance: 0
      }, {
        type: 2,
        rot: -120,
        offset: 0,
        width: 0.45,
        length: 0.75,
        distance: 0
      }, {
        type: 2,
        rot: 120,
        offset: 0,
        width: 0.45,
        length: 0.75,
        distance: 0
      }]
    });
    H3(kF, "trio", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: -0.5,
        width: 0.4,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0.5,
        width: 0.4,
        length: 0.8,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.4,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "duo", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: -0.5,
        width: 0.4,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0.5,
        width: 0.4,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "executive", {
      barrels: [{
        type: 1,
        rot: 0,
        offset: 0,
        width: 1.5,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "manufacturer", {
      barrels: [{
        type: 3,
        rot: 0,
        offset: 0,
        width: 0.8,
        length: 1.1,
        distance: 0
      }]
    });
    H3(kF, "factory", {
      barrels: [{
        type: 3,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1.1,
        distance: 0
      }]
    });
    H3(kF, "hatcher", {
      barrels: [{
        type: 3,
        rot: 0,
        offset: 0,
        width: 0.35,
        length: 0.9,
        distance: 0
      }, {
        type: 3,
        rot: 120,
        offset: 0,
        width: 0.35,
        length: 0.9,
        distance: 0
      }, {
        type: 3,
        rot: -120,
        offset: 0,
        width: 0.35,
        length: 0.9,
        distance: 0
      }]
    });
    H3(kF, "industry", {
      barrels: [{
        type: 3,
        rot: 0,
        offset: 0,
        width: 0.35,
        length: 0.9,
        distance: 0
      }, {
        type: 3,
        rot: 120,
        offset: 0,
        width: 0.35,
        length: 0.9,
        distance: 0
      }, {
        type: 3,
        rot: -120,
        offset: 0,
        width: 0.35,
        length: 0.9,
        distance: 0
      }]
    });
    H3(kF, "alloy", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 1,
        rot: 180,
        offset: 0,
        width: 0.5,
        length: 0.8,
        distance: 0
      }]
    });
    H3(kF, "trapper", {
      barrels: [{
        type: 2,
        rot: 0,
        offset: 0,
        width: 0.65,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "hex", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 180,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 60,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: -60,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: 120,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }, {
        type: 0,
        rot: -120,
        offset: 0,
        width: 0.5,
        length: 1,
        distance: 0
      }]
    });
    H3(kF, "machine", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.8,
        length: 1,
        distance: 0,
        visualType: 1
      }]
    });
    H3(kF, "sprayer", {
      barrels: [{
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1.2,
        distance: 0
      }, {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.8,
        length: 1,
        distance: 0,
        visualType: 1
      }]
    });
    var H4 = kF;
    var H5 = {
      peacekeeper3: {
        sides: 3,
        outerSides: 3,
        outerSize: 0.4,
        layers: [{
          offsetX: 0,
          offsetY: 0,
          rot: 0,
          size: 0.7,
          sides: 3,
          outerSides: 0,
          outerSize: 0
        }],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.3,
          baseRot: 0
        }]
      },
      peacekeeper2: {
        sides: 3,
        outerSides: 3,
        outerSize: 0.3,
        layers: [],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.4,
          width: 0.25,
          baseRot: 0
        }]
      },
      peacekeeper1: {
        sides: 3,
        outerSides: 3,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.4,
          width: 0.25,
          baseRot: 0
        }]
      },
      abyssling: {
        sides: 6,
        outerSides: 6,
        outerSize: 0.1,
        layers: [{
          offsetX: 0,
          offsetY: 0,
          rot: 0,
          size: 0.6,
          sides: 6,
          outerSides: 6,
          outerSize: 0.1
        }],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }]
      },
      abyssguardian: {
        sides: 8,
        outerSides: 8,
        outerSize: 0.12,
        layers: [{
          offsetX: 0,
          offsetY: 0,
          rot: 0,
          size: 0.35,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: 0.48,
          offsetY: -0.48,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: 0.48,
          offsetY: 0.48,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: -0.48,
          offsetY: 0.48,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: -0.48,
          offsetY: -0.48,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: -0.68,
          offsetY: 0,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: 0.68,
          offsetY: 0,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: 0,
          offsetY: -0.68,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }, {
          offsetX: 0,
          offsetY: 0.68,
          rot: 0,
          size: 0.15,
          sides: 8,
          outerSides: 8,
          outerSize: 0.06
        }],
        gadgets: [{
          type: 3,
          offsetX: 0,
          offsetY: -0.68,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: 0,
          offsetY: 0.68,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 180,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: -0.48,
          offsetY: 0.48,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 225,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: 0.48,
          offsetY: 0.48,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 135,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: 0.48,
          offsetY: -0.48,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 45,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: -0.48,
          offsetY: -0.48,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 315,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: -0.68,
          offsetY: 0,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 270,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: 0.68,
          offsetY: 0,
          width: 0.1,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 90,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 3,
          offsetX: 0,
          offsetY: 0,
          width: 0.255,
          tank: {
            barrels: [{
              type: 0,
              rot: 0,
              offset: 0,
              width: 0.65,
              length: 1.5,
              distance: 0
            }],
            gadgets: [],
            layers: []
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 0,
          team: 3
        }, {
          type: 2,
          offsetX: 0,
          offsetY: 0,
          width: 0.2,
          rot: 0,
          sides: 8,
          backSides: 0,
          subtype: 2,
          radius: 0,
          alpha: 0.3,
          rotationType: 0,
          showParticles: 0
        }]
      },
      hyperion: {
        sides: 3,
        outerSides: 0,
        outerSize: 0,
        layers: [{
          offsetX: 0,
          offsetY: 0,
          rot: 0,
          size: 0.65,
          sides: 3,
          outerSides: 0,
          outerSize: 0
        }],
        gadgets: [{
          type: 1,
          offsetX: 8.572527594031472e-17,
          offsetY: -0.7,
          width: 0.1,
          rot: 0,
          size: 1
        }, {
          type: 1,
          offsetX: -0.606217782649107,
          offsetY: 0.35000000000000003,
          width: 0.1,
          rot: 60,
          size: 1
        }, {
          type: 1,
          offsetX: 0.606217782649107,
          offsetY: 0.35000000000000003,
          width: 0.1,
          rot: -60,
          size: 1
        }, {
          type: 3,
          offsetX: 0,
          offsetY: 0,
          width: 0.35,
          size: 1,
          tank: {
            barrels: [{
              type: 1,
              rot: -1.0472,
              offset: 0,
              width: 0.8571428571428572,
              length: 0.75,
              distance: 0
            }, {
              type: 1,
              rot: 3.14159,
              offset: 0,
              width: 0.8571428571428572,
              length: 0.75,
              distance: 0
            }, {
              type: 1,
              rot: 1.0472,
              offset: 0,
              width: 0.8571428571428572,
              length: 0.75,
              distance: 0
            }],
            gadgets: [],
            layers: []
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          anchored: 1,
          team: 3
        }]
      },
      riotautocannon: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 3,
          offsetX: 0,
          offsetY: 0,
          width: 0.65,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 2,
              rot: 0,
              offset: 0,
              width: 0.65,
              length: 1,
              distance: 0.5
            }, {
              type: 2,
              rot: 0,
              offset: 0,
              width: 0.65,
              length: 1,
              distance: 0
            }, {
              type: 2,
              rot: 0,
              offset: 0,
              width: 0.65,
              length: 1,
              distance: -0.5
            }]
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          idleBehavior: 0,
          anchored: 0,
          team: 3
        }]
      },
      octoautocannon: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }]
      },
      hexagonboss: {
        sides: 6,
        outerSides: 6,
        outerSize: 0.1,
        layers: [{
          size: 0.5,
          sides: 6,
          outerSides: 6,
          outerSize: 0.1,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: []
      },
      base: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: []
      },
      wall: {
        sides: 6,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: []
      },
      thorn: {
        sides: 0,
        outerSides: 5,
        outerSize: 0.65,
        layers: [],
        gadgets: []
      },
      spike: {
        sides: 0,
        outerSides: 4,
        outerSize: 0.6,
        layers: [],
        gadgets: []
      },
      smasher: {
        sides: 0,
        outerSides: 6,
        outerSize: 0.3,
        layers: [],
        gadgets: []
      },
      bastion: {
        sides: 8,
        outerSides: 5,
        outerSize: 0.55,
        layers: [{
          size: 0.8,
          sides: 6,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.7,
          width: 0.4,
          speed: 1.3,
          baseRot: 0,
          size: 1
        }]
      },
      saw: {
        sides: 0,
        outerSides: 4,
        outerSize: 0.85,
        layers: [],
        gadgets: []
      },
      battleship: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 1,
          rot: 180,
          offsetX: 9.797174393178826e-17,
          offsetY: 0.8,
          width: 0.5,
          size: 1
        }, {
          type: 1,
          rot: 60,
          offsetX: 0.6928203230275509,
          offsetY: -0.40000000000000013,
          width: 0.5,
          size: 1
        }, {
          type: 1,
          rot: -60,
          offsetX: -0.6928203230275509,
          offsetY: -0.40000000000000013,
          width: 0.5,
          size: 1
        }]
      },
      artillery: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.75,
          width: 0.4,
          speed: 1.3,
          baseRot: 0,
          size: 1
        }]
      },
      heliosphere: {
        sides: 3,
        outerSides: 0,
        outerSize: 0,
        layers: [{
          size: 0.6,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: [{
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: -0.7,
          radius: 1.75,
          width: 0.15,
          alpha: 0.2,
          rotationType: 1,
          backSides: 0,
          rot: 0
        }, {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0.6062177826491071,
          offsetY: 0.3499999999999998,
          radius: 1.75,
          width: 0.15,
          alpha: 0.2,
          rotationType: 1,
          backSides: 0,
          rot: 0
        }, {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: -0.6062177826491071,
          offsetY: 0.3499999999999998,
          radius: 1.75,
          width: 0.15,
          alpha: 0.2,
          rotationType: 1,
          backSides: 0,
          rot: 0
        }, {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: 0,
          radius: 2,
          width: 0.1,
          alpha: 0.2,
          rotationType: 1,
          backSides: 0,
          rot: 0
        }, {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: 0,
          radius: 4,
          width: 0.3,
          rotationType: 1,
          alpha: 0.3,
          backSides: 0,
          rot: 0
        }]
      },
      galaxy: {
        sides: 3,
        outerSides: 0,
        outerSize: 0,
        layers: [{
          size: 0.6,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: -0.7,
          length: 0.15,
          width: 0.075,
          baseRot: 0,
          idleBehavior: 1,
          speed: 1,
          size: 1
        }, {
          type: 0,
          offsetX: 0.6062177826491071,
          offsetY: 0.3499999999999998,
          length: 0.15,
          width: 0.075,
          baseRot: 120,
          idleBehavior: 1,
          speed: 1,
          size: 1
        }, {
          type: 0,
          offsetX: -0.6062177826491071,
          offsetY: 0.3499999999999998,
          length: 0.15,
          width: 0.075,
          baseRot: -120,
          idleBehavior: 1,
          speed: 1,
          size: 1
        }, {
          type: 0,
          offsetX: 0.3031088913245535,
          offsetY: -0.17500000000000002,
          length: 0.15,
          width: 0.075,
          baseRot: 60,
          idleBehavior: 1,
          speed: 1,
          size: 1
        }, {
          type: 0,
          offsetX: -0.3031088913245535,
          offsetY: -0.17500000000000002,
          length: 0.15,
          width: 0.075,
          baseRot: -60,
          idleBehavior: 1,
          speed: 1,
          size: 1
        }, {
          type: 0,
          offsetX: 4.286263797015736e-17,
          offsetY: 0.35,
          length: 0.15,
          width: 0.075,
          baseRot: 180,
          idleBehavior: 1,
          speed: 1,
          size: 1
        }, {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.35,
          width: 0.2,
          speed: 1.25,
          baseRot: 0,
          size: 1
        }]
      },
      cygnus: {
        sides: 3,
        outerSides: 0,
        outerSize: 0,
        layers: [{
          size: 0.6,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: [{
          type: 2,
          sides: 8,
          subtype: 1,
          offsetX: 0,
          offsetY: 0,
          radius: 6.5,
          width: 0.5,
          rotationType: 1,
          alpha: 0.3,
          backSides: 0,
          rot: 0
        }]
      },
      comet: {
        sides: 3,
        outerSides: 3,
        outerSize: 0.2,
        layers: [{
          size: 0.35,
          sides: 3,
          outerSides: -3,
          outerSize: 0.5,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: []
      },
      ziggurat: {
        sides: 8,
        outerSides: 0,
        outerSize: 0,
        layers: [{
          size: 0.7,
          sides: 6,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }, {
          size: 0.4,
          sides: 4,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: []
      },
      chasm: {
        sides: 3,
        outerSides: 3,
        outerSize: 0.3,
        layers: [{
          size: 0.8,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }, {
          size: 0.4,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: []
      },
      andromeda: {
        sides: 3,
        outerSides: 3,
        outerSize: 0.15,
        layers: [{
          size: 0.7,
          sides: 3,
          outerSides: 3,
          outerSize: 0.15,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }, {
          size: 0.3,
          sides: 3,
          outerSides: 3,
          outerSize: 0.15,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: [{
          type: 2,
          sides: 3,
          backSides: 3,
          subtype: 2,
          offsetX: 0,
          offsetY: 0,
          radius: 3,
          width: 0.3,
          rotationType: 0,
          alpha: 0.3,
          rot: 0
        }]
      },
      void: {
        sides: 3,
        outerSides: 3,
        outerSize: 0.5,
        layers: [{
          size: 0.8,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }, {
          size: 0.4,
          sides: 3,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: []
      },
      mothership: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 1,
          rot: 45,
          offsetX: 0.565685424949238,
          offsetY: -0.5656854249492381,
          width: 0.5,
          speed: 1,
          size: 1
        }, {
          type: 1,
          rot: -45,
          offsetX: -0.565685424949238,
          offsetY: -0.5656854249492381,
          width: 0.5,
          speed: 1,
          size: 1
        }, {
          type: 1,
          rot: 135,
          offsetX: 0.5656854249492381,
          offsetY: 0.565685424949238,
          width: 0.5,
          speed: 1,
          size: 1
        }, {
          type: 1,
          rot: -135,
          offsetX: -0.5656854249492381,
          offsetY: 0.565685424949238,
          width: 0.5,
          speed: 1,
          size: 1
        }]
      },
      flare: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: 0,
          radius: 7,
          width: 0.8,
          rotationType: 1,
          alpha: 0.3,
          backSides: 0,
          rot: 0,
          showParticles: 0
        }]
      },
      bombard: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 1,
          width: 0.5,
          speed: 1.3,
          baseRot: 0,
          size: 1
        }]
      },
      fabricator: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 2,
          sides: 8,
          subtype: 1,
          offsetX: 0,
          offsetY: 0,
          radius: 8,
          width: 0.9,
          rotationType: 1,
          alpha: 0.3,
          backSides: 0,
          rot: 0,
          showParticles: 0
        }]
      },
      pollux: {
        sides: 3,
        outerSides: 0,
        outerSize: 0,
        layers: [{
          offsetX: 0,
          offsetY: 0,
          rot: 0,
          size: 0.75,
          sides: 3,
          outerSides: 0,
          outerSize: 0
        }],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.4,
          width: 0.25,
          speed: 1.3,
          size: 1,
          baseRot: 0
        }]
      },
      castle: {
        sides: 8,
        outerSides: 8,
        outerSize: 0.3,
        layers: [{
          size: 0.7,
          sides: 8,
          outerSides: 0,
          outerSize: 0,
          rot: 0,
          offsetX: 0,
          offsetY: 0
        }],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.6,
          width: 0.35,
          speed: 1,
          baseRot: 0,
          size: 1
        }]
      },
      inferno: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: 0,
          radius: 8,
          width: 0.9,
          rotationType: 1,
          alpha: 0.3,
          backSides: 0,
          rot: 0,
          showParticles: 0
        }]
      },
      quadruplet: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 3,
          offsetX: 0,
          offsetY: 0,
          width: 0.65,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: 0.65,
              width: 0.3,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: -0.65,
              width: 0.3,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: -0.3,
              width: 0.3,
              length: 0.8,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.3,
              width: 0.3,
              length: 0.8,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          idleBehavior: 0,
          anchored: 0,
          team: 3
        }]
      },
      triplet: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 3,
          offsetX: 0,
          offsetY: 0,
          width: 0.6,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 0.8,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 0.8,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          idleBehavior: 0,
          anchored: 0,
          team: 3
        }]
      },
      turret: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 3,
          offsetX: 0,
          offsetY: 0,
          width: 0.5,
          tank: {
            gadgets: [],
            layers: [],
            barrels: [{
              type: 0,
              rot: 0,
              offset: -0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }, {
              type: 0,
              rot: 0,
              offset: 0.5,
              width: 0.4,
              length: 1,
              distance: 0
            }]
          },
          rotationType: 1,
          baseRot: 0,
          sides: 0,
          outerSides: 0,
          outerSize: 0,
          idleBehavior: 0,
          anchored: 0,
          team: 3
        }]
      },
      sentry: {
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        layers: [],
        gadgets: [{
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.5,
          width: 0.25,
          baseRot: 0
        }]
      },
      fortress: {
        sides: 6,
        outerSides: 6,
        outerSize: 0.3,
        layers: [],
        gadgets: []
      }
    };
    var H6 = Math.random() * 360;
    var H7 = {
      default: {
        tanks: [{
          x: 0,
          y: 0,
          size: 40,
          d: 135,
          color: i9.k[0],
          weapon: "split",
          body: "wall"
        }, {
          x: 400,
          y: 100,
          size: 30,
          d: -68,
          color: i9.k[1],
          weapon: "mono",
          body: "base"
        }, {
          x: -700,
          y: -100,
          size: 60,
          d: 74,
          color: i9.k[2],
          weapon: "annihilator",
          body: "ziggurat"
        }, {
          x: 400,
          y: -500,
          size: 60,
          d: 28,
          color: i9.k[3],
          weapon: "octo",
          body: "bastion",
          autoCannonRot: [-45]
        }, {
          x: -200,
          y: 600,
          size: 50,
          d: 10,
          color: "#c0c0c0",
          weapon: "spread",
          body: "artillery",
          autoCannonRot: [170]
        }, {
          x: -900,
          y: -800,
          size: 60,
          d: 69,
          color: i9.k[1],
          weapon: "marksman",
          body: "saw"
        }, {
          x: 900,
          y: 200,
          size: 100,
          d: 69,
          color: "#f177dd",
          weapon: "debris",
          body: "chasm"
        }, {
          x: -1100,
          y: 1000,
          size: 120,
          d: 69,
          color: "#f177dd",
          weapon: "satellite",
          body: "heliosphere"
        }],
        polygons: [{
          x: 200,
          y: -300,
          level: 4,
          d: 32
        }, {
          x: 500,
          y: 750,
          level: 4,
          d: 89
        }, {
          x: -150,
          y: -250,
          level: 3,
          d: 57
        }, {
          x: -170,
          y: 800,
          level: 3,
          d: -57
        }, {
          x: -750,
          y: -600,
          level: 3,
          d: -98
        }, {
          x: -690,
          y: 100,
          level: 2,
          d: -23
        }, {
          x: -600,
          y: 180,
          level: 2,
          d: 85
        }, {
          x: 420,
          y: 520,
          level: 2,
          d: 85
        }, {
          x: 700,
          y: 700,
          level: 2,
          d: -74
        }, {
          x: 650,
          y: -700,
          level: 2,
          d: 40
        }, {
          x: 770,
          y: -90,
          level: 2,
          d: 40
        }, {
          x: -630,
          y: 670,
          level: 1,
          d: 40
        }, {
          x: -680,
          y: 600,
          level: 1,
          d: 74
        }, {
          x: -250,
          y: 1580,
          level: 1,
          d: -6
        }, {
          x: -200,
          y: 1500,
          level: 1,
          d: -49
        }, {
          x: 910,
          y: 40,
          level: 1,
          d: -49
        }, {
          x: -910,
          y: 310,
          level: 1,
          d: 32
        }, {
          x: -160,
          y: 400,
          level: 1,
          d: 74
        }, {
          x: -100,
          y: 50,
          level: 0,
          d: 32
        }, {
          x: 500,
          y: -870,
          level: 0,
          d: 79
        }, {
          x: -300,
          y: -800,
          level: 0,
          d: -82
        }, {
          x: -500,
          y: 800,
          level: 0,
          d: 4
        }, {
          x: 800,
          y: 850,
          level: 0,
          d: 2
        }, {
          x: -200,
          y: 200,
          level: 0,
          d: -32
        }, {
          x: -500,
          y: 300,
          level: 0,
          d: -32
        }, {
          x: 500,
          y: 280,
          level: 0,
          d: -84
        }, {
          x: -650,
          y: -280,
          level: 0,
          d: -84
        }, {
          x: -600,
          y: -270,
          level: 0,
          d: -24
        }, {
          x: 580,
          y: -320,
          level: 0,
          d: -24
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            particles: [{
              spawnrate: 0,
              speed: {
                min: 0,
                max: 0
              },
              d: {
                min: 0,
                max: 360
              },
              size: {
                min: 6,
                max: 6
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#CDCDCD",
                max: "#C8C8C8"
              }
            }]
          },
          bases: [],
          walls: [],
          gates: [],
          mapSize: 1500,
          trueMapSize: 1
        }
      },
      10: {
        polygons: [{
          x: -680,
          y: -220,
          d: 23,
          level: 2
        }, {
          x: 680,
          y: 520,
          d: 98,
          level: 2
        }, {
          x: -820,
          y: 500,
          d: 5,
          level: 0
        }, {
          x: -880,
          y: -420,
          d: 156,
          level: 0
        }, {
          x: -680,
          y: 1020,
          d: 23,
          level: 0
        }, {
          x: -780,
          y: 1090,
          d: 89,
          level: 0
        }, {
          x: -780,
          y: 890,
          d: 156,
          level: 1
        }, {
          x: 880,
          y: -620,
          d: 98,
          level: 7
        }, {
          x: 180,
          y: -920,
          d: 8,
          level: 6
        }, {
          x: 1280,
          y: -120,
          d: 49,
          level: 5
        }, {
          x: 900,
          y: 230,
          d: 156,
          level: 4
        }, {
          x: -200,
          y: -220,
          d: 8,
          level: 3
        }, {
          x: 200,
          y: -520,
          d: 98,
          level: 3
        }, {
          x: 600,
          y: -1020,
          d: 32,
          level: 3
        }, {
          x: -200,
          y: -720,
          d: 156,
          level: 2
        }],
        tanks: [{
          x: 100,
          y: -50,
          size: 36,
          d: -76,
          color: i9.k[0],
          weapon: "split",
          body: "wall"
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            particles: [{
              spawnrate: 0,
              speed: {
                min: 0,
                max: 0
              },
              d: {
                min: 0,
                max: 360
              },
              size: {
                min: 6,
                max: 6
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#CDCDCD",
                max: "#C8C8C8"
              }
            }]
          },
          bases: [{
            width: 0.4,
            height: 0.4,
            x: 0.2,
            y: 0.2,
            team: 24
          }],
          walls: [],
          gates: [],
          mapSize: 9000,
          trueMapSize: 1
        }
      },
      3: {
        tanks: [{
          x: -800,
          y: -300,
          size: 36,
          d: 59,
          color: i9.k[0],
          weapon: "split",
          body: "wall"
        }, {
          x: -350,
          y: 20,
          size: 34,
          d: 97,
          color: i9.k[0],
          weapon: "duo",
          body: "turret",
          autoCannonRot: [95]
        }, {
          x: -630,
          y: -450,
          size: 46,
          d: 52,
          color: i9.k[0],
          weapon: "horizon",
          body: "fabricator"
        }, {
          x: -1030,
          y: 1050,
          size: 45,
          d: 128,
          color: i9.k[0],
          weapon: "engineer",
          body: "castle",
          autoCannonRot: [-153]
        }, {
          x: -150,
          y: -20,
          size: 53,
          d: 84,
          color: i9.k[0],
          weapon: "streamliner",
          body: "saw"
        }, {
          x: -200,
          y: 180,
          size: 48,
          d: 96,
          color: i9.k[0],
          weapon: "quadro",
          body: "ziggurat"
        }, {
          x: -190,
          y: -200,
          size: 51,
          d: 79,
          color: i9.k[0],
          weapon: "annihilator",
          body: "bastion",
          autoCannonRot: [86]
        }, {
          x: -400,
          y: -500,
          size: 45,
          d: 79,
          color: i9.k[0],
          weapon: "emperor",
          body: "mothership"
        }, {
          x: -300,
          y: 260,
          size: 45,
          d: 67,
          color: i9.k[0],
          weapon: "manager",
          body: "castle",
          autoCannonRot: [108]
        }, {
          x: -300,
          y: 400,
          size: 42,
          d: 114,
          color: i9.k[0],
          weapon: "wake",
          body: "thorn"
        }, {
          x: -600,
          y: 500,
          size: 53,
          d: 114,
          color: i9.k[0],
          weapon: "executive",
          body: "ziggurat"
        }, {
          x: -1000,
          y: 400,
          size: 48,
          d: 112,
          color: i9.k[0],
          weapon: "marksman",
          body: "saw"
        }, {
          x: -1100,
          y: -200,
          size: 48,
          d: 85,
          color: i9.k[0],
          weapon: "assassin",
          body: "thorn"
        }, {
          x: -300,
          y: -400,
          size: 42,
          d: 114,
          color: i9.k[0],
          weapon: "gunner",
          body: "artillery",
          autoCannonRot: [68]
        }, {
          x: -390,
          y: -150,
          size: 42,
          d: 78,
          color: i9.k[0],
          weapon: "beta",
          body: "thorn"
        }, {
          x: -590,
          y: 20,
          size: 46,
          d: 99,
          color: i9.k[0],
          weapon: "octo",
          body: "quadruplet",
          autoCannonRot: [-153, -77, -9, -2]
        }, {
          x: 1200,
          y: -50,
          size: 60,
          d: -96,
          color: i9.k[1],
          weapon: "riot",
          body: "inferno"
        }, {
          x: 150,
          y: 20,
          size: 53,
          d: -96,
          color: i9.k[1],
          weapon: "alpha",
          body: "saw"
        }, {
          x: 150,
          y: -180,
          size: 53,
          d: -79,
          color: i9.k[1],
          weapon: "minigun",
          body: "ziggurat"
        }, {
          x: 190,
          y: 180,
          size: 53,
          d: -98,
          color: i9.k[1],
          weapon: "amalgam",
          body: "bastion"
        }, {
          x: 500,
          y: 100,
          size: 49,
          d: -153,
          color: i9.k[1],
          weapon: "palisade",
          body: "bombard",
          autoCannonRot: [-102]
        }, {
          x: 500,
          y: -200,
          size: 39,
          d: -93,
          color: i9.k[1],
          weapon: "trio",
          body: "triplet",
          autoCannonRot: [167]
        }, {
          x: 600,
          y: 230,
          size: 42,
          d: -68,
          color: i9.k[1],
          weapon: "stockade",
          body: "artillery",
          autoCannonRot: [-116]
        }, {
          x: 300,
          y: 400,
          size: 48,
          d: 79,
          color: i9.k[1],
          weapon: "penta",
          body: "saw"
        }, {
          x: 300,
          y: -400,
          size: 42,
          d: -63,
          color: i9.k[1],
          weapon: "arc",
          body: "artillery",
          autoCannonRot: [-98]
        }, {
          x: 150,
          y: -600,
          size: 52,
          d: -29,
          color: i9.k[1],
          weapon: "marksman",
          body: "bombard",
          autoCannonRot: [-73]
        }, {
          x: 1000,
          y: 600,
          size: 50,
          d: -101,
          color: i9.k[1],
          weapon: "marksman",
          body: "saw"
        }, {
          x: 150,
          y: 600,
          size: 40,
          d: -136,
          color: i9.k[1],
          weapon: "assassin",
          body: "artillery",
          autoCannonRot: [-119]
        }],
        polygons: [{
          x: -680,
          y: -220,
          d: 98,
          level: 2
        }, {
          x: -950,
          y: -520,
          d: 98,
          level: 1
        }, {
          x: -1020,
          y: -560,
          d: 42,
          level: 1
        }, {
          x: -1000,
          y: -460,
          d: 42,
          level: 0
        }, {
          x: -950,
          y: 100,
          d: -101,
          level: 5
        }, {
          x: -600,
          y: 250,
          d: 77,
          level: 4
        }, {
          x: -400,
          y: 1000,
          d: 77,
          level: 7
        }, {
          x: 1000,
          y: 2000,
          d: 77,
          level: 10
        }, {
          x: 650,
          y: -600,
          d: -80,
          level: 6
        }, {
          x: 580,
          y: 650,
          d: -80,
          level: 4
        }, {
          x: -1050,
          y: 720,
          d: 98,
          level: 1
        }, {
          x: -1080,
          y: 820,
          d: 161,
          level: 1
        }, {
          x: -1120,
          y: 760,
          d: 42,
          level: 0
        }, {
          x: -1100,
          y: 660,
          d: 42,
          level: 0
        }, {
          x: -800,
          y: -1500,
          d: 77,
          level: 9
        }, {
          x: 800,
          y: -1500,
          d: 149,
          level: 8
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            particles: [{
              spawnrate: 0,
              speed: {
                min: 0,
                max: 0
              },
              d: {
                min: 0,
                max: 360
              },
              size: {
                min: 6,
                max: 6
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#CDCDCD",
                max: "#C8C8C8"
              }
            }]
          },
          bases: [],
          walls: [],
          gates: [],
          mapSize: 1500,
          trueMapSize: 1
        }
      },
      2: {
        polygons: [{
          x: -680,
          y: -220,
          d: 23,
          level: 2
        }, {
          x: 680,
          y: 520,
          d: 98,
          level: 2
        }, {
          x: -820,
          y: 500,
          d: 5,
          level: 0
        }, {
          x: -880,
          y: -420,
          d: 156,
          level: 0
        }, {
          x: -680,
          y: 1020,
          d: 23,
          level: 0
        }, {
          x: -780,
          y: 1090,
          d: 89,
          level: 0
        }, {
          x: -780,
          y: 890,
          d: 156,
          level: 1
        }, {
          x: 880,
          y: -620,
          d: 98,
          level: 7
        }, {
          x: 180,
          y: -920,
          d: 8,
          level: 6
        }, {
          x: 1280,
          y: -120,
          d: 49,
          level: 5
        }, {
          x: 900,
          y: 230,
          d: 156,
          level: 4
        }, {
          x: -200,
          y: -220,
          d: 8,
          level: 3
        }, {
          x: 200,
          y: -520,
          d: 98,
          level: 3
        }, {
          x: 600,
          y: -1020,
          d: 32,
          level: 3
        }, {
          x: -200,
          y: -720,
          d: 156,
          level: 2
        }],
        tanks: [{
          x: -1100,
          y: -500,
          size: 36,
          d: -76,
          color: i9.k[0],
          weapon: "split",
          body: "wall"
        }, {
          x: 1000,
          y: -100,
          size: 45,
          d: 81,
          color: "#c0c0c0",
          weapon: "hex",
          body: "base"
        }, {
          x: -200,
          y: -1150,
          size: 45,
          d: 52,
          color: "#c0c0c0",
          weapon: "sprayer",
          body: "base"
        }, {
          x: 900,
          y: 650,
          size: 30,
          d: 95,
          color: i9.k[0],
          weapon: "factory",
          body: "base"
        }, {
          x: 450,
          y: -400,
          size: 52,
          d: 104,
          color: i9.k[0],
          weapon: "riot",
          body: "riotautocannon",
          autoCannonRot: [-107]
        }, {
          x: 0,
          y: -0,
          size: 30,
          d: -25,
          color: i9.k[0],
          weapon: "octo",
          body: "octoautocannon",
          autoCannonRot: [75, 165, 255, 345, 210, 120, 300, 30]
        }, {
          x: -1500,
          y: 1500,
          size: 46,
          d: 129,
          color: i9.k[0],
          weapon: "brokenpenta",
          body: "base"
        }, {
          x: 1100,
          y: -1150,
          size: 132,
          d: -50,
          color: i9.a[3],
          weapon: "hexagonboss",
          body: "hexagonboss"
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            particles: [{
              spawnrate: 0,
              speed: {
                min: 0,
                max: 0
              },
              d: {
                min: 0,
                max: 360
              },
              size: {
                min: 6,
                max: 6
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#CDCDCD",
                max: "#C8C8C8"
              }
            }]
          },
          bases: [{
            width: 0.5,
            height: 0.5,
            x: 0.2,
            y: 0.2,
            team: 10
          }],
          walls: [],
          gates: [],
          mapSize: 9000,
          trueMapSize: 1
        }
      },
      1: {
        tanks: [{
          x: 400,
          y: -300,
          size: 51,
          d: -57,
          color: i9.k[0],
          weapon: "arsenal",
          body: "ziggurat"
        }, {
          x: 300,
          y: -330,
          size: 42,
          d: -44,
          color: i9.k[0],
          weapon: "spread",
          body: "triplet",
          autoCannonRot: [-44]
        }, {
          x: 700,
          y: -200,
          size: 51,
          d: -83,
          color: i9.k[0],
          weapon: "manufacturer",
          body: "saw"
        }, {
          x: 600,
          y: -500,
          size: 36,
          d: -156,
          color: i9.k[0],
          weapon: "split",
          body: "wall"
        }, {
          x: 600,
          y: -500,
          size: 36,
          d: -156,
          color: i9.k[0],
          weapon: "split",
          body: "wall"
        }, {
          x: 1200,
          y: -700,
          size: 55,
          d: -69,
          color: i9.k[0],
          weapon: "marksman",
          body: "saw"
        }, {
          x: -350,
          y: -280,
          size: 51,
          d: 94,
          color: i9.k[1],
          weapon: "palisade",
          body: "bombard",
          autoCannonRot: [53]
        }, {
          x: -750,
          y: -480,
          size: 54,
          d: -53,
          color: i9.k[1],
          weapon: "penta",
          body: "saw",
          autoCannonRot: [53]
        }, {
          x: -50,
          y: -580,
          size: 42,
          d: 8,
          color: i9.k[1],
          weapon: "assassin",
          body: "artillery",
          autoCannonRot: [53]
        }, {
          x: -150,
          y: -400,
          size: 42,
          d: 21,
          color: i9.k[1],
          weapon: "trio",
          body: "castle",
          autoCannonRot: [53]
        }, {
          x: -1100,
          y: -500,
          size: 56,
          d: -111,
          color: i9.k[1],
          weapon: "disperse",
          body: "bombard",
          autoCannonRot: [-121]
        }, {
          x: 380,
          y: 370,
          size: 51,
          d: 128,
          color: i9.k[2],
          weapon: "shrapnel",
          body: "inferno",
          autoCannonRot: [53]
        }, {
          x: 230,
          y: 470,
          size: 42,
          d: 179,
          color: i9.k[2],
          weapon: "overlord",
          body: "battleship",
          autoCannonRot: [53]
        }, {
          x: 530,
          y: 770,
          size: 53,
          d: -103,
          color: i9.k[2],
          weapon: "wave",
          body: "saw",
          autoCannonRot: [53]
        }, {
          x: 430,
          y: 220,
          size: 41,
          d: -103,
          color: i9.k[2],
          weapon: "gunner",
          body: "artillery",
          autoCannonRot: [143]
        }, {
          x: 380,
          y: 120,
          size: 30,
          d: -103,
          color: i9.k[2],
          weapon: "trapper",
          body: "smasher",
          autoCannonRot: [143]
        }, {
          x: 1100,
          y: 780,
          size: 60,
          d: -23,
          color: i9.k[2],
          weapon: "annihilator",
          body: "saw"
        }, {
          x: -420,
          y: 340,
          size: 51,
          d: 128,
          color: i9.k[3],
          weapon: "riot",
          body: "saw",
          autoCannonRot: [53]
        }, {
          x: -470,
          y: 180,
          size: 46,
          d: 100,
          color: i9.k[3],
          weapon: "annihilator",
          body: "bombard",
          autoCannonRot: [163]
        }, {
          x: -670,
          y: 780,
          size: 56,
          d: 100,
          color: i9.k[3],
          weapon: "marksman",
          body: "bastion",
          autoCannonRot: [163]
        }, {
          x: -220,
          y: 380,
          size: 36,
          d: 124,
          color: i9.k[3],
          weapon: "alloy",
          body: "fortress"
        }, {
          x: -820,
          y: 120,
          size: 31,
          d: 168,
          color: i9.k[3],
          weapon: "mono",
          body: "sentry",
          autoCannonRot: [163]
        }, {
          x: -1080,
          y: 520,
          size: 52,
          d: -73,
          color: i9.k[3],
          weapon: "horizon",
          body: "ziggurat"
        }, {
          x: 1000,
          y: 1100,
          size: 122,
          d: -131,
          color: "#f177dd",
          weapon: "synope",
          body: "void"
        }],
        polygons: [{
          x: 0,
          y: 0,
          d: 98,
          level: 7
        }, {
          x: -800,
          y: -50,
          d: 98,
          level: 4
        }, {
          x: 480,
          y: -750,
          d: 130,
          level: 5
        }, {
          x: 250,
          y: -810,
          d: 130,
          level: 2
        }, {
          x: 20,
          y: 1050,
          d: 72,
          level: 6
        }, {
          x: -420,
          y: -920,
          d: -111,
          level: 6
        }, {
          x: 920,
          y: 650,
          d: -111,
          level: 3
        }, {
          x: 970,
          y: 520,
          d: 23,
          level: 2
        }, {
          x: -100,
          y: -900,
          d: 86,
          level: 3
        }, {
          x: -300,
          y: 900,
          d: 86,
          level: 2
        }, {
          x: -340,
          y: 1000,
          d: 98,
          level: 1
        }, {
          x: -440,
          y: 950,
          d: 123,
          level: 0
        }, {
          x: -540,
          y: 1010,
          d: 23,
          level: 0
        }, {
          x: 850,
          y: 20,
          d: 111,
          level: 2
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            particles: [{
              spawnrate: 0,
              speed: {
                min: 0,
                max: 0
              },
              d: {
                min: 0,
                max: 360
              },
              size: {
                min: 6,
                max: 6
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#CDCDCD",
                max: "#C8C8C8"
              }
            }]
          },
          bases: [],
          walls: [],
          gates: [],
          mapSize: 1500,
          trueMapSize: 1
        }
      },
      0: {
        tanks: [{
          x: -800,
          y: -500,
          size: 36,
          d: 59,
          color: i9.k[1],
          weapon: "split",
          body: "wall"
        }, {
          x: -1000,
          y: -650,
          size: 42,
          d: 59,
          color: i9.k[1],
          weapon: "beta",
          body: "thorn"
        }, {
          x: -600,
          y: 150,
          size: 50,
          d: 110,
          color: i9.k[1],
          weapon: "alpha",
          body: "saw"
        }, {
          x: -150,
          y: -600,
          size: 50,
          d: 19,
          color: i9.k[1],
          weapon: "annihilator",
          body: "ziggurat"
        }, {
          x: 500,
          y: 300,
          size: 45,
          d: 19,
          color: i9.k[1],
          weapon: "emperor",
          body: "mothership"
        }, {
          x: 850,
          y: 200,
          size: 53,
          d: -70,
          color: i9.k[1],
          weapon: "wave",
          body: "saw"
        }, {
          x: 50,
          y: 600,
          size: 40,
          d: 171,
          color: i9.k[1],
          weapon: "barricade",
          body: "flare"
        }, {
          x: 450,
          y: -500,
          size: 53,
          d: -102,
          color: i9.k[1],
          weapon: "disperse",
          body: "ziggurat"
        }, {
          x: -900,
          y: 600,
          size: 53,
          d: 118,
          color: i9.k[1],
          weapon: "marksman",
          body: "saw"
        }, {
          x: 1000,
          y: 500,
          size: 53,
          d: -108,
          color: i9.k[1],
          weapon: "marksman",
          body: "bastion",
          autoCannonRot: [-153]
        }, {
          x: 1200,
          y: -600,
          size: 53,
          d: -121,
          color: i9.k[1],
          weapon: "palisade",
          body: "bombard",
          autoCannonRot: [-61]
        }, {
          x: 0,
          y: 0,
          size: 100,
          d: 10,
          color: "#f177dd",
          weapon: "pulsar",
          body: "chasm"
        }, {
          x: -700,
          y: -900,
          size: 122,
          d: 10,
          color: "#f177dd",
          weapon: "blazar",
          body: "pollux",
          autoCannonRot: [58]
        }, {
          x: -100,
          y: -1100,
          size: 122,
          d: 47,
          color: "#f177dd",
          weapon: "synope",
          body: "void"
        }, {
          x: 600,
          y: -950,
          size: 122,
          d: 150,
          color: "#f177dd",
          weapon: "charon",
          body: "comet"
        }, {
          x: 700,
          y: 950,
          size: 122,
          d: 150,
          color: "#f177dd",
          weapon: "moon",
          body: "void"
        }, {
          x: -300,
          y: 900,
          size: 122,
          d: -35,
          color: "#f177dd",
          weapon: "quasar",
          body: "galaxy",
          autoCannonRot: [136, 136, 136, 136, 136, 136, -21]
        }],
        polygons: [{
          x: -1200,
          y: 100,
          level: 7,
          d: 127
        }, {
          x: 700,
          y: -200,
          level: 6,
          d: 32
        }, {
          x: -650,
          y: -150,
          level: 5,
          d: 172
        }, {
          x: -250,
          y: -50,
          level: 1,
          d: 172
        }, {
          x: -300,
          y: 10,
          level: 0,
          d: -120
        }, {
          x: -330,
          y: -70,
          level: 1,
          d: 114
        }, {
          x: 250,
          y: -200,
          level: 3,
          d: 18
        }, {
          x: 150,
          y: 800,
          level: 2,
          d: 114
        }, {
          x: -450,
          y: -550,
          level: 4,
          d: -64
        }, {
          x: -680,
          y: -420,
          level: 2,
          d: -64
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            particles: [{
              spawnrate: 0,
              speed: {
                min: 0,
                max: 0
              },
              d: {
                min: 0,
                max: 360
              },
              size: {
                min: 6,
                max: 6
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#CDCDCD",
                max: "#C8C8C8"
              }
            }]
          },
          bases: [],
          walls: [],
          gates: [],
          mapSize: 1500,
          trueMapSize: 1
        }
      },
      "-1": {
        polygons: [],
        tanks: [{
          x: 0,
          y: 0,
          size: 400,
          d: 135,
          color: "#f177dd",
          weapon: "ganymede",
          body: "andromeda"
        }, {
          x: 900,
          y: 200,
          size: 100,
          d: 69,
          color: "#f177dd",
          weapon: "debris",
          body: "chasm"
        }, {
          x: -700,
          y: -600,
          size: 120,
          d: 35,
          color: "#f177dd",
          weapon: "satellite",
          body: "galaxy"
        }, {
          x: -840,
          y: 400,
          size: 120,
          d: -72,
          color: "#f177dd",
          weapon: "synope",
          body: "void"
        }],
        dimension: {
          visual: {
            gridSize: 30,
            backgroundColor: "#595959",
            gridColor: "#4E4D4D",
            particles: [{
              spawnrate: 0.5 / 5760000,
              speed: {
                min: 2,
                max: 5
              },
              d: {
                min: 0 + H6,
                max: 90 + H6
              },
              size: {
                min: 4,
                max: 8
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#595959",
                max: "#4E4D4D"
              }
            }]
          },
          bases: [{
            width: 0.5,
            height: 0.5,
            x: 0,
            y: 0,
            team: 2
          }],
          walls: [],
          gates: [],
          mapSize: 3000,
          trueMapSize: 1
        }
      },
      "-2": {
        tanks: [{
          x: 60,
          y: -60,
          size: 54,
          d: 135,
          color: i9.k[0],
          weapon: "disperse",
          body: "ziggurat"
        }, {
          x: -60,
          y: 60,
          size: 54,
          d: 315,
          color: i9.k[0],
          weapon: "minigun",
          body: "quadruplet",
          autoCannonRot: [87]
        }, {
          x: 400,
          y: 100,
          size: 40,
          d: -110,
          color: i9.k[1],
          weapon: "assassin",
          body: "artillery",
          autoCannonRot: [170]
        }, {
          x: -600,
          y: -100,
          size: 62,
          d: 74,
          color: i9.k[2],
          weapon: "annihilator",
          body: "ziggurat"
        }, {
          x: -100,
          y: -450,
          size: 50,
          d: 10,
          color: "#c0c0c0",
          weapon: "spread",
          body: "artillery",
          autoCannonRot: [170]
        }, {
          x: 600,
          y: -600,
          size: 62,
          d: 28,
          color: i9.k[3],
          weapon: "octo",
          body: "bastion",
          autoCannonRot: [-45]
        }, {
          x: 900,
          y: -730,
          size: 60,
          d: -69,
          color: i9.k[1],
          weapon: "marksman",
          body: "saw"
        }, {
          x: 800,
          y: 400,
          size: 150,
          d: 69,
          color: "#f177dd",
          weapon: "charon",
          body: "comet"
        }, {
          x: -700,
          y: -600,
          size: 120,
          d: 35,
          color: "#f177dd",
          weapon: "satellite",
          body: "galaxy"
        }, {
          x: -840,
          y: 400,
          size: 120,
          d: -72,
          color: "#f177dd",
          weapon: "synope",
          body: "void"
        }],
        polygons: [],
        dimension: {
          visual: {
            gridSize: 120,
            showMinimap: false,
            backgroundColor: "#303030",
            gridColor: "#232323",
            wallColor: "#00000054",
            particles: [{
              spawnrate: 7.8125e-8,
              speed: {
                min: 8,
                max: 15
              },
              d: {
                min: 0 + H6,
                max: 90 + H6
              },
              size: {
                min: 40,
                max: 150
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 0.5,
                max: 0.8
              },
              color: {
                min: "#595959",
                max: "#4E4D4D"
              }
            }],
            darkness: {
              intensity: 1,
              alpha: 0.9,
              color: "#000000"
            },
            lights: [{
              x: 0,
              y: 0,
              size: 300,
              d: 0,
              sides: 0,
              transparency: 1
            }, {
              x: 800,
              y: -400,
              size: 180,
              d: 0,
              sides: 0,
              transparency: 0.5
            }, {
              x: -700,
              y: 600,
              size: 180,
              d: 0,
              sides: 0,
              transparency: 0.5
            }, {
              x: -840,
              y: -400,
              size: 225,
              d: 0,
              sides: 0,
              transparency: 0.5
            }, {
              x: 600,
              y: 600,
              size: 180,
              d: 0,
              sides: 0,
              transparency: 0.5
            }]
          },
          bases: [],
          walls: [],
          gates: [],
          mapSize: 3000,
          trueMapSize: 1
        }
      },
      "-4": {
        tanks: [{
          x: -350,
          y: 300,
          size: 54,
          d: 135,
          color: i9.k[0],
          weapon: "disperse",
          body: "ziggurat"
        }, {
          x: -100,
          y: 500,
          size: 54,
          d: 145,
          color: i9.k[0],
          weapon: "minigun",
          body: "quadruplet",
          autoCannonRot: [87]
        }, {
          x: -550,
          y: 50,
          size: 45,
          d: 128,
          color: i9.k[0],
          weapon: "engineer",
          body: "castle",
          autoCannonRot: [-153]
        }, {
          x: -1100,
          y: -50,
          size: 60,
          d: 100,
          color: i9.k[1],
          weapon: "riot",
          body: "saw"
        }, {
          x: -100,
          y: 1000,
          size: 150,
          d: 260,
          color: "#f177dd",
          weapon: "moon",
          body: "hyperion",
          autoCannonRot: [0, 0, 0, 30]
        }, {
          x: -900,
          y: 900,
          size: 150,
          d: 80,
          color: "#f177dd",
          weapon: "quasar",
          body: "void"
        }, {
          x: 500,
          y: 800,
          size: 57,
          d: 19,
          color: i9.k[2],
          weapon: "emperor",
          body: "mothership"
        }, {
          x: 100,
          y: -700,
          size: 114,
          d: -25,
          radiant: 1,
          color: i9.a[0],
          weapon: "abyssling",
          body: "abyssling",
          autoCannonRot: [-5]
        }, {
          x: -1000,
          y: -850,
          size: 114,
          d: -5,
          radiant: 1,
          color: i9.a[0],
          weapon: "abyssling",
          body: "abyssling",
          autoCannonRot: [20]
        }, {
          x: 1000,
          y: 50,
          size: 114,
          d: -80,
          radiant: 1,
          color: i9.a[0],
          weapon: "abyssling",
          body: "abyssling",
          autoCannonRot: [-75]
        }, {
          x: 1100,
          y: 450,
          size: 73,
          d: -92,
          radiant: 1,
          color: i9.a[0],
          weapon: "peacekeeper1",
          body: "peacekeeper1",
          autoCannonRot: [-100]
        }, {
          x: -400,
          y: -720,
          size: 73,
          d: -5,
          radiant: 1,
          color: i9.a[0],
          weapon: "peacekeeper1",
          body: "peacekeeper1",
          autoCannonRot: [5]
        }, {
          x: -550,
          y: -1200,
          size: 84,
          d: -10,
          radiant: 1,
          color: i9.a[0],
          weapon: "peacekeeper2",
          body: "peacekeeper2",
          autoCannonRot: [-15]
        }, {
          x: 1250,
          y: 1000,
          size: 84,
          d: -102,
          radiant: 1,
          color: i9.a[0],
          weapon: "peacekeeper2",
          body: "peacekeeper2",
          autoCannonRot: [-93]
        }, {
          x: 1450,
          y: 100,
          size: 98,
          d: -75,
          radiant: 1,
          color: i9.a[0],
          weapon: "peacekeeper3",
          body: "peacekeeper3",
          autoCannonRot: [-345]
        }, {
          x: 200,
          y: -1350,
          size: 98,
          d: -15,
          radiant: 1,
          color: i9.a[0],
          weapon: "peacekeeper3",
          body: "peacekeeper3",
          autoCannonRot: [-35]
        }, {
          x: 1000,
          y: -800,
          size: 436,
          d: -50,
          radiant: 1,
          color: i9.a[0],
          weapon: "abyssguardian",
          body: "abyssguardian",
          autoCannonRot: [null, null, null, null, null, null, null, null, -45]
        }],
        polygons: [{
          x: -850,
          y: 300,
          d: 98,
          level: 3,
          radiant: 1
        }, {
          x: 1100,
          y: 800,
          d: 41,
          level: 5,
          radiant: 2
        }, {
          x: -1400,
          y: -450,
          d: 98,
          level: 6,
          radiant: 1
        }, {
          x: -300,
          y: 700,
          d: -41,
          level: 4,
          radiant: 1
        }, {
          x: -1200,
          y: 500,
          d: -41,
          level: 5,
          radiant: 0
        }, {
          x: -670,
          y: -200,
          d: -23,
          level: 2,
          radiant: 1
        }, {
          x: 370,
          y: 100,
          d: -23,
          level: 1,
          radiant: 0
        }, {
          x: 450,
          y: 150,
          d: -41,
          level: 1,
          radiant: 1
        }],
        dimension: {
          visual: {
            gridSize: 160,
            backgroundColor: "#141414",
            gridColor: "#212121",
            wallColor: "#00000098",
            particles: [{
              spawnrate: 1 / 5760000,
              speed: {
                min: 3,
                max: 5
              },
              d: {
                min: 175,
                max: 265
              },
              size: {
                min: 4,
                max: 8
              },
              lifetime: {
                min: 30,
                max: 60
              },
              sides: {
                min: 0,
                max: 0
              },
              transparency: {
                min: 1,
                max: 1
              },
              color: {
                min: "#ffffff",
                max: "#0c0c0c"
              },
              radiant: true
            }],
            lights: [{
              x: 0,
              y: 0,
              size: 1000,
              d: 0,
              sides: 0,
              transparency: 1
            }]
          },
          bases: [],
          walls: [],
          gates: [],
          mapSize: 3000,
          trueMapSize: 1
        }
      }
    };
    window.H7 = H7;
    H7.default = H7[11] = H7[12] = H7[10];
    for (var H8 = 0, H9 = Object.values(H4); H8 < H9.length; H8++) {
      var HC;
      var HV = H1(H9[H8].barrels);
      try {
        for (HV.s(); !(HC = HV.n()).done;) {
          var HL = HC.value;
          HL.rot = nV(HL.rot);
        }
      } catch (AN) {
        HV.e(AN);
      } finally {
        HV.f();
      }
    }
    for (var HI = 0, HE = Object.values(H5); HI < HE.length; HI++) {
      var HK;
      var Hk = H1(HE[HI].gadgets);
      try {
        for (Hk.s(); !(HK = Hk.n()).done;) {
          var HH = HK.value;
          HH.rot &&= nV(HH.rot);
          HH.baseRot &&= nV(HH.baseRot);
        }
      } catch (AY) {
        Hk.e(AY);
      } finally {
        Hk.f();
      }
    }
    for (var HZ = 0, HM = Object.values(H7); HZ < HM.length; HZ++) {
      var HJ;
      var HD = HM[HZ];
      var HN = H1(HD.tanks);
      try {
        for (HN.s(); !(HJ = HN.n()).done;) {
          var HY = HJ.value;
          var HO = H4[HY.weapon];
          var HW = H5[HY.body];
          HY.barrels = nC(HO.barrels);
          HY.sides = HW.sides;
          HY.outerSides = HW.outerSides;
          HY.outerSize = HW.outerSize;
          HY.layers = nC(HW.layers);
          HY.gadgets = nC(HW.gadgets);
          HY.d = nV(HY.d);
          HY.autoCannonRot ||= [];
          for (var Hq = 0; Hq < HY.gadgets.length; Hq++) {
            var HA = HY.gadgets[Hq];
            if (HA.type == 0 || HA.type == 3) {
              if (HY.autoCannonRot[Hq] != null) {
                HA.rot = nV(HY.autoCannonRot[Hq]);
              }
            }
          }
        }
      } catch (AO) {
        HN.e(AO);
      } finally {
        HN.f();
      }
      var HS;
      var HU = H1(HD.polygons);
      try {
        for (HU.s(); !(HS = HU.n()).done;) {
          var HP = HS.value;
          HP.d = nV(HP.d);
        }
      } catch (AW) {
        HU.e(AW);
      } finally {
        HU.f();
      }
      HD.rifts ||= [];
      var HR;
      var HQ = H1(HD.rifts);
      try {
        for (HQ.s(); !(HR = HQ.n()).done;) {
          var HB = HR.value;
          HB.d = nV(HB.d);
          HB.y = -HB.y;
        }
      } catch (Aq) {
        HQ.e(Aq);
      } finally {
        HQ.f();
      }
    }
    function HG(AA) {
      HG = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AS) {
        return typeof AS;
      } : function (AS) {
        if (AS && typeof Symbol == "function" && AS.constructor === Symbol && AS !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AS;
        }
      };
      return HG(AA);
    }
    function HT() {
      HT = function () {
        return AA;
      };
      var AA = {};
      var AS = Object.prototype;
      var AU = AS.hasOwnProperty;
      var AP = Object.defineProperty || function (SK, SH, SZ) {
        SK[SH] = SZ.value;
      };
      var AR = typeof Symbol == "function" ? Symbol : {};
      var AQ = AR.iterator || "@@iterator";
      var AB = AR.asyncIterator || "@@asyncIterator";
      var AG = AR.toStringTag || "@@toStringTag";
      function AT(SK, SH, SZ) {
        Object.defineProperty(SK, SH, {
          value: SZ,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SK[SH];
      }
      try {
        AT({}, "");
      } catch (SK) {
        AT = function (SH, SZ, SM) {
          return SH[SZ] = SM;
        };
      }
      function AX(SH, SZ, SM, SJ) {
        var SD = SZ && SZ.prototype instanceof Aj ? SZ : Aj;
        var SN = Object.create(SD.prototype);
        var SY = new SL(SJ || []);
        AP(SN, "_invoke", {
          value: S8(SH, SM, SY)
        });
        return SN;
      }
      function AF(SH, SZ, SM) {
        try {
          return {
            type: "normal",
            arg: SH.call(SZ, SM)
          };
        } catch (SJ) {
          return {
            type: "throw",
            arg: SJ
          };
        }
      }
      AA.wrap = AX;
      var Az = {};
      function Aj() {}
      function S0() {}
      function S1() {}
      var S2 = {};
      AT(S2, AQ, function () {
        return this;
      });
      var S3 = Object.getPrototypeOf;
      var S4 = S3 && S3(S3(SI([])));
      if (S4 && S4 !== AS && AU.call(S4, AQ)) {
        S2 = S4;
      }
      var S5 = S1.prototype = Aj.prototype = Object.create(S2);
      function S6(SH) {
        ["next", "throw", "return"].forEach(function (SZ) {
          AT(SH, SZ, function (SM) {
            return this._invoke(SZ, SM);
          });
        });
      }
      function S7(SH, SZ) {
        function SM(SD, SN, SY, SO) {
          var SW = AF(SH[SD], SH, SN);
          if (SW.type !== "throw") {
            var Sq = SW.arg;
            var SA = Sq.value;
            if (SA && HG(SA) == "object" && AU.call(SA, "__await")) {
              return SZ.resolve(SA.__await).then(function (SS) {
                SM("next", SS, SY, SO);
              }, function (SS) {
                SM("throw", SS, SY, SO);
              });
            } else {
              return SZ.resolve(SA).then(function (SS) {
                Sq.value = SS;
                SY(Sq);
              }, function (SS) {
                return SM("throw", SS, SY, SO);
              });
            }
          }
          SO(SW.arg);
        }
        var SJ;
        AP(this, "_invoke", {
          value: function (SD, SN) {
            function SY() {
              return new SZ(function (SO, SW) {
                SM(SD, SN, SO, SW);
              });
            }
            return SJ = SJ ? SJ.then(SY, SY) : SY();
          }
        });
      }
      function S8(SH, SZ, SM) {
        var SJ = "suspendedStart";
        return function (SD, SN) {
          if (SJ === "executing") {
            throw new Error("Generator is already running");
          }
          if (SJ === "completed") {
            if (SD === "throw") {
              throw SN;
            }
            return SE();
          }
          SM.method = SD;
          SM.arg = SN;
          while (true) {
            var SY = SM.delegate;
            if (SY) {
              var SO = S9(SY, SM);
              if (SO) {
                if (SO === Az) {
                  continue;
                }
                return SO;
              }
            }
            if (SM.method === "next") {
              SM.sent = SM._sent = SM.arg;
            } else if (SM.method === "throw") {
              if (SJ === "suspendedStart") {
                SJ = "completed";
                throw SM.arg;
              }
              SM.dispatchException(SM.arg);
            } else if (SM.method === "return") {
              SM.abrupt("return", SM.arg);
            }
            SJ = "executing";
            var SW = AF(SH, SZ, SM);
            if (SW.type === "normal") {
              SJ = SM.done ? "completed" : "suspendedYield";
              if (SW.arg === Az) {
                continue;
              }
              return {
                value: SW.arg,
                done: SM.done
              };
            }
            if (SW.type === "throw") {
              SJ = "completed";
              SM.method = "throw";
              SM.arg = SW.arg;
            }
          }
        };
      }
      function S9(SH, SZ) {
        var SM = SZ.method;
        var SJ = SH.iterator[SM];
        if (SJ === undefined) {
          SZ.delegate = null;
          if (SM !== "throw" || !SH.iterator.return || !(SZ.method = "return", SZ.arg = undefined, S9(SH, SZ), SZ.method === "throw")) {
            if (SM !== "return") {
              SZ.method = "throw";
              SZ.arg = new TypeError("The iterator does not provide a '" + SM + "' method");
            }
          }
          return Az;
        }
        var SD = AF(SJ, SH.iterator, SZ.arg);
        if (SD.type === "throw") {
          SZ.method = "throw";
          SZ.arg = SD.arg;
          SZ.delegate = null;
          return Az;
        }
        var SN = SD.arg;
        if (SN) {
          if (SN.done) {
            SZ[SH.resultName] = SN.value;
            SZ.next = SH.nextLoc;
            if (SZ.method !== "return") {
              SZ.method = "next";
              SZ.arg = undefined;
            }
            SZ.delegate = null;
            return Az;
          } else {
            return SN;
          }
        } else {
          SZ.method = "throw";
          SZ.arg = new TypeError("iterator result is not an object");
          SZ.delegate = null;
          return Az;
        }
      }
      function SC(SH) {
        var SZ = {
          tryLoc: SH[0]
        };
        if (1 in SH) {
          SZ.catchLoc = SH[1];
        }
        if (2 in SH) {
          SZ.finallyLoc = SH[2];
          SZ.afterLoc = SH[3];
        }
        this.tryEntries.push(SZ);
      }
      function SV(SH) {
        var SZ = SH.completion || {};
        SZ.type = "normal";
        delete SZ.arg;
        SH.completion = SZ;
      }
      function SL(SH) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SH.forEach(SC, this);
        this.reset(true);
      }
      function SI(SH) {
        if (SH) {
          var SZ = SH[AQ];
          if (SZ) {
            return SZ.call(SH);
          }
          if (typeof SH.next == "function") {
            return SH;
          }
          if (!isNaN(SH.length)) {
            var SM = -1;
            var SJ = function SD() {
              while (++SM < SH.length) {
                if (AU.call(SH, SM)) {
                  SD.value = SH[SM];
                  SD.done = false;
                  return SD;
                }
              }
              SD.value = undefined;
              SD.done = true;
              return SD;
            };
            return SJ.next = SJ;
          }
        }
        return {
          next: SE
        };
      }
      function SE() {
        return {
          value: undefined,
          done: true
        };
      }
      S0.prototype = S1;
      AP(S5, "constructor", {
        value: S1,
        configurable: true
      });
      AP(S1, "constructor", {
        value: S0,
        configurable: true
      });
      S0.displayName = AT(S1, AG, "GeneratorFunction");
      AA.isGeneratorFunction = function (SH) {
        var SZ = typeof SH == "function" && SH.constructor;
        return !!SZ && (SZ === S0 || (SZ.displayName || SZ.name) === "GeneratorFunction");
      };
      AA.mark = function (SH) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SH, S1);
        } else {
          SH.__proto__ = S1;
          AT(SH, AG, "GeneratorFunction");
        }
        SH.prototype = Object.create(S5);
        return SH;
      };
      AA.awrap = function (SH) {
        return {
          __await: SH
        };
      };
      S6(S7.prototype);
      AT(S7.prototype, AB, function () {
        return this;
      });
      AA.AsyncIterator = S7;
      AA.async = function (SH, SZ, SM, SJ, SD = Promise) {
        var SN = new S7(AX(SH, SZ, SM, SJ), SD);
        if (AA.isGeneratorFunction(SZ)) {
          return SN;
        } else {
          return SN.next().then(function (SY) {
            if (SY.done) {
              return SY.value;
            } else {
              return SN.next();
            }
          });
        }
      };
      S6(S5);
      AT(S5, AG, "Generator");
      AT(S5, AQ, function () {
        return this;
      });
      AT(S5, "toString", function () {
        return "[object Generator]";
      });
      AA.keys = function (SH) {
        var SZ = Object(SH);
        var SM = [];
        for (var SJ in SZ) {
          SM.push(SJ);
        }
        SM.reverse();
        return function SD() {
          while (SM.length) {
            var SN = SM.pop();
            if (SN in SZ) {
              SD.value = SN;
              SD.done = false;
              return SD;
            }
          }
          SD.done = true;
          return SD;
        };
      };
      AA.values = SI;
      SL.prototype = {
        constructor: SL,
        reset: function (SH) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SV);
          if (!SH) {
            for (var SZ in this) {
              if (SZ.charAt(0) === "t" && AU.call(this, SZ) && !isNaN(+SZ.slice(1))) {
                this[SZ] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SH = this.tryEntries[0].completion;
          if (SH.type === "throw") {
            throw SH.arg;
          }
          return this.rval;
        },
        dispatchException: function (SH) {
          if (this.done) {
            throw SH;
          }
          var SZ = this;
          function SM(SW, Sq) {
            SN.type = "throw";
            SN.arg = SH;
            SZ.next = SW;
            if (Sq) {
              SZ.method = "next";
              SZ.arg = undefined;
            }
            return !!Sq;
          }
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            var SN = SD.completion;
            if (SD.tryLoc === "root") {
              return SM("end");
            }
            if (SD.tryLoc <= this.prev) {
              var SY = AU.call(SD, "catchLoc");
              var SO = AU.call(SD, "finallyLoc");
              if (SY && SO) {
                if (this.prev < SD.catchLoc) {
                  return SM(SD.catchLoc, true);
                }
                if (this.prev < SD.finallyLoc) {
                  return SM(SD.finallyLoc);
                }
              } else if (SY) {
                if (this.prev < SD.catchLoc) {
                  return SM(SD.catchLoc, true);
                }
              } else {
                if (!SO) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SD.finallyLoc) {
                  return SM(SD.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SH, SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc <= this.prev && AU.call(SJ, "finallyLoc") && this.prev < SJ.finallyLoc) {
              var SD = SJ;
              break;
            }
          }
          if (SD && (SH === "break" || SH === "continue") && SD.tryLoc <= SZ && SZ <= SD.finallyLoc) {
            SD = null;
          }
          var SN = SD ? SD.completion : {};
          SN.type = SH;
          SN.arg = SZ;
          if (SD) {
            this.method = "next";
            this.next = SD.finallyLoc;
            return Az;
          } else {
            return this.complete(SN);
          }
        },
        complete: function (SH, SZ) {
          if (SH.type === "throw") {
            throw SH.arg;
          }
          if (SH.type === "break" || SH.type === "continue") {
            this.next = SH.arg;
          } else if (SH.type === "return") {
            this.rval = this.arg = SH.arg;
            this.method = "return";
            this.next = "end";
          } else if (SH.type === "normal" && SZ) {
            this.next = SZ;
          }
          return Az;
        },
        finish: function (SH) {
          for (var SZ = this.tryEntries.length - 1; SZ >= 0; --SZ) {
            var SM = this.tryEntries[SZ];
            if (SM.finallyLoc === SH) {
              this.complete(SM.completion, SM.afterLoc);
              SV(SM);
              return Az;
            }
          }
        },
        catch: function (SH) {
          for (var SZ = this.tryEntries.length - 1; SZ >= 0; --SZ) {
            var SM = this.tryEntries[SZ];
            if (SM.tryLoc === SH) {
              var SJ = SM.completion;
              if (SJ.type === "throw") {
                var SD = SJ.arg;
                SV(SM);
              }
              return SD;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SH, SZ, SM) {
          this.delegate = {
            iterator: SI(SH),
            resultName: SZ,
            nextLoc: SM
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Az;
        }
      };
      return AA;
    }
    function HX(AA, AS) {
      var AU = typeof Symbol != "undefined" && AA[Symbol.iterator] || AA["@@iterator"];
      if (!AU) {
        if (Array.isArray(AA) || (AU = Hj(AA)) || AS && AA && typeof AA.length == "number") {
          if (AU) {
            AA = AU;
          }
          var AP = 0;
          function AR() {}
          return {
            s: AR,
            n: function () {
              if (AP >= AA.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AA[AP++]
                };
              }
            },
            e: function (AT) {
              throw AT;
            },
            f: AR
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AQ;
      var AB = true;
      var AG = false;
      return {
        s: function () {
          AU = AU.call(AA);
        },
        n: function () {
          var AT = AU.next();
          AB = AT.done;
          return AT;
        },
        e: function (AT) {
          AG = true;
          AQ = AT;
        },
        f: function () {
          try {
            if (!AB && AU.return != null) {
              AU.return();
            }
          } finally {
            if (AG) {
              throw AQ;
            }
          }
        }
      };
    }
    function HF(AA, AS) {
      return function (AU) {
        if (Array.isArray(AU)) {
          return AU;
        }
      }(AA) || function (AU, AP) {
        var AR = AU == null ? null : typeof Symbol != "undefined" && AU[Symbol.iterator] || AU["@@iterator"];
        if (AR != null) {
          var AQ;
          var AB;
          var AG;
          var AT;
          var AX = [];
          var AF = true;
          var Az = false;
          try {
            AG = (AR = AR.call(AU)).next;
            if (AP === 0) {
              if (Object(AR) !== AR) {
                return;
              }
              AF = false;
            } else {
              for (; !(AF = (AQ = AG.call(AR)).done) && (AX.push(AQ.value), AX.length !== AP); AF = true);
            }
          } catch (Aj) {
            Az = true;
            AB = Aj;
          } finally {
            try {
              if (!AF && AR.return != null && (AT = AR.return(), Object(AT) !== AT)) {
                return;
              }
            } finally {
              if (Az) {
                throw AB;
              }
            }
          }
          return AX;
        }
      }(AA, AS) || Hj(AA, AS) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Hj(AA, AS) {
      if (AA) {
        if (typeof AA == "string") {
          return Z0(AA, AS);
        }
        var AU = Object.prototype.toString.call(AA).slice(8, -1);
        if (AU === "Object" && AA.constructor) {
          AU = AA.constructor.name;
        }
        if (AU === "Map" || AU === "Set") {
          return Array.from(AA);
        } else if (AU === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AU)) {
          return Z0(AA, AS);
        } else {
          return undefined;
        }
      }
    }
    function Z0(AA, AS) {
      if (AS == null || AS > AA.length) {
        AS = AA.length;
      }
      for (var AU = 0, AP = new Array(AS); AU < AS; AU++) {
        AP[AU] = AA[AU];
      }
      return AP;
    }
    function Z1(AA, AS, AU, AP, AR, AQ, AB) {
      try {
        var AG = AA[AQ](AB);
        var AT = AG.value;
      } catch (AX) {
        AU(AX);
        return;
      }
      if (AG.done) {
        AS(AT);
      } else {
        Promise.resolve(AT).then(AP, AR);
      }
    }
    function Z2(AA) {
      return function () {
        var AS = this;
        var AU = arguments;
        return new Promise(function (AP, AR) {
          var AQ = AA.apply(AS, AU);
          function AB(AT) {
            Z1(AQ, AP, AR, AB, AG, "next", AT);
          }
          function AG(AT) {
            Z1(AQ, AP, AR, AB, AG, "throw", AT);
          }
          AB(undefined);
        });
      };
    }
    var Z3 = document.getElementById("achievement-popup");
    var Z4 = document.getElementById("button-achievements");
    var Z5 = document.getElementById("exit-achievements");
    var Z6 = document.getElementById("achievements-scroll");
    Z4.onclick = Z8;
    Z5.onclick = Z9;
    document.fonts.ready.then(function () {
      ZI();
    });
    var Z7 = false;
    function Z8() {
      Z3.classList.remove("hide");
      rL(true);
      A3("achievements");
      A6("achievements");
      Z7 = true;
    }
    function Z9() {
      Z3.classList.add("hide");
      rL(false);
      A4();
      A5();
      Z7 = false;
    }
    var ZC;
    var ZV;
    var ZL = false;
    function ZI() {
      return ZE.apply(this, arguments);
    }
    function ZE() {
      ZE = Z2(HT().mark(function AA() {
        var AS;
        var AU;
        var AP;
        var AR;
        var AQ;
        var AB;
        var AG;
        var AT;
        var AX;
        var AF;
        var Az;
        return HT().wrap(function (Aj) {
          while (true) {
            switch (Aj.prev = Aj.next) {
              case 0:
                AS = Math.random() + 1;
                ZL = AS;
                AU = Object.entries(i9.g).map(function (S0) {
                  var S1 = HF(S0, 2);
                  var S2 = S1[0];
                  return {
                    key: S2,
                    value: S1[1],
                    data: ZV[S2]
                  };
                }).sort(function (S0, S1) {
                  return S0.value.rarity - S1.value.rarity || S0.value.stars - S1.value.stars;
                });
                ZC = {};
                nB(Z6);
                if (!M9) {
                  Aj.next = 39;
                  break;
                }
                AP = performance.now();
                Aj.next = 9;
                return new Promise(function (S0) {
                  return setTimeout(S0, 0);
                });
              case 9:
                if (AS === ZL) {
                  Aj.next = 11;
                  break;
                }
                return Aj.abrupt("return");
              case 11:
                AR = HX(AU);
                Aj.prev = 12;
                AR.s();
              case 14:
                if ((AQ = AR.n()).done) {
                  Aj.next = 28;
                  break;
                }
                AB = AQ.value;
                (AG = mP(Z6, "canvas", "achievement")).width = 600;
                AG.height = 200;
                AT = O7(AB.value.name, AB.value.description, AB.value.rarity, AB.value.stars, AB.data.completed, AB.data.completed ? `Completed ${nG(AB.data.completionDate)}` : AB.value.max ? `${AB.data.progress}/${AB.value.max}` : undefined);
                O6(AG, AT, 2);
                ZC[AB.key] = AG;
                Aj.next = 24;
                return new Promise(function (S0) {
                  return setTimeout(S0, 0);
                });
              case 24:
                if (AS === ZL) {
                  Aj.next = 26;
                  break;
                }
                return Aj.abrupt("return");
              case 26:
                Aj.next = 14;
                break;
              case 28:
                Aj.next = 33;
                break;
              case 30:
                Aj.prev = 30;
                Aj.t0 = Aj.catch(12);
                AR.e(Aj.t0);
              case 33:
                Aj.prev = 33;
                AR.f();
                return Aj.finish(33);
              case 36:
                console.log(`Rendered ${AU.length} achievements in ${nK((performance.now() - AP) / 1000, true)}`);
                Aj.next = 50;
                break;
              case 39:
                AX = mP(Z6, "p");
                (AF = mP(AX, "a")).href = "#log-in";
                AF.innerText = "Log In";
                AF.onclick = function () {
                  Z9();
                  Mj();
                  return false;
                };
                mP(AX, "span").innerText = " or ";
                (Az = mP(AX, "a")).href = "#sign-up";
                Az.innerText = "Sign Up";
                Az.onclick = function () {
                  Z9();
                  J0();
                  return false;
                };
                mP(AX, "span").innerText = " to earn achievements";
              case 50:
                ZL = false;
              case 51:
              case "end":
                return Aj.stop();
            }
          }
        }, AA, null, [[12, 30, 33, 36]]);
      }));
      return ZE.apply(this, arguments);
    }
    var ZK = false;
    function Zk(AA, AS) {
      return ZH.apply(this, arguments);
    }
    function ZH() {
      ZH = Z2(HT().mark(function AA(AS, AU) {
        var AP;
        var AR;
        var AQ;
        var AB;
        var AG;
        var AT;
        var AX;
        var AF;
        var Az;
        return HT().wrap(function (Aj) {
          while (true) {
            switch (Aj.prev = Aj.next) {
              case 0:
                AP = Math.random() + 1;
                ZK = AP;
                AR = ZM(AU);
                AQ = Object.entries(i9.g).map(function (S0) {
                  var S1 = HF(S0, 2);
                  var S2 = S1[0];
                  return {
                    key: S2,
                    value: S1[1],
                    data: AR[S2]
                  };
                }).sort(function (S0, S1) {
                  return Number(S1.data.completed) - Number(S0.data.completed) || (S0.data.completed ? S1.value.rarity - S0.value.rarity || S1.value.stars - S0.value.stars : (S1.value.max ? S1.data.progress / S1.value.max : 0) - (S0.value.max ? S0.data.progress / S0.value.max : 0) || S0.value.rarity - S1.value.rarity || S0.value.stars - S1.value.stars);
                });
                nB(AS);
                AB = performance.now();
                Aj.next = 8;
                return new Promise(function (S0) {
                  return setTimeout(S0, 0);
                });
              case 8:
                if (AP === ZK) {
                  Aj.next = 10;
                  break;
                }
                return Aj.abrupt("return");
              case 10:
                AG = HX(AQ);
                Aj.prev = 11;
                AG.s();
              case 13:
                if ((AT = AG.n()).done) {
                  Aj.next = 27;
                  break;
                }
                AX = AT.value;
                (AF = mP(AS, "canvas", "achievement")).width = 600;
                AF.height = 200;
                Az = O7(AX.value.name, AX.value.description, AX.value.rarity, AX.value.stars, AX.data.completed, AX.data.completed ? `Completed ${nG(AX.data.completionDate)}` : AX.value.max ? `${AX.data.progress}/${AX.value.max}` : undefined);
                O6(AF, Az, 2);
                AU[AX.key] = AF;
                Aj.next = 23;
                return new Promise(function (S0) {
                  return setTimeout(S0, 0);
                });
              case 23:
                if (AP === ZK) {
                  Aj.next = 25;
                  break;
                }
                return Aj.abrupt("return");
              case 25:
                Aj.next = 13;
                break;
              case 27:
                Aj.next = 32;
                break;
              case 29:
                Aj.prev = 29;
                Aj.t0 = Aj.catch(11);
                AG.e(Aj.t0);
              case 32:
                Aj.prev = 32;
                AG.f();
                return Aj.finish(32);
              case 35:
                console.log(`Rendered ${AQ.length} achievements in ${nK((performance.now() - AB) / 1000, true)}`);
                ZK = false;
              case 37:
              case "end":
                return Aj.stop();
            }
          }
        }, AA, null, [[11, 29, 32, 35]]);
      }));
      return ZH.apply(this, arguments);
    }
    function ZZ(AA) {
      ZV = ZM(AA);
      ZI();
    }
    function ZM(AA) {
      var AS = {};
      for (var AU = 0, AP = Object.entries(i9.g); AU < AP.length; AU++) {
        var AR = HF(AP[AU], 2);
        var AQ = AR[0];
        var AB = AR[1];
        AS[AQ] = {
          completed: false
        };
        if (AB.max) {
          AS[AQ].progress = 0;
        }
        if (AA[AQ]) {
          AS[AQ].completed = AA[AQ].completed;
          if (AB.max) {
            AS[AQ].progress = AA[AQ].progress || 0;
          }
          if (AA[AQ].completed) {
            AS[AQ].completionDate = AA[AQ].completionDate;
          }
        }
      }
      return AS;
    }
    function ZJ(AA) {
      O6(ZC[AA], O7(i9.g[AA].name, i9.g[AA].description, i9.g[AA].rarity, i9.g[AA].stars, ZV[AA].completed, i9.g[AA].max ? `${ZV[AA].progress}/${i9.g[AA].max}` : undefined), 2);
    }
    function ZD(AA) {
      ZV[AA].completed = true;
      if (i9.g[AA].max) {
        ZV[AA].progress = i9.g[AA].max;
      }
      ZJ(AA);
    }
    function ZN() {
      ZN = function () {
        return AA;
      };
      var AA = {};
      var AS = Object.prototype;
      var AU = AS.hasOwnProperty;
      var AP = Object.defineProperty || function (SK, SH, SZ) {
        SK[SH] = SZ.value;
      };
      var AR = typeof Symbol == "function" ? Symbol : {};
      var AQ = AR.iterator || "@@iterator";
      var AB = AR.asyncIterator || "@@asyncIterator";
      var AG = AR.toStringTag || "@@toStringTag";
      function AT(SK, SH, SZ) {
        Object.defineProperty(SK, SH, {
          value: SZ,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SK[SH];
      }
      try {
        AT({}, "");
      } catch (SK) {
        AT = function (SH, SZ, SM) {
          return SH[SZ] = SM;
        };
      }
      function AX(SH, SZ, SM, SJ) {
        var SD = SZ && SZ.prototype instanceof Aj ? SZ : Aj;
        var SN = Object.create(SD.prototype);
        var SY = new SL(SJ || []);
        AP(SN, "_invoke", {
          value: S8(SH, SM, SY)
        });
        return SN;
      }
      function AF(SH, SZ, SM) {
        try {
          return {
            type: "normal",
            arg: SH.call(SZ, SM)
          };
        } catch (SJ) {
          return {
            type: "throw",
            arg: SJ
          };
        }
      }
      AA.wrap = AX;
      var Az = {};
      function Aj() {}
      function S0() {}
      function S1() {}
      var S2 = {};
      AT(S2, AQ, function () {
        return this;
      });
      var S3 = Object.getPrototypeOf;
      var S4 = S3 && S3(S3(SI([])));
      if (S4 && S4 !== AS && AU.call(S4, AQ)) {
        S2 = S4;
      }
      var S5 = S1.prototype = Aj.prototype = Object.create(S2);
      function S6(SH) {
        ["next", "throw", "return"].forEach(function (SZ) {
          AT(SH, SZ, function (SM) {
            return this._invoke(SZ, SM);
          });
        });
      }
      function S7(SH, SZ) {
        function SM(SD, SN, SY, SO) {
          var SW = AF(SH[SD], SH, SN);
          if (SW.type !== "throw") {
            var Sq = SW.arg;
            var SA = Sq.value;
            if (SA && ZY(SA) == "object" && AU.call(SA, "__await")) {
              return SZ.resolve(SA.__await).then(function (SS) {
                SM("next", SS, SY, SO);
              }, function (SS) {
                SM("throw", SS, SY, SO);
              });
            } else {
              return SZ.resolve(SA).then(function (SS) {
                Sq.value = SS;
                SY(Sq);
              }, function (SS) {
                return SM("throw", SS, SY, SO);
              });
            }
          }
          SO(SW.arg);
        }
        var SJ;
        AP(this, "_invoke", {
          value: function (SD, SN) {
            function SY() {
              return new SZ(function (SO, SW) {
                SM(SD, SN, SO, SW);
              });
            }
            return SJ = SJ ? SJ.then(SY, SY) : SY();
          }
        });
      }
      function S8(SH, SZ, SM) {
        var SJ = "suspendedStart";
        return function (SD, SN) {
          if (SJ === "executing") {
            throw new Error("Generator is already running");
          }
          if (SJ === "completed") {
            if (SD === "throw") {
              throw SN;
            }
            return SE();
          }
          SM.method = SD;
          SM.arg = SN;
          while (true) {
            var SY = SM.delegate;
            if (SY) {
              var SO = S9(SY, SM);
              if (SO) {
                if (SO === Az) {
                  continue;
                }
                return SO;
              }
            }
            if (SM.method === "next") {
              SM.sent = SM._sent = SM.arg;
            } else if (SM.method === "throw") {
              if (SJ === "suspendedStart") {
                SJ = "completed";
                throw SM.arg;
              }
              SM.dispatchException(SM.arg);
            } else if (SM.method === "return") {
              SM.abrupt("return", SM.arg);
            }
            SJ = "executing";
            var SW = AF(SH, SZ, SM);
            if (SW.type === "normal") {
              SJ = SM.done ? "completed" : "suspendedYield";
              if (SW.arg === Az) {
                continue;
              }
              return {
                value: SW.arg,
                done: SM.done
              };
            }
            if (SW.type === "throw") {
              SJ = "completed";
              SM.method = "throw";
              SM.arg = SW.arg;
            }
          }
        };
      }
      function S9(SH, SZ) {
        var SM = SZ.method;
        var SJ = SH.iterator[SM];
        if (SJ === undefined) {
          SZ.delegate = null;
          if (SM !== "throw" || !SH.iterator.return || !(SZ.method = "return", SZ.arg = undefined, S9(SH, SZ), SZ.method === "throw")) {
            if (SM !== "return") {
              SZ.method = "throw";
              SZ.arg = new TypeError("The iterator does not provide a '" + SM + "' method");
            }
          }
          return Az;
        }
        var SD = AF(SJ, SH.iterator, SZ.arg);
        if (SD.type === "throw") {
          SZ.method = "throw";
          SZ.arg = SD.arg;
          SZ.delegate = null;
          return Az;
        }
        var SN = SD.arg;
        if (SN) {
          if (SN.done) {
            SZ[SH.resultName] = SN.value;
            SZ.next = SH.nextLoc;
            if (SZ.method !== "return") {
              SZ.method = "next";
              SZ.arg = undefined;
            }
            SZ.delegate = null;
            return Az;
          } else {
            return SN;
          }
        } else {
          SZ.method = "throw";
          SZ.arg = new TypeError("iterator result is not an object");
          SZ.delegate = null;
          return Az;
        }
      }
      function SC(SH) {
        var SZ = {
          tryLoc: SH[0]
        };
        if (1 in SH) {
          SZ.catchLoc = SH[1];
        }
        if (2 in SH) {
          SZ.finallyLoc = SH[2];
          SZ.afterLoc = SH[3];
        }
        this.tryEntries.push(SZ);
      }
      function SV(SH) {
        var SZ = SH.completion || {};
        SZ.type = "normal";
        delete SZ.arg;
        SH.completion = SZ;
      }
      function SL(SH) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SH.forEach(SC, this);
        this.reset(true);
      }
      function SI(SH) {
        if (SH) {
          var SZ = SH[AQ];
          if (SZ) {
            return SZ.call(SH);
          }
          if (typeof SH.next == "function") {
            return SH;
          }
          if (!isNaN(SH.length)) {
            var SM = -1;
            var SJ = function SD() {
              while (++SM < SH.length) {
                if (AU.call(SH, SM)) {
                  SD.value = SH[SM];
                  SD.done = false;
                  return SD;
                }
              }
              SD.value = undefined;
              SD.done = true;
              return SD;
            };
            return SJ.next = SJ;
          }
        }
        return {
          next: SE
        };
      }
      function SE() {
        return {
          value: undefined,
          done: true
        };
      }
      S0.prototype = S1;
      AP(S5, "constructor", {
        value: S1,
        configurable: true
      });
      AP(S1, "constructor", {
        value: S0,
        configurable: true
      });
      S0.displayName = AT(S1, AG, "GeneratorFunction");
      AA.isGeneratorFunction = function (SH) {
        var SZ = typeof SH == "function" && SH.constructor;
        return !!SZ && (SZ === S0 || (SZ.displayName || SZ.name) === "GeneratorFunction");
      };
      AA.mark = function (SH) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SH, S1);
        } else {
          SH.__proto__ = S1;
          AT(SH, AG, "GeneratorFunction");
        }
        SH.prototype = Object.create(S5);
        return SH;
      };
      AA.awrap = function (SH) {
        return {
          __await: SH
        };
      };
      S6(S7.prototype);
      AT(S7.prototype, AB, function () {
        return this;
      });
      AA.AsyncIterator = S7;
      AA.async = function (SH, SZ, SM, SJ, SD = Promise) {
        var SN = new S7(AX(SH, SZ, SM, SJ), SD);
        if (AA.isGeneratorFunction(SZ)) {
          return SN;
        } else {
          return SN.next().then(function (SY) {
            if (SY.done) {
              return SY.value;
            } else {
              return SN.next();
            }
          });
        }
      };
      S6(S5);
      AT(S5, AG, "Generator");
      AT(S5, AQ, function () {
        return this;
      });
      AT(S5, "toString", function () {
        return "[object Generator]";
      });
      AA.keys = function (SH) {
        var SZ = Object(SH);
        var SM = [];
        for (var SJ in SZ) {
          SM.push(SJ);
        }
        SM.reverse();
        return function SD() {
          while (SM.length) {
            var SN = SM.pop();
            if (SN in SZ) {
              SD.value = SN;
              SD.done = false;
              return SD;
            }
          }
          SD.done = true;
          return SD;
        };
      };
      AA.values = SI;
      SL.prototype = {
        constructor: SL,
        reset: function (SH) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SV);
          if (!SH) {
            for (var SZ in this) {
              if (SZ.charAt(0) === "t" && AU.call(this, SZ) && !isNaN(+SZ.slice(1))) {
                this[SZ] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SH = this.tryEntries[0].completion;
          if (SH.type === "throw") {
            throw SH.arg;
          }
          return this.rval;
        },
        dispatchException: function (SH) {
          if (this.done) {
            throw SH;
          }
          var SZ = this;
          function SM(SW, Sq) {
            SN.type = "throw";
            SN.arg = SH;
            SZ.next = SW;
            if (Sq) {
              SZ.method = "next";
              SZ.arg = undefined;
            }
            return !!Sq;
          }
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            var SN = SD.completion;
            if (SD.tryLoc === "root") {
              return SM("end");
            }
            if (SD.tryLoc <= this.prev) {
              var SY = AU.call(SD, "catchLoc");
              var SO = AU.call(SD, "finallyLoc");
              if (SY && SO) {
                if (this.prev < SD.catchLoc) {
                  return SM(SD.catchLoc, true);
                }
                if (this.prev < SD.finallyLoc) {
                  return SM(SD.finallyLoc);
                }
              } else if (SY) {
                if (this.prev < SD.catchLoc) {
                  return SM(SD.catchLoc, true);
                }
              } else {
                if (!SO) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SD.finallyLoc) {
                  return SM(SD.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SH, SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc <= this.prev && AU.call(SJ, "finallyLoc") && this.prev < SJ.finallyLoc) {
              var SD = SJ;
              break;
            }
          }
          if (SD && (SH === "break" || SH === "continue") && SD.tryLoc <= SZ && SZ <= SD.finallyLoc) {
            SD = null;
          }
          var SN = SD ? SD.completion : {};
          SN.type = SH;
          SN.arg = SZ;
          if (SD) {
            this.method = "next";
            this.next = SD.finallyLoc;
            return Az;
          } else {
            return this.complete(SN);
          }
        },
        complete: function (SH, SZ) {
          if (SH.type === "throw") {
            throw SH.arg;
          }
          if (SH.type === "break" || SH.type === "continue") {
            this.next = SH.arg;
          } else if (SH.type === "return") {
            this.rval = this.arg = SH.arg;
            this.method = "return";
            this.next = "end";
          } else if (SH.type === "normal" && SZ) {
            this.next = SZ;
          }
          return Az;
        },
        finish: function (SH) {
          for (var SZ = this.tryEntries.length - 1; SZ >= 0; --SZ) {
            var SM = this.tryEntries[SZ];
            if (SM.finallyLoc === SH) {
              this.complete(SM.completion, SM.afterLoc);
              SV(SM);
              return Az;
            }
          }
        },
        catch: function (SH) {
          for (var SZ = this.tryEntries.length - 1; SZ >= 0; --SZ) {
            var SM = this.tryEntries[SZ];
            if (SM.tryLoc === SH) {
              var SJ = SM.completion;
              if (SJ.type === "throw") {
                var SD = SJ.arg;
                SV(SM);
              }
              return SD;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SH, SZ, SM) {
          this.delegate = {
            iterator: SI(SH),
            resultName: SZ,
            nextLoc: SM
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Az;
        }
      };
      return AA;
    }
    function ZY(AA) {
      ZY = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AS) {
        return typeof AS;
      } : function (AS) {
        if (AS && typeof Symbol == "function" && AS.constructor === Symbol && AS !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AS;
        }
      };
      return ZY(AA);
    }
    function ZO(AA, AS) {
      var AU = typeof Symbol != "undefined" && AA[Symbol.iterator] || AA["@@iterator"];
      if (!AU) {
        if (Array.isArray(AA) || (AU = Zq(AA)) || AS && AA && typeof AA.length == "number") {
          if (AU) {
            AA = AU;
          }
          var AP = 0;
          function AR() {}
          return {
            s: AR,
            n: function () {
              if (AP >= AA.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AA[AP++]
                };
              }
            },
            e: function (AT) {
              throw AT;
            },
            f: AR
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AQ;
      var AB = true;
      var AG = false;
      return {
        s: function () {
          AU = AU.call(AA);
        },
        n: function () {
          var AT = AU.next();
          AB = AT.done;
          return AT;
        },
        e: function (AT) {
          AG = true;
          AQ = AT;
        },
        f: function () {
          try {
            if (!AB && AU.return != null) {
              AU.return();
            }
          } finally {
            if (AG) {
              throw AQ;
            }
          }
        }
      };
    }
    function ZW(AA, AS) {
      return function (AU) {
        if (Array.isArray(AU)) {
          return AU;
        }
      }(AA) || function (AU, AP) {
        var AR = AU == null ? null : typeof Symbol != "undefined" && AU[Symbol.iterator] || AU["@@iterator"];
        if (AR != null) {
          var AQ;
          var AB;
          var AG;
          var AT;
          var AX = [];
          var AF = true;
          var Az = false;
          try {
            AG = (AR = AR.call(AU)).next;
            if (AP === 0) {
              if (Object(AR) !== AR) {
                return;
              }
              AF = false;
            } else {
              for (; !(AF = (AQ = AG.call(AR)).done) && (AX.push(AQ.value), AX.length !== AP); AF = true);
            }
          } catch (Aj) {
            Az = true;
            AB = Aj;
          } finally {
            try {
              if (!AF && AR.return != null && (AT = AR.return(), Object(AT) !== AT)) {
                return;
              }
            } finally {
              if (Az) {
                throw AB;
              }
            }
          }
          return AX;
        }
      }(AA, AS) || Zq(AA, AS) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Zq(AA, AS) {
      if (AA) {
        if (typeof AA == "string") {
          return ZA(AA, AS);
        }
        var AU = Object.prototype.toString.call(AA).slice(8, -1);
        if (AU === "Object" && AA.constructor) {
          AU = AA.constructor.name;
        }
        if (AU === "Map" || AU === "Set") {
          return Array.from(AA);
        } else if (AU === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AU)) {
          return ZA(AA, AS);
        } else {
          return undefined;
        }
      }
    }
    function ZA(AA, AS) {
      if (AS == null || AS > AA.length) {
        AS = AA.length;
      }
      for (var AU = 0, AP = new Array(AS); AU < AS; AU++) {
        AP[AU] = AA[AU];
      }
      return AP;
    }
    function ZS(AA, AS, AU, AP, AR, AQ, AB) {
      try {
        var AG = AA[AQ](AB);
        var AT = AG.value;
      } catch (AX) {
        AU(AX);
        return;
      }
      if (AG.done) {
        AS(AT);
      } else {
        Promise.resolve(AT).then(AP, AR);
      }
    }
    function ZU(AA) {
      return function () {
        var AS = this;
        var AU = arguments;
        return new Promise(function (AP, AR) {
          var AQ = AA.apply(AS, AU);
          function AB(AT) {
            ZS(AQ, AP, AR, AB, AG, "next", AT);
          }
          function AG(AT) {
            ZS(AQ, AP, AR, AB, AG, "throw", AT);
          }
          AB(undefined);
        });
      };
    }
    var ZP = document.getElementById("profile-screen");
    var ZR = document.getElementById("profile-screen-achievements");
    var ZQ = document.getElementById("profile-screen-achievements-collapse");
    var ZB = document.getElementById("profile-screen-profile-name");
    var ZG = document.getElementById("profile-screen-description");
    var ZT = document.getElementById("profile-screen-profile-star-counter").children[1];
    var ZX = document.getElementById("profile-screen-profile-icon");
    var ZF = document.getElementById("stat-joined");
    var Zz = document.getElementById("stat-last-online");
    var Zj = document.getElementById("stat-achievements");
    var u0 = document.getElementById("stat-high-score");
    var u1 = document.getElementById("edit-profile-popup");
    var u2 = document.getElementById("edit-profile-apply-button");
    var u3 = document.getElementById("edit-profile-cancel-button");
    var u4 = document.getElementById("edit-profile-loading");
    var u5 = document.getElementById("edit-profile-description");
    var u6 = document.getElementById("edit-profile-error");
    var u7 = document.getElementById("edit-profile-change-username");
    var u8 = document.getElementById("edit-profile-change-password");
    var u9 = document.getElementById("edit-profile-change-icon");
    var uC = document.getElementById("edit-profile-value-popup");
    var uV = document.getElementById("edit-profile-value");
    var uL = document.getElementById("edit-profile-value-password");
    var uI = document.getElementById("edit-profile-value-show-password");
    var uE = document.getElementById("edit-profile-value-apply-button");
    var uK = document.getElementById("edit-profile-value-cancel-button");
    var uH = document.getElementById("edit-profile-value-loading");
    var uZ = document.getElementById("edit-profile-value-error");
    var uM = document.getElementById("edit-icon-attributes-scroll");
    var uJ = document.getElementById("edit-icon-preview");
    var uD = document.getElementById("edit-icon-popup");
    var uN = document.getElementById("edit-icon-apply-button");
    var uY = document.getElementById("edit-icon-cancel-button");
    var uO = document.getElementById("edit-icon-loading");
    var uW = document.getElementById("edit-icon-error");
    var uq = document.getElementById("profile-screen-search-input");
    var uA = document.getElementById("profile-screen-search-button");
    var uS = document.getElementById("profile-screen-search-content");
    var uU = false;
    uN.onclick = function () {
      (function () {
        vQ.apply(this, arguments);
      })();
    };
    uY.onclick = function () {
      if (!uU) {
        vP();
      }
    };
    u2.onclick = function () {
      (function () {
        v4.apply(this, arguments);
      })();
    };
    u3.onclick = function () {
      if (!uU) {
        v3();
        ZB.innerHTML = v6(uT);
        ZG.innerHTML = v6(uX);
      }
    };
    u7.onclick = function () {
      v9(0);
    };
    u8.onclick = function () {
      v9(1);
    };
    u9.onclick = function () {
      v3();
      vR();
    };
    uE.onclick = function () {
      (function () {
        vV.apply(this, arguments);
      })();
    };
    uK.onclick = function () {
      if (!v7) {
        vL();
      }
    };
    uV.oninput = function () {
      vC();
    };
    uL.oninput = function () {
      vC();
    };
    u5.oninput = function () {
      ZG.innerHTML = v6(u5.value.trim());
      v5();
    };
    document.getElementById("profile-screen-back-button").onclick = function () {
      v0();
    };
    var uP = document.getElementById("profile-screen-edit-button");
    uP.onclick = function () {
      if (M9 && M9.id == uB) {
        u1.classList.remove("hide");
        u5.value = uX;
        u5.classList.remove("error");
        u6.textContent = "";
      }
    };
    var uR = document.getElementById("profile-screen-logout-button");
    uR.onclick = function () {
      if (M9 && M9.id == uB) {
        v0();
        J5();
      }
    };
    ZQ.onclick = function () {
      v2();
    };
    var uQ;
    var uB = 0;
    var uG = 0;
    var uT = "";
    var uX = "";
    var uF = 0;
    function uz(AA) {
      if (AA != null) {
        uB = AA;
      }
      console.log(`Loading profile ${uB}`);
      q8(3);
      q0.classList.add("hidden");
      rX.classList.add("hidden");
      ZX.classList.remove("clickable");
      ZX.onclick = function () {};
      Yk(ZX, vG);
      uq.value = "";
      uq.blur();
      ZP.classList.remove("hidden");
      uP.classList.add("hidden");
      uR.classList.add("hidden");
      v3();
      nB(ZR);
      ZB.innerText = "-";
      ZG.innerText = "";
      ZT.innerText = "-";
      ZF.children[1].children[0].innerText = "-";
      ZF.children[0].innerText = "-";
      Zz.children[1].children[0].innerText = "-";
      Zz.children[0].innerText = "-";
      Zj.children[1].children[0].innerText = "-";
      Zj.children[0].innerText = "-";
      u0.children[1].children[0].innerText = "-";
      u0.children[0].innerText = "-";
      v2(false);
      (function (AS) {
        uj.apply(this, arguments);
      })(uB);
      A3("profile");
      A6("profile/" + uB);
    }
    function uj() {
      uj = ZU(ZN().mark(function AA(AS) {
        var AU;
        return ZN().wrap(function (AP) {
          while (true) {
            switch (AP.prev = AP.next) {
              case 0:
                uG++;
                AU = uG;
                AP.next = 4;
                return JV("/getuser", {
                  id: AS
                }, function (AR) {
                  if (AU === uG) {
                    ZB.innerText = "Invalid User";
                  }
                }, function (AR) {
                  if (AU === uG) {
                    if (AR.error) {
                      ZB.innerText = AR.error;
                    } else {
                      var AQ = JSON.parse(nQ(AR.achievements));
                      var AB = 0;
                      for (var AG = 0, AT = Object.entries(AQ); AG < AT.length; AG++) {
                        var AX = ZW(AT[AG], 2);
                        AX[0];
                        if (AX[1].completed) {
                          AB++;
                        }
                      }
                      A3(AR.username);
                      if (M9 && M9.id == uB) {
                        uP.classList.remove("hidden");
                        uR.classList.remove("hidden");
                        ZX.classList.add("clickable");
                        ZX.onclick = function () {
                          vR();
                        };
                      }
                      uQ = JSON.parse(nQ(AR.profilePicture));
                      Yk(ZX, uQ);
                      ZB.innerHTML = v6(AR.username);
                      uT = AR.username;
                      ZG.innerHTML = v6(AR.description);
                      uX = AR.description;
                      ZT.innerText = nP(AR.stars);
                      uF = AR.stars;
                      ZF.children[0].innerText = nT(Date.now() - AR.joinDate);
                      ZF.children[1].children[0].innerText = nG(AR.joinDate, true);
                      Zz.children[0].innerText = nT(Date.now() - AR.lastOnline);
                      Zz.children[1].children[0].innerText = nG(AR.lastOnline, true);
                      Zj.children[0].innerText = AB + "/" + Object.keys(i9.g).length;
                      Zj.children[1].children[0].innerText = `${nH(AB / Object.keys(i9.g).length * 100)}%`;
                      u0.children[0].innerText = AE(AR.highScore);
                      u0.children[1].children[0].innerText = nP(nH(AR.highScore));
                      Zk(ZR, AQ);
                    }
                  }
                });
              case 4:
              case "end":
                return AP.stop();
            }
          }
        }, AA);
      }));
      return uj.apply(this, arguments);
    }
    function v0() {
      q8(2);
      q0.classList.remove("hidden");
      rX.classList.remove("hidden");
      ZP.classList.add("hidden");
      v3();
      vP();
      A4();
      A5();
    }
    var v1 = false;
    function v2(AA) {
      if (v1 = AA == null ? !v1 : AA) {
        ZR.classList.add("collapsed");
        ZQ.children[0].innerText = "+";
      } else {
        ZR.classList.remove("collapsed");
        ZQ.children[0].innerText = "-";
      }
    }
    function v3() {
      vL();
      u1.classList.add("hide");
      u4.classList.add("hide");
      uU = false;
    }
    function v4() {
      v4 = ZU(ZN().mark(function AA() {
        return ZN().wrap(function (AS) {
          while (true) {
            switch (AS.prev = AS.next) {
              case 0:
                if (!uU && v5()) {
                  AS.next = 2;
                  break;
                }
                return AS.abrupt("return");
              case 2:
                u6.textContent = "";
                uU = true;
                u4.classList.remove("hide");
                AS.next = 7;
                return JV("/editprofile", {
                  sessionID: JH,
                  description: u5.value.trim()
                }, function (AU) {
                  u6.textContent = AU;
                  uU = false;
                  u4.classList.add("hide");
                }, function (AU) {
                  uU = false;
                  u4.classList.add("hide");
                  if (AU.error) {
                    u6.textContent = AU.error;
                  } else {
                    uX = u5.value.trim();
                    ZG.innerHTML = v6(uX);
                    v3();
                  }
                });
              case 7:
              case "end":
                return AS.stop();
            }
          }
        }, AA);
      }));
      return v4.apply(this, arguments);
    }
    function v5() {
      u5.classList.remove("error");
      u6.textContent = "";
      var AA = [];
      if (u5.value.trim().split(/\r\n|\r|\n/).length > 15) {
        AA.push("Description must not have more than 15 newlines.");
        u5.classList.add("error");
      }
      if (u5.value.length > 600) {
        AA.push("Description must not contain more than 600 characters.");
        u5.classList.add("error");
      }
      u6.innerHTML = AA.join("<br />");
      return AA.length == 0;
    }
    function v6(AA) {
      AA = A2(AA);
      var AS = Math.random();
      var AU = (AA = AA.replace(/&amp;(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|[0-9]*)\$/g, `${AS}\$1${AS}`)).split(AS);
      var AP = 0;
      AA = "";
      for (var AR = 0; AR < AU.length; AR++) {
        var AQ = AU[AR];
        if (AR % 2 == 0) {
          AA += AQ;
        } else {
          while (AP > 0) {
            AA += "</span>";
            AP--;
          }
          var AB = "#ffffff";
          if (AQ == "") {
            continue;
          }
          AB = isNaN(+AQ) ? AQ : NS(0, +AQ);
          AA += `<span style="color: ${AB}">`;
          AP++;
        }
      }
      for (var AG = 0; AG < AP; AG++) {
        AA += "</span>";
      }
      return AA = AA.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, "<a target=\"_blank\" href=\"$1\">$1</a>");
    }
    var v7 = false;
    var v8 = 0;
    function v9(AA = 0) {
      u1.classList.add("hide");
      v8 = AA;
      uC.classList.remove("hide");
      uV.value = "";
      uL.value = "";
      uH.classList.add("hide");
      v7 = false;
      uI.checked = false;
      uZ.textContent = "";
      uV.classList.remove("error");
      uL.classList.remove("error");
      switch (AA) {
        case 0:
          uC.children[0].children[0].textContent = "Change Username";
          uV.previousElementSibling.textContent = "New Username";
          uV.placeholder = "Username";
          uV.type = "text";
          uL.previousElementSibling.textContent = "Current Password";
          uL.placeholder = "Password";
          uL.type = "password";
          uI.onchange = function () {
            if (uI.checked) {
              uL.type = "text";
            } else {
              uL.type = "password";
            }
          };
          break;
        case 1:
          uC.children[0].children[0].textContent = "Change Password";
          uV.previousElementSibling.textContent = "New Password";
          uV.placeholder = "Password";
          uV.type = "password";
          uL.previousElementSibling.textContent = "Current Password";
          uL.placeholder = "Password";
          uL.type = "password";
          uI.onchange = function () {
            if (uI.checked) {
              uV.type = "text";
              uL.type = "text";
            } else {
              uV.type = "password";
              uL.type = "password";
            }
          };
      }
    }
    function vC() {
      uV.classList.remove("error");
      uL.classList.remove("error");
      uZ.textContent = "";
      uV.value = uV.value.trim();
      uL.value = uL.value.trim();
      var AA = uV.value;
      var AS = uL.value;
      var AU = [];
      switch (v8) {
        case 0:
          if (AA.length < 1) {
            AU.push("Provide a username.");
            uV.classList.add("error");
          } else if (AA.length < 3) {
            AU.push("Username must be at least 3 characters long.");
            uV.classList.add("error");
          } else if (!/^[0-9a-zA-Z_-]+$/.test(AA)) {
            AU.push("Username must only contain letters, numbers, underscores, and dashes.");
            uV.classList.add("error");
          }
          if (AA.length > 20) {
            AU.push("Username must not be longer than 20 characters.");
            uV.classList.add("error");
          }
          if (uT == AA) {
            AU.push("New username can't be the same as old username.");
            uV.classList.add("error");
          }
          if (AS.length < 1) {
            AU.push("Incorrect password.");
            uL.classList.add("error");
          }
          break;
        case 1:
          if (AA.length < 1) {
            AU.push("Provide a password.");
            uV.classList.add("error");
          } else if (!/^[0-9a-zA-Z_\-!@#$%^&*+=?;:\(\)\[\]`]+$/.test(AA)) {
            AU.push("Password must only contain letters, numbers, and symbols.");
            uV.classList.add("error");
          }
          if (AA.length > 256) {
            AU.push("Password must not be longer than 256 characters.");
            uV.classList.add("error");
          }
          if (AS.length < 1) {
            AU.push("Incorrect password.");
            uL.classList.add("error");
          }
          if (AA == AS) {
            AU.push("New password can not be the same as current password.");
            uV.classList.add("error");
          }
      }
      uZ.innerHTML = AU.join("<br />");
      return AU.length == 0;
    }
    function vV() {
      vV = ZU(ZN().mark(function AA() {
        return ZN().wrap(function (AS) {
          while (true) {
            switch (AS.prev = AS.next) {
              case 0:
                if (!v7 && vC()) {
                  AS.next = 2;
                  break;
                }
                return AS.abrupt("return");
              case 2:
                uZ.textContent = "";
                v7 = true;
                uH.classList.remove("hide");
                AS.next = 7;
                return JV({
                  0: "/changeusername",
                  1: "/changepassword"
                }[v8], {
                  0: {
                    sessionID: JH,
                    username: uV.value.trim(),
                    password: uL.value.trim()
                  },
                  1: {
                    sessionID: JH,
                    newPassword: uV.value.trim(),
                    password: uL.value.trim()
                  }
                }[v8], function (AU) {
                  uZ.textContent = AU;
                  v7 = false;
                  uH.classList.add("hide");
                }, function (AU) {
                  v7 = false;
                  uH.classList.add("hide");
                  if (AU.error) {
                    uZ.textContent = AU.error;
                  } else {
                    switch (v8) {
                      case 0:
                        uT = uV.value.trim();
                        ZB.textContent = uT;
                        M9.username = uT;
                        break;
                      case 1:
                        JZ(AU.sessionID);
                    }
                    vL();
                  }
                });
              case 7:
              case "end":
                return AS.stop();
            }
          }
        }, AA);
      }));
      return vV.apply(this, arguments);
    }
    function vL() {
      u1.classList.remove("hide");
      uC.classList.add("hide");
    }
    var vI = [{
      name: "X Offset",
      key: "offsetX",
      min: -2,
      max: 2,
      multiplier: -1,
      step: 0.05,
      digits: 2
    }, {
      name: "Y Offset",
      key: "offsetY",
      min: -2,
      max: 2,
      multiplier: -1,
      step: 0.05,
      digits: 2
    }, {
      name: "Size",
      key: "size",
      min: 0.25,
      max: 2,
      multiplier: 30,
      step: 0.05,
      digits: 2
    }, {
      name: "Zoom",
      key: "scale",
      min: 0.25,
      max: 2.5,
      step: 0.05,
      digits: 2
    }, {
      name: "Grid Scale",
      key: "gridScale",
      min: 0.5,
      max: 2,
      step: 0.1,
      digits: 1,
      default: 1
    }, {
      name: "Rotation",
      key: "rot",
      min: 0,
      max: 360,
      suffix: "°",
      multiplier: Math.PI / 180,
      step: 15,
      digits: 0
    }];
    var vE = {
      0: {
        name: "Team Colors",
        data: [10, 11, 12, 13],
        stars: 0
      },
      1: {
        name: "Special Colors",
        data: [2, -1, 3, 7, 5, 6],
        stars: 200
      },
      2: {
        name: "Polygon Colors",
        data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        stars: 350
      }
    };
    var vK = {
      0: {
        name: "Default Background",
        data: {
          default: {
            name: "Default",
            gridSize: 1,
            backgroundColor: "#CDCDCD",
            gridColor: "#afafaf",
            borderColor: "#afafaf"
          }
        },
        stars: 0
      },
      1: {
        name: "Dimension Backgrounds",
        data: {
          crossroads: {
            name: "Crossroads",
            gridSize: 1,
            backgroundColor: "#474747",
            gridColor: "#292929",
            borderColor: "#292929"
          },
          sanctuary: {
            name: "Sanctuary",
            gridSize: 1,
            backgroundColor: "#595959",
            gridColor: "#3b3b3b",
            borderColor: "#3b3b3b"
          },
          abyss: {
            name: "Abyss",
            gridSize: 1,
            backgroundColor: "#141414",
            gridColor: "#000000",
            borderColor: "#000000"
          }
        },
        stars: 150
      },
      2: {
        name: "Accurate Dimension Backgrounds",
        data: {
          accurateDefault: {
            name: "Default",
            gridSize: 2,
            backgroundColor: "#CDCDCD",
            gridColor: "#C8C8C8",
            borderColor: "#afafaf"
          },
          accurateCrossroads: {
            name: "Crossroads",
            gridSize: 0.5,
            backgroundColor: "#474747",
            gridColor: "#3D3D3D",
            borderColor: "#292929"
          },
          accurateSanctuary: {
            name: "Sanctuary",
            gridSize: 2,
            backgroundColor: "#595959",
            gridColor: "#4E4D4D",
            borderColor: "#3b3b3b"
          },
          accurateAbyss: {
            name: "Abyss",
            gridSize: 0.5,
            backgroundColor: "#141414",
            gridColor: "#212121",
            borderColor: "#000000"
          }
        },
        stars: 150
      }
    };
    var vH = [0, 0, 0, 50, 150, 400, 400, 600];
    var vZ = 0;
    var vM = document.getElementById("edit-icon-tabs").children;
    var vJ = document.getElementById("edit-icon-tab-content").children;
    function vD(AA) {
      vM[vZ].classList.remove("selected");
      vJ[vZ].classList.add("hidden");
      vM[AA].classList.add("selected");
      vJ[AA].classList.remove("hidden");
      vZ = AA;
    }
    var vN;
    var vY = [];
    var vO = {};
    var vW = {};
    var vq = {};
    var vA = {};
    var vS = [];
    function vU() {
      vN = vT(vN.weaponID, vN.bodyID, vN.team, vN.offsetX, vN.offsetY, vN.scale, vN.gridScale, vN.size, vN.rot, vN.tankType, vN.background, vN.backgroundColor, vN.gridColor, vN.borderColor, vN.gridSize);
      Yk(uJ, vN);
      var AA;
      var AS = ZO(vI);
      try {
        for (AS.s(); !(AA = AS.n()).done;) {
          var AU = AA.value;
          var AP = AU.input;
          AP.value = (vN[AU.key] == null ? AU.default || 1 : vN[AU.key]) / (AU.multiplier || 1);
          AP.oninput({
            target: AP,
            fake: true
          });
        }
      } catch (S3) {
        AS.e(S3);
      } finally {
        AS.f();
      }
      for (var AR = 0, AQ = Object.values(vO); AR < AQ.length; AR++) {
        AQ[AR].classList.remove("selected");
      }
      for (var AB = 0, AG = Object.values(vW); AB < AG.length; AB++) {
        AG[AB].classList.remove("selected");
      }
      for (var AT = 0, AX = Object.values(vq); AT < AX.length; AT++) {
        AX[AT].classList.remove("selected");
      }
      for (var AF = 0, Az = Object.values(vA); AF < Az.length; AF++) {
        Az[AF].classList.remove("selected");
      }
      var Aj = vO[vN.weaponID];
      if (Aj) {
        Aj.classList.add("selected");
      }
      var S0 = vW[vN.bodyID];
      if (S0) {
        S0.classList.add("selected");
      }
      var S1 = vq[vN.team];
      if (S1) {
        S1.classList.add("selected");
      }
      var S2 = vA[vN.background || "default"];
      if (S2) {
        S2.classList.add("selected");
      }
    }
    function vP() {
      uD.classList.add("hide");
      uO.classList.add("hide");
      uU = false;
    }
    function vR() {
      uD.classList.remove("hide");
      uW.textContent = "";
      vN = uQ;
      vU();
      if (vY.length > 0) {
        function AA() {
          var AG = ZW(vY[AS], 5);
          var AT = AG[0];
          var AX = AG[1];
          var AF = AG[2];
          var Az = AG[3];
          var Aj = AG[4];
          setTimeout(function () {
            switch (AT) {
              case 0:
                (function (S0, S1, S2, S3) {
                  var S4 = DW;
                  var S5 = S0.width * 0.1;
                  var S6 = S5 / (S3 == 0 ? 50 : 100);
                  var S7 = NS(0, S3 == 0 ? 10 : 2);
                  var S8 = nV(135);
                  var S9 = 2;
                  var SC = document.createElement("canvas");
                  SC.width = S0.width / S9;
                  SC.height = S0.height / S9;
                  DW = SC.getContext("2d");
                  YI(S0.width / 2 / S9, S0.height / 2 / S9, S5 / S9, S8, S7, S1, S2, S6 / S9, S3);
                  var SV = OR(DW.getImageData(0, 0, SC.width, SC.height));
                  var SL = 1 / Math.max((SV.right - SV.left) / SC.width, (SV.bottom - SV.top) / SC.height) * 0.9;
                  var SI = S0.width / 2 - (SV.left - (SC.width - SV.right)) * SL;
                  var SE = S0.height / 2 - (SV.top - (SC.height - SV.bottom)) * SL;
                  (DW = S0.getContext("2d")).clearRect(0, 0, S0.width, S0.height);
                  YI(SI, SE, S5 * SL, S8, S7, S1, S2, S6 * SL, S3);
                  DW = S4;
                })(AX, AF, Az, Aj);
                break;
              case 1:
                (function (S0, S1) {
                  var S2 = DW;
                  var S3 = S0.width / 2;
                  var S4 = 0.5 / 9.8 * S0.width / 2;
                  var S5 = 0.5 / 9.8 * S0.width;
                  var S6 = S1.backgroundColor;
                  var S7 = S1.gridColor;
                  var S8 = S1.borderColor;
                  (DW = S0.getContext("2d")).fillStyle = S6;
                  DW.fillRect(0, 0, S0.width, S0.height);
                  DW.lineWidth = S5;
                  DW.strokeStyle = S7;
                  DW.beginPath();
                  DW.moveTo(S3, S3 + S3);
                  DW.lineTo(S3, S3 - S3);
                  DW.moveTo(S3 + S3, S3);
                  DW.lineTo(S3 - S3, S3);
                  for (var S9 = Math.ceil(S1.gridSize - 1), SC = S0.width / S1.gridSize / 2, SV = 1; SV < S9 + 1; SV++) {
                    DW.moveTo(S3 + SC * SV, S3 + S3);
                    DW.lineTo(S3 + SC * SV, S3 - S3);
                    DW.moveTo(S3 - SC * SV, S3 + S3);
                    DW.lineTo(S3 - SC * SV, S3 - S3);
                    DW.moveTo(S3 + S3, S3 + SC * SV);
                    DW.lineTo(S3 - S3, S3 + SC * SV);
                    DW.moveTo(S3 + S3, S3 - SC * SV);
                    DW.lineTo(S3 - S3, S3 - SC * SV);
                  }
                  DW.stroke();
                  DW.strokeStyle = S8;
                  sL(S3, S3, S0.width - S5, S0.height - S5, S4);
                  DW.stroke();
                  DW = S2;
                })(AX, AF);
            }
          }, AS * 10);
        }
        for (var AS = 0; AS < vY.length; AS++) {
          AA();
        }
        vY = [];
      }
      var AU;
      var AP = ZO(vS);
      try {
        for (AP.s(); !(AU = AP.n()).done;) {
          var AR = ZW(AU.value, 2);
          var AQ = AR[0];
          var AB = AR[1];
          AQ.classList.toggle("disabled", uF < AB);
        }
      } catch (AG) {
        AP.e(AG);
      } finally {
        AP.f();
      }
    }
    function vQ() {
      vQ = ZU(ZN().mark(function AA() {
        return ZN().wrap(function (AS) {
          while (true) {
            switch (AS.prev = AS.next) {
              case 0:
                if (!uU) {
                  AS.next = 2;
                  break;
                }
                return AS.abrupt("return");
              case 2:
                uW.textContent = "";
                uU = true;
                uO.classList.remove("hide");
                AS.next = 7;
                return JV("/editicon", {
                  sessionID: JH,
                  icon: nR(JSON.stringify({
                    weaponID: vN.weaponID,
                    bodyID: vN.bodyID,
                    offsetX: vN.offsetX,
                    offsetY: vN.offsetY,
                    size: vN.size,
                    scale: vN.scale,
                    gridScale: vN.gridScale,
                    background: vN.background,
                    team: vN.team,
                    rot: vN.rot
                  }))
                }, function (AU) {
                  uW.textContent = AU;
                  uU = false;
                  uO.classList.add("hide");
                }, function (AU) {
                  uU = false;
                  uO.classList.add("hide");
                  if (AU.error) {
                    uW.textContent = AU.error;
                  } else {
                    uQ = JSON.parse(nQ(AU.icon));
                    Yk(ZX, uQ);
                    vP();
                  }
                });
              case 7:
              case "end":
                return AS.stop();
            }
          }
        }, AA);
      }));
      return vQ.apply(this, arguments);
    }
    var vB = {};
    var vG = {};
    function vT(AA, AS, AU, AP, AR, AQ) {
      var AB;
      var AG;
      var AT = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
      var AX = arguments.length > 7 ? arguments[7] : undefined;
      var AF = arguments.length > 8 ? arguments[8] : undefined;
      var Az = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var Aj = arguments.length > 10 ? arguments[10] : undefined;
      var S0 = arguments.length > 11 ? arguments[11] : undefined;
      var S1 = arguments.length > 12 ? arguments[12] : undefined;
      var S2 = arguments.length > 13 ? arguments[13] : undefined;
      var S3 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 1;
      var S4 = {
        barrels: [],
        gadgets: [],
        layers: [],
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        background: Aj,
        backgroundColor: S0 || "#CDCDCD",
        gridColor: S1 || "#afafaf",
        borderColor: S2 || "#afafaf",
        offsetX: AP,
        offsetY: AR,
        scale: AQ,
        gridScale: AT,
        gridSize: S3,
        rot: AF,
        size: AX,
        team: AU,
        weaponID: AA,
        bodyID: AS,
        tankType: Az
      };
      Object.values(vB).find(function (S5) {
        return Object.values(S5.weapon).find(function (S6) {
          return S6.find(function (S7) {
            if (S7.id == AA) {
              AB = S7;
            }
            return S7.id == AA;
          });
        });
      });
      Object.values(vB).find(function (S5) {
        return Object.values(S5.body).find(function (S6) {
          return S6.find(function (S7) {
            if (S7.id == AS) {
              AG = S7;
            }
            return S7.id == AS;
          });
        });
      });
      if (AB) {
        S4.barrels = AB.barrels;
      }
      if (AG) {
        S4.gadgets = AG.gadgets;
        S4.layers = AG.layers;
        S4.sides = AG.sides;
        S4.outerSides = AG.outerSides;
        S4.outerSize = AG.outerSize;
      }
      return S4;
    }
    vB = JSON.parse(nQ("eJztXVl327YS/i96lnTEnepbnDRJH5zmxj437b3HD5AESzyhSIWLE8fH/70kJWxcQICAbCZ1HloOqw4G4CwfZgbIw2Qx+e1h8g2CQxyVTwX5/4dJBPZw8tvkQ7yBk+kk2BTP0fF5BZIEhmnxq5vHm+nEoH9+GUcx+vn++Ex+/jDJ7g/FrxbTSRJn1b/j29sUHh+/BZtsVzzNnekkhNG2JIzpZBOkGYjW5f/2ePM4xSO9jvd7EG1ggoZbUy+aYxrCYy7mfveo1wk4HMiYGSabI5r8EV3eNItlNellfZPjVd3kwos6q+aFR7Q7B5zyvowgD3qV3oYg+oIEvj0RGvWgIa81N2zDWap926tDGGRI6vREcKSeu8bC99rHNJlBPadH/plOZkpmdRVE2xBbfIoo6Y/nUaPNOeO9CsP4Hg0HTsQ5VMXQqSrvcpBskNTbE9HtArhjchyB5k8bBZTrShGltNi8T/vnHUxSSEaMCa3VP5/nE78JErjOYiz9htDS0vtiXjNPgyICI7eJqO7RBs9zqiNGUdYAisiLreFESAdEX2ywizBefwEElKwIrTMGN5ZoqA3Tsn/KVyviXBNEScttiwUEIdEleRlzx1v4WljNhvOqEJJFI6TrJIgJKgs0YKRuq5FBSXJcpJHWf3KA49DX4/MYcFYfH96Xl2DD1SAxk3yVrDH6qB55gM/zHVtdaE18nncN9UKTd3kUEaCwRZSoBVs0WB5swTq4zKpft7NxZYQR5VIHXGFMgGlM6PMCLnO+WNr9Gt3PaDaUE5sZKDYt8R4mIMOxds2+O4eP1Ab2x7mqn8EXvJrfjs/Pt+FhAuyyz8OZc9u2bFdhJRf4kwzkxOYZEkiidoqobp0sXPTC9kyh5EBv0NDFqUxZLH3DEuHV60B1srLs5UIokdKrNxp5KUXHNzDNkvieBMgN9ULaldGbUW5mJk1BmgZ4QwoIrZYyMBtgnsnqHuI82hC/jWmlFJRKxsATtOu3oMwP4GTWLSabklt6MiyXIAJbohZ7TEqGe0Ns5w0zvMtfHZ8ld65i4/webYOIyhtBQjfH83t0gLVSjuZdFKyDNZ1YoF5ozCzMDfX0S+GZbDakZGxSJM2eJinCAxYyfLgIRTC5crVOwAEvwIn4mVIr3DAvnabRxor7bSR5DWdVZXxsOuNTpj4SnPP5iiixMFEpFR7aGgRIZ7q4WO1MFLavPC60zXyEEfHphxPBAaJcoKYP8ulDfBoB39Phvaus2BLsw4BKiaTMK2koRCcTS+VQTUiWKQllHup7v6fYPYrwUE/xNvZbtD78EW3yQgEwsgwILQQtazluHrqc8hCqMBcmKVWgYJyQOj6/ZKjls6vjyj2bc8txDfVVng1kRCvY+zgJfpC66Q6TvEy+tTS79vUyhj3Txon3YWRF0sSpMGvPN3SIpI3T2KxSKasTpIeyIYI0GGCamwq0Fh3mIpsJ1MRIIjvZ/3l1ceJbgRyU08apjMOm1ZE9NqWigS4+pmt0mIEpBBOoqeliJZRC5OTEgijY5jgc7DEpjTpMzog9OzpHAxtNXPQUNTtEUeiR4HFhsoH7wiuSNiyIyfOWNAUjhEDxTR8nLX1t70G23pGN5Q6T0llqS8j5ISa81I8cJ25CisuKKW/sQbgFe1zdwOT4Wqub+eK6sy3/59Z8qUh+r85tNogdqVqrFlupsrWGautncEfVre964JU5dw1vKWJifcFenZNiMb2t0DCMVVVu0Nu39iqKgl0QAqrBFjCvJKO1wUEYtYpZXhbm8oQpm9HvpP2gaEH1/f0qCXBlc4corQVcucqmL2hDlyD5khbLRFYM02qlYJsT97/DdZ4FxHgh9UK2vinaDBgedjgdDk6EbI1TcKxPIKAOLyWIkq5wLplvyClwvir2lhEISbcjIqWHdDk11blFdHA4mzKvwmogXO9AFOBezT2hu8Xntj05vHVrTIHfQiXHq8swuFwY1QlifE4pOT7rLFA76gVqDUcMSoTF1qpAGKRUjftA6LPWuHn4XarGrY2RjqMIV7sEHCKI3UFK6J+pZj6O4wgtAL07ZyQrlkZe3Gy7fFvAYGY3pSpOVvHmvnHe+AKkVAdO9bwFmy3MqvPGBVNwD5PTc1rEzPSolXkGk6s6+eM4WO2I8tUepNQGOMWk5DguO84x8OFNRxiSTUf13Mfd5c+CslwYUbXAFFGEPwXEjp/mL+r57+qZfBomJeNMqzX/VKnw46DVphMN0RZQeYYT1ZSzAd2a8tLoMa1GMpTFgyApeCLxENUUz6R5p/mqd3ETsAny4uc2i3WKOYIsiKNrNOkjwPyt6tZYgfUXIjJajnQXf/tYCBasw+q/DJtz/TD52zjJEpimuFGR0JJKyjOBq0NAGsbTEyFpYnaNv8vA2T3VbAkQ9UxmwF2JLImj7S4OSc83/aZ9TR5Oen5SeQEX0WdFjwN8zesgKxAWdmVrTD7VMgtLep0XoAWj4gxRTTktMS+TlZcWFMGpU2PHlyYsY2rDyZAVFnQX5QqG8ALuwF0QJ9WLYoBdnMBNRWQQ7ItVVHW/n4v95y44kCCJyO74UANof6HTVvgTzuy5v/Qd3zOWruMvbcOCM8Nrjx49Cf9SOQbzVlyaS0hfa7JHFC8y+VRkMroVHEUmdySRieq+jqPbICHID5Ma4zE9a+954zFzdPk1SDNyKnyNqIEulp6l1e1iSXzxaC3SE19qjPxpd3AsdvVgTe/pj1RfUPT0B0X+7OlQUzhDnArNToQksnHqyMahD5LEyRZS6GzbaQi9kazMBiQN989qN21DyFac0p9hgzBbrGWYLdQRHT3tiyTY0ucvMDk4iJ8c8q8TzY+HBd/ADK7L96eP+ZwRvg58bQaiZ0EYQhqlkxcD3ZtXWz19+9XrJDiEFITE5DD1c8+vdWO+oeLnQaIXICsCLg1GV/Sbbjxay2MWurCce0vP8GxraRme75vuESMS/WCO9fPRKN0JV6FRd2n65sIyrYXpOQ7p3fv7WKBdMH8MS3CgWWOkmaahFD/LJ7iHG+w5EkRpRMEeYxGeMwog/DYEBAbfngiNIJjesvjPC4JtGgT/L9hu8wRg9/uD0E+GBaeEp4152mo8B+DLi3i/oq6XW2FyUMg0WOvUFy+vwDecz6oeFZN7PoMFi10QdRnaCpNDYYMQaiDf3z/7/qK+A3CcWkwCIbMA5MVgPPJkcPjnAibjA9W8vPfb8joE6pYBTA7bIHoDN4juk2wP6YlX531zGqJ/pd8MtAptqd5/+ZHinwfvX8bZDjLJ5z39hlOfZArxFSZ3XMct3pn20l6aFpMvbvxHQxSRN8Zp8tIyUK2A3zYhgzabphBi82mO0yqz7ECqQBusyus9qAbUW/qNxn0GLf9yFJuMP6JbmJCL2gNMatxojGXWN4+PVQMI54b7O9zzGR2feTfcf8zDlLQ1HBDVHSOa7U7dNw3aPd65wYt3+WEfs8ZpO32sVMRqnifUyEtCMKZbDmQwDANyn2BKvRh4QTM7dt+xihYtooGCQTOzpJnNVLhxT21KTbL55fVJpTRF/hlXqTm2qLdGuWRmyV4xV8Q+3BG0QdTAGx7FVqSb1YAV6WQ26LuLXKMkN0kdX72Ll9IUNah2Nyudcsmpdr3prdg9UmH7K6KkwjYbIOZG10JZDpsht8QC+TnZLzi8mVZd23REkIJGWVu+8xm5qy1Ei4ZrlLVN5c/JXmot2L+DAfwgxrRClIwxdR7Z7fILnA86kBPX83FZMSeTYpKl3ccqf2OHJSI8Bw9and5xABwczIy7qDIz5G8DlGRSmR9fa2Qm2LPRUZNKYorMRuc+ig9kl4Oo7jOx/MM8zHLU7/2d1nlxL62UY8W/S5PLi70DOYNJTA7tAkIPhMaWFKJqsXJ3MKJqM/Ph3ITNYAA01ieV0hTFTX0INNYol8wsmdu2dyAh0WuNqG7V5q6IIxR9RfRHjhP/WhR+HO88h/YahjDNAnJeek296Kt0W729D0xK8QNc5SHJQSJKvNQ9q11SbtAbpYXnsMUYtspiMMCI7jdauKbheb7p2ktj4bEZeste0n98wdHRKWohEWbnkWEmJURnRwETXUX6rF1B9ZBoKejRM8bQ0z1l5xXR11fj6xK4ta/mXItgsYyYZvPfv8fpYQcT6k4J8kK19nE0QlT+MNhkhabmsqmEaLLGMxrJ5e1+NKJ31MIsRi5LfzVsJF4mTu5ynEReI0pjKdVmUfz5llGb7xuwjNdJkBFUliGqtTEBj+rPHc90TM9Z2gvLKJBVrfV4xvbAUWeu2wr3HFtkTbGedWoZAgE97jjqw8w6xxHpA7JauuO60zhcGOyyfxhg1nt7Gv9qDxXOukS+6YS/528CMtqbgB66/Qaj48fmKmGMLvxDptDwAcTYBUbH53E7wF7Y+7K70LG7GF+ceQdC8B03km4R9bLtHMO2c24VYXzh+0vDMm3HKbM49LobHhsSTUEpUBQQXYnzSDGTEsOem75rupa39BaG41nNU1VssYYzMA6vint/egRz5Hv/j3EY5t9xwxqiBh6koAMQ5wYP8ZDs6Q/JZO7/pXL3d8fnf0fWgz5McgkzGFP3SZyol3zHSCR/yXeMOt/BSyi+jvfkOMr6RPR5GKvT480aZqxPbJMS+z0Mg1omdMe80u0bvLqecs8Ojco5PLfoKt7huWXvcA8mm74Zh1D2r+OxOBna+21EZWgRpfNqqfpfEvdrLuT7YjYJdT53R+iXPO0587TkAJhyotZ3PMM28T9NfYlaJc66RH5J1HYZ758rSLW9xIh6MdyBhquYM2nRJKSeVwdYqdN4tOjm8fHxH1LCmJs="));
    vG = vT("split", "wall", 10, -0.4, -0.4, 1, 1, 30, nV(135));
    (function () {
      vD(0);
      function AA(SK) {
        vM[SK].addEventListener("click", function () {
          vD(SK);
        });
      }
      for (var AS = 0; AS < vM.length; AS++) {
        AA(AS);
      }
      function AU() {
        var SK = ZW(AR[AP], 2);
        var SH = SK[0];
        var SZ = SK[1];
        SH = +SH;
        var SM = SZ.weapon;
        var SJ = SZ.body;
        function SD() {
          var SO = SY[SN];
          var SW = vJ[SO ? 0 : 1];
          for (var Sq = 0, SA = Object.entries(SO ? SM : SJ); Sq < SA.length; Sq++) {
            var SS = ZW(SA[Sq], 2);
            var SU = SS[0];
            var SP = SS[1];
            SU = +SU;
            var SR = mP(SW, "div", "edit-icon-tab-title");
            SR.textContent = `${SH == 1 ? "Celestial " : ""}Tier ${SU}`;
            var SQ = mP(SW, "div", "edit-icon-tab-list");
            var SB = vH[SU + (SH == 1 ? 5 : 0)] || 0;
            SQ.dataset.text = `Reach ${SB} stars to unlock`;
            vS.push([SR, SB]);
            vS.push([SQ, SB]);
            var SG;
            var ST = ZO(SP);
            try {
              function SX() {
                var SF = SG.value;
                var Sz = mP(SQ, "div", ["edit-icon-tab-item", "tooltip-trigger"]);
                var Sj = mP(Sz, "canvas");
                var U0 = mP(Sz, "div", "relative-tooltip-container");
                mP(U0, "span", ["bottom", "relative", "higher", "tooltip"]).textContent = SF.name;
                Sj.width = 128;
                Sj.height = 128;
                vY.push([0, Sj, SF, SO, SH]);
                (SO ? vO : vW)[SF.id] = Sz;
                var U1 = SF;
                Sz.onclick = function () {
                  if (vN[SO ? "weaponID" : "bodyID"] != U1.id) {
                    vN[SO ? "weaponID" : "bodyID"] = U1.id;
                    if (!SO) {
                      vN.tankType = SH;
                    }
                    vU();
                  }
                };
              }
              for (ST.s(); !(SG = ST.n()).done;) {
                SX();
              }
            } catch (SF) {
              ST.e(SF);
            } finally {
              ST.f();
            }
          }
        }
        for (var SN = 0, SY = [true, false]; SN < SY.length; SN++) {
          SD();
        }
      }
      for (var AP = 0, AR = Object.entries(vB); AP < AR.length; AP++) {
        AU();
      }
      for (var AQ = 0, AB = Object.entries(vE); AQ < AB.length; AQ++) {
        var AG = ZW(AB[AQ], 2);
        AG[0];
        var AT = AG[1];
        var AX = vJ[2];
        var AF = mP(AX, "div", "edit-icon-tab-title");
        AF.textContent = AT.name;
        var Az = mP(AX, "div", "edit-icon-tab-list");
        Az.dataset.text = `Reach ${AT.stars} stars to unlock`;
        vS.push([AF, AT.stars]);
        vS.push([Az, AT.stars]);
        var Aj;
        var S0 = ZO(AT.data);
        try {
          function S1() {
            var SK = Aj.value;
            var SH = mP(Az, "div", ["edit-icon-tab-item"]);
            SH.style.backgroundColor = NS(0, SK);
            vq[SK] = SH;
            var SZ = SK;
            SH.onclick = function () {
              if (vN.team != SK) {
                vN.team = SZ;
                vU();
              }
            };
          }
          for (S0.s(); !(Aj = S0.n()).done;) {
            S1();
          }
        } catch (SK) {
          S0.e(SK);
        } finally {
          S0.f();
        }
      }
      for (var S2 = 0, S3 = Object.entries(vK); S2 < S3.length; S2++) {
        var S4 = ZW(S3[S2], 2);
        S4[0];
        var S5 = S4[1];
        var S6 = vJ[3];
        var S7 = mP(S6, "div", "edit-icon-tab-title");
        S7.textContent = S5.name;
        var S8 = mP(S6, "div", "edit-icon-tab-list");
        S8.dataset.text = `Reach ${S5.stars} stars to unlock`;
        vS.push([S7, S5.stars]);
        vS.push([S8, S5.stars]);
        function S9() {
          var SH = ZW(SV[SC], 2);
          var SZ = SH[0];
          var SM = SH[1];
          var SJ = mP(S8, "div", ["edit-icon-tab-item", "tooltip-trigger"]);
          var SD = mP(SJ, "canvas");
          var SN = mP(SJ, "div", "relative-tooltip-container");
          mP(SN, "span", ["bottom", "relative", "higher", "tooltip"]).textContent = SM.name;
          SD.width = 128;
          SD.height = 128;
          vY.push([1, SD, SM]);
          vA[SZ] = SJ;
          var SY = SZ;
          var SO = SM;
          SJ.onclick = function () {
            if (vN.background != SY) {
              vN.background = SY;
              vN.backgroundColor = SO.backgroundColor;
              vN.gridColor = SO.gridColor;
              vN.borderColor = SO.borderColor;
              vN.gridSize = SO.gridSize;
              vU();
            }
          };
        }
        for (var SC = 0, SV = Object.entries(S5.data); SC < SV.length; SC++) {
          S9();
        }
      }
      function SL() {
        var SH = SE[SI];
        var SZ = mP(uM, "div", "slider");
        var SM = mP(SZ, "label");
        SM.textContent = SH.name;
        var SJ = mP(SZ, "input", "slide");
        SJ.type = "range";
        SJ.min = SH.min;
        SJ.max = SH.max;
        SJ.step = SH.step;
        SJ.attribute = SH;
        SH.input = SJ;
        SJ.oninput = function (SD) {
          SM.textContent = `${SH.name}: ${(+(SD.target.value || 0)).toFixed(SH.digits || 0)}${SH.suffix || ""}`;
          if (!SD.fake) {
            vN[SH.key] = SD.target.value * (SH.multiplier || 1);
            vU();
          }
        };
        SJ.oninput({
          target: SJ,
          fake: true
        });
      }
      for (var SI = 0, SE = vI; SI < SE.length; SI++) {
        SL();
      }
    })();
    var vX = [];
    var vF = "";
    var vz = false;
    function vj() {
      var AA = uq.value.trim().replaceAll(/\s+/g, "");
      uq.value = AA;
      if (AA.length > 0 && document.activeElement == uq) {
        uS.classList.remove("hide");
      } else {
        uS.classList.add("hide");
      }
      if (AA != vF) {
        M1();
      }
      vF = AA;
      M0();
    }
    function M0() {
      nB(uS);
      var AA = false;
      function AS() {
        var AP = vX[AU];
        if (!AP.username.toLowerCase().startsWith(vF.toLowerCase())) {
          return "continue";
        }
        if (AA) {
          mP(uS, "hr");
        }
        AA = true;
        var AR = mP(uS, "div", "profile-screen-search-result");
        var AQ = mP(AR, "canvas", "icon");
        AQ.width = 128;
        AQ.height = 128;
        Yk(AQ, AP.icon);
        var AB = mP(AR, "div");
        var AG = mP(AB, "div", "result-name");
        AG.innerHTML = `<span style="font-weight: bold;">${A2(AP.username.substring(0, vF.length))}</span>`;
        AG.innerHTML += A2(AP.username.substring(vF.length, AP.username.length));
        var AT = AG.getBoundingClientRect().width;
        AG.style.width = "auto";
        var AX = AG.getBoundingClientRect().width / AT;
        AG.style.width = "";
        AG.style.fontSize = 2.5 / Math.max(1, AX) + "vmin";
        var AF = mP(AB, "div", "result-stars");
        mP(AF, "img").src = "/assets/star.png";
        mP(AF, "div", "result-star-count").innerText = nP(AP.stars);
        AR.tabIndex = AU;
        AR.mouseDown = false;
        AR.onmousedown = function () {
          AR.mouseDown = true;
        };
        AR.onmouseleave = function () {
          AR.mouseDown = false;
        };
        AR.onmouseup = function () {
          if (AR.mouseDown) {
            AR.mouseDown = false;
            uz(AP.id);
            uq.blur();
          }
        };
      }
      for (var AU = 0; AU < vX.length; AU++) {
        AS();
      }
    }
    uq.onfocus = function (AA) {
      if (!vz) {
        vj();
      }
      vz = false;
    };
    uq.onblur = function (AA) {
      if (AA.relatedTarget == uA || AA.relatedTarget && AA.relatedTarget.classList.contains("profile-screen-search-result")) {
        if (AA.relatedTarget && AA.relatedTarget.classList.contains("profile-screen-search-result")) {
          vz = true;
        }
        uq.focus();
      } else {
        vj();
      }
    };
    uq.oninput = function () {
      vj();
    };
    uq.onkeydown = function (AA) {
      return AA.key != " ";
    };
    uA.onmousedown = function () {
      uq.focus();
    };
    uA.onclick = function () {
      uq.focus();
      uq.select();
    };
    var M1 = (0, i8.debounce)(50, ZU(ZN().mark(function AA() {
      var AS;
      return ZN().wrap(function (AU) {
        while (true) {
          switch (AU.prev = AU.next) {
            case 0:
              if ((AS = uq.value.trim().replaceAll(/\s+/g, "")).length != 0) {
                AU.next = 5;
                break;
              }
              vX = [];
              AU.next = 7;
              break;
            case 5:
              AU.next = 7;
              return JV("/searchusers", {
                username: AS
              }, function (AP) {
                vX = [];
                M0();
              }, function (AP) {
                if (AP.error) {
                  vX = [];
                  M0();
                  return;
                }
                if (ZY(AP) == "object") {
                  (vX = AP).forEach(function (AR) {
                    AR.icon = JSON.parse(nQ(AR.profilePicture));
                  });
                  M0();
                }
              });
            case 7:
            case "end":
              return AU.stop();
          }
        }
      }, AA);
    })));
    vj();
    function M2(AS) {
      M2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AU) {
        return typeof AU;
      } : function (AU) {
        if (AU && typeof Symbol == "function" && AU.constructor === Symbol && AU !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AU;
        }
      };
      return M2(AS);
    }
    function M3() {
      M3 = function () {
        return AS;
      };
      var AS = {};
      var AU = Object.prototype;
      var AP = AU.hasOwnProperty;
      var AR = Object.defineProperty || function (SH, SZ, SM) {
        SH[SZ] = SM.value;
      };
      var AQ = typeof Symbol == "function" ? Symbol : {};
      var AB = AQ.iterator || "@@iterator";
      var AG = AQ.asyncIterator || "@@asyncIterator";
      var AT = AQ.toStringTag || "@@toStringTag";
      function AX(SH, SZ, SM) {
        Object.defineProperty(SH, SZ, {
          value: SM,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SH[SZ];
      }
      try {
        AX({}, "");
      } catch (SH) {
        AX = function (SZ, SM, SJ) {
          return SZ[SM] = SJ;
        };
      }
      function AF(SZ, SM, SJ, SD) {
        var SN = SM && SM.prototype instanceof S0 ? SM : S0;
        var SY = Object.create(SN.prototype);
        var SO = new SI(SD || []);
        AR(SY, "_invoke", {
          value: S9(SZ, SJ, SO)
        });
        return SY;
      }
      function Az(SZ, SM, SJ) {
        try {
          return {
            type: "normal",
            arg: SZ.call(SM, SJ)
          };
        } catch (SD) {
          return {
            type: "throw",
            arg: SD
          };
        }
      }
      AS.wrap = AF;
      var Aj = {};
      function S0() {}
      function S1() {}
      function S2() {}
      var S3 = {};
      AX(S3, AB, function () {
        return this;
      });
      var S4 = Object.getPrototypeOf;
      var S5 = S4 && S4(S4(SE([])));
      if (S5 && S5 !== AU && AP.call(S5, AB)) {
        S3 = S5;
      }
      var S6 = S2.prototype = S0.prototype = Object.create(S3);
      function S7(SZ) {
        ["next", "throw", "return"].forEach(function (SM) {
          AX(SZ, SM, function (SJ) {
            return this._invoke(SM, SJ);
          });
        });
      }
      function S8(SZ, SM) {
        function SJ(SN, SY, SO, SW) {
          var Sq = Az(SZ[SN], SZ, SY);
          if (Sq.type !== "throw") {
            var SA = Sq.arg;
            var SS = SA.value;
            if (SS && M2(SS) == "object" && AP.call(SS, "__await")) {
              return SM.resolve(SS.__await).then(function (SU) {
                SJ("next", SU, SO, SW);
              }, function (SU) {
                SJ("throw", SU, SO, SW);
              });
            } else {
              return SM.resolve(SS).then(function (SU) {
                SA.value = SU;
                SO(SA);
              }, function (SU) {
                return SJ("throw", SU, SO, SW);
              });
            }
          }
          SW(Sq.arg);
        }
        var SD;
        AR(this, "_invoke", {
          value: function (SN, SY) {
            function SO() {
              return new SM(function (SW, Sq) {
                SJ(SN, SY, SW, Sq);
              });
            }
            return SD = SD ? SD.then(SO, SO) : SO();
          }
        });
      }
      function S9(SZ, SM, SJ) {
        var SD = "suspendedStart";
        return function (SN, SY) {
          if (SD === "executing") {
            throw new Error("Generator is already running");
          }
          if (SD === "completed") {
            if (SN === "throw") {
              throw SY;
            }
            return SK();
          }
          SJ.method = SN;
          SJ.arg = SY;
          while (true) {
            var SO = SJ.delegate;
            if (SO) {
              var SW = SC(SO, SJ);
              if (SW) {
                if (SW === Aj) {
                  continue;
                }
                return SW;
              }
            }
            if (SJ.method === "next") {
              SJ.sent = SJ._sent = SJ.arg;
            } else if (SJ.method === "throw") {
              if (SD === "suspendedStart") {
                SD = "completed";
                throw SJ.arg;
              }
              SJ.dispatchException(SJ.arg);
            } else if (SJ.method === "return") {
              SJ.abrupt("return", SJ.arg);
            }
            SD = "executing";
            var Sq = Az(SZ, SM, SJ);
            if (Sq.type === "normal") {
              SD = SJ.done ? "completed" : "suspendedYield";
              if (Sq.arg === Aj) {
                continue;
              }
              return {
                value: Sq.arg,
                done: SJ.done
              };
            }
            if (Sq.type === "throw") {
              SD = "completed";
              SJ.method = "throw";
              SJ.arg = Sq.arg;
            }
          }
        };
      }
      function SC(SZ, SM) {
        var SJ = SM.method;
        var SD = SZ.iterator[SJ];
        if (SD === undefined) {
          SM.delegate = null;
          if (SJ !== "throw" || !SZ.iterator.return || !(SM.method = "return", SM.arg = undefined, SC(SZ, SM), SM.method === "throw")) {
            if (SJ !== "return") {
              SM.method = "throw";
              SM.arg = new TypeError("The iterator does not provide a '" + SJ + "' method");
            }
          }
          return Aj;
        }
        var SN = Az(SD, SZ.iterator, SM.arg);
        if (SN.type === "throw") {
          SM.method = "throw";
          SM.arg = SN.arg;
          SM.delegate = null;
          return Aj;
        }
        var SY = SN.arg;
        if (SY) {
          if (SY.done) {
            SM[SZ.resultName] = SY.value;
            SM.next = SZ.nextLoc;
            if (SM.method !== "return") {
              SM.method = "next";
              SM.arg = undefined;
            }
            SM.delegate = null;
            return Aj;
          } else {
            return SY;
          }
        } else {
          SM.method = "throw";
          SM.arg = new TypeError("iterator result is not an object");
          SM.delegate = null;
          return Aj;
        }
      }
      function SV(SZ) {
        var SM = {
          tryLoc: SZ[0]
        };
        if (1 in SZ) {
          SM.catchLoc = SZ[1];
        }
        if (2 in SZ) {
          SM.finallyLoc = SZ[2];
          SM.afterLoc = SZ[3];
        }
        this.tryEntries.push(SM);
      }
      function SL(SZ) {
        var SM = SZ.completion || {};
        SM.type = "normal";
        delete SM.arg;
        SZ.completion = SM;
      }
      function SI(SZ) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SZ.forEach(SV, this);
        this.reset(true);
      }
      function SE(SZ) {
        if (SZ) {
          var SM = SZ[AB];
          if (SM) {
            return SM.call(SZ);
          }
          if (typeof SZ.next == "function") {
            return SZ;
          }
          if (!isNaN(SZ.length)) {
            var SJ = -1;
            var SD = function SN() {
              while (++SJ < SZ.length) {
                if (AP.call(SZ, SJ)) {
                  SN.value = SZ[SJ];
                  SN.done = false;
                  return SN;
                }
              }
              SN.value = undefined;
              SN.done = true;
              return SN;
            };
            return SD.next = SD;
          }
        }
        return {
          next: SK
        };
      }
      function SK() {
        return {
          value: undefined,
          done: true
        };
      }
      S1.prototype = S2;
      AR(S6, "constructor", {
        value: S2,
        configurable: true
      });
      AR(S2, "constructor", {
        value: S1,
        configurable: true
      });
      S1.displayName = AX(S2, AT, "GeneratorFunction");
      AS.isGeneratorFunction = function (SZ) {
        var SM = typeof SZ == "function" && SZ.constructor;
        return !!SM && (SM === S1 || (SM.displayName || SM.name) === "GeneratorFunction");
      };
      AS.mark = function (SZ) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SZ, S2);
        } else {
          SZ.__proto__ = S2;
          AX(SZ, AT, "GeneratorFunction");
        }
        SZ.prototype = Object.create(S6);
        return SZ;
      };
      AS.awrap = function (SZ) {
        return {
          __await: SZ
        };
      };
      S7(S8.prototype);
      AX(S8.prototype, AG, function () {
        return this;
      });
      AS.AsyncIterator = S8;
      AS.async = function (SZ, SM, SJ, SD, SN = Promise) {
        var SY = new S8(AF(SZ, SM, SJ, SD), SN);
        if (AS.isGeneratorFunction(SM)) {
          return SY;
        } else {
          return SY.next().then(function (SO) {
            if (SO.done) {
              return SO.value;
            } else {
              return SY.next();
            }
          });
        }
      };
      S7(S6);
      AX(S6, AT, "Generator");
      AX(S6, AB, function () {
        return this;
      });
      AX(S6, "toString", function () {
        return "[object Generator]";
      });
      AS.keys = function (SZ) {
        var SM = Object(SZ);
        var SJ = [];
        for (var SD in SM) {
          SJ.push(SD);
        }
        SJ.reverse();
        return function SN() {
          while (SJ.length) {
            var SY = SJ.pop();
            if (SY in SM) {
              SN.value = SY;
              SN.done = false;
              return SN;
            }
          }
          SN.done = true;
          return SN;
        };
      };
      AS.values = SE;
      SI.prototype = {
        constructor: SI,
        reset: function (SZ) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SL);
          if (!SZ) {
            for (var SM in this) {
              if (SM.charAt(0) === "t" && AP.call(this, SM) && !isNaN(+SM.slice(1))) {
                this[SM] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SZ = this.tryEntries[0].completion;
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          return this.rval;
        },
        dispatchException: function (SZ) {
          if (this.done) {
            throw SZ;
          }
          var SM = this;
          function SJ(Sq, SA) {
            SY.type = "throw";
            SY.arg = SZ;
            SM.next = Sq;
            if (SA) {
              SM.method = "next";
              SM.arg = undefined;
            }
            return !!SA;
          }
          for (var SD = this.tryEntries.length - 1; SD >= 0; --SD) {
            var SN = this.tryEntries[SD];
            var SY = SN.completion;
            if (SN.tryLoc === "root") {
              return SJ("end");
            }
            if (SN.tryLoc <= this.prev) {
              var SO = AP.call(SN, "catchLoc");
              var SW = AP.call(SN, "finallyLoc");
              if (SO && SW) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              } else if (SO) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
              } else {
                if (!SW) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SZ, SM) {
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            if (SD.tryLoc <= this.prev && AP.call(SD, "finallyLoc") && this.prev < SD.finallyLoc) {
              var SN = SD;
              break;
            }
          }
          if (SN && (SZ === "break" || SZ === "continue") && SN.tryLoc <= SM && SM <= SN.finallyLoc) {
            SN = null;
          }
          var SY = SN ? SN.completion : {};
          SY.type = SZ;
          SY.arg = SM;
          if (SN) {
            this.method = "next";
            this.next = SN.finallyLoc;
            return Aj;
          } else {
            return this.complete(SY);
          }
        },
        complete: function (SZ, SM) {
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          if (SZ.type === "break" || SZ.type === "continue") {
            this.next = SZ.arg;
          } else if (SZ.type === "return") {
            this.rval = this.arg = SZ.arg;
            this.method = "return";
            this.next = "end";
          } else if (SZ.type === "normal" && SM) {
            this.next = SM;
          }
          return Aj;
        },
        finish: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.finallyLoc === SZ) {
              this.complete(SJ.completion, SJ.afterLoc);
              SL(SJ);
              return Aj;
            }
          }
        },
        catch: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc === SZ) {
              var SD = SJ.completion;
              if (SD.type === "throw") {
                var SN = SD.arg;
                SL(SJ);
              }
              return SN;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SZ, SM, SJ) {
          this.delegate = {
            iterator: SE(SZ),
            resultName: SM,
            nextLoc: SJ
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Aj;
        }
      };
      return AS;
    }
    function M4(AS, AU, AP, AR, AQ, AB, AG) {
      try {
        var AT = AS[AB](AG);
        var AX = AT.value;
      } catch (AF) {
        AP(AF);
        return;
      }
      if (AT.done) {
        AU(AX);
      } else {
        Promise.resolve(AX).then(AR, AQ);
      }
    }
    function M5(AS) {
      return function () {
        var AU = this;
        var AP = arguments;
        return new Promise(function (AR, AQ) {
          var AB = AS.apply(AU, AP);
          function AG(AX) {
            M4(AB, AR, AQ, AG, AT, "next", AX);
          }
          function AT(AX) {
            M4(AB, AR, AQ, AG, AT, "throw", AX);
          }
          AG(undefined);
        });
      };
    }
    var M6 = "https://api.scnx.cc";
    var M7 = false;
    var M8 = false;
    var M9 = undefined;
    var MC = document.getElementById("button-account");
    var MV = document.getElementById("login");
    var ML = document.getElementById("signup");
    var MI = document.getElementById("login-loading");
    var ME = document.getElementById("signup-loading");
    var MK = document.getElementById("login-error");
    var MH = document.getElementById("signup-error");
    var MZ = document.getElementById("signed-in-text");
    var MM = document.getElementById("not-signed-in-text");
    var MJ = document.getElementById("signed-in-star-counter");
    var MD = document.getElementById("log-in");
    var MN = document.getElementById("sign-up");
    var MY = document.getElementById("log-out");
    var MO = document.getElementById("login-button");
    var MW = document.getElementById("login-cancel");
    var Mq = document.getElementById("signup-button");
    var MA = document.getElementById("signup-cancel");
    var MS = document.getElementById("sign-up-instead");
    var MU = document.getElementById("log-in-instead");
    MD.onclick = function () {
      Mj();
      return false;
    };
    MN.onclick = function () {
      J0();
      return false;
    };
    MY.onclick = function () {
      J5();
      return false;
    };
    MW.onclick = function () {
      J1();
    };
    MA.onclick = function () {
      J3();
    };
    MO.onclick = function () {
      J1(true);
    };
    Mq.onclick = function () {
      J3(true);
    };
    MS.onclick = function () {
      J1(false);
      J0();
      return false;
    };
    MU.onclick = function () {
      J3(false);
      Mj();
      return false;
    };
    MC.onclick = function () {
      if (M8) {
        uz(M9.id);
      } else {
        Mj();
      }
    };
    var MP = document.getElementById("login-show-password");
    var MR = document.getElementById("signup-show-password");
    MP.onclick = function () {
      if (MP.checked) {
        MB.type = "text";
      } else {
        MB.type = "password";
      }
    };
    MR.onclick = function () {
      if (MR.checked) {
        MT.type = "text";
      } else {
        MT.type = "password";
      }
      MX.type = MT.type;
    };
    var MQ = document.getElementById("login-username");
    var MB = document.getElementById("login-password");
    var MG = document.getElementById("signup-username");
    var MT = document.getElementById("signup-password");
    var MX = document.getElementById("signup-confirm-password");
    [MQ, MB, MG, MT, MX].forEach(function (AS) {
      var AU = document.createElement("p");
      AU.style = "text-align: center; font-size: 1.5vmin";
      AU.innerHTML = "";
      AS.parentNode.insertBefore(AU, AS.nextSibling);
    });
    MG.onchange = function () {
      var AS = [];
      MG.classList.remove("error");
      MG.value = MG.value.trim();
      if (MG.value.length < 1) {
        AS.push("Provide a username.");
      } else if (MG.value.length < 3) {
        AS.push("Username must be at least 3 characters long.");
      } else if (!/^[0-9a-zA-Z_-]+$/.test(MG.value)) {
        AS.push("Username must only contain letters, numbers, underscores, and dashes.");
      }
      if (MG.value.length > 20) {
        AS.push("Username must not be longer than 20 characters.");
      }
      if (AS.length > 0) {
        MG.classList.add("error");
      }
      MG.nextSibling.innerHTML = AS.join("<br />");
    };
    MT.onchange = function () {
      var AS = [];
      MT.classList.remove("error");
      MT.value = MT.value.trim();
      if (MT.value.length < 1) {
        AS.push("Provide a password.");
      } else if (!/^[0-9a-zA-Z_\-!@#$%^&*+=?;:\(\)\[\]`]+$/.test(MT.value)) {
        AS.push("Password must only contain letters, numbers, and symbols.");
      }
      if (MT.value.length > 256) {
        AS.push("Password must not be longer than 256 characters.");
      }
      if (AS.length > 0) {
        MT.classList.add("error");
      }
      MT.nextSibling.innerHTML = AS.join("<br />");
      MX.onchange();
    };
    MX.onchange = function () {
      var AS = [];
      MX.classList.remove("error");
      MX.value = MX.value.trim();
      if (MX.value != MT.value) {
        AS.push("Passwords do not match.");
      }
      if (AS.length > 0) {
        MX.classList.add("error");
      }
      MX.nextSibling.innerHTML = AS.join("<br />");
    };
    var MF = false;
    var Mz = false;
    function Mj() {
      if (!rV && !M7 && !M8) {
        MF = true;
        MK.innerHTML = "";
        [MQ, MB].forEach(function (AS) {
          AS.value = "";
          AS.nextSibling.innerHTML = "";
          AS.classList.remove("error");
        });
        MI.classList.add("hide");
        rL(true);
        MV.classList.remove("hide");
        A3("log in");
        A6("log-in");
      }
    }
    function J0() {
      if (!rV && !M7 && !M8) {
        Mz = true;
        MH.innerHTML = "";
        [MG, MT, MX].forEach(function (AS) {
          AS.value = "";
          AS.nextSibling.innerHTML = "";
          AS.classList.remove("error");
        });
        rL(true);
        ME.classList.add("hide");
        ML.classList.remove("hide");
        A3("sign up");
        A6("sign-up");
      }
    }
    function J1() {
      return J2.apply(this, arguments);
    }
    function J2() {
      J2 = M5(M3().mark(function AS() {
        var AU;
        var AP;
        var AR = arguments;
        return M3().wrap(function (AQ) {
          while (true) {
            switch (AQ.prev = AQ.next) {
              case 0:
                AU = AR.length > 0 && AR[0] !== undefined && AR[0];
                if (M7) {
                  AQ.next = 16;
                  break;
                }
                AP = true;
                [MQ, MB].forEach(function (AB) {
                  if (AB.value != "") {
                    if (AB.classList.contains("error")) {
                      AP = false;
                    }
                  } else {
                    AP = false;
                  }
                });
                MK.innerHTML = "";
                if (!AU) {
                  AQ.next = 11;
                  break;
                }
                if (!AP) {
                  AQ.next = 9;
                  break;
                }
                AQ.next = 9;
                return J9();
              case 9:
                AQ.next = 16;
                break;
              case 11:
                MF = false;
                MV.classList.add("hide");
                rL(false);
                A4();
                A5();
              case 16:
              case "end":
                return AQ.stop();
            }
          }
        }, AS);
      }));
      return J2.apply(this, arguments);
    }
    function J3() {
      return J4.apply(this, arguments);
    }
    function J4() {
      J4 = M5(M3().mark(function AS() {
        var AU;
        var AP;
        var AR = arguments;
        return M3().wrap(function (AQ) {
          while (true) {
            switch (AQ.prev = AQ.next) {
              case 0:
                AU = AR.length > 0 && AR[0] !== undefined && AR[0];
                if (M7) {
                  AQ.next = 16;
                  break;
                }
                AP = true;
                [MG, MT, MX].forEach(function (AB) {
                  if (AB.value != "") {
                    if (AB.classList.contains("error")) {
                      AP = false;
                    }
                  } else {
                    AP = false;
                  }
                });
                MH.innerHTML = "";
                if (!AU) {
                  AQ.next = 11;
                  break;
                }
                if (!AP) {
                  AQ.next = 9;
                  break;
                }
                AQ.next = 9;
                return J7();
              case 9:
                AQ.next = 16;
                break;
              case 11:
                Mz = false;
                ML.classList.add("hide");
                rL(false);
                A4();
                A5();
              case 16:
              case "end":
                return AQ.stop();
            }
          }
        }, AS);
      }));
      return J4.apply(this, arguments);
    }
    function J5() {
      return J6.apply(this, arguments);
    }
    function J6() {
      J6 = M5(M3().mark(function AS() {
        var AU;
        var AP;
        return M3().wrap(function (AR) {
          while (true) {
            switch (AR.prev = AR.next) {
              case 0:
                AU = M9.username;
                AP = JH;
                JK();
                AR.next = 5;
                return JV("/logout", {
                  sessionID: AP
                }, function (AQ) {
                  lZ("Error when logging out", AQ);
                }, function (AQ) {
                  if (AQ.error) {
                    lZ("Error when logging out", AQ.error);
                  } else {
                    lZ("Successfully Logged Out", `Sucessfully logged out of account: ${AU}`);
                  }
                });
              case 5:
              case "end":
                return AR.stop();
            }
          }
        }, AS);
      }));
      return J6.apply(this, arguments);
    }
    function J7() {
      return J8.apply(this, arguments);
    }
    function J8() {
      J8 = M5(M3().mark(function AS() {
        return M3().wrap(function (AU) {
          while (true) {
            switch (AU.prev = AU.next) {
              case 0:
                ME.classList.remove("hide");
                M7 = true;
                AU.next = 4;
                return JV("/signup", {
                  username: MG.value.trim(),
                  password: MT.value.trim()
                }, function (AP) {
                  ME.classList.add("hide");
                  M7 = false;
                  MH.innerHTML = AP;
                }, function (AP) {
                  ME.classList.add("hide");
                  M7 = false;
                  if (AP.error) {
                    MH.innerHTML = AP.error;
                  } else {
                    AP.stars = 0;
                    JI(AP);
                    ML.classList.add("hide");
                    rL(false);
                    A4();
                    A5();
                    setTimeout(function () {
                      var AR = i9.g[1];
                      ZD(1);
                      O4(AR.name, AR.description, AR.rarity, AR.stars);
                      JE(AR.stars);
                    }, 200);
                  }
                });
              case 4:
              case "end":
                return AU.stop();
            }
          }
        }, AS);
      }));
      return J8.apply(this, arguments);
    }
    function J9() {
      return JC.apply(this, arguments);
    }
    function JC() {
      JC = M5(M3().mark(function AS() {
        return M3().wrap(function (AU) {
          while (true) {
            switch (AU.prev = AU.next) {
              case 0:
                MI.classList.remove("hide");
                M7 = true;
                AU.next = 4;
                return JV("/login", {
                  username: MQ.value.trim(),
                  password: MB.value.trim()
                }, function (AP) {
                  MI.classList.add("hide");
                  M7 = false;
                  MK.innerHTML = AP;
                }, function (AP) {
                  MI.classList.add("hide");
                  M7 = false;
                  if (AP.error) {
                    MK.innerHTML = AP.error;
                  } else {
                    JI(AP);
                    MV.classList.add("hide");
                    rL(false);
                    A4();
                    A5();
                  }
                });
              case 4:
              case "end":
                return AU.stop();
            }
          }
        }, AS);
      }));
      return JC.apply(this, arguments);
    }
    function JV(AS, AU, AP, AR) {
      return JL.apply(this, arguments);
    }
    function JL() {
      JL = M5(M3().mark(function AS(AU, AP, AR, AQ) {
        return M3().wrap(function (AB) {
          while (true) {
            switch (AB.prev = AB.next) {
              case 0:
                return AB.abrupt("return", new Promise(function (AG, AT) {
                  var AX = fetch(M6 + AU, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      "content-type": "application/json"
                    },
                    body: JSON.stringify(AP)
                  });
                  AX.catch(function (Az) {
                    AR(Az);
                    AG();
                  });
                  var AF = AX.then(function (Az) {
                    return Az.json();
                  });
                  AF.catch(function (Az) {
                    AR(Az);
                    AG();
                  });
                  AF.then(function (Az) {
                    AQ(Az);
                    AG();
                  });
                }));
              case 1:
              case "end":
                return AB.stop();
            }
          }
        }, AS);
      }));
      return JL.apply(this, arguments);
    }
    function JI(AS) {
      var AU = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      JZ(AS.sessionID);
      M9 = AS;
      M8 = true;
      MM.classList.add("hide");
      MZ.classList.remove("hide");
      MZ.firstElementChild.innerHTML = M9.username;
      MZ.children[1].children[1].innerHTML = nP(M9.stars);
      O2(M9.stars);
      ZZ(JSON.parse(nQ(AS.achievements)));
      if (q7 == 3) {
        uz();
      }
      Jq();
      if (AU) {
        eQ();
      }
    }
    function JE(AS) {
      M9.stars += AS;
      MZ.children[1].children[1].innerHTML = nP(M9.stars);
      (function (AU) {
        if (AU) {
          var AP = Math.max(1, Math.floor(Math.abs(AU) / 15)) * Math.sign(AU);
          wF.unshift({
            value: AU,
            lastValue: null,
            text: "",
            time: 0.25,
            valueToUse: AU,
            timeUntilUse: 0.3,
            step: AP,
            size: 1
          });
        }
      })(AS);
    }
    function JK() {
      M9 = undefined;
      M8 = false;
      MM.classList.remove("hide");
      MZ.classList.add("hide");
      JZ();
      if (q7 == 3) {
        uz();
      }
      eQ();
      ZI();
    }
    function Jk() {
      if (JH) {
        JV("/user", {
          sessionID: JH
        }, function (AS) {
          lZ("Error when validating account", AS);
        }, function (AS) {
          if (AS.error) {
            lZ("Error when validating account", AS.error);
          } else if (AS.sessionID) {
            JI(AS, false);
          }
        });
      }
    }
    var JH = AL("sessionID");
    function JZ(AS) {
      if (AS) {
        JH = AS;
        AV("sessionID", AS);
      } else {
        JH = undefined;
        AI("sessionID");
      }
    }
    var JM = document.getElementById("notification-popup");
    var JJ = document.getElementById("notification-popup-title");
    var JD = document.getElementById("notification-popup-text");
    var JN = document.getElementById("notification-popup-ok-button");
    var JY = [];
    var JO = null;
    function JW() {
      if (JO) {
        JV("/readnotification", {
          sessionID: JH,
          id: JO
        }, function (AU) {
          lZ("Error when marking notification as read", AU);
        }, function (AU) {
          if (AU.error) {
            lZ("Error when marking notification as read", AU.error);
          }
        });
        JO = null;
      }
      var AS = JY.shift();
      if (AS) {
        JJ.innerHTML = AS.title + (JY.length == 0 ? "" : ` (+${JY.length})`);
        JD.innerHTML = AS.data;
        JM.classList.remove("hide");
        rL(true);
        JO = AS.id;
      } else {
        JM.classList.add("hide");
        rL(false);
      }
    }
    function Jq() {
      if (JH) {
        JV("/checknotifications", {
          sessionID: JH
        }, function (AS) {
          console.log("Error when checking notifications", AS);
        }, function (AS) {
          if (AS.error) {
            console.log("Error when checking notifications", AS.error);
          } else {
            JY = AS;
            JW();
          }
        });
      }
    }
    function JA(AS) {
      return function (AU) {
        if (Array.isArray(AU)) {
          return JR(AU);
        }
      }(AS) || function (AU) {
        if (typeof Symbol != "undefined" && AU[Symbol.iterator] != null || AU["@@iterator"] != null) {
          return Array.from(AU);
        }
      }(AS) || JP(AS) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function JS(AS, AU) {
      var AP = typeof Symbol != "undefined" && AS[Symbol.iterator] || AS["@@iterator"];
      if (!AP) {
        if (Array.isArray(AS) || (AP = JP(AS)) || AU && AS && typeof AS.length == "number") {
          if (AP) {
            AS = AP;
          }
          var AR = 0;
          function AQ() {}
          return {
            s: AQ,
            n: function () {
              if (AR >= AS.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AS[AR++]
                };
              }
            },
            e: function (AX) {
              throw AX;
            },
            f: AQ
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AB;
      var AG = true;
      var AT = false;
      return {
        s: function () {
          AP = AP.call(AS);
        },
        n: function () {
          var AX = AP.next();
          AG = AX.done;
          return AX;
        },
        e: function (AX) {
          AT = true;
          AB = AX;
        },
        f: function () {
          try {
            if (!AG && AP.return != null) {
              AP.return();
            }
          } finally {
            if (AT) {
              throw AB;
            }
          }
        }
      };
    }
    function JU(AS, AU) {
      return function (AP) {
        if (Array.isArray(AP)) {
          return AP;
        }
      }(AS) || function (AP, AR) {
        var AQ = AP == null ? null : typeof Symbol != "undefined" && AP[Symbol.iterator] || AP["@@iterator"];
        if (AQ != null) {
          var AB;
          var AG;
          var AT;
          var AX;
          var AF = [];
          var Az = true;
          var Aj = false;
          try {
            AT = (AQ = AQ.call(AP)).next;
            if (AR === 0) {
              if (Object(AQ) !== AQ) {
                return;
              }
              Az = false;
            } else {
              for (; !(Az = (AB = AT.call(AQ)).done) && (AF.push(AB.value), AF.length !== AR); Az = true);
            }
          } catch (S0) {
            Aj = true;
            AG = S0;
          } finally {
            try {
              if (!Az && AQ.return != null && (AX = AQ.return(), Object(AX) !== AX)) {
                return;
              }
            } finally {
              if (Aj) {
                throw AG;
              }
            }
          }
          return AF;
        }
      }(AS, AU) || JP(AS, AU) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function JP(AS, AU) {
      if (AS) {
        if (typeof AS == "string") {
          return JR(AS, AU);
        }
        var AP = Object.prototype.toString.call(AS).slice(8, -1);
        if (AP === "Object" && AS.constructor) {
          AP = AS.constructor.name;
        }
        if (AP === "Map" || AP === "Set") {
          return Array.from(AS);
        } else if (AP === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AP)) {
          return JR(AS, AU);
        } else {
          return undefined;
        }
      }
    }
    function JR(AS, AU) {
      if (AU == null || AU > AS.length) {
        AU = AS.length;
      }
      for (var AP = 0, AR = new Array(AU); AP < AU; AP++) {
        AR[AP] = AS[AP];
      }
      return AR;
    }
    JN.onclick = function () {
      JW();
    };
    var JQ = document.getElementById("ping");
    var JB = document.getElementById("server-tick-time");
    var JG = document.getElementById("client-tick-time");
    var JT = document.getElementById("fps");
    var JX = document.getElementById("player-count");
    var JF = document.getElementById("total-players");
    var Jz = document.getElementById("extra-performance-info");
    var Jj = document.getElementById("position");
    var t0 = document.getElementById("server-name");
    document.getElementById("server-speed");
    var t1 = document.getElementById("chat");
    var t2 = Array.from(document.getElementsByClassName("hud"));
    var t3 = true;
    var t4 = false;
    var t5 = false;
    var t6 = false;
    var t7 = [];
    var t8 = [];
    var t9 = 0;
    var tC = "";
    var tV = "";
    var tL = 0;
    var tI = null;
    var tE = null;
    function tK() {
      tL = 0;
    }
    var tH = 0;
    var tZ = 0;
    var tM = "";
    function tJ() {
      tH = 0;
      tM = "";
    }
    var tD = false;
    function tN(AS, AU = false) {
      if (AU) {
        if (!AS) {
          tD = true;
        }
      }
      if (AS) {
        tD = false;
      }
      if (t3 = AS) {
        t2.forEach(function (AP) {
          if (AP.id != "chat" || EV.showChat && tY) {
            AP.classList.remove("hidden");
          }
        });
      } else {
        t2.forEach(function (AP) {
          AP.classList.add("hidden");
        });
      }
    }
    var tY = true;
    function tO(AS) {
      if ((tY = AS) && EV.showChat) {
        t1.classList.remove("hidden");
      } else {
        t1.classList.add("hidden");
      }
    }
    var tW;
    var tq = true;
    var tA = 0;
    var tS = 0;
    var tU = 0;
    var tP = 0;
    var tR = 0;
    var tQ = 0;
    var tB = false;
    var tG = i9.k[10];
    var tT = {
      x: 0,
      y: 0
    };
    var tX = [];
    var tF = "main";
    var tz = "default";
    var tj = 0;
    var D0 = 1;
    var D1 = 1;
    var D2 = {};
    function D3(AS, AU = 1) {
      tj = tz;
      D0 = 0;
      D1 = AU;
      tz = AS;
    }
    function D4(AS, AU) {
      YS = AS;
      YP = AU;
      YU = 0;
    }
    var D5 = Date.now();
    var D6 = performance.now();
    var D7 = 16.6666667;
    var D8 = null;
    var D9 = document.getElementById("overlay-canvas");
    var DC = document.getElementById("darkness-canvas");
    var DV = document.getElementById("render-canvas");
    var DL = document.getElementById("hud-canvas");
    var DI = document.getElementById("ui-canvas");
    var DE = document.getElementById("achievement-canvas");
    var DK = document.getElementById("game-canvas");
    var Dk = document.getElementById("server-select-canvas");
    var DH = DK.getContext("2d");
    var DZ = D9.getContext("2d");
    var DM = DC.getContext("2d");
    var DJ = DV.getContext("2d");
    var DD = DL.getContext("2d");
    var DN = DI.getContext("2d");
    var DY = DE.getContext("2d");
    var DO = Dk.getContext("2d");
    var DW = DH;
    var Dq = 0;
    var DA = 0;
    var DS = false;
    Dk.addEventListener("mousemove", function (AS) {
      Dq = AS.offsetX * N7;
      DA = AS.offsetY * N7;
    });
    Dk.addEventListener("mousedown", function (AS) {
      Dq = AS.offsetX * N7;
      DA = AS.offsetY * N7;
      DS = true;
    });
    window.addEventListener("click", function (AS) {
      if (AS.target != Dk) {
        YR = false;
      }
    });
    var DU = 1;
    var DP = 1;
    var DR = 0;
    var DQ = 0;
    var DB = 0;
    var DG = 0;
    var DT = 1000;
    var DX = 1;
    var DF = 0;
    var Dz = 0;
    var Dj = 1;
    function N0() {
      ND = false;
      var AS = Date.now();
      D6 = performance.now();
      D7 = (AS - D5) / 1000;
      D5 = AS;
      var AU;
      var AP;
      var AR = performance.now();
      DK.style.cursor = "default";
      try {
        (function (U4) {
          var U5 = [];
          var U6 = 0;
          function U7() {
            var UV = pI.entries[U8];
            var UL = pH.entries.find(function (UI) {
              return UI.id == UV.id;
            });
            if (UL) {
              Object.keys(UV).forEach(function (UI) {
                switch (UI) {
                  case "formattedScore":
                    break;
                  case "scoreRatio":
                    UL.scoreRatio = nD(UL.scoreRatio, UV.scoreRatio, 0.05, U4);
                    if (!isFinite(UL.scoreRatio)) {
                      UL.scoreRatio = UV.scoreRatio;
                    }
                    break;
                  case "score":
                    UL.score = nD(UL.score, UV.score, 0.05, U4);
                    if (!isFinite(UL.score)) {
                      UL.score = UV.score;
                    }
                    UL.formattedScore = AE(UL.score);
                    break;
                  case "fadeTime":
                    UL.fadeTime = nD(UL.fadeTime, 1, 0.001, U4);
                    break;
                  default:
                    UL[UI] = UV[UI];
                }
              });
            } else {
              UL = nC(UV);
            }
            if (UL.index == null) {
              UL.index = U6;
            }
            UL.index = nD(UL.index, U6, 0.01, U4);
            U6++;
            U5.push(UL);
          }
          for (var U8 = 0; U8 < pI.entries.length; U8++) {
            U7();
          }
          if (pH.length == null) {
            pH.length = U6;
          }
          pH.length = nD(pH.length, U6, 0.01, U4);
          if (pH.entries) {
            function U9() {
              var UV = pH.entries[UC];
              if (!pI.entries.find(function (UL) {
                return UL.id == UV.id;
              })) {
                UV.fadeTime = nD(UV.fadeTime, 0, 0.001, U4);
                if (UV.fadeTime > 0.1) {
                  U5.push(UV);
                }
              }
            }
            for (var UC = 0; UC < pH.entries.length; UC++) {
              U9();
            }
          }
          pH.highestScore = pI.highestScore;
          pH.playerCount = pI.playerCount;
          pH.showPlayers = pI.showPlayers;
          pH.entries = U5;
        })(D7);
        (function (U4) {
          OB = 0;
          OG = 0;
          OQ.forEach(function (U5, U6) {
            var U7 = 1 / (Math.pow(function (U8) {
              var U9 = DR - U8.x;
              var UC = DQ - U8.y;
              return Math.sqrt(U9 * U9 + UC * UC);
            }(U5), 2) / 100000);
            U7 = Math.min(1, U7);
            OB += U7 * U5.power * (U5.time / U5.maxTime) * (1 - Math.random() * 2);
            OG += U7 * U5.power * (U5.time / U5.maxTime) * (1 - Math.random() * 2);
            U5.time -= U4;
            if (U5.time < 0) {
              OQ.splice(U6, 1);
            }
          });
        })(D7);
        Object.entries(pA).forEach(function (U4) {
          var U5 = JU(U4, 2);
          var U6 = U5[0];
          var U7 = U5[1];
          U7.forEach(function (U8, U9) {
            U8.time -= D7;
            if (U8.time < 0) {
              U7.splice(U9, 1);
            }
            U8.typingFade = Math.min(1, U8.typingFade + D7 / 0.5);
          });
          if (U7.length == 0) {
            delete pA[U6];
          }
        });
        Object.entries(typingData).forEach(function (U4) {
          var U5 = JU(U4, 2);
          var U6 = U5[0];
          var U7 = U5[1];
          U7.time -= D7;
          if (U7.time > 0) {
            U7.lerping = Math.min(U7.lerping + D7 / 0.5, 1);
          } else {
            U7.lerping = Math.max(U7.lerping - D7 / 0.5, 0);
          }
          if (U7.lerping == 0 && U7.time < 0) {
            delete typingData[U6];
          }
        });
        pU.forEach(function (U4, U5) {
          U4.time -= D7;
          if (U4.time < 0) {
            pU.splice(U5, 1);
          }
        });
        U6: if (tq) {
          var AQ = lG();
          if (AQ == {} || AQ == null) {
            return;
          }
          var AB = AQ.tanks;
          var AG = AQ.polygons;
          var AT = AQ.bullets;
          var AX = AQ.rifts;
          var AF = AQ.mapSize;
          AQ.tickTime;
          var Az = AQ.x;
          var Aj = AQ.y;
          Oj(D7, AX);
          if (AF != null) {
            DP = nD(DP, 4800, 0.05, D7);
            DU = DP / Math.max(DK.width, DK.height * 1.7777777777777777);
            DX = 5 / DU;
            if (Az != null && Aj != null) {
              DB = nD(DB, Az, 0.2, D7) + OB;
              DG = nD(DG, Aj, 0.2, D7) + OG;
              DR = DB;
              DQ = DG;
            }
            DT = AF;
            sR();
            N5(AG, AB, AT, AX, null);
            DW = DH;
          } else {
            Oj(D7);
            DP = nD(DP, (D0 < 0.5 && D0 > 0.4 ? 0.1 : 1) * 2400, 0.05, D7);
            DU = DP / Math.max(DK.height, DK.width);
            var S0 = AS / 7500;
            var S1 = D0;
            D0 = nD(D0, 1, 0.1, D7);
            if (S1 < 0.5 && D0 > 0.5) {
              Oz();
            }
            DB = Math.cos(S0) * 200 + (D0 < 0.5 ? D0 : D0 - 1) * -2000 * D1;
            DG = Math.sin(S0) * 200;
            DR = DB;
            DQ = DG;
            var S2 = H7[D0 < 0.5 ? tj : tz] || H7.default;
            DT = S2.dimension.mapSize;
            sR(true);
            tX.forEach(function (U4) {
              if (NC(U4) && U4.below) {
                OO(U4);
              }
            });
            var S3;
            var S4 = JS(S2.rifts);
            try {
              for (S4.s(); !(S3 = S4.n()).done;) {
                OY(null, S3.value);
              }
            } catch (U4) {
              S4.e(U4);
            } finally {
              S4.f();
            }
            for (var S5 = 0; S5 < S2.polygons.length; S5++) {
              s0(S2.polygons[S5]);
            }
            for (var S6 = 0; S6 < S2.tanks.length; S6++) {
              var S7 = S2.tanks[S6];
              s1(S7.x, S7.y, S7.size, S7.d, S7.sides, S7.outerSides, S7.outerSize, S7.color, S7.barrels, S7.gadgets, S7.layers, S7.radiant);
            }
            for (var S8 = 0; S8 < S2.tanks.length; S8++) {
              var S9 = S2.tanks[S8];
              S9.y *= -1;
              S9.lastColor = S9.color;
              s3(S9);
              S9.y *= -1;
            }
            tX.forEach(function (U5) {
              if (NC(U5) && !U5.below) {
                OO(U5);
              }
            });
            N5([], [], [], [], null, false);
            DW = DH;
            var SC = (D0 * 2 - 1) * 3500 * D1;
            (function (U5, U6, U7, U8) {
              DW.beginPath();
              DW.arc(U5, U6, U7, 0, Math.PI * 2, false);
              DW.fillStyle = U8;
              DW.fill();
            })(DK.width / 2 + SC / DU, DK.height / 2 + 0 / DU, 1100 / DU, "#171717");
          }
          if (q7 == 1) {
            (DW = DZ).clearRect(0, 0, D9.width, D9.height);
            var SV = D9.width / 2;
            var SL = D9.height / 2 - N8 * 15;
            var SI = tW.isCelestial ? N8 * 10 : N8 * 5;
            var SE = N8 / 10;
            var SK = Y1 / 4;
            var SH = NY(NS(tW.team, tW.team, tW.id, tW.id), tW.isInvulnerable, tW.radiant);
            if (tW.outerSize > 0) {
              OA(SV, SL, SI + tW.outerSize * SI, "#5F676C", tW.outerSides, SK, false, SE, SI);
            }
            s8(SV, SL, SI, SK, tW.barrels, false, SE);
            OA(SV, SL, SI, SH, tW.sides, SK, false, SE);
            s2(SV, SL, SK, SI, SH, tW.layers, 0, tW.radiant, false, false, SE);
            s5(SV, SL, SI, SK, tW.gadgets, SH, 0, tW.radiant, false, false, SE);
            DW = DH;
          } else if (q7 == 2) {
            (function () {
              (DW = DO).globalAlpha = 1;
              DW.clearRect(0, 0, Dk.width, Dk.height);
              YB = nD(YB, YR ? 1 : 0, 0.001, D7);
              var U5 = serversList[currentServerId] || {};
              var U6 = U5.gamemode != null ? getColorFromCode(U5.gamemode) : "#c0c0c0";
              var U7 = U5.gamemode != null ? getNameFromCode(U5.gamemode) : "Connecting...";
              var U8 = U5.region || "???";
              var U9 = Wz[U5.gamemode] || [];
              Yq = nD(Yq, 1, 0.01, D7);
              YU = nD(YU, 1, 0.001, D7);
              var UC = NR(U6.substring(1), YO.substring(1), nD(0, 1, 0.01, D7));
              YO = UC;
              var UV = Dk.width;
              var UL = Dk.height;
              var UI = UV / 2;
              var UE = UL / 2;
              var UK = N8 * 1;
              sV(UI, UE, UV, UL, UK, UC);
              sV(UI, UE + UL / 4, UV, UL / 2, UK, NP(UC));
              sL(UI, UE, UV, UL, UK);
              DW.lineWidth = N8 * 0.4 * 2;
              DW.strokeStyle = "black";
              DW.clip();
              DW.stroke();
              var Uk = Dk.matches(":hover");
              var UH = YY[0].size;
              DW.globalAlpha = Math.max(0, Math.min(1, Yq * 2 - 1));
              YZ(UI + N8 * 40 * (Yq - 1) * YA, UE - N8 * 2.5, U7, N8 * 4 * UH, N8 * 0.6);
              DW.globalAlpha = Math.max(0, Math.min(1, (1 - Yq) * 2 - 1));
              YZ(UI + N8 * 40 * Yq * YA, UE - N8 * 2.5, YW, N8 * 4 * UH, N8 * 0.6);
              DW.globalAlpha = 1;
              YZ(UI, UE + N8 * 1.6, "Region", N8 * 2, N8 * 0.6);
              UH = YY[1].size;
              DW.globalAlpha = Math.max(0, Math.min(1, YU * 3 - 1.5));
              YZ(UI + N8 * 10 * (YU - 1) * YP, UE + N8 * 4.4, U8, N8 * 2.5 * UH, N8 * 0.6);
              DW.globalAlpha = Math.max(0, Math.min(1, (1 - YU) * 3 - 1.5));
              YZ(UI + N8 * 10 * YU * YP, UE + N8 * 4.4, YS, N8 * 2.5 * UH, N8 * 0.6);
              DW.globalAlpha = 1;
              var UZ = {
                x: Dq,
                y: DA
              };
              Dk.style.cursor = "default";
              if (!YR) {
                var UM;
                var UJ = JS(YY);
                try {
                  for (UJ.s(); !(UM = UJ.n()).done;) {
                    var UD = UM.value;
                    var UN = UD.id == "gamemode";
                    var UY = YM(UN ? U7 : U8, UN ? N8 * 4 : N8 * 2.5, N8 * 0.6);
                    var UO = UY.width;
                    var UW = UY.actualBoundingBoxAscent + UY.actualBoundingBoxDescent + N8 * 0.6;
                    var Uq = pJ(UZ, {
                      x: UI - UO / 2,
                      y: UE + (UN ? -2.5 : 4.4) * N8 - UW / 2 - N8 * 0.6,
                      width: UO,
                      height: UW
                    }) && Uk && (UN ? WF.length : U9.length) > 1;
                    UD.hovered = Uq;
                    UD.size = nJ(UD.size, Uq ? 1.1 : 1, 0.2);
                    if (Uq) {
                      Dk.style.cursor = "pointer";
                      if (DS) {
                        DS = false;
                        YR = true;
                        YQ = UN;
                      }
                    }
                  }
                } catch (PE) {
                  UJ.e(PE);
                } finally {
                  UJ.f();
                }
              }
              var UA;
              var US = JS(YD);
              try {
                for (US.s(); !(UA = US.n()).done;) {
                  var UU = UA.value;
                  var UP = UU.sign;
                  var UR = {
                    x: UI + N8 * 17 * UP,
                    y: UE - N8 * 2.5,
                    width: N8 * 6,
                    height: N8 * 8
                  };
                  UR.x -= UR.width / 2;
                  UR.y -= UR.height / 2;
                  var UQ = !YR && pJ(UZ, UR) && Uk;
                  UU.size = nJ(UU.size, UQ && r0 ? 1.2 : 1, 0.2);
                  YZ(UI + N8 * 17 * UP, UE - N8 * 2.5, UP == 1 ? ">" : "<", UU.size * 6 * N8, N8 * 0.6, r0 ? "#ffffff" : "#c0c0c0");
                  if (UQ && r0) {
                    Dk.style.cursor = "pointer";
                    if (DS) {
                      DS = false;
                      YA = -UP;
                      Yq = 0;
                      YW = U7;
                      UU.size = 1.5;
                      if (UP == 1) {
                        qM();
                      } else {
                        qZ();
                      }
                    }
                  }
                }
              } catch (PK) {
                US.e(PK);
              } finally {
                US.f();
              }
              var UB;
              var UG = JS(YN);
              try {
                for (UG.s(); !(UB = UG.n()).done;) {
                  var UT = UB.value;
                  var UX = UT.sign;
                  var UF = {
                    x: UI + N8 * 9 * UX,
                    y: UE + N8 * 4.4,
                    width: N8 * 4,
                    height: N8 * 6
                  };
                  UF.x -= UF.width / 2;
                  UF.y -= UF.height / 2;
                  var Uz = !YR && pJ(UZ, UF) && Uk;
                  UT.size = nJ(UT.size, Uz && r1 ? 1.2 : 1, 0.2);
                  YZ(UI + N8 * 9 * UX, UE + N8 * 4.4, UX == 1 ? ">" : "<", UT.size * 4 * N8, N8 * 0.6, r1 ? "#ffffff" : "#c0c0c0");
                  if (Uz && r1) {
                    Dk.style.cursor = "pointer";
                    if (DS) {
                      DS = false;
                      YP = -UX;
                      YU = 0;
                      YS = U8;
                      UT.size = 1.5;
                      if (UX == 1) {
                        qD();
                      } else {
                        qJ();
                      }
                    }
                  }
                }
              } catch (Pk) {
                UG.e(Pk);
              } finally {
                UG.f();
              }
              if (YB > 0.05) {
                if (YB < 0.95) {
                  DW = function (PH, PZ) {
                    sz.width = PH;
                    sz.height = PZ;
                    return sj;
                  }(Dk.width, Dk.height);
                }
                sV(UI, UE, UV, UL, UK, "#000000");
                var Uj = Math.ceil(Math.sqrt(YQ ? WF.length : U9.length));
                var P0 = 0;
                var P1 = 0;
                for (var P2 = 0; P2 < (YQ ? WF.length : U9.length); P2++) {
                  var P3 = undefined;
                  var P4 = undefined;
                  var P5 = undefined;
                  if (YQ) {
                    P4 = getColorFromCode(P3 = WF[P2]);
                  } else {
                    P5 = U9[P2];
                    P4 = i9.a[P2];
                  }
                  var P6 = UV / Uj;
                  var P7 = UL / Uj;
                  var P8 = UI + P6 * (P0 + 0.5) - UV / 2;
                  var P9 = UE + P7 * (P1 + 0.5) - UL / 2;
                  var PC = {
                    x: P8,
                    y: P9,
                    width: P6,
                    height: P7
                  };
                  PC.x -= PC.width / 2;
                  PC.y -= PC.height / 2;
                  var PV = YR && pJ(UZ, PC) && Uk;
                  if (PV && (Dk.style.cursor = "pointer", DS)) {
                    DS = false;
                    YR = false;
                    var PL = nE();
                    if (YQ) {
                      if (P2 != r3) {
                        YA = -PL;
                        Yq = 0;
                        YW = P3;
                        qW(P2, PL);
                      }
                    } else if (P2 != r4) {
                      YP = -PL;
                      YU = 0;
                      YS = P5;
                      qO(P2, PL);
                    }
                  }
                  var PI = N8 * 0.5;
                  sV(P8, P9, P6 - PI, P7 - PI, UK, P4);
                  sV(P8, P9 + P7 / 4, P6 - PI, P7 / 2 - PI, UK, NP(P4));
                  sL(P8, P9, P6, P7, UK);
                  DW.lineWidth = N8 * 0.4 * 2;
                  DW.strokeStyle = PV ? "white" : "black";
                  DW.save();
                  DW.clip();
                  DW.stroke();
                  DW.restore();
                  YZ(P8, P9, YQ ? getNameFromCode(P3) : P5, N8 * 5 / Uj, N8 * 0.6);
                  if (++P0 == Uj) {
                    P0 = 0;
                    P1++;
                  }
                }
                if (DS) {
                  YR = false;
                }
                if (YB < 0.95) {
                  (DW = DO).globalAlpha = YB;
                  DW.drawImage(sz, 0, 0);
                }
              }
              DW = DH;
              DS = false;
            })();
          }
        } else {
          var SZ = lG();
          AP = SZ;
          if (Object.keys(AP).length == 0) {
            DP = nD(DP, 2400, 0.05, D7);
            DU = DP / Math.max(DK.height, DK.width);
            sR(false, false);
            if ((NM += D7) > 0.3) {
              var SM = DK.width / 2;
              var SJ = DK.height / 2;
              DW.globalAlpha = Math.min((NM - 0.3) * 1.5, 1);
              YZ(SM, SJ, "Joining Server...", N8 * 10, 10);
              if (NM > 3) {
                DW.globalAlpha = Math.min((NM - 3) * 1.5, 1);
                YZ(SM, SJ + N8 * 8, "If this takes too long, there might be a problem with the server or your connection.", N8 * 2.5, 10);
              }
              if (NM > 15) {
                DW.globalAlpha = Math.min((NM - 15) * 1.5, 1);
                YZ(SM, SJ + N8 * 12, "Reloading the page may fix the problem.", N8 * 2, 10);
              }
            }
            DW.globalAlpha = 1;
            break U6;
          }
          var SD = SZ.me;
          var SN = SZ.tanks;
          var SY = SZ.polygons;
          var SO = SZ.bullets;
          var SW = SZ.rifts;
          var Sq = SZ.mapSize;
          var SA = SZ.tickTime;
          SZ.dt;
          var SS = SZ.dimension;
          var SU = SZ.cameraSizeMultiplier;
          Oj(D7, SW);
          tF = SS;
          if (!SD) {
            break U6;
          }
          if (NZ) {
            NZ = false;
            tN(true);
            window.addEventListener("mousedown", kP);
            window.addEventListener("mouseup", kR);
            window.addEventListener("keydown", kO);
            window.addEventListener("keyup", kW);
            window.addEventListener("mousemove", kI);
            window.addEventListener("click", kI);
            window.addEventListener("touchstart", kJ);
            window.addEventListener("touchmove", kD);
            window.addEventListener("touchend", kN);
            window.addEventListener("focus", kT);
            window.addEventListener("blur", kT);
          }
          if (SA && !Number.isNaN(SA)) {
            var SP = pZ(tP, SA);
            tP = tU;
            tU = Math.round(SP * 10) / 10;
          }
          tG = NY(NS(SD.team, SD.team, SD.id, SD.id), SD.isInvulnerable, SD.radiant);
          if (WT) {
            (function (U5) {
              if (!editing) {
                kZ -= U5;
                if (kE[1].selected) {
                  kZ = 0.3;
                }
                if (kZ > 0) {
                  kK += kE[1].x * 6;
                  kH += kE[1].y * 6;
                } else {
                  var U6 = nD(1, 0, 0.001, U5);
                  kK *= U6;
                  kH *= U6;
                }
                var U7 = kK / DU / 2;
                var U8 = kH / DU / 2;
                U7 = n9(U7, -window.innerWidth / 2, window.innerWidth / 2);
                U8 = n9(U8, -window.innerHeight / 2, window.innerHeight / 2);
                WC(kK = U7 * DU * 2, kH = U8 * DU * 2);
              }
            })(D7);
          }
          kG();
          if (k7) {
            k2 = AU = k2 + k3 * 1.2 * D7;
            W2(AU);
          }
          SD.d = k2;
          if (editmode && editing) {
            if (currentWeapon.barrels) {
              SD.barrels = currentWeapon.barrels;
            }
            SD.oldGadgets = SD.gadgets;
            if (currentBody.gadgets != null) {
              SD.gadgets = currentBody.gadgets;
            }
            if (currentBody.layers != null) {
              SD.layers = currentBody.layers;
            }
            if (currentBody.outerSides != null) {
              SD.outerSides = currentBody.outerSides;
            }
            if (currentBody.outerSize != null) {
              SD.outerSize = currentBody.outerSize;
            }
            if (currentBody.sides != null) {
              SD.sides = currentBody.sides;
            }
            if (currentBody.radiant != null) {
              SD.radiant = currentBody.radiant;
            }
            if (currentBody.team != null) {
              SD.team = currentBody.team;
            }
            if (currentBody.visualTeam != null) {
              SD.team = currentBody.visualTeam;
            }
          }
          DT = Sq;
          if (EV.staticCamera) {
            DB = SD.x + OB;
            DG = SD.y + OG;
          } else {
            DB = nD(DB, SD.x, 0.000001, D7) + OB;
            DG = nD(DG, SD.y, 0.000001, D7) + OG;
          }
          DR = DB;
          DQ = DG;
          if (SD.size >= 0.1) {
            DP = nD(DP, (0.8 + SD.size / 30 * 0.2) * 2400 * (SU || 1), 0.05, D7);
            DU = DP / Math.max(DK.width, DK.height * 1.7777777777777777);
          }
          var SR = SW.filter(function (U5) {
            return U5.type == 0;
          });
          var SQ = 0;
          if (SR.length > 0) {
            var SB = null;
            var SG = null;
            var ST = null;
            SR.forEach(function (U5) {
              var U6 = Math.sqrt(Math.pow(U5.x - DB, 2) + Math.pow(U5.y - DG, 2));
              var U7 = U6 / U5.size;
              if (ST == null || SB > ST.size * 10 && SG > U7 || U5.size > ST.size) {
                SB = U6;
                SG = U7;
                ST = U5;
              }
            });
            var SX = Math.min(1000, Math.max(1, Math.pow(ST.size, 1.5))) / 1000;
            var SF = (0.5 + nN(Math.min(1, SB / (ST.size * 15)), 3, true) * 0.5 * SX) / (0.5 + SX * 0.5);
            var Sz = 1 - SF;
            DR = nJ(DR, ST.x, Sz);
            DQ = nJ(DQ, ST.y, Sz);
            Dj = nD(Dj, SF, 0.05, D7);
            SQ = Math.min(0.5, 1 - Math.min(1, SB / (ST.size * 25))) * 0.35;
          } else {
            Dj = nD(Dj, 1, 0.05, D7);
          }
          DU *= Dj;
          DF = SD.x - DR;
          Dz = SD.y - DQ;
          DX = 5 / DU;
          sR();
          N5(SY, SN, SO, SW, SD, true, SQ);
          (function (U5, U6) {
            if (WT && EV.showDroneTrajectory) {
              (function () {
                if (Math.abs(kK) + Math.abs(kH) > 2) {
                  sK(DK.width / 2 + kK / DU, DK.height / 2 + kH / DU, 10 / DU, "#000000", false);
                }
              })();
            }
            if (EV.minimap && !editing) {
              (function (UT, UX) {
                var UF;
                var Uz = 0;
                var Uj = 0;
                var P0 = kz[tF];
                UF = P0 || kj;
                var P1 = DT / UF.trueMapSize;
                var P2 = 150;
                var P3 = Uz + (P2 + 20) / 2;
                var P4 = Uj + (P2 + 20) / 2;
                var P5 = D2.visual.showMinimap;
                var P6 = false;
                if (UT) {
                  if (!(P6 = UT.x > -P1 && UT.x < P1 && UT.y > -P1 && UT.y < P1)) {
                    P5 = false;
                  }
                }
                wU = nD(wU, P5 ? 0.5 : 0, 0.5, D7);
                DW.globalAlpha = wU;
                DW.fillStyle = UF.visual.backgroundColor;
                DW.fillRect(P3 - P2 / 2, P4 - P2 / 2, P2, P2);
                for (var P7 = 0; P7 < UF.bases.length; P7++) {
                  var P8 = UF.bases[P7];
                  DW.fillStyle = NS(0, P8.team, 0, 0);
                  var P9 = P8.width * UF.trueMapSize;
                  var PC = P8.height * UF.trueMapSize;
                  DW.fillRect(P3 - (-P8.x / UF.trueMapSize + P9 / 2) * P2 / 2, P4 - (-P8.y / UF.trueMapSize + PC / 2) * P2 / 2, P9 * P2 / 2, PC * P2 / 2);
                }
                if (UT && P6) {
                  (function (PI, PE, PK, Pk = 6, PH = 10) {
                    DW.fillStyle = "black";
                    DW.translate(PI, PE);
                    DW.rotate(PK - nV(90));
                    DW.beginPath();
                    DW.moveTo(PH / 2, 0);
                    DW.lineTo(PH / -2, Pk / 2);
                    DW.lineTo(PH / -2, Pk / -2);
                    DW.fill();
                    DW.setTransform(1, 0, 0, 1, 0, 0);
                  })(P3 + UT.x / P1 * P2 / 2, P4 + UT.y / P1 * P2 / 2, UT.d);
                }
                if (UX) {
                  DW.globalAlpha = wU * 0.5;
                  for (var PV = 0; PV < UX.length; PV++) {
                    var PL = UX[PV];
                    if (PL.x > -P1 && PL.x < P1 && PL.y > -P1 && PL.y < P1) {
                      wP(P3 + PL.x / P1 * P2 / 2, P4 + PL.y / P1 * P2 / 2, PL);
                    }
                  }
                  DW.globalAlpha = wU;
                }
                DW.lineCap = "round";
                DW.strokeStyle = "black";
                DW.lineWidth = 5;
                DW.strokeRect(P3 - P2 / 2, P4 - P2 / 2, P2, P2);
                DW.globalAlpha = 1;
              })(U5, U6);
            }
            var U7 = NS(U5.nameColor, U5.nameColor);
            wJ = nD(wJ, k4 ? 1 : 0, 0.05, D7);
            wM = nD(wM, k5 ? 1 : 0, 0.05, D7);
            if (wJ > 0.05) {
              wO(true, U5.isCelestial);
            }
            if (wM > 0.05) {
              wO(false, U5.isCelestial);
            }
            DW.globalAlpha = 1;
            var U8 = DK.width / 2;
            var U9 = DK.height;
            DW.lineCap = "round";
            DW.strokeStyle = "black";
            DW.lineWidth = 30;
            DW.beginPath();
            DW.moveTo(-180 + U8, U9 - 20);
            DW.lineTo(180 + U8, U9 - 20);
            DW.stroke();
            DW.strokeStyle = tG;
            DW.lineWidth = 20;
            DW.beginPath();
            DW.moveTo(-180 + U8, U9 - 20);
            DW.lineTo(Math.min(Math.max(U5.score / U5.xpToNextLevel, 0), 1) * 360 - 180 + U8, U9 - 20);
            DW.stroke();
            YZ(U8, U9 - 19, AE(U5.score) + " / " + AE(U5.xpToNextLevel), 22, 5);
            if (EV.showHealthBarOnHUD) {
              var UC = Math.min(Math.max(U5.hp / U5.maxHP, 0), 1);
              var UV = 300;
              var UL = UV / 2;
              DW.lineCap = "round";
              DW.strokeStyle = "black";
              DW.lineWidth = 25;
              DW.beginPath();
              DW.moveTo(-UL + U8, U9 - 50);
              DW.lineTo(UL + U8, U9 - 50);
              DW.stroke();
              DW.strokeStyle = tG;
              DW.lineWidth = 15;
              DW.beginPath();
              DW.moveTo(-UL + U8, U9 - 50);
              DW.lineTo(UV * UC - UL + U8, U9 - 50);
              DW.stroke();
              YZ(U8, U9 - 48.5, `Health: ${nZ(UC * 100, 1)}%`, 18, 5);
              U9 -= 30;
            }
            var UI = U5.totalScore;
            if (pH && pH.entries[0]) {
              UI = pH.entries[0].score;
            }
            var UE = Math.min(Math.max(U5.totalScore / UI, 0), 1) || 0;
            var UK = EV.showHealthBarOnHUD ? 230 : 270;
            var Uk = UK / 2;
            DW.lineCap = "round";
            DW.strokeStyle = "black";
            DW.lineWidth = 25;
            DW.beginPath();
            DW.moveTo(-Uk + U8, U9 - 50);
            DW.lineTo(Uk + U8, U9 - 50);
            DW.stroke();
            DW.strokeStyle = tG;
            DW.lineWidth -= 10;
            DW.beginPath();
            DW.moveTo(-Uk + U8, U9 - 50);
            DW.lineTo(UK * UE - Uk + U8, U9 - 50);
            DW.stroke();
            YZ(U8, U9 - 48.5, `Score: ${AE(U5.totalScore)}`, 18, 5);
            YZ(U8, U9 - 77, `Level ${U5.level} ${U5.className}`, 18, 10, U7);
            if (EV.showNames) {
              YZ(U8, U9 - 113, U5.name, 50, 10, U7);
            }
            if (!editing) {
              (function () {
                Y0 = false;
                for (var UT = 0; UT < l2.length; UT++) {
                  if (l2[UT] < 15) {
                    Y0 = true;
                    break;
                  }
                }
                if (WT) {
                  var UX = false;
                  var UF = l7[l7.length - 1];
                  if (UF && (UF.offset > 0.2 || UF.showing)) {
                    UX = true;
                  }
                  var Uz = l8[l8.length - 1];
                  if (Uz && (Uz.offset > 0.2 || Uz.showing)) {
                    UX = true;
                  }
                  YC = nD(YC, l4 > 0 && Y0 && !UX ? 1 : 0, 0.05, D7);
                } else {
                  YC = nD(YC, l4 > 0 && Y0 || mF ? 1 : 0, 0.05, D7);
                }
                var Uj = YC * 400 - 400;
                if (WT) {
                  var P0 = DK.width / 2;
                  var P1 = 0;
                  var P2 = 120;
                  var P3 = 0;
                  var P4 = 0;
                  if (YC > 0.2) {
                    Y4 = nD(Y4, 1, 0.00001, D7);
                    var P5 = Math.min(4, Y7.length);
                    for (var P6 = 0; P6 < Y7.length; P6++) {
                      var P7 = Y7[P6];
                      Y2[P6] = nD(Y2[P6], 1, 0.00001, D7);
                      l3[P6] = nD(l3[P6], l2[P6], 0.1, D7);
                      YE(P0 + (P5 == 1 ? 0 : P3 / (P5 - 1) - 0.5) * 400, P1 + Uj + P2 * P4 + 75, P7.name, P7.color, l2[P6], l3[P6], Y2[P6] * 100);
                      if (++P3 == 4) {
                        P3 = 0;
                        P4++;
                        P5 = Math.min(4, Y7.length - P6 - 1);
                      }
                    }
                    P4 += P3 > 0 ? 1 : 0;
                    P3 = 0;
                    if (l4 > 0 && Y0) {
                      YZ(P0, P1 + Uj - 45 + P2 * P4 + 75, `x${l4}`, Y4 * 30, 10, "#ffffff");
                    }
                  }
                } else {
                  var P8 = sX(kL);
                  if (P8 != null) {
                    DK.style.cursor = "pointer";
                  }
                  if (YC > 0.2) {
                    Y4 = nD(Y4, 1, 0.00001, D7);
                    (function (P9, PC) {
                      var PV = 0 + P9 + (editmode ? 60 : 0);
                      var PL = DK.height;
                      for (var PI = 0; PI < 4; PI++) {
                        YV(PV + 20, PL - 20 - PI * 32, i9.n[4 - PI - 1], 4 - PI, i9.m[4 - PI - 1], 1, PC);
                      }
                      if (l4 > 0 && Y0) {
                        YZ(PV + 295, PL - 20, `x${l4}`, Y4 * 30, 10, "#ffffff", "left");
                      }
                    })(Uj, P8);
                    (function (P9, PC) {
                      var PV = DK.width - P9;
                      var PL = DK.height;
                      for (var PI = 0; PI < 4; PI++) {
                        YV(PV - 20, PL - 20 - PI * 32, i9.j[4 - PI - 1], 4 - PI + 4, i9.m[4 - PI - 1], -1, PC);
                      }
                      if (l4 > 0 && Y0) {
                        YZ(PV - 295, PL - 20, `${l4}x`, Y4 * 30, 10, "#ffffff", "right");
                      }
                    })(Uj, P8);
                  }
                }
              })();
              (function () {
                var UT;
                if (!WT) {
                  if (UT = sT(kL)) {
                    DK.style.cursor = "pointer";
                  }
                }
                if (WT) {
                  var UX = 120;
                  for (var UF = 0; UF < 2; UF++) {
                    var Uz = UF == 0;
                    var Uj = DK.width / 2;
                    var P0 = 0;
                    for (var P1 = Uz ? l7 : l8, P2 = 0; P2 < P1.length; P2++) {
                      var P3 = P1[P2];
                      var P4 = P3.showing;
                      if (!Uz && P4) {
                        var P5 = l7[l7.length - 1];
                        if (P5 && (P5.offset > 0.2 || P5.showing)) {
                          P4 = false;
                        }
                      }
                      P3.offset = nD(P3.offset, P4 ? 1 : 0, 0.05, D7);
                      var P6 = 0;
                      var P7 = 0;
                      if (P3.offset > 0.2) {
                        var P8 = Math.min(4, P3.length);
                        for (var P9 = 0; P9 < P3.length; P9++) {
                          var PC = P3[P9];
                          YL(Uj + (P8 == 1 ? 0 : P6 / (P8 - 1) - 0.5) * 400, P0 + (P3.offset * 475 - 400) + UX * P7, i9.a[P9], tG, PC, Uz, 1, false, 100);
                          if (++P6 == 4) {
                            P6 = 0;
                            P7++;
                            P8 = Math.min(4, P3.length - P9 - 1);
                          }
                        }
                        P7 += P6 > 0 ? 1 : 0;
                        P6 = 0;
                        YK(Uj, P0 + (P3.offset * 475 - 400) - 60 + UX * P7 + 30, 100, "#adadad");
                      } else if (!P3.showing) {
                        P3.removed = true;
                      }
                    }
                  }
                } else {
                  var PV = 120;
                  for (var PL = 0; PL < 2; PL++) {
                    var PI = PL == 0;
                    var PE = undefined;
                    PE = PI ? 0 : DK.width;
                    var PK = DK.height;
                    for (var Pk = PI ? l7 : l8, PH = 0; PH < Pk.length; PH++) {
                      var PZ = Pk[PH];
                      PZ.offset = nD(PZ.offset, PZ.showing ? 1 : 0, 0.05, D7);
                      var PM = 0;
                      var PJ = 0;
                      if (PZ.offset > 0.2) {
                        for (var PD = 0; PD < PZ.length; PD++) {
                          var PN = PZ[PD];
                          var PY = undefined;
                          PY = PI ? PE + PZ.offset * 475 - 400 + PV * PM : PE - (PZ.offset * 475 - 400) - PV * PM;
                          var PO = PK - 200 - PV * PJ;
                          var PW = UT.weapon == PI && UT.set == PH && UT.i == PD;
                          PN.lerping = nD(PN.lerping, PW ? 1 : 0, 0.00001, D7);
                          YL(PY, PO, NQ(i9.a[PD], Math.floor(PN.lerping * 60)), tG, PN, PI, 1, false, 100 + PN.lerping * 20);
                          if (++PM == 3) {
                            PM = 0;
                            PJ++;
                          }
                        }
                        PJ += PM > 0 ? 1 : 0;
                        PM = 0;
                        var Pq = undefined;
                        Pq = PI ? PE + PZ.offset * 475 - 400 + PV * PM : PE - (PZ.offset * 475 - 400) - PV * PM;
                        var PA = PK - 200 - PV * PJ + 30;
                        var PS = UT.weapon == PI && UT.set == PH && UT.i == -1;
                        PZ.ignoreButton.lerping = nD(PZ.ignoreButton.lerping, PS ? 1 : 0, 0.00001, D7);
                        var PU = NQ("#adadad", Math.floor(PZ.ignoreButton.lerping * 60));
                        YK(Pq, PA, 100 + PZ.ignoreButton.lerping * 20, PU);
                      } else if (!PZ.showing) {
                        PZ.removed = true;
                      }
                    }
                  }
                }
              })();
              (function (UT) {
                var UX = DK.width;
                var UF = 0;
                YZ(UX - 120, UF + 25, "LEADERBOARD", 30, 10);
                if (pH) {
                  var Uz = Math.max(pH.length, 5);
                  var Uj = 200 / Uz;
                  var P0 = UX - 120;
                  var P1 = UF + 35 + 150 / Uz;
                  for (var P2 = 0; P2 < pH.entries.length; P2++) {
                    var P3 = pH.entries[P2];
                    var P4 = NY((P3.type == 1 ? i9.a[P3.color] : null) || NS(UT.team, P3.team, UT.id, P3.id), false, P3.radiant);
                    var P5 = NS(P3.nameColor, P3.nameColor);
                    var P6 = P1 + Uj * P3.index;
                    var P7 = P0 + (1 - P3.fadeTime) * 300;
                    var P8 = 200;
                    var P9 = 150 / Uz;
                    var PC = P3.scoreRatio * P8;
                    if (pH.showPlayers) {
                      var PV = P3.size / Uz;
                      var PL = Y1 / 10;
                      var PI = P7 - P8 / 2 - 150 / Uz;
                      var PE = 0.2;
                      if (P3.outerSize > 0) {
                        OA(PI, P6, PV + P3.outerSize * PV, "#5F676C", P3.outerSides, PL, false, PE, PV);
                      }
                      if (!P3.type == 1) {
                        s8(PI, P6, PV, PL, P3.barrels, false, PE);
                      }
                      OA(PI, P6, PV, P4, P3.sides, PL, false, PE);
                      if (!P3.type == 1) {
                        s2(PI, P6, PL, PV, P4, P3.layers, 0, P3.radiant, false, false, PE);
                        s5(PI, P6, PV, PL, P3.gadgets, P4, 0, P3.radiant, false, false, PE);
                      }
                    }
                    DW.lineCap = "round";
                    DW.strokeStyle = "black";
                    DW.lineWidth = P9;
                    DW.beginPath();
                    DW.moveTo(P7 - P8 / 2, P6);
                    DW.lineTo(P7 + P8 / 2, P6);
                    DW.stroke();
                    DW.lineWidth = P9 - 50 / Uz;
                    DW.strokeStyle = P4;
                    DW.beginPath();
                    DW.moveTo(P7 - P8 / 2, P6);
                    DW.lineTo(P7 - P8 / 2 + PC, P6);
                    DW.stroke();
                    YZ(P7, P6 + 1, pH.showPlayers ? EV.showNames ? `${P3.name.slice(0, Uz * 3)}${P3.name != "" ? " - " : ""}${P3.formattedScore}` : `${P3.formattedScore}` : P3.name.slice(0, Uz * 3), Math.min(120 / Uz, 20), 25 / Uz, P5);
                  }
                }
              })(U5);
            }
            (function () {
              var UT = DK.width / 2;
              var UX = 0;
              var UF = 0;
              for (var Uz = 0; Uz < pU.length; Uz++) {
                var Uj = pU[Uz];
                var P0 = NF(Uj.time, Uj.maxTime);
                YH(UT, UX + 20 + UF, Uj.message, -1, 25, 0, true, P0);
                UF += P0 * (Uj.message.height + 5.5);
              }
              DW.globalAlpha = 1;
            })();
            var UH = 0;
            if ((tL -= D7) > 0 && tC) {
              U9 = 0;
              var UZ = tL > 2;
              var UM = nN(function (UT) {
                var UX = 20;
                var UF = 1;
                var Uz = UX - UT;
                if (Uz < 1) {
                  UF = Uz / 1;
                } else if (Uz > UX - 2) {
                  UF = 1 - (Uz - (UX - 2)) / 2;
                }
                return Math.max(Math.min(UF, 1), 0);
              }(tL), 2, true);
              var UJ = UZ ? UM : 2 - UM;
              var UD = nN(Math.min(1, UM * 1.15), 2, true);
              UH = UD;
              if (tI == null) {
                tI = YM(tC, 60, 10).width;
              }
              DW.globalAlpha = UD;
              var UN;
              var UY = JS(YJ);
              try {
                for (UY.s(); !(UN = UY.n()).done;) {
                  var UO = UN.value;
                  YZ(U8 + (tI / 2 - 20 + UJ * 70) * UO, U9 - 50 + UD * 130, "-", 60, 10);
                }
              } catch (UT) {
                UY.e(UT);
              } finally {
                UY.f();
              }
              YZ(U8, U9 - 50 + UD * 130, tC, 60, 10);
              if (tV) {
                if (tE == null) {
                  tE = YM(tV, 30, 10).width;
                }
                var UW;
                var Uq = JS(YJ);
                try {
                  for (Uq.s(); !(UW = Uq.n()).done;) {
                    var UA = UW.value;
                    YZ(U8 + (tE / 2 - 20 + UJ * 70) * UA, U9 - 30 + UD * 170, "-", 30, 10);
                  }
                } catch (UX) {
                  Uq.e(UX);
                } finally {
                  Uq.f();
                }
                YZ(U8, U9 - 30 + UD * 170, tV, 30, 10);
              }
            }
            if ((tH -= D7) > 0) {
              U9 = 0;
              var US = function (UF, Uz) {
                var Uj = 1;
                var P0 = Uz - UF;
                if (P0 < 2) {
                  Uj = P0 / 2;
                } else if (P0 > Uz - 0.5) {
                  Uj = 1 - (P0 - (Uz - 0.5)) / 0.5;
                }
                return Math.max(Math.min(Uj, 1), 0);
              }(tH, tZ);
              DW.globalAlpha = US;
              YZ(U8, U9 + 100 + (tV ? 100 : 40) * UH, tM, 35, 10);
              var UU = 0;
              var UP = 0;
              if (tH < 20) {
                var UR = nN((20 - tH) / 20, 1.3, true);
                UU = (Math.random() * 2 - 1) * UR;
                UP = (Math.random() * 2 - 1) * UR;
              }
              var UQ = 1;
              var UB = 0;
              if (tH < 15) {
                UQ = 1 + (UB = (tH - Math.floor(tH)) * nN((15 - tH) / 15, 2, true)) * 0.7;
              }
              var UG = NR("ff0000", "ffffff", UB);
              YZ(U8 + UU * 6, U9 + UP * 6 + 160 + (tV ? 100 : 40) * UH, Math.floor(tH), UQ * 60, 10, UG);
            }
            if (WT && !editing) {
              (function () {
                var UF;
                var Uz = DK.height;
                var Uj = JS(kE);
                try {
                  for (Uj.s(); !(UF = Uj.n()).done;) {
                    var P0 = UF.value;
                    wY(P0, (P0.align * E7 == 1 ? 0 : DK.width) + P0.align * E7 * +EV.joystickOffset, Uz - +EV.joystickOffset, EV.joystickSize);
                  }
                } catch (P1) {
                  Uj.e(P1);
                } finally {
                  Uj.f();
                }
              })();
            }
            (function () {
              wC = nD(wC, wL, 0.000001, D7);
              if (wV = wC > 0.005) {
                var UF = 250;
                var Uz = DK.width / 2;
                var Uj = DK.height / 2;
                var P0 = 5;
                var P1 = sF(kL);
                if (P1 != null) {
                  DK.style.cursor = "pointer";
                }
                DW.globalAlpha = 1;
                YZ(Uz, nJ(-100, Uj - UF - 110, wC), "Quick Chat", UF / 5, 10);
                for (var P2 = w9.length, P3 = Math.PI * 2 / P2, P4 = UF / 10, P5 = P4 * 0.3, P6 = wC, P7 = 0; P7 < P2; P7++) {
                  var P8 = w9[P7];
                  var P9 = P7 * P3 + Math.PI / 2;
                  P8.lerping = nD(P8.lerping, P1 && P7 == P1.value && P1.type == 0 && !WT ? 1 : 0, 0.00001, D7);
                  P8.buttonLerping = nD(P8.buttonLerping, P1 && P7 == P1.value && P1.type == 1 && !WT ? 1 : 0, 0.00001, D7);
                  var PC = (1 + P8.lerping * 0.1) * wC;
                  var PV = UF * PC;
                  var PL = P9 + P3 / 2;
                  var PI = nN(1 - Math.min(1, wC * 1.5), 2) * UF * 0.1;
                  var PE = Uz + Math.cos(PL) * PI;
                  var PK = Uj + Math.sin(PL) * PI;
                  var Pk = !P8.add && !WT && P7 < 9 ? P7 + 1 : null;
                  DW.fillStyle = P8.lerping < 0.05 && !P8.add ? "#000000" : NT("#000000", "#ffffff", P8.lerping * 0.25 + (P8.add ? 0.15 : 0));
                  DW.strokeStyle = "#000000";
                  DW.lineJoin = "round";
                  DW.lineWidth = P0;
                  DW.globalAlpha = P6 * 0.5;
                  DW.beginPath();
                  if (Pk) {
                    DW.arc(PE, PK, PV * 0.35, P9, P9 + P3, false);
                  }
                  DW.moveTo(PE, PK);
                  DW.arc(PE, PK, PV, P9, P9 + P3, false);
                  DW.lineTo(PE, PK);
                  DW.fill();
                  DW.globalAlpha = P6 * 1;
                  DW.stroke();
                  if (P8.add) {
                    var PH = Math.min(P3 * PV / 2, PV / 3.5);
                    var PZ = PV - PH;
                    sE(PE + Math.cos(P9 + P3 / 2) * PZ, PK + Math.sin(P9 + P3 / 2) * PZ, PH, PH * 0.25, 0);
                    DW.fillStyle = "#000000";
                    DW.strokeStyle = "#000000";
                    DW.lineWidth = P0;
                    DW.globalAlpha = P6 * 0.5;
                    DW.fill();
                    DW.globalAlpha = P6 * 1;
                    DW.stroke();
                  } else {
                    if (!P8.rect) {
                      var PM = nF(PE, PK, UF, P9, P9 + P3, UF / (8 + P2 * 2), UF * (Pk ? 0.35 : 0));
                      var PJ = YM("...", P4).width;
                      var PD = PM.width * 0.9;
                      var PN = "";
                      var PY = undefined;
                      for (var PO = 0; PO < P8.message.length; PO++) {
                        var PW = P8.message[PO];
                        if ((PY = YM(PN + PW, P4).width) / (P4 / P5) > PD - PJ) {
                          PN = PN.trim() + "...";
                          break;
                        }
                        PN += PW;
                      }
                      P8.textSize = P4 / Math.max(PY / PD, 1);
                      P8.rotation = Math.atan2(PM.y - PK, PM.x - PE);
                      P8.distance = Math.sqrt(Math.pow(PM.x - PE, 2) + Math.pow(PM.y - PK, 2)) / UF;
                      P8.rect = PM;
                      P8.text = PN;
                    }
                    DW.globalAlpha = P6 * 1;
                    YZ(PE + Math.cos(P8.rotation) * P8.distance * PV, PK + Math.sin(P8.rotation) * P8.distance * PV, P8.text, P8.textSize * PC);
                  }
                  if (Pk) {
                    var Pq = Math.min(P3 * PV / 1.5, PV / 2.5);
                    var PA = PV * 0.35 - Math.min(Pq, PV / 5) * nJ(0.3, 0.7, n9(P3 * 2.2 - 1, 0, 1));
                    YZ(PE + Math.cos(P9 + P3 / 2) * PA, PK + Math.sin(P9 + P3 / 2) * PA + Pq * 0.01, Pk, Pq * 0.3);
                  }
                  if (!P8.add) {
                    var PS = Math.min(PV * P3 * 0.45, PV * 0.08);
                    var PU = 1 + P8.buttonLerping * 0.4;
                    var PP = nJ(PV, PV / PC * wC, 0.5) + PS * 2;
                    var PR = PE + Math.cos(P9 + P3 / 2) * PP;
                    var PQ = PK + Math.sin(P9 + P3 / 2) * PP;
                    DW.beginPath();
                    DW.arc(PR, PQ, PS * PU, 0, Math.PI * 2, false);
                    DW.strokeStyle = "#000000";
                    DW.fillStyle = P8.buttonLerping < 0.05 ? "#000000" : NT("#000000", "#ffffff", P8.buttonLerping * 0.25);
                    DW.lineJoin = "round";
                    DW.lineWidth = P0;
                    DW.globalAlpha = P6 * 0.5;
                    DW.fill();
                    DW.globalAlpha = P6 * 1;
                    DW.stroke();
                    for (var PB = 3, PG = PS * PU / PB / 2, PT = 0; PT < PB; PT++) {
                      var PX = PR + (PT / (PB - 1) - 0.5) * PS * PU;
                      var PF = PQ;
                      DW.beginPath();
                      DW.arc(PX, PF, PG, 0, Math.PI * 2, false);
                      DW.fillStyle = "#ffffff";
                      DW.lineJoin = "round";
                      DW.lineWidth = P0;
                      DW.globalAlpha = P6 * 0.5;
                      DW.fill();
                    }
                  }
                }
              }
            })();
          })(SD, SW);
          if (editmode && editing && SD.oldGadgets) {
            SD.gadgets = SD.oldGadgets;
            delete SD.oldGadgets;
          }
          DW = DH;
          var Sj = Math.round((performance.now() - AR) * 10) / 10;
          if (!Number.isNaN(Sj)) {
            Sj = pZ(tQ, Sj);
            tQ = tR;
            tR = Math.round(Sj * 10) / 10;
          }
          N3(D7);
          var U0 = tA < 100 ? tA.toFixed(1) : tA.toFixed(0);
          JQ.textContent = `Ping: ${U0}ms`;
          JB.textContent = `Server Tick Time: ${tU}ms`;
          JG.textContent = `Client Tick Time: ${tR}ms`;
          JT.textContent = `FPS: ${N2}`;
          JX.textContent = `Player Count: ${pH ? pH.showPlayers ? pH.playerCount : "???" : 0}`;
          JF.textContent = `Global Player Count: ${pH && pH.showPlayers ? Math.max(pC.players + 1, pH.playerCount) : pC.players + 1}`;
          Jz.textContent = `Extra Performance Info: T:${SN.length + 1} S:${SY.length} B:${SO.length} P:${tX.length}/${E8}`;
          Jj.textContent = `Position: ${nH(SD.x, 2)}, ${nH(-SD.y, 2)}`;
          JQ.style.color = tA > 250 ? tA > 500 ? "red" : "yellow" : "white";
          JB.style.color = tU > 8 ? tU > 1000 / 30 ? "red" : "yellow" : "white";
          JG.style.color = tR > 5 ? tR > 16.66 ? "red" : "yellow" : "white";
          JT.style.color = N2 < 50 ? N2 < 15 ? "red" : "yellow" : "white";
          tB = false;
        }
        (DW = DY).clearRect(0, 0, DE.width, DE.height);
        (function () {
          if (wF.length > 0) {
            wz = 0.5;
          } else {
            wz -= D7;
          }
          if ((wT = Math.min(1, Math.max(0, wT + (wz > 0 ? 1 : -1) * D7))) != wX) {
            wX = wT;
            if (wT == 0) {
              MJ.classList.remove("hide");
            } else {
              MJ.classList.add("hide");
            }
          }
          if (wX == 0) {
            return;
          }
          wG = nD(wG, 1, 0.00001, D7);
          O0 = wj;
          if ((wj = nD(wj, 0, 0.1, D7)) != O0) {
            O1 = wj < 0 ? NR(i9.a[1].substring(1), "ffffff", Math.abs(wj)) : NR("#FFE449".substring(1), "ffffff", wj);
          }
          if (wR != wQ) {
            wQ = wR;
            wB = nP(wR);
          }
          var U5 = N8 * 2;
          var U6 = DE.width;
          var U7 = U5 * 1.5;
          switch (q7) {
            case 2:
              U7 += U5 * 9;
              break;
            case 0:
              U5 = 20 / N6 * N7;
              U7 = 320 / N6 * N7;
          }
          var U8 = function (UK, Uk = false) {
            var UH = 1.70158;
            if (Uk) {
              UK = 1 - UK;
            }
            var UZ = (UH + 1) * UK * UK * UK - UH * UK * UK;
            if (Uk) {
              return 1 - UZ;
            } else {
              return UZ;
            }
          }(1 - wT) * U5 * 9;
          sN(U6 - U5 * 7 + U8, U7, U5, U5 / 2, 5, "#FFE449", "#000000", U5 * 0.1, 0);
          DW.setTransform(1, 0, 0, 1, 0, 0);
          YZ(U6 - U5 * 5.9 + U8, U7 + U5 * 0.2, wB, U5 * 1.5 * wG, U5 * 0.2, O1, "left");
          var U9 = 0;
          for (var UC = wF.length - 1; UC >= 0; UC--) {
            wz = 2;
            var UV = wF[UC];
            UV.size = nD(UV.size, 1, 0.00001, D7);
            if (UV.valueToUse == 0) {
              UV.time -= D7 * 0.5;
            } else if (wF.length == UC + 1 && wT == 1 && (UV.timeUntilUse -= D7, UV.timeUntilUse <= 0)) {
              UV.timeUntilUse += 0.15;
              var UL = Math.sign(UV.step) == 1 ? Math.min(UV.valueToUse, UV.step) : Math.max(UV.valueToUse, UV.step);
              UV.valueToUse -= UL;
              wG = 1.1;
              wj = Math.sign(UV.step);
              UV.size = 0.9;
              wR += UL;
            }
            if (UV.valueToUse != UV.lastValue) {
              UV.lastValue = UV.valueToUse;
              UV.text = (Math.sign(UV.value) != -1 ? "+" : "-") + nP(Math.abs(UV.valueToUse));
            }
            var UI = wF[UC].time;
            var UE = nN(1 - UI * 4, 3, false);
            if (UI < 0) {
              wF.length = UC;
            }
            YZ(U6 - (5.9 - UE * 10) * U5 + U8, U7 + (1.8 + U9 * 1.5) * U5, UV.text, U5 * 1.25 * UV.size, U5 * 0.2, Math.sign(UV.value) == 1 ? "#ffffff" : i9.a[1], "left");
            U9 += 1 - UE;
          }
        })();
        (function () {
          var U5 = N8 / 6;
          var U6 = DE.width / 2;
          var U7 = 0 + U5 * 95;
          for (var U8 = 0; U8 < O3.length; U8++) {
            var U9 = O3[U8];
            if (U8 != 0) {
              break;
            }
            U9.time -= D7 * 0.2;
            var UC = U9.time;
            if (UC < 0) {
              O3.splice(U8, 1);
              break;
            }
            var UV = nN(1 - Nj(UC, 0.1), 3, false);
            if (q7 == 2) {
              var UL = U5 * 320;
              var UI = U5 * 120;
              var UE = U5 * 400;
              DW.globalAlpha = 0.75;
              sV(U6, U7 - UV * 170 * U5 - UE / 2, UL, UI + UE, U5 * 5, "#000000");
              DW.globalAlpha = 1;
            }
            O5(U6, U7 - UV * 170 * U5, U9.object, U5, true);
            YZ(U6, U7 - U5 * 70 - UV * 300 * U5, `New Achievement!${O3.length == 1 ? "" : ` (+${O3.length - 1})`}`, U5 * 30 * (q7 == 2 && O3.length != 1 ? 0.8 : 1), U5 * 5);
          }
        })();
        DW = DH;
      } catch (U5) {
        console.error(U5);
      } finally {
        if (t4) {
          if (t7.length == 0) {
            K1();
          } else {
            var U1 = t7[t7.length - 1];
            var U2 = oz.some(function (U6) {
              return U6.type == U1.type && U6.index == U1.index;
            });
            if (!nj(t7, t8) || oz.length == 0 || U2 && t5) {
              t9 = 0;
            } else {
              t9++;
            }
            var U3 = t7[t7.length - 1 - t9];
            if (U3) {
              K0(U3.type, U3.index, t5, U3.stack);
            } else {
              K1();
            }
          }
          t4 = false;
        }
        t6 = false;
        setTimeout(N1, 1);
      }
    }
    function N1() {
      NO();
      requestAnimationFrame(function () {
        N0();
      });
    }
    var N2 = 60;
    var N3 = (0, i8.throttle)(500, function (AS) {
      N2 = Math.round(1 / AS);
    });
    function N4() {
      JQ.classList.toggle("hidden", !EV.showPing);
      JB.classList.toggle("hidden", !EV.showTickTime);
      JG.classList.toggle("hidden", !EV.showTickTime);
      JT.classList.toggle("hidden", !EV.showFPS);
      JX.classList.toggle("hidden", !EV.showPlayerCount);
      JF.classList.toggle("hidden", !EV.showGlobalPlayerCount);
      Jz.classList.toggle("hidden", !EV.showExtraPerformanceInfo);
      Jj.classList.toggle("hidden", !EV.showPosition);
      t0.classList.toggle("hidden", !EV.showServerName);
    }
    function N5(AS, AU, AP, AR, AQ) {
      var AB = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
      var AG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      D8 = AQ;
      Y1 += D7 * 1.2;
      if (AB) {
        tX.forEach(function (SS) {
          if (NC(SS) && SS.below) {
            OO(SS);
          }
        });
        sB();
        AR.forEach(function (SS) {
          if (NC(SS, 12)) {
            OY(AQ, SS);
          }
        });
        AU.forEach(function (SS) {
          ON(AQ, SS);
        });
        AS.forEach(function (SS) {
          ON(AQ, SS, i9.a[SS.color] || (AQ ? NS(AQ.team, SS.team, AQ.id, SS.id) : NS(SS.team, SS.team, 0, 0)));
        });
        AP.forEach(function (SS) {
          ON(AQ, SS);
        });
        if (AQ) {
          ON(AQ, AQ);
        }
        AS.forEach(function (SS) {
          OJ(SS, i9.a[SS.color] || (AQ ? NS(AQ.team, SS.team, AQ.id, SS.id) : NS(SS.team, SS.team, 0, 0)), SS.sides, false);
        });
        if (AQ) {
          OM(AQ, AQ);
        }
        AU.forEach(function (SS) {
          OM(AQ, SS);
        });
        AP.forEach(function (SS) {
          OD(AQ, SS);
        });
        AP.forEach(function (SS) {
          s3(SS);
        });
        if (AQ) {
          s3(AQ);
        }
        AU.forEach(function (SS) {
          s3(SS);
        });
        tX.forEach(function (SS) {
          if (NC(SS) && !SS.below) {
            OO(SS);
          }
        });
      }
      DW = DM;
      if (D2.visual.darkness) {
        var AT = DK.width / 2 - DR / DU;
        var AX = DK.height / 2 - DQ / DU;
        DW.globalAlpha = D2.visual.darkness.alpha || 0.9;
        DW.fillStyle = D2.visual.darkness.color;
        DW.clearRect(0, 0, DC.width, DC.height);
        DW.fillRect(0, 0, DC.width, DC.height);
        DW.globalAlpha = 1;
        var AF = D2.visual.darkness.intensity * (1 + Math.sin(performance.now() / 1000) * 0.1);
        if (AQ) {
          sU(AT + AQ.x / DU, AX + AQ.y / DU, (AQ.size + 150) / AF / DU, 1);
          sU(AT + AQ.x / DU, AX + AQ.y / DU, (AQ.size + 150) * 1.5 / AF / DU, 0.5);
          sO(AT, AX, AF, AQ);
          if (AQ.radiant > 0) {
            sW(AT, AX, AF, AQ);
          }
          for (var Az = 0; Az < AQ.barrels.length; Az++) {
            var Aj = AQ.barrels[Az];
            var S0 = Aj.distance + Aj.length * 2;
            var S1 = AQ.d + Aj.rot;
            var S2 = AQ.x + (S0 * Math.sin(S1) + Aj.offset * Math.sin(S1 + s9)) * AQ.size;
            var S3 = AQ.y - (Aj.offset * Math.cos(S1 + s9) + S0 * Math.cos(S1)) * AQ.size;
            sU(AT + S2 / DU, AX + S3 / DU, AQ.size * 8 * Aj.width / AF / DU, 0.5);
            sA(AT + S2 / DU, AX + S3 / DU, S1, AQ.size * 8 * Aj.length / AF / DU, AQ.size * 8 * Aj.width / AF / DU, AQ.size * 2 * Aj.width / AF / DU, 1);
          }
        }
        AU.forEach(function (SS) {
          if (SS.gadgets) {
            sO(AT, AX, AF, SS);
          }
          if (SS.radiant > 0) {
            sW(AT, AX, AF, SS);
          }
        });
        AS.forEach(function (SS) {
          if (SS.radiant > 0) {
            sW(AT, AX, AF, SS);
          }
        });
        tX.forEach(function (SS) {
          if (NC(SS) && SS.radiant > 0) {
            sq(AT, AX, AF, SS);
          }
        });
        AP.forEach(function (SS) {
          if (SS.gadgets) {
            sO(AT, AX, AF, SS);
          }
          if (SS.radiant > 0) {
            sW(AT, AX, AF, SS);
          }
        });
        AR.forEach(function (SS) {
          if (NC(SS, 12)) {
            switch (SS.type) {
              case 0:
                var SU = (SG = performance.now() / 500) + 0.5;
                var SP = 10 - (SQ = SG - Math.floor(SG)) * 9;
                var SR = 10 - (SB = SU - Math.floor(SU)) * 9;
                sU(AT + SS.x / DU, AX + SS.y / DU, SS.size * SP / DU, Math.min(SQ * 2, 1) * 0.3);
                sU(AT + SS.x / DU, AX + SS.y / DU, SS.size * SR / DU, Math.min(SB * 2, 1) * 0.3);
                break;
              case 1:
                switch (SS.subtype) {
                  case 0:
                    SU = (SG = performance.now() / 2500) + 0.5;
                    SP = 1 + (SQ = SG - Math.floor(SG)) * 3;
                    SR = 1 + (SB = SU - Math.floor(SU)) * 3;
                    sU(AT + SS.x / DU, AX + SS.y / DU, SS.size * SP / DU, Math.min((1 - SQ) * 2, 1) * 0.2);
                    sU(AT + SS.x / DU, AX + SS.y / DU, SS.size * SR / DU, Math.min((1 - SB) * 2, 1) * 0.2);
                    break;
                  case 1:
                    var SQ;
                    var SB;
                    SU = (SG = performance.now() / -1250) + 0.5;
                    SP = 1 + (SQ = SG - Math.floor(SG)) * 5;
                    SR = 1 + (SB = SU - Math.floor(SU)) * 5;
                    sU(AT + SS.x / DU, AX + SS.y / DU, SS.size * SP / DU, Math.min((1 - SQ) * 2, 1) * 0.2);
                    sU(AT + SS.x / DU, AX + SS.y / DU, SS.size * SR / DU, Math.min((1 - SB) * 2, 1) * 0.2);
                }
                break;
              case 2:
                var SG;
                var ST = (SG = performance.now()) * SS.sign / 1000;
                sS(AT + SS.x / DU, AX + SS.y / DU, ST, SS.size * 2 / AF / DU, 4, 1);
                DW.globalAlpha = 0.5;
                sS(AT + SS.x / DU, AX + SS.y / DU, ST, SS.size * 3 / AF / DU, 4, 0.5);
            }
          }
        });
        var S4;
        var S5 = JS(D2.gates);
        try {
          for (S5.s(); !(S4 = S5.n()).done;) {
            var S6 = S4.value;
            var S7 = {
              x: S6.x * DT,
              y: S6.y * DT,
              size: S6.size / 2 * DT
            };
            var S8 = i9.e[S6.type];
            if (S8) {
              var S9 = S8[S6.open ? "open" : "closed"] || S8.open;
              if (NC(S7, 3)) {
                var SC = performance.now();
                var SV = S9.auras;
                var SL = S9.radiant;
                if (!SL) {
                  continue;
                }
                for (var SI = 0; SI < SV.length; SI++) {
                  var SE = SV[SI];
                  if (!SE[3]) {
                    var SK = SC / 2500 * SE[1];
                    var SH = SK + 0.5;
                    var SZ = SE[0];
                    var SM = SE[2];
                    var SJ = SZ == 0 ? 2 : 1;
                    var SD = SK - Math.floor(SK);
                    var SN = SH - Math.floor(SH);
                    var SY = (0.5 + SD * SM) * SJ;
                    var SO = (0.5 + SN * SM) * SJ;
                    var SW = SY * 30;
                    sP(AT + (S7.x - Math.sin(-S6.rot - s9) * SW * SZ) / DU, AX + (S7.y - Math.cos(-S6.rot - s9) * SW * SZ) / DU, SW / DU, S7.size / DU, S6.rot, Math.min((1 - SD) * 2, 1) * 0.2);
                    var Sq = SO * 30;
                    sP(AT + (S7.x - Math.sin(-S6.rot - s9) * Sq * SZ) / DU, AX + (S7.y - Math.cos(-S6.rot - s9) * Sq * SZ) / DU, Sq / DU, S7.size / DU, S6.rot, Math.min((1 - SN) * 2, 1) * 0.2);
                  }
                }
                sP(AT + S7.x / DU, AX + S7.y / DU, 30 / DU, S7.size / DU, S6.rot, SL);
                DW.globalAlpha = 1;
              }
            }
          }
        } catch (SS) {
          S5.e(SS);
        } finally {
          S5.f();
        }
        if (D2.visual.lights) {
          D2.visual.lights.forEach(function (SU) {
            sS(AT + SU.x / DU, AX + SU.y / DU, SU.d, SU.size / AF / DU, SU.sides, SU.transparency);
            sS(AT + SU.x / DU, AX + SU.y / DU, SU.d, SU.size * 1.5 / AF / DU, SU.sides, SU.transparency * 0.2);
          });
        }
      }
      if (!D2.visual.darkness) {
        DW.clearRect(0, 0, DC.width, DC.height);
      }
      var SA = D2.visual.fog;
      if (SA) {
        DW.globalCompositeOperation = "destination-over";
        DW.globalAlpha = SA.intensity + SA.amplitude * Math.cos(performance.now() / 100 * SA.frequency);
        DW.fillStyle = SA.color;
        DW.fillRect(0, 0, DC.width, DC.height);
        DW.globalCompositeOperation = "source-over";
      }
      if (AG) {
        DW.fillStyle = NR("000000", NG(NN).substring(1), 0.9);
        DW.globalAlpha = AG;
        DW.fillRect(0, 0, DC.width, DC.height);
      }
      DW = DD;
      if (!!EV.showNamesAndChatInScreenshotMode || !tD) {
        AS.forEach(function (SU) {
          OU(SU, i9.a[SU.color] || (AQ ? NS(AQ.team, SU.team, AQ.id, SU.id) : NS(SU.team, SU.team, 0, 0)), SU.showName, 0);
        });
        if (AQ) {
          OS(AQ, AQ, 0);
        }
        AU.forEach(function (SU) {
          OS(AQ, SU, 0);
        });
        if (AQ) {
          OS(AQ, AQ, 1);
        }
        AS.forEach(function (SU) {
          OU(SU, i9.a[SU.color] || (AQ ? NS(AQ.team, SU.team, AQ.id, SU.id) : NS(SU.team, SU.team, 0, 0)), SU.showName, 1);
        });
        AU.forEach(function (SU) {
          OS(AQ, SU, 1);
        });
      }
      DW = DN;
    }
    var N6 = 1;
    var N7 = 1;
    var N8 = 1;
    function N9() {
      N6 = Math.max(1, 800 / Math.min(window.innerWidth, window.innerHeight));
      N7 = Math.max(window.devicePixelRatio || 1, 1);
      DK.width = N6 * window.innerWidth;
      DK.height = N6 * window.innerHeight;
      D9.width = window.innerWidth * N7;
      D9.height = window.innerHeight * N7;
      DL.width = DK.width;
      DL.height = DK.height;
      DI.width = DK.width;
      DI.height = DK.height;
      DC.width = DK.width;
      DC.height = DK.height;
      N8 = Math.min(window.innerHeight, window.innerWidth) / 100 * N7;
      DE.width = window.innerWidth * N7;
      DE.height = window.innerHeight * N7;
      Dk.width = N8 * 40;
      Dk.height = N8 * 13;
      AC(N6);
    }
    function NC(AS, AU = 1) {
      var AP = Math.max(Math.abs(DR - AS.x), Math.abs(DQ - AS.y));
      return DP / 2 > AP - AS.size * AU;
    }
    function NV(AS) {
      setTimeout(function () {
        var AU;
        var AP = Math.min(AS.size * 0.2, 100) * E9;
        var AR = 0;
        switch (AS.type) {
          case 0:
            switch (AS.gateType) {
              case 1:
                AU = 40;
                AR = 0.7;
                break;
              case 3:
                AU = 60;
            }
            break;
          case 1:
            switch (AS.gateType) {
              case 1:
                AU = 70;
                AR = 10;
                break;
              case 3:
                AU = 100;
            }
            break;
          case 2:
            AP *= AS.power / 10000;
            switch (AS.gateType) {
              case 1:
                AU = 100;
                AR = 10;
                AP *= 0.125;
                break;
              case 3:
                AU = 100;
                AP *= 0.125;
            }
        }
        for (var AQ = Math.random(); AQ < AP; AQ += Math.random()) {
          var AB = pq(0.12, 0.24) * AU * (AS.direction || nE());
          var AG = pq(0.3, 0.6) * (100 / 1.5);
          var AT = (Math.random() * 2 - 1) * (AS.size - AG);
          var AX = AS.x + Math.cos(AS.rot + s9) * AT;
          var AF = AS.y + Math.sin(AS.rot + s9) * AT;
          var Az = AS.rot + (Math.random() * 2 - 1) * 0.3;
          OF(AX, AF, AB * Math.cos(Az), AB * Math.sin(Az), AG, Math.random() * Math.PI * 2, 0, "#000000", 50, 1, AR, 0.95);
        }
      }, EV.renderDelay);
    }
    function NL(AS) {
      setTimeout(function () {
        var AR = AS.size / 4 * E9;
        OX(AS.x, AS.y, AS.size * 0.05, Math.sqrt(AS.size) * 0.1);
        var AQ = NS(D8?.team, AS.team, D8?.id, AS.id);
        for (var AB = Math.random(); AB < AR; AB += Math.random()) {
          var AG = Math.random() * Math.PI * 2;
          var AT = pq(AS.size * 0.08, AS.size * 0.15);
          var AX = pq(45, 75);
          OF(AS.x, AS.y, AT * Math.sin(AG), AT * Math.cos(AG), pq(0.15, 0.22) * AS.size, Math.random() * Math.PI * 2, 4, AQ, AX, 1, AS.radiant, 0.95);
        }
      }, EV.renderDelay * 1.2);
    }
    function NI(AS) {
      setTimeout(function () {
        OX(AS.x, AS.y, AS.size * 0.03, Math.sqrt(AS.size) * 0.1);
        for (var AU = AS.size / 4 * E9, AP = Math.random(); AP < AU; AP += Math.random()) {
          var AR = Math.random() * Math.PI * 2;
          var AQ = pq(AS.size * 0.15, AS.size * 0.3);
          var AB = pq(45, 75);
          OF(AS.x, AS.y, AQ * Math.sin(AR), AQ * Math.cos(AR), pq(8, 12), Math.random() * Math.PI * 2, 0, NT(D2.visual.backgroundColor, D2.visual.gridColor, Math.random()), AB, 1, 0, pq(0.93, 0.96));
        }
      }, EV.renderDelay * 1.2);
    }
    function NE(AS) {
      setTimeout(function () {
        AS.size = Math.min(AS.size, 1000);
        var AU = AS.size / 2 * E9;
        OX(AS.x, AS.y, AS.size * 0.1, Math.sqrt(AS.size) * 0.2);
        for (var AP = Math.random(); AP < AU; AP += Math.random()) {
          var AR = Math.random() * Math.PI * 2;
          var AQ = pq(AS.size * 0.08, AS.size * 0.15);
          var AB = pq(45, 75);
          OF(AS.x, AS.y, AQ * Math.sin(AR), AQ * Math.cos(AR), pq(0.5, 0.8) * AS.size, Math.random() * Math.PI * 2, 0, "#000000", AB, 1, 0, 1);
        }
      }, EV.renderDelay);
    }
    function NK(AS, AU = false, AP = false, AR = 1) {
      setTimeout(function () {
        AS.size = Math.min(AS.size, 1000);
        var AQ = AS.size / 2 * E9 * (AU ? 0.5 : 1) * (AP ? 1.5 : 1) * AR;
        OX(AS.x, AS.y, AS.size * 0.1 * (AU ? 1.5 : 1), Math.sqrt(AS.size) * 0.1);
        var AB = "#ffffff";
        if (AU) {
          AB = i9.a[0];
        }
        for (var AG = Math.random(); AG < AQ; AG += Math.random()) {
          if (AU) {
            var AT = Math.random() * Math.PI * 2;
            var AX = pq(AS.size * 0.1, AS.size * 0.2) / 2 * AR;
            var AF = pq(0.5, 0.8) * AS.size / 2;
            var Az = pq(30, 60);
            var Aj = 0.95;
            if (AP) {
              AF *= 1.5;
              AX *= 1.5;
            }
            if (Math.random() < 0.2) {
              AF /= 3;
              AX *= 2;
              Az *= 1.5;
              Aj = 0.97;
            }
            OF(AS.x, AS.y, AX * Math.sin(AT), AX * Math.cos(AT), AF, Math.random() * Math.PI * 2, 0, AB, Az, 1, 1, Aj);
          } else {
            var S0 = Math.random() * Math.PI * 2;
            var S1 = pq(AS.size * 0.1, AS.size * 0.2);
            var S2 = pq(30, 60);
            OF(AS.x, AS.y, S1 * Math.sin(S0), S1 * Math.cos(S0), pq(0.5, 0.8) * AS.size, Math.random() * Math.PI * 2, 0, AB, S2, 1, 0, 0.95);
          }
        }
      }, EV.renderDelay);
    }
    function Nk(AS) {
      setTimeout(function () {
        var AU = AS.size * E9;
        OX(AS.x, AS.y, AS.size * 0.2, Math.sqrt(AS.size) * 0.1);
        var AP = NS(D8 ? D8.team : 0, AS.team, D8 ? D8.id : 0, AS.id);
        for (var AR = Math.random(); AR < AU; AR += Math.random()) {
          var AQ = Math.random() * Math.PI * 2;
          var AB = pq(AS.size * 0.1, AS.size * 0.2);
          var AG = pq(30, 60);
          OF(AS.x, AS.y, AB * Math.sin(AQ), AB * Math.cos(AQ), pq(3, 12), Math.random() * Math.PI * 2, 0, AP, AG, 1, AS.radiant, 0.95);
        }
      }, EV.renderDelay * 1.2);
    }
    function NH(AS) {
      setTimeout(function () {
        var AU = Math.pow(AS.size, 0.5);
        var AP = AU * E9 * 2;
        OX(AS.x, AS.y, AU * 0.5, 0.3);
        var AR = NS(D8 ? D8.team : 0, AS.team, D8 ? D8.id : 0, AS.id);
        for (var AQ = Math.random(); AQ < AP; AQ += Math.random()) {
          var AB = Math.random() * Math.PI * 2;
          var AG = pq(AU * 1.6 / 5, AU * 3 / 5);
          var AT = pq(15, 30);
          OF(AS.x + AS.size * pq(0.25, 0.75) * Math.sin(AB), AS.y + AS.size * pq(0.25, 0.75) * Math.cos(AB), AG * Math.sin(AB), AG * Math.cos(AB), pq(0.4, 0.8) * AS.size, Math.random() * Math.PI * 2, 0, AR, AT, 1, AS.radiant, 1);
        }
      }, EV.renderDelay);
    }
    window.addEventListener("resize", (0, i8.debounce)(40, function () {
      N9();
    }));
    var NZ = false;
    var NM = 0;
    function NJ() {
      window.onbeforeunload = function () {};
      tq = true;
      Oz();
      OT();
      tN(false);
      t1.classList.add("hidden");
      EG.classList.add("hidden");
    }
    var ND = false;
    var NN = "#ff0000";
    function NY(AS, AU, AP) {
      var AR = AS;
      if (AP > 0) {
        if (!ND) {
          NO();
        }
        AR = NR(AR.substring(1), NG(NN).substring(1), 0.5 / AP);
      } else if (AP < 0) {
        AR = NR("#c0c0c0".substring(1), AR.substring(1), Math.min(1, -AP));
      }
      if (AU) {
        AR = NQ(AR, Math.round(Math.abs(Math.sin(D6 / 50)) * 30));
      }
      return AR;
    }
    function NO() {
      NN = [(1 + Math.sin(D6 / 500)) * 128, (1 + Math.sin(D6 / 500 + Math.PI * (1 / 3))) * 128, (1 + Math.sin(D6 / 500 + Math.PI * (2 / 3))) * 128];
    }
    function NW(AS, AU, AP) {
      if (AU != null) {
        return NS(AU, AU);
      }
      switch (AS) {
        case 0:
          return i9.a[1];
        case 1:
          return i9.a[4];
        case 3:
          return i9.a[0];
        case 4:
          return i9.a[5];
        default:
          return AP;
      }
    }
    var Nq = nC(i9.b);
    function NA(AS) {
      return Nq[AS] || "#ffffff";
    }
    function NS(AS, AU, AP, AR) {
      var AQ;
      switch (AU) {
        default:
          if (typeof AU == "string") {
            return AU;
          }
          AQ = AU <= 0 && AP == AR ? i9.k[0] : i9.k[1];
          break;
        case -1:
          AQ = "#c0c0c0";
          break;
        case 1:
          AQ = i9.a[1];
          break;
        case 2:
          AQ = "#f177dd";
          break;
        case 3:
          AQ = "#999999";
          break;
        case 4:
          AQ = i9.a[0];
          break;
        case 5:
          AQ = "#000000";
          break;
        case 6:
          AQ = "#ffffff";
          break;
        case 7:
          AQ = "#5F676C";
          break;
        case 10:
          AQ = i9.k[0];
          break;
        case 11:
          AQ = i9.k[1];
          break;
        case 12:
          AQ = i9.k[2];
          break;
        case 13:
          AQ = i9.k[3];
          break;
        case 20:
          AQ = i9.a[0];
          break;
        case 21:
          AQ = i9.a[1];
          break;
        case 22:
          AQ = i9.a[2];
          break;
        case 23:
          AQ = i9.a[3];
          break;
        case 24:
          AQ = i9.a[4];
          break;
        case 25:
          AQ = i9.a[5];
          break;
        case 26:
          AQ = i9.a[6];
          break;
        case 27:
          AQ = i9.a[7];
          break;
        case 28:
          AQ = i9.a[8];
          break;
        case 29:
          AQ = i9.a[9];
          break;
        case 30:
          AQ = i9.a[10];
          break;
        case 127:
          AQ = window.getRadiant();
          break
      }
      return AQ;
    }
    Object.keys(Nq).forEach(function (AS) {
      Nq[AS] = NR(Nq[AS].substring(1), "ffffff", 0.65);
    });
    var NU = {};
    function NP(AS) {
      NU[AS] ||= NQ(AS, -30);
      return NU[AS];
    }
    function NR(AS, AU, AP = 0.25) {
      function AR(Az) {
        return Az.toString(16);
      }
      function AQ(Az) {
        return parseInt(Az, 16);
      }
      var AB = "#";
      for (var AG = 0; AG <= 5; AG += 2) {
        var AT = AQ(AS.substring(AG, AG + 2));
        var AX = AQ(AU.substring(AG, AG + 2));
        for (var AF = AR(Math.floor(AX + (AT - AX) * AP)); AF.length < 2;) {
          AF = "0" + AF;
        }
        AB += AF;
      }
      return AB;
    }
    function NQ(AS, AU) {
      return "#" + AS.replace(/^#/, "").replace(/../g, function (AP) {
        return ("0" + Math.min(255, Math.max(0, parseInt(AP, 16) + AU)).toString(16)).substr(-2);
      });
    }
    function NB(AS) {
      var AU = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(AS);
      if (AU) {
        return [parseInt(AU[1], 16), parseInt(AU[2], 16), parseInt(AU[3], 16)];
      } else {
        return null;
      }
    }
    function NG(AS) {
      return "#" + (16777216 + (AS[0] << 16) + (AS[1] << 8) + AS[2]).toString(16).slice(1);
    }
    window.getRadiant = function() {
      return NG(NN).slice(0, 7)
    }
    function NT(AS, AU, AP) {
      return NG(NX(NB(AS), NB(AU), AP));
    }
    function NX(AS, AU, AP) {
      if (arguments.length < 3) {
        AP = 0.5;
      }
      var AR = AS.slice();
      for (var AQ = 0; AQ < 3; AQ++) {
        AR[AQ] = Math.round(AR[AQ] + AP * (AU[AQ] - AS[AQ]));
      }
      return AR;
    }
    function NF(AS, AU) {
      var AP = 1;
      var AR = AU - AS;
      if (AR < 0.5) {
        AP = AR / 0.5;
      } else if (AR > AU - 0.5) {
        AP = 1 - (AR - (AU - 0.5)) / 0.5;
      }
      return nY(Math.max(Math.min(AP, 1), 0));
    }
    function Nz(AS, AU, AP = 20) {
      var AR = 1;
      var AQ = (AU /= 60) - AS;
      if (AQ > AU - (AP /= 60)) {
        AR = 1 - (AQ - (AU - AP)) / AP;
      } else if (AQ < AP) {
        AR = AQ / AP;
      }
      return AR;
    }
    function Nj(AS, AU = 0.2) {
      var AP = 1;
      var AR = 1 - AS;
      if (AR < AU) {
        AP = AR / AU;
      } else if (AR > 1 - AU) {
        AP = (1 - AR) / AU;
      }
      return AP;
    }
    var Y0 = false;
    var Y1 = 0;
    var Y2 = [];
    var Y3 = [];
    var Y4 = 1;
    function Y5(AS) {
      Y4 = AS;
    }
    for (var Y6 = 0; Y6 < 8; Y6++) {
      Y2.push(1);
      Y3.push(1);
    }
    var Y7 = [];
    for (var Y8 = 0; Y8 < i9.n.length; Y8++) {
      Y7.push({
        name: i9.n[Y8].split(" "),
        color: i9.m[Y8]
      });
    }
    for (var Y9 = 0; Y9 < i9.j.length; Y9++) {
      Y7.push({
        name: i9.j[Y9].split(" "),
        color: i9.m[Y9]
      });
    }
    var YC = 0;
    function YV(AS, AU, AP, AR, AQ, AB, AG) {
      l3[AR - 1] = nD(l3[AR - 1], l2[AR - 1], 0.1, D7);
      var AT = AB * 250;
      var AX = l2[AR - 1] / 15 * (AT - AB * 25);
      var AF = l3[AR - 1] / 15 * (AT - AB * 25);
      Y2[AR - 1] = nD(Y2[AR - 1], AG == AR ? 1.1 : 1, 0.00001, D7);
      var Az = Y2[AR - 1];
      DW.lineCap = "round";
      DW.strokeStyle = "black";
      DW.lineWidth = 30;
      DW.beginPath();
      DW.moveTo(AS, AU);
      DW.lineTo(AS + AT, AU);
      DW.stroke();
      DW.lineWidth = 20;
      DW.globalAlpha = 0.5;
      if (l2[AR - 1] != 0) {
        DW.strokeStyle = AQ;
        DW.beginPath();
        DW.moveTo(AS, AU);
        DW.lineTo(AS + AX, AU);
        DW.stroke();
      }
      DW.globalAlpha = 1;
      if (l3[AR - 1] > 0.1) {
        DW.beginPath();
        DW.moveTo(AS, AU);
        DW.lineTo(AS + AF, AU);
        DW.stroke();
      }
      var Aj = l4 > 0 && l2[AR - 1] < 15 ? 1 : 0;
      Y3[AR - 1] = nD(Y3[AR - 1], Aj, 0.00001, D7);
      var S0 = NR("ffffff", "#5F676C".substring(1), Y3[AR - 1]);
      DW.strokeStyle = S0;
      DW.lineWidth *= Az;
      DW.beginPath();
      DW.moveTo(AS + AT, AU);
      DW.lineTo(AS + AT, AU);
      DW.stroke();
      DW.strokeStyle = "black";
      DW.lineCap = "butt";
      DW.lineWidth = Az * 4;
      DW.beginPath();
      DW.moveTo(AS + AT + Az * 7, AU);
      DW.lineTo(AS + AT - Az * 7, AU);
      DW.moveTo(AS + AT, AU + Az * 7);
      DW.lineTo(AS + AT, AU - Az * 7);
      DW.stroke();
      DW.lineCap = "round";
      DW.globalAlpha = Y3[AR - 1];
      YZ(AS + AT - AB * 28, AU + 1.5, `[${AR}]`, 15, 5, S0);
      DW.globalAlpha = 1;
      YZ(AS + (AT - AB * 25) / 2 - AB * 6 * Y3[AR - 1], AU + 2, AP, 20, 5);
    }
    function YL(AS, AU, AP, AR, AQ, AB, AG = 1, AT = false, AX = 100) {
      var AF = !(arguments.length > 9) || arguments[9] === undefined || arguments[9];
      var Az = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : "#000000";
      DW.lineCap = "round";
      DW.strokeStyle = Az;
      DW.lineWidth = AG * 5;
      if (AT) {
        AP = "#999999";
      }
      var Aj = AX / 100;
      var S0 = AX / 2;
      var S1 = AX / 4;
      sV(AS, AU, AX * AG, AX * AG, 5, AP);
      sV(AS, AU + S1 * AG, AX * AG, S0 * AG, 5, NP(AP));
      sL(AS, AU, AX * AG, AX * AG, 5);
      DW.stroke();
      if (AF) {
        var S2 = (AQ.isCelestial ? 40 : 20) * AG * Aj;
        var S3 = AT ? "#c0c0c0" : AR;
        var S4 = Y1 / (AT ? 10 : 1);
        YI(AS, AU, S2, S4, S3, AQ, AB, AG * Aj);
      }
      DW.lineCap = "round";
      YZ(AS, AU + AG * 35 * Aj, AQ.name, AG * 15 * Aj, 10 / 1.5 * AG * Aj, AT ? "#c0c0c0" : "#ffffff");
    }
    function YI(AS, AU, AP, AR, AQ, AB, AG, AT, AX = 0) {
      var AF = 0;
      var Az = false;
      if (AB.isCelestial != null) {
        AX = AB.isCelestial ? 1 : 0;
      }
      if (AG) {
        s8(AS, AU, AP, AR, AB.barrels, false, AT);
        OA(AS, AU, AP, AQ, AX == 1 ? 3 : 0, AR, false, AT);
      } else {
        if (AB.outerSize > 0) {
          OA(AS, AU, AP + AB.outerSize * AP, "#5F676C", AB.outerSides, AR, false, AT, AP);
        }
        OA(AS, AU, AP, AQ, AB.sides, AR, false, AT);
        s2(AS, AU, AR, AP, AQ, AB.layers, 0, AF, Az, false, AT);
        s5(AS, AU, AP, AR, AB.gadgets, AQ, 0, AF, Az, false, AT);
      }
    }
    function YE(AS, AU, AP, AR, AQ, AB, AG = 100, AT = 1) {
      DW.lineCap = "round";
      DW.strokeStyle = "black";
      DW.lineWidth = AT * 5;
      var AX = AG / 100;
      var AF = AG / 2;
      var Az = AG / 4;
      var Aj = AT * AX;
      sV(AS, AU, AG * AT, AG * AT, 5, AR);
      sV(AS, AU + Az * AT, AG * AT, AF * AT, 5, NP(AR));
      sL(AS, AU, AG * AT, AG * AT, 5);
      DW.stroke();
      DW.lineCap = "round";
      for (var S0 = 0; S0 < AP.length; S0++) {
        YZ(AS, AU + (S0 * 20 - 25) * Aj, AP[S0], Aj * 15, 10 / 1.5 * Aj, "#ffffff");
      }
      YZ(AS, AU + Aj * 15, `${AQ}/${15}`, Aj * 15, 10 / 1.5 * Aj, "#ffffff");
      var S1 = AU + Aj * 35;
      var S2 = Aj * 15;
      var S3 = Aj * 80;
      var S4 = AQ / 15 * S3;
      var S5 = AB / 15 * S3;
      DW.lineCap = "round";
      DW.strokeStyle = "black";
      DW.lineWidth = S2;
      DW.beginPath();
      DW.moveTo(AS - S3 / 2, S1);
      DW.lineTo(AS + S3 / 2, S1);
      DW.stroke();
      DW.lineWidth = S2 - 10;
      if (AQ != 0) {
        DW.globalAlpha = 0.5;
        DW.strokeStyle = AR;
        DW.beginPath();
        DW.moveTo(AS - S3 / 2, S1);
        DW.lineTo(AS + S4 - S3 / 2, S1);
        DW.stroke();
      }
      DW.globalAlpha = 1;
      if (AB > 0.1) {
        DW.strokeStyle = AR;
        DW.beginPath();
        DW.moveTo(AS - S3 / 2, S1);
        DW.lineTo(AS + S5 - S3 / 2, S1);
        DW.stroke();
      }
    }
    function YK(AS, AU, AP = 100, AR = "#adadad") {
      DW.lineCap = "round";
      DW.strokeStyle = "black";
      DW.lineWidth = 5;
      var AQ = AP * 0.4;
      var AB = AQ / 2;
      var AG = AQ / 4;
      sV(AS, AU, AP, AQ, 5, AR);
      sV(AS, AU + AG, AP, AB, 5, NP(AR));
      sL(AS, AU, AP, AQ, 5);
      DW.stroke();
      DW.lineCap = "round";
      YZ(AS, AU, "IGNORE", AB, 10);
    }
    function Yk(AS, AU) {
      try {
        var AP = DW;
        (DW = AS.getContext("2d")).clearRect(0, 0, AS.width, AS.height);
        (function (AR, AQ) {
          var AB = AR / 2;
          var AG = AR / 2;
          AR /= 2;
          var AT = AQ.scale * (AQ.tankType == 1 ? 2 : 1);
          var AX = AR * AQ.size / 60 / AT * (AQ.tankType == 1 ? 100 / 30 : 1);
          var AF = AR * 5 / 60 / AT;
          var Az = 1 / ((AQ.gridScale || 0) < 0.1 ? 1 : AQ.gridScale) * AQ.gridSize;
          var Aj = Math.ceil(Az * AT - 1);
          var S0 = AR / Az / AT;
          sI(AB, AG, AR, AQ.backgroundColor);
          DW.lineWidth = AF;
          DW.lineCap = "round";
          DW.strokeStyle = AQ.gridColor;
          DW.beginPath();
          DW.moveTo(AB, AG + AR);
          DW.lineTo(AB, AG - AR);
          DW.moveTo(AB + AR, AG);
          DW.lineTo(AB - AR, AG);
          for (var S1 = 1; S1 < Aj + 1; S1++) {
            DW.moveTo(AB + S0 * S1, AG + AR);
            DW.lineTo(AB + S0 * S1, AG - AR);
            DW.moveTo(AB - S0 * S1, AG + AR);
            DW.lineTo(AB - S0 * S1, AG - AR);
            DW.moveTo(AB + AR, AG + S0 * S1);
            DW.lineTo(AB - AR, AG + S0 * S1);
            DW.moveTo(AB + AR, AG - S0 * S1);
            DW.lineTo(AB - AR, AG - S0 * S1);
          }
          DW.stroke();
          var S2 = NS(0, AQ.team);
          var S3 = AQ.rot;
          AF /= 5;
          var S4 = AB + AR * AQ.offsetX / 2 / AT;
          var S5 = AG + AR * AQ.offsetY / 2 / AT;
          if (AQ.outerSize > 0) {
            OA(S4, S5, AX + AQ.outerSize * AX, "#5F676C", AQ.outerSides, S3, false, AF, AX);
          }
          s8(S4, S5, AX, S3, AQ.barrels, false, AF);
          OA(S4, S5, AX, S2, AQ.sides, S3, false, AF);
          s2(S4, S5, S3, AX, S2, AQ.layers, 0, 0, false, false, AF);
          s5(S4, S5, AX, S3, AQ.gadgets, S2, 0, false, false, false, AF);
          (function (S6, S7 = 0) {
            DW.globalCompositeOperation = "destination-in";
            DW.beginPath();
            DW.arc(S6 / 2, S6 / 2, S6 / 2 - S7, 0, Math.PI * 2, false);
            DW.fill();
            DW.globalCompositeOperation = "source-over";
          })(DW.canvas.width, AF * 5 / 2);
          sI(AB, AG, AR - AF * 5 / 2, undefined, AQ.borderColor || AQ.gridColor, AF * 5);
        })(AS.width, AU);
        DW = AP;
      } catch (AR) {
        console.error(AR);
      }
    }
    function YH(AS, AU, AP, AR = 1, AQ, AB, AG, AT, AX = 0, AF = 0, Az, Aj = 1) {
      var S0 = DW.globalAlpha;
      DW.globalAlpha = AT * S0;
      DW.textAlign = "left";
      DW.textBaseline = "middle";
      DW.lineJoin = "miter";
      DW.miterLimit = 2;
      DW.strokeStyle = "black";
      if (AP && !AP.width) {
        DW.font = "bold " + AQ + "px Roboto";
        var S1 = 900;
        var S2 = [];
        var S3 = {
          fullText: "",
          sections: []
        };
        for (var S4 = 0; S4 < AP.sections.length; S4++) {
          var S5 = AP.sections[S4];
          var S6 = DW.measureText(S3.fullText + S5.text).width;
          if (S6 < S1 || S3.fullText == "") {
            S3.fullText += S5.text;
            S3.sections.push(S5);
          } else {
            S2.push(S3);
            S3 = {
              fullText: S5.text,
              sections: [S5]
            };
          }
        }
        S2.push(S3);
        for (var S7 = 0, S8 = S2; S7 < S8.length; S7++) {
          for (var S9 = S8[S7], SC = [], SV = 0; SV < S9.sections.length; SV++) {
            var SL = S9.sections[SV];
            var SI = SC[SC.length - 1];
            var SE = undefined;
            var SK = undefined;
            for (var SH = SV; SH < S9.sections.length; SH++) {
              var SZ = S9.sections[SH];
              if (SZ.text.trim() != "") {
                SE = SZ;
                SK = SH;
                break;
              }
            }
            if (SI && SI.color == SL.color && SI.link == SL.link && SK && (SK == SV || SK > SV && SE.color == SL.color && SE.link == SL.link)) {
              SC[SC.length - 1].text += SL.text;
            } else {
              SC.push(SL);
            }
          }
          S9.sections = SC;
        }
        for (var SM = 0, SJ = S2; SM < SJ.length; SM++) {
          var SD = SJ[SM];
          SD.width = DW.measureText(SD.fullText).width;
          var SN;
          var SY = JS(SD.sections);
          try {
            for (SY.s(); !(SN = SY.n()).done;) {
              var SO = SN.value;
              SO.width = DW.measureText(SO.text).width;
            }
          } catch (U6) {
            SY.e(U6);
          } finally {
            SY.f();
          }
        }
        AP.lines = S2;
        AP.width = S2.slice().sort(function (U7, U8) {
          return U8.width - U7.width;
        })[0].width;
        AP.height = AP.lines.length * AQ * 1.2 + AQ * 0.3;
      }
      var SW = 1;
      var Sq = 1;
      if (AG) {
        var SA = 0;
        var SS = 0;
        if (AP) {
          SA = AP.height;
          SS = AP.width + AQ;
          if (Aj < 1) {
            SA = nJ(AQ * 1.5, SA, Aj);
            SS = nJ(AQ * 2.5, SS, Aj);
            SW = SA / AP.height;
            Sq = SS / (AP.width + AQ);
          }
        } else {
          SA = AQ * 1.5;
          SS = AQ * 2.5;
        }
        sV(AS, AU - SA / 2 * AR, SS, SA, AQ * 0.4, "#0000008c", AX * AQ, AF * AQ);
      }
      DW.font = "bold " + AQ * Sq + "px Roboto";
      if (AP) {
        var SU = AS - AP.width * Sq / 2;
        var SP = AU - (AP.height / 2 * AR + (AP.lines.length - 1) * AQ * 1.2 / 2) * SW;
        var SR = SU;
        DW.globalAlpha = AT * S0 * Aj;
        var SQ;
        var SB = JS(AP.lines);
        try {
          for (SB.s(); !(SQ = SB.n()).done;) {
            var SG = SQ.value;
            SU = SR;
            var ST;
            var SX = JS(SG.sections);
            try {
              for (SX.s(); !(ST = SX.n()).done;) {
                var SF = ST.value;
                if (tB && SF.link && t3) {
                  var Sz = {
                    x: SU,
                    y: SP - 12,
                    width: SF.width,
                    height: 25
                  };
                  if (pJ(tT, Sz)) {
                    w0(SF.text);
                    break;
                  }
                }
                DW.fillStyle = NS(SF.color, SF.color);
                if (SF.link) {
                  DW.fillRect(SU, SP + 11, SF.width, 3);
                }
                if (AB != 0) {
                  DW.strokeText(SF.text, SU, SP);
                }
                DW.fillText(SF.text, SU, SP);
                SU += SF.width * Sq;
              }
            } catch (U7) {
              SX.e(U7);
            } finally {
              SX.f();
            }
            SP += AQ * 1.2 * SW;
          }
        } catch (U8) {
          SB.e(U8);
        } finally {
          SB.f();
        }
      }
      if (Aj < 1 || !AP) {
        var Sj = 3;
        var U0 = performance.now() / 200;
        var U1 = 30;
        var U2 = AQ * 1.5;
        if (AP) {
          U1 = nJ(U1, AP.width / 2, Aj);
          U2 = nJ(U2, AP.height, Aj);
        }
        var U3 = U2 * 0.5 / Sj;
        for (var U4 = 0; U4 < Sj; U4++) {
          var U5 = 0.5 + (1 + Math.sin(-U0 + U4 * Math.PI / Sj)) * AT / 4;
          DW.beginPath();
          DW.arc(AS - U1 / 2 + U4 / (Sj - 1) * U1, AU - U2 / 2 * AR, U3 * U5, 0, Math.PI * 2, false);
          DW.fillStyle = Az;
          DW.globalAlpha = S0 * U5 * AT * (1 - Aj);
          DW.fill();
        }
      }
      DW.globalAlpha = S0;
    }
    function YZ(AS, AU, AP, AR, AQ, AB = "white", AG = "center") {
      DW.font = "bold " + AR + "px Roboto";
      DW.textAlign = AG;
      DW.textBaseline = "middle";
      DW.lineJoin = "miter";
      DW.miterLimit = 2;
      DW.lineWidth = AQ;
      DW.fillStyle = AB;
      if (AQ) {
        DW.strokeStyle = "black";
        DW.strokeText(AP, AS, AU);
      }
      DW.fillText(AP, AS, AU);
    }
    function YM(AS, AU, AP = 0) {
      DW.font = "bold " + AU + "px Roboto";
      DW.textAlign = "center";
      DW.textBaseline = "middle";
      DW.lineJoin = "miter";
      DW.miterLimit = 2;
      DW.lineWidth = AP;
      return DW.measureText(AS);
    }
    var YJ = [1, -1];
    var YD = [{
      sign: 1,
      size: 1
    }, {
      sign: -1,
      size: 1
    }];
    var YN = [{
      sign: 1,
      size: 1
    }, {
      sign: -1,
      size: 1
    }];
    var YY = [{
      id: "gamemode",
      hovered: false,
      size: 1
    }, {
      id: "region",
      hovered: false,
      size: 1
    }];
    var YO = "#c0c0c0";
    var YW = "Connecting...";
    var Yq = 0;
    var YA = 1;
    var YS = "???";
    var YU = 0;
    var YP = 1;
    var YR = false;
    var YQ = false;
    var YB = 0;
    var YG = document.getElementById("link-confirm-popup");
    var YT = document.getElementById("link-confirm-title");
    var YX = document.getElementById("link-confirm-text");
    var YF = document.getElementById("link-confirm");
    var Yz = document.getElementById("link-cancel");
    var Yj = false;
    function w0(AS) {
      rL(true);
      YG.classList.remove("hide");
      YT.innerText = "Open Link?";
      YX.innerHTML = `Are you sure that you want to open the link ${A2(AS)}?<br />Never open links from people you don't trust.`;
      YF.onclick = function () {
        w1();
        window.open(AS, "_blank");
      };
      Yz.onclick = function () {
        w1();
      };
    }
    function w1() {
      rL(false);
      YG.classList.add("hide");
      Yj = false;
    }
    var w2 = document.getElementById("apply-quick-chat");
    var w3 = document.getElementById("delete-quick-chat");
    var w4 = document.getElementById("cancel-quick-chat");
    var w5 = document.getElementById("quick-chat-title");
    var w6 = document.getElementById("quick-chat-popup");
    var w7 = document.getElementById("quick-chat-input");
    var w8 = false;
    var w9 = [];
    var wC = 0;
    var wV = false;
    var wL = false;
    function wI(AS, AU = false) {
      var AP = w9[AS];
      if (!AP.add || !AU) {
        if (AP && !AP.add) {
          W3(AP.message);
          wL = false;
        }
      }
    }
    function wE(AS) {
      rL(true);
      w6.classList.remove("hide");
      w8 = true;
      var AU = w9.filter(function (AR) {
        return !AR.add;
      }).map(function (AR) {
        return AR.message;
      });
      if (AS == null) {
        w5.textContent = "Create Quick Chat Message";
        w2.textContent = "CREATE";
        w3.classList.add("hidden");
        w7.value = "";
        w2.onclick = function () {
          if (w7.value.trim()) {
            AU.push(w7.value.trim());
            wK(AU);
          }
          wH();
          wL = true;
        };
        w4.onclick = function () {
          wH();
          wL = true;
        };
      } else {
        var AP = AU[AS];
        w5.textContent = "Edit Quick Chat Message";
        w2.textContent = "APPLY";
        w3.classList.remove("hidden");
        w7.value = AP;
        w2.onclick = function () {
          if (w7.value.trim()) {
            AU[AS] = w7.value.trim();
          } else {
            AU.splice(AS, 1);
          }
          wK(AU);
          wH();
          wL = true;
        };
        w3.onclick = function () {
          AU.splice(AS, 1);
          wH();
          wK(AU);
          wL = true;
        };
        w4.onclick = function () {
          wH();
          wL = true;
        };
      }
      setTimeout(function () {
        w7.focus();
      }, 0);
    }
    function wK(AS) {
      if (!AS || typeof AS == "string") {
        AS = [];
      }
      AV("quick_chat", JSON.stringify(AS));
      w9 = AS.map(function (AP) {
        return {
          message: AP,
          lerping: 0,
          buttonLerping: 0
        };
      });
      for (var AU = 0; AU < Math.max(0, 3 - AS.length) + 1; AU++) {
        w9.push({
          add: true,
          lerping: 0,
          buttonLerping: 0
        });
      }
    }
    function wH() {
      w7.blur();
      rL(false);
      w6.classList.add("hide");
      w8 = false;
    }
    function wZ() {
      wL = !wL;
    }
    var wM = 0;
    var wJ = 0;
    var wD = 0;
    var wN = 0;
    function wY(AS, AU, AP, AR) {
      DW.globalAlpha = 0.5;
      sK(AU, AP, AR, "#000000");
      sK(AU + AS.x * AR, AP + AS.y * AR, AR * 0.5, "#000000");
    }
    function wO(AS, AU) {
      var AP = AS ? wJ : wM;
      var AR = DK.width / 2;
      var AQ = DK.height / 2 - DK.height * (1 - AP);
      var AB = AS ? wW : wq;
      var AG = (AU ? pV.celestial : pV.normal)[AS ? "weapon" : "body"];
      var AT = [];
      for (var AX = 0, AF = Object.entries(AG); AX < AF.length; AX++) {
        var Az = JU(AF[AX], 2);
        var Aj = Az[0];
        for (var S0 = Az[1], S1 = +Aj, S2 = 0; S2 < S0.length; S2++) {
          for (var S3 = S0[S2], S4 = Math.min(DK.width / (S0.length * 200), 1), S5 = AR + DK.width * AP * ((S2 + 1) / (S0.length + 1) * 0.6 - 0.3), S6 = AQ + DK.height * AP * (S1 / AG.maxTier * 0.6 - 0.3), S7 = 0; S7 < S3.evolutions.length; S7++) {
            var S8;
            var S9 = AG[S1 + 1];
            var SC = S3.evolutions[S7];
            var SV = 0;
            for (SV = 0; SV < S9.length; SV++) {
              if (S9[SV].id == SC) {
                S8 = S9[SV];
                break;
              }
            }
            if (!S8) {
              return;
            }
            var SL = Math.min(DK.width / (S9.length * 200), 1);
            var SI = AR + DK.width * AP * ((SV + 1) / (S9.length + 1) * 0.6 - 0.3);
            var SE = AQ + DK.height * AP * ((S1 + 1) / AG.maxTier * 0.6 - 0.3);
            var SK = AB.includes(S3.id) && AB.includes(SC);
            AT.push({
              points: [{
                x: S5,
                y: S6 + S4 * 50
              }, {
                x: S5,
                y: S6 + S4 * 50 + 10
              }, {
                x: SI,
                y: SE - SL * 50 - 10
              }, {
                x: SI,
                y: SE - SL * 50
              }],
              width: S4 * 5,
              priority: SK ? 1 : 0,
              color: SK ? "black" : "#999999"
            });
          }
        }
        AT.sort(function (SU, SP) {
          return SU.priority - SP.priority;
        });
        for (var SH = 0; SH < AT.length; SH++) {
          var SZ = AT[SH];
          DW.strokeStyle = SZ.color;
          DW.lineWidth = SZ.width;
          DW.beginPath();
          DW.moveTo(SZ.points[0].x, SZ.points[0].y);
          for (var SM = 1; SM < SZ.points.length; SM++) {
            var SJ = SZ.points[SM];
            DW.lineTo(SJ.x, SJ.y);
          }
          DW.stroke();
        }
      }
      for (var SD = 0, SN = Object.entries(AG); SD < SN.length; SD++) {
        var SY = JU(SN[SD], 2);
        var SO = SY[0];
        for (var SW = SY[1], Sq = +SO, SA = 0; SA < SW.length; SA++) {
          var SS = SW[SA];
          SS.upgradeType = 0;
          SS.isCelestial = AU;
          YL(AR + DK.width * AP * ((SA + 1) / (SW.length + 1) * 0.6 - 0.3), AQ + DK.height * AP * (Sq / AG.maxTier * 0.6 - 0.3), i9.a[Sq], tG, SS, AS, Math.min(DK.width / (SW.length * 200), 1), !AB.includes(SS.id));
        }
      }
    }
    var wW = [];
    var wq = [];
    function wA(AS) {
      var AU = AS ? D8.weaponUpgrade : D8.bodyUpgrade;
      var AP = (D8.isCelestial ? pV.celestial : pV.normal)[AS ? "weapon" : "body"];
      for (var AR = 0, AQ = Object.entries(AP); AR < AQ.length; AR++) {
        var AB = JU(AQ[AR], 2);
        var AG = AB[0];
        for (var AT = AB[1], AX = +AG, AF = 0; AF < AT.length; AF++) {
          if (AT[AF].id == AU) {
            if (AS) {
              wD = AX;
            } else {
              wN = AX;
            }
          }
        }
      }
      var Az;
      var Aj = [AU];
      for (var S0 = AS ? wD : wN, S1 = 0; S1 < AP[S0].length; S1++) {
        var S2 = AP[S0][S1];
        if (S2.id == AU) {
          Az = S2;
          break;
        }
      }
      if (Az) {
        Aj = Aj.concat(wS(AP, S0, AU));
        if (AS) {
          wW = Aj;
        } else {
          wq = Aj;
        }
      }
    }
    function wS(AS, AU, AP) {
      for (var AR = AS[AU], AQ = 0; AQ < AR.length; AQ++) {
        var AB = AR[AQ];
        if (AB.id == AP) {
          var AG = [];
          for (var AT = 0; AT < AB.evolutions.length; AT++) {
            var AX = AB.evolutions[AT];
            (AG = AG.concat(wS(AS, AU + 1, AX))).push(AX);
          }
          return E1(AG);
        }
      }
      return 0;
    }
    var wU = 0.5;
    function wP(AS, AU, AP, AR = 4) {
      switch (AP.type) {
        default:
          DW.fillStyle = "#000000";
        case 0:
          DW.fillStyle = NY("#c0c0c0", false, 1);
          break;
        case 1:
          if (AP.subtype === 2) {
            DW.fillStyle = NY(i9.a[0], false, 1);
            AR *= 2;
          } else {
            DW.fillStyle = "#000000";
          }
      }
      DW.beginPath();
      DW.arc(AS, AU, AR, 0, Math.PI * 2, false);
      DW.fill();
    }
    var wR = 0;
    var wQ = 0;
    var wB = "0";
    var wG = 1;
    var wT = 0;
    var wX = 0;
    var wF = [];
    var wz = 0;
    var wj = 0;
    var O0 = 0;
    var O1 = "#ffffff";
    function O2(AS) {
      wR = AS;
    }
    var O3 = [];
    function O4(AS, AU, AP, AR) {
      var AQ = O7(AS, AU, AP, AR, true);
      O3.push({
        object: AQ,
        time: 1
      });
    }
    function O5(AS, AU, AP, AR = 1) {
      var AQ = AR * 5 / 2;
      var AB = AR * 300 - AQ;
      var AG = AR * 100 - AQ * 2;
      var AT = AB / 2;
      var AX = AG / 2;
      var AF = AG / 4;
      DW.lineCap = "round";
      DW.strokeStyle = "#000000";
      DW.lineWidth = AQ;
      var Az = AP.completed ? "#ffffff" : "#c0c0c0";
      sV(AS, AU, AB, AG, AR * 5, AP.color);
      sV(AS, AU + AF, AB, AX, AR * 5, AP.strokeColor);
      sL(AS, AU, AB, AG, AR * 5);
      DW.stroke();
      YZ(AS - AT + AR * 10, AU - AX + AR * 20, AP.name, AR * 20, AQ * 2, Az, "left");
      if (AP.progress) {
        YZ(AS - AT + AR * 10, AU - AX + AR * 40, AP.progress, AR * 10, AQ * 2, Az, "left");
      }
      var Aj = AR * 15;
      if (!AP.description) {
        var S0 = function S3(S4 = 2) {
          var S5 = AB - AR * 20;
          var S6 = AP.rawDescription.split(/(\s+)/);
          var S7 = [];
          var S8 = "";
          DW.lineWidth = AQ * 2;
          DW.font = "bold " + Aj + "px Roboto";
          for (var S9 = 0; S9 < S6.length; S9++) {
            var SC = S6[S9].trim();
            if (SC) {
              var SV = DW.measureText(S8.trim() + " " + SC).width;
              if (SV < S5 || S8.fullText == "") {
                S8 += " " + SC;
              } else {
                S7.push(S8.trim());
                S8 = SC;
              }
            }
          }
          S7.push(S8.trim());
          AP.descriptionFontSize = Aj / AR;
          AP.description = S7;
          if (S7.length > S4) {
            Aj = AR * 15 * Math.pow(0.72, S4 - 1);
            S3(S4 + 1);
          }
        };
        S0();
      }
      Aj = AP.descriptionFontSize * AR;
      for (var S1 = 0; S1 < AP.description.length; S1++) {
        var S2 = AP.description[S1];
        YZ(AS - AT + AR * 10, AU + AR * 12 + S1 * (Aj * 1.23), S2, Aj, AQ * 2, Az, "left");
      }
      if (!AP.stars) {
        AP.stars = nP(AP.rawStars);
        DW.lineWidth = AQ * 2;
        DW.font = "bold " + AR * 18 + "px Roboto";
        AP.starTextWidth = DW.measureText(AP.stars).width / AR;
      }
      YZ(AS + AT - AR * 8, AU - AX + AR * 22, AP.stars, AR * 18, AQ * 2, Az, "right");
      sN(AS + AT - (25 + AP.starTextWidth) * AR, AU - AX + AR * 20, AR * 14, AR * 7, 5, AP.completed ? "#FFE449" : "#c0c0c0", "#000000", AQ, 0);
      DW.setTransform(1, 0, 0, 1, 0, 0);
    }
    function O6(AS, AU, AP) {
      var AR = DW;
      (DW = AS.getContext("2d")).clearRect(0, 0, AS.width, AS.height);
      O5(AS.width / 2, AS.height / 2, AU, AP);
      DW = AR;
    }
    function O7(AS, AU, AP, AR, AQ, AB) {
      var AG = AQ ? i9.i[AP] : "#5F676C";
      return {
        name: AS,
        rawDescription: AU,
        rarity: AP,
        color: AG,
        strokeColor: NP(AG),
        rawStars: AR,
        completed: AQ,
        progress: AB
      };
    }
    var O8 = DW;
    function O9() {
      O8 = DW;
      DW = DD;
    }
    function OC() {
      DW = O8;
    }
    function OV(AS, AU, AP, AR = "#ffffff", AQ, AB = 0) {
      AP -= Math.PI / 2;
      O9();
      if (AQ == null) {
        AQ = Math.max(DK.width, DK.height);
      }
      AS += Math.cos(AP) * AB;
      AU += Math.sin(AP) * AB;
      var AG = AS + AQ * Math.cos(AP);
      var AT = AU + AQ * Math.sin(AP);
      DW.strokeStyle = AR;
      DW.lineCap = "round";
      DW.lineWidth = +EV.guideLineWidth;
      DW.beginPath();
      DW.moveTo(AS, AU);
      DW.lineTo(AG, AT);
      DW.stroke();
      OC();
    }
    function OL(AS, AU, AP, AR = "#ffffff") {
      O9();
      DW.strokeStyle = AR;
      DW.lineCap = "round";
      DW.lineWidth = +EV.guideLineWidth;
      DW.beginPath();
      DW.arc(AS, AU, AP, 0, Math.PI * 2, false);
      DW.stroke();
      OC();
    }
    function OI(AS, AU, AP, AR, AQ, AB = "#ffffff") {
      AR -= Math.PI / 2;
      AQ -= Math.PI / 2;
      O9();
      DW.strokeStyle = AB;
      DW.lineCap = "round";
      DW.lineWidth = +EV.guideLineWidth;
      DW.beginPath();
      DW.arc(AS, AU, AP, AR, AQ, false);
      DW.stroke();
      OC();
    }
    function OE(AS, AU, AP, AR, AQ = "#ffffff") {
      O9();
      DW.strokeStyle = AQ;
      DW.lineCap = "round";
      DW.lineWidth = +EV.guideLineWidth;
      DW.strokeRect(AS, AU, AP, AR);
      OC();
    }
    function OK(AS, AU, AP, AR, AQ, AB, AG) {
      AR -= Math.PI / 2;
      O9();
      var AT = AS + AP * Math.cos(AR);
      var AX = AU + AP * Math.sin(AR);
      var AF = AT + AB * Math.cos(AR + AQ);
      var Az = AX + AB * Math.sin(AR + AQ);
      var Aj = AT - AB * Math.cos(AR - AQ);
      var S0 = AX - AB * Math.sin(AR - AQ);
      DW.strokeStyle = AG;
      DW.lineCap = "round";
      DW.lineWidth = +EV.guideLineWidth;
      DW.beginPath();
      DW.moveTo(AT, AX);
      DW.lineTo(AF, Az);
      DW.moveTo(AT, AX);
      DW.lineTo(Aj, S0);
      DW.stroke();
      OC();
    }
    var OH = false;
    var OZ = [];
    function OM(AS, AU) {
      var AP;
      AP = AS ? NS(AS.team, AU.team, AS.id, AU.id) : NS(0, AU.team, 0, AU.parentID);
      OH = AS && AS.id == AU.id && t4;
      OJ(AU, AP, AU.sides, true);
      OH = false;
    }
    function OJ(AS, AU, AP, AR) {
      var AQ = Math.round((1 - AS.damageTime || 0) * 80);
      var AB = NQ(NY(AU, AS.isInvulnerable, AS.radiant), AQ);
      AS.lastColor = AB;
      var AG = AS.fadeTime || 1;
      var AT = AS.x;
      var AX = AS.y;
      var AF = AS.d;
      var Az = AS.size;
      DW.globalAlpha = 1;
      var Aj = false;
      if (AS.fadeType) {
        var S0 = AS.fadeType[1];
        switch (AS.fadeType[0]) {
          case 0:
            Az *= 1 + (1 - AG) * 0.5;
            if (AG < 1) {
              Aj = true;
              p4(AG);
            }
            break;
          case 1:
            Az *= AG;
            break;
          case 2:
            var S1 = Math.pow(1 - AG, 2);
            Az *= 1 + (1 - AG) * 2;
            AF += S1 * S0[0] * 4;
            AT += S1 * Math.cos(S0[1]) * 2000;
            AX += S1 * Math.sin(S0[1]) * 2000;
            if (AG < 1) {
              Aj = true;
              p4(AG);
            }
            break;
          case 3:
            var S2 = Math.pow(1 - AG, 2);
            Az *= 1 - S2;
            AF += S2 * S0[0] * 4;
            AT = nJ(AT, S0[1], S2);
            AX = nJ(AX, S0[2], S2);
        }
      }
      if (AS.outerSize > 0) {
        OA(AT, AX, Az + AS.outerSize * Az, "#5F676C", AS.outerSides, AF, true, 1, Az);
      }
      if (AS.barrels && AS.barrels.length > 0) {
        s8(AT, AX, Az, AF, AS.barrels, true);
      }
      OA(AT, AX, Az, AB, AP, AF, true);
      if (AS.layers) {
        s2(AT, AX, AF, Az, AB, AS.layers, AQ, AS.radiant, AS.isInvulnerable);
      }
      if (AS.gadgets && AS.gadgets.length > 0) {
        s5(AT, AX, Az, AF, AS.gadgets, AB, AQ, AS.radiant, AS.isInvulnerable, true);
      }
      if (Aj) {
        p5();
      }
      if (t6 && AG >= 1) {
        var S3 = {
          x: DK.width / 2 + (AT - DR) / DU,
          y: DK.height / 2 + (AX - DQ) / DU,
          r: AS.size / DU,
          rot: AF
        };
        if (pM(tT, S3)) {
          (function (S4) {
            addNotification(`Copied ${S4.name}'s ID to clipboard. (${S4.id})`);
            navigator.clipboard.writeText(S4.id);
          })(AS);
          t6 = false;
        }
      }
      if (k9 && EV.showHitboxes && AG >= 1) {
        OL(DK.width / 2 + (AT - DR) / DU, DK.height / 2 + (AX - DQ) / DU, AS.size / DU, "#ffffff");
      }
    }
    function OD(AS, AU) {
      var AP = AU.x;
      var AR = AU.y;
      var AQ = AU.d;
      var AB = AU.size;
      var AG = AU.fadeTime || 1;
      DW.globalAlpha = 1;
      var AT;
      var AX = false;
      if (AU.fadeType) {
        var AF = AU.fadeType[1];
        switch (AU.fadeType[0]) {
          case 0:
            AB *= 1 + (1 - AG) * 0.5;
            if (AG < 1) {
              AX = true;
              p4(AG);
            }
            break;
          case 1:
            AB *= AG;
            break;
          case 2:
            var Az = Math.pow(1 - AG, 2);
            AB *= 1 + (1 - AG) * 2;
            AQ += Az * AF[0] * 4;
            AP += Az * Math.cos(AF[1]) * 2000;
            AR += Az * Math.sin(AF[1]) * 2000;
            if (AG < 1) {
              AX = true;
              p4(AG);
            }
            break;
          case 3:
            var Aj = Math.pow(1 - AG, 2);
            AB *= 1 - Aj;
            AQ += Aj * AF[0] * 4;
            AP = nJ(AP, AF[1], Aj);
            AR = nJ(AR, AF[2], Aj);
            break;
          case 4:
            var S0 = (1 - Math.pow(AG, 1.5)) * 0.35;
            AB *= 1 + (1 - AG) * 0.5;
            if (AG < 1) {
              AX = true;
              p4(AG);
            }
            AP += AF[0] * S0;
            AR += AF[1] * S0;
        }
      }
      AT = AS ? AU.color != null ? NS(AS.team, AU.color, AS.id, AU.parentID) : NS(AS.team, AU.team, AS.id, AU.parentID) : NS(0, AU.team, 0, AU.parentID);
      var S1 = Math.round((1 - AU.damageTime || 0) * 80);
      var S2 = NQ(NY(AT, false, AU.radiant), S1);
      AU.lastColor = S2;
      if (AU.outerSize > 0) {
        OA(AP, AR, AB + AU.outerSize * AB, "#5F676C", AU.outerSides, AQ, true, 1, AB);
      }
      if (AU.barrels && AU.barrels.length > 0) {
        s8(AP, AR, AB, AQ, AU.barrels, true);
      }
      OA(AP, AR, AB, S2, AU.sides, AQ, true);
      if (AU.layers) {
        s2(AP, AR, AQ, AB, S2, AU.layers, S1, AU.radiant, false);
      }
      if (AU.gadgets && AU.gadgets.length > 0) {
        s5(AP, AR, AB, AQ, AU.gadgets, S2, S1, AU.radiant, false, true);
      }
      if (AX) {
        p5();
      }
      if (k9 && EV.showHitboxes && AG >= 1) {
        OL(DK.width / 2 + (AP - DR) / DU, DK.height / 2 + (AR - DQ) / DU, AU.size / DU, "#ffffff");
      }
    }
    function ON(AS, AU, AP) {
      if (AU.radiant > 0) {
        var AR = performance.now();
        var AQ = AU.size;
        var AB = AU.x;
        var AG = AU.y;
        var AT = AU.d;
        var AX = AU.fadeTime || 1;
        var AF = 1;
        if (AU.fadeType) {
          var Az = AU.fadeType[1];
          switch (AU.fadeType[0]) {
            case 0:
              AQ *= 1 + (1 - AX) * 0.5;
              if (AX < 1) {
                AF = AX;
              }
              break;
            case 1:
              AQ *= AX;
              break;
            case 2:
              var Aj = Math.pow(1 - AX, 2);
              AQ *= 1 + (1 - AX) * 2;
              AT += Aj * Az[0] * 4;
              AB += Aj * Math.cos(Az[1]) * 2000;
              AG += Aj * Math.sin(Az[1]) * 2000;
              if (AX < 1) {
                AF = AX;
              }
              break;
            case 3:
              var S0 = Math.pow(1 - AX, 2);
              AQ *= 1 - S0;
              AT += S0 * Az[0] * 4;
              AB = nJ(AB, Az[1], S0);
              AG = nJ(AG, Az[2], S0);
          }
        }
        DW.globalAlpha = AF;
        AP ||= AS ? NS(AS.team, AU.team, AS.id, AU.parentID || AU.id) : NS(0, AU.team, 0, AU.parentID);
        if (Math.random() / E9 < 1 / (600 / AU.size)) {
          var S1 = Math.random() * Math.PI * 2;
          var S2 = Math.random() * AU.size;
          OF(AB + S2 * Math.sin(S1), AG + S2 * Math.cos(S1), (Math.random() * 1 - 0.5) * AU.radiant, (Math.random() * 1 - 0.5) * AU.radiant, pq(6, AU.radiant * 6), Math.random(), 0, AP, 60, 1, AU.radiant);
        }
        var S3 = NR(NG(NN).substring(1), "ffffff", 0.5);
        if (AU.radiant > 1) {
          var S4 = Math.min(DW.globalAlpha, 1);
          DW.globalAlpha = S4 * (1 - 0.7 / ((2 + AU.radiant) / 3));
          var S5 = Math.max(1.2 + (1 + Math.sin(AR / 800 * ((2 + AU.radiant) / 4))) * 0.1 * AU.radiant, 0.1);
          OA(AB, AG, (AQ + (AU.outerSize || 0) * AQ) * S5, S3, AU.outerSize > 0 ? AU.outerSides : AU.sides, AT, true, 1, AQ * S5);
          DW.globalAlpha = S4;
        }
        if (AU.radiant > 2) {
          if (AU.radiant > 3) {
            var S6 = Math.max(1.5 + AU.radiant / 5 + (1 + Math.sin(AR / 800 * ((1 + AU.radiant) / 2))) * 0.06 * AU.radiant, 0.1);
            OA(AB, AG, (AQ + (AU.outerSize || 0) * AQ) * S6, S3, -3, Math.cos(AR / 25000) * 20 * (1 + AU.radiant) / 2, true, 1, AQ * 0.4);
          }
          var S7 = 2 / ((AU.radiant + 2) / 5);
          OA(AB, AG, (AQ + (AU.outerSize || 0) * AQ) * (Math.cos(AR / 500 + Math.PI) / S7 + 1), S3, -6, AR / 2000 * (1 + AU.radiant) / 2, true, 1);
          OA(AB, AG, (AQ + (AU.outerSize || 0) * AQ) * (Math.cos(AR / 500) / S7 + 1), S3, -6, -AR / 2000 * (1 + AU.radiant) / 2, true, 1);
        }
      }
    }
    function OY(AS, AU) {
      var AP = AU.x;
      var AR = AU.y;
      var AQ = AU.size;
      DW.globalAlpha = 1;
      switch (AU.type) {
        case 0:
          if (k9 && EV.showHitboxes) {
            OL(DK.width / 2 + (AP - DR) / DU, DK.height / 2 + (AR - DQ) / DU, AQ / 4 / DU, "#ffffff");
            OL(DK.width / 2 + (AP - DR) / DU, DK.height / 2 + (AR - DQ) / DU, AQ * 10 / DU, "#ff0000");
          }
          var AB = NY("#ffffff", false, 10);
          OX(AP, AR, AU.size * 0.1);
          var AG = (P6 = performance.now() / 500) + 0.5;
          var AT = P6 - Math.floor(P6);
          var AX = AG - Math.floor(AG);
          var AF = 10 - AT * 9;
          var Az = 10 - AX * 9;
          var Aj = Math.sin(P6 / 5) * 5;
          DW.globalAlpha = Math.min(AT * 2, 1) * 0.2;
          OA(AU.x, AU.y, AU.size * AF, AB, -10, Aj, true, 1, AU.size * AF * 0.9);
          DW.globalAlpha = Math.min(AX * 2, 1) * 0.2;
          OA(AU.x, AU.y, AU.size * Az, AB, -8, Aj, true, 1, AU.size * Az * 0.9);
          DW.globalAlpha = 1;
          var S0 = AU.backgroundColor;
          var S1 = AU.gridColor;
          var S2 = AU.gridSize;
          var S3 = 5 / DU;
          OA(AU.x, AU.y, AQ, S0, 0, 0, true, 0);
          if (S3 > 0.3) {
            var S4 = S2 / DU;
            var S5 = DK.width / 2 + (AU.x - DR) / DU;
            var S6 = DK.height / 2 + (AU.y - DQ) / DU;
            var S7 = AQ / DU;
            var S8 = S5 - S7;
            var S9 = S6 - S7;
            var SC = S5 + S7;
            var SV = S6 + S7;
            var SL = -AU.x / DU % S4;
            var SI = -AU.y / DU % S4;
            DW.lineWidth = S3;
            DW.strokeStyle = S1;
            DW.beginPath();
            for (var SE = S8 + SL; SE < SC; SE += S4) {
              var SK = Math.sqrt(1 - Math.pow(Math.abs(SE - S5) / S7, 2)) * S7;
              DW.moveTo(SE, S6 - SK);
              DW.lineTo(SE, S6 + SK);
            }
            for (var SH = S9 + SI; SH < SV; SH += S4) {
              var SZ = Math.sqrt(1 - Math.pow(Math.abs(SH - S6) / S7, 2)) * S7;
              DW.moveTo(S5 - SZ, SH);
              DW.lineTo(S5 + SZ, SH);
            }
            DW.stroke();
          }
          for (var SM = nH(n9(AU.size * 0.12, 10, 20)), SJ = AU.size / SM * 4, SD = Math.sin(P6 / 2) * 0.2 + Math.PI / 2, SN = Math.sin(P6 / 10) * 10, SY = 0; SY < SM; SY++) {
            var SO = SY / SM * Math.PI * 2 + SN;
            var SW = AU.size * (1 + Math.sin(SO - SN + P6 * 3) * 0.05);
            var Sq = 1 + Math.sin(SO - SN + P6 / 2) * 0.05;
            OA(AU.x + Math.sin(SO) * SW, AU.y + Math.cos(SO) * SW, SJ * Sq, AB, -2, SD - SO, true, 1, SJ * 0.85);
          }
          for (var SA = Math.min(1, AU.size / 30) * 30 * Math.min(D7, 0.1) * E9, SS = Math.random(); SS < SA; SS += Math.random()) {
            if (Math.random() < 0.1) {
              var SU = Math.random() * Math.PI * 2;
              var SP = pq(1, 2);
              var SR = pq(60, 120);
              OF(AP, AR, SP * Math.sin(SU), SP * Math.cos(SU), pq(4, 8), Math.random() * Math.PI * 2, 0, "#ffffff", SR, 1, 10);
            } else {
              var SQ = Math.random() * Math.PI * 2;
              var SB = pq(3, 5) * Math.max(1, AQ / 30);
              var SG = pq(30, 60);
              var ST = SB * SG;
              OF(AP + -Math.sin(SQ) * ST, AR + -Math.cos(SQ) * ST, SB * Math.sin(SQ), SB * Math.cos(SQ), pq(4, Math.max(1, AQ / 15) * 8), Math.random() * Math.PI * 2, 0, "#ffffff", SG, 1, 10, 1, false, AU.id);
            }
          }
          break;
        case 1:
          if (k9 && EV.showHitboxes) {
            OL(DK.width / 2 + (AP - DR) / DU, DK.height / 2 + (AR - DQ) / DU, AQ / DU, "#ffffff");
          }
          OX(AP, AR, 1.3);
          switch (AU.subtype) {
            case 0:
              var SX = NA(AU.gamemode);
              var SF = performance.now() / 2500;
              var Sz = SF + 0.5;
              var Sj = SF - Math.floor(SF);
              var U0 = Sz - Math.floor(Sz);
              var U1 = 1 + Sj * 3;
              var U2 = 1 + U0 * 3;
              DW.globalAlpha = Math.min((1 - Sj) * 2, 1) * 0.2;
              OA(AU.x, AU.y, AU.size * U1, SX, 0, 0, true);
              DW.globalAlpha = Math.min((1 - U0) * 2, 1) * 0.2;
              OA(AU.x, AU.y, AU.size * U2, SX, 0, 0, true);
              DW.globalAlpha = 1;
              var U3 = "#000000";
              var U4 = 1 - Math.min(AU.lifetime / 30, 1);
              if (U4 !== 0) {
                U3 = NQ(U3, Math.floor(U4 * 256));
              }
              OA(AU.x, AU.y, AU.size, U3, 0, 0, true);
              for (var U5 = Math.min(D7, 0.1) * 30 * E9, U6 = Math.random(); U6 < U5; U6 += Math.random()) {
                var U7 = Math.random() * Math.PI * 2;
                var U8 = AU.size * 0.06;
                OF(AP, AR, U8 * Math.sin(U7), U8 * Math.cos(U7), pq(0.5, 0.8) * (AU.size / 1.5), Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, true);
              }
              break;
            case 1:
              var U9 = performance.now() / 2500;
              var UC = "#000000";
              var UV = NA(AU.gamemode);
              var UL = 1 - Math.min(AU.lifetime / 30, 1);
              var UI = -U9 * 2;
              var UE = UI + 0.5;
              var UK = UI - Math.floor(UI);
              var Uk = UE - Math.floor(UE);
              var UH = 1 + UK * 5;
              var UZ = 1 + Uk * 5;
              DW.globalAlpha = Math.min((1 - UK) * 2, 1) * 0.2;
              OA(AU.x, AU.y, AU.size * UH, UV, 0, 0, true);
              DW.globalAlpha = Math.min((1 - Uk) * 2, 1) * 0.2;
              OA(AU.x, AU.y, AU.size * UZ, UV, 0, 0, true);
              DW.globalAlpha = 1;
              OA(AU.x, AU.y, AU.size * 4, "#ffffff", -3, Math.cos(U9 / 10) * 20 * AU.sign, true, 1, AU.size * 0.4);
              OA(AU.x, AU.y, AU.size * 0.5 * (Math.sin(U9 * 10 + Math.PI) + 4), "#ffffff", -6, -U9 * 4 * AU.sign, true);
              OA(AU.x, AU.y, AU.size * 0.5 * (Math.sin(U9 * 10) + 4), "#ffffff", -6, U9 * 4 * AU.sign, true);
              DW.globalAlpha = 1;
              if (UL !== 0) {
                UC = NQ(UC, Math.floor(UL * 256));
              }
              OA(AU.x, AU.y, AU.size * 1.3, UC, -8, -U9 * AU.sign, true, 1, AU.size * 0.4);
              OA(AU.x, AU.y, AU.size * 1.6, UC, -6, U9 * AU.sign, true, 1, AU.size * 0.4);
              OA(AU.x, AU.y, AU.size, UC, 0, 0, true);
              OA(AU.x, AU.y, AU.size * 1.3 - 10, UC, -8, -U9 * AU.sign, true, 0, AU.size * 0.4 - 5);
              OA(AU.x, AU.y, AU.size * 1.6 - 10, UC, -6, U9 * AU.sign, true, 0, AU.size * 0.4 - 5);
              for (var UM = Math.min(D7, 0.1) * 12 * E9, UJ = AU.size * 0.08, UD = UJ * 50, UN = Math.random(); UN < UM; UN += Math.random()) {
                var UY = Math.random() * Math.PI * 2;
                OF(AP - UD * (P2 = Math.sin(UY)), AR - UD * (P3 = Math.cos(UY)), UJ * P2, UJ * P3, pq(0.5, 0.8) * (AU.size / 1.5), Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, true);
              }
              break;
            case 2:
              var UO = i9.a[0];
              var UW = NY(UO, false, 1);
              var Uq = performance.now() / 3500;
              var UA = Uq + 0.5;
              var US = Uq - Math.floor(Uq);
              var UU = UA - Math.floor(UA);
              var UP = 1 + US * 1;
              var UR = 1 + UU * 1;
              DW.globalAlpha = Math.min((1 - US) * 2, 1) * 0.2;
              OA(AU.x, AU.y, AU.size * UP, UW, 0, 0, true);
              DW.globalAlpha = Math.min((1 - UU) * 2, 1) * 0.2;
              OA(AU.x, AU.y, AU.size * UR, UW, 0, 0, true);
              DW.globalAlpha = 1;
              OA(AU.x, AU.y, AU.size * 1.1, UW, -12, Math.sin(Uq / 1000) * AU.sign * 1000, true, 1, AU.size);
              OA(AU.x, AU.y, AU.size, "#000000", 0, 0, true);
              for (var UQ = 0; UQ < 4; UQ++) {
                var UB = -Uq * 3;
                var UG = (4 - UQ - 1) / 4 + (UB - Math.floor(UB)) / 4;
                var UT = UG;
                var UX = NT(UW, "#000000", UG);
                OA(AU.x, AU.y, AU.size * UT, UX, 0, 0, true);
              }
              for (var UF = Math.min(D7, 0.1) * 18 * E9, Uz = Math.random(); Uz < UF; Uz += Math.random()) {
                var Uj = Math.random() * Math.PI * 2;
                var P0 = AU.size * 0.01;
                OF(AP + Math.sin(Uj) * AU.size * 0.9, AR + Math.cos(Uj) * AU.size * 0.9, P0 * Math.sin(Uj), P0 * Math.cos(Uj), pq(0.5, 0.8) * (AU.size / 3), Math.random() * Math.PI * 2, 0, UO, 50, 1, 1, 1, true);
              }
              if (Math.random() / E9 < 0.00005) {
                var P1 = Math.random() * Math.PI * 2;
                var P2 = Math.sin(P1);
                var P3 = Math.cos(P1);
                var P4 = AU.size * 0.01 * (0.5 + Math.random());
                var P5 = AU.size / P4;
                OF(AU.x + Math.sin(P1) * 0, AU.y + Math.cos(P1) * 0, P4 * P2, P4 * P3, pq(6, 6), Math.random(), 0, UO, P5, 1, 1);
              }
          }
          break;
        case 2:
          if (k9 && EV.showHitboxes) {
            OL(DK.width / 2 + (AP - DR) / DU, DK.height / 2 + (AR - DQ) / DU, AQ / 2 / DU, "#ffffff");
          }
          var P6;
          var P7 = NY(AB = NS(AS && AS.team, AU.lTeam, AS ? AS.id : "", AU.lID), false, AU.lRadiant);
          var P8 = (P6 = performance.now()) * AU.sign / 1000;
          DW.globalAlpha = 0.5;
          OA(AU.x, AU.y, AU.size * (2 + Math.cos(P6 / 1000) / 2), P7, 4, P8, true);
          DW.globalAlpha = 1;
          OA(AU.x, AU.y, AU.size, P7, 4, P8, true);
          if (Math.random() / E9 < 1 / (300 / AU.size)) {
            var P9 = Math.random() * Math.PI * 2;
            var PC = Math.random();
            var PV = PC * AU.size * (2 + Math.cos(P6 / 1000) / 2);
            OF(AU.x + PV * Math.sin(P9), AU.y + PV * Math.cos(P9), Math.random() * 1 - 0.5, Math.random() * 1 - 0.5, 18 - PC * 8, Math.random() * Math.PI * 2, 4, AB, 30, 0.5, AU.lRadiant);
          }
          if (AU.lRadiant > 0) {
            if (Math.random() / E9 < 1 / (600 / AU.size)) {
              var PL = Math.random() * Math.PI * 2;
              var PI = Math.random() * AU.size;
              OF(AU.x + PI * Math.sin(PL), AU.y + PI * Math.cos(PL), (Math.random() * 1 - 0.5) * AU.lRadiant, (Math.random() * 1 - 0.5) * AU.lRadiant, pq(6, AU.lRadiant * 6), Math.random(), 0, AB, 60, 1, AU.lRadiant);
            }
            break;
          }
      }
    }
    function OO(AS) {
      var AU = NY(AS.color, false, AS.radiant);
      var AP = AS.size;
      DW.globalAlpha = AS.transparency * Nz(AS.lifetime, AS.maxLifetime);
      OA(AS.x, AS.y, AP, AU, AS.sides, AS.d, true);
      DW.globalAlpha = 1;
    }
    function OW(AS, AU, AP, AR, AQ, AB, AG) {
      var AT;
      var AX;
      var AF = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
      var Az = AG ? DU : 1;
      if (AG) {
        AT = DK.width / 2 + (AS - DR) / Az;
        AX = DK.height / 2 + (AU - DQ) / Az;
      } else {
        AT = AS;
        AX = AU;
      }
      sH(AT, AX, AP * 2 / Az, AR * 2 / Az, AQ, AB, NP(AB), AF * 5 / Az);
    }
    function Oq(AS, AU, AP, AR, AQ, AB, AG) {
      var AT;
      var AX;
      var AF = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
      var Az = AG ? DU : 1;
      if (AG) {
        AT = DK.width / 2 + (AS - DR) / Az;
        AX = DK.height / 2 + (AU - DQ) / Az;
      } else {
        AT = AS;
        AX = AU;
      }
      sZ(AT, AX, AP / Az, AR / Az, AB, AQ, AF * 5 / Az);
    }
    function OA(AS, AU, AP, AR, AQ, AB, AG, AT = 1, AX) {
      var AF = !(arguments.length > 9) || arguments[9] === undefined || arguments[9];
      if (AX == null) {
        AX = AP / 2;
      }
      var Az;
      var Aj;
      var S0 = AG ? DU : 1;
      if (AG) {
        Az = DK.width / 2 + (AS - DR) / S0;
        Aj = DK.height / 2 + (AU - DQ) / S0;
      } else {
        Az = AS;
        Aj = AU;
      }
      var S1 = AF ? AR : null;
      var S2 = NP(AR);
      if (AQ == 0) {
        sI(Az, Aj, AP / S0, S1, S2, AT * 5 / S0);
      } else if (AQ > 0) {
        sY(Az, Aj, AP / S0, AQ, S1, S2, AT * 5 / S0, AB);
      } else {
        sN(Az, Aj, AP / S0, AX / S0, -AQ, S1, S2, AT * 5 / S0, AB);
      }
      DW.setTransform(1, 0, 0, 1, 0, 0);
    }
    function OS(AS, AU, AP) {
      var AR;
      AR = AS ? NS(AS.team, AU.team, AS.id, AU.id) : NS(0, AU.team, 0, AU.parentID);
      var AQ = AU.showName;
      if (EV.showNames) {
        if (AS && AS.id == AU.id && !EV.showOwnName) {
          AQ = false;
        }
      } else {
        AQ = false;
      }
      OU(AU, AR, AQ, AP);
    }
    function OU(AS, AU, AP, AR) {
      var AQ = AS.x;
      var AB = AS.y;
      AS.d;
      var AG = AS.size;
      var AT = AS.fadeTime || 1;
      DW.globalAlpha = 1;
      var AX = false;
      if (AS.fadeType) {
        var AF = AS.fadeType[1];
        switch (AS.fadeType[0]) {
          case 0:
            AG *= 1 + (1 - AT) * 0.5;
            if (AT < 1) {
              AX = true;
              p4(AT, AR == 1);
            }
            break;
          case 1:
            AG *= AT;
            if (AT < 1) {
              AX = true;
              p4(AT, AR == 1);
            }
            break;
          case 2:
            var Az = Math.pow(1 - AT, 2);
            AG *= 1 + (1 - AT) * 2;
            Az * AF[0] * 4;
            AQ += Az * Math.cos(AF[1]) * 2000;
            AB += Az * Math.sin(AF[1]) * 2000;
            if (AT < 1) {
              AX = true;
              p4(AT, AR == 1);
            }
            break;
          case 3:
            var Aj = Math.pow(1 - AT, 2);
            AG *= 1 - Aj;
            Aj * AF[0] * 4;
            AQ = nJ(AQ, AF[1], Aj);
            AB = nJ(AB, AF[2], Aj);
            if (AT < 1) {
              AX = true;
              p4(AT, AR == 1);
            }
        }
      }
      var S0;
      var S1;
      var S2 = DK.width / 2 + (AQ - DR) / DU;
      var S3 = DK.height / 2 + (AB - DQ) / DU;
      var S4 = NS(AS.nameColor, AS.nameColor);
      if (AR == 0) {
        var S5 = NY(AU, AS.isInvulnerable, AS.radiant);
        if (AP) {
          YZ(S2, S3 - AG / DU - 20, "lv. " + Math.round(AS.level), 15, 10, S4);
          YZ(S2, S3 - AG / DU - 50, AS.name, 30, 10, S4);
        }
        if (k9) {
          var S6 = [];
          if (EV.showIds) {
            S6.push(AS.id);
          }
          if (EV.showClassNames) {
            S6.push(AS.className);
          }
          for (var S7 = 0; S7 < S6.length; S7++) {
            YZ(S2, S3 - AG / DU + 10 + S7 * 23, S6[S7], 15, 10, S4);
          }
        }
        if (AS.healthBarFade && AS.healthBarFade > 0.01) {
          var S8 = 1;
          if (AS.healthBarFade < 0.05) {
            S8 = AS.healthBarFade / 0.05;
          }
          var S9 = AS.healthBarFade;
          var SC = function (SU) {
            for (var SP = NB(SU), SR = SP.reduce(function (SG, ST) {
                return SG + ST;
              }) / SP.length, SQ = Math.floor(Math.max(SR, 70) - SR), SB = 0; SB < SP.length; SB++) {
              SP[SB] = Math.min(SP[SB] + SQ, 255);
            }
            return NG(SP);
          }(S5);
          var SV = AG / DU * S9;
          var SL = AG / DU * S9 * 2;
          var SI = S3 + (AG + 8) / DU;
          DW.lineCap = "round";
          DW.strokeStyle = "black";
          DW.lineWidth = DX * 2 * S8;
          DW.beginPath();
          DW.moveTo(S2 - SV, SI);
          DW.lineTo(S2 - SV + SL, SI);
          DW.stroke();
          DW.strokeStyle = NG(NX(NB(SC), "#000000", 0.8));
          DW.lineWidth = DX * S8;
          DW.beginPath();
          DW.moveTo(S2 - SV, SI);
          DW.lineTo(S2 - SV + SL * Math.max(1, 0), SI);
          DW.stroke();
          DW.strokeStyle = NQ(SC, Math.round((1 - AS.damageTime || 0) * 80));
          DW.lineWidth = DX * S8;
          DW.beginPath();
          DW.moveTo(S2 - SV, SI);
          DW.lineTo(S2 - SV + SL * (Math.max(AS.hp, 0) / AS.maxHP), SI);
          DW.stroke();
          if (EV.showPercentagesOnHealthBars && 10 / DU > 3) {
            YZ(S2, SI, Math.max(0, nZ(AS.hp / AS.maxHP * 100, 1)) + "%", 10 / DU * S9 * S8, 5 / DU * S9 * S8, S4);
          }
        }
      } else {
        var SE = false;
        var SK = 0;
        var SH = false;
        if (typingData[AS.id]) {
          SE = (SK = nY(typingData[AS.id].lerping)) > 0.05;
          SH = typingData[AS.id].time < 0;
        }
        if ((AS.id in pA || SE) && EV.showChat && q7 == 0) {
          for (var SZ = pA[AS.id] || [], SM = 0, SJ = 0, SD = (AP ? AS.name == "" ? 55 : 95 : 25) - 20, SN = 0, SY = SE ? -1 : 0; SY < SZ.length; SY++) {
            var SO = undefined;
            var SW = undefined;
            var Sq = undefined;
            var SA = undefined;
            if (SY == -1) {
              SJ += SW = SK;
              Sq = 37.5;
              SA = SH ? 1 : SW;
            } else {
              SO = SZ[SY];
              if (SN > 3) {
                SO.time = Math.min(SO.time, 0.5);
              }
              SJ += SW = NF(SO.time, 12);
              S0 = SO.time;
              var SS = (S1 = 12) - S0 > S1 - 0.5 ? SJ - SW + 1 : SJ;
              SA = SY != 0 || SE ? Math.max(0, 1 - (SS - 1)) : SS;
            }
            YH(S2, S3 - AG / DU - SD - SM - SA * 0.5 * 25, SY == -1 ? null : SO.message, 1, 25, 0, true, SW, SA == 0 ? 0 : 0.4, SA * 0.4, S4, SO ? nY(SO.typingFade) : 0);
            if (SY != -1) {
              SN += nJ(1, SO.message.lines.length, SO.typingFade);
              Sq = nJ(37.5, SO.message.height, SO.typingFade);
            }
            SM += SW * (Sq + 5.5 + SA * 0.5 * 25);
          }
        }
      }
      if (AX) {
        p5();
      }
    }
    function OP(AS) {
      DW = DJ;
      DV.width = 4096;
      DV.height = 4096;
      var AU = DV.width / 2;
      var AP = DV.height / 2;
      var AR = AS.size * 1.5;
      var AQ = 1.5;
      var AB = AS.d;
      var AG = i9.a[AS.color] || NY(NS(AS.team, AS.team, 0, 0));
      if (AS.gadgets) {
        for (var AT = 0; AT < AS.gadgets.length; AT++) {
          var AX = AS.gadgets[AT];
          AX.animTime = 0;
          if (AX.type == 0) {
            delete AX.rot;
          }
          if (AX.type == 2) {
            AX.enabled = true;
          }
        }
        for (var AF = 0; AF < AS.barrels.length; AF++) {
          AS.barrels[AF].animTime = 0;
        }
      }
      if (AS.outerSize > 0) {
        OA(AU, AP, AR + AS.outerSize * AR, "#5F676C", AS.outerSides, AB, false, AQ, AR);
      }
      if (AS.gadgets) {
        s8(AU, AP, AR, AB, AS.barrels, false, AQ);
      }
      OA(AU, AP, AR, AG, AS.sides, AB, false, AQ);
      if (AS.gadgets) {
        s2(AU, AP, AB, AR, AG, AS.layers, 0, 0, false, false, AQ);
        s5(AU, AP, AR, AB, AS.gadgets, AG, 0, 0, false, false, AQ);
      }
      DW = DH;
      (function (Az, Aj) {
        var S0 = Az.toDataURL();
        var S1 = document.createElement("a");
        S1.href = S0;
        S1.download = Aj;
        document.body.appendChild(S1);
        S1.click();
      })(function (Az) {
        var Aj = Az.getContext("2d");
        var S0 = document.createElement("canvas").getContext("2d");
        var S1 = OR(Aj.getImageData(0, 0, Az.width, Az.height));
        var S2 = S1.bottom - S1.top;
        var S3 = S1.right - S1.left;
        var S4 = Aj.getImageData(S1.left, S1.top, S3, S2);
        S0.canvas.width = S3;
        S0.canvas.height = S2;
        S0.putImageData(S4, 0, 0);
        return S0.canvas;
      }(DV), `${AS.filename}.png`);
      console.log("Downloading entity: ", AS);
    }
    function OR(AS) {
      var AU;
      var AP;
      var AR = {
        top: null,
        left: null,
        right: null,
        bottom: null
      };
      for (var AQ = 0; AQ < AS.data.length; AQ += 4) {
        if (AS.data[AQ + 3] !== 0) {
          AU = AQ / 4 % AS.width;
          AP = ~~(AQ / 4 / AS.width);
          if (AR.top === null) {
            AR.top = AP;
          }
          if (AR.left === null || AU < AR.left) {
            AR.left = AU;
          }
          if (AR.right === null || AR.right < AU) {
            AR.right = AU;
          }
          if (AR.bottom === null || AR.bottom < AP) {
            AR.bottom = AP;
          }
        }
      }
      AR.bottom++;
      AR.right++;
      return AR;
    }
    var OQ = [];
    var OB = 0;
    var OG = 0;
    function OT() {
      OQ = [];
      OB = 0;
      OG = 0;
    }
    function OX(AS, AU, AP, AR = 0.0001) {
      if (EV.cameraShake != 0) {
        OQ.push({
          x: AS,
          y: AU,
          power: AP * EV.cameraShake / 100,
          time: AR,
          maxTime: AR
        });
      }
    }
    function OF(AS, AU, AP, AR, AQ, AB, AG, AT, AX, AF = 1, Az = 0, Aj = 1, S0 = false, S1, S2 = 1) {
      if (tX.length < E8) {
        tX.push({
          x: AS,
          y: AU,
          xVel: AP,
          yVel: AR,
          size: AQ,
          d: AB,
          sides: AG,
          color: AT,
          lifetime: AX / 60,
          maxLifetime: AX,
          startSize: AQ,
          endSize: S2 * AQ,
          transparency: AF,
          radiant: Az,
          friction: Aj,
          below: S0,
          riftAnchorID: S1
        });
      }
    }
    function Oz() {
      tX = [];
    }
    function Oj(AS) {
      for (var AU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [], AP = {}, AR = 0; AR < AU.length; AR++) {
        var AQ = AU[AR];
        if (AQ.type == 0) {
          AP[AQ.id] = {
            x: AQ.x,
            y: AQ.y
          };
        }
      }
      tX.forEach(function (AB, AG) {
        AB.lifetime -= AS;
        AB.x += AB.xVel * 60 * AS;
        AB.y += AB.yVel * 60 * AS;
        AB.size = nJ(AB.startSize, AB.endSize, 1 - AB.lifetime / (AB.maxLifetime / 60));
        if (AB.friction != 1) {
          var AT = 1 - (1 - AB.friction) * 60 * AS;
          AB.xVel *= AT;
          AB.yVel *= AT;
        }
        if (AB.riftAnchorID) {
          var AX = AP[AB.riftAnchorID];
          if (AX) {
            if (AB.anchorX == null) {
              AB.anchorX = AX.x;
              AB.anchorY = AX.y;
            }
            AB.x = AX.x + (AB.x - AB.anchorX);
            AB.y = AX.y + (AB.y - AB.anchorY);
            AB.anchorX = AX.x;
            AB.anchorY = AX.y;
          }
        }
        if (AB.lifetime < 0) {
          tX.splice(AG, 1);
        }
      });
    }
    function s0(AS) {
      var AU = AS.x;
      var AP = -AS.y;
      var AR = i9.a[AS.level];
      var AQ = 20;
      if (AS.polyp) {
        AQ = 45;
        AR = "#f177dd";
      } else {
        for (var AB = 0; AB < AS.level; AB++) {
          AQ *= 1.5;
        }
      }
      if (AS.radiant) {
        ON(null, {
          x: AU,
          y: AP,
          size: AQ,
          sides: AS.polyp ? 3 : 3 + AS.level,
          outerSides: 0,
          outerSize: 0,
          radiant: AS.radiant
        }, AR);
        AR = NY(AR, false, AS.radiant);
      }
      OA(AU, AP, AQ, AR, AS.polyp ? 3 : 3 + AS.level, AS.d, true);
    }
    function s1(AS, AU, AP, AR, AQ, AB, AG, AT, AX, AF = [], Az = [], Aj = 0) {
      AU = -AU;
      if (Aj) {
        ON(null, {
          x: AS,
          y: AU,
          size: AP,
          sides: AQ,
          outerSides: AB,
          outerSize: AG,
          radiant: Aj
        }, AT);
        AT = NY(AT, false, Aj);
      }
      if (AG > 0) {
        OA(AS, AU, AP + AG * AP, "#5F676C", AB, AR, true, 1, AP);
      }
      s8(AS, AU, AP, AR, AX, true);
      OA(AS, AU, AP, AT, AQ, AR, true);
      s2(AS, AU, AR, AP, AT, Az, 0, 0, false, true);
      s5(AS, AU, AP, AR, AF, AT, 0, false, AT, true);
    }
    function s2(AS, AU, AP, AR, AQ, AB, AG, AT, AX) {
      var AF = !(arguments.length > 9) || arguments[9] === undefined || arguments[9];
      var Az = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      for (var Aj = 0; Aj < AB.length; Aj++) {
        var S0 = AB[Aj];
        var S1 = AQ;
        if (S0.hasOwnProperty("team")) {
          S1 = NQ(NY(NS(S0.team, S0.team, 0, 0), AX, AT), AG);
        }
        S0.offsetX ||= 0;
        S0.offsetY ||= 0;
        var S2 = Az;
        if (S0.hideBorder == 1) {
          S2 = 0;
        }
        var S3 = AP + (S0.rot || 0);
        var S4 = AS + (S0.offsetX * Math.sin(1.57079633 - AP) + S0.offsetY * Math.cos(AP + 1.57079633)) * AR;
        var S5 = AU + (S0.offsetY * Math.cos(AP) + S0.offsetX * Math.sin(-AP + Math.PI)) * AR;
        if (S0.outerSize > 0) {
          OA(S4, S5, (S0.size + S0.outerSize) * AR, S0.selected ? NR("#5F676C".substring(1), "ffffff", 0.2 + (1 + Math.sin(performance.now() / 250)) / 2 * 0.8) : "#5F676C", S0.outerSides, S3, AF, S2, S0.size * AR);
        }
        OA(S4, S5, S0.size * AR, S0.selected ? NR(S1.substring(1), "ffffff", 0.2 + (1 + Math.sin(performance.now() / 250)) / 2 * 0.8) : S1, S0.sides, S3, AF, S2);
        if (OH && t3) {
          var S6 = AS + (-S0.offsetY * Math.sin(AP) + S0.offsetX * Math.sin(AP + s9)) * AR;
          var S7 = AU - (S0.offsetX * Math.cos(AP + s9) + -S0.offsetY * Math.cos(AP)) * AR;
          var S8 = {
            x: DK.width / 2 + (S6 - DR) / DU,
            y: DK.height / 2 + (S7 - DQ) / DU,
            r: (S0.size + S0.outerSize) * AR / DU,
            rot: AP
          };
          if (pM(tT, S8)) {
            t7.push({
              type: "layer",
              index: Aj,
              stack: JA(OZ)
            });
          }
        }
      }
    }
    function s3(AS) {
      var AU = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (AS.gadgets) {
        var AR = AS.fadeTime || 1;
        var AQ = AS.size;
        var AB = AS.x;
        var AG = AS.y;
        var AT = AS.d;
        var AX = 1;
        if (AS.fadeType) {
          var AF = AS.fadeType[1];
          switch (AS.fadeType[0]) {
            case 0:
              AQ *= 1 + (1 - AR) * 0.5;
              if (AR < 1) {
                AX = AR;
              }
              break;
            case 1:
              AQ *= AR;
              break;
            case 2:
              var Az = Math.pow(1 - AR, 2);
              AQ *= 1 + (1 - AR) * 2;
              AT += Az * AF[0] * 4;
              AB += Az * Math.cos(AF[1]) * 2000;
              AG += Az * Math.sin(AF[1]) * 2000;
              if (AR < 1) {
                AX = AR;
              }
              break;
            case 3:
              var Aj = Math.pow(1 - AR, 2);
              AQ *= 1 - Aj;
              AT += Aj * AF[0] * 4;
              AB = nJ(AB, AF[1], Aj);
              AG = nJ(AG, AF[2], Aj);
          }
        }
        var S0 = AS.lastColor ?? "#ffffff";
        var S1 = function S2(S3, S4, S5, S6, S7) {
          for (var S8 = 0; S8 < S7.length; S8++) {
            var S9 = S7[S8];
            if (S9.type == 2 && S9.alpha != 0) {
              var SC = 1;
              if (S9.enableFade != null) {
                SC = nY(S9.enableFade);
              }
              var SV = AX * (S9.alpha || 0.3);
              s4(S3, S4, S9.offsetX, S9.offsetY, S9.subtype, S9.auraColor, S9.hideBorder, S9.rotationType, S5, S9.rot, S6, S9.sides, S9.radius, S0, SC, SV, S9.deactivatedApha == null ? 0.3 : S9.deactivatedApha, AU && S9.showParticles == 0);
            }
            if (S9.type == 3) {
              var SL = undefined;
              switch (S9.rotationType) {
                case 0:
                  SL = S9.baseRot + S5;
                  break;
                case 1:
                case 4:
                  SL = S9.rot == null ? S9.baseRot + S5 : S9.rot;
                  break;
                case 3:
                case 2:
                  SL = S9.anchored == 0 ? S9.rot == null ? S9.baseRot + S5 : S9.baseRot + S5 + S9.rot : S9.rot == null ? S9.baseRot : S9.rot;
              }
              S2(S3 + (S9.offsetX * Math.sin(1.57079633 - S5) + S9.offsetY * Math.cos(S5 + 1.57079633)) * S6, S4 + (S9.offsetY * Math.cos(S5) + S9.offsetX * Math.sin(-S5 + Math.PI)) * S6, SL, S9.width * S6, S9.tank.gadgets);
            }
          }
        };
        S1(AB, AG, AT, AQ, AS.gadgets);
        DW.globalAlpha = 1;
      }
    }
    function s4(AS, AU, AP, AR, AQ, AB, AG, AT, AX, AF, Az, Aj, S0, S1, S2, S3, S4) {
      var S5 = !(arguments.length > 17) || arguments[17] === undefined || arguments[17];
      var S6 = NW(AQ, AB, S1);
      var S7 = DK.width / 2 + (AS - DR) / DU;
      var S8 = DK.height / 2 + (AU - DQ) / DU;
      if (S5 && Math.random() / E9 < 1 / (300 / (Az * S0 * S2 * S2))) {
        var S9 = Math.random() * Math.PI * 2;
        var SC = Math.random() * (Az * S0);
        OF(AS + SC * Math.sin(S9) + (AP * Math.sin(1.57079633 - AX) + AR * Math.cos(AX + 1.57079633)) * Az * S2, AU + SC * Math.cos(S9) + (AR * Math.cos(AX) + AP * Math.sin(-AX + Math.PI)) * Az * S2, Math.random() * 1 - 0.5, Math.random() * 1 - 0.5, 6, Math.random() * Math.PI * 2, Aj, S6, 30, S3);
      }
      if (S4 != 0 || S2 != 0) {
        DW.globalAlpha = S3 * nJ(S4, 1, S2);
        DW.translate(S7, S8);
        DW.rotate(AX);
        DW.translate(-S7, -S8);
        var SV = S6;
        if (S2 == 0) {
          SV = "#5F676C";
        } else if (S2 < 1) {
          SV = NR(S6.substring(1), "#5F676C".substring(1), S2);
        }
        OA(AS + AP * Az, AU + AR * Az, Az * S0, SV, Aj, (AT == 0 ? 0 : -AX) + AF, true, AG == 1 ? 0 : 1);
      }
    }
    function s5(AS, AU, AP, AR, AQ, AB, AG, AT, AX, AF, Az = 1) {
      for (var Aj = 0; Aj < AQ.length; Aj++) {
        var S0 = AQ[Aj];
        if (S0.type == 3) {
          s7(Aj, AS, AU, AP, AR, S0, AB, AG, AT, AX, AF, Az);
        } else {
          s6(Aj, AS, AU, AP, AR, S0, AB, AF, S0.hideBorder == 1 ? 0 : Az);
        }
      }
    }
    function s6(AS, AU, AP, AR, AQ, AB, AG, AT) {
      var AF;
      var Az;
      var Aj = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      var S0 = AT ? DU : 1;
      var S1 = AB.width * (1.5 - Math.max(0, AB.animTime || 0) * 0.8) * AR;
      var S2 = AB.length * (1 - Math.max(0, AB.animTime || 0) * 0.2);
      if (AT) {
        AF = DK.width / 2 + (AU - DR) / S0;
        Az = DK.height / 2 + (AP - DQ) / S0;
      } else {
        AF = AU;
        Az = AP;
      }
      var S3 = AB.color == null ? "#999999" : NS(AB.color, AB.color);
      DW.lineJoin = "round";
      DW.fillStyle = AB.selected ? NR(S3.substring(1), "ffffff", 0.2 + (1 + Math.sin(performance.now() / 250)) / 2 * 0.8) : S3;
      DW.lineWidth = Aj * 5 / S0;
      DW.strokeStyle = NP(DW.fillStyle);
      DW.beginPath();
      DW.translate(AF, Az);
      DW.rotate(AQ);
      DW.translate(AB.offsetX * AR / S0, AB.offsetY * AR / S0);
      if (AB.type === 0) {
        DW.rotate(-AQ);
        DW.rotate(AB.rot ?? AQ + AB.baseRot);
        DW.rect(AB.width * -1 * AR / S0, S2 * -2 * AR / S0, AB.width * AR * 2 / S0, AR * 2 * S2 / S0);
      }
      DW.fill();
      if (Aj) {
        DW.stroke();
      }
      switch (AB.type) {
        case 0:
          sI(0, 0, AB.width * 1.5 * AR / S0, DW.fillStyle, DW.strokeStyle, Aj * 5 / S0);
          if (editing && AB.selected && EV.showAutoCannonRangeGuideLines) {
            var S4 = AF + Math.cos(AQ) * (AB.offsetX * AR) / S0 - Math.sin(AQ) * (AB.offsetY * AR) / S0;
            var S5 = Az + Math.sin(AQ) * (AB.offsetX * AR) / S0 + Math.cos(AQ) * (AB.offsetY * AR) / S0;
            var S6 = (AB.minDistance * 30 || 0) + AR;
            var S7 = (AB.maxDistance * 30 || 0) + AR;
            if (S6 == S7 && S6 > 0) {
              OL(S4, S5, S6 / S0, "#ffffff");
            } else {
              if (S6 > 0) {
                OL(S4, S5, S6 / S0, "#00ff00");
              }
              if (S7 > 0) {
                OL(S4, S5, S7 / S0, "#ff0000");
              }
            }
          }
          break;
        case 1:
          DW.rotate(AB.rot);
          DW.beginPath();
          DW.rect(S1 / S0 * -0.5, S1 / S0 * -0.5, S1 / S0, S1 / S0);
          DW.fill();
          if (Aj) {
            DW.stroke();
          }
          break;
        case 2:
          DW.setTransform(1, 0, 0, 1, 0, 0);
          DW.translate(AF, Az);
          DW.rotate(AQ);
          DW.translate(-AF, -Az);
          var S8 = 1;
          if (AB.enableFade != null) {
            S8 = AB.enableFade;
          }
          OA(AU + AB.offsetX * AR, AP + AB.offsetY * AR, AB.width * AR, DW.fillStyle, AB.backSides, AB.rot, AT, Aj);
          var S9 = NW(AB.subtype, AB.auraColor, AG);
          var SC = S9;
          if (SC == 0) {
            SC = "#5F676C";
          } else if (S8 < 1) {
            SC = NR("#5F676C".substring(1), S9.substring(1), 1 - S8);
          }
          DW.translate(AF, Az);
          DW.rotate(AQ);
          DW.translate(-AF, -Az);
          OA(AU + AB.offsetX * AR, AP + AB.offsetY * AR, AB.width * AR * 0.5, SC, AB.sides, (AB.rotationType == 0 ? 0 : -AQ) + AB.rot, AT, Aj);
          if (S8 < 1 && S8 > 0) {
            DW.translate(AF, Az);
            DW.rotate(AQ);
            DW.translate(-AF, -Az);
            var SV = DW.globalAlpha;
            DW.globalAlpha = SV * 0.45 * Math.min(1, (1 - S8) * 3);
            OA(AU + AB.offsetX * AR, AP + AB.offsetY * AR, AB.width * AR * 0.5 * Math.max(0, S8 * 6 - 1), S9, AB.sides, (AB.rotationType == 0 ? 0 : -AQ) + AB.rot, AT, Aj);
            DW.globalAlpha = SV;
          }
      }
      if (OH && t3) {
        var SL = AU + (-AB.offsetY * Math.sin(AQ) + AB.offsetX * Math.sin(AQ + s9)) * AR;
        var SI = AP - (AB.offsetX * Math.cos(AQ + s9) + -AB.offsetY * Math.cos(AQ)) * AR;
        var SE = {
          x: DK.width / 2 + (SL - DR) / DU,
          y: DK.height / 2 + (SI - DQ) / DU,
          r: AB.width * AR * (AB.type == 0 ? 1.5 : 1) / DU
        };
        if (pM(tT, SE)) {
          t7.push({
            type: "gadget",
            index: AS,
            stack: JA(OZ)
          });
        }
      }
      DW.setTransform(1, 0, 0, 1, 0, 0);
    }
    function s7(AS, AU, AP, AR, AQ, AB, AG, AT, AX, AF, Az) {
      var Aj;
      var S0 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 1;
      switch (AB.rotationType) {
        case 0:
          Aj = AB.baseRot + AQ;
          break;
        case 1:
        case 4:
          Aj = AB.rot == null ? AB.baseRot + AQ : AB.rot;
          break;
        case 3:
        case 2:
          Aj = AB.anchored == 0 ? AB.rot == null ? AB.baseRot + AQ : AB.baseRot + AQ + AB.rot : AB.rot == null ? AB.baseRot : AB.rot;
      }
      var S1;
      var S2 = AU + (AB.offsetX * Math.sin(-AQ + s9) + AB.offsetY * Math.cos(AQ + s9)) * AR;
      var S3 = AP + (AB.offsetY * Math.cos(AQ) + AB.offsetX * Math.sin(-AQ + Math.PI)) * AR;
      var S4 = AG;
      if (AB.team != null) {
        S4 = AB.suppressColor == 1 ? NQ(NY(NS(AB.team, AB.team, 0, 0), AF, AX), AT) : NS(AB.team, AB.team, 0, 0);
      }
      if (OH && t3) {
        S1 = JA(OZ);
        OZ.push(AS);
      }
      if (AB.outerSize > 0) {
        OA(S2, S3, (AB.width + AB.outerSize) * AR, AB.selected ? NR("#5F676C".substring(1), "ffffff", 0.2 + (1 + Math.sin(performance.now() / 250)) / 2 * 0.8) : "#5F676C", AB.outerSides, Aj, Az, S0, AB.width * AR);
      }
      s8(S2, S3, AR * AB.width, Aj, AB.tank.barrels, Az, S0);
      if (OH && t3) {
        var S5 = AU + (-AB.offsetY * Math.sin(AQ) + AB.offsetX * Math.sin(AQ + s9)) * AR;
        var S6 = AP - (AB.offsetX * Math.cos(AQ + s9) + -AB.offsetY * Math.cos(AQ)) * AR;
        var S7 = {
          x: DK.width / 2 + (S5 - DR) / DU,
          y: DK.height / 2 + (S6 - DQ) / DU,
          r: AB.width * AR / DU
        };
        if (pM(tT, S7)) {
          t7.push({
            type: "gadget",
            index: AS,
            stack: JA(OZ).slice(0, -1)
          });
        }
      }
      OA(S2, S3, AB.width * AR, AB.selected ? NR(S4.substring(1), "ffffff", 0.2 + (1 + Math.sin(performance.now() / 250)) / 2 * 0.8) : S4, AB.sides, Aj, Az, S0);
      s2(S2, S3, Aj, AR * AB.width, S4, AB.tank.layers, AT, AX, AF, Az, S0);
      s5(S2, S3, AR * AB.width, Aj, AB.tank.gadgets, S4, AT, AX, AF, Az, S0);
      if (OH && t3) {
        OZ = S1;
      }
      if (editing && AB.selected) {
        var S8 = Az ? DU : 1;
        var S9 = DK.width / 2 + (S2 - DR) / S8;
        var SC = DK.height / 2 + (S3 - DQ) / S8;
        if (AB.rotationType == 1 && EV.showAutoCannonRangeGuideLines) {
          var SV = (AB.minDistance * 30 || 0) + AR;
          var SL = (AB.maxDistance * 30 || 0) + AR;
          if (EV.showTankSectionFrontGuideLines) {
            OV(S9, SC, Aj, "#ffffff");
          }
          if (!(AB.maxSpread > 0) || !(AB.maxSpread < 360) || AB.spreadDetection != 0) {
            if (SV == SL && SV > 0) {
              OL(S9, SC, SV / S8, "#ffffff");
            } else {
              if (SV > 0) {
                OL(S9, SC, SV / S8, "#00ff00");
              }
              if (SL > 0) {
                OL(S9, SC, SL / S8, "#ff0000");
              }
            }
          }
          if (AB.maxSpread > 0 && AB.maxSpread < 360) {
            if (AB.spreadDetection == 0) {
              if (SV == SL && SV > 0) {
                OV(S9, SC, Aj + nV(AB.maxSpread / 2), "#ffffff", SV / S8);
                OV(S9, SC, Aj - nV(AB.maxSpread / 2), "#ffffff", SV / S8);
                OI(S9, SC, SV / S8, Aj - nV(AB.maxSpread / 2), Aj + nV(AB.maxSpread / 2), "#ffffff");
              } else {
                OV(S9, SC, Aj + nV(AB.maxSpread / 2), "#ff0000", (SL - SV) / S8, SV / S8);
                OV(S9, SC, Aj - nV(AB.maxSpread / 2), "#ff0000", (SL - SV) / S8, SV / S8);
                OI(S9, SC, SL / S8, Aj - nV(AB.maxSpread / 2), Aj + nV(AB.maxSpread / 2), "#ff0000");
                OV(S9, SC, Aj + nV(AB.maxSpread / 2), "#00ff00", SV / S8);
                OV(S9, SC, Aj - nV(AB.maxSpread / 2), "#00ff00", SV / S8);
                OI(S9, SC, SV / S8, Aj - nV(AB.maxSpread / 2), Aj + nV(AB.maxSpread / 2), "#00ff00");
              }
            } else {
              OV(S9, SC, Aj + nV(AB.maxSpread / 2), "#ffffff");
              OV(S9, SC, Aj - nV(AB.maxSpread / 2), "#ffffff");
            }
          }
        } else if (AB.rotationType == 2 && EV.showRotatingTankSectionGuideLines && AB.rotationSpeed) {
          if (EV.showTankSectionFrontGuideLines) {
            OV(S9, SC, Aj, "#ffffff");
            OI(S9, SC, AB.width * AR / S8 + 10, Aj + nV(30), Aj - nV(30), "#ffffff");
          } else {
            OL(S9, SC, AB.width * AR / S8 + 10, "#ffffff");
          }
          var SI = performance.now();
          for (var SE = 8 + Math.floor((AB.width * AR / S8 + 10 - 30) / 10), SK = 0; SK < SE; SK++) {
            var SH = SK / SE * Math.PI * 2 + SI * 1.2 / 3000 * AB.rotationSpeed;
            if (!EV.showTankSectionFrontGuideLines || !!nU(SH, Aj + nV(30), Aj - nV(30))) {
              OK(S9, SC, AB.width * AR / S8 + 10, SH, -Math.sign(AB.rotationSpeed) * nV(45), 6.5, "#ffffff");
            }
          }
          if (EV.showTankSectionFrontGuideLines) {
            for (var SZ = 0, SM = [Aj + nV(30), Aj - nV(30)]; SZ < SM.length; SZ++) {
              var SJ = SM[SZ];
              OK(S9, SC, AB.width * AR / S8 + 10, SJ, -Math.sign(AB.rotationSpeed) * nV(45), 8, "#ffffff");
            }
          }
        } else if (AB.rotationType == 3 && EV.showRotatingTankSectionGuideLines && AB.rotationSpeed) {
          var SD = performance.now();
          var SN = 8 + Math.floor((AB.width * AR / S8 + 10 - 30) / 10);
          var SY = Math.abs(AB.maxRotation) || 0;
          if (SY) {
            OV(S9, SC, Aj + SY / 2, "#ffffff");
            OV(S9, SC, Aj - SY / 2, "#ffffff");
            OI(S9, SC, AB.width * AR / S8 + 10, Aj - SY / 2, Aj + SY / 2, "#ffffff");
            for (var SO = 0, SW = [Aj - SY / 2, Aj + SY / 2]; SO < SW.length; SO++) {
              var Sq = SW[SO];
              OK(S9, SC, AB.width * AR / S8 + 10, Sq, -Math.sign(AB.rotationSpeed) * nV(45), 8, "#ffffff");
            }
          } else if (EV.showTankSectionFrontGuideLines) {
            OV(S9, SC, Aj, "#ffffff");
            OI(S9, SC, AB.width * AR / S8 + 10, Aj + nV(30), Aj - nV(30), "#ffffff");
            for (var SA = 0, SS = [Aj + nV(30), Aj - nV(30)]; SA < SS.length; SA++) {
              var SU = SS[SA];
              OK(S9, SC, AB.width * AR / S8 + 10, SU, -Math.sign(AB.rotationSpeed) * nV(45), 8, "#ffffff");
            }
          } else {
            OL(S9, SC, AB.width * AR / S8 + 10, "#ffffff");
          }
          for (var SP = 0; SP < SN; SP++) {
            var SR = SP / SN * Math.PI * 2 + SD * 1.2 / 3000 * AB.rotationSpeed;
            if (SY ? nU(SR, Aj - SY / 2, Aj + SY / 2) : !EV.showTankSectionFrontGuideLines || nU(SR, Aj + nV(30), Aj - nV(30))) {
              OK(S9, SC, AB.width * AR / S8 + 10, SR, -Math.sign(AB.rotationSpeed) * nV(45), 6.5, "#ffffff");
            }
          }
        } else if (AB.rotationType == 4) {
          if (EV.showTankSectionFrontGuideLines) {
            OV(S9, SC, Aj, "#ffffff");
          }
          if (AB.maxSpread > 0 && AB.maxSpread < 360 && EV.showOtherTankSectionGuideLines) {
            OV(S9, SC, Aj + nV(AB.maxSpread / 2), "#ffffff");
            OV(S9, SC, Aj - nV(AB.maxSpread / 2), "#ffffff");
          }
        } else if (EV.showTankSectionFrontGuideLines) {
          OV(S9, SC, Aj, "#ffffff");
        }
      }
    }
    function s8(AS, AU, AP, AR, AQ, AB, AG = 1) {
      for (var AT = 0; AT < AQ.length; AT++) {
        var AX = AQ[AT];
        sC(AT, AS, AU, AP, AR + AX.rot, AX.offset, AX.distance, AX.width, AX.length, AX.animTime, AX.visualType == null ? AX.type : AX.visualType, AB, AX.hideBorder == 1 ? 0 : AG, AX.selected, AX.color);
      }
    }
    var s9 = Math.PI / 2;
    function sC(AS, AU, AP, AR, AQ, AB, AG, AT, AX, AF, Az, Aj) {
      var S0;
      var S1;
      var S2 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 1;
      var S3 = arguments.length > 13 ? arguments[13] : undefined;
      var S4 = arguments.length > 14 ? arguments[14] : undefined;
      var S5 = Aj ? DU : 1;
      var S6 = AX * (1 - Math.max(0, AF || 0) * 0.2);
      if (Aj) {
        S0 = DK.width / 2 + (AU - DR) / S5;
        S1 = DK.height / 2 + (AP - DQ) / S5;
      } else {
        S0 = AU;
        S1 = AP;
      }
      var S7 = S4 == null ? "#999999" : NS(0, S4);
      DW.lineJoin = "round";
      DW.fillStyle = S3 ? NR(S7.substring(1), "ffffff", 0.2 + (1 + Math.sin(performance.now() / 250)) / 2 * 0.8) : S7;
      if (S2) {
        DW.lineWidth = S2 * 5 / S5;
        DW.strokeStyle = NP(DW.fillStyle);
      }
      DW.beginPath();
      DW.translate(S0, S1);
      DW.rotate(AQ);
      DW.translate(AB * AR / S5, -AG * AR / S5);
      switch (Az) {
        case 0:
          DW.rect(AT * -1 * AR / S5, S6 * -2 * AR / S5, AT * AR * 2 / S5, AR * 2 * S6 / S5);
          break;
        case 1:
          sM(AT * -1 * AR / S5, 0 / S5, AT * AR * 2 / S5, AR * -2 * S6 / S5, AT * AR / S5);
          break;
        case 2:
          DW.rect(AT * -0.5 * AR / S5, S6 * -1.5 * AR / S5, AT * AR / S5, AR * 1.5 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          sM(AT * -1 * AR / S5, AR * -1.5 * S6 / S5, AT * AR * 2 / S5, AR * -2 * S6 / S5, AT * AR / S5);
          break;
        case 3:
          DW.rect(-AT * AR / S5, S6 * -1.33333333333 * AR / S5, AT * AR * 2 / S5, AR * 1.33333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          DW.rect(AT * -0.7 * AR / S5, S6 * -1.3333333333 * AR / S5, AT * 1.4 * AR / S5, AR * -0.3333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          DW.rect(-AT * AR / S5, S6 * -1.66666666666666 * AR / S5, AT * AR * 2 / S5, AR * -0.3333333333 * S6 / S5);
          break;
        case 4:
          sM(AT * -1 * AR / S5, 0 / S5, AT * AR * 2 / S5, AR * -1.3333333333 * S6 / S5, AT * AR / S5);
          DW.rect(AT * -0.7 * AR / S5, S6 * -1.3333333333 * AR / S5, AT * 1.4 * AR / S5, AR * -0.3333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          sM(AT * -0.5 * AR / S5, S6 * -1.66666666666666 * AR / S5, AT * AR / S5, AR * -2 * S6 / S5, AT * AR * 2 / S5);
          break;
        case 5:
          sM(AT * -1 * AR / S5, 0 / S5, AT * AR * 2 / S5, AR * -1.3333333333 * S6 / S5, AT * AR / S5);
          DW.rect(AT * -0.7 * AR / S5, S6 * -1.3333333333 * AR / S5, AT * 1.4 * AR / S5, AR * -0.3333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          sM(AT * -1 * AR / S5, S6 * -1.66666666666666 * AR / S5, AT * 2 * AR / S5, AR * -2 * S6 / S5, AT * AR / S5);
          break;
        case 6:
          sM(AT * -0.5 * AR / S5, 0 / S5, AT * AR * 1 / S5, AR * -2 * S6 / S5, AT * AR * 2 / S5);
          break;
        case 7:
          DW.rect(-AT * AR / S5, S6 * -1.33333333333 * AR / S5, AT * AR * 2 / S5, AR * 1.33333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          sM(AT * -1 * AR / S5, S6 * -1.33333333333 * AR / S5, AT * 2 * AR / S5, AR * -1.6666666666666 * S6 / S5, AT * AR / S5);
          DW.rect(-AT * AR / S5, S6 * -1.66666666666666 * AR / S5, AT * AR * 2 / S5, AR * -0.3333333333 * S6 / S5);
          break;
        case 8:
          DW.rect(AT * -0.5 * AR / S5, S6 * -1.33333333333 * AR / S5, AT * AR / S5, AR * 1.33333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          sM(AT * -1 * AR / S5, S6 * -1.33333333333 * AR / S5, AT * 2 * AR / S5, AR * -1.6666666666666 * S6 / S5, AT * AR / S5);
          DW.rect(-AT * AR / S5, S6 * -1.66666666666666 * AR / S5, AT * AR * 2 / S5, AR * -0.3333333333 * S6 / S5);
          break;
        case 9:
          sM(AT * -0.5 * AR / S5, 0 / S5, AT * AR / S5, AR * -1.3333333333 * S6 / S5, AT * AR * 2 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          DW.rect(AT * -0.6666666666666 * AR / S5, S6 * -1.3333333333 * AR / S5, AT * 1.3333333333 * AR / S5, AR * -0.3333333333 * S6 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          sM(AT * -1 * AR / S5, S6 * -1.66666666666666 * AR / S5, AT * 2 * AR / S5, AR * -2 * S6 / S5, AT * AR / S5);
          break;
        case -1:
          sJ(AT * -0.5 * AR / S5, 0 / S5, AR * -2 * S6 / S5, AT * AR * 2 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
          break;
        case -2:
          sD(AT * -0.5 * AR / S5, 0 / S5, AR * -2 * S6 / S5, AT * AR * 2 / S5);
          DW.fill();
          if (S2) {
            DW.stroke();
          }
      }
      DW.fill();
      if (S2) {
        DW.stroke();
      }
      DW.setTransform(1, 0, 0, 1, 0, 0);
      if (OH && t3) {
        var S8 = S6;
        var S9 = AG + S8;
        var SC = AB;
        var SV = AU + (S9 * Math.sin(AQ) + SC * Math.sin(AQ + s9)) * AR;
        var SL = AP - (SC * Math.cos(AQ + s9) + S9 * Math.cos(AQ)) * AR;
        var SI = AT * AR * 2;
        var SE = S8 * AR * 2;
        var SK = {
          x: DK.width / 2 + (SV - DR) / S5,
          y: DK.height / 2 + (SL - DQ) / S5,
          height: SE / S5,
          width: SI / S5,
          rot: AQ
        };
        if (pN(tT, SK)) {
          t7.push({
            type: "barrel",
            index: AS,
            stack: JA(OZ)
          });
        }
      }
    }
    function sV(AS, AU, AP, AR, AQ, AB, AG = 0, AT = 0) {
      if (AP < AQ * 2) {
        AQ = AP / 2;
      }
      if (AR < AQ * 2) {
        AQ = AR / 2;
      }
      AS -= AP / 2;
      AU -= AR / 2;
      DW.beginPath();
      DW.moveTo(AS + AQ, AU);
      DW.arcTo(AS + AP, AU, AS + AP, AU + AR, AQ);
      DW.arcTo(AS + AP, AU + AR, AS, AU + AR, AQ);
      if (AG != 0) {
        AG = Math.min(AG, AP - AQ * 2);
        DW.lineTo(AS + AP / 2 + AG, AU + AR);
        DW.lineTo(AS + AP / 2, AU + AR + AT);
        DW.lineTo(AS + AP / 2 - AG, AU + AR);
      }
      DW.arcTo(AS, AU + AR, AS, AU, AQ);
      DW.arcTo(AS, AU, AS + AP, AU, AQ);
      DW.closePath();
      DW.fillStyle = AB;
      DW.fill();
    }
    function sL(AS, AU, AP, AR, AQ) {
      if (AP < AQ * 2) {
        AQ = AP / 2;
      }
      if (AR < AQ * 2) {
        AQ = AR / 2;
      }
      AS -= AP / 2;
      AU -= AR / 2;
      DW.beginPath();
      DW.moveTo(AS + AQ, AU);
      DW.arcTo(AS + AP, AU, AS + AP, AU + AR, AQ);
      DW.arcTo(AS + AP, AU + AR, AS, AU + AR, AQ);
      DW.arcTo(AS, AU + AR, AS, AU, AQ);
      DW.arcTo(AS, AU, AS + AP, AU, AQ);
      DW.closePath();
    }
    function sI(AS, AU, AP, AR, AQ, AB) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.arc(AS, AU, Math.abs(AP), 0, Math.PI * 2, false);
      if (AR) {
        DW.fillStyle = AR;
        DW.fill();
      }
      if (AB) {
        DW.lineWidth = AB;
        DW.strokeStyle = AQ;
        DW.stroke();
      }
    }
    function sE(AS, AU, AP, AR, AQ) {
      var AB = AP / 2;
      var AG = AR / 2;
      DW.beginPath();
      var AT = false;
      function AX() {
        var Az = AF / 4 * Math.PI * 2 + AQ;
        var Aj = Math.cos(Az);
        var S0 = Math.sin(Az);
        function S1(S2, S3) {
          var S4 = AS + S2 * Aj - S3 * S0;
          var S5 = AU + S2 * S0 + S3 * Aj;
          if (AT) {
            DW.lineTo(S4, S5);
          } else {
            DW.moveTo(S4, S5);
          }
          AT = true;
        }
        S1(AG, AG);
        S1(AG, AB);
        S1(-AG, AB);
        S1(-AG, AG);
      }
      for (var AF = 0; AF < 4; AF++) {
        AX();
      }
    }
    function sK(AS, AU, AP, AR) {
      var AQ = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
      DW.beginPath();
      DW.arc(AS, AU, AP, 0, Math.PI * 2, false);
      DW.fillStyle = AR;
      DW.fill();
      if (AQ) {
        DW.strokeWidth = 10;
        DW.strokeStyle = "#ffffff";
        DW.stroke();
      }
    }
    function sH(AS, AU, AP, AR, AQ, AB, AG, AT) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.translate(AS, AU);
      DW.rotate(AQ);
      DW.rect(-AP / 2, -AR / 2, AP, AR);
      DW.fillStyle = AB;
      DW.lineWidth = AT;
      DW.strokeStyle = AG;
      DW.fill();
      DW.stroke();
      DW.setTransform(1, 0, 0, 1, 0, 0);
    }
    function sZ(AS, AU, AP, AR, AQ, AB, AG) {
      DW.lineJoin = "round";
      DW.lineCap = "round";
      DW.beginPath();
      DW.translate(AS, AU);
      DW.rotate(AQ);
      DW.moveTo(-AP / 2, -AR / 2);
      DW.lineTo(AP / 2, 0);
      DW.lineTo(-AP / 2, AR / 2);
      DW.lineWidth = AG;
      DW.strokeStyle = AB;
      DW.stroke();
      DW.setTransform(1, 0, 0, 1, 0, 0);
    }
    function sM(AS, AU, AP, AR, AQ) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.moveTo(AS + (AP - AQ) / 2, AU);
      DW.lineTo(AS + AP - (AP - AQ) / 2, AU);
      DW.lineTo(AS + AP, AR);
      DW.lineTo(AS, AR);
      DW.closePath();
    }
    function sJ(AS, AU, AP, AR) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.moveTo(AS - AR / 4, AU);
      DW.lineTo(AS + AR * 0.75, AU);
      DW.lineTo(AS + AR / 4, AU + AP);
      DW.closePath();
    }
    function sD(AS, AU, AP, AR) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.moveTo(AS + AR / 4, AU);
      DW.lineTo(AS + AR * 0.75, AU + AP);
      DW.lineTo(AS - AR / 4, AU + AP);
      DW.closePath();
    }
    function sN(AS, AU, AP, AR, AQ, AB, AG, AT, AX) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.translate(AS, AU);
      DW.rotate(AX);
      if (AQ % 2 != 0) {
        DW.rotate(Math.PI * -90 / 180);
      }
      DW.moveTo(AP * Math.cos(0), AP * Math.sin(0));
      DW.lineTo(AR * Math.cos(Math.PI * 1 / AQ), AR * Math.sin(Math.PI * 1 / AQ));
      for (var AF = 1; AF <= AQ; AF += 1) {
        DW.lineTo(AP * Math.cos(AF * 2 * Math.PI / AQ), AP * Math.sin(AF * 2 * Math.PI / AQ));
        DW.lineTo(AR * Math.cos((AF + 0.5) * 2 * Math.PI / AQ), AR * Math.sin((AF + 0.5) * 2 * Math.PI / AQ));
      }
      DW.fillStyle = AB;
      DW.fill();
      if (AT) {
        DW.lineWidth = AT;
        DW.strokeStyle = AG;
        DW.stroke();
      }
    }
    function sY(AS, AU, AP, AR, AQ, AB, AG, AT) {
      DW.lineJoin = "round";
      DW.beginPath();
      DW.translate(AS, AU);
      DW.rotate(AT);
      if (AR % 2 != 0) {
        DW.rotate(Math.PI * -90 / 180);
      }
      DW.moveTo(AP * Math.cos(0), AP * Math.sin(0));
      for (var AX = 1; AX <= AR + 1; AX += 1) {
        DW.lineTo(AP * Math.cos(AX * 2 * Math.PI / AR), AP * Math.sin(AX * 2 * Math.PI / AR));
      }
      DW.fillStyle = AQ;
      DW.fill();
      if (AG) {
        DW.lineWidth = AG;
        DW.strokeStyle = AB;
        DW.stroke();
      }
    }
    function sO(AS, AU, AP, AR) {
      var AQ = AR.fadeTime || 1;
      var AB = AR.size;
      var AG = AR.x;
      var AT = AR.y;
      var AX = AR.d;
      var AF = 1;
      if (AR.fadeType) {
        var Az = AR.fadeType[1];
        switch (AR.fadeType[0]) {
          case 0:
            AB *= 1 + (1 - AQ) * 0.5;
            if (AQ < 1) {
              AF = AQ;
            }
            break;
          case 1:
            AB *= AQ;
            break;
          case 2:
            var Aj = Math.pow(1 - AQ, 2);
            AB *= 1 + (1 - AQ) * 2;
            AX += Aj * Az[0] * 4;
            AG += Aj * Math.cos(Az[1]) * 2000;
            AT += Aj * Math.sin(Az[1]) * 2000;
            if (AQ < 1) {
              AF = AQ;
            }
            break;
          case 3:
            var S0 = Math.pow(1 - AQ, 2);
            AB *= 1 - S0;
            AX += S0 * Az[0] * 4;
            AG = nJ(AG, Az[1], S0);
            AT = nJ(AT, Az[2], S0);
        }
      }
      (function S1(S2, S3, S4, S5, S6) {
        for (var S7 = 0; S7 < S6.length; S7++) {
          var S8 = S6[S7];
          if (S8.type == 2) {
            var S9 = 1;
            if (S8.enableFade != null) {
              S9 = nY(S8.enableFade);
            }
            var SC = S2 + (-S8.offsetY * Math.sin(S4) + S8.offsetX * Math.sin(S4 + s9)) * S5;
            var SV = S3 - (S8.offsetX * Math.cos(S4 + s9) + -S8.offsetY * Math.cos(S4)) * S5;
            var SL = (S8.rotationType == 0 ? S4 : 0) + S8.rot;
            sS(AS + SC / DU, AU + SV / DU, SL, S5 * 1 * S8.radius / DU, S8.sides, AF * S9);
            sS(AS + SC / DU, AU + SV / DU, SL, S5 * 1.5 * S8.radius / AP / DU, S8.sides, AF * 0.2 * S9);
          }
          if (S8.type == 3) {
            var SI = undefined;
            switch (S8.rotationType) {
              case 0:
                SI = S8.baseRot + S4;
                break;
              case 1:
              case 4:
                SI = S8.rot == null ? S8.baseRot + S4 : S8.rot;
                break;
              case 2:
              case 3:
                SI = S8.anchored == 0 ? S8.rot == null ? S8.baseRot + S4 : S8.baseRot + S4 + S8.rot : S8.rot == null ? S8.baseRot : S8.rot;
            }
            S1(S2 + (S8.offsetX * Math.sin(1.57079633 - S4) + S8.offsetY * Math.cos(S4 + 1.57079633)) * S5, S3 + (S8.offsetY * Math.cos(S4) + S8.offsetX * Math.sin(-S4 + Math.PI)) * S5, SI, S8.width * S5, S8.tank.gadgets);
          }
        }
      })(AG, AT, AX, AB, AR.gadgets);
    }
    function sW(AS, AU, AP, AR) {
      var AQ = AR.fadeTime || 1;
      var AB = AR.size;
      var AG = AR.x;
      var AT = AR.y;
      var AX = AR.d;
      var AF = performance.now();
      var Az = 1 - 1 / (AR.radiant + 0.5);
      if (AR.radiant > 2) {
        Az = 1;
      }
      if (AR.fadeType) {
        var Aj = AR.fadeType[1];
        switch (AR.fadeType[0]) {
          case 0:
            AB *= 1 + (1 - AQ) * 0.5;
            if (AQ < 1) {
              Az *= AQ;
            }
            break;
          case 1:
            AB *= AQ;
            break;
          case 2:
            var S0 = Math.pow(1 - AQ, 2);
            AB *= 1 + (1 - AQ) * 2;
            AX += S0 * Aj[0] * 4;
            AG += S0 * Math.cos(Aj[1]) * 2000;
            AT += S0 * Math.sin(Aj[1]) * 2000;
            if (AQ < 1) {
              Az *= AQ;
            }
            break;
          case 3:
            var S1 = Math.pow(1 - AQ, 2);
            AB *= 1 - S1;
            AX += S1 * Aj[0] * 4;
            AG = nJ(AG, Aj[1], S1);
            AT = nJ(AT, Aj[2], S1);
        }
      }
      sS(AS + AG / DU, AU + AT / DU, AX, Math.max(AB, AB * 1.2 / AP) / DU, AR.sides, Az);
      if (AR.radiant > 2) {
        if (AR.radiant > 3) {
          var S2 = Math.max(1.5 + AR.radiant / 5 + (1 + Math.sin(AF / 800 * ((1 + AR.radiant) / 2))) * 0.06 * AR.radiant, 0.1);
          sS(AS + AG / DU, AU + AT / DU, Math.cos(AF / 25000) * 20 * (1 + AR.radiant) / 2, AB * S2 * (1 + (AR.outerSize || 0)) / DU, -3, Az, AB * 0.4 / DU);
        }
        var S3 = 2 / ((AR.radiant + 2) / 5);
        sS(AS + AG / DU, AU + AT / DU, AF / 2000 * (1 + AR.radiant) / 2, (AB + (AR.outerSize || 0) * AB) * (Math.cos(AF / 500 + Math.PI) / S3 + 1) / DU, -6, Az);
        sS(AS + AG / DU, AU + AT / DU, -AF / 2000 * (1 + AR.radiant) / 2, (AB + (AR.outerSize || 0) * AB) * (Math.cos(AF / 500) / S3 + 1) / DU, -6, Az);
      }
      Az *= 1 - 0.7 / ((2 + AR.radiant) / 3);
      if (AR.radiant > 1) {
        var S4 = Math.max(1.2 + (1 + Math.sin(AF / 800 * ((2 + AR.radiant) / 4))) * 0.1 * AR.radiant, 0.1);
        sS(AS + AG / DU, AU + AT / DU, AX, AB * S4 * 2 * (1 + (AR.outerSize || 0)) / DU, AR.outerSize > 0 ? AR.outerSides : AR.sides, Az);
      }
    }
    function sq(AS, AU, AP, AR) {
      sS(AS + AR.x / DU, AU + AR.y / DU, AR.d, Math.max(AR.size, AR.size * 1.2 / AP) / DU, AR.sides, AR.transparency * Nz(AR.lifetime, AR.maxLifetime) * (1 - 1 / (AR.radiant + 0.5)));
    }
    function sA(AS, AU, AP, AR, AQ, AB, AG) {
      var AT = DW.globalAlpha;
      DW.globalAlpha = AG;
      DW.globalCompositeOperation = "destination-out";
      DW.lineJoin = "round";
      DW.lineWidth = AQ / 2;
      DW.translate(AS, AU);
      DW.rotate(AP - nV(90));
      DW.beginPath();
      DW.moveTo(0, AB / 2);
      DW.lineTo(AR, AQ / 2);
      DW.lineTo(AR, AQ / -2);
      DW.lineTo(0, AB / -2);
      DW.fill();
      DW.stroke();
      DW.setTransform(1, 0, 0, 1, 0, 0);
      DW.globalCompositeOperation = "source-over";
      DW.globalAlpha = AT;
    }
    function sS(AS, AU, AP, AR, AQ, AB, AG) {
      if (AG == null) {
        AG = AR / 2;
      }
      if (AQ == 0) {
        sU(AS, AU, AR, AB);
      } else if (AQ > 0) {
        (function (AT, AX, AF, Az, Aj, S0) {
          var S1 = DW.globalAlpha;
          DW.globalAlpha = S0;
          DW.globalCompositeOperation = "destination-out";
          DW.beginPath();
          DW.translate(AT, AX);
          DW.rotate(AF);
          if (Aj % 2 != 0) {
            DW.rotate(Math.PI * -90 / 180);
          }
          DW.moveTo(Az * Math.cos(0), Az * Math.sin(0));
          for (var S2 = 1; S2 <= Aj + 1; S2 += 1) {
            DW.lineTo(Az * Math.cos(S2 * 2 * Math.PI / Aj), Az * Math.sin(S2 * 2 * Math.PI / Aj));
          }
          DW.fill();
          DW.setTransform(1, 0, 0, 1, 0, 0);
          DW.globalCompositeOperation = "source-over";
          DW.globalAlpha = S1;
        })(AS, AU, AP, AR, AQ, AB);
      } else {
        (function (AT, AX, AF, Az, Aj, S0, S1) {
          var S2 = DW.globalAlpha;
          DW.globalAlpha = S1;
          DW.globalCompositeOperation = "destination-out";
          DW.beginPath();
          DW.translate(AT, AX);
          DW.rotate(AF);
          if (Aj % 2 != 0) {
            DW.rotate(Math.PI * -90 / 180);
          }
          DW.moveTo(Az * Math.cos(0), Az * Math.sin(0));
          DW.lineTo(S0 * Math.cos(Math.PI * 1 / Aj), S0 * Math.sin(Math.PI * 1 / Aj));
          for (var S3 = 1; S3 <= Aj; S3 += 1) {
            DW.lineTo(Az * Math.cos(S3 * 2 * Math.PI / Aj), Az * Math.sin(S3 * 2 * Math.PI / Aj));
            DW.lineTo(S0 * Math.cos((S3 + 0.5) * 2 * Math.PI / Aj), S0 * Math.sin((S3 + 0.5) * 2 * Math.PI / Aj));
          }
          DW.fill();
          DW.setTransform(1, 0, 0, 1, 0, 0);
          DW.globalCompositeOperation = "source-over";
          DW.globalAlpha = S2;
        })(AS, AU, AP, AR, -AQ, AG, AB);
      }
    }
    function sU(AS, AU, AP, AR) {
      var AQ = DW.globalAlpha;
      DW.globalAlpha = AR;
      DW.globalCompositeOperation = "destination-out";
      DW.beginPath();
      DW.arc(AS, AU, AP, 0, Math.PI * 2, true);
      DW.fill();
      DW.globalCompositeOperation = "source-over";
      DW.globalAlpha = AQ;
    }
    function sP(AS, AU, AP, AR, AQ, AB) {
      var AG = DW.globalAlpha;
      DW.globalAlpha = AB;
      DW.globalCompositeOperation = "destination-out";
      DW.beginPath();
      DW.translate(AS, AU);
      DW.rotate(AQ);
      DW.rect(-AP, -AR, AP * 2, AR * 2);
      DW.fill();
      DW.setTransform(1, 0, 0, 1, 0, 0);
      DW.globalCompositeOperation = "source-over";
      DW.globalAlpha = AG;
    }
    function sR(AS = false) {
      var AU = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      DD.clearRect(0, 0, DL.width, DL.height);
      DN.clearRect(0, 0, DI.width, DI.height);
      var AP;
      var AR = DK.width / 2 - DR / DU;
      var AQ = DK.height / 2 - DQ / DU;
      if (AS) {
        AP = (H7[D0 < 0.5 ? tj : tz] || H7.default).dimension;
      } else {
        var AB = kz[tF];
        AP = AB || kj;
      }
      D2 = AP;
      var AG = AP.visual;
      if (EV.showAmbientParticles) {
        var AT;
        var AX = AG.particles;
        var AF = DP * 1.2;
        var Az = JS(AX);
        try {
          for (Az.s(); !(AT = Az.n()).done;) {
            var Aj = AT.value;
            for (var S0 = Math.min(E8, DP * DP * Aj.spawnrate * E9), S1 = Math.random(); S1 < S0; S1 += Math.random()) {
              var S2 = nV(pq(Aj.d.min, Aj.d.max));
              var S3 = pq(Aj.speed.min, Aj.speed.max);
              OF(DR + Math.random() * AF - AF / 2, DQ + Math.random() * AF - AF / 2, S3 * Math.sin(S2), S3 * Math.cos(S2), pq(Aj.size.min, Aj.size.max), Math.random() * Math.PI * 2, Math.round(pq(Aj.sides.min, Aj.sides.max)), NT(Aj.color.min, Aj.color.max, Math.random()), pq(Aj.lifetime.min, Aj.lifetime.max), pq(Aj.transparency.min, Aj.transparency.max), Aj.radiant ? 1 : 0);
            }
          }
        } catch (SC) {
          Az.e(SC);
        } finally {
          Az.f();
        }
      }
      DW.fillStyle = AG.backgroundColor;
      DW.fillRect(0, 0, DW.canvas.width, DW.canvas.height);
      var S4 = 5 / DU;
      if (S4 > 0.3) {
        var S5 = AG.gridSize / DU;
        var S6 = Math.round(AR / S5) * S5;
        var S7 = Math.round(AQ / S5) * S5;
        DW.lineWidth = S4;
        DW.strokeStyle = AG.gridColor;
        DW.beginPath();
        for (var S8 = AR; S8 < DW.canvas.width + AR; S8 += S5) {
          DW.moveTo(S8 - S6, 0);
          DW.lineTo(S8 - S6, DW.canvas.height);
        }
        for (var S9 = AQ; S9 < DW.canvas.height + AQ; S9 += S5) {
          DW.moveTo(0, S9 - S7);
          DW.lineTo(DW.canvas.width, S9 - S7);
        }
        DW.closePath();
        DW.stroke();
      }
      if (AU) {
        sQ(AP.visual.wallColor || "#00000029", AP.bases, AP.walls);
      }
    }
    function sQ(AS, AU, AP) {
      for (var AR = 0; AR < AU.length; AR++) {
        var AQ = AU[AR];
        DW.fillStyle = NS(0, AQ.team, 0, 0) + "29";
        var AB = AQ.width * DT;
        var AG = AQ.height * DT;
        DW.fillRect(DK.width / 2 - (-AQ.x * DT + DR + AB / 2) / DU, DK.height / 2 - (-AQ.y * DT + DQ + AG / 2) / DU, AB / DU, AG / DU);
        if (k9 && EV.showHitboxes) {
          OE(DK.width / 2 - (-AQ.x * DT + DR + AB / 2) / DU, DK.height / 2 - (-AQ.y * DT + DQ + AG / 2) / DU, AB / DU, AG / DU, "#ffffff");
        }
      }
      DW.fillStyle = AS;
      for (var AT = 0; AT < AP.length; AT++) {
        var AX = AP[AT];
        var AF = AX.width * DT;
        var Az = AX.height * DT;
        DW.fillRect(DK.width / 2 - (-AX.x * DT + DR + AF / 2) / DU, DK.height / 2 - (-AX.y * DT + DQ + Az / 2) / DU, AF / DU, Az / DU);
        if (k9 && EV.showHitboxes) {
          OE(DK.width / 2 - (-AX.x * DT + DR + AF / 2) / DU, DK.height / 2 - (-AX.y * DT + DQ + Az / 2) / DU, AF / DU, Az / DU, "#00ff00");
        }
      }
      DW.fillRect(0, DK.height / 2 - (DQ + DT) / DU, DK.width / 2 - (DR + DT) / DU, DT * 2 / DU);
      DW.fillRect(DK.width, DK.height / 2 - (DQ + DT) / DU, (-DR + DT) / DU - DK.width / 2, DT * 2 / DU);
      DW.fillRect(0, 0, DK.width, DK.height / 2 - (DQ + DT) / DU);
      DW.fillRect(0, DK.height, DK.width, (-DQ + DT) / DU - DK.height / 2);
      if (k9 && EV.showHitboxes) {
        OE(DK.width / 2 - (DR + DT) / DU, DK.height / 2 - (DQ + DT) / DU, DT * 2 / DU, DT * 2 / DU, "#00ff00");
      }
    }
    function sB() {
      for (var AS = D2.gates, AU = performance.now(), AP = 0; AP < AS.length; AP++) {
        var AR = AS[AP];
        var AQ = {
          x: AR.x * DT,
          y: AR.y * DT,
          size: AR.size / 2 * DT
        };
        if (NC(AQ, 3)) {
          var AB = i9.e[AR.type];
          if (!AB) {
            continue;
          }
          var AG = AB[AR.open ? "open" : "closed"] || AB.open;
          var AT = AG.auras;
          var AX = AG.particles;
          var AF = AG.spikes || [];
          var Az = AG.arrows || [];
          var Aj = AG.color;
          var S0 = AG.screenShake;
          var S1 = AG.radiant;
          var S2 = Aj;
          if (S1) {
            if (!ND) {
              NO();
            }
            S2 = NR(NG(NN).substring(1), Aj.substring(1), S1);
          }
          for (var S3 = 0; S3 < AT.length; S3++) {
            var S4;
            var S5;
            var S6;
            var S7 = AT[S3];
            var S8 = AU / 2500 * S7[1];
            var S9 = S8 + 0.5;
            var SC = S7[0];
            var SV = S7[2];
            var SL = SC == 0 ? 2 : 1;
            var SI = (S4 = S7[3]) !== null && S4 !== undefined ? S4 : S2;
            var SE = (S5 = S7[4]) !== null && S5 !== undefined ? S5 : 0.2;
            var SK = (S6 = S7[5]) !== null && S6 !== undefined ? S6 : 1;
            var SH = S8 - Math.floor(S8);
            var SZ = S9 - Math.floor(S9);
            if (SK != 1) {
              SH = Math.pow(SH, SK);
              SZ = Math.pow(SZ, SK);
            }
            var SM = (0.5 + SH * SV) * SL;
            var SJ = (0.5 + SZ * SV) * SL;
            DW.globalAlpha = Math.min((1 - SH) * 2, 1) * SE;
            var SD = SM * 30;
            OW(AQ.x - Math.sin(-AR.rot - s9) * SD * SC, AQ.y - Math.cos(-AR.rot - s9) * SD * SC, SD, AQ.size, AR.rot, SI, true);
            DW.globalAlpha = Math.min((1 - SZ) * 2, 1) * 0.2;
            var SN = SJ * 30;
            OW(AQ.x - Math.sin(-AR.rot - s9) * SN * SC, AQ.y - Math.cos(-AR.rot - s9) * SN * SC, SN, AQ.size, AR.rot, SI, true);
            DW.globalAlpha = 1;
          }
          for (var SY = 0; SY < AF.length; SY++) {
            var SO = AF[SY];
            var SW = SO[0];
            var Sq = (AQ.size - SW) * 2;
            for (var SA = Math.min(Math.floor(AQ.size * 2 / (SW * 1.5)), 1000), SS = 0; SS < SA; SS++) {
              var SU = AR.rot + AU / 2500 * (SS % 2 ? -1 : 1) * SO[4];
              var SP = ((SA - 1 ? SS / (SA - 1) : 0) - 0.5) * Sq;
              OA(AQ.x - Math.sin(AR.rot) * SP + Math.cos(AR.rot) * SW / 2, AQ.y + Math.cos(AR.rot) * SP + Math.sin(AR.rot) * SW / 2, SW, SO[3], SO[1], SU, true, 1, SO[2] * SW);
            }
          }
          for (var SR = 0; SR < AX.length; SR++) {
            var SQ = AX[SR];
            for (var SB = Math.min(SQ[5] * AQ.size * 60 * Math.min(D7, 0.1) * E9, 100), SG = Math.random(); SG < SB; SG += Math.random()) {
              var ST = pq(SQ[1], SQ[2]) * 6 * (SQ[0] == 0 ? nE() : 1);
              var SX = SQ[6];
              var SF = pq(0.5, 0.8) * (100 / 1.5) * SQ[3];
              var Sz = (Math.random() * 2 - 1) * (AQ.size - SF);
              var Sj = AQ.x + Math.cos(AR.rot + s9) * Sz;
              var U0 = AQ.y + Math.sin(AR.rot + s9) * Sz;
              var U1 = AR.rot + (Math.random() * 2 - 1) * SQ[8];
              if (SQ[0] == 1) {
                var U2 = ST * SX;
                Sj += Math.sin(-U1 - s9) * U2;
                U0 += Math.cos(-U1 - s9) * U2;
              }
              OF(Sj, U0, ST * Math.sin(-U1 + s9), ST * Math.cos(-U1 + s9), SF, Math.random() * Math.PI * 2, 0, SQ[4], SX, 1, SQ[7], 1, true);
            }
          }
          for (var U3 = 0; U3 < Az.length; U3++) {
            var U4 = Az[U3];
            var U5 = U4[0];
            var U6 = U4[1];
            for (var U7 = U4[2], U8 = AU / 2500 * U4[5], U9 = U4[6], UC = Math.min(Math.floor(AQ.size * 2 / ((U5 + U6) * 1.5)), 1000), UV = (AQ.size - U5 - U6) * 2, UL = 0; UL < U7; UL++) {
              var UI = (nO(UL / (U7 - 1) + U8, 1) - 0.5) * 2;
              if (U9 != 1) {
                UI = nN(UI, U9);
              }
              DW.globalAlpha = 1 - Math.abs(UI);
              UI *= U4[3] * 30;
              for (var UE = 0; UE < UC; UE++) {
                var UK = (UC - 1 ? UE / (UC - 1) : 0) - 0.5;
                var Uk = AQ.x - Math.sin(-AR.rot - s9) * UI;
                var UH = AQ.y - Math.cos(-AR.rot - s9) * UI;
                Oq(Uk += Math.sin(-AR.rot) * UK * UV, UH += Math.cos(-AR.rot) * UK * UV, U5 / 2, U5, U4[4], AR.rot, true);
              }
            }
          }
          DW.globalAlpha = 1;
          OW(AQ.x, AQ.y, 30, AQ.size, AR.rot, S2, true);
          if (S0) {
            var UZ = [AQ.x + Math.cos(AR.rot + s9) * AQ.size, AQ.y + Math.sin(AR.rot + s9) * AQ.size];
            var UM = [AQ.x + Math.cos(AR.rot + s9) * -AQ.size, AQ.y + Math.sin(AR.rot + s9) * -AQ.size];
            var UJ = pY([DR, DQ], UZ, UM);
            OX(UJ[0], UJ[1], 3);
          }
        }
      }
    }
    function sG(AS) {
      if (!t3) {
        return false;
      }
      if (!editing && k9 && EV.copyIds) {
        t6 = true;
      }
      if (wV) {
        var AU = sF(AS);
        wL = false;
        if (AU != null) {
          if (w9[AU.value].add) {
            wE();
          } else if (AU.type == 1) {
            wE(AU.value);
          } else if (AU.type == 0) {
            wI(AU.value);
          }
          return;
        }
      }
      if (YC > -100) {
        var AP = sX(AS);
        if (AP != null) {
          kY(AP);
          return true;
        }
      }
      tT = AS;
      tB = true;
      var AR = sT(AS);
      if (AR) {
        if (AR.i == -1) {
          if (AR.weapon) {
            lI();
          } else {
            lL();
          }
        } else {
          var AQ = (AR.weapon ? l7 : l8)[AR.set][AR.i];
          (function (AB, AG) {
            WL(AB, AG);
            if (AB) {
              lI();
            } else {
              lL();
            }
          })(AR.weapon, AQ.id);
        }
        return true;
      }
      return false;
    }
    function sT(AS) {
      if (!editing) {
        var AU = 120;
        if (WT) {
          for (var AP = 0; AP < 2; AP++) {
            var AR = AP == 0;
            var AQ = DK.width / 2;
            for (var AB = AR ? l7 : l8, AG = 0; AG < AB.length; AG++) {
              var AT = AB[AG];
              var AX = 0;
              var AF = 0;
              if (AT.showing && AT.offset > 0.2) {
                var Az = Math.min(4, AT.length);
                for (var Aj = 0; Aj < AT.length; Aj++) {
                  if (pD(AS, {
                    x: AQ + (Az == 1 ? 0 : AX / (Az - 1) - 0.5) * 400,
                    y: AT.offset * 475 - 400 + 0 + AF * 120,
                    width: 100,
                    height: 100
                  })) {
                    return {
                      weapon: AR,
                      i: Aj,
                      set: AG
                    };
                  }
                  if (++AX == 4) {
                    AX = 0;
                    AF++;
                    Az = Math.min(4, AT.length - Aj - 1);
                  }
                }
                AF += AX > 0 ? 1 : 0;
                AX = 0;
                if (pD(AS, {
                  x: AQ,
                  y: AT.offset * 475 - 400 + 0 - 60 + AF * 120 + 30,
                  width: 100,
                  height: 40
                })) {
                  return {
                    weapon: AR,
                    i: -1,
                    set: AG
                  };
                }
              }
            }
          }
        } else {
          for (var S0 = 0; S0 < 2; S0++) {
            var S1 = S0 == 0;
            var S2 = undefined;
            S2 = S1 ? 0 : DK.width;
            var S3 = DK.height;
            for (var S4 = S1 ? l7 : l8, S5 = 0; S5 < S4.length; S5++) {
              var S6 = S4[S5];
              var S7 = 0;
              var S8 = 0;
              if (S6.showing && S6.offset > 0.2) {
                for (var S9 = 0; S9 < S6.length; S9++) {
                  S6[S9];
                  if (pD(AS, {
                    x: S1 ? S2 + S6.offset * 475 - 400 + AU * S7 : S2 - (S6.offset * 475 - 400) - AU * S7,
                    y: S3 - 200 - AU * S8,
                    width: 100,
                    height: 100
                  })) {
                    return {
                      weapon: S1,
                      i: S9,
                      set: S5
                    };
                  }
                  if (++S7 == 3) {
                    S7 = 0;
                    S8++;
                  }
                }
                S8 += S7 > 0 ? 1 : 0;
                S7 = 0;
                if (pD(AS, {
                  x: S1 ? S2 + S6.offset * 475 - 400 + AU * S7 : S2 - (S6.offset * 475 - 400) - AU * S7,
                  y: S3 - 200 - AU * S8 + 30,
                  width: 100,
                  height: 40
                })) {
                  return {
                    weapon: S1,
                    i: -1,
                    set: S5
                  };
                }
              }
            }
          }
        }
      }
      return false;
    }
    function sX(AS) {
      if (!editing) {
        if (WT) {
          var AU = DK.width / 2;
          var AP = 0;
          var AR = 0;
          if (YC > 0.2) {
            var AQ = YC * 400 - 400;
            var AB = Math.min(4, Y7.length);
            for (var AG = 0; AG < Y7.length; AG++) {
              Y7[AG];
              if (pD(AS, {
                x: AU + (AB == 1 ? 0 : AP / (AB - 1) - 0.5) * 400,
                y: 0 + AQ + AR * 120 + 75,
                width: 100,
                height: 100
              })) {
                return AG + 1;
              }
              if (++AP == 4) {
                AP = 0;
                AR++;
                AB = Math.min(4, Y7.length - AG - 1);
              }
            }
          }
        } else if (l4 > 0) {
          var AT = 0 + (editmode ? 60 : 0);
          var AX = DK.height;
          for (var AF = 0; AF < 4; AF++) {
            if (l2[(Aj = 4 - AF) - 1] < 15) {
              if (pJ(AS, {
                x: AT + 20 + 250 - 15,
                y: AX - 20 - AF * 32 - 15,
                width: 30,
                height: 30
              })) {
                return Aj;
              }
            }
          }
          AT = DK.width;
          for (var Az = 0; Az < 4; Az++) {
            var Aj;
            if (l2[(Aj = 4 - Az + 4) - 1] < 15) {
              if (pJ(AS, {
                x: AT - 20 - 250 - 15,
                y: AX - 20 - Az * 32 - 15,
                width: 30,
                height: 30
              })) {
                return Aj;
              }
            }
          }
        }
      }
      return null;
    }
    function sF(AS) {
      if (wC < 0.2) {
        return null;
      }
      var AU = DK.width / 2;
      var AP = DK.height / 2;
      var AR = w9.length;
      var AQ = Math.PI * 2 / AR;
      var AB = Math.sqrt(Math.pow(AS.x - AU, 2) + Math.pow(AS.y - AP, 2));
      var AG = Math.atan2(AS.y - AP, AS.x - AU);
      var AT = Math.floor(nX(AG - Math.PI / 2) / AQ);
      if (AT >= AR) {
        return null;
      }
      var AX = (1 + w9[AT].lerping * 0.1) * wC;
      var AF = AX * 250;
      if (AB < AF) {
        return {
          type: 0,
          value: AT
        };
      }
      if (w9[AT].add) {
        return null;
      }
      var Az = AT * AQ + Math.PI / 2;
      var Aj = Math.min(AF * AQ * 0.45, AF * 0.08);
      var S0 = nJ(AF, AF / AX * wC, 0.5) + Aj * 2;
      var S1 = AU + Math.cos(Az + AQ / 2) * S0;
      var S2 = AP + Math.sin(Az + AQ / 2) * S0;
      if (Math.sqrt(Math.pow(AS.x - S1, 2) + Math.pow(AS.y - S2, 2)) < Aj * 1.4) {
        return {
          type: 1,
          value: AT
        };
      } else {
        return null;
      }
    }
    var sz = document.createElement("canvas");
    var sj = sz.getContext("2d");
    var p0 = document.createElement("canvas");
    var p1 = p0.getContext("2d");
    var p2 = null;
    var p3 = 1;
    function p4(AS, AU = false) {
      p3 = AS;
      if (EV.fastTransparency || AU) {
        DW.globalAlpha = p3;
      } else {
        p0.width = DW.canvas.width;
        p0.height = DW.canvas.height;
        p2 = DW;
        DW = p1;
      }
    }
    function p5() {
      if (!EV.fastTransparency) {
        (DW = p2).globalAlpha = p3;
        DW.drawImage(p0, 0, 0);
      }
      DW.globalAlpha = 1;
    }
    function p6(AS, AU) {
      var AP = typeof Symbol != "undefined" && AS[Symbol.iterator] || AS["@@iterator"];
      if (!AP) {
        if (Array.isArray(AS) || (AP = p8(AS)) || AU && AS && typeof AS.length == "number") {
          if (AP) {
            AS = AP;
          }
          var AR = 0;
          function AQ() {}
          return {
            s: AQ,
            n: function () {
              if (AR >= AS.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AS[AR++]
                };
              }
            },
            e: function (AX) {
              throw AX;
            },
            f: AQ
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AB;
      var AG = true;
      var AT = false;
      return {
        s: function () {
          AP = AP.call(AS);
        },
        n: function () {
          var AX = AP.next();
          AG = AX.done;
          return AX;
        },
        e: function (AX) {
          AT = true;
          AB = AX;
        },
        f: function () {
          try {
            if (!AG && AP.return != null) {
              AP.return();
            }
          } finally {
            if (AT) {
              throw AB;
            }
          }
        }
      };
    }
    function p7(AS, AU) {
      return function (AP) {
        if (Array.isArray(AP)) {
          return AP;
        }
      }(AS) || function (AP, AR) {
        var AQ = AP == null ? null : typeof Symbol != "undefined" && AP[Symbol.iterator] || AP["@@iterator"];
        if (AQ != null) {
          var AB;
          var AG;
          var AT;
          var AX;
          var AF = [];
          var Az = true;
          var Aj = false;
          try {
            AT = (AQ = AQ.call(AP)).next;
            if (AR === 0) {
              if (Object(AQ) !== AQ) {
                return;
              }
              Az = false;
            } else {
              for (; !(Az = (AB = AT.call(AQ)).done) && (AF.push(AB.value), AF.length !== AR); Az = true);
            }
          } catch (S0) {
            Aj = true;
            AG = S0;
          } finally {
            try {
              if (!Az && AQ.return != null && (AX = AQ.return(), Object(AX) !== AX)) {
                return;
              }
            } finally {
              if (Aj) {
                throw AG;
              }
            }
          }
          return AF;
        }
      }(AS, AU) || p8(AS, AU) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function p8(AS, AU) {
      if (AS) {
        if (typeof AS == "string") {
          return p9(AS, AU);
        }
        var AP = Object.prototype.toString.call(AS).slice(8, -1);
        if (AP === "Object" && AS.constructor) {
          AP = AS.constructor.name;
        }
        if (AP === "Map" || AP === "Set") {
          return Array.from(AS);
        } else if (AP === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(AP)) {
          return p9(AS, AU);
        } else {
          return undefined;
        }
      }
    }
    function p9(AS, AU) {
      if (AU == null || AU > AS.length) {
        AU = AS.length;
      }
      for (var AP = 0, AR = new Array(AU); AP < AU; AP++) {
        AR[AP] = AS[AP];
      }
      return AR;
    }
    var pC = {
      players: 0,
      spectators: 0
    };
    var pV = {
      normal: {
        weapon: {},
        body: {}
      },
      celestial: {
        weapon: {},
        body: {}
      }
    };
    var pL = false;
    var pI = [];
    var pE = [];
    function pK(AS) {
      for (var AU = AS[0].map(function (S1) {
          return function (S2) {
            var S3 = {};
            var S4 = i9.h[S2[1]];
            for (var S5 = 0; S5 < S2.length; S5++) {
              var S6 = S2[S5];
              if (S6 != null) {
                S3[S4[S5]] = S6;
              }
            }
            return S3;
          }(S1);
        }), AP = [], AR = function () {
          var S1;
          var S2;
          var S3;
          var S4 = AU[AQ];
          var S5 = pE.find(function (S6) {
            return S6.id == S4.id;
          });
          if (S5) {
            AP.push((S1 = S5, S2 = S4, S3 = {}, Object.keys(S1).forEach(function (S6) {
              var S7 = S2[S6];
              S3[S6] = S7 ?? S1[S6];
            }), S3));
          } else {
            AP.push(S4);
          }
        }, AQ = 0; AQ < AU.length; AQ++) {
        AR();
      }
      if (AS) {
        (pI = {
          entries: AP,
          playerCount: AS[1]
        }).showPlayers = pI.playerCount != -1;
        pI.highestScore = 0;
        for (var AB = 0; AB < pI.entries.length; AB++) {
          var AG = pI.entries[AB];
          if (AG.score > pI.highestScore) {
            pI.highestScore = AG.score;
          }
        }
        for (var AT = 0; AT < pI.entries.length; AT++) {
          var AX;
          var AF = pI.entries[AT];
          AF.size = AF.type == 1 || AF.isCelestial ? 75 : 40;
          if (!AF.type == 1 && pI.showPlayers) {
            for (var Az = 0; Az < AF.barrels.length; Az++) {
              AF.barrels[Az].animTime = 0;
            }
            for (var Aj = 0; Aj < AF.gadgets.length; Aj++) {
              var S0 = AF.gadgets[Aj];
              S0.animTime = 0;
              if (S0.type == 2) {
                S0.enabled = true;
              }
            }
          }
          AF.nameColor = (AX = AF.nameColor) !== null && AX !== undefined ? AX : 6;
          AF.scoreRatio = AF.score / pI.highestScore;
          AF.scoreRatio = Number.isNaN(AF.scoreRatio) || !Number.isFinite(AF.score) ? Number.isFinite(AF.score) ? 0 : 1 : AF.scoreRatio;
          AF.fadeTime = 0;
          if (!pI.showPlayers) {
            AF.name = (AF.name || "???").replace(/\S/g, "?");
            AF.radiant = 0;
            AF.team = -1;
            AF.nameColor = 6;
          }
          if (AF.score == pI.highestScore) {
            AF.scoreRatio = 1;
          }
          AF.formattedScore = AE(AF.score);
        }
      } else {
        pI = null;
      }
      pE = AP;
    }
    var pH = {};
    function pZ(AS, AU) {
      return (AS * 0 + AU) / 1;
    }
    function pM(AS, AU) {
      var AP = AS.x - AU.x;
      var AR = AS.y - AU.y;
      return AP * AP + AR * AR <= AU.r * AU.r;
    }
    function pJ(AS, AU) {
      return AS.x > AU.x && AS.x < AU.x + AU.width && AS.y < AU.y + AU.height && AS.y > AU.y;
    }
    function pD(AS, AU) {
      return AS.x > AU.x - AU.width / 2 && AS.x < AU.x + AU.width / 2 && AS.y < AU.y + AU.height / 2 && AS.y > AU.y - AU.height / 2;
    }
    function pN(AS, AU) {
      var AP = {
        x: AS.x - AU.x,
        y: AS.y - AU.y
      };
      var AR = {
        width: AU.width,
        height: AU.height,
        x: 0,
        y: 0
      };
      (function (AQ, AB, AG) {
        var AT = Math.cos(AG);
        var AX = Math.sin(AG);
        var AF = AT * (AB.x - AQ.x) + AX * (AB.y - AQ.y) + AQ.x;
        var Az = AT * (AB.y - AQ.y) - AX * (AB.x - AQ.x) + AQ.y;
        AB.x = AF;
        AB.y = Az;
      })(AR, AP, AU.rot);
      return pD(AP, AR);
    }
    function pY(AS, AU, AP) {
      var AR = [AP[0] - AU[0], AP[1] - AU[1]];
      var AQ = [AU[0] - AS[0], AU[1] - AS[1]];
      var AB = -(AR[0] * AQ[0] + AR[1] * AQ[1]) / (Math.pow(AR[0], 2) + Math.pow(AR[1], 2));
      if (AB >= 0 && AB <= 1) {
        return pO(AB, [0, 0], AU, AP);
      } else if (pW(pO(0, AS, AU, AP)) <= pW(pO(1, AS, AU, AP))) {
        return AU;
      } else {
        return AP;
      }
    }
    function pO(AS, AU, AP, AR) {
      return [(1 - AS) * AP[0] + AS * AR[0] - AU[0], (1 - AS) * AP[1] + AS * AR[1] - AU[1]];
    }
    function pW(AS) {
      return Math.pow(AS[0], 2) + Math.pow(AS[1], 2);
    }
    function pq(AS, AU) {
      return Math.random() * (AU - AS) + AS;
    }
    var pA = {};
    var typingData = {};
    var pU = [];
    var pP = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    function pR(AS) {
      var AU;
      var AP = [];
      var AR = p6(AS);
      try {
        for (AR.s(); !(AU = AR.n()).done;) {
          var AQ;
          var AB = p7(AU.value, 3);
          var AG = AB[0];
          var AT = AB[1] || '#ffffff';
          var AX = AB[2];
          var AF = AX === undefined || AX;
          var Az = p6(AG.split(/(\s+)/));
          try {
            function Aj() {
              var S1 = AQ.value;
              if (EV.clickableLinks && AF) {
                var S2;
                var S3 = Math.round(Math.random() * 10000000).toString();
                var S4 = Math.round(Math.random() * 10000000).toString();
                var S5 = p6(S1.replace(pP, function (S7) {
                  return `${S3}${S4}${S7}${S3}`;
                }).split(S3).filter(function (S7) {
                  return S7 != "";
                }));
                try {
                  for (S5.s(); !(S2 = S5.n()).done;) {
                    var S6 = S2.value;
                    if (S6.startsWith(S4)) {
                      AP.push({
                        color: 10,
                        link: true,
                        text: S6.substring(S4.length)
                      });
                    } else {
                      AP.push({
                        color: AT,
                        link: false,
                        text: S6
                      });
                    }
                  }
                } catch (S7) {
                  S5.e(S7);
                } finally {
                  S5.f();
                }
              } else {
                AP.push({
                  text: S1,
                  link: false,
                  color: AT
                });
              }
            }
            for (Az.s(); !(AQ = Az.n()).done;) {
              Aj();
            }
          } catch (S1) {
            Az.e(S1);
          } finally {
            Az.f();
          }
        }
      } catch (S2) {
        AR.e(S2);
      } finally {
        AR.f();
      }
      var S0 = "";
      AP.forEach(function (S3) {
        S0 += S3.text;
      });
      return {
        sections: AP,
        fullText: S0
      };
    }
    var pQ = false;
    var pB = 0;
    function pG(AS) {
      var AU = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (!AS || !EV.silentTyping) {
        if ((AS != pQ || AS && performance.now() - pB > 4000) && AU) {
          pB = performance.now();
          WV(AS);
        }
        pQ = AS;
        if (D8) {
          if (AS) {
            startTyping(D8.id);
          } else {
            endTyping(D8.id);
          }
        }
      }
    }
    function startTyping(AS) {
      if (EV.showTypingIndicators) {
        typingData[AS] ||= {
          time: 0,
          lerping: 0
        };
        typingData[AS].time = 8;
      }
    }
    function endTyping(AS, AU = false) {
      if (typingData[AS]) {
        typingData[AS].time = 0;
        if (AU) {
          typingData[AS].lerping = 0;
        }
      }
    }
    window.startTyping = startTyping;
    window.endTyping = endTyping;
    function chatMessageThing(AS, AU) {
      if (!(AS in pA)) {
        pA[AS] = [];
      }
      var AP = 12;
      var AR = typingData[AS] && typingData[AS].time > 0;
      if (AR) {
        AP = 12 - typingData[AS].lerping * 0.5;
        endTyping(AS, true);
        if (D8 && AS == D8.id) {
          pG(false, false);
        }
      } else if (!EV.showTypingIndicators && D8 && AS == D8.id) {
        pG(false, false);
      }
      pA[AS].unshift({
        message: pR(AU),
        time: AP,
        fromTyping: AR,
        typingFade: AR ? 0 : 1
      });
    }
    window.chatMessageThing = chatMessageThing;
    function pz(AS) {
      if (AS in pA) {
        delete pA[AS];
      }
      if (AS in typingData) {
        delete typingData[AS];
      }
    }
    function addNotification(AS, AU = 1) {
      l0([[AS, 6]], AU);
    }
    window.addNotification = addNotification;
    function l0(AS, AU = 1) {
      AS = pR(AS);
      console.log(`NOTIFICATION: ${AS.fullText}`);
      pU.unshift({
        message: AS,
        time: AU * 6,
        maxTime: AU * 6
      });
    }
    function l1() {
      var AS = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      if (AS) {
        pA = {};
      }
      pU = [];
      tK();
      tJ();
      pG(false);
    }
    var l2 = [8];
    var l3 = [8];
    var l4 = 0;
    var l5 = [];
    var l6 = [];
    var l7 = [];
    var l8 = [];
    function l9(AS) {
      pL = AS;
    }
    function lC() {
      l7 = l7.filter(function (AS) {
        return !AS.removed;
      });
      l8 = l8.filter(function (AS) {
        return !AS.removed;
      });
    }
    function lV(AS, AU) {
      if (function (AG, AT) {
        if (!AG || !AT) {
          return false;
        }
        if (AG.length != AT.length) {
          return false;
        }
        for (var AX = 0; AX < AG.length; AX++) {
          if (AG[AX].id != AT[AX].id) {
            return false;
          }
        }
        return true;
      }(AU[AU.length - 1], AS)) {
        AU[AU.length - 1].showing = true;
      } else {
        var AP;
        var AR = p6(AU);
        try {
          for (AR.s(); !(AP = AR.n()).done;) {
            AP.value.showing = false;
          }
        } catch (AG) {
          AR.e(AG);
        } finally {
          AR.f();
        }
        if (AS.length != 0) {
          AU.push(AS);
          AS.showing = true;
          AS.offset = 0.2;
          AS.ignoreButton = {
            lerping: 0
          };
          var AQ;
          var AB = p6(AS);
          try {
            for (AB.s(); !(AQ = AB.n()).done;) {
              AQ.value.lerping = 0;
            }
          } catch (AT) {
            AB.e(AT);
          } finally {
            AB.f();
          }
        }
      }
    }
    function lL() {
      var AS;
      var AU = p6(l8);
      try {
        for (AU.s(); !(AS = AU.n()).done;) {
          AS.value.showing = false;
        }
      } catch (AP) {
        AU.e(AP);
      } finally {
        AU.f();
      }
    }
    function lI() {
      var AS;
      var AU = p6(l7);
      try {
        for (AU.s(); !(AS = AU.n()).done;) {
          AS.value.showing = false;
        }
      } catch (AP) {
        AU.e(AP);
      } finally {
        AU.f();
      }
    }
    var lE = document.getElementById("message-popup");
    var lK = document.getElementById("message-popup-title");
    var lH = document.getElementById("message-popup-text");
    function lZ(AS, AU) {
      var AP;
      var AR;
      lK.innerHTML = (AP = A2(AS == null ? undefined : AS.toString())) === null || AP === undefined ? undefined : AP.replaceAll("\\n", "<br>");
      lH.innerHTML = (AR = A2(AU == null ? undefined : AU.toString())) === null || AR === undefined ? undefined : AR.replaceAll("\\n", "<br>");
      lE.classList.remove("hide");
    }
    function lM(AS, AU) {
      var AP = typeof Symbol != "undefined" && AS[Symbol.iterator] || AS["@@iterator"];
      if (!AP) {
        if (Array.isArray(AS) || (AP = function (AX, AF) {
          if (!AX) {
            return;
          }
          if (typeof AX == "string") {
            return lJ(AX, AF);
          }
          var Az = Object.prototype.toString.call(AX).slice(8, -1);
          if (Az === "Object" && AX.constructor) {
            Az = AX.constructor.name;
          }
          if (Az === "Map" || Az === "Set") {
            return Array.from(AX);
          }
          if (Az === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Az)) {
            return lJ(AX, AF);
          }
        }(AS)) || AU && AS && typeof AS.length == "number") {
          if (AP) {
            AS = AP;
          }
          var AR = 0;
          function AQ() {}
          return {
            s: AQ,
            n: function () {
              if (AR >= AS.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AS[AR++]
                };
              }
            },
            e: function (AX) {
              throw AX;
            },
            f: AQ
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AB;
      var AG = true;
      var AT = false;
      return {
        s: function () {
          AP = AP.call(AS);
        },
        n: function () {
          var AX = AP.next();
          AG = AX.done;
          return AX;
        },
        e: function (AX) {
          AT = true;
          AB = AX;
        },
        f: function () {
          try {
            if (!AG && AP.return != null) {
              AP.return();
            }
          } finally {
            if (AT) {
              throw AB;
            }
          }
        }
      };
    }
    function lJ(AS, AU) {
      if (AU == null || AU > AS.length) {
        AU = AS.length;
      }
      for (var AP = 0, AR = new Array(AU); AP < AU; AP++) {
        AR[AP] = AS[AP];
      }
      return AR;
    }
    document.getElementById("ok-button").onclick = function () {
      lE.classList.add("hide");
    };
    var lD = [];
    var lN = {};
    var lY = false;
    function lO() {
      lY = false;
    }
    function lW() {
      l1(false);
      lq();
      wL = false;
      wC = 0;
      wV = false;
      var AS;
      var AU = lM(l7);
      try {
        for (AU.s(); !(AS = AU.n()).done;) {
          AS.value.offset = 0.2;
        }
      } catch (AQ) {
        AU.e(AQ);
      } finally {
        AU.f();
      }
      var AP;
      var AR = lM(l8);
      try {
        for (AR.s(); !(AP = AR.n()).done;) {
          AP.value.offset = 0.2;
        }
      } catch (AB) {
        AR.e(AB);
      } finally {
        AR.f();
      }
    }
    function lq() {
      lD = [];
      lN = {};
      lY = false;
      OT();
      lC();
    }
    function lA(AS) {
      (function (AU) {
        var AP = {};
        AP = AU;
        var AR = lD[lD.length - 1];
        if (!AR || AR.dimension != AP.dimension || AR.me == null != (AP.me == null)) {
          lq();
          Oz();
          lN = lD[lD.length - 1];
        }
        lY = true;
        if (lD.length != 0) {
          var AQ = {};
          for (var AB = 0; AB < AP.removedEntities.length; AB += 3) {
            AQ[AP.removedEntities[AB]] = [AP.removedEntities[AB + 1], AP.removedEntities[AB + 2]];
          }
          AP.removedEntities = AQ;
          var AG = lD[lD.length - 1];
          AP.me &&= lR(AG.me, AP.me);
          AP.tanks = lP(AG.tanks, AP.tanks, AQ);
          AP.bullets = lP(AG.bullets, AP.bullets, AQ);
          AP.rifts = lP(AG.rifts, AP.rifts, AQ);
          AP.polygons = lP(AG.polygons, AP.polygons, AQ);
        }
        lD.push(AP);
        if (AP.leaderboard) {
          pK(AP.leaderboard);
        }
        if (AP.events) {
          (function (AT) {
            for (var AX = 0; AX < AT.length; AX++) {
              var AF = p7(AT[AX], 2);
              var Az = AF[0];
              var Aj = AF[1];
              switch (Az) {
                case 0:
                  Nk(Aj);
                  break;
                case 7:
                  NH(Aj);
                  break;
                case 2:
                  NK(Aj);
                  break;
                case 10:
                  NK(Aj, true, false, 0.5);
                  break;
                case 8:
                  NK(Aj, true);
                  break;
                case 9:
                  NK(Aj, true, true);
                  break;
                case 3:
                  NE(Aj);
                  break;
                case 4:
                  NL(Aj);
                  break;
                case 5:
                  NV(Aj);
                  break;
                case 6:
                  NI(Aj);
                  break;
                case 1:
                  chatMessageThing(Aj.id, Aj.message);
                  break;
                case 11:
                  pz(Aj);
                  break;
                case 12:
                  if (Aj[1]) {
                    startTyping(Aj[0]);
                  } else {
                    endTyping(Aj[0]);
                  }
                  break;
                default:
                  console.error(`Received invalid event from server: "${Az}"`);
              }
            }
          })(AP.events);
        }
      })(AS);
    }
    window.triggerEvent = lA;
    function lS(AS) {
      var AU = {};
      var AP = i9.d[AS[1]];
      for (var AR = 0; AR < AS.length; AR++) {
        var AQ = AS[AR];
        if (AQ != null) {
          AU[AP[AR]] = AQ;
        }
      }
      return AU;
    }
    function lU(AS) {
      for (var AU = 0; AU < AS.length; AU++) {
        AS[AU] = lS(AS[AU]);
      }
      return AS;
    }
    function lP(AS, AU, AP) {
      var AR;
      var AQ = new Array(AU.length);
      var AB = {};
      var AG = lM(AS);
      try {
        for (AG.s(); !(AR = AG.n()).done;) {
          var AT = AR.value;
          AB[AT.id] = AT;
        }
      } catch (Az) {
        AG.e(Az);
      } finally {
        AG.f();
      }
      for (var AX = 0; AX < AU.length; AX++) {
        var AF = AU[AX];
        AQ[AX] = lR(AB[AF.id] || AF, AF);
      }
      return AQ;
    }
    function lR(AS, AU) {
      var AP = {};
      Object.keys(AS).forEach(function (AR) {
        var AQ = AU[AR];
        if (AQ != null) {
          AP[AR] = AQ;
        } else {
          switch (AR) {
            case "barrels":
            case "gadgets":
            case "barrelData":
            case "gadgetData":
              AP[AR] = nC(AS[AR]);
              break;
            case "fadeTime":
              AP[AR] = 1;
              AS[AR] = 1;
              break;
            default:
              AP[AR] = AS[AR];
          }
        }
      });
      Object.keys(AP).forEach(function (AR) {
        switch (AR) {
          case "barrels":
            for (var AQ = 0; AQ < AP.barrels.length; AQ++) {
              AP.barrels[AQ].animTime = AP.barrelData[AQ].animTime || 0;
            }
            break;
          case "gadgets":
            for (var AB = 0; AB < AP.gadgets.length; AB++) {
              var AG = AP.gadgets[AB];
              var AT = AP.gadgetData[AB];
              AG.animTime = AT.animTime;
              if (AT.rot != null) {
                AG.rot = AT.rot;
              }
              if (AT.enabled != null) {
                AG.enabled = AT.enabled;
              }
              if (AT.tank) {
                lQ(AG.tank, AT.tank);
              }
            }
        }
      });
      return AP;
    }
    function lQ(AS, AU) {
      for (var AP = 0; AP < AS.barrels.length; AP++) {
        AS.barrels[AP].animTime = AU.barrels[AP].animTime || 0;
      }
      for (var AR = 0; AR < AS.gadgets.length; AR++) {
        var AQ = AS.gadgets[AR];
        var AB = AU.gadgets[AR];
        AQ.animTime = AB.animTime;
        if (AB.rot != null) {
          AQ.rot = AB.rot;
        }
        if (AB.enabled != null) {
          AQ.enabled = AB.enabled;
        }
        if (AB.tank) {
          lQ(AQ.tank, AB.tank);
        }
      }
    }
    function lB() {
      return Date.now() - EV.renderDelay;
    }
    function lG() {
      if (!lY) {
        return {};
      }
      var AS = function () {
        var AB = lB();
        for (var AG = lD.length - 1; AG >= 0; AG--) {
          if (lD[AG].t <= AB) {
            return AG;
          }
        }
        return -1;
      }();
      var AU = lB();
      var AP = lD[AS];
      var AR = lD[AS + 1] || AP;
      lD.splice(0, AS);
      if (AS < 0 || !lN) {
        lN = lD[lD.length - 1];
      } else {
        var AQ = Math.min((AU - AP.t) / (AR.t - AP.t), 1) || 0;
        lN = {
          me: lT(lN.me, AR.me, AP.me, AQ, true, false),
          x: AP.x,
          y: AP.y,
          tanks: lF(lN.tanks, AR.tanks, AP.tanks, AR.removedEntities, AQ, true),
          polygons: lF(lN.polygons, AR.polygons, AP.polygons, AR.removedEntities, AQ, true),
          bullets: lF(lN.bullets, AR.bullets, AP.bullets, AR.removedEntities, AQ, true),
          rifts: lz(lN.rifts, AR.rifts, AP.rifts, AQ),
          mapSize: nJ(lN.mapSize, AR.mapSize, AQ),
          tickTime: AP.tickTime,
          dt: AP.dt,
          dimension: AP.dimension,
          cameraSizeMultiplier: AP.cameraSizeMultiplier
        };
      }
      return lN;
    }
    function lT(AS, AU, AP, AR) {
      var AQ = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
      var AB = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
      if (!AU) {
        return AS;
      }
      if (AS) {
        var AG = {};
        if (AB && AS.fadeType) {
          if (AS.fadeTime) {
            switch (AS.fadeType[0]) {
              default:
                AS.fadeTime = nJ(AS.fadeTime, -0.1, D7 * 0.15 * 60);
                break;
              case 3:
              case 2:
                AS.fadeTime = Math.max(AS.fadeTime - D7 * 3, 0);
                break;
              case 2:
                AS.fadeTime = Math.max(AS.fadeTime - D7 * 1, 0);
            }
          } else {
            AS.fadeTime = 1;
          }
        } else {
          AS.fadeTime = 1;
        }
        if (AQ) {
          var AT = AS.hp / AS.maxHP;
          var AX = AU.hp / AU.maxHP;
          if (AT > AX) {
            if (AS.damageTime) {
              AG.damageTime = nJ(AS.damageTime, Math.max(-0.2, 1 - (AT - AX) * 30), 0.3);
            } else {
              AG.damageTime = 1;
            }
          } else if (AS.damageTime) {
            AG.damageTime = nJ(AS.damageTime, 1, 0.3);
          } else {
            AG.damageTime = 1;
          }
          if (AS.healthBarFade != null) {
            AG.healthBarFade = nJ(AS.healthBarFade, AT < 0.99 && AS.fadeTime == 1 ? 1 : 0, 0.2);
          } else {
            AG.healthBarFade = 0;
          }
        }
        Object.keys(AU).forEach(function (AF) {
          var Az = AU[AF];
          var Aj = AS[AF] || Az;
          var S0 = AP && AP[AF] || Az;
          switch (AF) {
            case "d":
              AG[AF] = lj(S0, Az, AR);
              break;
            case "x":
            case "y":
            case "hp":
            case "lifetime":
            case "maxHP":
              AG[AF] = nJ(S0, Az, AR);
              break;
            case "score":
            case "totalScore":
            case "xpToNextLevel":
            case "size":
              AG[AF] = nJ(Aj, Az, 0.1);
              break;
            case "barrels":
              AG[AF] = S0;
              for (var S1 = 0; S1 < S0.length; S1++) {
                if (S0[S1] && Az[S1]) {
                  AG[AF][S1].animTime = nJ(S0[S1].animTime, Az[S1].animTime, AR);
                }
              }
              break;
            case "gadgets":
              AG[AF] = S0;
              for (var S2 = 0; S2 < S0.length; S2++) {
                if (Az[S2] && Aj[S2]) {
                  if (Aj[S2].animTime && Az[S2].animTime) {
                    AG[AF][S2].animTime = nJ(Aj[S2].animTime, Az[S2].animTime, AR);
                  }
                  if (Aj[S2].rot && Az[S2].rot) {
                    AG[AF][S2].rot = lj(Aj[S2].rot, Az[S2].rot, AR);
                  }
                  if (Aj[S2].tank && Az[S2].tank && S0[S2].tank) {
                    AG[AF][S2].tank = lX(Aj[S2].tank, Az[S2].tank, S0[S2].tank, AR);
                  }
                  if (Aj[S2].enabled != null && Az[S2].enabled != null) {
                    if (Aj[S2].enableFade == null) {
                      Aj[S2].enableFade = Az[S2].enabled ? 1 : 0;
                    }
                    AG[AF][S2].enableFade = Aj[S2].enableFade;
                    if (Az[S2].enabled) {
                      AG[AF][S2].enableFade = Math.min(1, Aj[S2].enableFade + D7 * 5);
                    } else {
                      AG[AF][S2].enableFade = Math.max(0, Aj[S2].enableFade - D7 * 5);
                    }
                  }
                }
              }
              break;
            case "smoothRatio":
              AG[AF] = nJ(Aj[webpack_require], AS.hp / AS.maxHP, 0.002);
              break;
            case "healthBarFade":
            case "damageTime":
              break;
            default:
              AG[AF] = S0;
          }
        });
        return AG;
      }
    }
    function lX(AS, AU, AP, AR) {
      var AQ = {};
      Object.keys(AU).forEach(function (AB) {
        var AG = AU[AB];
        var AT = AS[AB] || AG;
        var AX = AP && AP[AB] || AG;
        switch (AB) {
          case "barrels":
            AQ[AB] = AX;
            for (var AF = 0; AF < AT.length; AF++) {
              if (AT[AF] && AG[AF]) {
                AQ[AB][AF].animTime = nJ(AX[AF].animTime, AG[AF].animTime, AR);
              }
            }
            break;
          case "gadgets":
            AQ[AB] = AX;
            for (var Az = 0; Az < AX.length; Az++) {
              if (AG[Az] && AT[Az]) {
                if (AT[Az].animTime && AG[Az].animTime) {
                  AQ[AB][Az].animTime = nJ(AT[Az].animTime, AG[Az].animTime, AR);
                }
                if (AT[Az].rot && AG[Az].rot) {
                  AQ[AB][Az].rot = lj(AT[Az].rot, AG[Az].rot, AR);
                }
                if (AT[Az].tank && AG[Az].tank && AX[Az].tank) {
                  AQ[AB][Az].tank = lX(AT[Az].tank, AG[Az].tank, AX[Az].tank, AR);
                }
                if (AT[Az].enabled != null && AG[Az].enabled != null) {
                  if (AT[Az].enableFade == null) {
                    AT[Az].enableFade = AG[Az].enabled ? 1 : 0;
                  }
                  AQ[AB][Az].enableFade = AT[Az].enableFade;
                  if (AG[Az].enabled) {
                    AQ[AB][Az].enableFade = Math.min(1, AT[Az].enableFade + D7 * 5);
                  } else {
                    AQ[AB][Az].enableFade = Math.max(0, AT[Az].enableFade - D7 * 5);
                  }
                }
              }
            }
            break;
          default:
            AQ[AB] = AX;
        }
      });
      return AQ;
    }
    function lF(AS, AU, AP, AR, AQ, AB = false) {
      if (AS) {
        if (AU) {
          var AG;
          var AT = {};
          var AX = {};
          var AF = {};
          var Az = lM(AS);
          try {
            for (Az.s(); !(AG = Az.n()).done;) {
              var Aj = AG.value;
              AT[Aj.id] = Aj;
              if (AR[Aj.id]) {
                Aj.fadeType = AR[Aj.id];
              }
            }
          } catch (S7) {
            Az.e(S7);
          } finally {
            Az.f();
          }
          var S0;
          var S1 = lM(AU);
          try {
            for (S1.s(); !(S0 = S1.n()).done;) {
              var S2 = S0.value;
              AX[S2.id] = S2;
            }
          } catch (S8) {
            S1.e(S8);
          } finally {
            S1.f();
          }
          var S3;
          var S4 = lM(AP);
          try {
            for (S4.s(); !(S3 = S4.n()).done;) {
              var S5 = S3.value;
              AF[S5.id] = S5;
            }
          } catch (S9) {
            S4.e(S9);
          } finally {
            S4.f();
          }
          var S6 = AS.concat(AU.filter(function (SC) {
            return !AT[SC.id];
          }));
          return S6.map(function (SC) {
            return lT(SC, AX[SC.id] || SC, AF[SC.id] || SC, AQ, AB, true);
          }).filter(function (SC) {
            return !!AX[SC.id] || !!SC.fadeType && !!(SC.fadeTime > 0);
          });
        }
        return AS;
      }
    }
    function lz(AS, AU, AP, AR) {
      var AQ;
      var AB = {};
      var AG = {};
      var AT = lM(AS);
      try {
        for (AT.s(); !(AQ = AT.n()).done;) {
          var AX = AQ.value;
          AB[AX.id] = AX;
        }
      } catch (S3) {
        AT.e(S3);
      } finally {
        AT.f();
      }
      var AF;
      var Az = lM(AP);
      try {
        for (Az.s(); !(AF = Az.n()).done;) {
          var Aj = AF.value;
          AG[Aj.id] = Aj;
        }
      } catch (S4) {
        Az.e(S4);
      } finally {
        Az.f();
      }
      if (AS) {
        if (AU) {
          var S0 = new Array(AU.length);
          for (var S1 = 0; S1 < AU.length; ++S1) {
            var S2 = AU[S1];
            S0[S1] = lT(AB[S2.id] || S2, S2, AG[S2.id] || S2, AR, false);
          }
          return S0;
        }
        return AS;
      }
    }
    function lj(AS, AU, AP) {
      var AR = (1 - AP) * Math.cos(AS) + AP * Math.cos(AU);
      var AQ = (1 - AP) * Math.sin(AS) + AP * Math.sin(AU);
      return Math.atan2(AQ, AR);
    }
    function e0(AS) {
      e0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AU) {
        return typeof AU;
      } : function (AU) {
        if (AU && typeof Symbol == "function" && AU.constructor === Symbol && AU !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AU;
        }
      };
      return e0(AS);
    }
    function e1() {
      e1 = function () {
        return AS;
      };
      var AS = {};
      var AU = Object.prototype;
      var AP = AU.hasOwnProperty;
      var AR = Object.defineProperty || function (SH, SZ, SM) {
        SH[SZ] = SM.value;
      };
      var AQ = typeof Symbol == "function" ? Symbol : {};
      var AB = AQ.iterator || "@@iterator";
      var AG = AQ.asyncIterator || "@@asyncIterator";
      var AT = AQ.toStringTag || "@@toStringTag";
      function AX(SH, SZ, SM) {
        Object.defineProperty(SH, SZ, {
          value: SM,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SH[SZ];
      }
      try {
        AX({}, "");
      } catch (SH) {
        AX = function (SZ, SM, SJ) {
          return SZ[SM] = SJ;
        };
      }
      function AF(SZ, SM, SJ, SD) {
        var SN = SM && SM.prototype instanceof S0 ? SM : S0;
        var SY = Object.create(SN.prototype);
        var SO = new SI(SD || []);
        AR(SY, "_invoke", {
          value: S9(SZ, SJ, SO)
        });
        return SY;
      }
      function Az(SZ, SM, SJ) {
        try {
          return {
            type: "normal",
            arg: SZ.call(SM, SJ)
          };
        } catch (SD) {
          return {
            type: "throw",
            arg: SD
          };
        }
      }
      AS.wrap = AF;
      var Aj = {};
      function S0() {}
      function S1() {}
      function S2() {}
      var S3 = {};
      AX(S3, AB, function () {
        return this;
      });
      var S4 = Object.getPrototypeOf;
      var S5 = S4 && S4(S4(SE([])));
      if (S5 && S5 !== AU && AP.call(S5, AB)) {
        S3 = S5;
      }
      var S6 = S2.prototype = S0.prototype = Object.create(S3);
      function S7(SZ) {
        ["next", "throw", "return"].forEach(function (SM) {
          AX(SZ, SM, function (SJ) {
            return this._invoke(SM, SJ);
          });
        });
      }
      function S8(SZ, SM) {
        function SJ(SN, SY, SO, SW) {
          var Sq = Az(SZ[SN], SZ, SY);
          if (Sq.type !== "throw") {
            var SA = Sq.arg;
            var SS = SA.value;
            if (SS && e0(SS) == "object" && AP.call(SS, "__await")) {
              return SM.resolve(SS.__await).then(function (SU) {
                SJ("next", SU, SO, SW);
              }, function (SU) {
                SJ("throw", SU, SO, SW);
              });
            } else {
              return SM.resolve(SS).then(function (SU) {
                SA.value = SU;
                SO(SA);
              }, function (SU) {
                return SJ("throw", SU, SO, SW);
              });
            }
          }
          SW(Sq.arg);
        }
        var SD;
        AR(this, "_invoke", {
          value: function (SN, SY) {
            function SO() {
              return new SM(function (SW, Sq) {
                SJ(SN, SY, SW, Sq);
              });
            }
            return SD = SD ? SD.then(SO, SO) : SO();
          }
        });
      }
      function S9(SZ, SM, SJ) {
        var SD = "suspendedStart";
        return function (SN, SY) {
          if (SD === "executing") {
            throw new Error("Generator is already running");
          }
          if (SD === "completed") {
            if (SN === "throw") {
              throw SY;
            }
            return SK();
          }
          SJ.method = SN;
          SJ.arg = SY;
          while (true) {
            var SO = SJ.delegate;
            if (SO) {
              var SW = SC(SO, SJ);
              if (SW) {
                if (SW === Aj) {
                  continue;
                }
                return SW;
              }
            }
            if (SJ.method === "next") {
              SJ.sent = SJ._sent = SJ.arg;
            } else if (SJ.method === "throw") {
              if (SD === "suspendedStart") {
                SD = "completed";
                throw SJ.arg;
              }
              SJ.dispatchException(SJ.arg);
            } else if (SJ.method === "return") {
              SJ.abrupt("return", SJ.arg);
            }
            SD = "executing";
            var Sq = Az(SZ, SM, SJ);
            if (Sq.type === "normal") {
              SD = SJ.done ? "completed" : "suspendedYield";
              if (Sq.arg === Aj) {
                continue;
              }
              return {
                value: Sq.arg,
                done: SJ.done
              };
            }
            if (Sq.type === "throw") {
              SD = "completed";
              SJ.method = "throw";
              SJ.arg = Sq.arg;
            }
          }
        };
      }
      function SC(SZ, SM) {
        var SJ = SM.method;
        var SD = SZ.iterator[SJ];
        if (SD === undefined) {
          SM.delegate = null;
          if (SJ !== "throw" || !SZ.iterator.return || !(SM.method = "return", SM.arg = undefined, SC(SZ, SM), SM.method === "throw")) {
            if (SJ !== "return") {
              SM.method = "throw";
              SM.arg = new TypeError("The iterator does not provide a '" + SJ + "' method");
            }
          }
          return Aj;
        }
        var SN = Az(SD, SZ.iterator, SM.arg);
        if (SN.type === "throw") {
          SM.method = "throw";
          SM.arg = SN.arg;
          SM.delegate = null;
          return Aj;
        }
        var SY = SN.arg;
        if (SY) {
          if (SY.done) {
            SM[SZ.resultName] = SY.value;
            SM.next = SZ.nextLoc;
            if (SM.method !== "return") {
              SM.method = "next";
              SM.arg = undefined;
            }
            SM.delegate = null;
            return Aj;
          } else {
            return SY;
          }
        } else {
          SM.method = "throw";
          SM.arg = new TypeError("iterator result is not an object");
          SM.delegate = null;
          return Aj;
        }
      }
      function SV(SZ) {
        var SM = {
          tryLoc: SZ[0]
        };
        if (1 in SZ) {
          SM.catchLoc = SZ[1];
        }
        if (2 in SZ) {
          SM.finallyLoc = SZ[2];
          SM.afterLoc = SZ[3];
        }
        this.tryEntries.push(SM);
      }
      function SL(SZ) {
        var SM = SZ.completion || {};
        SM.type = "normal";
        delete SM.arg;
        SZ.completion = SM;
      }
      function SI(SZ) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SZ.forEach(SV, this);
        this.reset(true);
      }
      function SE(SZ) {
        if (SZ) {
          var SM = SZ[AB];
          if (SM) {
            return SM.call(SZ);
          }
          if (typeof SZ.next == "function") {
            return SZ;
          }
          if (!isNaN(SZ.length)) {
            var SJ = -1;
            var SD = function SN() {
              while (++SJ < SZ.length) {
                if (AP.call(SZ, SJ)) {
                  SN.value = SZ[SJ];
                  SN.done = false;
                  return SN;
                }
              }
              SN.value = undefined;
              SN.done = true;
              return SN;
            };
            return SD.next = SD;
          }
        }
        return {
          next: SK
        };
      }
      function SK() {
        return {
          value: undefined,
          done: true
        };
      }
      S1.prototype = S2;
      AR(S6, "constructor", {
        value: S2,
        configurable: true
      });
      AR(S2, "constructor", {
        value: S1,
        configurable: true
      });
      S1.displayName = AX(S2, AT, "GeneratorFunction");
      AS.isGeneratorFunction = function (SZ) {
        var SM = typeof SZ == "function" && SZ.constructor;
        return !!SM && (SM === S1 || (SM.displayName || SM.name) === "GeneratorFunction");
      };
      AS.mark = function (SZ) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SZ, S2);
        } else {
          SZ.__proto__ = S2;
          AX(SZ, AT, "GeneratorFunction");
        }
        SZ.prototype = Object.create(S6);
        return SZ;
      };
      AS.awrap = function (SZ) {
        return {
          __await: SZ
        };
      };
      S7(S8.prototype);
      AX(S8.prototype, AG, function () {
        return this;
      });
      AS.AsyncIterator = S8;
      AS.async = function (SZ, SM, SJ, SD, SN = Promise) {
        var SY = new S8(AF(SZ, SM, SJ, SD), SN);
        if (AS.isGeneratorFunction(SM)) {
          return SY;
        } else {
          return SY.next().then(function (SO) {
            if (SO.done) {
              return SO.value;
            } else {
              return SY.next();
            }
          });
        }
      };
      S7(S6);
      AX(S6, AT, "Generator");
      AX(S6, AB, function () {
        return this;
      });
      AX(S6, "toString", function () {
        return "[object Generator]";
      });
      AS.keys = function (SZ) {
        var SM = Object(SZ);
        var SJ = [];
        for (var SD in SM) {
          SJ.push(SD);
        }
        SJ.reverse();
        return function SN() {
          while (SJ.length) {
            var SY = SJ.pop();
            if (SY in SM) {
              SN.value = SY;
              SN.done = false;
              return SN;
            }
          }
          SN.done = true;
          return SN;
        };
      };
      AS.values = SE;
      SI.prototype = {
        constructor: SI,
        reset: function (SZ) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SL);
          if (!SZ) {
            for (var SM in this) {
              if (SM.charAt(0) === "t" && AP.call(this, SM) && !isNaN(+SM.slice(1))) {
                this[SM] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SZ = this.tryEntries[0].completion;
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          return this.rval;
        },
        dispatchException: function (SZ) {
          if (this.done) {
            throw SZ;
          }
          var SM = this;
          function SJ(Sq, SA) {
            SY.type = "throw";
            SY.arg = SZ;
            SM.next = Sq;
            if (SA) {
              SM.method = "next";
              SM.arg = undefined;
            }
            return !!SA;
          }
          for (var SD = this.tryEntries.length - 1; SD >= 0; --SD) {
            var SN = this.tryEntries[SD];
            var SY = SN.completion;
            if (SN.tryLoc === "root") {
              return SJ("end");
            }
            if (SN.tryLoc <= this.prev) {
              var SO = AP.call(SN, "catchLoc");
              var SW = AP.call(SN, "finallyLoc");
              if (SO && SW) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              } else if (SO) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
              } else {
                if (!SW) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SZ, SM) {
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            if (SD.tryLoc <= this.prev && AP.call(SD, "finallyLoc") && this.prev < SD.finallyLoc) {
              var SN = SD;
              break;
            }
          }
          if (SN && (SZ === "break" || SZ === "continue") && SN.tryLoc <= SM && SM <= SN.finallyLoc) {
            SN = null;
          }
          var SY = SN ? SN.completion : {};
          SY.type = SZ;
          SY.arg = SM;
          if (SN) {
            this.method = "next";
            this.next = SN.finallyLoc;
            return Aj;
          } else {
            return this.complete(SY);
          }
        },
        complete: function (SZ, SM) {
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          if (SZ.type === "break" || SZ.type === "continue") {
            this.next = SZ.arg;
          } else if (SZ.type === "return") {
            this.rval = this.arg = SZ.arg;
            this.method = "return";
            this.next = "end";
          } else if (SZ.type === "normal" && SM) {
            this.next = SM;
          }
          return Aj;
        },
        finish: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.finallyLoc === SZ) {
              this.complete(SJ.completion, SJ.afterLoc);
              SL(SJ);
              return Aj;
            }
          }
        },
        catch: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc === SZ) {
              var SD = SJ.completion;
              if (SD.type === "throw") {
                var SN = SD.arg;
                SL(SJ);
              }
              return SN;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SZ, SM, SJ) {
          this.delegate = {
            iterator: SE(SZ),
            resultName: SM,
            nextLoc: SJ
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Aj;
        }
      };
      return AS;
    }
    function e2(AS, AU, AP, AR, AQ, AB, AG) {
      try {
        var AT = AS[AB](AG);
        var AX = AT.value;
      } catch (AF) {
        AP(AF);
        return;
      }
      if (AT.done) {
        AU(AX);
      } else {
        Promise.resolve(AX).then(AR, AQ);
      }
    }
    function e3(AS) {
      return function () {
        var AU = this;
        var AP = arguments;
        return new Promise(function (AR, AQ) {
          var AB = AS.apply(AU, AP);
          function AG(AX) {
            e2(AB, AR, AQ, AG, AT, "next", AX);
          }
          function AT(AX) {
            e2(AB, AR, AQ, AG, AT, "throw", AX);
          }
          AG(undefined);
        });
      };
    }
    function e4(AS, AU, AP) {
      return e5.apply(this, arguments);
    }
    function e5() {
      e5 = e3(e1().mark(function AS(AU, AP, AR) {
        return e1().wrap(function (AQ) {
          while (true) {
            switch (AQ.prev = AQ.next) {
              case 0:
                return AQ.abrupt("return", new Promise(function (AB) {
                  AP ||= {};
                  var AG = {
                    method: AR,
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(AP)
                  };
                  if (AR == "GET") {
                    delete AG.body;
                  }
                  fetch(AU, AG).catch(function (AT) {
                    AB({
                      error: "Failed to connect to server."
                    });
                  }).then(function () {
                    var AT = e3(e1().mark(function AX(AF) {
                      var Az;
                      return e1().wrap(function (Aj) {
                        while (true) {
                          switch (Aj.prev = Aj.next) {
                            case 0:
                              Aj.next = 2;
                              return AF.text();
                            case 2:
                              Az = Aj.sent;
                              try {
                                AB(JSON.parse(Az));
                              } catch (S0) {
                                AB({
                                  error: "Failed to parse response."
                                });
                              }
                            case 4:
                            case "end":
                              return Aj.stop();
                          }
                        }
                      }, AX);
                    }));
                    return function (AF) {
                      return AT.apply(this, arguments);
                    };
                  }()).catch(function (AT) {
                    AB({
                      error: "Failed to parse response."
                    });
                  });
                }));
              case 1:
              case "end":
                return AQ.stop();
            }
          }
        }, AS);
      }));
      return e5.apply(this, arguments);
    }
    function e6(AS, AU) {
      return e7.apply(this, arguments);
    }
    function e7() {
      e7 = e3(e1().mark(function AS(AU, AP) {
        return e1().wrap(function (AR) {
          while (true) {
            switch (AR.prev = AR.next) {
              case 0:
                return AR.abrupt("return", e4(AU, AP, "POST"));
              case 1:
              case "end":
                return AR.stop();
            }
          }
        }, AS);
      }));
      return e7.apply(this, arguments);
    }
    function e8(AS) {
      e8 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AU) {
        return typeof AU;
      } : function (AU) {
        if (AU && typeof Symbol == "function" && AU.constructor === Symbol && AU !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AU;
        }
      };
      return e8(AS);
    }
    function e9() {
      e9 = function () {
        return AS;
      };
      var AS = {};
      var AU = Object.prototype;
      var AP = AU.hasOwnProperty;
      var AR = Object.defineProperty || function (SH, SZ, SM) {
        SH[SZ] = SM.value;
      };
      var AQ = typeof Symbol == "function" ? Symbol : {};
      var AB = AQ.iterator || "@@iterator";
      var AG = AQ.asyncIterator || "@@asyncIterator";
      var AT = AQ.toStringTag || "@@toStringTag";
      function AX(SH, SZ, SM) {
        Object.defineProperty(SH, SZ, {
          value: SM,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SH[SZ];
      }
      try {
        AX({}, "");
      } catch (SH) {
        AX = function (SZ, SM, SJ) {
          return SZ[SM] = SJ;
        };
      }
      function AF(SZ, SM, SJ, SD) {
        var SN = SM && SM.prototype instanceof S0 ? SM : S0;
        var SY = Object.create(SN.prototype);
        var SO = new SI(SD || []);
        AR(SY, "_invoke", {
          value: S9(SZ, SJ, SO)
        });
        return SY;
      }
      function Az(SZ, SM, SJ) {
        try {
          return {
            type: "normal",
            arg: SZ.call(SM, SJ)
          };
        } catch (SD) {
          return {
            type: "throw",
            arg: SD
          };
        }
      }
      AS.wrap = AF;
      var Aj = {};
      function S0() {}
      function S1() {}
      function S2() {}
      var S3 = {};
      AX(S3, AB, function () {
        return this;
      });
      var S4 = Object.getPrototypeOf;
      var S5 = S4 && S4(S4(SE([])));
      if (S5 && S5 !== AU && AP.call(S5, AB)) {
        S3 = S5;
      }
      var S6 = S2.prototype = S0.prototype = Object.create(S3);
      function S7(SZ) {
        ["next", "throw", "return"].forEach(function (SM) {
          AX(SZ, SM, function (SJ) {
            return this._invoke(SM, SJ);
          });
        });
      }
      function S8(SZ, SM) {
        function SJ(SN, SY, SO, SW) {
          var Sq = Az(SZ[SN], SZ, SY);
          if (Sq.type !== "throw") {
            var SA = Sq.arg;
            var SS = SA.value;
            if (SS && e8(SS) == "object" && AP.call(SS, "__await")) {
              return SM.resolve(SS.__await).then(function (SU) {
                SJ("next", SU, SO, SW);
              }, function (SU) {
                SJ("throw", SU, SO, SW);
              });
            } else {
              return SM.resolve(SS).then(function (SU) {
                SA.value = SU;
                SO(SA);
              }, function (SU) {
                return SJ("throw", SU, SO, SW);
              });
            }
          }
          SW(Sq.arg);
        }
        var SD;
        AR(this, "_invoke", {
          value: function (SN, SY) {
            function SO() {
              return new SM(function (SW, Sq) {
                SJ(SN, SY, SW, Sq);
              });
            }
            return SD = SD ? SD.then(SO, SO) : SO();
          }
        });
      }
      function S9(SZ, SM, SJ) {
        var SD = "suspendedStart";
        return function (SN, SY) {
          if (SD === "executing") {
            throw new Error("Generator is already running");
          }
          if (SD === "completed") {
            if (SN === "throw") {
              throw SY;
            }
            return SK();
          }
          SJ.method = SN;
          SJ.arg = SY;
          while (true) {
            var SO = SJ.delegate;
            if (SO) {
              var SW = SC(SO, SJ);
              if (SW) {
                if (SW === Aj) {
                  continue;
                }
                return SW;
              }
            }
            if (SJ.method === "next") {
              SJ.sent = SJ._sent = SJ.arg;
            } else if (SJ.method === "throw") {
              if (SD === "suspendedStart") {
                SD = "completed";
                throw SJ.arg;
              }
              SJ.dispatchException(SJ.arg);
            } else if (SJ.method === "return") {
              SJ.abrupt("return", SJ.arg);
            }
            SD = "executing";
            var Sq = Az(SZ, SM, SJ);
            if (Sq.type === "normal") {
              SD = SJ.done ? "completed" : "suspendedYield";
              if (Sq.arg === Aj) {
                continue;
              }
              return {
                value: Sq.arg,
                done: SJ.done
              };
            }
            if (Sq.type === "throw") {
              SD = "completed";
              SJ.method = "throw";
              SJ.arg = Sq.arg;
            }
          }
        };
      }
      function SC(SZ, SM) {
        var SJ = SM.method;
        var SD = SZ.iterator[SJ];
        if (SD === undefined) {
          SM.delegate = null;
          if (SJ !== "throw" || !SZ.iterator.return || !(SM.method = "return", SM.arg = undefined, SC(SZ, SM), SM.method === "throw")) {
            if (SJ !== "return") {
              SM.method = "throw";
              SM.arg = new TypeError("The iterator does not provide a '" + SJ + "' method");
            }
          }
          return Aj;
        }
        var SN = Az(SD, SZ.iterator, SM.arg);
        if (SN.type === "throw") {
          SM.method = "throw";
          SM.arg = SN.arg;
          SM.delegate = null;
          return Aj;
        }
        var SY = SN.arg;
        if (SY) {
          if (SY.done) {
            SM[SZ.resultName] = SY.value;
            SM.next = SZ.nextLoc;
            if (SM.method !== "return") {
              SM.method = "next";
              SM.arg = undefined;
            }
            SM.delegate = null;
            return Aj;
          } else {
            return SY;
          }
        } else {
          SM.method = "throw";
          SM.arg = new TypeError("iterator result is not an object");
          SM.delegate = null;
          return Aj;
        }
      }
      function SV(SZ) {
        var SM = {
          tryLoc: SZ[0]
        };
        if (1 in SZ) {
          SM.catchLoc = SZ[1];
        }
        if (2 in SZ) {
          SM.finallyLoc = SZ[2];
          SM.afterLoc = SZ[3];
        }
        this.tryEntries.push(SM);
      }
      function SL(SZ) {
        var SM = SZ.completion || {};
        SM.type = "normal";
        delete SM.arg;
        SZ.completion = SM;
      }
      function SI(SZ) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SZ.forEach(SV, this);
        this.reset(true);
      }
      function SE(SZ) {
        if (SZ) {
          var SM = SZ[AB];
          if (SM) {
            return SM.call(SZ);
          }
          if (typeof SZ.next == "function") {
            return SZ;
          }
          if (!isNaN(SZ.length)) {
            var SJ = -1;
            var SD = function SN() {
              while (++SJ < SZ.length) {
                if (AP.call(SZ, SJ)) {
                  SN.value = SZ[SJ];
                  SN.done = false;
                  return SN;
                }
              }
              SN.value = undefined;
              SN.done = true;
              return SN;
            };
            return SD.next = SD;
          }
        }
        return {
          next: SK
        };
      }
      function SK() {
        return {
          value: undefined,
          done: true
        };
      }
      S1.prototype = S2;
      AR(S6, "constructor", {
        value: S2,
        configurable: true
      });
      AR(S2, "constructor", {
        value: S1,
        configurable: true
      });
      S1.displayName = AX(S2, AT, "GeneratorFunction");
      AS.isGeneratorFunction = function (SZ) {
        var SM = typeof SZ == "function" && SZ.constructor;
        return !!SM && (SM === S1 || (SM.displayName || SM.name) === "GeneratorFunction");
      };
      AS.mark = function (SZ) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SZ, S2);
        } else {
          SZ.__proto__ = S2;
          AX(SZ, AT, "GeneratorFunction");
        }
        SZ.prototype = Object.create(S6);
        return SZ;
      };
      AS.awrap = function (SZ) {
        return {
          __await: SZ
        };
      };
      S7(S8.prototype);
      AX(S8.prototype, AG, function () {
        return this;
      });
      AS.AsyncIterator = S8;
      AS.async = function (SZ, SM, SJ, SD, SN = Promise) {
        var SY = new S8(AF(SZ, SM, SJ, SD), SN);
        if (AS.isGeneratorFunction(SM)) {
          return SY;
        } else {
          return SY.next().then(function (SO) {
            if (SO.done) {
              return SO.value;
            } else {
              return SY.next();
            }
          });
        }
      };
      S7(S6);
      AX(S6, AT, "Generator");
      AX(S6, AB, function () {
        return this;
      });
      AX(S6, "toString", function () {
        return "[object Generator]";
      });
      AS.keys = function (SZ) {
        var SM = Object(SZ);
        var SJ = [];
        for (var SD in SM) {
          SJ.push(SD);
        }
        SJ.reverse();
        return function SN() {
          while (SJ.length) {
            var SY = SJ.pop();
            if (SY in SM) {
              SN.value = SY;
              SN.done = false;
              return SN;
            }
          }
          SN.done = true;
          return SN;
        };
      };
      AS.values = SE;
      SI.prototype = {
        constructor: SI,
        reset: function (SZ) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SL);
          if (!SZ) {
            for (var SM in this) {
              if (SM.charAt(0) === "t" && AP.call(this, SM) && !isNaN(+SM.slice(1))) {
                this[SM] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SZ = this.tryEntries[0].completion;
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          return this.rval;
        },
        dispatchException: function (SZ) {
          if (this.done) {
            throw SZ;
          }
          var SM = this;
          function SJ(Sq, SA) {
            SY.type = "throw";
            SY.arg = SZ;
            SM.next = Sq;
            if (SA) {
              SM.method = "next";
              SM.arg = undefined;
            }
            return !!SA;
          }
          for (var SD = this.tryEntries.length - 1; SD >= 0; --SD) {
            var SN = this.tryEntries[SD];
            var SY = SN.completion;
            if (SN.tryLoc === "root") {
              return SJ("end");
            }
            if (SN.tryLoc <= this.prev) {
              var SO = AP.call(SN, "catchLoc");
              var SW = AP.call(SN, "finallyLoc");
              if (SO && SW) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              } else if (SO) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
              } else {
                if (!SW) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SZ, SM) {
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            if (SD.tryLoc <= this.prev && AP.call(SD, "finallyLoc") && this.prev < SD.finallyLoc) {
              var SN = SD;
              break;
            }
          }
          if (SN && (SZ === "break" || SZ === "continue") && SN.tryLoc <= SM && SM <= SN.finallyLoc) {
            SN = null;
          }
          var SY = SN ? SN.completion : {};
          SY.type = SZ;
          SY.arg = SM;
          if (SN) {
            this.method = "next";
            this.next = SN.finallyLoc;
            return Aj;
          } else {
            return this.complete(SY);
          }
        },
        complete: function (SZ, SM) {
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          if (SZ.type === "break" || SZ.type === "continue") {
            this.next = SZ.arg;
          } else if (SZ.type === "return") {
            this.rval = this.arg = SZ.arg;
            this.method = "return";
            this.next = "end";
          } else if (SZ.type === "normal" && SM) {
            this.next = SM;
          }
          return Aj;
        },
        finish: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.finallyLoc === SZ) {
              this.complete(SJ.completion, SJ.afterLoc);
              SL(SJ);
              return Aj;
            }
          }
        },
        catch: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc === SZ) {
              var SD = SJ.completion;
              if (SD.type === "throw") {
                var SN = SD.arg;
                SL(SJ);
              }
              return SN;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SZ, SM, SJ) {
          this.delegate = {
            iterator: SE(SZ),
            resultName: SM,
            nextLoc: SJ
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Aj;
        }
      };
      return AS;
    }
    function eC(AS, AU, AP, AR, AQ, AB, AG) {
      try {
        var AT = AS[AB](AG);
        var AX = AT.value;
      } catch (AF) {
        AP(AF);
        return;
      }
      if (AT.done) {
        AU(AX);
      } else {
        Promise.resolve(AX).then(AR, AQ);
      }
    }
    function eV(AS) {
      return function () {
        var AU = this;
        var AP = arguments;
        return new Promise(function (AR, AQ) {
          var AB = AS.apply(AU, AP);
          function AG(AX) {
            eC(AB, AR, AQ, AG, AT, "next", AX);
          }
          function AT(AX) {
            eC(AB, AR, AQ, AG, AT, "throw", AX);
          }
          AG(undefined);
        });
      };
    }
    var eL = {};
    function eI(AS, AU) {
      var AP = AS.replace("http", "ws");
      AP += AP.endsWith("/") ? "" : "/";
      var AR = {
        path: "ws",
        binaryType: "arraybuffer",
        getToken: false,
        query: {},
        key: "",
        ping: true,
        onConnect: function () {},
        onDisconnect: function () {},
        onMessage: function () {},
        onError: function () {},
        sendSessionID: false,
        type: "?"
      };
      for (var AQ in AU) {
        if (AR[AQ] == null) {
          throw new Error(`Unknown websocket option ${AQ}`);
        }
        AR[AQ] = AU[AQ];
      }
      eL[AR.type] ||= 1;
      var AB = eL[AR.type]++;
      function AG() {
        var Az;
        for (var Aj = arguments.length, S0 = new Array(Aj), S1 = 0; S1 < Aj; S1++) {
          S0[S1] = arguments[S1];
        }
        (Az = console).log.apply(Az, [`[${AR.type}-${AB}]`].concat(S0));
      }
      function AT() {
        var Az;
        for (var Aj = arguments.length, S0 = new Array(Aj), S1 = 0; S1 < Aj; S1++) {
          S0[S1] = arguments[S1];
        }
        (Az = console).warn.apply(Az, [`[${AR.type}-${AB}]`].concat(S0));
      }
      AG(`Attempting to connect to ${AS}/`);
      var AX = {
        log: AG,
        warn: AT,
        kickReason: [],
        sendMessage: function () {
          AT("WebSocket not yet open. Message not sent.");
        },
        close: function (Az = false) {
          AX.manualClose = true;
          AX.forcedClosed = Az;
          if (AX.connection) {
            AX.connection.close();
          } else {
            AX.closed = true;
          }
          AG(Az ? "Force closing connection." : "Closing connection.");
          AX.sendMessage = function () {
            AT("WebSocket closed. Message not sent.");
          };
        },
        forceClose: function () {
          AX.close(true);
        }
      };
      var AF = performance.now();
      AX.getOpenTime = function () {
        return performance.now() - AF;
      };
      (function (Az, Aj, S0, S1, S2, S3) {
        eE.apply(this, arguments);
      })(AX, AS, AP, AR, AG, AT);
      return AX;
    }
    function eE() {
      eE = eV(e9().mark(function AS(AU, AP, AR, AQ, AB, AG) {
        var AT;
        var AX;
        var AF;
        var Az;
        return e9().wrap(function (Aj) {
          while (true) {
            switch (Aj.prev = Aj.next) {
              case 0:
                Aj.next = 2;
                return e6(r5 + "/api/joinserver", {
                  a: AP,
                  b: "kSOjXZcJfTZseWcWVxeQf",
                  c: AQ.key
                });
              case 2:
                if (!(AT = Aj.sent).error) {
                  Aj.next = 7;
                  break;
                }
                AU.forceClose();
                AQ.onError({
                  message: AT.error
                });
                return Aj.abrupt("return");
              case 7:
                if (!AT.captcha) {
                  Aj.next = 13;
                  break;
                }
                Aj.next = 10;
                return new Promise(function (S0) {
                  qI(function (S2) {
                    S0(S2);
                  });
                  var S1 = setInterval(function () {
                    if (AU.closed) {
                      clearInterval(S1);
                      S0(null);
                    }
                  });
                });
              case 10:
                AQ.query.key = Aj.sent;
                if (AQ.query.key != null) {
                  Aj.next = 13;
                  break;
                }
                return Aj.abrupt("return");
              case 13:
                AQ.query.token = AT.token;
                if (!AU.closed) {
                  Aj.next = 16;
                  break;
                }
                return Aj.abrupt("return");
              case 16:
                AX = "";
                for (AF in AQ.query) {
                  if (AQ.query[AF] != null) {
                    AX += AX == "" ? "?" : "&";
                    AX += AF + "=" + encodeURIComponent(AQ.query[AF]);
                  }
                }
                AU.connection = new WebSocket(AR + AQ.path + AX);
                AU.connection.binaryType = AQ.binaryType;
                AU.connection.address = AR;
                AU.connection.addEventListener("open", function (S0) {
                  if (!AU.forcedClosed) {
                    AB("Successfully connected.");
                    AU.sendMessage = function (S1, S2) {
                      if (AU.connection.readyState === WebSocket.OPEN) {
                        var S3 = E3(E2(eN(S2), new Uint8Array([S1])), 102);
                        if (S3.byteLength > 2000000) {
                          addNotification(`Packet size of ${S3.byteLength} bytes exceeded the maximum packet size of ${2000000} bytes.`);
                        } else {
                          AU.connection.send(S3);
                        }
                      } else {
                        AG("WebSocket closing. Message not sent.");
                      }
                    };
                    if (AQ.sendSessionID) {
                      AU.sendMessage(84, JH);
                    }
                    if (AQ.ping) {
                      Az = setInterval(function () {
                        AU.sendMessage(36, AU.getOpenTime());
                      }, 1000);
                    }
                    AQ.onConnect(AP);
                  }
                });
                AU.connection.addEventListener("close", function (S0) {
                  S0.manualClose = AU.manualClose;
                  if (!AU.forcedClosed) {
                    var S1 = S0.reason;
                    var S2 = S0.code;
                    var S3 = S0.wasClean;
                    AB(`Disconnected. Code: ${S2}, Reason: ${S1 || "Not Specified"}, Clean: ${S3}`);
                    AU.closed = true;
                    if (!AU.errored) {
                      AQ.onDisconnect(S0);
                    }
                  }
                  if (Az) {
                    clearInterval(Az);
                  }
                  AU.manualClose = false;
                });
                AU.connection.addEventListener("error", function (S0) {
                  if (!AU.forcedClosed) {
                    AB(`Error occurred while connecting${S0.message ? `: ${S0.message}` : ". No reason specified."}`);
                    AQ.onError(S0);
                    AU.errored = true;
                  }
                });
                AU.connection.addEventListener("message", function (S0) {
                  if (AU.forcedClosed) {
                    AG("Message from server ignored because it was received while the socket was force closing.");
                  } else {
                    var S1 = E3(new Uint8Array(S0.data), 134);
                    var S2 = S1[S1.length - 1];
                    var S3 = eY(S1.slice(0, S1.length - 1));
                    AQ.onMessage(S2, S3);
                  }
                });
              case 25:
              case "end":
                return Aj.stop();
            }
          }
        }, AS);
      }));
      return eE.apply(this, arguments);
    }
    function eK(AS) {
      eK = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AU) {
        return typeof AU;
      } : function (AU) {
        if (AU && typeof Symbol == "function" && AU.constructor === Symbol && AU !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AU;
        }
      };
      return eK(AS);
    }
    function eH() {
      eH = function () {
        return AS;
      };
      var AS = {};
      var AU = Object.prototype;
      var AP = AU.hasOwnProperty;
      var AR = Object.defineProperty || function (SH, SZ, SM) {
        SH[SZ] = SM.value;
      };
      var AQ = typeof Symbol == "function" ? Symbol : {};
      var AB = AQ.iterator || "@@iterator";
      var AG = AQ.asyncIterator || "@@asyncIterator";
      var AT = AQ.toStringTag || "@@toStringTag";
      function AX(SH, SZ, SM) {
        Object.defineProperty(SH, SZ, {
          value: SM,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SH[SZ];
      }
      try {
        AX({}, "");
      } catch (SH) {
        AX = function (SZ, SM, SJ) {
          return SZ[SM] = SJ;
        };
      }
      function AF(SZ, SM, SJ, SD) {
        var SN = SM && SM.prototype instanceof S0 ? SM : S0;
        var SY = Object.create(SN.prototype);
        var SO = new SI(SD || []);
        AR(SY, "_invoke", {
          value: S9(SZ, SJ, SO)
        });
        return SY;
      }
      function Az(SZ, SM, SJ) {
        try {
          return {
            type: "normal",
            arg: SZ.call(SM, SJ)
          };
        } catch (SD) {
          return {
            type: "throw",
            arg: SD
          };
        }
      }
      AS.wrap = AF;
      var Aj = {};
      function S0() {}
      function S1() {}
      function S2() {}
      var S3 = {};
      AX(S3, AB, function () {
        return this;
      });
      var S4 = Object.getPrototypeOf;
      var S5 = S4 && S4(S4(SE([])));
      if (S5 && S5 !== AU && AP.call(S5, AB)) {
        S3 = S5;
      }
      var S6 = S2.prototype = S0.prototype = Object.create(S3);
      function S7(SZ) {
        ["next", "throw", "return"].forEach(function (SM) {
          AX(SZ, SM, function (SJ) {
            return this._invoke(SM, SJ);
          });
        });
      }
      function S8(SZ, SM) {
        function SJ(SN, SY, SO, SW) {
          var Sq = Az(SZ[SN], SZ, SY);
          if (Sq.type !== "throw") {
            var SA = Sq.arg;
            var SS = SA.value;
            if (SS && eK(SS) == "object" && AP.call(SS, "__await")) {
              return SM.resolve(SS.__await).then(function (SU) {
                SJ("next", SU, SO, SW);
              }, function (SU) {
                SJ("throw", SU, SO, SW);
              });
            } else {
              return SM.resolve(SS).then(function (SU) {
                SA.value = SU;
                SO(SA);
              }, function (SU) {
                return SJ("throw", SU, SO, SW);
              });
            }
          }
          SW(Sq.arg);
        }
        var SD;
        AR(this, "_invoke", {
          value: function (SN, SY) {
            function SO() {
              return new SM(function (SW, Sq) {
                SJ(SN, SY, SW, Sq);
              });
            }
            return SD = SD ? SD.then(SO, SO) : SO();
          }
        });
      }
      function S9(SZ, SM, SJ) {
        var SD = "suspendedStart";
        return function (SN, SY) {
          if (SD === "executing") {
            throw new Error("Generator is already running");
          }
          if (SD === "completed") {
            if (SN === "throw") {
              throw SY;
            }
            return SK();
          }
          SJ.method = SN;
          SJ.arg = SY;
          while (true) {
            var SO = SJ.delegate;
            if (SO) {
              var SW = SC(SO, SJ);
              if (SW) {
                if (SW === Aj) {
                  continue;
                }
                return SW;
              }
            }
            if (SJ.method === "next") {
              SJ.sent = SJ._sent = SJ.arg;
            } else if (SJ.method === "throw") {
              if (SD === "suspendedStart") {
                SD = "completed";
                throw SJ.arg;
              }
              SJ.dispatchException(SJ.arg);
            } else if (SJ.method === "return") {
              SJ.abrupt("return", SJ.arg);
            }
            SD = "executing";
            var Sq = Az(SZ, SM, SJ);
            if (Sq.type === "normal") {
              SD = SJ.done ? "completed" : "suspendedYield";
              if (Sq.arg === Aj) {
                continue;
              }
              return {
                value: Sq.arg,
                done: SJ.done
              };
            }
            if (Sq.type === "throw") {
              SD = "completed";
              SJ.method = "throw";
              SJ.arg = Sq.arg;
            }
          }
        };
      }
      function SC(SZ, SM) {
        var SJ = SM.method;
        var SD = SZ.iterator[SJ];
        if (SD === undefined) {
          SM.delegate = null;
          if (SJ !== "throw" || !SZ.iterator.return || !(SM.method = "return", SM.arg = undefined, SC(SZ, SM), SM.method === "throw")) {
            if (SJ !== "return") {
              SM.method = "throw";
              SM.arg = new TypeError("The iterator does not provide a '" + SJ + "' method");
            }
          }
          return Aj;
        }
        var SN = Az(SD, SZ.iterator, SM.arg);
        if (SN.type === "throw") {
          SM.method = "throw";
          SM.arg = SN.arg;
          SM.delegate = null;
          return Aj;
        }
        var SY = SN.arg;
        if (SY) {
          if (SY.done) {
            SM[SZ.resultName] = SY.value;
            SM.next = SZ.nextLoc;
            if (SM.method !== "return") {
              SM.method = "next";
              SM.arg = undefined;
            }
            SM.delegate = null;
            return Aj;
          } else {
            return SY;
          }
        } else {
          SM.method = "throw";
          SM.arg = new TypeError("iterator result is not an object");
          SM.delegate = null;
          return Aj;
        }
      }
      function SV(SZ) {
        var SM = {
          tryLoc: SZ[0]
        };
        if (1 in SZ) {
          SM.catchLoc = SZ[1];
        }
        if (2 in SZ) {
          SM.finallyLoc = SZ[2];
          SM.afterLoc = SZ[3];
        }
        this.tryEntries.push(SM);
      }
      function SL(SZ) {
        var SM = SZ.completion || {};
        SM.type = "normal";
        delete SM.arg;
        SZ.completion = SM;
      }
      function SI(SZ) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SZ.forEach(SV, this);
        this.reset(true);
      }
      function SE(SZ) {
        if (SZ) {
          var SM = SZ[AB];
          if (SM) {
            return SM.call(SZ);
          }
          if (typeof SZ.next == "function") {
            return SZ;
          }
          if (!isNaN(SZ.length)) {
            var SJ = -1;
            var SD = function SN() {
              while (++SJ < SZ.length) {
                if (AP.call(SZ, SJ)) {
                  SN.value = SZ[SJ];
                  SN.done = false;
                  return SN;
                }
              }
              SN.value = undefined;
              SN.done = true;
              return SN;
            };
            return SD.next = SD;
          }
        }
        return {
          next: SK
        };
      }
      function SK() {
        return {
          value: undefined,
          done: true
        };
      }
      S1.prototype = S2;
      AR(S6, "constructor", {
        value: S2,
        configurable: true
      });
      AR(S2, "constructor", {
        value: S1,
        configurable: true
      });
      S1.displayName = AX(S2, AT, "GeneratorFunction");
      AS.isGeneratorFunction = function (SZ) {
        var SM = typeof SZ == "function" && SZ.constructor;
        return !!SM && (SM === S1 || (SM.displayName || SM.name) === "GeneratorFunction");
      };
      AS.mark = function (SZ) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SZ, S2);
        } else {
          SZ.__proto__ = S2;
          AX(SZ, AT, "GeneratorFunction");
        }
        SZ.prototype = Object.create(S6);
        return SZ;
      };
      AS.awrap = function (SZ) {
        return {
          __await: SZ
        };
      };
      S7(S8.prototype);
      AX(S8.prototype, AG, function () {
        return this;
      });
      AS.AsyncIterator = S8;
      AS.async = function (SZ, SM, SJ, SD, SN = Promise) {
        var SY = new S8(AF(SZ, SM, SJ, SD), SN);
        if (AS.isGeneratorFunction(SM)) {
          return SY;
        } else {
          return SY.next().then(function (SO) {
            if (SO.done) {
              return SO.value;
            } else {
              return SY.next();
            }
          });
        }
      };
      S7(S6);
      AX(S6, AT, "Generator");
      AX(S6, AB, function () {
        return this;
      });
      AX(S6, "toString", function () {
        return "[object Generator]";
      });
      AS.keys = function (SZ) {
        var SM = Object(SZ);
        var SJ = [];
        for (var SD in SM) {
          SJ.push(SD);
        }
        SJ.reverse();
        return function SN() {
          while (SJ.length) {
            var SY = SJ.pop();
            if (SY in SM) {
              SN.value = SY;
              SN.done = false;
              return SN;
            }
          }
          SN.done = true;
          return SN;
        };
      };
      AS.values = SE;
      SI.prototype = {
        constructor: SI,
        reset: function (SZ) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SL);
          if (!SZ) {
            for (var SM in this) {
              if (SM.charAt(0) === "t" && AP.call(this, SM) && !isNaN(+SM.slice(1))) {
                this[SM] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SZ = this.tryEntries[0].completion;
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          return this.rval;
        },
        dispatchException: function (SZ) {
          if (this.done) {
            throw SZ;
          }
          var SM = this;
          function SJ(Sq, SA) {
            SY.type = "throw";
            SY.arg = SZ;
            SM.next = Sq;
            if (SA) {
              SM.method = "next";
              SM.arg = undefined;
            }
            return !!SA;
          }
          for (var SD = this.tryEntries.length - 1; SD >= 0; --SD) {
            var SN = this.tryEntries[SD];
            var SY = SN.completion;
            if (SN.tryLoc === "root") {
              return SJ("end");
            }
            if (SN.tryLoc <= this.prev) {
              var SO = AP.call(SN, "catchLoc");
              var SW = AP.call(SN, "finallyLoc");
              if (SO && SW) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              } else if (SO) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
              } else {
                if (!SW) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SZ, SM) {
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            if (SD.tryLoc <= this.prev && AP.call(SD, "finallyLoc") && this.prev < SD.finallyLoc) {
              var SN = SD;
              break;
            }
          }
          if (SN && (SZ === "break" || SZ === "continue") && SN.tryLoc <= SM && SM <= SN.finallyLoc) {
            SN = null;
          }
          var SY = SN ? SN.completion : {};
          SY.type = SZ;
          SY.arg = SM;
          if (SN) {
            this.method = "next";
            this.next = SN.finallyLoc;
            return Aj;
          } else {
            return this.complete(SY);
          }
        },
        complete: function (SZ, SM) {
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          if (SZ.type === "break" || SZ.type === "continue") {
            this.next = SZ.arg;
          } else if (SZ.type === "return") {
            this.rval = this.arg = SZ.arg;
            this.method = "return";
            this.next = "end";
          } else if (SZ.type === "normal" && SM) {
            this.next = SM;
          }
          return Aj;
        },
        finish: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.finallyLoc === SZ) {
              this.complete(SJ.completion, SJ.afterLoc);
              SL(SJ);
              return Aj;
            }
          }
        },
        catch: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc === SZ) {
              var SD = SJ.completion;
              if (SD.type === "throw") {
                var SN = SD.arg;
                SL(SJ);
              }
              return SN;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SZ, SM, SJ) {
          this.delegate = {
            iterator: SE(SZ),
            resultName: SM,
            nextLoc: SJ
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Aj;
        }
      };
      return AS;
    }
    function eZ(AS, AU, AP, AR, AQ, AB, AG) {
      try {
        var AT = AS[AB](AG);
        var AX = AT.value;
      } catch (AF) {
        AP(AF);
        return;
      }
      if (AT.done) {
        AU(AX);
      } else {
        Promise.resolve(AX).then(AR, AQ);
      }
    }
    function eM(AS) {
      return function () {
        var AU = this;
        var AP = arguments;
        return new Promise(function (AR, AQ) {
          var AB = AS.apply(AU, AP);
          function AG(AX) {
            eZ(AB, AR, AQ, AG, AT, "next", AX);
          }
          function AT(AX) {
            eZ(AB, AR, AQ, AG, AT, "throw", AX);
          }
          AG(undefined);
        });
      };
    }
    var eJ = new VT();
    window.msgpack = eJ;
    eJ.pack();
    var eD;
    var eN = eJ.pack;
    var eY = eJ.unpack;
    var eO = "";
    var eW = false;
    var eq = "";
    var eA = {
      closed: true,
      sendMessage: function() {},
    };
    function eS(AS) {
      return
      eO = AS;
      t0.textContent = `Server Name: ${function (AU) {
        var AP = AU.indexOf("://");
        if (AP != -1) {
          AU = AU.substring(AP + 3);
        }
        var AR = AU.indexOf("/");
        if (AR != -1) {
          AU = AU.substring(0, AR);
        }
        return AU;
      }(eO)}`;
      eA = eI(eO, {
        sendSessionID: true,
        getToken: false,
        query: {},
        key: eG,
        type: "G",
        onConnect: function (AU) {
          connectedToGameServer(AU);
        },
        onMessage: function (AU, AP) {
          switch (AU) {
            case 136:
              OP(AP);
              break;
            case 36:
              S0 = eA.getOpenTime() - AP;
              S0 = pZ(tS, S0);
              tS = tA;
              tA = S0;
              break;
            case 12:
              (Aj = nI([["You", 6]].concat((Az = AP).helpers.map(function (S1) {
                if (EV.showNames) {
                  if (S1.name != "") {
                    return [S1.name, S1.nameColor, false];
                  } else {
                    return [`an unnamed ${S1.className}`, S1.nameColor, false];
                  }
                } else {
                  return [`a${A1(S1.className) ? "n" : ""} ${S1.className}`, S1.nameColor, false];
                }
              })))).push([" killed ", 6]);
              Aj.push(EV.showNames ? Az.name != "" ? [Az.name, Az.nameColor, false] : [`an unnamed ${Az.className}`, Az.nameColor, false] : [`a${A1(Az.className) ? "n" : ""} ${Az.className}`, Az.nameColor, false]);
              Aj.push([".", 6]);
              l0(Aj);
              break;
            case 168:
              eA.kickReason = AP;
              break;
            case 164:
              pK(AP);
              break;
            case 16:
              AX = AP[0];
              AF = AP[1];
              console.log(`RECEIVED ANNOUNCEMENT: ${AX}, ${AF}`);
              tC = AX;
              tV = AF;
              tL = 20;
              tI = null;
              tE = null;
              break;
            case 8:
              ez(AP);
              break;
            case 32:
              (function (S1) {
                lC();
                lV(S1, l7);
              })(AP);
              break;
            case 176:
              var AR = i9.g[AP];
              ZD(AP);
              O4(AR.name, AR.description, AR.rarity, AR.stars);
              break;
            case 24:
              l0(AP);
              break;
            case 180:
              AG = AP[0];
              AT = AP[1];
              ZV[AG].progress = AT;
              ZJ(AG);
              break;
            case 128:
              AB = AP;
              navigator.clipboard.writeText(AB);
              break;
            case 172:
              JE(AP);
              break;
            case 28:
              (function (S1) {
                lC();
                lV(S1, l8);
              })(AP);
              break;
            case 144:
              (function (S1, S2) {
                setTimeout(function () {
                  kz[S1].gates = S2;
                }, EV.renderDelay);
              })(AP[0], AP[1]);
              break;
            case 140:
              (function (S1) {
                currentWeapon.barrels = mS(mW(S1.weapon.barrels));
                currentWeapon.cameraSizeMultiplier = S1.weapon.cameraSizeMultiplier;
                currentWeapon.maxDrones = S1.weapon.maxDrones;
                currentWeapon.name = S1.weapon.name;
                currentBody.gadgets = mU(mq(S1.body.gadgets));
                currentBody.layers = mA(mO(S1.body.layers));
                currentBody.sides = S1.body.sides;
                currentBody.outerSides = S1.body.outerSides;
                currentBody.outerSize = S1.body.outerSize;
                currentBody.healthMultiplier = S1.body.healthMultiplier;
                currentBody.bodyDamageMultiplier = S1.body.bodyDamageMultiplier;
                currentBody.speedMultiplier = S1.body.speedMultiplier;
                currentBody.cameraSizeMultiplier = S1.body.cameraSizeMultiplier;
                currentBody.maxDrones = S1.body.maxDrones;
                currentBody.name = S1.body.name;
                currentBody.type = S1.body.type;
                currentBody.level = S1.body.level;
                currentBody.size = S1.body.size;
                currentBody.radiant = S1.body.radiant;
                currentBody.team = S1.body.team;
                currentBody.visualTeam = S1.body.visualTeam;
                currentBody.overrideTankName = S1.body.overrideTankName;
                oF();
              })(AP);
              break;
            case 68:
              (function (S1) {
                pV = S1;
                for (var S2 = 0; S2 < 4; S2++) {
                  var S3 = (S2 % 2 == 0 ? pV.celestial : pV.normal)[S2 > 1 ? "weapon" : "body"];
                  for (var S4 = 0, S5 = Object.entries(S3); S4 < S5.length; S4++) {
                    var S6 = p7(S5[S4], 2);
                    var S7 = S6[0];
                    S6[1];
                    S3.maxTier = +S7;
                  }
                }
              })(AP);
              break;
            case 156:
              (function (S1) {
                eG = S1[0];
                eO = S1[1];
                var S2 = S1[2];
                D3(S2.loadingBackground);
                eq = S2.loadingText;
                eW = false;
                var S3 = serversList.findIndex(function (S4) {
                  return S4.address === eO;
                });
                if (S3 != -1) {
                  setCurrentServerId(S3);
                  qq();
                }
                console.log(`Sending to server: ${eO}`);
                eB(eO);
              })(AP);
              break;
            case 160:
              lZ(AP[0], AP[1]);
              break;
            case 132:
              A7(AP);
              break;
            case 64:
              eF(AP);
              break;
            case 0:
              lA(AP);
              break;
            case 4:
              Y5(1.2);
              l4++;
              break;
            case 20:
              (function (S1, S2) {
                console.log(`RECEIVED TIMER: ${S1} ${S2} seconds`);
                tH = S2;
                tZ = S2;
                tM = S1;
              })(AP[0], AP[1]);
              break;
            case 148:
              editmode = AQ = AP;
              if (AQ) {
                EG.classList.remove("hidden");
              } else {
                EG.classList.add("hidden");
                if (editing) {
                  o4();
                }
              }
          }
          var AQ;
          var AB;
          var AG;
          var AT;
          var AX;
          var AF;
          var Az;
          var Aj;
          var S0;
        },
        onDisconnect: function (AU) {
          if (AU.code == 1008) {
            lZ(eA.kickReason[1] || "Disconnected", eA.kickReason[0] || "An unexpected error occurred");
          }
          qk(eq);
          if (!eW && AU.code != 1008) {
            setTimeout(function () {
              eS(eO);
            }, 0);
          }
          eW = false;
          eq = "";
        },
        onError: function (AU) {
          var AP = AU.message;
          if (!AP || !AP.startsWith("Banned.")) {
            AP = `An unexpected error occurred while connecting to ${eO}${AP ? `: ${AP}` : "."}`;
          }
          qK(AP);
        }
      });
    }
    function eU() {
      return eP.apply(this, arguments);
    }
    function eP() {
      eP = eM(eH().mark(function AS() {
        var AU;
        var AP;
        var AR;
        var AQ = arguments;
        return eH().wrap(function (AB) {
          while (true) {
            switch (AB.prev = AB.next) {
              case 0:
                AU = !(AQ.length > 0) || AQ[0] === undefined || AQ[0];
                AP = performance.now();
                if (eD != null && !(AP - eD > 1000)) {
                  AB.next = 9;
                  break;
                }
                eD = AP;
                AB.next = 6;
                return e6(r5 + "/api/serverlist", {});
              case 6:
                if ((AR = AB.sent).error) {
                  qK("Could not retrieve server list");
                }
                onRecievedServers(AR, AU);
              case 9:
              case "end":
                return AB.stop();
            }
          }
        }, AS);
      }));
      return eP.apply(this, arguments);
    }
    function eR() {
      var AS = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      if (!eA.closed) {
        eW = !AS;
        eA.close();
      }
    }
    function eQ() {
      if (!eA.closed) {
        eA.forceClose();
      }
      setTimeout(function () {
        eS(eO);
      }, 0);
    }
    function eB(AS) {
      if (!eA.closed) {
        eA.forceClose();
        qk(eq, false);
      }
      eS(AS);
    }
    var eG = "";
    var eT = false;
    function eX() {
      eG = "";
      eT = false;
    }
    function eF(AS) {
      (function (AU, AP) {
        AP.visual.particles.forEach(function (AR) {
          AR.spawnrate /= 5760000;
        });
        kz[AU] = AP;
      })(AS[0], AS[1]);
    }
    function ez(AS) {
      var AU;
      (function (AP) {
        for (var AR = 0; AR < AP.length; AR++) {
          l2[AR] = AP[AR];
          l3[AR] = AP[AR];
        }
      })(AS[0]);
      AU = AS[1];
      l4 = AU;
    }
    function ej(AS) {
      eA.sendMessage(20, AS);
    }
    function W0(AS) {
      eA.sendMessage(80, AS);
      (function () {
        for (var AU = 0; AU < 8; AU++) {
          l2[AU] = 0;
          l3[AU] = 0;
        }
        l4 = 0;
        lL();
        lI();
      })();
    }
    var W1 = 0;
    var W2 = (0, i8.throttle)(60, function (AS) {
      var AU = Math.round(AS * 1000) / 1000;
      if (W1 != AU) {
        eA.sendMessage(0, AU);
        if(window.direction) {
          window.direction(AU * 1000)
        }
      }
      W1 = AU;
    });
    var W3 = (0, i8.throttle)(20, function (AS) {
      eA.sendMessage(16, AS);
      window.u.send(['chat', AS])
    });
    function W4(AS) {
      eA.sendMessage(8, AS);
    }
    var W5 = (0, i8.debounce)(60, function () {
      eA.sendMessage(76, currentBody);
    });
    window.setUpdateBody = function(f) {
      W5 = f
    }
    var W6 = (0, i8.debounce)(60, function () {
      eA.sendMessage(72, currentWeapon);
    });
    window.setUpdateWeapon = function(f) {
      W6 = f
    }
    var W7 = (0, i8.debounce)(20, function (AS) {
      eA.sendMessage(12, AS);
    });
    function updateMovementInput(AS, AU) {
      eA.sendMessage(4, [AS, AU]);
    }
    window.setUpdateMovementInput = function(f) {
      updateMovementInput = f
    }
    var W9 = (0, i8.debounce)(20, function (AS) {
      eA.sendMessage(32, AS);
    });
    var WC = (0, i8.throttle)(60, function (AS, AU) {
      eA.sendMessage(40, [AS, AU]);
    });
    var WV = (0, i8.throttle)(60, function (AS) {
      eA.sendMessage(44, AS);
      console.log('typing', AS)
      window.u.send(['typing', AS])
    });
    function WL(AS, AU) {
      if (AS) {
        eA.sendMessage(28, AU);
      } else {
        eA.sendMessage(24, AU);
      }
      var AP = false;
      var AR = false;
      if (AS) {
        for (var AQ = 0; AQ < l6.length; AQ++) {
          var AB = l6[AQ];
          if (AB.id == AU) {
            for (var AG = 0; AG < AB.barrels.length; AG++) {
              if (AB.barrels[AG].type == 1) {
                AP = true;
              }
            }
          }
        }
      } else {
        for (var AT = 0; AT < l5.length; AT++) {
          var AX = l5[AT];
          if (AX.id == AU) {
            for (var AF = 0; AF < AX.gadgets.length; AF++) {
              if (AX.gadgets[AF].type == 1) {
                AP = true;
              } else if (AX.gadgets[AF].type == 0) {
                AR = true;
              } else if (AX.gadgets[AF].type == 2) {
                true;
              }
            }
          }
        }
      }
      if (AR) {
        setTimeout(function () {
          if (!AL("tut_auto_cannons") && !pL && !WT) {
            l9(true);
            AV("tut_auto_cannons", true);
            setTimeout(function () {
              addNotification("You can disable your auto cannons by pressing V.");
            }, 1000);
            l9(false);
          }
        }, 10000);
      }
      if (AR) {
        setTimeout(function () {
          if (!AL("tut_auras") && !pL && !WT) {
            l9(true);
            AV("tut_auras", true);
            setTimeout(function () {
              addNotification("You can disable your auras by pressing V.");
            }, 1000);
            l9(false);
          }
        }, 10000);
      }
      if (AP) {
        if (!AL("tut_drones") && !pL && !WT) {
          l9(true);
          AV("tut_drones", true);
          setTimeout(function () {
            addNotification("Hold down left click to control your drones.");
          }, 1000);
          setTimeout(function () {
            addNotification("You can also control them by turning on auto fire. (Press E)");
          }, 4000);
          setTimeout(function () {
            addNotification("Repel your drones by holding down right click.");
          }, 9000);
          setTimeout(function () {
            addNotification("Upgrading your bullet penetration stat upgrades your max drone cap.");
          }, 13000);
          l9(false);
        }
      }
    }
    var WI = [];
    function WE() {
      return new Promise(function (AS) {
        fetch("/changelog.txt").then(function (AU) {
          return AU.text();
        }).then(function (AU) {
          (function (AP) {
            var AR = "";
            for (var AQ = ("CHANGELOG - " + (WI = AP.split("\n\r\n"))[0]).split("\n"), AB = 0; AB < AQ.length; AB++) {
              if (!AQ[AB].startsWith("    ")) {
                AR += AR == "" ? AQ[AB] : "<br />" + AQ[AB];
              }
            }
            var AG = document.getElementById("changelog");
            AG.children[0].innerHTML = AR.replace(/\n/g, "<br />");
            AG.classList.remove("hide");
            var AT = document.getElementById("subtitle");
            AT.textContent = WI[0].split("-", 1)[0].trim();
            AT.classList.remove("hide");
            AR = "";
            for (var AX = 0; AX < WI.length; AX++) {
              if (AR != "") {
                AR += "<br /><br /><hr />";
              }
              for (var AF = WI[AX].split("\n"), Az = 0; Az < AF.length; Az++) {
                var Aj = 0;
                var S0 = "";
                for (Aj = 0; AF[Az].startsWith("    ", Aj * 4); Aj++) {
                  S0 += "&emsp;&emsp;";
                }
                if (Az == 0) {
                  AR += "<h3>";
                } else if (AR != "" && Az != 1) {
                  AR += "<br />";
                }
                AR += S0 + AF[Az];
                if (Az == 0) {
                  AR += "</h3>";
                }
              }
            }
            document.getElementById("full-changelog").children[0].children[2].innerHTML = AR.replace(/\n/g, "<br />");
          })(AU.replace(/\r?\n/g, "\r\n"));
          AS();
        });
      });
    }
    var WK = [{
      id: "scenexe-io_970x250",
      minWidth: 1404,
      minHeight: 1040,
      deathScreen: false
    }, {
      id: "scenexe-io_300x600",
      minWidth: 1877.2,
      minHeight: 910,
      deathScreen: true
    }];
    function Wk() {
      window.usingAdBlocker = false;
      fetch("https://api.adinplay.com").catch(function (AS) {
        window.usingAdBlocker = true;
      }).finally(function () {
        if (window.usingAdBlocker) {
          console.log("Ad blocker detected.");
          if (!AL("ad_blocker") && !pL) {
            lZ("Please disable your ad blocker", "Ads support the game and allow it to keep updating and expanding.");
            AV("ad_blocker", true);
          }
        }
      });
    }
    function WH() {
      try {
        WK.forEach(function (AS) {
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(AS.id);
          });
        });
      } catch (AS) {
        console.log("Error when refreshing ads:", AS);
      }
    }
    function WZ() {
      try {
        WK.forEach(function (AS) {
          var AU = document.getElementById(AS.id);
          AU.classList.remove("hide");
          var AP = Math.min(window.innerWidth / AS.minWidth, 1);
          var AR = Math.min(window.innerHeight / AS.minHeight, 1);
          var AQ = Math.min(AP, AR);
          var AB = AU.classList.contains("ad-bottom");
          AU.classList.contains("ad-right");
          AU.style.transform = `translate${AB ? "X" : "Y"}(-50%) scale(${AQ})`;
          if (!AS.deathScreen && q7 == 1) {
            AU.classList.add("hide");
          }
        });
      } catch (AS) {
        console.log("Error when updating ads:", AS);
      }
    }
    window.addEventListener("resize", (0, i8.debounce)(40, function () {
      WZ();
    }));
    var WM = document.getElementById("captcha");
    var WJ = null;
    var WD = null;
    function WN(AS) {
      WD = AS;
      if (WJ == null) {
        WJ = hcaptcha.render(WM, {
          sitekey: "2e209116-4e8b-4a05-956c-a6b79e1d3103",
          callback: WY
        });
      } else {
        hcaptcha.reset(WJ);
      }
    }
    function WY() {
      if (WD) {
        WD(hcaptcha.getResponse(WJ));
      }
    }
    function WO() {
      var AS = Math.min(window.innerWidth, window.innerHeight) / 100 * 40;
      WM.style.transform = `scale(${AS / 303}) translateY(-55%)`;
    }
    function WW(AS) {
      WW = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (AU) {
        return typeof AU;
      } : function (AU) {
        if (AU && typeof Symbol == "function" && AU.constructor === Symbol && AU !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof AU;
        }
      };
      return WW(AS);
    }
    function Wq() {
      Wq = function () {
        return AS;
      };
      var AS = {};
      var AU = Object.prototype;
      var AP = AU.hasOwnProperty;
      var AR = Object.defineProperty || function (SH, SZ, SM) {
        SH[SZ] = SM.value;
      };
      var AQ = typeof Symbol == "function" ? Symbol : {};
      var AB = AQ.iterator || "@@iterator";
      var AG = AQ.asyncIterator || "@@asyncIterator";
      var AT = AQ.toStringTag || "@@toStringTag";
      function AX(SH, SZ, SM) {
        Object.defineProperty(SH, SZ, {
          value: SM,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return SH[SZ];
      }
      try {
        AX({}, "");
      } catch (SH) {
        AX = function (SZ, SM, SJ) {
          return SZ[SM] = SJ;
        };
      }
      function AF(SZ, SM, SJ, SD) {
        var SN = SM && SM.prototype instanceof S0 ? SM : S0;
        var SY = Object.create(SN.prototype);
        var SO = new SI(SD || []);
        AR(SY, "_invoke", {
          value: S9(SZ, SJ, SO)
        });
        return SY;
      }
      function Az(SZ, SM, SJ) {
        try {
          return {
            type: "normal",
            arg: SZ.call(SM, SJ)
          };
        } catch (SD) {
          return {
            type: "throw",
            arg: SD
          };
        }
      }
      AS.wrap = AF;
      var Aj = {};
      function S0() {}
      function S1() {}
      function S2() {}
      var S3 = {};
      AX(S3, AB, function () {
        return this;
      });
      var S4 = Object.getPrototypeOf;
      var S5 = S4 && S4(S4(SE([])));
      if (S5 && S5 !== AU && AP.call(S5, AB)) {
        S3 = S5;
      }
      var S6 = S2.prototype = S0.prototype = Object.create(S3);
      function S7(SZ) {
        ["next", "throw", "return"].forEach(function (SM) {
          AX(SZ, SM, function (SJ) {
            return this._invoke(SM, SJ);
          });
        });
      }
      function S8(SZ, SM) {
        function SJ(SN, SY, SO, SW) {
          var Sq = Az(SZ[SN], SZ, SY);
          if (Sq.type !== "throw") {
            var SA = Sq.arg;
            var SS = SA.value;
            if (SS && WW(SS) == "object" && AP.call(SS, "__await")) {
              return SM.resolve(SS.__await).then(function (SU) {
                SJ("next", SU, SO, SW);
              }, function (SU) {
                SJ("throw", SU, SO, SW);
              });
            } else {
              return SM.resolve(SS).then(function (SU) {
                SA.value = SU;
                SO(SA);
              }, function (SU) {
                return SJ("throw", SU, SO, SW);
              });
            }
          }
          SW(Sq.arg);
        }
        var SD;
        AR(this, "_invoke", {
          value: function (SN, SY) {
            function SO() {
              return new SM(function (SW, Sq) {
                SJ(SN, SY, SW, Sq);
              });
            }
            return SD = SD ? SD.then(SO, SO) : SO();
          }
        });
      }
      function S9(SZ, SM, SJ) {
        var SD = "suspendedStart";
        return function (SN, SY) {
          if (SD === "executing") {
            throw new Error("Generator is already running");
          }
          if (SD === "completed") {
            if (SN === "throw") {
              throw SY;
            }
            return SK();
          }
          SJ.method = SN;
          SJ.arg = SY;
          while (true) {
            var SO = SJ.delegate;
            if (SO) {
              var SW = SC(SO, SJ);
              if (SW) {
                if (SW === Aj) {
                  continue;
                }
                return SW;
              }
            }
            if (SJ.method === "next") {
              SJ.sent = SJ._sent = SJ.arg;
            } else if (SJ.method === "throw") {
              if (SD === "suspendedStart") {
                SD = "completed";
                throw SJ.arg;
              }
              SJ.dispatchException(SJ.arg);
            } else if (SJ.method === "return") {
              SJ.abrupt("return", SJ.arg);
            }
            SD = "executing";
            var Sq = Az(SZ, SM, SJ);
            if (Sq.type === "normal") {
              SD = SJ.done ? "completed" : "suspendedYield";
              if (Sq.arg === Aj) {
                continue;
              }
              return {
                value: Sq.arg,
                done: SJ.done
              };
            }
            if (Sq.type === "throw") {
              SD = "completed";
              SJ.method = "throw";
              SJ.arg = Sq.arg;
            }
          }
        };
      }
      function SC(SZ, SM) {
        var SJ = SM.method;
        var SD = SZ.iterator[SJ];
        if (SD === undefined) {
          SM.delegate = null;
          if (SJ !== "throw" || !SZ.iterator.return || !(SM.method = "return", SM.arg = undefined, SC(SZ, SM), SM.method === "throw")) {
            if (SJ !== "return") {
              SM.method = "throw";
              SM.arg = new TypeError("The iterator does not provide a '" + SJ + "' method");
            }
          }
          return Aj;
        }
        var SN = Az(SD, SZ.iterator, SM.arg);
        if (SN.type === "throw") {
          SM.method = "throw";
          SM.arg = SN.arg;
          SM.delegate = null;
          return Aj;
        }
        var SY = SN.arg;
        if (SY) {
          if (SY.done) {
            SM[SZ.resultName] = SY.value;
            SM.next = SZ.nextLoc;
            if (SM.method !== "return") {
              SM.method = "next";
              SM.arg = undefined;
            }
            SM.delegate = null;
            return Aj;
          } else {
            return SY;
          }
        } else {
          SM.method = "throw";
          SM.arg = new TypeError("iterator result is not an object");
          SM.delegate = null;
          return Aj;
        }
      }
      function SV(SZ) {
        var SM = {
          tryLoc: SZ[0]
        };
        if (1 in SZ) {
          SM.catchLoc = SZ[1];
        }
        if (2 in SZ) {
          SM.finallyLoc = SZ[2];
          SM.afterLoc = SZ[3];
        }
        this.tryEntries.push(SM);
      }
      function SL(SZ) {
        var SM = SZ.completion || {};
        SM.type = "normal";
        delete SM.arg;
        SZ.completion = SM;
      }
      function SI(SZ) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        SZ.forEach(SV, this);
        this.reset(true);
      }
      function SE(SZ) {
        if (SZ) {
          var SM = SZ[AB];
          if (SM) {
            return SM.call(SZ);
          }
          if (typeof SZ.next == "function") {
            return SZ;
          }
          if (!isNaN(SZ.length)) {
            var SJ = -1;
            var SD = function SN() {
              while (++SJ < SZ.length) {
                if (AP.call(SZ, SJ)) {
                  SN.value = SZ[SJ];
                  SN.done = false;
                  return SN;
                }
              }
              SN.value = undefined;
              SN.done = true;
              return SN;
            };
            return SD.next = SD;
          }
        }
        return {
          next: SK
        };
      }
      function SK() {
        return {
          value: undefined,
          done: true
        };
      }
      S1.prototype = S2;
      AR(S6, "constructor", {
        value: S2,
        configurable: true
      });
      AR(S2, "constructor", {
        value: S1,
        configurable: true
      });
      S1.displayName = AX(S2, AT, "GeneratorFunction");
      AS.isGeneratorFunction = function (SZ) {
        var SM = typeof SZ == "function" && SZ.constructor;
        return !!SM && (SM === S1 || (SM.displayName || SM.name) === "GeneratorFunction");
      };
      AS.mark = function (SZ) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(SZ, S2);
        } else {
          SZ.__proto__ = S2;
          AX(SZ, AT, "GeneratorFunction");
        }
        SZ.prototype = Object.create(S6);
        return SZ;
      };
      AS.awrap = function (SZ) {
        return {
          __await: SZ
        };
      };
      S7(S8.prototype);
      AX(S8.prototype, AG, function () {
        return this;
      });
      AS.AsyncIterator = S8;
      AS.async = function (SZ, SM, SJ, SD, SN = Promise) {
        var SY = new S8(AF(SZ, SM, SJ, SD), SN);
        if (AS.isGeneratorFunction(SM)) {
          return SY;
        } else {
          return SY.next().then(function (SO) {
            if (SO.done) {
              return SO.value;
            } else {
              return SY.next();
            }
          });
        }
      };
      S7(S6);
      AX(S6, AT, "Generator");
      AX(S6, AB, function () {
        return this;
      });
      AX(S6, "toString", function () {
        return "[object Generator]";
      });
      AS.keys = function (SZ) {
        var SM = Object(SZ);
        var SJ = [];
        for (var SD in SM) {
          SJ.push(SD);
        }
        SJ.reverse();
        return function SN() {
          while (SJ.length) {
            var SY = SJ.pop();
            if (SY in SM) {
              SN.value = SY;
              SN.done = false;
              return SN;
            }
          }
          SN.done = true;
          return SN;
        };
      };
      AS.values = SE;
      SI.prototype = {
        constructor: SI,
        reset: function (SZ) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(SL);
          if (!SZ) {
            for (var SM in this) {
              if (SM.charAt(0) === "t" && AP.call(this, SM) && !isNaN(+SM.slice(1))) {
                this[SM] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var SZ = this.tryEntries[0].completion;
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          return this.rval;
        },
        dispatchException: function (SZ) {
          if (this.done) {
            throw SZ;
          }
          var SM = this;
          function SJ(Sq, SA) {
            SY.type = "throw";
            SY.arg = SZ;
            SM.next = Sq;
            if (SA) {
              SM.method = "next";
              SM.arg = undefined;
            }
            return !!SA;
          }
          for (var SD = this.tryEntries.length - 1; SD >= 0; --SD) {
            var SN = this.tryEntries[SD];
            var SY = SN.completion;
            if (SN.tryLoc === "root") {
              return SJ("end");
            }
            if (SN.tryLoc <= this.prev) {
              var SO = AP.call(SN, "catchLoc");
              var SW = AP.call(SN, "finallyLoc");
              if (SO && SW) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              } else if (SO) {
                if (this.prev < SN.catchLoc) {
                  return SJ(SN.catchLoc, true);
                }
              } else {
                if (!SW) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < SN.finallyLoc) {
                  return SJ(SN.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (SZ, SM) {
          for (var SJ = this.tryEntries.length - 1; SJ >= 0; --SJ) {
            var SD = this.tryEntries[SJ];
            if (SD.tryLoc <= this.prev && AP.call(SD, "finallyLoc") && this.prev < SD.finallyLoc) {
              var SN = SD;
              break;
            }
          }
          if (SN && (SZ === "break" || SZ === "continue") && SN.tryLoc <= SM && SM <= SN.finallyLoc) {
            SN = null;
          }
          var SY = SN ? SN.completion : {};
          SY.type = SZ;
          SY.arg = SM;
          if (SN) {
            this.method = "next";
            this.next = SN.finallyLoc;
            return Aj;
          } else {
            return this.complete(SY);
          }
        },
        complete: function (SZ, SM) {
          if (SZ.type === "throw") {
            throw SZ.arg;
          }
          if (SZ.type === "break" || SZ.type === "continue") {
            this.next = SZ.arg;
          } else if (SZ.type === "return") {
            this.rval = this.arg = SZ.arg;
            this.method = "return";
            this.next = "end";
          } else if (SZ.type === "normal" && SM) {
            this.next = SM;
          }
          return Aj;
        },
        finish: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.finallyLoc === SZ) {
              this.complete(SJ.completion, SJ.afterLoc);
              SL(SJ);
              return Aj;
            }
          }
        },
        catch: function (SZ) {
          for (var SM = this.tryEntries.length - 1; SM >= 0; --SM) {
            var SJ = this.tryEntries[SM];
            if (SJ.tryLoc === SZ) {
              var SD = SJ.completion;
              if (SD.type === "throw") {
                var SN = SD.arg;
                SL(SJ);
              }
              return SN;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (SZ, SM, SJ) {
          this.delegate = {
            iterator: SE(SZ),
            resultName: SM,
            nextLoc: SJ
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return Aj;
        }
      };
      return AS;
    }
    function WA(AS, AU) {
      var AP = typeof Symbol != "undefined" && AS[Symbol.iterator] || AS["@@iterator"];
      if (!AP) {
        if (Array.isArray(AS) || (AP = function (AX, AF) {
          if (!AX) {
            return;
          }
          if (typeof AX == "string") {
            return WS(AX, AF);
          }
          var Az = Object.prototype.toString.call(AX).slice(8, -1);
          if (Az === "Object" && AX.constructor) {
            Az = AX.constructor.name;
          }
          if (Az === "Map" || Az === "Set") {
            return Array.from(AX);
          }
          if (Az === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Az)) {
            return WS(AX, AF);
          }
        }(AS)) || AU && AS && typeof AS.length == "number") {
          if (AP) {
            AS = AP;
          }
          var AR = 0;
          function AQ() {}
          return {
            s: AQ,
            n: function () {
              if (AR >= AS.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: AS[AR++]
                };
              }
            },
            e: function (AX) {
              throw AX;
            },
            f: AQ
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var AB;
      var AG = true;
      var AT = false;
      return {
        s: function () {
          AP = AP.call(AS);
        },
        n: function () {
          var AX = AP.next();
          AG = AX.done;
          return AX;
        },
        e: function (AX) {
          AT = true;
          AB = AX;
        },
        f: function () {
          try {
            if (!AG && AP.return != null) {
              AP.return();
            }
          } finally {
            if (AT) {
              throw AB;
            }
          }
        }
      };
    }
    function WS(AS, AU) {
      if (AU == null || AU > AS.length) {
        AU = AS.length;
      }
      for (var AP = 0, AR = new Array(AU); AP < AU; AP++) {
        AR[AP] = AS[AP];
      }
      return AR;
    }
    function WU(AS, AU, AP, AR, AQ, AB, AG) {
      try {
        var AT = AS[AB](AG);
        var AX = AT.value;
      } catch (AF) {
        AP(AF);
        return;
      }
      if (AT.done) {
        AU(AX);
      } else {
        Promise.resolve(AX).then(AR, AQ);
      }
    }
    function WP(AS) {
      return function () {
        var AU = this;
        var AP = arguments;
        return new Promise(function (AR, AQ) {
          var AB = AS.apply(AU, AP);
          function AG(AX) {
            WU(AB, AR, AQ, AG, AT, "next", AX);
          }
          function AT(AX) {
            WU(AB, AR, AQ, AG, AT, "throw", AX);
          }
          AG(undefined);
        });
      };
    }
    window.addEventListener("resize", (0, i8.debounce)(40, function () {
      WO();
    }));
    WO();
    var WR = document.getElementById("chat");
    var WQ = document.getElementById("chat-input");
    var WB = document.getElementById("quick-chat-button");
    var WG = WB.children[0];
    var WT = false;
    var serversList = [];
    var WF = [];
    var Wz = {};
    var Wj = [];
    var r0 = false;
    var r1 = false;
    var currentServerId = 0;
    var r3 = 0;
    var r4 = 0;
    var r5 = window.location.origin;
    function setCurrentServerId(AS) {
      currentServerId = AS;
    }
    var r7 = [];
    var r8 = [];
    var r9 = -1;
    var rC = 0;
    var rV = false;
    function rL(AS) {
      rV = AS;
    }
    var rI = document.getElementById("game-over-killer");
    var rE = document.getElementById("game-over-stats");
    var rK = document.getElementById("game-over");
    var rH = document.getElementById("overlay-canvas");
    document.getElementById("continue-button");
    var rZ = document.getElementById("full-changelog");
    var rM = document.getElementById("button-settings");
    var rJ = document.getElementById("form-loading");
    var rD = document.getElementById("form-error");
    var rN = document.getElementById("button-feedback");
    var rY = document.getElementById("button-bugs");
    var rO = document.getElementById("submit");
    var rW = document.getElementById("cancel");
    var rq = document.getElementById("popup-input");
    var rA = document.getElementById("popup-input-small");
    var rS = document.getElementById("popup");
    var rU = document.getElementById("popup-title");
    var rP = document.getElementById("popup-subtitle");
    var rR = document.getElementById("connecting-text");
    var rQ = document.getElementById("full-connecting-text");
    var rB = document.getElementById("play-menu");
    var rG = document.getElementById("respawn-text");
    var rT = document.getElementById("play-menu-wrapper");
    var rX = document.getElementById("main-menu");
    var rF = document.getElementById("play-button");
    var rz = document.getElementById("background");
    var rj = document.getElementById("display-name-input");
    var q0 = document.getElementById("ads");
    var q1 = document.getElementById("server-select-dropdown");
    var q2 = document.getElementById("server-select-dropdown-visual");
    var q3 = document.getElementById("server-select-dropdown-visual-shadow");
    var q4 = document.getElementById("server-select-dropdown-visual-text");
    q1.addEventListener("change", function () {
      currentServerId = q1.selectedIndex;
      qq(true, nE(), false);
    });
    WB.onclick = function () {
      if (!wL) {
        wZ();
      }
    };
    WQ.onfocus = function () {
      qP();
    };
    var q5 = false;
    WQ.onblur = function (AS) {
      if (q5) {
        q5 = false;
      } else {
        pG(false);
      }
    };
    var q6 = false;
    WQ.onkeydown = function (AS) {
      if (!AS.repeat) {
        q6 = true;
      }
      if (q6) {
        pG(true);
      } else {
        AS.preventDefault();
      }
    };
    var q7 = 2;
    function q8(AS) {
      q7 = AS;
    }
    function q9(AS = false) {
      if (AS) {
        Jk();
        if (WT = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          requestFullScreen();
          if (!AL("mobile_unsupported") && !pL) {
            lZ("Mobile support is experimental", "Some features may not work properly on this device.");
            AV("mobile_unsupported", true);
          }
        }
        var AU = AL("username");
        if (AU) {
          rj.value = AU;
        }
        window.addEventListener("keydown", A8);
        document.body.oncontextmenu = function (AP) {
          return AP.target != DK || q7 != 0;
        };
        WQ.style.display = "";
        WB.style.display = "";
        N9();
        wK(JSON.parse(AL("quick_chat")) || []);
        eU();
      }
      lO();
      Array.from(document.getElementsByClassName("hud")).forEach(function (AP) {
        AP.classList.add("hidden");
      });
      rX.classList.remove("hidden");
      rz.classList.remove("hide");
      q0.classList.remove("hidden");
      rR.classList.remove("hide");
      rB.classList.add("hide");
      WM.classList.add("hide");
      rF.onclick = function () {
        onPlayButtonClicked();
      };
      rM.onclick = function () {
        EE();
      };
      WH();
      WZ();
      document.getElementById("full-changelog-link").onclick = function () {
        qQ();
        return false;
      };
      document.getElementById("exit-changelog").onclick = function () {
        qB();
      };
      document.getElementById("apply-settings").onclick = function () {
        EM(true);
      };
      document.getElementById("cancel-settings").onclick = function () {
        EM();
      };
      rY.onclick = function () {
        qG(1);
      };
      rN.onclick = function () {
        qG(2);
      };
      rW.onclick = function () {
        qG(0);
      };
      rO.onclick = function () {
        qj();
      };
      if (AS) {
        EK(JSON.parse(AL("settings")) || {}, JSON.parse(AL("keybinds")) || {});
        WE();
        Wk();
        N0();
        ZZ({});
        ZI();
      }
    }
    function requestFullScreen() {
      try {
        if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      } catch (AS) {}
    }
    q9(true);
    var qV = false;
    var qL = "";
    function qI(AS) {
      true;
      rR.classList.add("hide");
      rB.classList.add("hide");
      WM.classList.remove("hide");
      WN(function (AU) {
        AS(AU);
        rR.classList.remove("hide");
        WM.classList.add("hide");
        false;
      });
    }
    function connectedToGameServer(AS) {
      qV = true;
      qL = AS;
      rR.classList.add("hide");
      rB.classList.remove("hide");
      WM.classList.add("hide");
      rQ.classList.add("hide");
      rT.classList.remove("hide");
      if (!eT) {
        rG.textContent = "";
      }
      if (!WT) {
        rj.focus();
      }
      if (eG != "" && !eT) {
        qG(0);
        qB();
        EM();
        wH();
        w1();
        onPlayButtonClicked();
      }
    }
    window.connectedToGameServer = connectedToGameServer;
    function qK(AS = "") {
      true;
      eR(false);
      document.getElementById("disconnect-text").textContent = AS;
      document.getElementById("disconnect-modal").classList.remove("hide");
      document.getElementById("reconnect-button").onclick = function () {
        window.location.reload();
      };
    }
    function qk(AS = "") {
      var AU = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      eU(AU);
      qV = false;
      kX();
      NJ();
      lW();
      if (q7 != 1 && q7 != 3) {
        q7 = 2;
      }
      WZ();
      if (eG) {
        rQ.textContent = AS == "" ? "Connecting..." : AS;
        rQ.classList.remove("hide");
        rT.classList.add("hide");
      }
      rR.classList.remove("hide");
      rB.classList.add("hide");
      rK.classList.add("hide");
      rH.classList.add("hide");
      if (q7 != 3) {
        q9();
      }
      if (eT) {
        rK.classList.remove("hide");
        rH.classList.remove("hide");
        rX.classList.add("hidden");
        q7 = 1;
      }
    }
    window.qk = qk;
    function onRecievedServers(AS, AU) {
      if (AS.length == 0) {
        if (q7 != 2) {
          console.log("No servers found, ignoring because in-game.");
          return;
        }
        qK("No servers found. The game may be updating.");
        console.log("No servers found.");
      }
      serversList = AS;
      WF = [];
      Wz = {};
      Wj = [];
      var AP = "";
      var AR = 0;
      var AQ = 0;
      for (var AB = 0; AB < serversList.length; AB++) {
        var AG = serversList[AB];
        AR += AG.players;
        AQ += AG.spectators;
        if (!WF.includes(AG.gamemode)) {
          WF.push(AG.gamemode);
        }
        if (!Wj.includes(AG.region)) {
          Wj.push(AG.region);
        }
        Wz[AG.gamemode] ||= [];
        if (!Wz[AG.gamemode].includes(AG.region)) {
          Wz[AG.gamemode].push(AG.region);
        }
        AP += `<option style="background-color:${getColorFromCode(AG.gamemode)}" value="${AB}">${getNameFromCode(AG.gamemode)} - ${AG.region} - ${AG.players} player${AG.players == 1 ? "" : "s"}</option>`;
      }
      q1.innerHTML = AP;
      r0 = WF.length > 1;
      var AT;
      var AX;
      var AF = -1;
      for (var Az = 0; Az < serversList.length; Az++) {
        if (serversList[Az].address == qL) {
          AF = Az;
        }
      }
      if (AF == -1) {
        var Aj = AL("gamemode");
        var S0 = AL("region");
        var S1 = qN(Aj, S0);
        if (serversList[S1] && Aj != null && S0 != null) {
          var S2 = serversList[S1];
          currentServerId = S1;
          r3 = WF.indexOf(S2.gamemode);
          r4 = Wz[S2.gamemode].indexOf(S2.region);
        } else {
          var S3 = 1e+200;
          var S4 = 0;
          for (var S5 = 0; S5 < serversList.length; S5++) {
            var S6 = serversList[S5];
            if (S6.players < S3) {
              S3 = S6.players;
              S4 = S5;
            }
          }
          var S7 = serversList[S4];
          currentServerId = S4;
          if (S7) {
            r3 = WF.indexOf(S7.gamemode);
            r4 = Wz[S7.gamemode].indexOf(S7.region);
          }
        }
      } else {
        currentServerId = AF;
      }
      AT = AR;
      AX = AQ;
      pC.players = AT;
      pC.spectators = AX;
      qq(!qV && AU);
    }
    window.onRecievedServers = onRecievedServers;
    function qZ() {
      if (r3 == WF.length - 1) {
        r3 = 0;
      } else {
        r3++;
      }
      qq(true, 1);
    }
    function qM() {
      if (r3 == 0) {
        r3 = WF.length - 1;
      } else {
        r3--;
      }
      qq(true, -1);
    }
    window.qM = qM;
    window.qZ = qZ;
    window.qq = qq;
    function qJ() {
      if (r4 == Wz[WF[r3]].length - 1) {
        r4 = 0;
      } else {
        r4++;
      }
      qq(true, 1);
    }
    function qD() {
      if (r4 == 0) {
        r4 = Wz[WF[r3]].length - 1;
      } else {
        r4--;
      }
      qq(true, -1);
    }
    function qN(AS, AU) {
      var AP = [];
      var AR = [];
      for (var AQ = 0; AQ < serversList.length; AQ++) {
        if (serversList[AQ].gamemode == AS) {
          AR.push(AQ);
        }
      }
      if (AR.length == 1) {
        return AR[0];
      }
      if (AR.length == 0) {
        return 0;
      }
      AP = AR;
      AR = [];
      for (var AB = 0, AG = AP; AB < AG.length; AB++) {
        var AT = AG[AB];
        if (serversList[AT].region == AU) {
          AR.push(AT);
        }
      }
      if (AR.length == 1) {
        return AR[0];
      } else if (AR.length == 0) {
        return AP.sort(function (AX, AF) {
          return serversList[AX].players - serversList[AF].players;
        })[0];
      } else {
        return AR.sort(function (AX, AF) {
          return serversList[AX].players - serversList[AF].players;
        })[0];
      }
    }
    var qY = null;
    function qO(AS, AU = 1) {
      if (AS != r4) {
        r4 = AS;
        qq(true, AU);
      }
    }
    function qW(AS, AU = 1) {
      if (AS != r3) {
        r3 = AS;
        qq(true, AU);
      }
    }
    function qq() {
      var AS = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      var AU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var AP = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      var AR = qY;
      qY ||= serversList[currentServerId];
      if (AP) {
        currentServerId = qN(WF[r3], (Wz[WF[r3]] || {})[r4]);
      }
      var AQ = serversList[currentServerId];
      if (!AQ) {
        q4.innerText = "Connecting...";
        q2.style.backgroundColor = "#c0c0c0";
        q3.style.backgroundColor = NP("#c0c0c0");
        return;
      }
      q1.selectedIndex = currentServerId;
      q4.innerText = q1.options[currentServerId].innerText;
      q2.style.backgroundColor = getColorFromCode(serversList[currentServerId].gamemode);
      q3.style.backgroundColor = NP(getColorFromCode(serversList[currentServerId].gamemode));
      var AB = qY.gamemode != AQ.gamemode;
      var AG = qY.region != AQ.region;
      if (!AR) {
        AB = true;
        AG = true;
      }
      r3 = WF.indexOf(AQ.gamemode);
      r4 = Wz[AQ.gamemode].indexOf(AQ.region);
      r1 = Wz[AQ.gamemode].length > 1;
      AV("gamemode", AQ.gamemode);
      AV("region", AQ.region);
      if (AQ && q7 >= 2 && AS) {
        if (AB) {
          D3(AQ.gamemode, AU);
        }
        if (AG) {
          D4(qY.region, AU);
        }
        eX();
        eB(AQ.address);
      }
      qY = AQ;
    }
    function getColorFromCode(AS) {
      return i9.b[AS] || i9.k[0];
    }
    function getNameFromCode(AS) {
      return i9.l[AS] || "???";
    }
    function onPlayButtonClicked(a) {
      if(window.start) {
        a = true
      }
      try {
        window.start()
      } catch(e) {}
      if(a !== true) { a = false }
      if (q7 == 2 || a) {
        if (a || (rC == 0 && qV && !rV)) {
          rj.blur();
          N4();
          k6 = false;
          k7 = false;
          k8 = false;
          kC = false;
          if (WT) {
            requestFullScreen();
          }
          W0(rj.value);
          lW();
          AV("username", rj.value);
          rX.classList.add("hidden");
          rz.classList.add("hide");
          q0.classList.add("hidden");
          lO();
          window.onbeforeunload = function () {
            return "Leaving now may result in lost progress.";
          };
          tq = false;
          NZ = true;
          NM = 0;
          if (editmode) {
            EG.classList.remove("hidden");
          }
          N9();
          setTimeout(function () {
            N9();
          }, 100);
          q7 = 0;
          setTimeout(function () {
            if (!AL("tut_move") && !pL && !WT) {
              addNotification("Press the WASD or arrow keys to move.");
              AV("tut_move", true);
            }
          }, 1000);
          eX();
        }
        if (WT) {
          requestFullScreen();
        }
      } else if (q7 == 1) {
        rK.classList.add("hide");
        rH.classList.add("hide");
        rX.classList.remove("hidden");
        if (!WT) {
          rj.focus();
        }
        q7 = 2;
        WZ();
      } else if (q7 == 0) {
        if (w8) {
          w2.click();
        } else if (EV.showChat && tY) {
          if (WQ === document.activeElement) {
            var AS = WQ.value.trim();
            if (AS != "") {
              r7.push(WQ.value);
              W3(AS);
              if (!AS.startsWith("/")) {
                q5 = true;
              }
            }
            WQ.blur();
            WQ.value = "";
            r9 = -1;
          } else {
            qP();
          }
        }
      }
    }
    window.onPlayButtonClicked = onPlayButtonClicked;
    function qP() {
      WQ.focus();
      kT();
      kq();
      kS();
      r9 = -1;
      q6 = false;
      pG(true);
    }
    var qR = false;
    function qQ() {
      rZ.classList.remove("hide");
      rV = true;
      A3("changelog");
      A6("changelog");
      qR = true;
    }
    function qB() {
      rZ.classList.add("hide");
      rV = false;
      A4();
      A5();
      qR = false;
    }
    function qG(AS) {
      rC = AS;
      if (AS == 0) {
        rS.classList.add("hide");
        A4();
        A5();
      } else {
        rS.classList.remove("hide");
        rD.textContent = "";
        rJ.classList.add("hide");
        rq.value = "";
        rA.value = "";
        var AU = AS == 2 ? "Submit Feedback" : "Report Bug";
        var AP = AS == 2 ? "Feedback:" : "Explain the bug in detail:";
        rU.textContent = AU;
        rP.textContent = AP;
        A3(AS == 2 ? "submit feedback" : "report bug");
        A6(AS == 2 ? "submit-feedback" : "report-bug");
      }
    }
    var qT;
    var qX;
    var qF;
    var qz = false;
    function qj() {
      return A0.apply(this, arguments);
    }
    function A0() {
      return (A0 = WP(Wq().mark(function AS() {
        var AU;
        var AP;
        var AR;
        var AQ;
        return Wq().wrap(function (AB) {
          while (true) {
            switch (AB.prev = AB.next) {
              case 0:
                if (!qz) {
                  AB.next = 2;
                  break;
                }
                return AB.abrupt("return");
              case 2:
                if (rC == 0) {
                  AB.next = 27;
                  break;
                }
                rD.textContent = "";
                if (rq.value.trim() != "") {
                  AB.next = 7;
                  break;
                }
                rD.textContent = "Enter a message.";
                return AB.abrupt("return");
              case 7:
                AU = "Unknown OS";
                if (navigator.userAgent.indexOf("Win") != -1) {
                  AU = "Windows";
                }
                if (navigator.userAgent.indexOf("Mac") != -1) {
                  AU = "MacOS";
                }
                if (navigator.userAgent.indexOf("Linux") != -1) {
                  AU = "Linux";
                }
                if (navigator.userAgent.indexOf("Android") != -1) {
                  AU = "Android";
                }
                if (navigator.userAgent.indexOf("like Mac") != -1) {
                  AU = "iOS";
                }
                if (navigator.userAgent.indexOf("CrOS") != -1) {
                  AU = "ChromeOS";
                }
                AP = "Unknown Browser";
                if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
                  AP = "Opera";
                } else if (navigator.userAgent.indexOf("Edg") != -1) {
                  AP = "Edge";
                } else if (navigator.userAgent.indexOf("Chrome") != -1) {
                  AP = "Chrome";
                } else if (navigator.userAgent.indexOf("Safari") != -1) {
                  AP = "Safari";
                } else if (navigator.userAgent.indexOf("Firefox") != -1) {
                  AP = "Firefox";
                } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == 1) {
                  AP = "Internet Explorer";
                }
                AR = {
                  type: rC,
                  content: rq.value.trim(),
                  extraInfo: rA.value.trim(),
                  username: rj.value.trim(),
                  server: eO,
                  hub: r5,
                  browser: AP,
                  os: AU,
                  userAgent: navigator.userAgent
                };
                rJ.classList.remove("hide");
                qz = true;
                AB.next = 21;
                return e6(r5 + "/api/feedback", {
                  data: nq((0, iC.JQ)(eN(AR)))
                });
              case 21:
                AQ = AB.sent;
                rJ.classList.add("hide");
                qz = false;
                if (!AQ.error) {
                  AB.next = 27;
                  break;
                }
                rD.textContent = AQ.error;
                return AB.abrupt("return");
              case 27:
                qG(0);
              case 28:
              case "end":
                return AB.stop();
            }
          }
        }, AS);
      }))).apply(this, arguments);
    }
    function A1(AS) {
      return "aeiouAEIOU".indexOf(AS[0]) !== -1;
    }
    function A2(AS) {
      if (AS == null) {
        return undefined;
      } else {
        return AS.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
    }
    function A3(AS) {
      document.title = `${AS} - scenexe.io`;
    }
    function A4() {
      document.title = "scenexe.io";
    }
    function A5() {
      qT = undefined;
      if (window.location.hash != null && window.location.href.indexOf("#") != -1) {
        if (q7 == 2) {
          history.pushState({}, document.title, ".");
        } else {
          history.replaceState({}, document.title, ".");
        }
      }
    }
    function A6(AS, AU = false) {
      AS = AS.replace("#", "");
      if (!AU) {
        qT = "#" + AS;
      }
      window.location.hash = AS;
    }
    function A7(AS) {
      l1(false);
      EM();
      wH();
      w1();
      (function (AT) {
        tW = lS(AT);
        for (var AX = 0; AX < tW.gadgets.length; AX++) {
          var AF = tW.gadgets[AX];
          AF.animTime = 0;
          if (AF.type == 2) {
            AF.enabled = true;
          }
        }
        for (var Az = 0; Az < tW.barrels.length; Az++) {
          tW.barrels[Az].animTime = 0;
        }
      })(AS.lastTank);
      pG(false);
      eU(!AS.server);
      if (AS.stars) {
        JE(AS.stars);
      }
      var AU = function (AT) {
        var AX = 1;
        for (var AF = 100; AT > AF;) {
          AT -= AF;
          AF *= 1.2;
          AX++;
        }
        return AX;
      }(AS.respawnXP);
      rG.textContent = AU > 1 ? `You will respawn at level ${AU}` : "";
      if (AS.server) {
        (function (AT, AX) {
          D3(0);
          eO = AT;
          var AF = serversList.findIndex(function (Az) {
            return Az.address === eO;
          });
          if (AF != -1) {
            setCurrentServerId(AF);
            qq(false);
          }
          eT = true;
          eG = AX;
          console.log(`Respawning in server: ${eO}`);
          eq = "Connecting...";
          eR();
        })(AS.server.address, AS.server.key);
      }
      var AP = nI(AS.killers.map(function (AT) {
        if (EV.showNames) {
          if (AT.name != "") {
            return [AT.name, AT.nameColor, false];
          } else {
            return [`an unnamed ${AT.className}`, AT.nameColor, false];
          }
        } else {
          return [`a${A1(AT.className) ? "n" : ""} ${AT.className}`, AT.nameColor, false];
        }
      }));
      AP.unshift(["you were killed by ", 6]);
      var AR;
      var AQ = "";
      var AB = WA((AP = pR(AP)).sections);
      try {
        for (AB.s(); !(AR = AB.n()).done;) {
          var AG = AR.value;
          AQ += `<span style="color: ${NS(0, AG.color, 0, 0)}">${A2(AG.text)}</span>`;
        }
      } catch (AT) {
        AB.e(AT);
      } finally {
        AB.f();
      }
      if (q7 == 0) {
        rI.innerHTML = AQ;
        rE.innerHTML = `
\t\t\t\tLevel ${AS.level} ${A2(tW.className)}
\t\t\t\t<br />
\t\t\t\t<br />
\t\t\t\tTime Played: ${AS.timeAlive}
\t\t\t\t<br />
\t\t\t\tScore: ${AE(AS.score)}
\t\t\t\t<br />
\t\t\t\tKills: ${AS.kills}`;
        q7 = 1;
        document.getElementById("continue-button").onclick = function () {
          onPlayButtonClicked();
        };
        kX();
        NJ();
        rK.classList.remove("hide");
        rH.classList.remove("hide");
        rz.classList.remove("hide");
        q0.classList.remove("hidden");
      } else {
        q7 = 2;
      }
      WZ();
      WH();
    }
    function A8(AS) {
      if (AS.keyCode == EY.enter) {
        onPlayButtonClicked();
      } else if (AS.keyCode == EY.openCommand && q7 == 0 && WQ !== document.activeElement && EV.showChat && tY && !w8) {
        WQ.value = "";
        WQ.focus();
        kT();
        kq();
        kS();
        r9 = -1;
      } else if (AS.keyCode == EY.escape && q7 == 0) {
        if (w8) {
          wH();
          wZ();
        }
        if (Yj) {
          w1();
        }
      }
      if (WQ == document.activeElement) {
        if (AS.keyCode == EY.escape) {
          WQ.blur();
        } else if (AS.keyCode == EY.previousChatMessage) {
          if (r9 < 0) {
            (r8 = [].concat(r7)).push(WQ.value);
            if ((r9 = r8.length - 1) != 0) {
              r9--;
            }
          } else if (r9 != 0) {
            r9--;
          }
          if (!(r9 < 0)) {
            WQ.value = r8[r9];
          }
        } else if (AS.keyCode == EY.nextChatMessage && r9 != -1 && r9 < r8.length - 1) {
          r9++;
          WQ.value = r8[r9];
        }
      }
    }
    function A9(AS) {
      qX ||= document.getElementById("server-select");
      qF ||= document.getElementById("server-select-dropdown-wrapper");
      if (AS) {
        qF.classList.remove("hidden");
        qX.classList.add("high");
      } else {
        qF.classList.add("hidden");
        qX.classList.remove("high");
      }
    }
    function AC(AS) {
      var AU = WT && EV.showQuickChatButton;
      WB.classList.toggle("hidden", !AU);
      if (WR && WQ && (WR.style.right = 10 / AS + "px", WR.style.top = 250 / AS + "px", WQ.style.borderRadius = 5 / AS + "px", WQ.style.padding = 3 / AS + "px", WQ.style.fontSize = 18 / AS + "px", WQ.style.width = (220 - (AU ? 43 : 0)) / AS + "px", WQ.style.height = 33 / AS + "px", AU)) {
        var AP = 3 / AS;
        WB.style.width = 33 / AS + "px";
        WB.style.height = 33 / AS + "px";
        WB.style.borderRadius = 5 / AS + "px";
        WB.style.marginLeft = 10 / AS + "px";
        WB.style.padding = AP + "px";
        WG.style.width = 33 / AS - AP * 2 + "px";
        WG.style.height = 33 / AS - AP * 2 + "px";
      }
    }
    function AV(AS, AU) {
      localStorage.setItem(AS, AU);
    }
    function AL(AS) {
      var AU;
      var AP = localStorage.getItem(AS);
      if (AP == null) {
        var AR = function (AQ) {
          var AB = AQ + "=";
          for (var AG = document.cookie.split(";"), AT = 0; AT < AG.length; AT++) {
            for (var AX = AG[AT]; AX.charAt(0) == " ";) {
              AX = AX.substring(1, AX.length);
            }
            if (AX.indexOf(AB) == 0) {
              return AX.substring(AB.length, AX.length);
            }
          }
          return null;
        }(AS);
        if (AR != null) {
          AV(AS, AP = AR);
          AU = AS;
          document.cookie = AU + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        }
      }
      return AP;
    }
    function AI(AS) {
      localStorage.removeItem(AS);
    }
    function AE(AS) {
      var AU = Math.sign(AS);
      var AP = Math.abs(AS);
      if (Number.isNaN(AS) || AS == null) {
        return "???";
      }
      if (!Number.isFinite(AP)) {
        return (AU == -1 ? "-" : "") + "∞";
      }
      if (AP < 1000) {
        return Math.round(AP * AU).toString();
      }
      if (EV.useScientificNotation) {
        return (AU == -1 ? "-" : "") + AP.toExponential(2);
      }
      var AR = 0;
      while (AP > 999) {
        AR++;
        AP /= 1000;
      }
      return (AU == -1 ? "-" : "") + (AP = nH(AP, AP < 10 ? 2 : AP < 100 ? 1 : 0)).toString() + i9.f[Math.min(AR - 1, i9.f.length - 1)];
    }
    window.onhashchange = function () {
      if (window.location.hash != qT) {
        qT = window.location.hash;
        var AS = window.location.hash;
        if (q7 == 2) {
          if (AS.startsWith("#profile")) {
            var AU = AS.split("/");
            if (AU.length > 1) {
              var AP = +AU[1];
              if (!isNaN(AP)) {
                uz(AP);
                A6(AS);
                return;
              }
            }
          }
          if (AS == "#changelog") {
            qQ();
          } else if (qR) {
            qB();
          }
          if (AS == "#settings") {
            EE();
          } else if (EI) {
            EM();
          }
          if (AS == "#submit-feedback") {
            qG(2);
          } else if (AS == "#report-bug") {
            qG(1);
          } else if (rC != 0) {
            qG(0);
          }
          if (AS == "#log-in") {
            Mj();
          } else if (MF) {
            J1();
          }
          if (AS == "#sign-up") {
            J0();
          } else if (Mz) {
            J3();
          }
          if (AS == "#achievements") {
            Z8();
          } else if (Z7) {
            Z9();
          }
          A6(AS);
          switch (AS) {
            case "#changelog":
            case "#settings":
            case "#submit-feedback":
            case "#report-bug":
            case "#log-in":
            case "#sign-up":
            case "#achievements":
              break;
            default:
              A5();
          }
        } else if (q7 == 3) {
          if (AS.startsWith("#profile")) {
            var AR = AS.split("/");
            if (AR.length > 1) {
              var AQ = +AR[1];
              if (!isNaN(AQ)) {
                uz(AQ);
                A6(AS);
                return;
              }
            }
            v0();
          } else {
            v0();
          }
        } else {
          A4();
          A5();
        }
      }
    };
    window.onhashchange();
  }
};
var modules = {};
function webpack_require(module_name) {
  var module = modules[module_name];
  if (module !== undefined) {
    return module.exports;
  }
  var newModule = modules[module_name] = {
    exports: {}
  };
  module_functions[module_name].call(newModule.exports, newModule, newModule.exports, webpack_require);
  return newModule.exports;
}
webpack_require.d = (object, property_getters) => {
  for (var key in property_getters) {
    if (webpack_require.o(property_getters, key) && !webpack_require.o(object, key)) {
      let getter = function() {
        return defaultGetter()
      }, defaultGetter = property_getters[key]
      Object.defineProperty(object, key, {
        enumerable: true,
        get: getter,
        set: function(v) {
          defaultGetter = function() {
            return v
          }
        }
      });
    }
  }
};
webpack_require.o = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
webpack_require(666);
webpack_require(93);











!function() {
  const barrelKeys = {
    colorType: true,
    distance: true,
    length: true,
    offset: true,
    rot: true,
    type: true,
    width: true,
  }
  const stripper = {
    weapon: function(w) {
      return {
        name: w.name || '',
        barrels: (function(r, w) {
          for(let i=0,l=w.length;i<l;i++) {
            let o = {}
          }
        })([], w.barrels || [])
      }
    }
  }
}()