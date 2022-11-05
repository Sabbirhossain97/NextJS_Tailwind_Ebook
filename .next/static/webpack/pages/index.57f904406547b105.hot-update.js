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

/***/ "./components/Authors.jsx":
/*!********************************!*\
  !*** ./components/Authors.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors(param) {\n    var getBooks = param.getBooks;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), authors = ref[0], setAuthors = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8), authorCount = ref1[0], setAuthorCount = ref1[1];\n    var fetchMoreAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState + 3;\n        });\n    };\n    var getAuthorsNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select(\"*\").range(0, authorCount)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setAuthors(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorsNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthorsNames();\n    }, [\n        authorCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute left-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"-my-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"flex items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" font-bold text-3xl text-gray-200\",\n                            children: \"Authors\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-flex rounded-lg items-center mt-1 bg-gray-100 px-3 py-1 text-xs font-medium text-zinc-500\",\n                            children: authors.length\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-6 flex items-center\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                id: \"filter-section-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: [\n                        authors.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    getBooks(item.id);\n                                },\n                                className: \" list-none cursor-pointer \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"relative inline-block h-12 w-12 rounded-full ring-2 ring-white\",\n                                            src: item.image,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"cursor-pointer ml-3 text- font-bold py-4 text-gray-200\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, _this)\n                            }, item.id, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function(e) {\n                                        return fetchMoreAuthorByClick(e);\n                                    },\n                                    className: \"text-gray-200 hover:text-gray-400\",\n                                    children: \"See more\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        color: \"gray\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        strokeWidth: \"1.5\",\n                                        stroke: \"currentColor\",\n                                        className: \"w-4 h-4 mt-[5px] ml-[3px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n}\n_s(Authors, \"N+F0qHGCurP+J1VnftM0zzk0ry0=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7Ozs7O2lEQUNOO3NEQUNGLDhEQUFDWCxHQUFDOzRDQUFDRixTQUFTLEVBQUMsd0RBQXdEO3NEQUNsRU8sSUFBSSxDQUFDTyxJQUFJOzs7OztpREFDUjs7Ozs7O3lDQUNBOytCQWZEUCxJQUFJLENBQUNGLEVBQUU7Ozs7cUNBZ0JUO3lCQUNOLENBQUM7c0NBRUYsOERBQUNOLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxlQUFlOzs4Q0FDNUIsOERBQUNlLFFBQU07b0NBQ0xOLE9BQU8sRUFBRSxTQUFDckIsQ0FBQzsrQ0FBS0Qsc0JBQXNCLENBQUNDLENBQUMsQ0FBQztxQ0FBQTtvQ0FDekNZLFNBQVMsRUFBQyxtQ0FBbUM7OENBQzlDLFVBRUQ7Ozs7O3dDQUFTOzhDQUNULDhEQUFDRyxNQUFJOzhDQUNILDRFQUFDYSxLQUFHO3dDQUNGQyxLQUFLLEVBQUMsNEJBQTRCO3dDQUNsQ0MsS0FBSyxFQUFDLE1BQU07d0NBQ1pDLElBQUksRUFBQyxNQUFNO3dDQUNYQyxPQUFPLEVBQUMsV0FBVzt3Q0FDbkJDLFdBQVcsRUFBQyxLQUFLO3dDQUNqQkMsTUFBTSxFQUFDLGNBQWM7d0NBQ3JCdEIsU0FBUyxFQUFDLDJCQUEyQjtrREFFckMsNEVBQUN1QixNQUFJOzRDQUNIQyxhQUFhLEVBQUMsT0FBTzs0Q0FDckJDLGNBQWMsRUFBQyxPQUFPOzRDQUN0QkMsQ0FBQyxFQUFDLHVDQUF1Qzs7Ozs7Z0RBQ3pDOzs7Ozs0Q0FDRTs7Ozs7d0NBQ0Q7Ozs7OztnQ0FDSDs7Ozs7O3dCQUNGOzs7OztvQkFDRjs7Ozs7O1lBRUosQ0FFUjtBQUNKLENBQUM7R0F6RnVCN0MsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aG9ycy5qc3g/MzdlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9ycyh7Z2V0Qm9va3N9KSB7XHJcbiAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdXRob3JDb3VudCwgc2V0QXV0aG9yQ291bnRdID0gdXNlU3RhdGUoOCk7XHJcblxyXG4gIGNvbnN0IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0QXV0aG9yQ291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMyk7XHJcbiAgfTtcclxuICBjb25zdCBnZXRBdXRob3JzTmFtZXMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiYXV0aG9yc1wiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAucmFuZ2UoMCwgYXV0aG9yQ291bnQpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEF1dGhvcnMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXV0aG9yc05hbWVzKCk7XHJcbiAgfSwgW2F1dGhvckNvdW50XSk7XHJcbiAgcmV0dXJuIChcclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiLW15LTNcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy16aW5jLTgwMCBweS0zIHRleHQtc20gdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWdyYXktMjAwXCI+QXV0aG9yczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCByb3VuZGVkLWxnIGl0ZW1zLWNlbnRlciBtdC0xIGJnLWdyYXktMTAwIHB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtemluYy01MDBcIj5cclxuICAgICAgICAgICAgICAgIHthdXRob3JzLmxlbmd0aH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTYgZmxleCBpdGVtcy1jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIiBpZD1cImZpbHRlci1zZWN0aW9uLTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICB7YXV0aG9ycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRCb29rcyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGxpc3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayBoLTEyIHctMTIgcm91bmRlZC1mdWxsIHJpbmctMiByaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtbC0zIHRleHQtIGZvbnQtYm9sZCBweS00IHRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmV0Y2hNb3JlQXV0aG9yQnlDbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2VlIG1vcmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IG10LVs1cHhdIG1sLVszcHhdXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5LjUgMTMuNUwxMiAyMW0wIDBsLTcuNS03LjVNMTIgMjFWM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3VwYWJhc2UiLCJBdXRob3JzIiwiZ2V0Qm9va3MiLCJhdXRob3JzIiwic2V0QXV0aG9ycyIsImF1dGhvckNvdW50Iiwic2V0QXV0aG9yQ291bnQiLCJmZXRjaE1vcmVBdXRob3JCeUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwiZ2V0QXV0aG9yc05hbWVzIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsInJhbmdlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsInNwYW4iLCJsZW5ndGgiLCJpZCIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJidXR0b24iLCJzdmciLCJ4bWxucyIsImNvbG9yIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Authors.jsx\n"));

/***/ })

});