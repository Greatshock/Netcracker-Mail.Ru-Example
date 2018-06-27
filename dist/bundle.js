/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/app.component.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.component.ts":
/*!*****************************************!*\
  !*** ./src/components/app.component.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// FIRST TASK ON TYPESCRIPT
var modal_component_1 = __webpack_require__(/*! ./modal.component */ "./src/components/modal.component.ts");
var select_component_1 = __webpack_require__(/*! ./select.component */ "./src/components/select.component.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.modal = new modal_component_1.ModalComponent();
        this.select = new select_component_1.SelectComponent();
        this.modal.modalLog();
        this.select.selectLog();
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var app = new AppComponent();
/* --------------------------------------------- CONFIGURATIONS ----------------------------------------------------- */
var DYNAMIC_WIDGETS_IMPLEMENTATION = 1; // Switch to 0 to use implementation with fetch
if (DYNAMIC_WIDGETS_IMPLEMENTATION) {
    window.addEventListener("scroll", function () {
        onScroll("asyncAwait");
    });
}
else {
    window.addEventListener("scroll", function () {
        onScroll("fetch");
    });
}
/* ------------------------------- IMPLEMENTATIONS OF DYNAMIC WIDGETS --------------------------- */
// Implementation using fetch
function onScroll(type) {
    // Get current page content height (cross-browser approach)
    var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    // Get current vertical scroll position
    var yScrollPosition = document.documentElement.scrollTop;
    // Show or hide `scroll top` button
    // depending on the current scroll position
    if (yScrollPosition + window.innerHeight > document.documentElement.clientHeight + 500) {
        applyStyles(scrollTopButton, {
            visibility: "visible",
            opacity: "1",
            transition: "1s"
        });
    }
    else {
        applyStyles(scrollTopButton, {
            visibility: "hidden",
            opacity: "0",
            transition: ""
        });
    }
    if (yScrollPosition + window.innerHeight === scrollHeight) {
        // Enable loader
        var loader_1 = document.querySelector(".loader");
        loader_1.style.visibility = "visible";
        loader_1.style.opacity = "1";
        // Check the type
        if (type.toLowerCase() === "fetch") {
            // Fetch new content from the server
            fetch("")
                .then(function (response) {
                // Simulate server latency
                setTimeout(function () {
                    if (response.status !== 200) {
                        throw new Error("Server returned an error code " + response.status);
                    }
                    // Create and append widgets
                    var line = document.querySelector(".page__line._fourth");
                    line.insertAdjacentElement("beforeend", createWidgetsBlock());
                    // Hide loader
                    loader_1.style.visibility = "hidden";
                    loader_1.style.opacity = "0";
                    window.scrollBy(0, 150);
                }, 1000);
            })
                .catch(alert);
        }
        else if (type.toLowerCase() === "asyncawait") {
            // Use async await
            fetchWidgetsUsingAsyncAwait()
                .then(function () {
                // Hide loader
                loader_1.style.visibility = "hidden";
                loader_1.style.opacity = "0";
            })
                .catch(alert);
        }
        else {
            throw new Error("Invalid type");
        }
    }
}
function fetchWidgetsUsingAsyncAwait() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchWidgets(2000)
                        .then(function (result) {
                        // Create and append widgets
                        var line = document.querySelector(".page__line._fourth");
                        line.insertAdjacentElement("beforeend", createWidgetsBlock());
                        window.scrollBy(0, 150);
                    })
                        .catch(alert)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* --------------------------- END OF IMPLEMENTATIONS OF DYNAMIC WIDGETS ------------------------ */
/* --------------------------------------- SMOOTH SCROLL ---------------------------------------- */
var scrollTopButton = document.querySelector(".button._scroll-to-top");
scrollTopButton.onclick = function scrollUp() {
    window.scrollBy(0, -100);
    if (window.pageYOffset > 0) {
        applyStyles(scrollTopButton, {
            opacity: "",
            visibility: "",
            transition: ""
        });
        requestAnimationFrame(scrollUp);
    }
};
/* ----------------------------------- END OF SMOOTH SCROLL ------------------------------------- */
/* --------------------------------- DEBOUNCE, THROTTLING, RESIZE-------------------------------- */
var yandexMailbox = document.querySelector(".y-mailbox");
yandexMailbox.addEventListener("mousemove", debounce(function () {
    console.log("debounce");
}, 300));
yandexMailbox.addEventListener("touchmove", throttle(function () {
    console.log("throttle");
}, 2000));
window.addEventListener("resize", debounce(function () {
    console.log("resizing ended");
}, 300));
function debounce(f, ms) {
    var timer = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var onComplete = function () {
            f.apply(_this, args);
            timer = null;
        };
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete, ms);
    };
}
function throttle(f, ms) {
    var isThrottled = false, savedArgs, savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        f.apply(this, arguments);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
/* ------------------------------ END OF DEBOUNCE, THROTTLING,RESIZE----------------------------- */
// HELPERS
function fetchWidgets(timeout) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('widgets fetched');
        }, timeout);
    });
}
function getRandomColor() {
    var letters = "0123456789ABCDEF", color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function applyStyles(element, styles) {
    for (var styleName in styles) {
        if (styles.hasOwnProperty(styleName)) {
            element.style[styleName] = styles[styleName];
        }
    }
}
function createWidgetsBlock() {
    var widgetsBlock = document.createElement("div");
    widgetsBlock.style.marginBottom = "80px";
    for (var i = 0; i < 6; i++) {
        var widget = document.createElement("div");
        var styles = {
            className: "widget",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: getRandomColor(),
            marginBottom: "10px"
        };
        applyStyles(widget, styles);
        widgetsBlock.insertAdjacentElement("beforeend", widget);
    }
    return widgetsBlock;
}


/***/ }),

/***/ "./src/components/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/components/modal.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.modalLog = function () {
        console.log("MODAL");
    };
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;


/***/ }),

/***/ "./src/components/select.component.ts":
/*!********************************************!*\
  !*** ./src/components/select.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.selectLog = function () {
        console.log("SELECT");
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkI7QUFDM0IsNEdBQW1EO0FBQ25ELCtHQUFvRDtBQUVwRDtJQUtJO1FBSFEsVUFBSyxHQUFtQixJQUFJLGdDQUFjLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQW9CLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBR3BELElBQUksQ0FBQyxLQUFLLENB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M0Q7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6UEQ7SUFFSTtJQUFlLENBQUM7SUFFaEIsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQztBQVBZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0I7SUFFSTtJQUFlLENBQUM7SUFFaEIsbUNBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQVBZLDBDQUFlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50c1wiKTtcbiIsIi8vIEZJUlNUIFRBU0sgT04gVFlQRVNDUklQVFxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxDb21wb25lbnQgPSBuZXcgTW9kYWxDb21wb25lbnQoKTtcbiAgICBwcml2YXRlIHNlbGVjdDogU2VsZWN0Q29tcG9uZW50ID0gbmV3IFNlbGVjdENvbXBvbmVudCgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kYWwubW9kYWxMb2coKTtcbiAgICAgICAgdGhpcy5zZWxlY3Quc2VsZWN0TG9nKCk7XG4gICAgfVxufVxuXG5sZXQgYXBwOiBBcHBDb21wb25lbnQgPSBuZXcgQXBwQ29tcG9uZW50KCk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDT05GSUdVUkFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuY29uc3QgRFlOQU1JQ19XSURHRVRTX0lNUExFTUVOVEFUSU9OOiBudW1iZXIgPSAxOyAvLyBTd2l0Y2ggdG8gMCB0byB1c2UgaW1wbGVtZW50YXRpb24gd2l0aCBmZXRjaFxuXG5pZiAoRFlOQU1JQ19XSURHRVRTX0lNUExFTUVOVEFUSU9OKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICBvblNjcm9sbChcImFzeW5jQXdhaXRcIilcbiAgICB9KTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICBvblNjcm9sbChcImZldGNoXCIpXG4gICAgfSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU1QTEVNRU5UQVRJT05TIE9GIERZTkFNSUMgV0lER0VUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8vIEltcGxlbWVudGF0aW9uIHVzaW5nIGZldGNoXG5mdW5jdGlvbiBvblNjcm9sbCh0eXBlOiBzdHJpbmcpIHtcbiAgICAvLyBHZXQgY3VycmVudCBwYWdlIGNvbnRlbnQgaGVpZ2h0IChjcm9zcy1icm93c2VyIGFwcHJvYWNoKVxuICAgIGxldCBzY3JvbGxIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgKTtcbiAgICAvLyBHZXQgY3VycmVudCB2ZXJ0aWNhbCBzY3JvbGwgcG9zaXRpb25cbiAgICBsZXQgeVNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgLy8gU2hvdyBvciBoaWRlIGBzY3JvbGwgdG9wYCBidXR0b25cbiAgICAvLyBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgaWYgKHlTY3JvbGxQb3NpdGlvbiArIHdpbmRvdy5pbm5lckhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyA1MDApIHtcbiAgICAgICAgYXBwbHlTdHlsZXMoc2Nyb2xsVG9wQnV0dG9uLCB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCIxc1wiXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGx5U3R5bGVzKHNjcm9sbFRvcEJ1dHRvbiwge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoeVNjcm9sbFBvc2l0aW9uICsgd2luZG93LmlubmVySGVpZ2h0ID09PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgLy8gRW5hYmxlIGxvYWRlclxuICAgICAgICBsZXQgbG9hZGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xuICAgICAgICBsb2FkZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG4gICAgICAgIC8vIENoZWNrIHRoZSB0eXBlXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwiZmV0Y2hcIikge1xuICAgICAgICAgICAgLy8gRmV0Y2ggbmV3IGNvbnRlbnQgZnJvbSB0aGUgc2VydmVyXG4gICAgICAgICAgICBmZXRjaChcIlwiKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIHNlcnZlciBsYXRlbmN5XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciByZXR1cm5lZCBhbiBlcnJvciBjb2RlICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB3aWRnZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX2xpbmUuX2ZvdXJ0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGNyZWF0ZVdpZGdldHNCbG9jaygpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxNTApO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSBcImFzeW5jYXdhaXRcIikge1xuICAgICAgICAgICAgLy8gVXNlIGFzeW5jIGF3YWl0XG4gICAgICAgICAgICBmZXRjaFdpZGdldHNVc2luZ0FzeW5jQXdhaXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGFsZXJ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdHlwZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXaWRnZXRzVXNpbmdBc3luY0F3YWl0KCkge1xuICAgIGxldCByZXN1bHQ6IHZvaWQgPSBhd2FpdCBmZXRjaFdpZGdldHMoMjAwMClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHdpZGdldHNcbiAgICAgICAgICAgIGxldCBsaW5lOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbGluZS5fZm91cnRoXCIpO1xuICAgICAgICAgICAgbGluZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY3JlYXRlV2lkZ2V0c0Jsb2NrKCkpO1xuXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTUwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGFsZXJ0KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFTkQgT0YgSU1QTEVNRU5UQVRJT05TIE9GIERZTkFNSUMgV0lER0VUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTTU9PVEggU0NST0xMIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmxldCBzY3JvbGxUb3BCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24uX3Njcm9sbC10by10b3BcIik7XG5zY3JvbGxUb3BCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIHNjcm9sbFVwKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTEwMCk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlcyhzY3JvbGxUb3BCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsVXApO1xuICAgICAgICB9XG4gICAgfTtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCBPRiBTTU9PVEggU0NST0xMIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBERUJPVU5DRSwgVEhST1RUTElORywgUkVTSVpFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmxldCB5YW5kZXhNYWlsYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55LW1haWxib3hcIik7XG5cbnlhbmRleE1haWxib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWJvdW5jZVwiKTtcbn0sIDMwMCkpO1xuXG55YW5kZXhNYWlsYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhyb3R0bGUoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidGhyb3R0bGVcIik7XG59LCAyMDAwKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlc2l6aW5nIGVuZGVkXCIpO1xufSwgMzAwKSk7XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGY6IEZ1bmN0aW9uLCBtczogbnVtYmVyKSB7XG4gICAgbGV0IHRpbWVyOiBudW1iZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQob25Db21wbGV0ZSwgbXMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoZjogRnVuY3Rpb24sIG1zOiBudW1iZXIpIHtcbiAgICBsZXQgaXNUaHJvdHRsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgc2F2ZWRBcmdzOiBhbnksXG4gICAgICAgIHNhdmVkVGhpczogYW55O1xuXG4gICAgZnVuY3Rpb24gd3JhcHBlcigpIHtcblxuICAgICAgICBpZiAoaXNUaHJvdHRsZWQpIHtcbiAgICAgICAgICAgIHNhdmVkQXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHNhdmVkVGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaXNUaHJvdHRsZWQgPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaXNUaHJvdHRsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzYXZlZEFyZ3MpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGx5KHNhdmVkVGhpcywgc2F2ZWRBcmdzKTtcbiAgICAgICAgICAgICAgICBzYXZlZEFyZ3MgPSBzYXZlZFRoaXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRU5EIE9GIERFQk9VTkNFLCBUSFJPVFRMSU5HLFJFU0laRS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuXG4vLyBIRUxQRVJTXG5mdW5jdGlvbiBmZXRjaFdpZGdldHModGltZW91dDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgnd2lkZ2V0cyBmZXRjaGVkJyk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xuICAgIGxldCBsZXR0ZXJzOiBzdHJpbmcgPSBcIjAxMjM0NTY3ODlBQkNERUZcIixcbiAgICAgICAgY29sb3I6c3RyaW5nID0gXCIjXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xufVxuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3R5bGVzOiB7W3N0eWxlOiBzdHJpbmddOiBzdHJpbmd9KTogdm9pZCB7XG4gICAgZm9yIChsZXQgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbPGFueT5zdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdpZGdldHNCbG9jaygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgbGV0IHdpZGdldHNCbG9jazogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpZGdldHNCbG9jay5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjgwcHhcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGxldCB3aWRnZXQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIndpZGdldFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcbiAgICAgICAgfTtcbiAgICAgICAgYXBwbHlTdHlsZXMod2lkZ2V0LCBzdHlsZXMpO1xuXG4gICAgICAgIHdpZGdldHNCbG9jay5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgd2lkZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkZ2V0c0Jsb2NrO1xufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG1vZGFsTG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1PREFMXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2VsZWN0TG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVFwiKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9