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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Third; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slider */ \"./pages/Slider.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Third() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var query = router.query;\n    var bookId = query.id;\n    var categoryId = query.cat_id;\n    console.log(bookId);\n    console.log(categoryId);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedBooks = ref1[0], setRelatedBooks = ref1[1];\n    var showBookDetails = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select(\"*,authors (\\\"name\\\"),categories('*')\").match({\n                                id: bookId,\n                                category_id: categoryId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function showBookDetails(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getRelatedBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"books_duplicate\").select(\"*\").match({\n                                category_id: categoryId\n                            })\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setRelatedBooks(data);\n                        //console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getRelatedBooks(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showBookDetails();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getRelatedBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                        children: booksInfo.map(function(item, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"list-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"group\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: item.image,\n                                                    className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"group\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mt-4 flex items-center justify-between text-base font-semibold text-gray-700\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        children: item.title\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mt-4 text-2xl p-0 text-gray-500 \",\n                                                    children: [\n                                                        \"Written by\",\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"ml-[5px] text-teal-400 text-2xl hover:text-teal-500\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                                href: {\n                                                                    pathname: \"/AuthorDetails\",\n                                                                    query: {\n                                                                        id: item.author_id\n                                                                    }\n                                                                },\n                                                                className: \"\",\n                                                                children: item.authors.name\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" mt-3 border-b\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"https://sabbirontheweb.com\" + \"\".concat(item.link),\n                                                        download: true,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"ml-auto mt-3 flex rounded border-0 bg-blue-500 py-2 px-3 text-white hover:bg-blue-600 focus:outline-none\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                                    color: \"white\",\n                                                                    fill: \"none\",\n                                                                    viewBox: \"0 0 24 24\",\n                                                                    strokeWidth: \"1.5\",\n                                                                    stroke: \"currentColor\",\n                                                                    className: \"animate-bounce inline w-5 h-5 mr-[5px]\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                        strokeLinecap: \"round\",\n                                                                        strokeLinejoin: \"round\",\n                                                                        d: \"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                        lineNumber: 99,\n                                                                        columnNumber: 27\n                                                                    }, _this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                                    lineNumber: 90,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                \"Download\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this)\n                            }, key, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        relatedBooks: relatedBooks\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Details.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Third, \"M1yrY7vm2oKb8AxnGjkXY5BG3NI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Third;\nvar _c;\n$RefreshReg$(_c, \"Third\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQW1EO0FBQ1g7QUFDTjtBQUNMO0FBQ0g7QUFDSTtBQUVmLFNBQVNRLEtBQUssR0FBRzs7O0lBQzlCLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQixJQUFNTyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBSztJQUMxQixJQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsRUFBRTtJQUN2QixJQUFNQyxVQUFVLEdBQUdILEtBQUssQ0FBQ0ksTUFBTTtJQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7SUFDeEIsSUFBa0NaLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNnQixTQUFTLEdBQWtCaEIsR0FBWSxHQUE5QixFQUFFaUIsWUFBWSxHQUFJakIsR0FBWSxHQUFoQjtJQUM5QixJQUF3Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q2tCLFlBQVksR0FBcUJsQixJQUFZLEdBQWpDLEVBQUVtQixlQUFlLEdBQUluQixJQUFZLEdBQWhCO0lBRXBDLElBQU1vQixlQUFlO21CQUFHLDZGQUFPQyxDQUFDLEVBQUs7Z0JBQ2IsR0FHMkIsRUFIM0NDLElBQUksRUFBRUMsS0FBSzs7Ozt3QkFBSzs7NEJBQU1wQiwrQ0FDckIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QnNCLE1BQU0sQ0FBRSxzQ0FBa0MsQ0FBRSxDQUM1Q0MsS0FBSyxDQUFDO2dDQUFFZixFQUFFLEVBQUVELE1BQU07Z0NBQUVpQixXQUFXLEVBQUVmLFVBQVU7NkJBQUUsQ0FBQzswQkFBQTs7d0JBSDNCLEdBRzJCLEdBSDNCLGFBRzJCLEVBSDNDVSxJQUFJLEdBQVksR0FHMkIsQ0FIM0NBLElBQUksRUFBRUMsS0FBSyxHQUFLLEdBRzJCLENBSHJDQSxLQUFLO3dCQUtqQixJQUFJQSxLQUFLLEVBQUU7NEJBQ1RULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxLQUFLLENBQUMsQ0FBQzt3QkFDckIsT0FBTzs0QkFDTE4sWUFBWSxDQUFDSyxJQUFJLENBQUMsQ0FBQzs0QkFDbkJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQzs7Ozs7O1FBQ0gsQ0FBQzt3QkFaS0YsZUFBZSxDQUFVQyxDQUFDOzs7T0FZL0I7SUFDRCxJQUFNTyxlQUFlO21CQUFHLDZGQUFPUCxDQUFDLEVBQUs7Z0JBQ2IsR0FHZSxFQUgvQkMsSUFBSSxFQUFFQyxLQUFLOzs7O3dCQUFLOzs0QkFBTXBCLCtDQUNyQixDQUFDLGlCQUFpQixDQUFDLENBQ3ZCc0IsTUFBTSxDQUFFLEdBQUMsQ0FBRSxDQUNYQyxLQUFLLENBQUM7Z0NBQUVDLFdBQVcsRUFBRWYsVUFBVTs2QkFBRSxDQUFDOzBCQUFBOzt3QkFIZixHQUdlLEdBSGYsYUFHZSxFQUgvQlUsSUFBSSxHQUFZLEdBR2UsQ0FIL0JBLElBQUksRUFBRUMsS0FBSyxHQUFLLEdBR2UsQ0FIekJBLEtBQUs7d0JBS2pCLElBQUlBLEtBQUssRUFBRTs0QkFDVFQsT0FBTyxDQUFDQyxHQUFHLENBQUNRLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixPQUFPOzRCQUNMSixlQUFlLENBQUNHLElBQUksQ0FBQyxDQUFDO3dCQUN0QixvQkFBb0I7d0JBQ3RCLENBQUM7Ozs7OztRQUNILENBQUM7d0JBWktNLGVBQWUsQ0FBVVAsQ0FBQzs7O09BWS9CO0lBQ0RwQixnREFBUyxDQUFDLFdBQU07UUFDZG1CLGVBQWUsRUFBRSxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQbkIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QyQixlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUN4Qiw2Q0FBSTs7OztvQkFBRzswQkFDUiw4REFBQ3dCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOztrQ0FDdkIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxvRUFBb0U7a0NBQ2hGZCxTQUFTLENBQUNlLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUc7aURBQ3ZCLDhEQUFDQyxJQUFFO2dDQUFXSixTQUFTLEVBQUMsV0FBVzswQ0FDakMsNEVBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxpRkFBaUY7O3NEQUM5Riw4REFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLE9BQU87c0RBQ3BCLDRFQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMscUZBQXFGOzBEQUNsRyw0RUFBQ0ssS0FBRztvREFDRkMsR0FBRyxFQUFFSixJQUFJLENBQUNLLEtBQUs7b0RBQ2ZQLFNBQVMsRUFBQyxpRUFBaUU7Ozs7O3lEQUMzRTs7Ozs7cURBQ0U7Ozs7O2lEQUNGO3NEQUVOLDhEQUFDRCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsT0FBTzs7OERBQ3BCLDhEQUFDRCxLQUFHO29EQUFDQyxTQUFTLEVBQUMsOEVBQStFOzhEQUM1Riw0RUFBQ1EsSUFBRTtrRUFBRU4sSUFBSSxDQUFDTyxLQUFLOzs7Ozs2REFBTTs7Ozs7eURBQ2pCOzhEQUNOLDhEQUFDQyxHQUFDO29EQUFDVixTQUFTLEVBQUMsa0NBQWtDOzt3REFBQyxZQUNwQzt3REFBQyxHQUFHO3NFQUNkLDhEQUFDVyxNQUFJOzREQUFDWCxTQUFTLEVBQUMscURBQXFEO3NFQUNuRSw0RUFBQzFCLGtEQUFJO2dFQUNIc0MsSUFBSSxFQUFFO29FQUNKQyxRQUFRLEVBQUUsZ0JBQWdCO29FQUMxQmxDLEtBQUssRUFBRTt3RUFBRUUsRUFBRSxFQUFFcUIsSUFBSSxDQUFDWSxTQUFTO3FFQUFFO2lFQUM5QjtnRUFDRGQsU0FBUyxFQUFDLEVBQUU7MEVBRVhFLElBQUksQ0FBQ2EsT0FBTyxDQUFDQyxJQUFJOzs7OztxRUFDYjs7Ozs7aUVBQ0Y7Ozs7Ozt5REFDTDs4REFDSiw4REFBQ2pCLEtBQUc7b0RBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O3lEQUFPOzhEQUN0Qyw4REFBQ0QsS0FBRzs4REFDRiw0RUFBQ2tCLEdBQUM7d0RBQUNMLElBQUksRUFBRSw0QkFBMkIsR0FBRSxFQUFDLENBQVksT0FBVlYsSUFBSSxDQUFDZ0IsSUFBSSxDQUFFO3dEQUFFQyxRQUFRO2tFQUM1RCw0RUFBQ0MsUUFBTTs0REFBQ3BCLFNBQVMsRUFBQywwR0FBMEc7OzhFQUMxSCw4REFBQ3FCLEtBQUc7b0VBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7b0VBQ2xDQyxLQUFLLEVBQUMsT0FBTztvRUFDYkMsSUFBSSxFQUFDLE1BQU07b0VBQ1hDLE9BQU8sRUFBQyxXQUFXO29FQUNuQkMsV0FBVyxFQUFDLEtBQUs7b0VBQ2pCQyxNQUFNLEVBQUMsY0FBYztvRUFDckIzQixTQUFTLEVBQUMsd0NBQXdDOzhFQUVsRCw0RUFBQzRCLE1BQUk7d0VBQ0hDLGFBQWEsRUFBQyxPQUFPO3dFQUNyQkMsY0FBYyxFQUFDLE9BQU87d0VBQ3RCQyxDQUFDLEVBQUMsMEdBQTBHOzs7Ozs2RUFDNUc7Ozs7O3lFQUNFO2dFQUFBLFVBRVI7Ozs7OztpRUFBUzs7Ozs7NkRBQ1A7Ozs7O3lEQUNBOzs7Ozs7aURBQ0Y7Ozs7Ozt5Q0FDRjsrQkFyREM1QixHQUFHOzs7O3FDQXNEUDt5QkFDTixDQUFDOzs7Ozs0QkFDRTtrQ0FFTiw4REFBQzNCLCtDQUFNO3dCQUFDWSxZQUFZLEVBQUVBLFlBQVk7Ozs7OzRCQUFJOzs7Ozs7b0JBQ2xDOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQS9HdUJYLEtBQUs7O1FBQ1pMLGtEQUFTOzs7QUFERkssS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZXRhaWxzLmpzeD82OWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGlyZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBib29rSWQgPSBxdWVyeS5pZDtcclxuICBjb25zdCBjYXRlZ29yeUlkID0gcXVlcnkuY2F0X2lkO1xyXG4gIGNvbnNvbGUubG9nKGJvb2tJZCk7XHJcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlJZCk7XHJcbiAgY29uc3QgW2Jvb2tzSW5mbywgc2V0Qm9va3NJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVsYXRlZEJvb2tzLCBzZXRSZWxhdGVkQm9va3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzaG93Qm9va0RldGFpbHMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgIC5zZWxlY3QoYCosYXV0aG9ycyAoXCJuYW1lXCIpLGNhdGVnb3JpZXMoJyonKWApXHJcbiAgICAgIC5tYXRjaCh7IGlkOiBib29rSWQsIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCb29rc0luZm8oZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0UmVsYXRlZEJvb2tzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImJvb2tzX2R1cGxpY2F0ZVwiKVxyXG4gICAgICAuc2VsZWN0KGAqYClcclxuICAgICAgLm1hdGNoKHsgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlbGF0ZWRCb29rcyhkYXRhKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93Qm9va0RldGFpbHMoKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFJlbGF0ZWRCb29rcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIb21lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPlxyXG4gICAgICAgICAge2Jvb2tzSW5mby5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGxnOm1sLVszMDBweF0geGw6Z2FwLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc206YXNwZWN0LXctMiBzbTphc3BlY3QtaC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00ICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LTJ4bCBwLTAgdGV4dC1ncmF5LTUwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICBXcml0dGVuIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLVs1cHhdIHRleHQtdGVhbC00MDAgdGV4dC0yeGwgaG92ZXI6dGV4dC10ZWFsLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9BdXRob3JEZXRhaWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGl0ZW0uYXV0aG9yX2lkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvcnMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtMyBib3JkZXItYlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3NhYmJpcm9udGhld2ViLmNvbWArYCR7aXRlbS5saW5rfWB9IGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC1hdXRvIG10LTMgZmxleCByb3VuZGVkIGJvcmRlci0wIGJnLWJsdWUtNTAwIHB5LTIgcHgtMyB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtYm91bmNlIGlubGluZSB3LTUgaC01IG1yLVs1cHhdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMgMTYuNXYyLjI1QTIuMjUgMi4yNSAwIDAwNS4yNSAyMWgxMy41QTIuMjUgMi4yNSAwIDAwMjEgMTguNzVWMTYuNU0xNi41IDEyTDEyIDE2LjVtMCAwTDcuNSAxMm00LjUgNC41VjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTbGlkZXIgcmVsYXRlZEJvb2tzPXtyZWxhdGVkQm9va3N9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiTGluayIsIkhvbWUiLCJTbGlkZXIiLCJUaGlyZCIsInJvdXRlciIsInF1ZXJ5IiwiYm9va0lkIiwiaWQiLCJjYXRlZ29yeUlkIiwiY2F0X2lkIiwiY29uc29sZSIsImxvZyIsImJvb2tzSW5mbyIsInNldEJvb2tzSW5mbyIsInJlbGF0ZWRCb29rcyIsInNldFJlbGF0ZWRCb29rcyIsInNob3dCb29rRGV0YWlscyIsImUiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwibWF0Y2giLCJjYXRlZ29yeV9pZCIsImdldFJlbGF0ZWRCb29rcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsaSIsImltZyIsInNyYyIsImltYWdlIiwiaDMiLCJ0aXRsZSIsInAiLCJzcGFuIiwiaHJlZiIsInBhdGhuYW1lIiwiYXV0aG9yX2lkIiwiYXV0aG9ycyIsIm5hbWUiLCJhIiwibGluayIsImRvd25sb2FkIiwiYnV0dG9uIiwic3ZnIiwieG1sbnMiLCJjb2xvciIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Details.jsx\n"));

/***/ })

});