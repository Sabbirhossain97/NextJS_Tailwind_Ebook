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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors(param) {\n    var getBooks = param.getBooks;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), authors = ref[0], setAuthors = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4), authorCount = ref1[0], setAuthorCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), totalAuthors = ref2[0], setTotalAuthors = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), activeAuthorId = ref3[0], setActiveAuthorId = ref3[1];\n    var getActiveAuthor = function(id) {\n        var activeId = authors.filter(function(item) {\n            if (item.id == id) {\n                return item.id;\n            }\n        });\n        setActiveAuthorId(activeId[0].id);\n    };\n    var fetchMoreAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState + 3;\n        });\n    };\n    var fetchLessAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState - 3;\n        });\n    };\n    var getAuthorsNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, count, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select(\"*\", {\n                                count: \"exact\"\n                            }).range(0, authorCount)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, count = ref.count, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setTotalAuthors(count);\n                            setAuthors(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorsNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthorsNames();\n    }, [\n        authorCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mt-4 hidden lg:col-span-3 w-10/12 mx-auto lg:block \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"-my-3 flow-root\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" ml-5 font-normal text-2xl text-gray-200\",\n                            children: \"Authors\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-3 inline-flex rounded-md items-center mt-1 bg-gray-500/50 px-3 py-1 text-xs font-medium text-gray-100\",\n                            children: totalAuthors\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mr-12 flex items-center\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-2\",\n                    children: [\n                        authors.map(function(item, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    getBooks(item.id);\n                                    getActiveAuthor(item.id);\n                                },\n                                className: \"list-none cursor-pointer transition \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"  flex flex-row items-center pl-4  hover:border-l-4 hover:border-teal-500 \".concat(item.id == activeAuthorId ? \"border-l-4 border-teal-500 \" : \"\", \" \"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"relative inline-block h-10 w-10 rounded-full ring-2 ring-white\",\n                                            src: item.image,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"cursor-pointer ml-3 text-sm font-bold py-4 text-gray-200\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this)\n                            }, key, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this);\n                        }),\n                        authorCount + 1 === totalAuthors ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex flex-row w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    return fetchLessAuthorByClick(e);\n                                },\n                                className: \"text-sm w-full mt-4 px-1 font-semibold py-2 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-600/70\",\n                                children: \"Show less\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex flex-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    return fetchMoreAuthorByClick(e);\n                                },\n                                className: \"text-sm w-full mt-4 px-1 font-semibold py-2 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-600/70\",\n                                children: \"Show more\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\nextjs-tailwind-supabase-ebook\\\\components\\\\Authors.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Authors, \"it3d5EQZ5WgPG4GRfE1luGaUaY4=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvcnMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDa0I7QUFDVjtBQUVuQixTQUFTSSxPQUFPLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7O0lBQ3hDLElBQThCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DSyxPQUFPLEdBQWdCTCxHQUFZLEdBQTVCLEVBQUVNLFVBQVUsR0FBSU4sR0FBWSxHQUFoQjtJQUMxQixJQUFzQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUExQ08sV0FBVyxHQUFvQlAsSUFBVyxHQUEvQixFQUFFUSxjQUFjLEdBQUlSLElBQVcsR0FBZjtJQUNsQyxJQUF3Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUEvQ1MsWUFBWSxHQUFxQlQsSUFBYyxHQUFuQyxFQUFFVSxlQUFlLEdBQUlWLElBQWMsR0FBbEI7SUFDcEMsSUFBNENBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBakRXLGNBQWMsR0FBdUJYLElBQVksR0FBbkMsRUFBRVksaUJBQWlCLEdBQUlaLElBQVksR0FBaEI7SUFFeEMsSUFBTWEsZUFBZSxHQUFHLFNBQUNDLEVBQUUsRUFBSztRQUM5QixJQUFJQyxRQUFRLEdBQUdWLE9BQU8sQ0FBQ1csTUFBTSxDQUFDLFNBQUNDLElBQUksRUFBSztZQUN0QyxJQUFJQSxJQUFJLENBQUNILEVBQUUsSUFBSUEsRUFBRSxFQUFFO2dCQUNqQixPQUFPRyxJQUFJLENBQUNILEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0ZGLGlCQUFpQixDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNELEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFNSSxzQkFBc0IsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDcENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJaLGNBQWMsQ0FBQyxTQUFDYSxTQUFTO21CQUFLQSxTQUFTLEdBQUcsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBTUMsc0JBQXNCLEdBQUcsU0FBQ0gsQ0FBQyxFQUFLO1FBQ3BDQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CWixjQUFjLENBQUMsU0FBQ2EsU0FBUzttQkFBS0EsU0FBUyxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQU1FLGVBQWU7bUJBQUcsNkZBQU9KLENBQUMsRUFBSztnQkFDTixHQUdMLEVBSGxCSyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSzs7Ozt3QkFBSzs7NEJBQU14QiwrQ0FDNUIsQ0FBQyxTQUFTLENBQUMsQ0FDZjBCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7Z0NBQUVILEtBQUssRUFBRSxPQUFPOzZCQUFFLENBQUMsQ0FDL0JJLEtBQUssQ0FBQyxDQUFDLEVBQUV0QixXQUFXLENBQUM7MEJBQUE7O3dCQUhLLEdBR0wsR0FISyxhQUdMLEVBSGxCaUIsSUFBSSxHQUFtQixHQUdMLENBSGxCQSxJQUFJLEVBQUVDLEtBQUssR0FBWSxHQUdMLENBSFpBLEtBQUssRUFBRUMsS0FBSyxHQUFLLEdBR0wsQ0FITEEsS0FBSzt3QkFJeEIsSUFBSUEsS0FBSyxFQUFFOzRCQUNUSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLE9BQU87NEJBQ0xoQixlQUFlLENBQUNlLEtBQUssQ0FBQyxDQUFDOzRCQUN2Qm5CLFVBQVUsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDO3dCQUNuQixDQUFDOzs7Ozs7UUFDSCxDQUFDO3dCQVhLRCxlQUFlLENBQVVKLENBQUM7OztPQVcvQjtJQUNEbEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RzQixlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLEVBQUU7UUFBQ2hCLFdBQVc7S0FBQyxDQUFDLENBQUM7SUFFbEIscUJBQ0UsOERBQUN5QixLQUFHO1FBQUNDLFNBQVMsRUFBQyxzREFBc0Q7OzBCQUNuRSw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGlCQUFpQjswQkFDN0IsNEVBQUNFLEdBQUM7b0JBQUNGLFNBQVMsRUFBQyxxR0FBcUc7O3NDQUNoSCw4REFBQ0csTUFBSTs0QkFBQ0gsU0FBUyxFQUFDLDBDQUEwQztzQ0FBQyxTQUUzRDs7Ozs7Z0NBQU87c0NBQ1AsOERBQUNHLE1BQUk7NEJBQUNILFNBQVMsRUFBQywwR0FBMEc7c0NBQ3ZIeEIsWUFBWTs7Ozs7Z0NBQ1I7c0NBQ1AsOERBQUMyQixNQUFJOzRCQUFDSCxTQUFTLEVBQUMseUJBQXlCOzs7OztnQ0FBUTs7Ozs7O3dCQUMvQzs7Ozs7b0JBQ0Q7MEJBQ0wsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOzBCQUNuQiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O3dCQUN2QjVCLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxTQUFDcEIsSUFBSSxFQUFFcUIsR0FBRztpREFDckIsOERBQUNDLElBQUU7Z0NBRURDLE9BQU8sRUFBRSxXQUFNO29DQUNicEMsUUFBUSxDQUFDYSxJQUFJLENBQUNILEVBQUUsQ0FBQyxDQUFDO29DQUNsQkQsZUFBZSxDQUFDSSxJQUFJLENBQUNILEVBQUUsQ0FBQyxDQUFDO2dDQUMzQixDQUFDO2dDQUNEbUIsU0FBUyxFQUFDLHNDQUFzQzswQ0FFaEQsNEVBQUNELEtBQUc7b0NBQ0ZDLFNBQVMsRUFBRSw0RUFBMkUsQ0FFckYsTUFBQyxDQURBaEIsSUFBSSxDQUFDSCxFQUFFLElBQUlILGNBQWMsR0FBRyw2QkFBNkIsR0FBRyxFQUFFLEVBQy9ELEdBQUMsQ0FBQzs7c0RBRUgsOERBQUM4QixLQUFHOzRDQUNGUixTQUFTLEVBQUMsZ0VBQWdFOzRDQUMxRVMsR0FBRyxFQUFFekIsSUFBSSxDQUFDMEIsS0FBSzs0Q0FDZkMsR0FBRyxFQUFDLE9BQU87Ozs7O2lEQUNYO3NEQUNGLDhEQUFDVCxHQUFDOzRDQUFDRixTQUFTLEVBQUMsMERBQTBEO3NEQUNwRWhCLElBQUksQ0FBQzRCLElBQUk7Ozs7O2lEQUNSOzs7Ozs7eUNBQ0E7K0JBcEJEUCxHQUFHOzs7O3FDQXFCTDt5QkFDTixDQUFDO3dCQUVEL0IsV0FBVyxHQUFHLENBQUMsS0FBS0UsWUFBWSxpQkFDL0IsOERBQUN1QixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsdUJBQXVCO3NDQUNwQyw0RUFBQ2EsUUFBTTtnQ0FDTE4sT0FBTyxFQUFFLFNBQUNyQixDQUFDOzJDQUFLRyxzQkFBc0IsQ0FBQ0gsQ0FBQyxDQUFDO2lDQUFBO2dDQUN6Q2MsU0FBUyxFQUFDLG1JQUFtSTswQ0FDOUksV0FFRDs7Ozs7b0NBQVM7Ozs7O2dDQUNMLGlCQUVOLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsc0JBQXNCO3NDQUNuQyw0RUFBQ2EsUUFBTTtnQ0FDTE4sT0FBTyxFQUFFLFNBQUNyQixDQUFDOzJDQUFLRCxzQkFBc0IsQ0FBQ0MsQ0FBQyxDQUFDO2lDQUFBO2dDQUN6Q2MsU0FBUyxFQUFDLG1JQUFtSTswQ0FDOUksV0FFRDs7Ozs7b0NBQVM7Ozs7O2dDQUNMOzs7Ozs7d0JBRUo7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQXRHdUI5QixPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JzLmpzeD8zN2UwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvcnMoeyBnZXRCb29rcyB9KSB7XHJcbiAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdXRob3JDb3VudCwgc2V0QXV0aG9yQ291bnRdID0gdXNlU3RhdGUoNCk7XHJcbiAgY29uc3QgW3RvdGFsQXV0aG9ycywgc2V0VG90YWxBdXRob3JzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3RpdmVBdXRob3JJZCwgc2V0QWN0aXZlQXV0aG9ySWRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRBY3RpdmVBdXRob3IgPSAoaWQpID0+IHtcclxuICAgIGxldCBhY3RpdmVJZCA9IGF1dGhvcnMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2V0QWN0aXZlQXV0aG9ySWQoYWN0aXZlSWRbMF0uaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgZmV0Y2hNb3JlQXV0aG9yQnlDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRBdXRob3JDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAzKTtcclxuICB9O1xyXG4gIGNvbnN0IGZldGNoTGVzc0F1dGhvckJ5Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0QXV0aG9yQ291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlIC0gMyk7XHJcbiAgfTtcclxuICBjb25zdCBnZXRBdXRob3JzTmFtZXMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IHsgZGF0YSwgY291bnQsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImF1dGhvcnNcIilcclxuICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogXCJleGFjdFwiIH0pXHJcbiAgICAgIC5yYW5nZSgwLCBhdXRob3JDb3VudCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VG90YWxBdXRob3JzKGNvdW50KTtcclxuICAgICAgc2V0QXV0aG9ycyhkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBdXRob3JzTmFtZXMoKTtcclxuICB9LCBbYXV0aG9yQ291bnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTQgaGlkZGVuIGxnOmNvbC1zcGFuLTMgdy0xMC8xMiBteC1hdXRvIGxnOmJsb2NrIFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiLW15LTMgZmxvdy1yb290XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy16aW5jLTgwMCBweS0zIHRleHQtc20gdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgbWwtNSBmb250LW5vcm1hbCB0ZXh0LTJ4bCB0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgIEF1dGhvcnNcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTMgaW5saW5lLWZsZXggcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgbXQtMSBiZy1ncmF5LTUwMC81MCBweC0zIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgIHt0b3RhbEF1dGhvcnN9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xMiBmbGV4IGl0ZW1zLWNlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICB7YXV0aG9ycy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXRCb29rcyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgIGdldEFjdGl2ZUF1dGhvcihpdGVtLmlkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHBsLTQgIGhvdmVyOmJvcmRlci1sLTQgaG92ZXI6Ym9yZGVyLXRlYWwtNTAwICR7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT0gYWN0aXZlQXV0aG9ySWQgPyBcImJvcmRlci1sLTQgYm9yZGVyLXRlYWwtNTAwIFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgcmluZy0yIHJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtbC0zIHRleHQtc20gZm9udC1ib2xkIHB5LTQgdGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAge2F1dGhvckNvdW50ICsgMSA9PT0gdG90YWxBdXRob3JzID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtcm93IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBmZXRjaExlc3NBdXRob3JCeUNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB3LWZ1bGwgbXQtNCBweC0xIGZvbnQtc2VtaWJvbGQgcHktMiByb3VuZGVkLW1kIHRleHQtbWQgdGV4dC10ZWFsLTUwMCBob3Zlcjp0ZXh0LXRlYWwtNDAwIGJnLXppbmMtNzAwIGhvdmVyOmJnLXppbmMtNjAwLzcwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTaG93IGxlc3NcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHctZnVsbCBtdC00IHB4LTEgZm9udC1zZW1pYm9sZCBweS0yIHJvdW5kZWQtbWQgdGV4dC1tZCB0ZXh0LXRlYWwtNTAwIGhvdmVyOnRleHQtdGVhbC00MDAgYmctemluYy03MDAgaG92ZXI6YmctemluYy02MDAvNzBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNob3cgbW9yZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwiQXV0aG9ycyIsImdldEJvb2tzIiwiYXV0aG9ycyIsInNldEF1dGhvcnMiLCJhdXRob3JDb3VudCIsInNldEF1dGhvckNvdW50IiwidG90YWxBdXRob3JzIiwic2V0VG90YWxBdXRob3JzIiwiYWN0aXZlQXV0aG9ySWQiLCJzZXRBY3RpdmVBdXRob3JJZCIsImdldEFjdGl2ZUF1dGhvciIsImlkIiwiYWN0aXZlSWQiLCJmaWx0ZXIiLCJpdGVtIiwiZmV0Y2hNb3JlQXV0aG9yQnlDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZTdGF0ZSIsImZldGNoTGVzc0F1dGhvckJ5Q2xpY2siLCJnZXRBdXRob3JzTmFtZXMiLCJkYXRhIiwiY291bnQiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJyYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJzcGFuIiwibWFwIiwia2V5IiwibGkiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Authors.jsx\n"));

/***/ })

});