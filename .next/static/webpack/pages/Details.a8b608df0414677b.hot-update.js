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

/***/ "./pages/Slider.jsx":
/*!**************************!*\
  !*** ./pages/Slider.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Slider(props) {\n    var _this = this;\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center p-12 h-screen w-11/12 2xl:w-3/4 items-center mx-auto \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,\n                    swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination,\n                    swiper__WEBPACK_IMPORTED_MODULE_1__.A11y\n                ],\n                spaceBetween: 50,\n                slidesPerView: 4,\n                navigation: true,\n                pagination: {\n                    clickable: true\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        role: \"list\",\n                        className: \"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8\",\n                        children: props.relatedBooks.map(function(val, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: val.image,\n                                                alt: \"\",\n                                                className: \"pointer-events-none object-cover group-hover:opacity-75\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: \"absolute inset-0 focus:outline-none\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    children: \"View details for IMG_4985.HEIC\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, key, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TbGlkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNEO0FBRUg7QUFFL0I7QUFDVztBQUNBO0FBQ0Q7QUFDSDtBQUVaLFNBQVNLLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUNsQixxQkFDRSw4REFBQ0csS0FBRztrQkFDRiw0RUFBQ0EsS0FBRztZQUFDQyxTQUFTLEVBQUMsMkVBQTJFO3NCQUN4Riw0RUFBQ1AsZ0RBQU07Z0JBQ0xRLE9BQU8sRUFBRTtvQkFBQ1gsOENBQVU7b0JBQUVDLDhDQUFVO29CQUFFQyx3Q0FBSTtpQkFBQztnQkFDdkNVLFlBQVksRUFBRSxFQUFFO2dCQUNoQkMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCQyxVQUFVO2dCQUNWQyxVQUFVLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxJQUFJO2lCQUFFOzBCQUUvQiw0RUFBQ1AsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLEVBQUU7OEJBQ2YsNEVBQUNPLElBQUU7d0JBQ0RDLElBQUksRUFBQyxNQUFNO3dCQUNYUixTQUFTLEVBQUMsc0ZBQXNGO2tDQUUvRkosS0FBSyxDQUFDYSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUVDLEdBQUc7aURBQy9CLDhEQUFDbEIscURBQVc7MENBQ1YsNEVBQUNtQixJQUFFO29DQUFXYixTQUFTLEVBQUMsVUFBVTs4Q0FDaEMsNEVBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQyx5S0FBMEs7OzBEQUN2TCw4REFBQ2MsS0FBRztnREFDRkMsR0FBRyxFQUFFSixHQUFHLENBQUNLLEtBQUs7Z0RBQ2RDLEdBQUcsRUFBQyxFQUFFO2dEQUNOakIsU0FBUyxFQUFDLHlEQUF5RDs7Ozs7cURBQ25FOzBEQUNGLDhEQUFDa0IsUUFBTTtnREFDTEMsSUFBSSxFQUFDLFFBQVE7Z0RBQ2JuQixTQUFTLEVBQUMscUNBQXFDOzBEQUUvQyw0RUFBQ29CLE1BQUk7b0RBQUNwQixTQUFTLEVBQUMsU0FBUzs4REFBQyxnQ0FFMUI7Ozs7O3lEQUFPOzs7OztxREFDQTs7Ozs7OzZDQUNMO21DQWZDWSxHQUFHOzs7O3lDQXNCUDs7Ozs7cUNBQ087eUJBQ2YsQ0FBQzs7Ozs7NEJBRUM7Ozs7O3dCQUNEOzs7OztvQkFDQzs7Ozs7Z0JBQ0w7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7QUFuRHVCakIsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TbGlkZXIuanN4PzZkMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQTExeSB9IGZyb20gXCJzd2lwZXJcIjtcclxuXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9zY3JvbGxiYXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcC0xMiBoLXNjcmVlbiB3LTExLzEyIDJ4bDp3LTMvNCBpdGVtcy1jZW50ZXIgbXgtYXV0byBcIj5cclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQTExeV19XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17NH1cclxuICAgICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgcm9sZT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLXgtNCBnYXAteS04IHNtOmdyaWQtY29scy0zIHNtOmdhcC14LTYgbGc6Z3JpZC1jb2xzLTIgeGw6Z2FwLXgtOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cHJvcHMucmVsYXRlZEJvb2tzLm1hcCgodmFsLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgIGJsb2NrIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBmb2N1cy13aXRoaW46cmluZy0yIGZvY3VzLXdpdGhpbjpyaW5nLWluZGlnby01MDAgZm9jdXMtd2l0aGluOnJpbmctb2Zmc2V0LTIgZm9jdXMtd2l0aGluOnJpbmctb2Zmc2V0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dmFsLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IGRldGFpbHMgZm9yIElNR180OTg1LkhFSUNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgbXQtMiBibG9jayB0cnVuY2F0ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIElNR180OTg1LkhFSUNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDMuOSBNQlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiQTExeSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU2xpZGVyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsInVsIiwicm9sZSIsInJlbGF0ZWRCb29rcyIsIm1hcCIsInZhbCIsImtleSIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJidXR0b24iLCJ0eXBlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Slider.jsx\n"));

/***/ })

});