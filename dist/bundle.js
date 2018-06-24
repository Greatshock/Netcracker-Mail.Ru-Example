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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkI7QUFDM0IsNEdBQW1EO0FBQ25ELCtHQUFvRDtBQUVwRDtJQUtJO1FBSFEsVUFBSyxHQUFtQixJQUFJLGdDQUFjLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQW9CLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBR3BELElBQUksQ0FBQyxLQUFLLENB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QUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUFQWSwwQ0FBZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHNcIik7XG4iLCIvLyBGSVJTVCBUQVNLIE9OIFRZUEVTQ1JJUFRcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50J1xuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsQ29tcG9uZW50ID0gbmV3IE1vZGFsQ29tcG9uZW50KCk7XG4gICAgcHJpdmF0ZSBzZWxlY3Q6IFNlbGVjdENvbXBvbmVudCA9IG5ldyBTZWxlY3RDb21wb25lbnQoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZGFsLm1vZGFsTG9nKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0LnNlbGVjdExvZygpO1xuICAgIH1cbn1cblxubGV0IGFwcDogQXBwQ29tcG9uZW50ID0gbmV3IEFwcENvbXBvbmVudCgpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ09ORklHVVJBVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmNvbnN0IERZTkFNSUNfV0lER0VUU19JTVBMRU1FTlRBVElPTjogbnVtYmVyID0gMTsgLy8gU3dpdGNoIHRvIDAgdG8gdXNlIGltcGxlbWVudGF0aW9uIHdpdGggZmV0Y2hcblxuaWYgKERZTkFNSUNfV0lER0VUU19JTVBMRU1FTlRBVElPTikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbFlIYW5kbGVyVXNpbmdBc3luY0F3YWl0KTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsWUhhbmRsZXJVc2luZ0ZldGNoKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJTVBMRU1FTlRBVElPTlMgT0YgRFlOQU1JQyBXSURHRVRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLy8gSW1wbGVtZW50YXRpb24gdXNpbmcgZmV0Y2hcbmZ1bmN0aW9uIHNjcm9sbFlIYW5kbGVyVXNpbmdGZXRjaCgpOiB2b2lkIHtcbiAgICAvLyBHZXQgY3VycmVudCBwYWdlIGNvbnRlbnQgaGVpZ2h0IChjcm9zcy1icm93c2VyIGFwcHJvYWNoKVxuICAgIGxldCBzY3JvbGxIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgKTtcbiAgICAvLyBHZXQgY3VycmVudCB2ZXJ0aWNhbCBzY3JvbGwgcG9zaXRpb25cbiAgICBsZXQgeVNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKHlTY3JvbGxQb3NpdGlvbiArIHdpbmRvdy5pbm5lckhlaWdodCA9PT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIC8vIEVuYWJsZSBsb2FkZXJcbiAgICAgICAgbGV0IGxvYWRlcjogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XG4gICAgICAgIGxvYWRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cbiAgICAgICAgLy8gRmV0Y2ggbmV3IGNvbnRlbnQgZnJvbSB0aGUgc2VydmVyXG4gICAgICAgIGZldGNoKFwiXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIHNlcnZlciBsYXRlbmN5XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciByZXR1cm5lZCBhbiBlcnJvciBjb2RlICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgd2lkZ2V0c1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX2xpbmUuX2ZvdXJ0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY3JlYXRlV2lkZ2V0c0Jsb2NrKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTUwKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goYWxlcnQpO1xuICAgIH1cbn1cbi8vIEltcGxlbWVudGF0aW9uIHVzaW5nIGFzeW5jICYgYXdhaXRcbmFzeW5jIGZ1bmN0aW9uIHNjcm9sbFlIYW5kbGVyVXNpbmdBc3luY0F3YWl0KCkge1xuICAgIC8vIEdldCBjdXJyZW50IHBhZ2UgY29udGVudCBoZWlnaHQgKGNyb3NzLWJyb3dzZXIgYXBwcm9hY2gpXG4gICAgbGV0IHNjcm9sbEhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICApO1xuICAgIC8vIEdldCBjdXJyZW50IHZlcnRpY2FsIHNjcm9sbCBwb3NpdGlvblxuICAgIGxldCB5U2Nyb2xsUG9zaXRpb246IG51bWJlciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAvLyBTaG93IG9yIGhpZGUgYHNjcm9sbCB0b3BgIGJ1dHRvblxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICBpZiAoeVNjcm9sbFBvc2l0aW9uICsgd2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIDUwMCkge1xuICAgICAgICBhcHBseVN0eWxlcyhzY3JvbGxUb3BCdXR0b24sIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxuICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcIjFzXCJcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXBwbHlTdHlsZXMoc2Nyb2xsVG9wQnV0dG9uLCB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh5U2Nyb2xsUG9zaXRpb24gKyB3aW5kb3cuaW5uZXJIZWlnaHQgPT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAvLyBFbmFibGUgbG9hZGVyXG4gICAgICAgIGxldCBsb2FkZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XG4gICAgICAgIGxvYWRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cbiAgICAgICAgLy8gRmV0Y2ggbmV3IGNvbnRlbnQgZnJvbSB0aGUgc2VydmVyXG4gICAgICAgIGxldCByZXN1bHQ6IHZvaWQgPSBhd2FpdCBmZXRjaFdpZGdldHMoMjAwMClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgd2lkZ2V0c1xuICAgICAgICAgICAgICAgIGxldCBsaW5lOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbGluZS5fZm91cnRoXCIpO1xuICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGNyZWF0ZVdpZGdldHNCbG9jaygpKTtcblxuICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGVyXG4gICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMTUwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goYWxlcnQpO1xuICAgIH1cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFTkQgT0YgSU1QTEVNRU5UQVRJT05TIE9GIERZTkFNSUMgV0lER0VUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTTU9PVEggU0NST0xMIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmxldCBzY3JvbGxUb3BCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24uX3Njcm9sbC10by10b3BcIik7XG5zY3JvbGxUb3BCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIHNjcm9sbFVwKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTEwMCk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlcyhzY3JvbGxUb3BCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsVXApO1xuICAgICAgICB9XG4gICAgfTtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCBPRiBTTU9PVEggU0NST0xMIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbi8vIEhFTFBFUlNcbmZ1bmN0aW9uIGZldGNoV2lkZ2V0cyh0aW1lb3V0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCd3aWRnZXRzIGZldGNoZWQnKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IHN0cmluZyB7XG4gICAgbGV0IGxldHRlcnM6IHN0cmluZyA9IFwiMDEyMzQ1Njc4OUFCQ0RFRlwiLFxuICAgICAgICBjb2xvcjpzdHJpbmcgPSBcIiNcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IHtbc3R5bGU6IHN0cmluZ106IHN0cmluZ30pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVs8YW55PnN0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2lkZ2V0c0Jsb2NrKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBsZXQgd2lkZ2V0c0Jsb2NrOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2lkZ2V0c0Jsb2NrLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiODBweFwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgbGV0IHdpZGdldDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwid2lkZ2V0XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuICAgICAgICB9O1xuICAgICAgICBhcHBseVN0eWxlcyh3aWRnZXQsIHN0eWxlcyk7XG5cbiAgICAgICAgd2lkZ2V0c0Jsb2NrLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB3aWRnZXQpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWRnZXRzQmxvY2s7XG59XG4iLCJleHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbW9kYWxMb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU9EQUxcIik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZWxlY3RMb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUXCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=