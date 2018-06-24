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
    window.addEventListener("scroll", scrollYHandlerUsingAsyncAwait);
}
else {
    window.addEventListener("scroll", scrollYHandlerUsingFetch);
}
/* ------------------------------- IMPLEMENTATIONS OF DYNAMIC WIDGETS --------------------------- */
// Implementation using fetch
function scrollYHandlerUsingFetch() {
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
}
// Implementation using async & await
function scrollYHandlerUsingAsyncAwait() {
    return __awaiter(this, void 0, void 0, function () {
        var scrollHeight, yScrollPosition, loader_2, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                    yScrollPosition = document.documentElement.scrollTop;
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
                    if (!(yScrollPosition + window.innerHeight === scrollHeight)) return [3 /*break*/, 2];
                    loader_2 = document.querySelector(".loader");
                    loader_2.style.visibility = "visible";
                    loader_2.style.opacity = "1";
                    return [4 /*yield*/, fetchWidgets(2000)
                            .then(function (result) {
                            // Create and append widgets
                            var line = document.querySelector(".page__line._fourth");
                            line.insertAdjacentElement("beforeend", createWidgetsBlock());
                            // Hide loader
                            loader_2.style.visibility = "hidden";
                            loader_2.style.opacity = "0";
                            window.scrollBy(0, 150);
                        })
                            .catch(alert)];
                case 1:
                    result = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkI7QUFDM0IsNEdBQW1EO0FBQ25ELCtHQUFvRDtBQUVwRDtJQUtJO1FBSFEsVUFBSyxHQUFtQixJQUFJLGdDQUFjLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQW9CLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBR3BELElBQUksQ0FBQyxLQUFLLENB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QUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hCLElBQUksTUFBTSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELElBQUksTUFBTSxHQUFHO1lBQ1QsU0FBUyxFQUFFLFFBQVE7WUFDbkIsTUFBTSxFQUFFLE9BQU87WUFDZixPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLGVBQWUsRUFBRSxjQUFjLEVBQUU7WUFDakMsWUFBWSxFQUFFLE1BQU07U0FDdkIsQ0FBQztRQUNGLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzRDtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVRRDtJQUVJO0lBQWUsQ0FBQztJQUVoQixpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDO0FBUFksd0NBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ0EzQjtJQUVJO0lBQWUsQ0FBQztJQUVoQixtQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDO0FBUFksMENBQWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LnRzXCIpO1xuIiwiLy8gRklSU1QgVEFTSyBPTiBUWVBFU0NSSVBUXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCdcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbENvbXBvbmVudCA9IG5ldyBNb2RhbENvbXBvbmVudCgpO1xuICAgIHByaXZhdGUgc2VsZWN0OiBTZWxlY3RDb21wb25lbnQgPSBuZXcgU2VsZWN0Q29tcG9uZW50KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5tb2RhbExvZygpO1xuICAgICAgICB0aGlzLnNlbGVjdC5zZWxlY3RMb2coKTtcbiAgICB9XG59XG5cbmxldCBhcHA6IEFwcENvbXBvbmVudCA9IG5ldyBBcHBDb21wb25lbnQoKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENPTkZJR1VSQVRJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5jb25zdCBEWU5BTUlDX1dJREdFVFNfSU1QTEVNRU5UQVRJT046IG51bWJlciA9IDE7IC8vIFN3aXRjaCB0byAwIHRvIHVzZSBpbXBsZW1lbnRhdGlvbiB3aXRoIGZldGNoXG5cbmlmIChEWU5BTUlDX1dJREdFVFNfSU1QTEVNRU5UQVRJT04pIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxZSGFuZGxlclVzaW5nQXN5bmNBd2FpdCk7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbFlIYW5kbGVyVXNpbmdGZXRjaCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU1QTEVNRU5UQVRJT05TIE9GIERZTkFNSUMgV0lER0VUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8vIEltcGxlbWVudGF0aW9uIHVzaW5nIGZldGNoXG5mdW5jdGlvbiBzY3JvbGxZSGFuZGxlclVzaW5nRmV0Y2goKTogdm9pZCB7XG4gICAgLy8gR2V0IGN1cnJlbnQgcGFnZSBjb250ZW50IGhlaWdodCAoY3Jvc3MtYnJvd3NlciBhcHByb2FjaClcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0OiBudW1iZXIgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICk7XG4gICAgLy8gR2V0IGN1cnJlbnQgdmVydGljYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgbGV0IHlTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIC8vIFNob3cgb3IgaGlkZSBgc2Nyb2xsIHRvcGAgYnV0dG9uXG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgIGlmICh5U2Nyb2xsUG9zaXRpb24gKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNTAwKSB7XG4gICAgICAgIGFwcGx5U3R5bGVzKHNjcm9sbFRvcEJ1dHRvbiwge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiMXNcIlxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcHBseVN0eWxlcyhzY3JvbGxUb3BCdXR0b24sIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHlTY3JvbGxQb3NpdGlvbiArIHdpbmRvdy5pbm5lckhlaWdodCA9PT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIC8vIEVuYWJsZSBsb2FkZXJcbiAgICAgICAgbGV0IGxvYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcbiAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblxuICAgICAgICAvLyBGZXRjaCBuZXcgY29udGVudCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICAgZmV0Y2goXCJcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgc2VydmVyIGxhdGVuY3lcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIHJldHVybmVkIGFuIGVycm9yIGNvZGUgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB3aWRnZXRzXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbGluZS5fZm91cnRoXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBjcmVhdGVXaWRnZXRzQmxvY2soKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxNTApO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XG4gICAgfVxufVxuLy8gSW1wbGVtZW50YXRpb24gdXNpbmcgYXN5bmMgJiBhd2FpdFxuYXN5bmMgZnVuY3Rpb24gc2Nyb2xsWUhhbmRsZXJVc2luZ0FzeW5jQXdhaXQoKSB7XG4gICAgLy8gR2V0IGN1cnJlbnQgcGFnZSBjb250ZW50IGhlaWdodCAoY3Jvc3MtYnJvd3NlciBhcHByb2FjaClcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0OiBudW1iZXIgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICk7XG4gICAgLy8gR2V0IGN1cnJlbnQgdmVydGljYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgbGV0IHlTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIC8vIFNob3cgb3IgaGlkZSBgc2Nyb2xsIHRvcGAgYnV0dG9uXG4gICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgIGlmICh5U2Nyb2xsUG9zaXRpb24gKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNTAwKSB7XG4gICAgICAgIGFwcGx5U3R5bGVzKHNjcm9sbFRvcEJ1dHRvbiwge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiMXNcIlxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcHBseVN0eWxlcyhzY3JvbGxUb3BCdXR0b24sIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHlTY3JvbGxQb3NpdGlvbiArIHdpbmRvdy5pbm5lckhlaWdodCA9PT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIC8vIEVuYWJsZSBsb2FkZXJcbiAgICAgICAgbGV0IGxvYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcbiAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblxuICAgICAgICAvLyBGZXRjaCBuZXcgY29udGVudCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICAgbGV0IHJlc3VsdDogdm9pZCA9IGF3YWl0IGZldGNoV2lkZ2V0cygyMDAwKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB3aWRnZXRzXG4gICAgICAgICAgICAgICAgbGV0IGxpbmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlX19saW5lLl9mb3VydGhcIik7XG4gICAgICAgICAgICAgICAgbGluZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY3JlYXRlV2lkZ2V0c0Jsb2NrKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICBsb2FkZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxNTApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCBPRiBJTVBMRU1FTlRBVElPTlMgT0YgRFlOQU1JQyBXSURHRVRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNNT09USCBTQ1JPTEwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubGV0IHNjcm9sbFRvcEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi5fc2Nyb2xsLXRvLXRvcFwiKTtcbnNjcm9sbFRvcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gc2Nyb2xsVXAoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcbiAgICAgICAgICAgIGFwcGx5U3R5bGVzKHNjcm9sbFRvcEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxVcCk7XG4gICAgICAgIH1cbiAgICB9O1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRU5EIE9GIFNNT09USCBTQ1JPTEwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERFQk9VTkNFLCBUSFJPVFRMSU5HLCBSRVNJWkUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubGV0IHlhbmRleE1haWxib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnktbWFpbGJveFwiKTtcblxueWFuZGV4TWFpbGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRlYm91bmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRlYm91bmNlXCIpO1xufSwgMzAwKSk7XG5cbnlhbmRleE1haWxib3guYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aHJvdHRsZSgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ0aHJvdHRsZVwiKTtcbn0sIDIwMDApKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVzaXppbmcgZW5kZWRcIik7XG59LCAzMDApKTtcblxuZnVuY3Rpb24gZGVib3VuY2UoZjogRnVuY3Rpb24sIG1zOiBudW1iZXIpIHtcbiAgICBsZXQgdGltZXI6IG51bWJlciA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IG9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBtcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShmOiBGdW5jdGlvbiwgbXM6IG51bWJlcikge1xuICAgIGxldCBpc1Rocm90dGxlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBzYXZlZEFyZ3M6IGFueSxcbiAgICAgICAgc2F2ZWRUaGlzOiBhbnk7XG5cbiAgICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuXG4gICAgICAgIGlmIChpc1Rocm90dGxlZCkge1xuICAgICAgICAgICAgc2F2ZWRBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgc2F2ZWRUaGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICBpc1Rocm90dGxlZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpc1Rocm90dGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNhdmVkQXJncykge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwbHkoc2F2ZWRUaGlzLCBzYXZlZEFyZ3MpO1xuICAgICAgICAgICAgICAgIHNhdmVkQXJncyA9IHNhdmVkVGhpcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFTkQgT0YgREVCT1VOQ0UsIFRIUk9UVExJTkcsUkVTSVpFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbi8vIEhFTFBFUlNcbmZ1bmN0aW9uIGZldGNoV2lkZ2V0cyh0aW1lb3V0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCd3aWRnZXRzIGZldGNoZWQnKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IHN0cmluZyB7XG4gICAgbGV0IGxldHRlcnM6IHN0cmluZyA9IFwiMDEyMzQ1Njc4OUFCQ0RFRlwiLFxuICAgICAgICBjb2xvcjpzdHJpbmcgPSBcIiNcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IHtbc3R5bGU6IHN0cmluZ106IHN0cmluZ30pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVs8YW55PnN0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2lkZ2V0c0Jsb2NrKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBsZXQgd2lkZ2V0c0Jsb2NrOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2lkZ2V0c0Jsb2NrLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiODBweFwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgbGV0IHdpZGdldDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwid2lkZ2V0XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuICAgICAgICB9O1xuICAgICAgICBhcHBseVN0eWxlcyh3aWRnZXQsIHN0eWxlcyk7XG5cbiAgICAgICAgd2lkZ2V0c0Jsb2NrLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB3aWRnZXQpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWRnZXRzQmxvY2s7XG59XG4iLCJleHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbW9kYWxMb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU9EQUxcIik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZWxlY3RMb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUXCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=