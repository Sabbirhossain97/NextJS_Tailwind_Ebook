"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/pagination.jsx":
/*!***********************************!*\
  !*** ./components/pagination.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Sub_components_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sub-components/Filters */ \"./components/Sub-components/Filters.jsx\");\n\n\n\nfunction Pagination(param) {\n    var setActive = param.setActive, itemsPerPage = param.itemsPerPage, totalLength = param.totalLength, setCurrentPage = param.setCurrentPage;\n    var _this = this;\n    var array = [];\n    for(var i = 1; i <= Math.ceil(totalLength / itemsPerPage); i++){\n        array.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-zinc-800 w-full mx-auto h-24 flex items-center justify-center px-4 sm:px-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:-mt-px md:flex\",\n                children: array.map(function(page, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            onClick: function() {\n                                setCurrentPage(page);\n                            },\n                            className: \"cursor-pointer bg-zinc-500 border-x-2 hover:bg-zinc-700 inline-flex items-center border px-4 py-4 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-200\",\n                            children: page\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, _this)\n                    }, key, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ3NCO0FBRWhDLFNBQVNFLFVBQVUsQ0FBQyxLQUF3RCxFQUFFO1FBQXhEQyxTQUFTLEdBQVgsS0FBd0QsQ0FBdERBLFNBQVMsRUFBR0MsWUFBWSxHQUExQixLQUF3RCxDQUExQ0EsWUFBWSxFQUFDQyxXQUFXLEdBQXRDLEtBQXdELENBQTdCQSxXQUFXLEVBQUVDLGNBQWMsR0FBdEQsS0FBd0QsQ0FBaEJBLGNBQWM7O0lBQ3ZGLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlDLElBQUksQ0FBQ0MsSUFBSSxDQUFDTCxXQUFXLEdBQUNELFlBQVksQ0FBQyxFQUFFSSxDQUFDLEVBQUUsQ0FBRTtRQUM3REQsS0FBSyxDQUFDSSxJQUFJLENBQUNILENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFHRCxxQkFDRSw4REFBQ0ksS0FBRztrQkFDRiw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsK0VBQWlGO3NCQUM5Riw0RUFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLG9CQUFvQjswQkFDaENQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsR0FBRzt5Q0FDbkIsOERBQUNDLElBQUU7d0JBQVdKLFNBQVMsRUFBQyxXQUFXO2tDQUNqQyw0RUFBQ0ssR0FBQzs0QkFFQUMsT0FBTyxFQUFFLFdBQU07Z0NBQUNkLGNBQWMsQ0FBQ1UsSUFBSSxDQUFDOzRCQUFBLENBQUM7NEJBQ3JDRixTQUFTLEVBQUMsK0tBQWdMO3NDQUV6TEUsSUFBSTs7Ozs7aUNBQ0g7dUJBUEdDLEdBQUc7Ozs7NkJBUVA7aUJBQ04sQ0FBQzs7Ozs7b0JBQ0U7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0FBMUJ1QmYsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4P2FmMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuL1N1Yi1jb21wb25lbnRzL0ZpbHRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHNldEFjdGl2ZSwgIGl0ZW1zUGVyUGFnZSx0b3RhbExlbmd0aCwgc2V0Q3VycmVudFBhZ2UgfSkge1xyXG4gIGxldCBhcnJheSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbCh0b3RhbExlbmd0aC9pdGVtc1BlclBhZ2UpOyBpKyspIHtcclxuICAgIGFycmF5LnB1c2goaSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctemluYy04MDAgIHctZnVsbCBteC1hdXRvIGgtMjQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIHB4LTQgc206cHgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOi1tdC1weCBtZDpmbGV4XCI+XHJcbiAgICAgICAgICB7YXJyYXkubWFwKChwYWdlLCBrZXkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudFBhZ2UocGFnZSl9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYmctemluYy01MDAgYm9yZGVyLXgtMiBob3ZlcjpiZy16aW5jLTcwMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyICBweC00IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktMTAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpbHRlcnMiLCJQYWdpbmF0aW9uIiwic2V0QWN0aXZlIiwiaXRlbXNQZXJQYWdlIiwidG90YWxMZW5ndGgiLCJzZXRDdXJyZW50UGFnZSIsImFycmF5IiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsIm1hcCIsInBhZ2UiLCJrZXkiLCJsaSIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pagination.jsx\n"));

/***/ })

});