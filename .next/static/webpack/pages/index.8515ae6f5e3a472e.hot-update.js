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

/***/ "./components/pagination.jsx":
/*!***********************************!*\
  !*** ./components/pagination.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Pagination(param) {\n    var currentPage = param.currentPage, perPage = param.perPage, totalPage = param.totalPage, setCurrentPage = param.setCurrentPage;\n    var _this = this;\n    var nextPage = function nextPage() {\n        if (currentPage !== totalPage) {\n            setCurrentPage(function(e) {\n                return e + 1;\n            });\n        }\n    };\n    var previousPage = function previousPage() {\n        if (currentPage !== 1) {\n            setCurrentPage(function(e) {\n                return e - 1;\n            });\n        }\n    };\n    var array = [];\n    for(var i = 1; i <= totalPage; i++){\n        array.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-zinc-800 w-full mx-auto h-24 flex items-center justify-between px-4 sm:px-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:-mt-px md:flex\",\n                children: array.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"bg-zinc-500 border-x-2 hover:bg-zinc-700 inline-flex items-center border px-4 py-4 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-200\",\n                        children: item\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFVixTQUFTQyxVQUFVLENBQUMsS0FBbUQsRUFBRTtRQUFuREMsV0FBVyxHQUFiLEtBQW1ELENBQWpEQSxXQUFXLEVBQUVDLE9BQU8sR0FBdEIsS0FBbUQsQ0FBcENBLE9BQU8sRUFBRUMsU0FBUyxHQUFqQyxLQUFtRCxDQUEzQkEsU0FBUyxFQUFFQyxjQUFjLEdBQWpELEtBQW1ELENBQWhCQSxjQUFjOztRQVN6RUMsUUFBUSxHQUFqQixTQUFTQSxRQUFRLEdBQUc7UUFDakIsSUFBSUosV0FBVyxLQUFLRSxTQUFTLEVBQUU7WUFDN0JDLGNBQWMsQ0FBQyxTQUFDRSxDQUFDO3VCQUFLQSxDQUFDLEdBQUcsQ0FBQzthQUFBLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztRQUNRQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksR0FBRztRQUN0QixJQUFJTixXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQ3JCRyxjQUFjLENBQUMsU0FBQ0UsQ0FBQzt1QkFBS0EsQ0FBQyxHQUFHLENBQUM7YUFBQSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFkRixJQUFJRSxLQUFLLEdBQUMsRUFBRTtJQUNaLElBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxJQUFJTixTQUFTLEVBQUdNLENBQUMsRUFBRSxDQUFDO1FBQ2hDRCxLQUFLLENBQUNFLElBQUksQ0FBQ0QsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQWNELHFCQUNFLDhEQUFDRSxLQUFHO2tCQUNGLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxnRkFBa0Y7c0JBc0IvRiw0RUFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLG9CQUFvQjswQkFDaENMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUNDLEdBQUM7d0JBQ0FDLElBQUksRUFBQyxHQUFHO3dCQUNSSixTQUFTLEVBQUMsZ0tBQWlLO2tDQUUxS0UsSUFBSTs7Ozs7NkJBQ0g7aUJBQ0wsQ0FBQzs7Ozs7b0JBQ0U7Ozs7O2dCQXNCRjs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztBQS9FdUJmLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzeD9hZjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBjdXJyZW50UGFnZSwgcGVyUGFnZSwgdG90YWxQYWdlLCBzZXRDdXJyZW50UGFnZSB9KSB7XHJcblxyXG5cclxuICBcclxuICBsZXQgYXJyYXk9W11cclxuICBmb3IobGV0IGk9MTsgaSA8PSB0b3RhbFBhZ2UgOyBpKyspe1xyXG4gICAgYXJyYXkucHVzaChpKVxyXG4gIH1cclxuIFxyXG4gIGZ1bmN0aW9uIG5leHRQYWdlKCkge1xyXG4gICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdG90YWxQYWdlKSB7XHJcbiAgICAgICBzZXRDdXJyZW50UGFnZSgoZSkgPT4gZSArIDEpO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBmdW5jdGlvbiBwcmV2aW91c1BhZ2UoKSB7XHJcbiAgICAgaWYgKGN1cnJlbnRQYWdlICE9PSAxKSB7XHJcbiAgICAgICBzZXRDdXJyZW50UGFnZSgoZSkgPT4gZSAtIDEpO1xyXG4gICAgIH1cclxuICAgfVxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXppbmMtODAwICB3LWZ1bGwgbXgtYXV0byBoLTI0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiAgcHgtNCBzbTpweC0wXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiLW10LXB4IGZsZXggdy0wIGZsZXgtMVwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQtMiBib3JkZXItdHJhbnNwYXJlbnQgcHQtNCBwci0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xOCAxMGEuNzUuNzUgMCAwMS0uNzUuNzVINC42NmwyLjEgMS45NWEuNzUuNzUgMCAxMS0xLjAyIDEuMWwtMy41LTMuMjVhLjc1Ljc1IDAgMDEwLTEuMWwzLjUtMy4yNWEuNzUuNzUgMCAxMTEuMDIgMS4xbC0yLjEgMS45NWgxMi41OUEuNzUuNzUgMCAwMTE4IDEwelwiXHJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDotbXQtcHggbWQ6ZmxleFwiPlxyXG4gICAgICAgICAge2FycmF5Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy16aW5jLTUwMCBib3JkZXIteC0yIGhvdmVyOmJnLXppbmMtNzAwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXIgIHB4LTQgcHktNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS0xMDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIi1tdC1weCBmbGV4IHctMCBmbGV4LTEganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10LTIgYm9yZGVyLXRyYW5zcGFyZW50IHB0LTQgcGwtMSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0yIDEwYS43NS43NSAwIDAxLjc1LS43NWgxMi41OWwtMi4xLTEuOTVhLjc1Ljc1IDAgMTExLjAyLTEuMWwzLjUgMy4yNWEuNzUuNzUgMCAwMTAgMS4xbC0zLjUgMy4yNWEuNzUuNzUgMCAxMS0xLjAyLTEuMWwyLjEtMS45NUgyLjc1QS43NS43NSAwIDAxMiAxMHpcIlxyXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwidG90YWxQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJuZXh0UGFnZSIsImUiLCJwcmV2aW91c1BhZ2UiLCJhcnJheSIsImkiLCJwdXNoIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pagination.jsx\n"));

/***/ })

});