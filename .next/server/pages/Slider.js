"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Slider";
exports.ids = ["pages/Slider"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://aliltdblkhwtxvwqhipo.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsaWx0ZGJsa2h3dHh2d3FoaXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzMjg1MzcsImV4cCI6MTk4MDkwNDUzN30.tyXQdp3IaQVFXP5odfmu2c-PZqY7fTr2LoDTg9IOR6Y\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBQzdDLE1BQU1DLFFBQVEsR0FBR0QsbUVBQVksQ0FDbENFLDBDQUFvQyxFQUNwQ0Esa05BQXlDLENBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWJvb2stbmV4dGpzLy4vYXBpLmpzPzg3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXHJcbikiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api.js\n");

/***/ }),

/***/ "./pages/Slider.jsx":
/*!**************************!*\
  !*** ./pages/Slider.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./api.js\");\n\n\n\n\nfunction Slider() {\n    const getBooks = async (e)=>{\n        let { data , count , error  } = await _api__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"books_duplicate\").select(`*,categories(id)`, {\n            count: \"exact\"\n        }).range(0, 19);\n        if (error) {\n            console.log(error);\n        } else {\n            console.log(count);\n            console.log(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"E:\\\\Web Development\\\\NextJS\\\\ebook-nextjs\\\\pages\\\\Slider.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TbGlkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ1E7QUFDQztBQUVuQixTQUFTRyxNQUFNLEdBQUc7SUFFL0IsTUFBTUMsUUFBUSxHQUFDLE9BQU1DLENBQUMsR0FBRztRQUN0QixJQUFJLEVBQUVDLElBQUksR0FBQ0MsS0FBSyxHQUFFQyxLQUFLLEdBQUUsR0FBRyxNQUFNUCwrQ0FDM0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QlMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBQztZQUFDSCxLQUFLLEVBQUUsT0FBTztTQUFDLENBQUMsQ0FDM0NJLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQ1osSUFBR0gsS0FBSyxFQUFDO1lBQ1JJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUM7UUFDbkIsT0FBTztZQUNOSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO1lBQ2xCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDO1FBQ2xCLENBQUM7SUFDTixDQUFDO0lBQ0hKLGdEQUFTLENBQUMsSUFBSTtRQUNaRSxRQUFRLEVBQUUsQ0FBQztJQUNiLENBQUMsRUFBQyxFQUFFLENBQUM7SUFHSCxxQkFDRSw4REFBQ1UsS0FBRzs7OztZQUVFLENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWJvb2stbmV4dGpzLy4vcGFnZXMvU2xpZGVyLmpzeD82ZDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9hcGknXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcigpIHtcclxuXHJcbiAgY29uc3QgZ2V0Qm9va3M9YXN5bmMoZSk9PntcclxuICAgICBsZXQgeyBkYXRhLGNvdW50LCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgIC5mcm9tKFwiYm9va3NfZHVwbGljYXRlXCIpXHJcbiAgICAgICAuc2VsZWN0KGAqLGNhdGVnb3JpZXMoaWQpYCx7Y291bnQ6ICdleGFjdCd9KVxyXG4gICAgICAgLnJhbmdlKDAsMTkpXHJcbiAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICB9XHJcbiAgfVxyXG51c2VFZmZlY3QoKCk9PntcclxuICBnZXRCb29rcygpO1xyXG59LFtdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN1cGFiYXNlIiwidXNlRWZmZWN0IiwiU2xpZGVyIiwiZ2V0Qm9va3MiLCJlIiwiZGF0YSIsImNvdW50IiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwicmFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Slider.jsx\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Slider.jsx"));
module.exports = __webpack_exports__;

})();