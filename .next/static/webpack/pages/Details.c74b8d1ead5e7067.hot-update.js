"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Details",{

/***/ "./pages/Details.jsx":
/*!***************************!*\
  !*** ./pages/Details.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Third; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slider */ \"./pages/Slider.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Third() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var bookId = query.id;\n    var categoryId = query.cat_id;\n    console.log(bookId);\n    console.log(categoryId);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedBooks = ref1[0], setRelatedBooks = ref1[1];\n    var showBookDetails = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select('*,authors (\"name\")').match({\n                                id: bookId,\n                                category_id: categoryId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function showBookDetails(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getRelatedBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select(\"*\").match({\n                                category_id: categoryId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setRelatedBooks(data);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getRelatedBooks(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showBookDetails();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getRelatedBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                        children: booksInfo.map(function(item, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"list-none\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"group\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: item.image,\n                                                        className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"group\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-4 flex items-center justify-between text-base font-semibold text-gray-700\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mt-4 text-2xl p-0 text-gray-500 \",\n                                                        children: [\n                                                            \"Written by\",\n                                                            \" \",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"ml-[5px] text-teal-400 text-2xl hover:text-teal-500\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                                    href: {\n                                                                        pathname: \"/AuthorDetails\",\n                                                                        query: {\n                                                                            id: item.author_id\n                                                                        }\n                                                                    },\n                                                                    className: \"\",\n                                                                    children: item.authors.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                    lineNumber: 77,\n                                                                    columnNumber: 23\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                lineNumber: 76,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \" mt-3 border-b\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"ml-auto mt-3 flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none\",\n                                                        children: \"Download\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, key, true, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        relatedBooks: relatedBooks\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Third, \"M1yrY7vm2oKb8AxnGjkXY5BG3NI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Third;\nvar _c;\n$RefreshReg$(_c, \"Third\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUVBQ2I7Ozs7O3FFQUNGOzs7Ozs7NkRBQ0w7a0VBQ0osOERBQUNqQixLQUFHO3dEQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzs7Ozs2REFBTztrRUFDdEMsOERBQUNpQixRQUFNO3dEQUFDakIsU0FBUyxFQUFDLDhHQUE4RztrRUFBQyxVQUdqSTs7Ozs7NkRBQVM7Ozs7OztxREFDTDs7Ozs7OzZDQUNGOzsrQkFwQ0NHLEdBQUc7Ozs7cUNBcUNQO3lCQUNOLENBQUM7Ozs7OzRCQUNFO2tDQUVOLDhEQUFDM0IsK0NBQU07d0JBQUNZLFlBQVksRUFBRUEsWUFBWTs7Ozs7NEJBQUk7Ozs7OztvQkFDbEM7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBL0Z1QlgsS0FBSzs7UUFDWkwsa0RBQVM7OztBQURGSyxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbHMuanN4PzY5ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoaXJkKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGJvb2tJZCA9IHF1ZXJ5LmlkO1xyXG4gIGNvbnN0IGNhdGVnb3J5SWQgPSBxdWVyeS5jYXRfaWQ7XHJcbiAgY29uc29sZS5sb2coYm9va0lkKTtcclxuICBjb25zb2xlLmxvZyhjYXRlZ29yeUlkKTtcclxuICBjb25zdCBbYm9va3NJbmZvLCBzZXRCb29rc0luZm9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWxhdGVkQm9va3MsIHNldFJlbGF0ZWRCb29rc109dXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzaG93Qm9va0RldGFpbHMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgIC5zZWxlY3QoYCosYXV0aG9ycyAoXCJuYW1lXCIpYClcclxuICAgICAgLm1hdGNoKHsgaWQ6IGJvb2tJZCwgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQgfSk7XHJcbiAgICAgIFxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJvb2tzSW5mbyhkYXRhKTtcclxuICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0UmVsYXRlZEJvb2tzPSBhc3luYyhlKT0+e1xyXG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgIC5zZWxlY3QoYCpgKVxyXG4gICAgICAubWF0Y2goe2NhdGVnb3J5X2lkOiBjYXRlZ29yeUlkIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSZWxhdGVkQm9va3MoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2hvd0Jvb2tEZXRhaWxzKCk7XHJcbiAgfSwgW10pO1xyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIGdldFJlbGF0ZWRCb29rcygpO1xyXG4gICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhvbWUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHktMTYgcHgtNCBzbTpweS0yNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04XCI+XHJcbiAgICAgICAgICB7Ym9va3NJbmZvLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPVwibGlzdC1ub25lXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGxnOm1sLVszMDBweF0geGw6Z2FwLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc206YXNwZWN0LXctMiBzbTphc3BlY3QtaC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00ICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LTJ4bCBwLTAgdGV4dC1ncmF5LTUwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICBXcml0dGVuIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLVs1cHhdIHRleHQtdGVhbC00MDAgdGV4dC0yeGwgaG92ZXI6dGV4dC10ZWFsLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9BdXRob3JEZXRhaWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGl0ZW0uYXV0aG9yX2lkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvcnMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtMyBib3JkZXItYlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXQtMyBmbGV4IHJvdW5kZWQgYm9yZGVyLTAgYmctaW5kaWdvLTUwMCBweS0yIHB4LTYgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFNsaWRlciByZWxhdGVkQm9va3M9e3JlbGF0ZWRCb29rc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJMaW5rIiwiSG9tZSIsIlNsaWRlciIsIlRoaXJkIiwicm91dGVyIiwicXVlcnkiLCJib29rSWQiLCJpZCIsImNhdGVnb3J5SWQiLCJjYXRfaWQiLCJjb25zb2xlIiwibG9nIiwiYm9va3NJbmZvIiwic2V0Qm9va3NJbmZvIiwicmVsYXRlZEJvb2tzIiwic2V0UmVsYXRlZEJvb2tzIiwic2hvd0Jvb2tEZXRhaWxzIiwiZSIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJtYXRjaCIsImNhdGVnb3J5X2lkIiwiZ2V0UmVsYXRlZEJvb2tzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImtleSIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJoMyIsInRpdGxlIiwicCIsInNwYW4iLCJocmVmIiwicGF0aG5hbWUiLCJhdXRob3JfaWQiLCJhdXRob3JzIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Details.jsx\n"));

/***/ })

});