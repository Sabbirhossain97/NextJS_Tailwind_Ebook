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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pagination */ \"./components/pagination.jsx\");\n/* harmony import */ var _components_Authors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Authors */ \"./components/Authors.jsx\");\n/* harmony import */ var _components_Sub_components_Filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sub-components/Filters */ \"./components/Sub-components/Filters.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20), itemsPerPage = ref1[0];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentPage = ref2[0], setCurrentPage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPage = ref3[0], setTotalPage = ref3[1];\n    var getBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(id) {\n            var ref, data, error, ref1, data1, error1;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof id === \"number\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*,categories(name)\").eq(\"author_id\", id)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                        }\n                        return [\n                            3,\n                            5\n                        ];\n                    case 2:\n                        if (!(typeof id === \"object\")) return [\n                            3,\n                            3\n                        ];\n                        setBooksInfo(id);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*,categories(name)\").range(firstItemIndex, lastItemIndex)\n                        ];\n                    case 4:\n                        ref1 = _state.sent(), data1 = ref1.data, error1 = ref1.error;\n                        if (error1) {\n                            console.log(error1);\n                        } else {\n                            setBooksInfo(data1);\n                        }\n                        _state.label = 5;\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getBooks(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getBooks();\n    }, [\n        currentPage\n    ]);\n    var lastItemIndex = currentPage * itemsPerPage;\n    var firstItemIndex = lastItemIndex - itemsPerPage;\n    var currentItems = booksInfo.slice(firstItemIndex, lastItemIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-zinc-800 h-full sm:h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" bg-zinc-800 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sub_components_Filters__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                getBooks: getBooks\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"bg-zinc-800 pt-6 pb-24 w-full \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-10 lg:grid-cols-10 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Authors__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            getBooks: getBooks\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"lg:col-span-8 \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" rounded-lg lg:h-full\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex justify-center\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                        className: \"bg-zinc-800 space-y-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:space-y-0 lg:grid-cols-6 \",\n                                                        children: booksInfo.map(function(item, key) {\n                                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                                href: {\n                                                                    pathname: \"/Details\",\n                                                                    query: {\n                                                                        id: item.id,\n                                                                        category_name: item.categories.name,\n                                                                        category_id: item.category_id\n                                                                    }\n                                                                },\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                                    className: \"cursor-pointer scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \" space-y-6 xl:space-y-4\",\n                                                                        children: [\n                                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                                className: \"object-contain mx-auto px-2 rounded-md py-1\",\n                                                                                src: item.image,\n                                                                                alt: \"\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                lineNumber: 85,\n                                                                                columnNumber: 31\n                                                                            }, _this),\n                                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                                className: \"space-y-1 text-lg text-center font-medium leading-6\",\n                                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                                    className: \"text-sm text-white \",\n                                                                                    children: item.title\n                                                                                }, void 0, false, {\n                                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                    lineNumber: 91,\n                                                                                    columnNumber: 33\n                                                                                }, _this)\n                                                                            }, void 0, false, {\n                                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                lineNumber: 90,\n                                                                                columnNumber: 31\n                                                                            }, _this)\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                        lineNumber: 84,\n                                                                        columnNumber: 29\n                                                                    }, _this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                    lineNumber: 83,\n                                                                    columnNumber: 27\n                                                                }, _this)\n                                                            }, key, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                lineNumber: 72,\n                                                                columnNumber: 25\n                                                            }, _this);\n                                                        })\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    currentItems: currentItems,\n                    itemsPerPage: itemsPerPage,\n                    totalPage: totalPage,\n                    currentPage: currentPage,\n                    setCurrentPage: setCurrentPage,\n                    totalLength: booksInfo.length\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"DnA9cxlYVtNV2vET9TqB1lhcIAg=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNZLEtBQUs7Z0ZBQ2ZDLEdBQUcsRUFBQyxFQUFFOzs7OztxRkFDTjswRkFDRiw4REFBQ2xCLEtBQUc7Z0ZBQUNDLFNBQVMsRUFBQyxxREFBcUQ7MEZBQ2xFLDRFQUFDa0IsSUFBRTtvRkFBQ2xCLFNBQVMsRUFBQyxxQkFBcUI7OEZBQ2hDSSxJQUFJLENBQUNlLEtBQUs7Ozs7O3lGQUNSOzs7OztxRkFDRDs7Ozs7OzZFQUNGOzs7Ozt5RUFDSDsrREF2QkFkLEdBQUc7Ozs7cUVBd0JIO3lEQUNSLENBQUM7Ozs7OzREQUNDOzs7Ozs7b0RBQ0Q7Ozs7O2dEQUNGOzs7Ozs7d0NBRUY7Ozs7O29DQUNFOzs7Ozs7NEJBQ047Ozs7O3dCQUNGOzhCQUNOLDhEQUFDL0IsOERBQVU7b0JBQ1R1QixZQUFZLEVBQUVBLFlBQVk7b0JBQzFCakIsWUFBWSxFQUFFQSxZQUFZO29CQUMxQkcsU0FBUyxFQUFFQSxTQUFTO29CQUNwQkYsV0FBVyxFQUFFQSxXQUFXO29CQUN4QkMsY0FBYyxFQUFFQSxjQUFjO29CQUM5QnNDLFdBQVcsRUFBRTFDLFNBQVMsQ0FBQzJDLE1BQU07Ozs7O3dCQUM3Qjs7Ozs7O2dCQUNFOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBN0d1QjVDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBBdXRob3JzIGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhvcnNcIjtcclxuaW1wb3J0IEZpbHRlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3ViLWNvbXBvbmVudHMvRmlsdGVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgW2Jvb2tzSW5mbywgc2V0Qm9va3NJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXRlbXNQZXJQYWdlXSA9IHVzZVN0YXRlKDIwKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFt0b3RhbFBhZ2UsIHNldFRvdGFsUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZ2V0Qm9va3MgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJib29rc19kdXBsaWNhdGVcIilcclxuICAgICAgICAuc2VsZWN0KGAqLGNhdGVnb3JpZXMobmFtZSlgKVxyXG4gICAgICAgIC5lcShcImF1dGhvcl9pZFwiLCBpZCk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRCb29rc0luZm8oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlkID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHNldEJvb2tzSW5mbyhpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImJvb2tzX2R1cGxpY2F0ZVwiKVxyXG4gICAgICAgIC5zZWxlY3QoYCosY2F0ZWdvcmllcyhuYW1lKWApXHJcbiAgICAgICAgLnJhbmdlKGZpcnN0SXRlbUluZGV4LGxhc3RJdGVtSW5kZXgpXHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Qm9va3NJbmZvKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEJvb2tzKCk7XHJcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBsYXN0SXRlbUluZGV4ID0gY3VycmVudFBhZ2UgKiBpdGVtc1BlclBhZ2U7XHJcbiAgY29uc3QgZmlyc3RJdGVtSW5kZXggPSBsYXN0SXRlbUluZGV4IC0gaXRlbXNQZXJQYWdlO1xyXG4gIGNvbnN0IGN1cnJlbnRJdGVtcyA9IGJvb2tzSW5mby5zbGljZShmaXJzdEl0ZW1JbmRleCwgbGFzdEl0ZW1JbmRleCk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8SG9tZSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctemluYy04MDAgaC1mdWxsIHNtOmgtZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctemluYy04MDAgbXgtYXV0byBtYXgtdy03eGwgIHB4LTQgc206cHgtNiBsZzpweC04ICBcIj5cclxuICAgICAgICAgICAgey8qbWFpbiBjb250YWluZXIgKi99XHJcblxyXG4gICAgICAgICAgICA8RmlsdGVycyBnZXRCb29rcz17Z2V0Qm9va3N9IC8+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCBwdC02IHBiLTI0IHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTEgZ2FwLXgtMTIgZ2FwLXktMTAgIGxnOmdyaWQtY29scy0xMCBcIj5cclxuICAgICAgICAgICAgICAgIHsvKmJvb2tzIGNvbnRhaW5lciAvc3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgICA8QXV0aG9ycyBnZXRCb29rcz17Z2V0Qm9va3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTggXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdW5kZWQtbGcgIGxnOmgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCAgc3BhY2UteS00IHNtOmdyaWQgc206Z3JpZC1jb2xzLTQgc206Z2FwLTYgc206c3BhY2UteS0wIGxnOmdyaWQtY29scy02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2tzSW5mby5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9EZXRhaWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfbmFtZTogaXRlbS5jYXRlZ29yaWVzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBpdGVtLmNhdGVnb3J5X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHNjYWxlLTk1IHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTAwIHJvdW5kZWQtbGcgYmctemluYy05MDAgcHktMiBweC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTYgeGw6c3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBteC1hdXRvICAgcHgtMiByb3VuZGVkLW1kIHB5LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSB0ZXh0LWxnIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIGxlYWRpbmctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lypib29rcyBjb250YWluZXIgL2VuZCAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIGN1cnJlbnRJdGVtcz17Y3VycmVudEl0ZW1zfVxyXG4gICAgICAgICAgaXRlbXNQZXJQYWdlPXtpdGVtc1BlclBhZ2V9XHJcbiAgICAgICAgICB0b3RhbFBhZ2U9e3RvdGFsUGFnZX1cclxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIHRvdGFsTGVuZ3RoPXtib29rc0luZm8ubGVuZ3RofVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdXBhYmFzZSIsIkxpbmsiLCJIb21lIiwiUGFnaW5hdGlvbiIsIkF1dGhvcnMiLCJGaWx0ZXJzIiwiSW5kZXgiLCJib29rc0luZm8iLCJzZXRCb29rc0luZm8iLCJpdGVtc1BlclBhZ2UiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlIiwic2V0VG90YWxQYWdlIiwiZ2V0Qm9va3MiLCJpZCIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsImNvbnNvbGUiLCJsb2ciLCJyYW5nZSIsImZpcnN0SXRlbUluZGV4IiwibGFzdEl0ZW1JbmRleCIsImN1cnJlbnRJdGVtcyIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInVsIiwibWFwIiwiaXRlbSIsImtleSIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2F0ZWdvcnlfbmFtZSIsImNhdGVnb3JpZXMiLCJuYW1lIiwiY2F0ZWdvcnlfaWQiLCJsaSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDMiLCJ0aXRsZSIsInRvdGFsTGVuZ3RoIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});