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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Slider(props) {\n    var _this = this;\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center h-screen w-11/12 2xl:w-1/2 items-center mx-auto \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,\n                    swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination,\n                    swiper__WEBPACK_IMPORTED_MODULE_1__.A11y\n                ],\n                spaceBetween: 50,\n                slidesPerView: 4,\n                navigation: true,\n                pagination: {\n                    clickable: true\n                },\n                style: {\n                    padding: \"55px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        role: \"list\",\n                        className: \"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8\",\n                        children: props.relatedBooks.map(function(val, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: val.image,\n                                                alt: \"\",\n                                                className: \"pointer-events-none object-cover group-hover:opacity-75\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 23\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: \"absolute inset-0 focus:outline-none\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    children: \"View details for IMG_4985.HEIC\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 23\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, key, false, {\n                                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TbGlkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNEO0FBRUg7QUFFL0I7QUFDVztBQUNBO0FBQ0Q7QUFDSDtBQUVaLFNBQVNLLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUNsQixxQkFDRSw4REFBQ0csS0FBRztrQkFDRiw0RUFBQ0EsS0FBRztZQUFDQyxTQUFTLEVBQUMsc0VBQXNFO3NCQUNuRiw0RUFBQ1AsZ0RBQU07Z0JBQ0xRLE9BQU8sRUFBRTtvQkFBQ1gsOENBQVU7b0JBQUVDLDhDQUFVO29CQUFFQyx3Q0FBSTtpQkFBQztnQkFDdkNVLFlBQVksRUFBRSxFQUFFO2dCQUNoQkMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCQyxVQUFVO2dCQUNWQyxVQUFVLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxJQUFJO2lCQUFFO2dCQUMvQkMsS0FBSyxFQUFFO29CQUFDQyxPQUFPLEVBQUUsTUFBTTtpQkFBQzswQkFFeEIsNEVBQUNULEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxFQUFFOzhCQUNmLDRFQUFDUyxJQUFFO3dCQUNEQyxJQUFJLEVBQUMsTUFBTTt3QkFDWFYsU0FBUyxFQUFDLHNGQUFzRjtrQ0FFL0ZKLEtBQUssQ0FBQ2UsWUFBWSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFFQyxHQUFHO2lEQUMvQiw4REFBQ3BCLHFEQUFXOzBDQUNWLDRFQUFDcUIsSUFBRTtvQ0FBV2YsU0FBUyxFQUFDLFVBQVU7OENBQ2hDLDRFQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMseUtBQTBLOzswREFDdkwsOERBQUNnQixLQUFHO2dEQUNGQyxHQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssS0FBSztnREFDZEMsR0FBRyxFQUFDLEVBQUU7Z0RBQ05uQixTQUFTLEVBQUMseURBQXlEOzs7OztxREFDbkU7MERBQ0YsOERBQUNvQixRQUFNO2dEQUNMQyxJQUFJLEVBQUMsUUFBUTtnREFDYnJCLFNBQVMsRUFBQyxxQ0FBcUM7MERBRS9DLDRFQUFDc0IsTUFBSTtvREFBQ3RCLFNBQVMsRUFBQyxTQUFTOzhEQUFDLGdDQUUxQjs7Ozs7eURBQU87Ozs7O3FEQUNBOzs7Ozs7NkNBQ0w7bUNBZkNjLEdBQUc7Ozs7eUNBc0JQOzs7OztxQ0FDTzt5QkFDZixDQUFDOzs7Ozs0QkFFQzs7Ozs7d0JBQ0Q7Ozs7O29CQUNDOzs7OztnQkFDTDs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztBQXBEdUJuQixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1NsaWRlci5qc3g/NmQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBMTF5IH0gZnJvbSBcInN3aXBlclwiO1xyXG5cclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuXHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3Njcm9sbGJhclwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL2J1bmRsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiB3LTExLzEyIDJ4bDp3LTEvMiBpdGVtcy1jZW50ZXIgbXgtYXV0byBcIj5cclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQTExeV19XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17NH1cclxuICAgICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiNTVweFwifX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICByb2xlPVwibGlzdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAteC00IGdhcC15LTggc206Z3JpZC1jb2xzLTMgc206Z2FwLXgtNiBsZzpncmlkLWNvbHMtMiB4bDpnYXAteC04XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5yZWxhdGVkQm9va3MubWFwKCh2YWwsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCAgYmxvY2sgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMTAwIGZvY3VzLXdpdGhpbjpyaW5nLTIgZm9jdXMtd2l0aGluOnJpbmctaW5kaWdvLTUwMCBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtMiBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt2YWwuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgZGV0YWlscyBmb3IgSU1HXzQ5ODUuSEVJQ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBtdC0yIGJsb2NrIHRydW5jYXRlIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSU1HXzQ5ODUuSEVJQ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMy45IE1CXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJBMTF5IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJTbGlkZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtb2R1bGVzIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsIm5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwic3R5bGUiLCJwYWRkaW5nIiwidWwiLCJyb2xlIiwicmVsYXRlZEJvb2tzIiwibWFwIiwidmFsIiwia2V5IiwibGkiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImJ1dHRvbiIsInR5cGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Slider.jsx\n"));

/***/ })

});