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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Pagination(param) {\n    var currentPage = param.currentPage, itemsPerPage = param.itemsPerPage, totalLength = param.totalLength, totalPage = param.totalPage, setCurrentPage = param.setCurrentPage;\n    var _this = this;\n    var array = [];\n    for(var i = 1; i <= Math.ceil(totalLength / itemsPerPage); i++){\n        array.push(i);\n    }\n    // function nextPage() {\n    //    if (currentPage !== totalPage) {\n    //      setCurrentPage((e) => e + 1);\n    //    }\n    //  }\n    //  function previousPage() {\n    //    if (currentPage !== 1) {\n    //      setCurrentPage((e) => e - 1);\n    //    }\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-zinc-800 w-full mx-auto h-24 flex items-center justify-between px-4 sm:px-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:-mt-px md:flex\",\n                children: array.map(function(page) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: function() {\n                            return setCurrentPage(page);\n                        },\n                        className: \"cursor-pointer bg-zinc-500 border-x-2 hover:bg-zinc-700 inline-flex items-center border px-4 py-4 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-200\",\n                        children: page\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\components\\\\pagination.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFVixTQUFTQyxVQUFVLENBQUMsS0FBb0UsRUFBRTtRQUFwRUMsV0FBVyxHQUFiLEtBQW9FLENBQWxFQSxXQUFXLEVBQUVDLFlBQVksR0FBM0IsS0FBb0UsQ0FBckRBLFlBQVksRUFBQ0MsV0FBVyxHQUF2QyxLQUFvRSxDQUF4Q0EsV0FBVyxFQUFFQyxTQUFTLEdBQWxELEtBQW9FLENBQTNCQSxTQUFTLEVBQUVDLGNBQWMsR0FBbEUsS0FBb0UsQ0FBaEJBLGNBQWM7O0lBQ25HLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlDLElBQUksQ0FBQ0MsSUFBSSxDQUFDTixXQUFXLEdBQUNELFlBQVksQ0FBQyxFQUFFSyxDQUFDLEVBQUUsQ0FBRTtRQUM3REQsS0FBSyxDQUFDSSxJQUFJLENBQUNILENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLHFDQUFxQztJQUNyQyxPQUFPO0lBQ1AsS0FBSztJQUNMLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLE9BQU87SUFDUCxLQUFLO0lBRUwscUJBQ0UsOERBQUNJLEtBQUc7a0JBQ0YsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGdGQUFrRjtzQkFzQi9GLDRFQUFDRixLQUFHO2dCQUFDRSxTQUFTLEVBQUMsb0JBQW9COzBCQUNoQ1AsS0FBSyxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ0MsR0FBQzt3QkFDQUMsT0FBTyxFQUFFO21DQUFNWixjQUFjLENBQUNVLElBQUksQ0FBQzt5QkFBQTt3QkFDbkNGLFNBQVMsRUFBQywrS0FBZ0w7a0NBRXpMRSxJQUFJOzs7Ozs2QkFDSDtpQkFDTCxDQUFDOzs7OztvQkFDRTs7Ozs7Z0JBc0JGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0FBM0V1QmYsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4P2FmMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IGN1cnJlbnRQYWdlLCBpdGVtc1BlclBhZ2UsdG90YWxMZW5ndGgsIHRvdGFsUGFnZSwgc2V0Q3VycmVudFBhZ2UgfSkge1xyXG4gIGxldCBhcnJheSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbCh0b3RhbExlbmd0aC9pdGVtc1BlclBhZ2UpOyBpKyspIHtcclxuICAgIGFycmF5LnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBuZXh0UGFnZSgpIHtcclxuICAvLyAgICBpZiAoY3VycmVudFBhZ2UgIT09IHRvdGFsUGFnZSkge1xyXG4gIC8vICAgICAgc2V0Q3VycmVudFBhZ2UoKGUpID0+IGUgKyAxKTtcclxuICAvLyAgICB9XHJcbiAgLy8gIH1cclxuICAvLyAgZnVuY3Rpb24gcHJldmlvdXNQYWdlKCkge1xyXG4gIC8vICAgIGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG4gIC8vICAgICAgc2V0Q3VycmVudFBhZ2UoKGUpID0+IGUgLSAxKTtcclxuICAvLyAgICB9XHJcbiAgLy8gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctemluYy04MDAgIHctZnVsbCBteC1hdXRvIGgtMjQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuICBweC00IHNtOnB4LTBcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCItbXQtcHggZmxleCB3LTAgZmxleC0xXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdC0yIGJvcmRlci10cmFuc3BhcmVudCBwdC00IHByLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTMgaC01IHctNSB0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE4IDEwYS43NS43NSAwIDAxLS43NS43NUg0LjY2bDIuMSAxLjk1YS43NS43NSAwIDExLTEuMDIgMS4xbC0zLjUtMy4yNWEuNzUuNzUgMCAwMTAtMS4xbDMuNS0zLjI1YS43NS43NSAwIDExMS4wMiAxLjFsLTIuMSAxLjk1aDEyLjU5QS43NS43NSAwIDAxMTggMTB6XCJcclxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOi1tdC1weCBtZDpmbGV4XCI+XHJcbiAgICAgICAgICB7YXJyYXkubWFwKChwYWdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UocGFnZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYmctemluYy01MDAgYm9yZGVyLXgtMiBob3ZlcjpiZy16aW5jLTcwMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyICBweC00IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktMTAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMjAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCItbXQtcHggZmxleCB3LTAgZmxleC0xIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdC0yIGJvcmRlci10cmFuc3BhcmVudCBwdC00IHBsLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBoLTUgdy01IHRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMiAxMGEuNzUuNzUgMCAwMS43NS0uNzVoMTIuNTlsLTIuMS0xLjk1YS43NS43NSAwIDExMS4wMi0xLjFsMy41IDMuMjVhLjc1Ljc1IDAgMDEwIDEuMWwtMy41IDMuMjVhLjc1Ljc1IDAgMTEtMS4wMi0xLjFsMi4xLTEuOTVIMi43NUEuNzUuNzUgMCAwMTIgMTB6XCJcclxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwiaXRlbXNQZXJQYWdlIiwidG90YWxMZW5ndGgiLCJ0b3RhbFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImFycmF5IiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsIm1hcCIsInBhZ2UiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pagination.jsx\n"));

/***/ })

});