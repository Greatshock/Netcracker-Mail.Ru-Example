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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var app = new AppComponent();
/* --------------------------------------------- CONFIGURATIONS ----------------------------------------------------- */
var DYNAMIC_WIDGETS_IMPLEMENTATION = 0; // Switch to 0 to use implementation with fetch
window.onscroll = scrollYHandlerUsingAsyncAwait;
// HELPER FUNCTIONS
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];
    return color;
}
function createWidget() {
    var widget = document.createElement("div");
    widget.className = "widget";
    widget.style.height = "100px";
    widget.style.display = "flex";
    widget.style.justifyContent = "center";
    widget.style.alignItems = "center";
    widget.style.backgroundColor = getRandomColor();
    return widget;
}
function resolveAfter2Seconds() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('widgets fetched');
        }, 2000);
    });
}
/* -------------------------------------- IMPLEMENTATIONS OF DYNAMIC WIDGETS ---------------------------------------- */
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
                line.insertAdjacentElement("beforeEnd", createWidget());
                line.insertAdjacentElement("beforeEnd", createWidget());
                line.insertAdjacentElement("beforeEnd", createWidget());
                line.insertAdjacentElement("beforeEnd", createWidget());
                line.insertAdjacentElement("beforeEnd", createWidget());
                line.insertAdjacentElement("beforeEnd", createWidget());
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
                    if (!(yScrollPosition + window.innerHeight === scrollHeight)) return [3 /*break*/, 2];
                    loader_2 = document.querySelector(".loader");
                    loader_2.style.visibility = "visible";
                    loader_2.style.opacity = "1";
                    return [4 /*yield*/, resolveAfter2Seconds()
                            .then(function (result) {
                            // Create and append widgets
                            var line = document.querySelector(".page__line._fourth");
                            line.insertAdjacentElement("beforeEnd", createWidget());
                            line.insertAdjacentElement("beforeEnd", createWidget());
                            line.insertAdjacentElement("beforeEnd", createWidget());
                            line.insertAdjacentElement("beforeEnd", createWidget());
                            line.insertAdjacentElement("beforeEnd", createWidget());
                            line.insertAdjacentElement("beforeEnd", createWidget());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsMkJBQTJCO0FBQzNCLDRHQUFtRDtBQUNuRCwrR0FBb0Q7QUFFcEQ7SUFLSTtRQUhRLFVBQUssR0FBRyxJQUFJLGdDQUFjLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFHbkMsSUFBSSxDQUFDLEtBQUss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SyxDQUFDLEtBQUssQ0FBQzs7b0JBbEJiLE1BQU0sR0FBUyxTQWtCRjs7Ozs7O0NBRXhCOzs7Ozs7Ozs7Ozs7Ozs7QUN2SUQ7SUFFSTtJQUFlLENBQUM7SUFFaEIsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQztBQVBZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0I7SUFFSTtJQUFlLENBQUM7SUFFaEIsbUNBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQVBZLDBDQUFlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBGSVJTVCBUQVNLIE9OIFRZUEVTQ1JJUFRcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50J1xuXG5jbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBtb2RhbCA9IG5ldyBNb2RhbENvbXBvbmVudCgpO1xuICAgIHByaXZhdGUgc2VsZWN0ID0gbmV3IFNlbGVjdENvbXBvbmVudCgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kYWwubW9kYWxMb2coKTtcbiAgICAgICAgdGhpcy5zZWxlY3Quc2VsZWN0TG9nKCk7XG4gICAgfVxufVxuXG5sZXQgYXBwID0gbmV3IEFwcENvbXBvbmVudCgpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ09ORklHVVJBVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmNvbnN0IERZTkFNSUNfV0lER0VUU19JTVBMRU1FTlRBVElPTjogbnVtYmVyID0gMDsgLy8gU3dpdGNoIHRvIDAgdG8gdXNlIGltcGxlbWVudGF0aW9uIHdpdGggZmV0Y2hcbndpbmRvdy5vbnNjcm9sbCA9IHNjcm9sbFlIYW5kbGVyVXNpbmdBc3luY0F3YWl0O1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xuICAgIGxldCBsZXR0ZXJzOiBzdHJpbmcgPSBcIjAxMjM0NTY3ODlBQkNERUZcIjtcbiAgICBsZXQgY29sb3I6c3RyaW5nID0gXCIjXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcblxuICAgIHJldHVybiBjb2xvcjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdpZGdldCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgbGV0IHdpZGdldDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpZGdldC5jbGFzc05hbWUgPSBcIndpZGdldFwiO1xuICAgIHdpZGdldC5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XG4gICAgd2lkZ2V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB3aWRnZXQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIHdpZGdldC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB3aWRnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcblxuICAgIHJldHVybiB3aWRnZXQ7XG59XG5mdW5jdGlvbiByZXNvbHZlQWZ0ZXIyU2Vjb25kcygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCd3aWRnZXRzIGZldGNoZWQnKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElNUExFTUVOVEFUSU9OUyBPRiBEWU5BTUlDIFdJREdFVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLy8gSW1wbGVtZW50YXRpb24gdXNpbmcgZmV0Y2hcbmZ1bmN0aW9uIHNjcm9sbFlIYW5kbGVyVXNpbmdGZXRjaCgpIHtcbiAgICAvLyBHZXQgY3VycmVudCBwYWdlIGNvbnRlbnQgaGVpZ2h0IChjcm9zcy1icm93c2VyIGFwcHJvYWNoKVxuICAgIGxldCBzY3JvbGxIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgKTtcbiAgICAvLyBHZXQgY3VycmVudCB2ZXJ0aWNhbCBzY3JvbGwgcG9zaXRpb25cbiAgICBsZXQgeVNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKHlTY3JvbGxQb3NpdGlvbiArIHdpbmRvdy5pbm5lckhlaWdodCA9PT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIC8vIEVuYWJsZSBsb2FkZXJcbiAgICAgICAgbGV0IGxvYWRlcjogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XG4gICAgICAgIGxvYWRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cbiAgICAgICAgLy8gRmV0Y2ggbmV3IGNvbnRlbnQgZnJvbSB0aGUgc2VydmVyXG4gICAgICAgIGZldGNoKFwiXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIHNlcnZlciBsYXRlbmN5XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciByZXR1cm5lZCBhbiBlcnJvciBjb2RlICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgd2lkZ2V0c1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlX19saW5lLl9mb3VydGhcIik7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxNTApO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XG4gICAgfVxufVxuLy8gSW1wbGVtZW50YXRpb24gdXNpbmcgYXN5bmMgJiBhd2FpdFxuYXN5bmMgZnVuY3Rpb24gc2Nyb2xsWUhhbmRsZXJVc2luZ0FzeW5jQXdhaXQoKSB7XG4gICAgLy8gR2V0IGN1cnJlbnQgcGFnZSBjb250ZW50IGhlaWdodCAoY3Jvc3MtYnJvd3NlciBhcHByb2FjaClcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0OiBudW1iZXIgPSBNYXRoLm1heChcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICk7XG4gICAgLy8gR2V0IGN1cnJlbnQgdmVydGljYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgbGV0IHlTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGlmICh5U2Nyb2xsUG9zaXRpb24gKyB3aW5kb3cuaW5uZXJIZWlnaHQgPT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAvLyBFbmFibGUgbG9hZGVyXG4gICAgICAgIGxldCBsb2FkZXI6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xuICAgICAgICBsb2FkZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG4gICAgICAgIC8vIEZldGNoIG5ldyBjb250ZW50IGZyb20gdGhlIHNlcnZlclxuICAgICAgICBsZXQgcmVzdWx0OiB2b2lkID0gYXdhaXQgcmVzb2x2ZUFmdGVyMlNlY29uZHMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB3aWRnZXRzXG4gICAgICAgICAgICAgICAgbGV0IGxpbmU6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbGluZS5fZm91cnRoXCIpO1xuICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgbGluZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoPEluc2VydFBvc2l0aW9uPlwiYmVmb3JlRW5kXCIsIGNyZWF0ZVdpZGdldCgpKTtcbiAgICAgICAgICAgICAgICBsaW5lLmluc2VydEFkamFjZW50RWxlbWVudCg8SW5zZXJ0UG9zaXRpb24+XCJiZWZvcmVFbmRcIiwgY3JlYXRlV2lkZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxpbmUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KDxJbnNlcnRQb3NpdGlvbj5cImJlZm9yZUVuZFwiLCBjcmVhdGVXaWRnZXQoKSk7XG4gICAgICAgICAgICAgICAgbGluZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoPEluc2VydFBvc2l0aW9uPlwiYmVmb3JlRW5kXCIsIGNyZWF0ZVdpZGdldCgpKTtcbiAgICAgICAgICAgICAgICBsaW5lLmluc2VydEFkamFjZW50RWxlbWVudCg8SW5zZXJ0UG9zaXRpb24+XCJiZWZvcmVFbmRcIiwgY3JlYXRlV2lkZ2V0KCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXJcbiAgICAgICAgICAgICAgICBsb2FkZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxNTApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChhbGVydCk7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRU5EIE9GIElNUExFTUVOVEFUSU9OUyBPRiBEWU5BTUlDIFdJREdFVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiIsImV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBtb2RhbExvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNT0RBTFwiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNlbGVjdExvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1RcIik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==