"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Slider",{

/***/ "./pages/Slider.jsx":
/*!**************************!*\
  !*** ./pages/Slider.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ First; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction First() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchQuery = ref[0], setSearchQuery = ref[1];\n    var getAuthors = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(e) {\n            var ref, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        return [\n                            4,\n                            _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"authors\").select().textSearch(\"name\", searchQuery)\n                        ];\n                    case 1:\n                        ref = _state.sent(), data = ref.data, error = ref.error;\n                        if (error) {\n                            console.log(error);\n                        } else {\n                            console.log(data);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthors(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var submitQuery = function(e) {\n        e.preventDefault();\n        console.log(searchQuery);\n    };\n    // useEffect(() => {\n    //   getAuthors();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"search\",\n                            class: \"sr-only\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        class: \"h-5 w-5 text-gray-400\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 20 20\",\n                                        fill: \"currentColor\",\n                                        \"aria-hidden\": \"true\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z\",\n                                            \"clip-rule\": \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"search\",\n                                    name: \"search\",\n                                    class: \"block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm\",\n                                    placeholder: \"Search\",\n                                    type: \"search\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(First, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = First;\nvar _c;\n$RefreshReg$(_c, \"First\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TbGlkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDa0I7QUFDVjtBQUVuQixTQUFTSSxLQUFLLEdBQUc7O0lBRTlCLElBQXNDSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDSSxXQUFXLEdBQW9CSixHQUFZLEdBQWhDLEVBQUVLLGNBQWMsR0FBSUwsR0FBWSxHQUFoQjtJQUVsQyxJQUFNTSxVQUFVO21CQUFHLDZGQUFPQyxDQUFDLEVBQUs7Z0JBRVIsR0FHWSxFQUg1QkMsSUFBSSxFQUFFQyxLQUFLOzs7O3dCQURqQkYsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7d0JBQ0k7OzRCQUFNUiwrQ0FDckIsQ0FBQyxTQUFTLENBQUMsQ0FDZlUsTUFBTSxFQUFFLENBQ1JDLFVBQVUsQ0FBQyxNQUFNLEVBQUVULFdBQVcsQ0FBQzswQkFBQTs7d0JBSFosR0FHWSxHQUhaLGFBR1ksRUFINUJJLElBQUksR0FBWSxHQUdZLENBSDVCQSxJQUFJLEVBQUVDLEtBQUssR0FBSyxHQUdZLENBSHRCQSxLQUFLO3dCQUlqQixJQUFJQSxLQUFLLEVBQUU7NEJBQ1RLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUMsQ0FBQzt3QkFDckIsT0FBTzs0QkFDTEssT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksQ0FBQyxDQUFDO3dCQUNwQixDQUFDOzs7Ozs7UUFDSCxDQUFDO3dCQVhLRixVQUFVLENBQVVDLENBQUM7OztPQVcxQjtJQUVELElBQU1TLFdBQVcsR0FBQyxTQUFDVCxDQUFDLEVBQUc7UUFDckJBLENBQUMsQ0FBQ0csY0FBYyxFQUFFLENBQUM7UUFDcEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUNFLDhEQUFDYSxLQUFHO2tCQUNGLDRFQUFDQSxLQUFHO1lBQUNDLEtBQUssRUFBQyw4Q0FBOEM7c0JBQ3ZELDRFQUFDRCxLQUFHO2dCQUFDQyxLQUFLLEVBQUMsbUZBQW1GOzBCQUM1Riw0RUFBQ0QsS0FBRztvQkFBQ0MsS0FBSyxFQUFDLFFBQVE7O3NDQUNqQiw4REFBQ0MsT0FBSzs0QkFBQ0MsR0FBRyxFQUFDLFFBQVE7NEJBQUNGLEtBQUssRUFBQyxTQUFTO3NDQUFDLFFBRXBDOzs7OztnQ0FBUTtzQ0FDUiw4REFBQ0QsS0FBRzs0QkFBQ0MsS0FBSyxFQUFDLFVBQVU7OzhDQUNuQiw4REFBQ0QsS0FBRztvQ0FBQ0MsS0FBSyxFQUFDLHNFQUFzRTs4Q0FDL0UsNEVBQUNHLEtBQUc7d0NBQUNILEtBQUssRUFBQyx1QkFBdUI7d0NBQUNJLEtBQUssRUFBQyw0QkFBNEI7d0NBQUNDLE9BQU8sRUFBQyxXQUFXO3dDQUFDQyxJQUFJLEVBQUMsY0FBYzt3Q0FBQ0MsYUFBVyxFQUFDLE1BQU07a0RBQzlILDRFQUFDQyxNQUFJOzRDQUFDQyxXQUFTLEVBQUMsU0FBUzs0Q0FBQ0MsQ0FBQyxFQUFDLGdJQUFnSTs0Q0FBQ0MsV0FBUyxFQUFDLFNBQVM7Ozs7O2dEQUFHOzs7Ozs0Q0FDL0s7Ozs7O3dDQUNGOzhDQUNOLDhEQUFDQyxPQUFLO29DQUFDQyxFQUFFLEVBQUMsUUFBUTtvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNkLEtBQUssRUFBQyw4T0FBOE87b0NBQUNlLFdBQVcsRUFBQyxRQUFRO29DQUFDQyxJQUFJLEVBQUMsUUFBUTs7Ozs7d0NBQUU7Ozs7OztnQ0FDdFQ7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBOUN1Qi9CLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TbGlkZXIuanN4PzZkMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyc3QoKSB7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGdldEF1dGhvcnMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJhdXRob3JzXCIpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAudGV4dFNlYXJjaChcIm5hbWVcIiwgc2VhcmNoUXVlcnkpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFF1ZXJ5PShlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBjb25zb2xlLmxvZyhzZWFyY2hRdWVyeSlcclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBnZXRBdXRob3JzKCk7XHJcbiAgLy8gfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWluLXctMCBmbGV4LTEgbWQ6cHgtOCBsZzpweC0wIHhsOmNvbC1zcGFuLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNiBweS00IG1kOm14LWF1dG8gbWQ6bWF4LXctM3hsIGxnOm14LTAgbGc6bWF4LXctbm9uZSB4bDpweC0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZWFyY2hcIiBjbGFzcz1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTkgMy41YTUuNSA1LjUgMCAxMDAgMTEgNS41IDUuNSAwIDAwMC0xMXpNMiA5YTcgNyAwIDExMTIuNDUyIDQuMzkxbDMuMzI4IDMuMzI5YS43NS43NSAwIDExLTEuMDYgMS4wNmwtMy4zMjktMy4zMjhBNyA3IDAgMDEyIDl6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgY2xhc3M9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB5LTIgcGwtMTAgcHItMyB0ZXh0LXNtIHBsYWNlaG9sZGVyLWdyYXktNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnRleHQtZ3JheS05MDAgZm9jdXM6cGxhY2Vob2xkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgdHlwZT1cInNlYXJjaFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwiRmlyc3QiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZ2V0QXV0aG9ycyIsImUiLCJkYXRhIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsImZyb20iLCJzZWxlY3QiLCJ0ZXh0U2VhcmNoIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdFF1ZXJ5IiwiZGl2IiwiY2xhc3MiLCJsYWJlbCIsImZvciIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJmaWxsLXJ1bGUiLCJkIiwiY2xpcC1ydWxlIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Slider.jsx\n"));

/***/ })

});