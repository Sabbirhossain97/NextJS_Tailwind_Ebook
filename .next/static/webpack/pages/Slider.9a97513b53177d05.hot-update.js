"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Slider",{

/***/ "./pages/Slider.jsx":
/*!**************************!*\
  !*** ./pages/Slider.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Slider() {\n    _s();\n    var getBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, count, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*\", categories(), {\n                                count: \"planned\"\n                            }).range(0, 19)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, count = ref.count, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            console.log(count);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getBooks(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Slider, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TbGlkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBeUI7QUFDUTtBQUNDO0FBRW5CLFNBQVNHLE1BQU0sR0FBRzs7SUFFL0IsSUFBTUMsUUFBUTttQkFBQyw2RkFBTUMsQ0FBQyxFQUFHO2dCQUNNLEdBR2QsRUFIUkMsSUFBSSxFQUFDQyxLQUFLLEVBQUVDLEtBQUs7Ozs7d0JBQUs7OzRCQUFNUCwrQ0FDM0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QlMsTUFBTSxDQUFDLEdBQUcsRUFBQ0MsVUFBVSxFQUFFLEVBQUM7Z0NBQUNKLEtBQUssRUFBRSxTQUFTOzZCQUFDLENBQUMsQ0FDM0NLLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDOzBCQUFBOzt3QkFIYyxHQUdkLEdBSGMsYUFHZCxFQUhSTixJQUFJLEdBQWtCLEdBR2QsQ0FIUkEsSUFBSSxFQUFDQyxLQUFLLEdBQVksR0FHZCxDQUhIQSxLQUFLLEVBQUVDLEtBQUssR0FBSyxHQUdkLENBSElBLEtBQUs7d0JBSXJCLElBQUdBLEtBQUssRUFBQzs0QkFDUkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQzt3QkFDbkIsT0FBTzs0QkFDTkssT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUssQ0FBQzs0QkFDbEJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLENBQUM7d0JBQ2xCLENBQUM7Ozs7OztRQUNOLENBQUM7d0JBWEtGLFFBQVEsQ0FBT0MsQ0FBQzs7O09BV3JCO0lBQ0hILGdEQUFTLENBQUMsV0FBSTtRQUNaRSxRQUFRLEVBQUUsQ0FBQztJQUNiLENBQUMsRUFBQyxFQUFFLENBQUM7SUFHSCxxQkFDRSw4REFBQ1csS0FBRzs7OztZQUVFLENBQ1A7QUFDSCxDQUFDO0dBeEJ1QlosTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1NsaWRlci5qc3g/NmQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vYXBpJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XHJcblxyXG4gIGNvbnN0IGdldEJvb2tzPWFzeW5jKGUpPT57XHJcbiAgICAgbGV0IHsgZGF0YSxjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAuZnJvbShcImJvb2tzX2R1cGxpY2F0ZVwiKVxyXG4gICAgICAgLnNlbGVjdCgnKicsY2F0ZWdvcmllcygpLHtjb3VudDogJ3BsYW5uZWQnfSlcclxuICAgICAgIC5yYW5nZSgwLDE5KVxyXG4gICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgfVxyXG4gIH1cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgZ2V0Qm9va3MoKTtcclxufSxbXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdXBhYmFzZSIsInVzZUVmZmVjdCIsIlNsaWRlciIsImdldEJvb2tzIiwiZSIsImRhdGEiLCJjb3VudCIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImNhdGVnb3JpZXMiLCJyYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Slider.jsx\n"));

/***/ })

});