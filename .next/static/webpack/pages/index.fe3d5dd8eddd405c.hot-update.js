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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors(param) {\n    var getbooks = param.getbooks;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), authors = ref[0], setAuthors = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8), authorCount = ref1[0], setAuthorCount = ref1[1];\n    var fetchMoreAuthorByClick = function(e) {\n        e.preventDefault();\n        setAuthorCount(function(prevState) {\n            return prevState + 3;\n        });\n    };\n    var getAuthorsNames = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select(\"*\").range(0, authorCount)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            setAuthors(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorsNames(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthorsNames();\n    }, [\n        authorCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hidden lg:col-span-2 lg:block\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"-my-3 flow-root\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \" font-bold text-3xl text-gray-200\",\n                                    children: \"Authors\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"inline-flex rounded-lg items-center mt-1 bg-gray-100 px-3 py-1 text-xs font-medium text-zinc-500\",\n                                    children: authors.length\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-6 flex items-center\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-6\",\n                        id: \"filter-section-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: [\n                                authors.map(function(item) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: function() {\n                                            getBooks(item.id);\n                                        },\n                                        className: \" list-none cursor-pointer \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-row items-center \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: \"relative inline-block h-12 w-12 rounded-full ring-2 ring-white\",\n                                                    src: item.image,\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"cursor-pointer ml-3 text- font-bold py-4 text-gray-200\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, item.id, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, _this);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function(e) {\n                                                return fetchMoreAuthorByClick(e);\n                                            },\n                                            className: \"text-gray-200 hover:text-gray-400\",\n                                            children: \"See more\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                color: \"gray\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 24 24\",\n                                                strokeWidth: \"1.5\",\n                                                stroke: \"currentColor\",\n                                                className: \"w-4 h-4 mt-[5px] ml-[3px]\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    d: \"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\Authors.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Authors, \"N+F0qHGCurP+J1VnftM0zzk0ry0=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdFQUFnRTtvREFDMUVhLEdBQUcsRUFBRUwsSUFBSSxDQUFDTSxLQUFLO29EQUNmQyxHQUFHLEVBQUMsRUFBRTs7Ozs7eURBQ047OERBQ0YsOERBQUNiLEdBQUM7b0RBQUNGLFNBQVMsRUFBQyx3REFBd0Q7OERBQ2xFUSxJQUFJLENBQUNRLElBQUk7Ozs7O3lEQUNSOzs7Ozs7aURBQ0E7dUNBZkRSLElBQUksQ0FBQ0YsRUFBRTs7Ozs2Q0FnQlQ7aUNBQ04sQ0FBQzs4Q0FFRiw4REFBQ1AsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGVBQWU7O3NEQUM1Qiw4REFBQ2lCLFFBQU07NENBQ0xQLE9BQU8sRUFBRSxTQUFDdEIsQ0FBQzt1REFBS0Qsc0JBQXNCLENBQUNDLENBQUMsQ0FBQzs2Q0FBQTs0Q0FDekNZLFNBQVMsRUFBQyxtQ0FBbUM7c0RBQzlDLFVBRUQ7Ozs7O2dEQUFTO3NEQUNULDhEQUFDRyxNQUFJO3NEQUNILDRFQUFDZSxLQUFHO2dEQUNGQyxLQUFLLEVBQUMsNEJBQTRCO2dEQUNsQ0MsS0FBSyxFQUFDLE1BQU07Z0RBQ1pDLElBQUksRUFBQyxNQUFNO2dEQUNYQyxPQUFPLEVBQUMsV0FBVztnREFDbkJDLFdBQVcsRUFBQyxLQUFLO2dEQUNqQkMsTUFBTSxFQUFDLGNBQWM7Z0RBQ3JCeEIsU0FBUyxFQUFDLDJCQUEyQjswREFFckMsNEVBQUN5QixNQUFJO29EQUNIQyxhQUFhLEVBQUMsT0FBTztvREFDckJDLGNBQWMsRUFBQyxPQUFPO29EQUN0QkMsQ0FBQyxFQUFDLHVDQUF1Qzs7Ozs7d0RBQ3pDOzs7OztvREFDRTs7Ozs7Z0RBQ0Q7Ozs7Ozt3Q0FDSDs7Ozs7O2dDQUNGOzs7Ozs0QkFDRjs7Ozs7O29CQUNGOzs7OztnQkFDRjs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQTFGdUIvQyxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3JzLmpzeD8zN2UwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JzKHsgZ2V0Ym9va3MgfSkge1xyXG4gIGNvbnN0IFthdXRob3JzLCBzZXRBdXRob3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXV0aG9yQ291bnQsIHNldEF1dGhvckNvdW50XSA9IHVzZVN0YXRlKDgpO1xyXG5cclxuICBjb25zdCBmZXRjaE1vcmVBdXRob3JCeUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEF1dGhvckNvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDMpO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0QXV0aG9yc05hbWVzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImF1dGhvcnNcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLnJhbmdlKDAsIGF1dGhvckNvdW50KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBdXRob3JzKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEF1dGhvcnNOYW1lcygpO1xyXG4gIH0sIFthdXRob3JDb3VudF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpjb2wtc3Bhbi0yICBsZzpibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIi1teS0zIGZsb3ctcm9vdFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXppbmMtODAwIHB5LTMgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ib2xkIHRleHQtM3hsIHRleHQtZ3JheS0yMDBcIj5BdXRob3JzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWZsZXggcm91bmRlZC1sZyBpdGVtcy1jZW50ZXIgbXQtMSBiZy1ncmF5LTEwMCBweC0zIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXppbmMtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7YXV0aG9ycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC02IGZsZXggaXRlbXMtY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCIgaWQ9XCJmaWx0ZXItc2VjdGlvbi0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAge2F1dGhvcnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Qm9va3MoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBsaXN0LW5vbmUgY3Vyc29yLXBvaW50ZXIgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbWwtMyB0ZXh0LSBmb250LWJvbGQgcHktNCB0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZldGNoTW9yZUF1dGhvckJ5Q2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgaG92ZXI6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNlZSBtb3JlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCBtdC1bNXB4XSBtbC1bM3B4XVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOS41IDEzLjVMMTIgMjFtMCAwbC03LjUtNy41TTEyIDIxVjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdXBhYmFzZSIsIkF1dGhvcnMiLCJnZXRib29rcyIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiYXV0aG9yQ291bnQiLCJzZXRBdXRob3JDb3VudCIsImZldGNoTW9yZUF1dGhvckJ5Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2U3RhdGUiLCJnZXRBdXRob3JzTmFtZXMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwicmFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwic3BhbiIsImNsYXNzIiwibGVuZ3RoIiwiaWQiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiZ2V0Qm9va3MiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJidXR0b24iLCJzdmciLCJ4bWxucyIsImNvbG9yIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Authors.jsx\n"));

/***/ })

});