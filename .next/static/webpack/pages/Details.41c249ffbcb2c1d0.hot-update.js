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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Third; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Third() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var bookId = query.id;\n    //console.log(bookId);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    var showBookDetails = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select('title,image,author_id,authors (\"name\")').match({\n                                id: bookId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function showBookDetails(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showBookDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                    children: booksInfo.map(function(item, key) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"list-none\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"group\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://sabbirontheweb.com\" + \"\".concat(item.image),\n                                                    className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"group\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mt-4 flex items-center justify-between text-base font-semibold text-gray-700\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        children: item.title\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"mt-4 text-2xl p-0 text-gray-500 \",\n                                                    children: [\n                                                        \"Written by\",\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"ml-[5px] text-teal-500 text-2xl\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                                href: \"/Second\",\n                                                                children: item.authors.name\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                lineNumber: 54,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" mt-3 border-b\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"ml-auto mt-3 flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none\",\n                                                    children: [\n                                                        \" \",\n                                                        \"Download\",\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, key, true, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Third, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Third;\nvar _c;\n$RefreshReg$(_c, \"Third\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFDWDtBQUNOO0FBQ0w7QUFDSDtBQUNYLFNBQVNPLEtBQUssR0FBRzs7O0lBQzlCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNTSxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBSztJQUMxQixJQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsRUFBRTtJQUN2QixzQkFBc0I7SUFDdEIsSUFBa0NWLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNXLFNBQVMsR0FBa0JYLEdBQVksR0FBOUIsRUFBRVksWUFBWSxHQUFJWixHQUFZLEdBQWhCO0lBRTlCLElBQU1hLGVBQWU7bUJBQUcsNkZBQU9DLENBQUMsRUFBSztnQkFDYixHQUdFLEVBSGxCQyxJQUFJLEVBQUVDLEtBQUs7Ozs7d0JBQUs7OzRCQUFNYiwrQ0FDckIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QmUsTUFBTSxDQUFFLHdDQUFzQyxDQUFFLENBQ2hEQyxLQUFLLENBQUM7Z0NBQUVULEVBQUUsRUFBRUQsTUFBTTs2QkFBRSxDQUFDOzBCQUFBOzt3QkFIRixHQUdFLEdBSEYsYUFHRSxFQUhsQk0sSUFBSSxHQUFZLEdBR0UsQ0FIbEJBLElBQUksRUFBRUMsS0FBSyxHQUFLLEdBR0UsQ0FIWkEsS0FBSzt3QkFJakIsSUFBSUEsS0FBSyxFQUFFOzRCQUNUSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLE9BQU87NEJBQ0xKLFlBQVksQ0FBQ0csSUFBSSxDQUFDLENBQUM7NEJBQ25CSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDLENBQUM7d0JBQ3BCLENBQUM7Ozs7OztRQUNILENBQUM7d0JBWEtGLGVBQWUsQ0FBVUMsQ0FBQzs7O09BVy9CO0lBQ0RiLGdEQUFTLENBQUMsV0FBTTtRQUNkWSxlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ1MsS0FBRzs7MEJBQ0YsOERBQUNqQiw2Q0FBSTs7OztvQkFBRzswQkFDUiw4REFBQ2lCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUN2Qiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9FQUFvRTs4QkFDaEZaLFNBQVMsQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsR0FBRzs2Q0FDdkIsOERBQUNDLElBQUU7NEJBQVdKLFNBQVMsRUFBQyxXQUFXOztnQ0FDaEMsR0FBRzs4Q0FDSiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGlGQUFpRjs7c0RBQzlGLDhEQUFDRCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsT0FBTztzREFDcEIsNEVBQUNELEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxxRkFBcUY7MERBQ2xHLDRFQUFDSyxLQUFHO29EQUNGQyxHQUFHLEVBQUUsNEJBQTJCLEdBQUksRUFBQyxDQUFhLE9BQVhKLElBQUksQ0FBQ0ssS0FBSyxDQUFFO29EQUNuRFAsU0FBUyxFQUFDLGlFQUFpRTs7Ozs7eURBQzNFOzs7OztxREFDRTs7Ozs7aURBQ0Y7c0RBRU4sOERBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxPQUFPOzs4REFDcEIsOERBQUNELEtBQUc7b0RBQUNDLFNBQVMsRUFBQyw4RUFBK0U7OERBQzVGLDRFQUFDUSxJQUFFO2tFQUFFTixJQUFJLENBQUNPLEtBQUs7Ozs7OzZEQUFNOzs7Ozt5REFDakI7OERBQ04sOERBQUNDLEdBQUM7b0RBQUNDLEtBQUssRUFBQyxrQ0FBa0M7O3dEQUFDLFlBQ2hDO3dEQUFDLEdBQUc7c0VBQ2QsOERBQUNDLE1BQUk7NERBQUNaLFNBQVMsRUFBQyxpQ0FBaUM7c0VBQy9DLDRFQUFDbkIsa0RBQUk7Z0VBQUNnQyxJQUFJLEVBQUMsU0FBUzswRUFBRVgsSUFBSSxDQUFDWSxPQUFPLENBQUNDLElBQUk7Ozs7O3FFQUFROzs7OztpRUFDMUM7Ozs7Ozt5REFFTDs4REFDSiw4REFBQ2hCLEtBQUc7b0RBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O3lEQUFPOzhEQUN0Qyw4REFBQ2dCLFFBQU07b0RBQUNoQixTQUFTLEVBQUMsOEdBQThHOzt3REFDN0gsR0FBRzt3REFBQyxVQUNHO3dEQUFDLEdBQUc7Ozs7Ozt5REFDTDs7Ozs7O2lEQUNMOzs7Ozs7eUNBQ0Y7OzJCQTdCQ0csR0FBRzs7OztpQ0E4QlA7cUJBQ04sQ0FBQzs7Ozs7d0JBQ0U7Ozs7O29CQUNGOzs7Ozs7WUFxS0YsQ0FDTjtBQUNKLENBQUM7R0FyT3VCcEIsS0FBSzs7UUFDWkosa0RBQVM7OztBQURGSSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbHMuanN4PzY5ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhpcmQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYm9va0lkID0gcXVlcnkuaWQ7XHJcbiAgLy9jb25zb2xlLmxvZyhib29rSWQpO1xyXG4gIGNvbnN0IFtib29rc0luZm8sIHNldEJvb2tzSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dCb29rRGV0YWlscyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJib29rc19kdXBsaWNhdGVcIilcclxuICAgICAgLnNlbGVjdChgdGl0bGUsaW1hZ2UsYXV0aG9yX2lkLGF1dGhvcnMgKFwibmFtZVwiKWApXHJcbiAgICAgIC5tYXRjaCh7IGlkOiBib29rSWQgfSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Qm9va3NJbmZvKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93Qm9va0RldGFpbHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SG9tZSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cclxuICAgICAgICAgIHtib29rc0luZm8ubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgbGc6bWwtWzMwMHB4XSB4bDpnYXAteC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzbTphc3BlY3Qtdy0yIHNtOmFzcGVjdC1oLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3NhYmJpcm9udGhld2ViLmNvbWAgKyBgJHtpdGVtLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTQgdGV4dC0yeGwgcC0wIHRleHQtZ3JheS01MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC1bNXB4XSB0ZXh0LXRlYWwtNTAwIHRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1NlY29uZFwiPntpdGVtLmF1dGhvcnMubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtMyBib3JkZXItYlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXQtMyBmbGV4IHJvdW5kZWQgYm9yZGVyLTAgYmctaW5kaWdvLTUwMCBweS0yIHB4LTYgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwhLS0gYXV0aG9yIGluZm9ybWF0aW9uIC0tPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgbXgtYXV0byBtdC1bMTAwcHhdXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgIEF1dGhvciBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB5LTVcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+RnVsbCBuYW1lPC9kdD5cclxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSBmbGV4IHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTpjb2wtc3Bhbi0yIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPk1hcmdvdCBGb3N0ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC00IGZsZXgtc2hyaW5rLTBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB5LTVcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBmb3JcclxuICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIGZsZXggdGV4dC1zbSB0ZXh0LWdyYXktOTAwIHNtOmNvbC1zcGFuLTIgc206bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+QmFja2VuZCBEZXZlbG9wZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC00IGZsZXgtc2hyaW5rLTBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB5LTVcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSBmbGV4IHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTpjb2wtc3Bhbi0yIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPm1hcmdvdGZvc3RlckBleGFtcGxlLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB5LTVcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICBTYWxhcnkgZXhwZWN0YXRpb25cclxuICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIGZsZXggdGV4dC1zbSB0ZXh0LWdyYXktOTAwIHNtOmNvbC1zcGFuLTIgc206bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+JDEyMCwwMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC00IGZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLXdoaXRlIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgc206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTpnYXAtNCBzbTpweS01XCI+XHJcbiAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkFib3V0PC9kdD5cclxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSBmbGV4IHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTpjb2wtc3Bhbi0yIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICBGdWdpYXQgaXBzdW0gaXBzdW0gZGVzZXJ1bnQgY3VscGEgYXV0ZSBzaW50IGRvIG5vc3RydWQgYW5pbVxyXG4gICAgICAgICAgICAgICAgICBpbmNpZGlkdW50IGNpbGx1bSBjdWxwYSBjb25zZXF1YXQuIEV4Y2VwdGV1ciBxdWkgaXBzdW0gYWxpcXVpcFxyXG4gICAgICAgICAgICAgICAgICBjb25zZXF1YXQgc2ludC4gU2l0IGlkIG1vbGxpdCBudWxsYSBtb2xsaXQgbm9zdHJ1ZCBpbiBlYVxyXG4gICAgICAgICAgICAgICAgICBvZmZpY2lhIHByb2lkZW50LiBJcnVyZSBub3N0cnVkIHBhcmlhdHVyIG1vbGxpdCBhZCBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGRlc2VydW50IHF1aSBldS5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgc206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTpnYXAtNCBzbTpweS01XCI+XHJcbiAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkF0dGFjaG1lbnRzPC9kdD5cclxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS05MDAgc206Y29sLXNwYW4tMiBzbTptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgcm9sZT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0zIHBsLTMgcHItNCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMCBmbGV4LTEgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1LjYyMSA0LjM3OWEzIDMgMCAwMC00LjI0MiAwbC03IDdhMyAzIDAgMDA0LjI0MSA0LjI0M2guMDAxbC40OTctLjVhLjc1Ljc1IDAgMDExLjA2NCAxLjA1N2wtLjQ5OC41MDEtLjAwMi4wMDJhNC41IDQuNSAwIDAxLTYuMzY0LTYuMzY0bDctN2E0LjUgNC41IDAgMDE2LjM2OCA2LjM2bC0zLjQ1NSAzLjU1M0EyLjYyNSAyLjYyNSAwIDExOS41MiA5LjUybDMuNDUtMy40NTFhLjc1Ljc1IDAgMTExLjA2MSAxLjA2bC0zLjQ1IDMuNDUxYTEuMTI1IDEuMTI1IDAgMDAxLjU4NyAxLjU5NWwzLjQ1NC0zLjU1M2EzIDMgMCAwMDAtNC4yNDJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiB3LTAgZmxleC0xIHRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VtZV9iYWNrX2VuZF9kZXZlbG9wZXIucGRmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IGZsZXggZmxleC1zaHJpbmstMCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTMgcGwtMyBwci00IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0wIGZsZXgtMSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSBmbGV4LXNocmluay0wIHRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUuNjIxIDQuMzc5YTMgMyAwIDAwLTQuMjQyIDBsLTcgN2EzIDMgMCAwMDQuMjQxIDQuMjQzaC4wMDFsLjQ5Ny0uNWEuNzUuNzUgMCAwMTEuMDY0IDEuMDU3bC0uNDk4LjUwMS0uMDAyLjAwMmE0LjUgNC41IDAgMDEtNi4zNjQtNi4zNjRsNy03YTQuNSA0LjUgMCAwMTYuMzY4IDYuMzZsLTMuNDU1IDMuNTUzQTIuNjI1IDIuNjI1IDAgMTE5LjUyIDkuNTJsMy40NS0zLjQ1MWEuNzUuNzUgMCAxMTEuMDYxIDEuMDZsLTMuNDUgMy40NTFhMS4xMjUgMS4xMjUgMCAwMDEuNTg3IDEuNTk1bDMuNDU0LTMuNTUzYTMgMyAwIDAwMC00LjI0MnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIHctMCBmbGV4LTEgdHJ1bmNhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJsZXR0ZXJfYmFja19lbmRfZGV2ZWxvcGVyLnBkZlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBmbGV4IGZsZXgtc2hyaW5rLTAgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLXdoaXRlIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPC9kbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiTGluayIsIkhvbWUiLCJUaGlyZCIsInJvdXRlciIsInF1ZXJ5IiwiYm9va0lkIiwiaWQiLCJib29rc0luZm8iLCJzZXRCb29rc0luZm8iLCJzaG93Qm9va0RldGFpbHMiLCJlIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsIm1hdGNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsaSIsImltZyIsInNyYyIsImltYWdlIiwiaDMiLCJ0aXRsZSIsInAiLCJjbGFzcyIsInNwYW4iLCJocmVmIiwiYXV0aG9ycyIsIm5hbWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Details.jsx\n"));

/***/ })

});