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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./pages/Home.jsx\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pagination */ \"./components/pagination.jsx\");\n/* harmony import */ var _components_Authors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Authors */ \"./components/Authors.jsx\");\n/* harmony import */ var _components_Sub_components_Categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sub-components/Categories */ \"./components/Sub-components/Categories.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksInfo = ref[0], setBooksInfo = ref[1];\n    // const [toggleCategories, setToggleCategories] = useState(false);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), booksFromCategory = ref1[0], setBooksFromCategory = ref1[1];\n    //const [searchQuery, setSearchQuery] = useState(\"\");\n    var getBooks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(id) {\n            var ref, data, error, ref1, data1, error1;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof id === \"number\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*,categories(name)\").eq(\"author_id\", id)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setBooksInfo(data);\n                        }\n                        return [\n                            3,\n                            5\n                        ];\n                    case 2:\n                        if (!(typeof id === \"object\")) return [\n                            3,\n                            3\n                        ];\n                        //console.log(id)\n                        setBooksInfo(id);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(\"*,categories(name)\").range(0, 19)\n                        ];\n                    case 4:\n                        ref1 = _state.sent(), data1 = ref1.data, error1 = ref1.error;\n                        if (error1) {\n                            console.log(error1);\n                        } else {\n                            setBooksInfo(data1);\n                        }\n                        _state.label = 5;\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getBooks(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getCategoryNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"categories\").select(\"*\")\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setCategories(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getCategoryNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getBooks();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getCategoryNames();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var closeCategoryBar = function(e) {\n            if (e.path[0] !== categoryOpener.current) {\n                setDropDown(false);\n            }\n        };\n        document.body.addEventListener(\"click\", closeCategoryBar);\n        return function() {\n            document.body.removeEventListener(\"click\", closeCategoryBar);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-zinc-800 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \" bg-zinc-800 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sub_components_Categories__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"bg-zinc-800 pt-6 pb-24 w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-10 lg:grid-cols-10 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Authors__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        getBooks: getBooks\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"lg:col-span-8 \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-84 rounded-lg lg:h-full\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex justify-center\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                    className: \"space-y-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:space-y-0 lg:grid-cols-6 \",\n                                                    children: booksInfo.map(function(item) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                            href: {\n                                                                pathname: \"/Details\",\n                                                                query: {\n                                                                    id: item.id,\n                                                                    category_name: item.categories.name,\n                                                                    category_id: item.category_id\n                                                                }\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                                className: \"cursor-pointer scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \" space-y-6 xl:space-y-4\",\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                            className: \"object-contain mx-auto px-2 rounded-md py-1\",\n                                                                            src: item.image,\n                                                                            alt: \"\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                            lineNumber: 115,\n                                                                            columnNumber: 29\n                                                                        }, _this),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                            className: \"space-y-1 text-lg text-center font-medium leading-6\",\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                                className: \"text-sm text-white \",\n                                                                                children: item.title\n                                                                            }, void 0, false, {\n                                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                                lineNumber: 121,\n                                                                                columnNumber: 31\n                                                                            }, _this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                            lineNumber: 120,\n                                                                            columnNumber: 29\n                                                                        }, _this)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                    lineNumber: 114,\n                                                                    columnNumber: 27\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                                lineNumber: 113,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 23\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\index.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"P+6e/zLd8LQrZohpzKljkzlAR7g=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCOzs7Ozt3REFBTzs4REFDM0MsOERBQUNHLElBQUU7b0RBQUNILFNBQVMsRUFBQyx3RUFBd0U7OERBQ25GM0IsU0FBUyxDQUFDK0IsR0FBRyxDQUFDLFNBQUNDLElBQUk7NkVBQ2xCLDhEQUFDdEMsa0RBQUk7NERBQ0h1QyxJQUFJLEVBQUU7Z0VBQ0pDLFFBQVEsRUFBRSxVQUFVO2dFQUNwQkMsS0FBSyxFQUFFO29FQUNMOUIsRUFBRSxFQUFFMkIsSUFBSSxDQUFDM0IsRUFBRTtvRUFDWCtCLGFBQWEsRUFBRUosSUFBSSxDQUFDSyxVQUFVLENBQUNDLElBQUk7b0VBQ25DQyxXQUFXLEVBQUVQLElBQUksQ0FBQ08sV0FBVztpRUFDOUI7NkRBQ0Y7c0VBRUQsNEVBQUNDLElBQUU7Z0VBQUNiLFNBQVMsRUFBQyxpR0FBaUc7MEVBQzdHLDRFQUFDRCxLQUFHO29FQUFDQyxTQUFTLEVBQUMseUJBQXlCOztzRkFDdEMsOERBQUNjLEtBQUc7NEVBQ0ZkLFNBQVMsRUFBQyw2Q0FBK0M7NEVBQ3pEZSxHQUFHLEVBQUVWLElBQUksQ0FBQ1csS0FBSzs0RUFDZkMsR0FBRyxFQUFDLEVBQUU7Ozs7O2lGQUNOO3NGQUNGLDhEQUFDbEIsS0FBRzs0RUFBQ0MsU0FBUyxFQUFDLHFEQUFxRDtzRkFDbEUsNEVBQUNrQixJQUFFO2dGQUFDbEIsU0FBUyxFQUFDLHFCQUFxQjswRkFDaENLLElBQUksQ0FBQ2MsS0FBSzs7Ozs7cUZBQ1I7Ozs7O2lGQUNEOzs7Ozs7eUVBQ0Y7Ozs7O3FFQUNIOzs7OztpRUFDQTtxREFDUixDQUFDOzs7Ozt3REFDQzs7Ozs7O2dEQUNEOzs7Ozs0Q0FDRjs7Ozs7O29DQUVGOzs7OztnQ0FDRTs7Ozs7O3dCQUVMOzs7OztvQkFDSDs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0FuSXVCL0MsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgQXV0aG9ycyBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRob3JzXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1N1Yi1jb21wb25lbnRzL0NhdGVnb3JpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFtib29rc0luZm8sIHNldEJvb2tzSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAvLyBjb25zdCBbdG9nZ2xlQ2F0ZWdvcmllcywgc2V0VG9nZ2xlQ2F0ZWdvcmllc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiBcclxuICBcclxuICBjb25zdCBbYm9va3NGcm9tQ2F0ZWdvcnksIHNldEJvb2tzRnJvbUNhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAvL2NvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcblxyXG4gIGNvbnN0IGdldEJvb2tzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJib29rc19kdXBsaWNhdGVcIilcclxuICAgICAgICAuc2VsZWN0KGAqLGNhdGVnb3JpZXMobmFtZSlgKVxyXG4gICAgICAgIC5lcShcImF1dGhvcl9pZFwiLCBpZCk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRCb29rc0luZm8oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgICBlbHNlIGlmKHR5cGVvZiBpZCA9PT0gXCJvYmplY3RcIil7XHJcbiAgICAgXHJcbiAgICAgIC8vY29uc29sZS5sb2coaWQpXHJcbiAgICAgIHNldEJvb2tzSW5mbyhpZClcclxuICAgICAgXHJcbiAgICB9IFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgICAgLnNlbGVjdChgKixjYXRlZ29yaWVzKG5hbWUpYClcclxuICAgICAgICAucmFuZ2UoMCwgMTkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICBcclxuICAgICAgICBzZXRCb29rc0luZm8oZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IGdldENhdGVnb3J5TmFtZXMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJjYXRlZ29yaWVzXCIpLnNlbGVjdChcIipcIik7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRCb29rcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENhdGVnb3J5TmFtZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjbG9zZUNhdGVnb3J5QmFyID0gKGUpID0+IHtcclxuICAgICAgaWYgKGUucGF0aFswXSAhPT0gY2F0ZWdvcnlPcGVuZXIuY3VycmVudCkge1xyXG4gICAgICAgIHNldERyb3BEb3duKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VDYXRlZ29yeUJhcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUNhdGVnb3J5QmFyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhvbWUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCBcIj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCIgYmctemluYy04MDAgbXgtYXV0byBtYXgtdy03eGwgIHB4LTQgc206cHgtNiBsZzpweC04ICBcIj5cclxuICAgICAgICAgIHsvKm1haW4gY29udGFpbmVyICovfVxyXG4gICAgICAgICAgPENhdGVnb3JpZXMvPlxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCBwdC02IHBiLTI0IHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdyaWQtcm93cy0xIGdhcC14LTEyIGdhcC15LTEwICBsZzpncmlkLWNvbHMtMTAgXCI+XHJcbiAgICAgICAgICAgICAgey8qYm9va3MgY29udGFpbmVyIC9zdGFydCAqL31cclxuICAgICAgICAgICAgICA8QXV0aG9ycyBnZXRCb29rcz17Z2V0Qm9va3N9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi04IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTg0IHJvdW5kZWQtbGcgIGxnOmgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNCBzbTpncmlkIHNtOmdyaWQtY29scy00IHNtOmdhcC02IHNtOnNwYWNlLXktMCBsZzpncmlkLWNvbHMtNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9va3NJbmZvLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9EZXRhaWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfbmFtZTogaXRlbS5jYXRlZ29yaWVzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogaXRlbS5jYXRlZ29yeV9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgc2NhbGUtOTUgdHJhbnNpdGlvbiBob3ZlcjpzY2FsZS0xMDAgcm91bmRlZC1sZyBiZy16aW5jLTkwMCBweS0yIHB4LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTYgeGw6c3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIG14LWF1dG8gICBweC0yIHJvdW5kZWQtbWQgcHktMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSB0ZXh0LWxnIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIGxlYWRpbmctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7Lypib29rcyBjb250YWluZXIgL2VuZCAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICB7LyogPFBhZ2luYXRpb24gLz4gKi99XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3VwYWJhc2UiLCJMaW5rIiwiSG9tZSIsIlBhZ2luYXRpb24iLCJBdXRob3JzIiwiQ2F0ZWdvcmllcyIsIkluZGV4IiwiYm9va3NJbmZvIiwic2V0Qm9va3NJbmZvIiwiYm9va3NGcm9tQ2F0ZWdvcnkiLCJzZXRCb29rc0Zyb21DYXRlZ29yeSIsImdldEJvb2tzIiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJjb25zb2xlIiwibG9nIiwicmFuZ2UiLCJnZXRDYXRlZ29yeU5hbWVzIiwiZSIsInNldENhdGVnb3JpZXMiLCJjbG9zZUNhdGVnb3J5QmFyIiwicGF0aCIsImNhdGVnb3J5T3BlbmVyIiwiY3VycmVudCIsInNldERyb3BEb3duIiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic2VjdGlvbiIsInVsIiwibWFwIiwiaXRlbSIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2F0ZWdvcnlfbmFtZSIsImNhdGVnb3JpZXMiLCJuYW1lIiwiY2F0ZWdvcnlfaWQiLCJsaSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});