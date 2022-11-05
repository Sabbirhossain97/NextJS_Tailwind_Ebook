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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors(param) {\n    var getBooks = param.getBooks;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), authors = ref[0], setAuthors = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8), authorCount = ref1[0], setAuthorCount = ref1[1];\n    var fetchMoreAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState + 3;\n        });\n    };\n    var getAuthorsNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select(\"*\").range(0, authorCount)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setAuthors(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorsNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthorsNames();\n    }, [\n        authorCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"-my-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"flex items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" font-bold text-3xl text-gray-200\",\n                            children: \"Authors\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-flex rounded-lg items-center mt-1 bg-gray-100 px-3 py-1 text-xs font-medium text-zinc-500\",\n                            children: authors.length\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-6 flex items-center\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                id: \"filter-section-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: [\n                        authors.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    getBooks(item.id);\n                                },\n                                className: \" list-none cursor-pointer \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"relative inline-block h-12 w-12 rounded-full ring-2 ring-white\",\n                                            src: item.image,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"cursor-pointer ml-3 text- font-bold py-4 text-gray-200\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, _this)\n                            }, item.id, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function(e) {\n                                        return fetchMoreAuthorByClick(e);\n                                    },\n                                    className: \"text-gray-200 hover:text-gray-400\",\n                                    children: \"See more\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        color: \"gray\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        strokeWidth: \"1.5\",\n                                        stroke: \"currentColor\",\n                                        className: \"w-4 h-4 mt-[5px] ml-[3px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n}\n_s(Authors, \"N+F0qHGCurP+J1VnftM0zzk0ry0=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Ozs7O2lEQUNOO3NEQUNGLDhEQUFDWCxHQUFDOzRDQUFDRixTQUFTLEVBQUMsd0RBQXdEO3NEQUNsRU8sSUFBSSxDQUFDTyxJQUFJOzs7OztpREFDUjs7Ozs7O3lDQUNBOytCQWZEUCxJQUFJLENBQUNGLEVBQUU7Ozs7cUNBZ0JUO3lCQUNOLENBQUM7c0NBRUYsOERBQUNOLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxlQUFlOzs4Q0FDNUIsOERBQUNlLFFBQU07b0NBQ0xOLE9BQU8sRUFBRSxTQUFDckIsQ0FBQzsrQ0FBS0Qsc0JBQXNCLENBQUNDLENBQUMsQ0FBQztxQ0FBQTtvQ0FDekNZLFNBQVMsRUFBQyxtQ0FBbUM7OENBQzlDLFVBRUQ7Ozs7O3dDQUFTOzhDQUNULDhEQUFDRyxNQUFJOzhDQUNILDRFQUFDYSxLQUFHO3dDQUNGQyxLQUFLLEVBQUMsNEJBQTRCO3dDQUNsQ0MsS0FBSyxFQUFDLE1BQU07d0NBQ1pDLElBQUksRUFBQyxNQUFNO3dDQUNYQyxPQUFPLEVBQUMsV0FBVzt3Q0FDbkJDLFdBQVcsRUFBQyxLQUFLO3dDQUNqQkMsTUFBTSxFQUFDLGNBQWM7d0NBQ3JCdEIsU0FBUyxFQUFDLDJCQUEyQjtrREFFckMsNEVBQUN1QixNQUFJOzRDQUNIQyxhQUFhLEVBQUMsT0FBTzs0Q0FDckJDLGNBQWMsRUFBQyxPQUFPOzRDQUN0QkMsQ0FBQyxFQUFDLHVDQUF1Qzs7Ozs7Z0RBQ3pDOzs7Ozs0Q0FDRTs7Ozs7d0NBQ0Q7Ozs7OztnQ0FDSDs7Ozs7O3dCQUNGOzs7OztvQkFDRjs7Ozs7O1lBRUosQ0FFUjtBQUNKLENBQUM7R0F6RnVCN0MsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aG9ycy5qc3g/MzdlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9ycyh7Z2V0Qm9va3N9KSB7XHJcbiAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdXRob3JDb3VudCwgc2V0QXV0aG9yQ291bnRdID0gdXNlU3RhdGUoOCk7XHJcblxyXG4gIGNvbnN0IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0QXV0aG9yQ291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMyk7XHJcbiAgfTtcclxuICBjb25zdCBnZXRBdXRob3JzTmFtZXMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiYXV0aG9yc1wiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAucmFuZ2UoMCwgYXV0aG9yQ291bnQpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEF1dGhvcnMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXV0aG9yc05hbWVzKCk7XHJcbiAgfSwgW2F1dGhvckNvdW50XSk7XHJcbiAgcmV0dXJuIChcclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIi1teS0zXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctemluYy04MDAgcHktMyB0ZXh0LXNtIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ncmF5LTIwMFwiPkF1dGhvcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcm91bmRlZC1sZyBpdGVtcy1jZW50ZXIgbXQtMSBiZy1ncmF5LTEwMCBweC0zIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXppbmMtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7YXV0aG9ycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC02IGZsZXggaXRlbXMtY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCIgaWQ9XCJmaWx0ZXItc2VjdGlvbi0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAge2F1dGhvcnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Qm9va3MoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBsaXN0LW5vbmUgY3Vyc29yLXBvaW50ZXIgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbWwtMyB0ZXh0LSBmb250LWJvbGQgcHktNCB0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgaG92ZXI6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNlZSBtb3JlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCBtdC1bNXB4XSBtbC1bM3B4XVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOS41IDEzLjVMMTIgMjFtMCAwbC03LjUtNy41TTEyIDIxVjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwiQXV0aG9ycyIsImdldEJvb2tzIiwiYXV0aG9ycyIsInNldEF1dGhvcnMiLCJhdXRob3JDb3VudCIsInNldEF1dGhvckNvdW50IiwiZmV0Y2hNb3JlQXV0aG9yQnlDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZTdGF0ZSIsImdldEF1dGhvcnNOYW1lcyIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJyYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJzcGFuIiwibGVuZ3RoIiwiaWQiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiYnV0dG9uIiwic3ZnIiwieG1sbnMiLCJjb2xvciIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Authors.jsx\n"));

/***/ })

});