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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Third; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slider */ \"./pages/Slider.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Third() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var bookId = query.id;\n    var categoryId = query.cat_id;\n    console.log(bookId);\n    console.log(categoryId);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedBooks = ref1[0], setRelatedBooks = ref1[1];\n    var showBookDetails = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select('*,authors (\"name\")').match({\n                                id: bookId,\n                                category_id: categoryId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function showBookDetails(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getRelatedBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select(\"*\").match({\n                                category_id: categoryId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setRelatedBooks(data);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getRelatedBooks(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showBookDetails();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getRelatedBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                        children: booksInfo.map(function(item, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"list-none\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"group\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: item.image,\n                                                        className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"group\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-4 flex items-center justify-between text-base font-semibold text-gray-700\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: item.title\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mt-4 text-2xl p-0 text-gray-500 \",\n                                                        children: [\n                                                            \"Written by\",\n                                                            \" \",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"ml-[5px] text-teal-400 text-2xl hover:text-teal-500\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                                    href: {\n                                                                        pathname: \"/AuthorDetails\",\n                                                                        query: {\n                                                                            id: item.author_id\n                                                                        }\n                                                                    },\n                                                                    className: \"\",\n                                                                    children: item.authors.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                    lineNumber: 76,\n                                                                    columnNumber: 23\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \" mt-3 border-b\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        color: \"blue\",\n                                                        fill: \"none\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        strokeWidth: \"1.5\",\n                                                        stroke: \"currentColor\",\n                                                        className: \"inline w-5 h-5\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            strokeLinecap: \"round\",\n                                                            strokeLinejoin: \"round\",\n                                                            d: \"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"ml-auto mt-3 flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none\",\n                                                        children: \"Download\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, key, true, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        relatedBooks: relatedBooks\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Third, \"M1yrY7vm2oKb8AxnGjkXY5BG3NI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Third;\nvar _c;\n$RefreshReg$(_c, \"Third\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7Ozs7eUVBQ2I7Ozs7O3FFQUNGOzs7Ozs7NkRBQ0w7a0VBQ0osOERBQUNqQixLQUFHO3dEQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzs7Ozs2REFBTztrRUFDdEMsOERBQUNpQixLQUFHO3dEQUNGQyxLQUFLLEVBQUMsNEJBQTRCO3dEQUNsQ0MsS0FBSyxFQUFDLE1BQU07d0RBQ1pDLElBQUksRUFBQyxNQUFNO3dEQUNYQyxPQUFPLEVBQUMsV0FBVzt3REFDbkJDLFdBQVcsRUFBQyxLQUFLO3dEQUNqQkMsTUFBTSxFQUFDLGNBQWM7d0RBQ3JCdkIsU0FBUyxFQUFDLGdCQUFnQjtrRUFFMUIsNEVBQUN3QixNQUFJOzREQUNIQyxhQUFhLEVBQUMsT0FBTzs0REFDckJDLGNBQWMsRUFBQyxPQUFPOzREQUN0QkMsQ0FBQyxFQUFDLDBHQUEwRzs7Ozs7aUVBQzVHOzs7Ozs2REFDRTtrRUFDTiw4REFBQ0MsUUFBTTt3REFBQzVCLFNBQVMsRUFBQyw4R0FBOEc7a0VBQUMsVUFFakk7Ozs7OzZEQUFTOzs7Ozs7cURBd0JMOzs7Ozs7NkNBQ0Y7OytCQXpFQ0csR0FBRzs7OztxQ0EwRVA7eUJBQ04sQ0FBQzs7Ozs7NEJBQ0U7a0NBRU4sOERBQUMzQiwrQ0FBTTt3QkFBQ1ksWUFBWSxFQUFFQSxZQUFZOzs7Ozs0QkFBSTs7Ozs7O29CQUNsQzs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0FuSXVCWCxLQUFLOztRQUNaTCxrREFBUzs7O0FBREZLLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWlscy5qc3g/NjlkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuL1NsaWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhpcmQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYm9va0lkID0gcXVlcnkuaWQ7XHJcbiAgY29uc3QgY2F0ZWdvcnlJZCA9IHF1ZXJ5LmNhdF9pZDtcclxuICBjb25zb2xlLmxvZyhib29rSWQpO1xyXG4gIGNvbnNvbGUubG9nKGNhdGVnb3J5SWQpO1xyXG4gIGNvbnN0IFtib29rc0luZm8sIHNldEJvb2tzSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlbGF0ZWRCb29rcywgc2V0UmVsYXRlZEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0Jvb2tEZXRhaWxzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImJvb2tzX2R1cGxpY2F0ZVwiKVxyXG4gICAgICAuc2VsZWN0KGAqLGF1dGhvcnMgKFwibmFtZVwiKWApXHJcbiAgICAgIC5tYXRjaCh7IGlkOiBib29rSWQsIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCb29rc0luZm8oZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0UmVsYXRlZEJvb2tzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImJvb2tzX2R1cGxpY2F0ZVwiKVxyXG4gICAgICAuc2VsZWN0KGAqYClcclxuICAgICAgLm1hdGNoKHsgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlbGF0ZWRCb29rcyhkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2hvd0Jvb2tEZXRhaWxzKCk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRSZWxhdGVkQm9va3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SG9tZSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cclxuICAgICAgICAgIHtib29rc0luZm8ubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgbGc6bWwtWzMwMHB4XSB4bDpnYXAteC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzbTphc3BlY3Qtdy0yIHNtOmFzcGVjdC1oLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtMnhsIHAtMCB0ZXh0LWdyYXktNTAwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdyaXR0ZW4gYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtWzVweF0gdGV4dC10ZWFsLTQwMCB0ZXh0LTJ4bCBob3Zlcjp0ZXh0LXRlYWwtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL0F1dGhvckRldGFpbHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogaXRlbS5hdXRob3JfaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYXV0aG9ycy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC0zIGJvcmRlci1iXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUgdy01IGgtNVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDE2LjV2Mi4yNUEyLjI1IDIuMjUgMCAwMDUuMjUgMjFoMTMuNUEyLjI1IDIuMjUgMCAwMDIxIDE4Ljc1VjE2LjVNMTYuNSAxMkwxMiAxNi41bTAgMEw3LjUgMTJtNC41IDQuNVYzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC1hdXRvIG10LTMgZmxleCByb3VuZGVkIGJvcmRlci0wIGJnLWluZGlnby01MDAgcHktMiBweC02IHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtdC1bM3B4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZSB3LTUgaC01XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDE2LjV2Mi4yNUEyLjI1IDIuMjUgMCAwMDUuMjUgMjFoMTMuNUEyLjI1IDIuMjUgMCAwMDIxIDE4Ljc1VjE2LjVNMTYuNSAxMkwxMiAxNi41bTAgMEw3LjUgMTJtNC41IDQuNVYzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3NhYmJpcm9udGhld2ViLmNvbWAgKyBgJHtpdGVtLmxpbmt9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLVszcHhdIGN1cnNvci1wb2ludGVyIHRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTbGlkZXIgcmVsYXRlZEJvb2tzPXtyZWxhdGVkQm9va3N9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiTGluayIsIkhvbWUiLCJTbGlkZXIiLCJUaGlyZCIsInJvdXRlciIsInF1ZXJ5IiwiYm9va0lkIiwiaWQiLCJjYXRlZ29yeUlkIiwiY2F0X2lkIiwiY29uc29sZSIsImxvZyIsImJvb2tzSW5mbyIsInNldEJvb2tzSW5mbyIsInJlbGF0ZWRCb29rcyIsInNldFJlbGF0ZWRCb29rcyIsInNob3dCb29rRGV0YWlscyIsImUiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwibWF0Y2giLCJjYXRlZ29yeV9pZCIsImdldFJlbGF0ZWRCb29rcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsaSIsImltZyIsInNyYyIsImltYWdlIiwiaDMiLCJ0aXRsZSIsInAiLCJzcGFuIiwiaHJlZiIsInBhdGhuYW1lIiwiYXV0aG9yX2lkIiwiYXV0aG9ycyIsIm5hbWUiLCJzdmciLCJ4bWxucyIsImNvbG9yIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Details.jsx\n"));

/***/ })

});