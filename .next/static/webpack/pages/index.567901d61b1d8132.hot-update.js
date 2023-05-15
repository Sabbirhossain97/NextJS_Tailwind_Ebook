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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors(param) {\n    var getBooks = param.getBooks;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), authors = ref[0], setAuthors = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4), authorCount = ref1[0], setAuthorCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), totalAuthors = ref2[0], setTotalAuthors = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), activeAuthorId = ref3[0], setActiveAuthorId = ref3[1];\n    var getActiveAuthor = function(id) {\n        var activeId = authors.filter(function(item) {\n            if (item.id == id) {\n                return item.id;\n            }\n        });\n        setActiveAuthorId(activeId[0].id);\n    };\n    var fetchMoreAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState + 3;\n        });\n    };\n    var fetchLessAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState - 3;\n        });\n    };\n    var getAuthorsNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, count, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select(\"*\", {\n                                count: \"exact\"\n                            }).range(0, authorCount)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, count = ref.count, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setTotalAuthors(count);\n                            setAuthors(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorsNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthorsNames();\n    }, [\n        authorCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mt-4 hidden lg:col-span-3 w-10/12 mx-auto lg:block \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"-my-3 flow-root\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" ml-5 font-normal text-2xl text-gray-200\",\n                            children: \"Authors\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" inline-flex rounded-md items-center mt-1 bg-gray-500/50 px-3 py-1 text-xs font-medium text-gray-100\",\n                            children: totalAuthors\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mr-12 flex items-center\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-2\",\n                    children: [\n                        authors.map(function(item, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    getBooks(item.id);\n                                    getActiveAuthor(item.id);\n                                },\n                                className: \"list-none cursor-pointer transition \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex flex-row items-center pl-4 py-2 hover:bg-zinc-900 rounded-md \".concat(item.id == activeAuthorId ? \" bg-zinc-900/20 rounded-md py-2\" : \"\", \" \"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"relative inline-block h-10 w-10 rounded-full ring-2 ring-teal-500\",\n                                            src: item.image,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"cursor-pointer ml-3 text-sm font-bold py-4 text-gray-200\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this)\n                            }, key, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this);\n                        }),\n                        authorCount + 1 === totalAuthors ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex flex-row w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    return fetchLessAuthorByClick(e);\n                                },\n                                className: \"text-sm w-full mt-4 px-1 font-semibold py-2 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-600/70\",\n                                children: \"Show less\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex flex-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    return fetchMoreAuthorByClick(e);\n                                },\n                                className: \"text-sm w-full mt-4 px-1 font-semibold py-2 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-600/70\",\n                                children: \"Show more\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Authors, \"it3d5EQZ5WgPG4GRfE1luGaUaY4=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsU0FBUyxFQUFDLDBEQUEwRDtzREFDcEVoQixJQUFJLENBQUM0QixJQUFJOzs7OztpREFDUjs7Ozs7O3lDQUNBOytCQXRCRFAsR0FBRzs7OztxQ0F1Qkw7eUJBQ04sQ0FBQzt3QkFFRC9CLFdBQVcsR0FBRyxDQUFDLEtBQUtFLFlBQVksaUJBQy9CLDhEQUFDdUIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHVCQUF1QjtzQ0FDcEMsNEVBQUNhLFFBQU07Z0NBQ0xOLE9BQU8sRUFBRSxTQUFDckIsQ0FBQzsyQ0FBS0csc0JBQXNCLENBQUNILENBQUMsQ0FBQztpQ0FBQTtnQ0FDekNjLFNBQVMsRUFBQyxtSUFBbUk7MENBQzlJLFdBRUQ7Ozs7O29DQUFTOzs7OztnQ0FDTCxpQkFFTiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtzQ0FDbkMsNEVBQUNhLFFBQU07Z0NBQ0xOLE9BQU8sRUFBRSxTQUFDckIsQ0FBQzsyQ0FBS0Qsc0JBQXNCLENBQUNDLENBQUMsQ0FBQztpQ0FBQTtnQ0FDekNjLFNBQVMsRUFBQyxtSUFBbUk7MENBQzlJLFdBRUQ7Ozs7O29DQUFTOzs7OztnQ0FDTDs7Ozs7O3dCQUVKOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0F4R3VCOUIsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aG9ycy5qc3g/MzdlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JzKHsgZ2V0Qm9va3MgfSkge1xyXG4gIGNvbnN0IFthdXRob3JzLCBzZXRBdXRob3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXV0aG9yQ291bnQsIHNldEF1dGhvckNvdW50XSA9IHVzZVN0YXRlKDQpO1xyXG4gIGNvbnN0IFt0b3RhbEF1dGhvcnMsIHNldFRvdGFsQXV0aG9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZlQXV0aG9ySWQsIHNldEFjdGl2ZUF1dGhvcklkXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0QWN0aXZlQXV0aG9yID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgYWN0aXZlSWQgPSBhdXRob3JzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNldEFjdGl2ZUF1dGhvcklkKGFjdGl2ZUlkWzBdLmlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0QXV0aG9yQ291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMyk7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaExlc3NBdXRob3JCeUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEF1dGhvckNvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSAtIDMpO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0QXV0aG9yc05hbWVzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCB7IGRhdGEsIGNvdW50LCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJhdXRob3JzXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIsIHsgY291bnQ6IFwiZXhhY3RcIiB9KVxyXG4gICAgICAucmFuZ2UoMCwgYXV0aG9yQ291bnQpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRvdGFsQXV0aG9ycyhjb3VudCk7XHJcbiAgICAgIHNldEF1dGhvcnMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXV0aG9yc05hbWVzKCk7XHJcbiAgfSwgW2F1dGhvckNvdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC00IGhpZGRlbiBsZzpjb2wtc3Bhbi0zIHctMTAvMTIgbXgtYXV0byBsZzpibG9jayBcIj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cIi1teS0zIGZsb3ctcm9vdFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctemluYy04MDAgcHktMyB0ZXh0LXNtIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIG1sLTUgZm9udC1ub3JtYWwgdGV4dC0yeGwgdGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICBBdXRob3JzXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgaW5saW5lLWZsZXggcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgbXQtMSBiZy1ncmF5LTUwMC81MCBweC0zIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgIHt0b3RhbEF1dGhvcnN9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xMiBmbGV4IGl0ZW1zLWNlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICB7YXV0aG9ycy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXRCb29rcyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgIGdldEFjdGl2ZUF1dGhvcihpdGVtLmlkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcGwtNCBweS0yIGhvdmVyOmJnLXppbmMtOTAwIHJvdW5kZWQtbWQgJHtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PSBhY3RpdmVBdXRob3JJZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIgYmctemluYy05MDAvMjAgcm91bmRlZC1tZCBweS0yXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIHJpbmctMiByaW5nLXRlYWwtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbWwtMyB0ZXh0LXNtIGZvbnQtYm9sZCBweS00IHRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIHthdXRob3JDb3VudCArIDEgPT09IHRvdGFsQXV0aG9ycyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LXJvdyB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmV0Y2hMZXNzQXV0aG9yQnlDbGljayhlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdy1mdWxsIG10LTQgcHgtMSBmb250LXNlbWlib2xkIHB5LTIgcm91bmRlZC1tZCB0ZXh0LW1kIHRleHQtdGVhbC01MDAgaG92ZXI6dGV4dC10ZWFsLTQwMCBiZy16aW5jLTcwMCBob3ZlcjpiZy16aW5jLTYwMC83MFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2hvdyBsZXNzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBmZXRjaE1vcmVBdXRob3JCeUNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB3LWZ1bGwgbXQtNCBweC0xIGZvbnQtc2VtaWJvbGQgcHktMiByb3VuZGVkLW1kIHRleHQtbWQgdGV4dC10ZWFsLTUwMCBob3Zlcjp0ZXh0LXRlYWwtNDAwIGJnLXppbmMtNzAwIGhvdmVyOmJnLXppbmMtNjAwLzcwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTaG93IG1vcmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdXBhYmFzZSIsIkF1dGhvcnMiLCJnZXRCb29rcyIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiYXV0aG9yQ291bnQiLCJzZXRBdXRob3JDb3VudCIsInRvdGFsQXV0aG9ycyIsInNldFRvdGFsQXV0aG9ycyIsImFjdGl2ZUF1dGhvcklkIiwic2V0QWN0aXZlQXV0aG9ySWQiLCJnZXRBY3RpdmVBdXRob3IiLCJpZCIsImFjdGl2ZUlkIiwiZmlsdGVyIiwiaXRlbSIsImZldGNoTW9yZUF1dGhvckJ5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2U3RhdGUiLCJmZXRjaExlc3NBdXRob3JCeUNsaWNrIiwiZ2V0QXV0aG9yc05hbWVzIiwiZGF0YSIsImNvdW50IiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwicmFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwic3BhbiIsIm1hcCIsImtleSIsImxpIiwib25DbGljayIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Authors.jsx\n"));

/***/ })

});