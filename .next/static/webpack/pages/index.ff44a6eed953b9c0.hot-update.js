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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Sub_components_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sub-components/Filters */ \"./components/Sub-components/Filters.jsx\");\n\n\n\nfunction Pagination(param) {\n    var setActive = param.setActive, itemsPerPage = param.itemsPerPage, totalLength = param.totalLength, setCurrentPage = param.setCurrentPage;\n    var _this = this;\n    var array = [];\n    for(var i = 1; i <= Math.ceil(totalLength / itemsPerPage); i++){\n        array.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-zinc-800 w-full mx-auto h-24 flex items-center justify-center px-2 sm:px-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:-mt-px md:flex\",\n                children: array.map(function(page, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-none px-2 py-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: function() {\n                                    setCurrentPage(page);\n                                },\n                                className: \"cursor-pointer bg-zinc-500 bg-transparent border-b border-zinc-800 hover:border-teal-500 inline-flex items-center px-3 py-3 text-sm font-medium text-gray-100 hover:text-gray-200\",\n                                children: page\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, _this)\n                    }, key, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ3NCO0FBRWhDLFNBQVNFLFVBQVUsQ0FBQyxLQUF3RCxFQUFFO1FBQXhEQyxTQUFTLEdBQVgsS0FBd0QsQ0FBdERBLFNBQVMsRUFBR0MsWUFBWSxHQUExQixLQUF3RCxDQUExQ0EsWUFBWSxFQUFDQyxXQUFXLEdBQXRDLEtBQXdELENBQTdCQSxXQUFXLEVBQUVDLGNBQWMsR0FBdEQsS0FBd0QsQ0FBaEJBLGNBQWM7O0lBQ3ZGLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlDLElBQUksQ0FBQ0MsSUFBSSxDQUFDTCxXQUFXLEdBQUNELFlBQVksQ0FBQyxFQUFFSSxDQUFDLEVBQUUsQ0FBRTtRQUM3REQsS0FBSyxDQUFDSSxJQUFJLENBQUNILENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFHRCxxQkFDRSw4REFBQ0ksS0FBRztrQkFDRiw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsK0VBQWlGO3NCQUM5Riw0RUFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLG9CQUFvQjswQkFDaENQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsR0FBRzt5Q0FDbkIsOERBQUNDLElBQUU7d0JBQVdKLFNBQVMsRUFBQyxxQkFBcUI7a0NBQzNDLDRFQUFDSyxRQUFNO3NDQUNMLDRFQUFDQyxHQUFDO2dDQUNBQyxPQUFPLEVBQUUsV0FBTTtvQ0FDYmYsY0FBYyxDQUFDVSxJQUFJLENBQUMsQ0FBQztnQ0FDdkIsQ0FBQztnQ0FDREYsU0FBUyxFQUFDLG1MQUFtTDswQ0FFNUxFLElBQUk7Ozs7O3FDQUNIOzs7OztpQ0FDRzt1QkFWRkMsR0FBRzs7Ozs2QkFXUDtpQkFDTixDQUFDOzs7OztvQkFDRTs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7QUE3QnVCZixLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qc3g/YWYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vU3ViLWNvbXBvbmVudHMvRmlsdGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgc2V0QWN0aXZlLCAgaXRlbXNQZXJQYWdlLHRvdGFsTGVuZ3RoLCBzZXRDdXJyZW50UGFnZSB9KSB7XHJcbiAgbGV0IGFycmF5ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKHRvdGFsTGVuZ3RoL2l0ZW1zUGVyUGFnZSk7IGkrKykge1xyXG4gICAgYXJyYXkucHVzaChpKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCAgdy1mdWxsIG14LWF1dG8gaC0yNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgcHgtMiBzbTpweC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6LW10LXB4IG1kOmZsZXhcIj5cclxuICAgICAgICAgIHthcnJheS5tYXAoKHBhZ2UsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBweC0yIHB5LTJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy16aW5jLTUwMCBiZy10cmFuc3BhcmVudCBib3JkZXItYiBib3JkZXItemluYy04MDAgaG92ZXI6Ym9yZGVyLXRlYWwtNTAwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmlsdGVycyIsIlBhZ2luYXRpb24iLCJzZXRBY3RpdmUiLCJpdGVtc1BlclBhZ2UiLCJ0b3RhbExlbmd0aCIsInNldEN1cnJlbnRQYWdlIiwiYXJyYXkiLCJpIiwiTWF0aCIsImNlaWwiLCJwdXNoIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwibWFwIiwicGFnZSIsImtleSIsImxpIiwiYnV0dG9uIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pagination.jsx\n"));

/***/ })

});