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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors(param) {\n    var getBooks = param.getBooks;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), authors = ref[0], setAuthors = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8), authorCount = ref1[0], setAuthorCount = ref1[1];\n    var fetchMoreAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState + 3;\n        });\n    };\n    var getAuthorsNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select(\"*\").range(0, authorCount)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setAuthors(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorsNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthorsNames();\n    }, [\n        authorCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden lg:col-span-2 lg:block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"-my-3 flow-root\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \" font-bold text-3xl text-gray-200\",\n                                children: \"Authors\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"inline-flex rounded-lg items-center mt-1 bg-gray-100 px-3 py-1 text-xs font-medium text-zinc-500\",\n                                children: authors.length\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-6 flex items-center\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-6\",\n                    id: \"filter-section-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4\",\n                        children: [\n                            authors.map(function(item) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: function() {\n                                        getBooks(item.id);\n                                    },\n                                    className: \" list-none cursor-pointer \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row items-center \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"relative inline-block h-12 w-12 rounded-full ring-2 ring-white\",\n                                                src: item.image,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"cursor-pointer ml-3 text- font-bold py-4 text-gray-200\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, item.id, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, _this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function(e) {\n                                            return fetchMoreAuthorByClick(e);\n                                        },\n                                        className: \"text-gray-200 hover:text-gray-400\",\n                                        children: \"See more\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            color: \"gray\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            strokeWidth: \"1.5\",\n                                            stroke: \"currentColor\",\n                                            className: \"w-4 h-4 mt-[5px] ml-[3px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: \"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Authors, \"N+F0qHGCurP+J1VnftM0zzk0ry0=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUVKLElBQUksQ0FBQ0ssS0FBSztnREFDZkMsR0FBRyxFQUFDLEVBQUU7Ozs7O3FEQUNOOzBEQUNGLDhEQUFDWCxHQUFDO2dEQUFDRixTQUFTLEVBQUMsd0RBQXdEOzBEQUNsRU8sSUFBSSxDQUFDTyxJQUFJOzs7OztxREFDUjs7Ozs7OzZDQUNBO21DQWZEUCxJQUFJLENBQUNGLEVBQUU7Ozs7eUNBZ0JUOzZCQUNOLENBQUM7MENBRUYsOERBQUNOLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxlQUFlOztrREFDNUIsOERBQUNlLFFBQU07d0NBQ0xOLE9BQU8sRUFBRSxTQUFDckIsQ0FBQzttREFBS0Qsc0JBQXNCLENBQUNDLENBQUMsQ0FBQzt5Q0FBQTt3Q0FDekNZLFNBQVMsRUFBQyxtQ0FBbUM7a0RBQzlDLFVBRUQ7Ozs7OzRDQUFTO2tEQUNULDhEQUFDRyxNQUFJO2tEQUNILDRFQUFDYSxLQUFHOzRDQUNGQyxLQUFLLEVBQUMsNEJBQTRCOzRDQUNsQ0MsS0FBSyxFQUFDLE1BQU07NENBQ1pDLElBQUksRUFBQyxNQUFNOzRDQUNYQyxPQUFPLEVBQUMsV0FBVzs0Q0FDbkJDLFdBQVcsRUFBQyxLQUFLOzRDQUNqQkMsTUFBTSxFQUFDLGNBQWM7NENBQ3JCdEIsU0FBUyxFQUFDLDJCQUEyQjtzREFFckMsNEVBQUN1QixNQUFJO2dEQUNIQyxhQUFhLEVBQUMsT0FBTztnREFDckJDLGNBQWMsRUFBQyxPQUFPO2dEQUN0QkMsQ0FBQyxFQUFDLHVDQUF1Qzs7Ozs7b0RBQ3pDOzs7OztnREFDRTs7Ozs7NENBQ0Q7Ozs7OztvQ0FDSDs7Ozs7OzRCQUNGOzs7Ozt3QkFDRjs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBeEZ1QjdDLE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dGhvcnMuanN4PzM3ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvcnMoe2dldEJvb2tzfSkge1xyXG4gIGNvbnN0IFthdXRob3JzLCBzZXRBdXRob3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXV0aG9yQ291bnQsIHNldEF1dGhvckNvdW50XSA9IHVzZVN0YXRlKDgpO1xyXG5cclxuICBjb25zdCBmZXRjaE1vcmVBdXRob3JCeUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEF1dGhvckNvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDMpO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0QXV0aG9yc05hbWVzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImF1dGhvcnNcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLnJhbmdlKDAsIGF1dGhvckNvdW50KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBdXRob3JzKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEF1dGhvcnNOYW1lcygpO1xyXG4gIH0sIFthdXRob3JDb3VudF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpjb2wtc3Bhbi0yICBsZzpibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiLW15LTMgZmxvdy1yb290XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXppbmMtODAwIHB5LTMgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWdyYXktMjAwXCI+QXV0aG9yczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcm91bmRlZC1sZyBpdGVtcy1jZW50ZXIgbXQtMSBiZy1ncmF5LTEwMCBweC0zIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXppbmMtNTAwXCI+XHJcbiAgICAgICAgICAgICAge2F1dGhvcnMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC02IGZsZXggaXRlbXMtY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCIgaWQ9XCJmaWx0ZXItc2VjdGlvbi0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICB7YXV0aG9ycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZ2V0Qm9va3MoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGxpc3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1sLTMgdGV4dC0gZm9udC1ib2xkIHB5LTQgdGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNlZSBtb3JlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgbXQtWzVweF0gbWwtWzNweF1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xOS41IDEzLjVMMTIgMjFtMCAwbC03LjUtNy41TTEyIDIxVjNcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdXBhYmFzZSIsIkF1dGhvcnMiLCJnZXRCb29rcyIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiYXV0aG9yQ291bnQiLCJzZXRBdXRob3JDb3VudCIsImZldGNoTW9yZUF1dGhvckJ5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2U3RhdGUiLCJnZXRBdXRob3JzTmFtZXMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwicmFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwic3BhbiIsImxlbmd0aCIsImlkIiwibWFwIiwiaXRlbSIsImxpIiwib25DbGljayIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiY29sb3IiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Authors.jsx\n"));

/***/ })

});