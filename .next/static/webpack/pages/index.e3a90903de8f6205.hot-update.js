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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pagination */ \"./components/pagination.jsx\");\n/* harmony import */ var _components_Authors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Authors */ \"./components/Authors.jsx\");\n/* harmony import */ var _components_Sub_components_Categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sub-components/Categories */ \"./components/Sub-components/Categories.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    // const [toggleCategories, setToggleCategories] = useState(false);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksFromCategory = ref1[0], setBooksFromCategory = ref1[1];\n    //const [searchQuery, setSearchQuery] = useState(\"\");\n    var getBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(id) {\n            var ref, data, error, ref1, data1, error1;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof id === \"number\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*,categories(name)\").eq(\"author_id\", id)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                        }\n                        return [\n                            3,\n                            5\n                        ];\n                    case 2:\n                        if (!(typeof id === \"object\")) return [\n                            3,\n                            3\n                        ];\n                        setBooksInfo(id);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*,categories(name)\").range(0, 19)\n                        ];\n                    case 4:\n                        ref1 = _state.sent(), data1 = ref1.data, error1 = ref1.error;\n                        if (error1) {\n                            console.log(error1);\n                        } else {\n                            setBooksInfo(data1);\n                        }\n                        _state.label = 5;\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getBooks(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-zinc-800 sm:h-screen lg:h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \" bg-zinc-800 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sub_components_Categories__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                getBooks: getBooks\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"bg-zinc-800 pt-6 pb-24 w-full h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-10 lg:grid-cols-10 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Authors__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            getBooks: getBooks\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"lg:col-span-8 \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" rounded-lg lg:h-full\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex justify-center\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                        className: \"bg-zinc-800 space-y-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:space-y-0 lg:grid-cols-6 \",\n                                                        children: booksInfo.map(function(item) {\n                                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                                href: {\n                                                                    pathname: \"/Details\",\n                                                                    query: {\n                                                                        id: item.id,\n                                                                        category_name: item.categories.name,\n                                                                        category_id: item.category_id\n                                                                    }\n                                                                },\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                                    className: \"cursor-pointer scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \" space-y-6 xl:space-y-4\",\n                                                                        children: [\n                                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                                className: \"object-contain mx-auto px-2 rounded-md py-1\",\n                                                                                src: item.image,\n                                                                                alt: \"\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                lineNumber: 89,\n                                                                                columnNumber: 31\n                                                                            }, _this),\n                                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                                className: \"space-y-1 text-lg text-center font-medium leading-6\",\n                                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                                    className: \"text-sm text-white \",\n                                                                                    children: item.title\n                                                                                }, void 0, false, {\n                                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                    lineNumber: 95,\n                                                                                    columnNumber: 33\n                                                                                }, _this)\n                                                                            }, void 0, false, {\n                                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                lineNumber: 94,\n                                                                                columnNumber: 31\n                                                                            }, _this)\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                        lineNumber: 88,\n                                                                        columnNumber: 29\n                                                                    }, _this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                    lineNumber: 87,\n                                                                    columnNumber: 27\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                lineNumber: 77,\n                                                                columnNumber: 25\n                                                            }, _this);\n                                                        })\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFtRDtBQUNqQjtBQUNMO0FBQ0g7QUFDd0I7QUFDTjtBQUNxQjtBQUVsRCxTQUFTUyxLQUFLLEdBQUc7OztJQUM5QixJQUFrQ1QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF2Q1UsU0FBUyxHQUFrQlYsR0FBWSxHQUE5QixFQUFFVyxZQUFZLEdBQUlYLEdBQVksR0FBaEI7SUFFL0IsbUVBQW1FO0lBR2xFLElBQWtEQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXZEWSxpQkFBaUIsR0FBMEJaLElBQVksR0FBdEMsRUFBRWEsb0JBQW9CLEdBQUliLElBQVksR0FBaEI7SUFDOUMscURBQXFEO0lBR3JELElBQU1jLFFBQVE7bUJBQUcsNkZBQU9DLEVBQUUsRUFBSztnQkFHTCxHQUdBLEVBSGhCQyxJQUFJLEVBQUVDLEtBQUssRUFnQkssSUFHUCxFQUhURCxLQUFJLEVBQUVDLE1BQUs7Ozs7NkJBakJmLFFBQU9GLEVBQUUsS0FBSyxRQUFRLEdBQXRCOzs7MEJBQXNCO3dCQUNGOzs0QkFBTVosK0NBQ3JCLENBQUMsaUJBQWlCLENBQUMsQ0FDdkJnQixNQUFNLENBQUUsb0JBQWtCLENBQUUsQ0FDNUJDLEVBQUUsQ0FBQyxXQUFXLEVBQUVMLEVBQUUsQ0FBQzswQkFBQTs7d0JBSEEsR0FHQSxHQUhBLGFBR0EsRUFIaEJDLElBQUksR0FBWSxHQUdBLENBSGhCQSxJQUFJLEVBQUVDLEtBQUssR0FBSyxHQUdBLENBSFZBLEtBQUs7d0JBSWpCLElBQUlBLEtBQUssRUFBRTs0QkFDVEksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixPQUFPOzRCQUNMTixZQUFZLENBQUNLLElBQUksQ0FBQyxDQUFDO3dCQUNyQixDQUFDOzs7Ozs7NkJBRUssUUFBT0QsRUFBRSxLQUFLLFFBQVEsR0FBdEI7OzswQkFBc0I7d0JBRTVCSixZQUFZLENBQUNJLEVBQUUsQ0FBQzs7Ozs7O3dCQUlNOzs0QkFBTVosK0NBQ3JCLENBQUMsaUJBQWlCLENBQUMsQ0FDdkJnQixNQUFNLENBQUUsb0JBQWtCLENBQUUsQ0FDNUJJLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOzBCQUFBOzt3QkFITyxJQUdQLEdBSE8sYUFHUCxFQUhUUCxLQUFJLEdBQVksSUFHUCxDQUhUQSxJQUFJLEVBQUVDLE1BQUssR0FBSyxJQUdQLENBSEhBLEtBQUs7d0JBSWpCLElBQUlBLE1BQUssRUFBRTs0QkFDVEksT0FBTyxDQUFDQyxHQUFHLENBQUNMLE1BQUssQ0FBQyxDQUFDO3dCQUNyQixPQUFPOzRCQUVMTixZQUFZLENBQUNLLEtBQUksQ0FBQyxDQUFDO3dCQUNyQixDQUFDOzs7Ozs7OztRQUVMLENBQUM7d0JBOUJLRixRQUFRLENBQVVDLEVBQUU7OztPQThCekI7SUFJRGQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RhLFFBQVEsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBSVAscUJBQ0UsOERBQUNVLEtBQUc7a0JBQ0YsNEVBQUNBLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEVBQUU7OzhCQUNmLDhEQUFDcEIsNkNBQUk7Ozs7d0JBQUc7OEJBQ1IsOERBQUNtQixLQUFHO29CQUFDQyxTQUFTLEVBQUMscUNBQXFDOzhCQUNsRCw0RUFBQ0MsTUFBSTt3QkFBQ0QsU0FBUyxFQUFDLHNEQUF3RDs7MENBRXRFLDhEQUFDakIsNkVBQVU7Z0NBQUNNLFFBQVEsRUFBRUEsUUFBUTs7Ozs7b0NBQUk7MENBRWxDLDhEQUFDYSxTQUFPO2dDQUFDRixTQUFTLEVBQUMsc0NBQXNDOzBDQUN2RCw0RUFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGlFQUFrRTs7c0RBRS9FLDhEQUFDbEIsMkRBQU87NENBQUNPLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Z0RBQUk7c0RBQy9CLDhEQUFDVSxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO3NEQUM3Qiw0RUFBQ0QsS0FBRztnREFBQ0MsU0FBUyxFQUFDLHVCQUF3Qjs7a0VBQ3JDLDhEQUFDRCxLQUFHO3dEQUFDQyxTQUFTLEVBQUMscUJBQXFCOzs7Ozs0REFBTztrRUFDM0MsOERBQUNHLElBQUU7d0RBQUNILFNBQVMsRUFBQyxvRkFBcUY7a0VBQ2hHZixTQUFTLENBQUNtQixHQUFHLENBQUMsU0FBQ0MsSUFBSTtpRkFDbEIsOERBQUMxQixrREFBSTtnRUFDSDJCLElBQUksRUFBRTtvRUFDSkMsUUFBUSxFQUFFLFVBQVU7b0VBQ3BCQyxLQUFLLEVBQUU7d0VBQ0xsQixFQUFFLEVBQUVlLElBQUksQ0FBQ2YsRUFBRTt3RUFDWG1CLGFBQWEsRUFBRUosSUFBSSxDQUFDSyxVQUFVLENBQUNDLElBQUk7d0VBQ25DQyxXQUFXLEVBQUVQLElBQUksQ0FBQ08sV0FBVztxRUFDOUI7aUVBQ0Y7MEVBRUQsNEVBQUNDLElBQUU7b0VBQUNiLFNBQVMsRUFBQyxpR0FBaUc7OEVBQzdHLDRFQUFDRCxLQUFHO3dFQUFDQyxTQUFTLEVBQUMseUJBQXlCOzswRkFDdEMsOERBQUNjLEtBQUc7Z0ZBQ0ZkLFNBQVMsRUFBQyw2Q0FBK0M7Z0ZBQ3pEZSxHQUFHLEVBQUVWLElBQUksQ0FBQ1csS0FBSztnRkFDZkMsR0FBRyxFQUFDLEVBQUU7Ozs7O3FGQUNOOzBGQUNGLDhEQUFDbEIsS0FBRztnRkFBQ0MsU0FBUyxFQUFDLHFEQUFxRDswRkFDbEUsNEVBQUNrQixJQUFFO29GQUFDbEIsU0FBUyxFQUFDLHFCQUFxQjs4RkFDaENLLElBQUksQ0FBQ2MsS0FBSzs7Ozs7eUZBQ1I7Ozs7O3FGQUNEOzs7Ozs7NkVBQ0Y7Ozs7O3lFQUNIOzs7OztxRUFDQTt5REFDUixDQUFDOzs7Ozs0REFDQzs7Ozs7O29EQUNEOzs7OztnREFDRjs7Ozs7O3dDQUVGOzs7OztvQ0FDRTs7Ozs7OzRCQUVMOzs7Ozt3QkFDSDs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBMUd1Qm5DLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IEF1dGhvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aG9yc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWItY29tcG9uZW50cy9DYXRlZ29yaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbYm9va3NJbmZvLCBzZXRCb29rc0luZm9dID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gLy8gY29uc3QgW3RvZ2dsZUNhdGVnb3JpZXMsIHNldFRvZ2dsZUNhdGVnb3JpZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gXHJcbiAgXHJcbiAgY29uc3QgW2Jvb2tzRnJvbUNhdGVnb3J5LCBzZXRCb29rc0Zyb21DYXRlZ29yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy9jb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIFxyXG5cclxuICBjb25zdCBnZXRCb29rcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIGlkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgICAgLnNlbGVjdChgKixjYXRlZ29yaWVzKG5hbWUpYClcclxuICAgICAgICAuZXEoXCJhdXRob3JfaWRcIiwgaWQpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Qm9va3NJbmZvKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZih0eXBlb2YgaWQgPT09IFwib2JqZWN0XCIpe1xyXG4gICAgIFxyXG4gICAgICBzZXRCb29rc0luZm8oaWQpICBcclxuICAgIH0gXHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgICAgLnNlbGVjdChgKixjYXRlZ29yaWVzKG5hbWUpYClcclxuICAgICAgICAucmFuZ2UoMCwgMTkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICBcclxuICAgICAgICBzZXRCb29rc0luZm8oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEJvb2tzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPEhvbWUgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXppbmMtODAwIHNtOmgtc2NyZWVuIGxnOmgtc2NyZWVuXCI+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCIgYmctemluYy04MDAgbXgtYXV0byBtYXgtdy03eGwgIHB4LTQgc206cHgtNiBsZzpweC04ICBcIj5cclxuICAgICAgICAgICAgey8qbWFpbiBjb250YWluZXIgKi99XHJcbiAgICAgICAgICAgIDxDYXRlZ29yaWVzIGdldEJvb2tzPXtnZXRCb29rc30gLz5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXppbmMtODAwIHB0LTYgcGItMjQgdy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMSBnYXAteC0xMiBnYXAteS0xMCAgbGc6Z3JpZC1jb2xzLTEwIFwiPlxyXG4gICAgICAgICAgICAgICAgey8qYm9va3MgY29udGFpbmVyIC9zdGFydCAqL31cclxuICAgICAgICAgICAgICAgIDxBdXRob3JzIGdldEJvb2tzPXtnZXRCb29rc30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tOCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm91bmRlZC1sZyAgbGc6aC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLXppbmMtODAwICBzcGFjZS15LTQgc206Z3JpZCBzbTpncmlkLWNvbHMtNCBzbTpnYXAtNiBzbTpzcGFjZS15LTAgbGc6Z3JpZC1jb2xzLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Ym9va3NJbmZvLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9EZXRhaWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfbmFtZTogaXRlbS5jYXRlZ29yaWVzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBpdGVtLmNhdGVnb3J5X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHNjYWxlLTk1IHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTAwIHJvdW5kZWQtbGcgYmctemluYy05MDAgcHktMiBweC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTYgeGw6c3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBteC1hdXRvICAgcHgtMiByb3VuZGVkLW1kIHB5LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSB0ZXh0LWxnIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIGxlYWRpbmctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lypib29rcyBjb250YWluZXIgL2VuZCAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPFBhZ2luYXRpb24gLz4gKi99XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdXBhYmFzZSIsIkxpbmsiLCJIb21lIiwiUGFnaW5hdGlvbiIsIkF1dGhvcnMiLCJDYXRlZ29yaWVzIiwiSW5kZXgiLCJib29rc0luZm8iLCJzZXRCb29rc0luZm8iLCJib29rc0Zyb21DYXRlZ29yeSIsInNldEJvb2tzRnJvbUNhdGVnb3J5IiwiZ2V0Qm9va3MiLCJpZCIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsImNvbnNvbGUiLCJsb2ciLCJyYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzZWN0aW9uIiwidWwiLCJtYXAiLCJpdGVtIiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJjYXRlZ29yeV9uYW1lIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJjYXRlZ29yeV9pZCIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});