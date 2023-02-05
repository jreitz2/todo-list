/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    background-color: rgb(74, 10, 75);\\n    color: white;\\n    font-family: 'Indie Flower', cursive;\\n    margin: 0;\\n    font-size: 1.5rem;\\n}\\n\\nimg {\\n    width: 40px;\\n    cursor: pointer;\\n}\\n\\n.logo2 {\\n    width: 150px;\\n    cursor:default;\\n}\\n\\nheader {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding-left: 1rem;\\n    padding-right: 1rem;\\n}\\n\\n.logo {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.dark-circle {\\n    width: 50px;\\n    border-radius: 50%;\\n    background-color: rgb(225, 175, 226);\\n}\\n\\n.dark-circle img {\\n    transform: translate3d(5px, 5px, 0px);\\n}\\n\\naside {\\n    background-color: rgb(101, 44, 102);\\n    padding: 1%;\\n    padding-top: 3rem;\\n}\\n\\nh3 {\\n    margin-bottom: 0;\\n}\\n\\n.project, .todo, .add-todo, .search, .nav, .search2 {\\n    display: flex;\\n    align-items: center;\\n    gap: .3rem;\\n}\\n\\n.side-bar, .menu, .projects {\\n   display: flex;\\n   flex-direction: column;\\n   gap: 1rem;\\n}\\n\\nmain {\\n    background-color: rgb(225, 175, 226);\\n    display: flex;\\n    height: 75vh;\\n}\\n\\n.search {\\n    justify-content: space-between;\\n}\\n\\ninput {\\n    font-size: 1.5rem;\\n    border-radius: 8px;\\n}\\n\\n.container {\\n    flex:2;\\n    padding: 1%;\\n    padding-left: 3%;\\n}\\n.add-todo {\\n    display: none;\\n}\\n\\n.displayShow {\\n    display: block;\\n    text-indent: 8%;\\n    font-size: .8em;\\n    overflow-wrap: anywhere;\\n}\\ntextarea {\\n    font-size: 1.2rem;\\n    border-radius: 8px;\\n}\\n.todo, .add-todo {\\n    justify-content: center;\\n}\\n\\n.todo {\\n    display: grid;\\n    grid-template-columns: 2fr 1fr 1fr;\\n}\\n\\n\\nfooter {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 1rem;\\n    padding: 1%;\\n}\\n\\n.dark-mode .main{\\n    background-color: rgb(104, 57, 105);\\n}\\n\\n.dark-mode .main input[type=\\\"text\\\"] {\\n    background-color: grey;\\n}\\n\\n.dark-mode textarea {\\n    background-color: grey;\\n}\\n\\n.dark-mode .side-bar {\\n    background-color:rgb(71, 29, 71);\\n}\\n.dark-mode {\\n    background-color:rgb(50, 6, 51);\\n    color:grey;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ assign)\n/* harmony export */ });\nfunction assign(target, object) {\n  if (target == null) {\n    throw new TypeError('assign requires that input parameter not be null or undefined');\n  }\n\n  for (var property in object) {\n    if (Object.prototype.hasOwnProperty.call(object, property)) {\n      ;\n      target[property] = object[property];\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/assign/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cloneObject)\n/* harmony export */ });\n/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ \"./node_modules/date-fns/esm/_lib/assign/index.js\");\n\nfunction cloneObject(object) {\n  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, object);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/cloneObject/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ \"./node_modules/date-fns/esm/locale/en-US/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultLocale/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDefaultOptions\": () => (/* binding */ getDefaultOptions),\n/* harmony export */   \"setDefaultOptions\": () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRoundingMethod\": () => (/* binding */ getRoundingMethod)\n/* harmony export */ });\nvar roundingMap = {\n  ceil: Math.ceil,\n  round: Math.round,\n  floor: Math.floor,\n  trunc: function trunc(value) {\n    return value < 0 ? Math.ceil(value) : Math.floor(value);\n  } // Math.trunc is not supported by IE\n\n};\nvar defaultRoundingMethod = 'trunc';\nfunction getRoundingMethod(method) {\n  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/roundingMethods/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\n\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/addDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInCalendarMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name differenceInCalendarMonths\n * @category Month Helpers\n * @summary Get the number of calendar months between the given dates.\n *\n * @description\n * Get the number of calendar months between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar months\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many calendar months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInCalendarMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 8\n */\n\nfunction differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();\n  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();\n  return yearDiff * 12 + monthDiff;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInCalendarMonths/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name differenceInMilliseconds\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of milliseconds\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * const result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\n\nfunction differenceInMilliseconds(dateLeft, dateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateRight).getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ \"./node_modules/date-fns/esm/differenceInCalendarMonths/index.js\");\n/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ \"./node_modules/date-fns/esm/isLastDayOfMonth/index.js\");\n\n\n\n\n\n/**\n * @name differenceInMonths\n * @category Month Helpers\n * @summary Get the number of full months between the given dates.\n *\n * @description\n * Get the number of full months between the given dates using trunc as a default rounding method.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of full months\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many full months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))\n * //=> 7\n */\n\nfunction differenceInMonths(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dateLeft, dateRight);\n  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dateLeft, dateRight));\n  var result; // Check for the difference of less than month\n\n  if (difference < 1) {\n    result = 0;\n  } else {\n    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {\n      // This will check if the date is end of Feb and assign a higher end of month date\n      // to compare it with Jan\n      dateLeft.setDate(30);\n    }\n\n    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full\n    // If so, result must be decreased by 1 in absolute value\n\n    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month\n\n    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDateLeft, dateRight) === 1) {\n      isLastMonthNotFull = false;\n    }\n\n    result = sign * (difference - Number(isLastMonthNotFull));\n  } // Prevent negative zero\n\n\n  return result === 0 ? 0 : result;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInMonths/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInSeconds)\n/* harmony export */ });\n/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ \"./node_modules/date-fns/esm/differenceInMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ \"./node_modules/date-fns/esm/_lib/roundingMethods/index.js\");\n\n\n\n/**\n * @name differenceInSeconds\n * @category Second Helpers\n * @summary Get the number of seconds between the given dates.\n *\n * @description\n * Get the number of seconds between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @param {Object} [options] - an object with options.\n * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)\n * @returns {Number} the number of seconds\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many seconds are between\n * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?\n * const result = differenceInSeconds(\n *   new Date(2014, 6, 2, 12, 30, 20, 0),\n *   new Date(2014, 6, 2, 12, 30, 7, 999)\n * )\n * //=> 12\n */\n\nfunction differenceInSeconds(dateLeft, dateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateLeft, dateRight) / 1000;\n  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInSeconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the end of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\n\nfunction endOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(23, 59, 59, 999);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/endOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name endOfMonth\n * @category Month Helpers\n * @summary Return the end of a month for the given date.\n *\n * @description\n * Return the end of a month for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the end of a month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The end of a month for 2 September 2014 11:55:00:\n * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\n\nfunction endOfMonth(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var month = date.getMonth();\n  date.setFullYear(date.getFullYear(), month + 1, 0);\n  date.setHours(23, 59, 59, 999);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/endOfMonth/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatDistance)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ \"./node_modules/date-fns/esm/differenceInMonths/index.js\");\n/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ \"./node_modules/date-fns/esm/differenceInSeconds/index.js\");\n/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ \"./node_modules/date-fns/esm/_lib/defaultLocale/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ \"./node_modules/date-fns/esm/_lib/cloneObject/index.js\");\n/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ \"./node_modules/date-fns/esm/_lib/assign/index.js\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar MINUTES_IN_DAY = 1440;\nvar MINUTES_IN_ALMOST_TWO_DAYS = 2520;\nvar MINUTES_IN_MONTH = 43200;\nvar MINUTES_IN_TWO_MONTHS = 86400;\n/**\n * @name formatDistance\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words.\n *\n * | Distance between dates                                            | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance between dates | Result               |\n * |------------------------|----------------------|\n * | 0 secs ... 5 secs      | less than 5 seconds  |\n * | 5 secs ... 10 secs     | less than 10 seconds |\n * | 10 secs ... 20 secs    | less than 20 seconds |\n * | 20 secs ... 40 secs    | half a minute        |\n * | 40 secs ... 60 secs    | less than a minute   |\n * | 60 secs ... 90 secs    | 1 minute             |\n *\n * @param {Date|Number} date - the date\n * @param {Date|Number} baseDate - the date to compare with\n * @param {Object} [options] - an object with options.\n * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed\n * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @returns {String} the distance in words\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `baseDate` must not be Invalid Date\n * @throws {RangeError} `options.locale` must contain `formatDistance` property\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))\n * //=> '6 months'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00, including seconds?\n * const result = formatDistance(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0),\n *   { includeSeconds: true }\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {\n *   addSuffix: true\n * })\n * //=> 'about 1 year ago'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {\n *   locale: eoLocale\n * })\n * //=> 'pli ol 1 jaro'\n */\n\nfunction formatDistance(dirtyDate, dirtyBaseDate, options) {\n  var _ref, _options$locale;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n  if (!locale.formatDistance) {\n    throw new RangeError('locale must contain formatDistance property');\n  }\n\n  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate, dirtyBaseDate);\n\n  if (isNaN(comparison)) {\n    throw new RangeError('Invalid time value');\n  }\n\n  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(options), {\n    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),\n    comparison: comparison\n  });\n  var dateLeft;\n  var dateRight;\n\n  if (comparison > 0) {\n    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyBaseDate);\n    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyDate);\n  } else {\n    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyDate);\n    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyBaseDate);\n  }\n\n  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(dateRight, dateLeft);\n  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(dateLeft)) / 1000;\n  var minutes = Math.round((seconds - offsetInSeconds) / 60);\n  var months; // 0 up to 2 mins\n\n  if (minutes < 2) {\n    if (options !== null && options !== void 0 && options.includeSeconds) {\n      if (seconds < 5) {\n        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);\n      } else if (seconds < 10) {\n        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);\n      } else if (seconds < 20) {\n        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);\n      } else if (seconds < 40) {\n        return locale.formatDistance('halfAMinute', 0, localizeOptions);\n      } else if (seconds < 60) {\n        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);\n      } else {\n        return locale.formatDistance('xMinutes', 1, localizeOptions);\n      }\n    } else {\n      if (minutes === 0) {\n        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);\n      } else {\n        return locale.formatDistance('xMinutes', minutes, localizeOptions);\n      }\n    } // 2 mins up to 0.75 hrs\n\n  } else if (minutes < 45) {\n    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs\n  } else if (minutes < 90) {\n    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs\n  } else if (minutes < MINUTES_IN_DAY) {\n    var hours = Math.round(minutes / 60);\n    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days\n  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {\n    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days\n  } else if (minutes < MINUTES_IN_MONTH) {\n    var days = Math.round(minutes / MINUTES_IN_DAY);\n    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months\n  } else if (minutes < MINUTES_IN_TWO_MONTHS) {\n    months = Math.round(minutes / MINUTES_IN_MONTH);\n    return locale.formatDistance('aboutXMonths', months, localizeOptions);\n  }\n\n  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(dateRight, dateLeft); // 2 months up to 12 months\n\n  if (months < 12) {\n    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);\n    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date\n  } else {\n    var monthsSinceStartOfYear = months % 12;\n    var years = Math.floor(months / 12); // N years up to 1 years 3 months\n\n    if (monthsSinceStartOfYear < 3) {\n      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months\n    } else if (monthsSinceStartOfYear < 9) {\n      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months\n    } else {\n      return locale.formatDistance('almostXYears', years + 1, localizeOptions);\n    }\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/formatDistance/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isLastDayOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ \"./node_modules/date-fns/esm/endOfDay/index.js\");\n/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ \"./node_modules/date-fns/esm/endOfMonth/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n\n/**\n * @name isLastDayOfMonth\n * @category Month Helpers\n * @summary Is the given date the last day of a month?\n *\n * @description\n * Is the given date the last day of a month?\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is the last day of a month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Is 28 February 2014 the last day of a month?\n * const result = isLastDayOfMonth(new Date(2014, 1, 28))\n * //=> true\n */\n\nfunction isLastDayOfMonth(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(date).getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isLastDayOfMonth/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // TODO: Remove String()\n    var width = options.width ? String(options.width) : args.defaultWidth;\n    var format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\nfunction buildLocalizeFn(args) {\n  return function (dirtyIndex, options) {\n    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';\n    var valuesArray;\n\n    if (context === 'formatting' && args.formattingValues) {\n      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;\n      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      var _defaultWidth = args.defaultWidth;\n\n      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;\n\n      valuesArray = args.values[_width] || args.values[_defaultWidth];\n    }\n\n    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!\n\n    return valuesArray[index];\n  };\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var width = options.width;\n    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];\n    var matchResult = string.match(matchPattern);\n\n    if (!matchResult) {\n      return null;\n    }\n\n    var matchedString = matchResult[0];\n    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];\n    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    }) : findKey(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    });\n    var value;\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\nfunction findKey(object, predicate) {\n  for (var key in object) {\n    if (object.hasOwnProperty(key) && predicate(object[key])) {\n      return key;\n    }\n  }\n\n  return undefined;\n}\n\nfunction findIndex(array, predicate) {\n  for (var key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n\n  return undefined;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    var matchedString = matchResult[0];\n    var parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: 'less than a second',\n    other: 'less than {{count}} seconds'\n  },\n  xSeconds: {\n    one: '1 second',\n    other: '{{count}} seconds'\n  },\n  halfAMinute: 'half a minute',\n  lessThanXMinutes: {\n    one: 'less than a minute',\n    other: 'less than {{count}} minutes'\n  },\n  xMinutes: {\n    one: '1 minute',\n    other: '{{count}} minutes'\n  },\n  aboutXHours: {\n    one: 'about 1 hour',\n    other: 'about {{count}} hours'\n  },\n  xHours: {\n    one: '1 hour',\n    other: '{{count}} hours'\n  },\n  xDays: {\n    one: '1 day',\n    other: '{{count}} days'\n  },\n  aboutXWeeks: {\n    one: 'about 1 week',\n    other: 'about {{count}} weeks'\n  },\n  xWeeks: {\n    one: '1 week',\n    other: '{{count}} weeks'\n  },\n  aboutXMonths: {\n    one: 'about 1 month',\n    other: 'about {{count}} months'\n  },\n  xMonths: {\n    one: '1 month',\n    other: '{{count}} months'\n  },\n  aboutXYears: {\n    one: 'about 1 year',\n    other: 'about {{count}} years'\n  },\n  xYears: {\n    one: '1 year',\n    other: '{{count}} years'\n  },\n  overXYears: {\n    one: 'over 1 year',\n    other: 'over {{count}} years'\n  },\n  almostXYears: {\n    one: 'almost 1 year',\n    other: 'almost {{count}} years'\n  }\n};\n\nvar formatDistance = function formatDistance(token, count, options) {\n  var result;\n  var tokenValue = formatDistanceLocale[token];\n\n  if (typeof tokenValue === 'string') {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace('{{count}}', count.toString());\n  }\n\n  if (options !== null && options !== void 0 && options.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return 'in ' + result;\n    } else {\n      return result + ' ago';\n    }\n  }\n\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js\");\n\nvar dateFormats = {\n  full: 'EEEE, MMMM do, y',\n  long: 'MMMM do, y',\n  medium: 'MMM d, y',\n  short: 'MM/dd/yyyy'\n};\nvar timeFormats = {\n  full: 'h:mm:ss a zzzz',\n  long: 'h:mm:ss a z',\n  medium: 'h:mm:ss a',\n  short: 'h:mm a'\n};\nvar dateTimeFormats = {\n  full: \"{{date}} 'at' {{time}}\",\n  long: \"{{date}} 'at' {{time}}\",\n  medium: '{{date}}, {{time}}',\n  short: '{{date}}, {{time}}'\n};\nvar formatLong = {\n  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateFormats,\n    defaultWidth: 'full'\n  }),\n  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: timeFormats,\n    defaultWidth: 'full'\n  }),\n  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateTimeFormats,\n    defaultWidth: 'full'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: 'P'\n};\n\nvar formatRelative = function formatRelative(token, _date, _baseDate, _options) {\n  return formatRelativeLocale[token];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js\");\n\nvar eraValues = {\n  narrow: ['B', 'A'],\n  abbreviated: ['BC', 'AD'],\n  wide: ['Before Christ', 'Anno Domini']\n};\nvar quarterValues = {\n  narrow: ['1', '2', '3', '4'],\n  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],\n  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']\n}; // Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you're working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\n\nvar monthValues = {\n  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],\n  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\nvar dayValues = {\n  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],\n  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n};\nvar dayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  }\n};\nvar formattingDayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  }\n};\n\nvar ordinalNumber = function ordinalNumber(dirtyNumber, _options) {\n  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',\n  // 'day', 'hour', 'minute', 'second'.\n\n  var rem100 = number % 100;\n\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st';\n\n      case 2:\n        return number + 'nd';\n\n      case 3:\n        return number + 'rd';\n    }\n  }\n\n  return number + 'th';\n};\n\nvar localize = {\n  ordinalNumber: ordinalNumber,\n  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: eraValues,\n    defaultWidth: 'wide'\n  }),\n  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: quarterValues,\n    defaultWidth: 'wide',\n    argumentCallback: function argumentCallback(quarter) {\n      return quarter - 1;\n    }\n  }),\n  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: monthValues,\n    defaultWidth: 'wide'\n  }),\n  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayValues,\n    defaultWidth: 'wide'\n  }),\n  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayPeriodValues,\n    defaultWidth: 'wide',\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: 'wide'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js\");\n/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js\");\n\n\nvar matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nvar parseOrdinalNumberPattern = /\\d+/i;\nvar matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i\n};\nvar parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i]\n};\nvar matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i\n};\nvar parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i]\n};\nvar matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i\n};\nvar parseMonthPatterns = {\n  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],\n  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]\n};\nvar matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i\n};\nvar parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]\n};\nvar matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i\n};\nvar parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i\n  }\n};\nvar match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: function valueCallback(value) {\n      return parseInt(value, 10);\n    }\n  }),\n  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: 'any'\n  }),\n  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: 'any',\n    valueCallback: function valueCallback(index) {\n      return index + 1;\n    }\n  }),\n  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: 'any'\n  }),\n  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: 'any'\n  }),\n  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: 'any',\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js\");\n/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js\");\n/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js\");\n/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js\");\n/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js\");\n\n\n\n\n\n\n/**\n * @type {Locale}\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}\n * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}\n */\nvar locale = {\n  code: 'en-US',\n  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  options: {\n    weekStartsOn: 0\n    /* Sunday */\n    ,\n    firstWeekContainsDate: 1\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/locale/en-US/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ subDays)\n/* harmony export */ });\n/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ \"./node_modules/date-fns/esm/addDays/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name subDays\n * @category Day Helpers\n * @summary Subtract the specified number of days from the given date.\n *\n * @description\n * Subtract the specified number of days from the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the days subtracted\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Subtract 10 days from 1 September 2014:\n * const result = subDays(new Date(2014, 8, 1), 10)\n * //=> Fri Aug 22 2014 00:00:00\n */\n\nfunction subDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyAmount);\n  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate, -amount);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/subDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToList\": () => (/* binding */ addProjectToList),\n/* harmony export */   \"default\": () => (/* binding */ newProject),\n/* harmony export */   \"inboxButton\": () => (/* binding */ inboxButton),\n/* harmony export */   \"populateInbox\": () => (/* binding */ populateInbox),\n/* harmony export */   \"projectFolder\": () => (/* binding */ projectFolder),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes),\n/* harmony export */   \"save\": () => (/* binding */ save)\n/* harmony export */ });\nconst addProjectBtn = document.getElementById('add-project-btn');\nconst addProject = document.getElementById('add-project');\nconst projects = document.getElementById('projects');\nconst header = document.getElementById('project-header');\nconst todoContainer = document.getElementById('todo-container');\nconst addTodoForm = document.getElementById('addTaskForm');\nconst inboxIcon = document.getElementById('inbox-icon');\nconst displayAddForm = document.querySelector('.add-todo');\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists';\n\nconst projectFolder = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\n\n\nfunction createProject(projectTitle) {\n    return {\n        projectTitle: projectTitle,\n        todos: []\n    }\n};\n\nfunction createTodo(title, description, date) {\n    return {\n        title: title,\n        description: description,\n        date: date\n    }\n};\n\nconst sampleProject = createProject(\"Sample Project\");\nconst sampleTodo = createTodo(\"Sample todo\", \"\", \"today's date\");\nif (projectFolder.length === 0) {\n    sampleProject.todos.push(sampleTodo);\n    projectFolder.push(sampleProject);\n}\n\n\nfunction newProject() {\n    addProjectBtn.addEventListener('click', () => {\n        addProject.style.display = \"none\";\n        const newHtml = `<form id=\"add-project-form\">\n                            <input type=\"text\" name=\"addProjectTitle\" placeholder=\"Add a project\">\n                        </form>`;\n        const newHtml1 = document.createElement('form');\n        newHtml1.innerHTML = newHtml;\n        projects.appendChild(newHtml1);\n        newHtml1.addEventListener('submit', e => {\n             e.preventDefault();\n             const project1 = createProject(newHtml1.addProjectTitle.value);\n             projectFolder.push(project1);\n             newHtml1.addProjectTitle.value = '';\n             newHtml1.style.display = \"none\";\n             removeAllChildNodes(projects);\n             addProjectToList();\n             addProject.style.display = \"flex\";\n        })\n    });\n};\n\nfunction addProjectToList () {\n    projectFolder.forEach(project => {\n        const newProjectHtml = document.createElement('div');\n        newProjectHtml.classList.add(\"project\");\n        const newProjectIcon = document.createElement('img');\n        newProjectIcon.src = `./project.png`;\n        const newProjectTrash = document.createElement('img');\n        newProjectTrash.src = `./delete.png`;\n        newProjectTrash.classList.add('delete');\n        newProjectTrash.addEventListener('click', () => {\n            projectFolder.splice(projectFolder.indexOf(project), 1);\n            removeAllChildNodes(projects);\n            addProjectToList();\n        });\n    \n        newProjectIcon.addEventListener('click', () => {\n            function populateTodoList() {\n                displayAddForm.style.display = \"flex\";\n                header.textContent = `${project.projectTitle}`;\n                removeAllChildNodes(todoContainer);\n                project.todos.forEach(todo => {\n                const newTodo = document.createElement('div');\n                newTodo.classList.add('todo');\n                const newTodoTitle = document.createElement('div');\n                newTodoTitle.textContent = `${todo.title}`;\n                const newTodoDate = document.createElement('div');\n                newTodoDate.textContent = `${todo.date}`;\n                const newTodoTrash = document.createElement('img');\n                newTodoTrash.src = './delete.png';\n                newTodoTrash.classList.add('delete');\n                newTodoTrash.addEventListener('click', () => {\n                    project.todos.splice(project.todos.indexOf(todo), 1);\n                    removeAllChildNodes(todoContainer);\n                    populateTodoList();\n                });\n                newTodo.appendChild(newTodoTitle)\n                newTodo.appendChild(newTodoDate);\n                newTodo.appendChild(newTodoTrash);\n                todoContainer.appendChild(newTodo);\n\n                const newTodoDescription = document.createElement('div');\n                    newTodoDescription.classList.add('add-todo');\n                    newTodoDescription.textContent = `${todo.description}`;\n                    newTodo.appendChild(newTodoDescription);\n                    newTodo.addEventListener('click', () => {\n                        newTodoDescription.classList.toggle('displayShow');\n                    });\n\n            });  \n        }\n        populateTodoList();\n    });\n        const newProjectTitle = document.createElement('div');\n        newProjectTitle.textContent = `${project.projectTitle}`;\n        newProjectHtml.appendChild(newProjectIcon);\n        newProjectHtml.appendChild(newProjectTitle);\n        newProjectHtml.appendChild(newProjectTrash);\n        projects.appendChild(newProjectHtml);\n        save();\n    });\n};\n\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n};\n\nfunction save() {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectFolder));\n};\n\nfunction populateInbox() {\n    removeAllChildNodes(todoContainer);\n    displayAddForm.style.display = \"none\";\n    projectFolder.forEach(project => {\n        project.todos.forEach(todo => {\n            const newTodo = document.createElement('div');\n            newTodo.classList.add('todo');\n            const newTodoTitle = document.createElement('div');\n            newTodoTitle.textContent = `${todo.title}`;\n            const newTodoDate = document.createElement('div');\n            newTodoDate.textContent = `${todo.date}`;\n            const newTodoTrash = document.createElement('img');\n            newTodoTrash.src = './delete.png';\n            newTodoTrash.classList.add('delete');\n            newTodoTrash.addEventListener('click', () => {\n                project.todos.splice(project.todos.indexOf(todo), 1);\n                removeAllChildNodes(todoContainer);\n                populateInbox();\n                console.log(projectFolder);\n            });\n            newTodo.appendChild(newTodoTitle)\n            newTodo.appendChild(newTodoDate);\n            newTodo.appendChild(newTodoTrash);\n            todoContainer.appendChild(newTodo);\n\n            const newTodoDescription = document.createElement('div');\n                    newTodoDescription.classList.add('add-todo');\n                    newTodoDescription.textContent = `${todo.description}`;\n                    newTodo.appendChild(newTodoDescription);\n                    newTodo.addEventListener('click', () => {\n                        newTodoDescription.classList.toggle('displayShow');\n                    });\n    })\n    save();\n})};\n\nfunction inboxButton() {\n    inboxIcon.addEventListener('click', () => {\n        populateInbox();\n        header.textContent = 'Inbox';\n    })\n};\n\n//# sourceURL=webpack://todo-list/./src/addProject.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\nconst addTodoForm = document.getElementById('addTaskForm');\nconst header = document.getElementById('project-header');\nconst todoContainer = document.getElementById('todo-container');\n\n\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists';\n\nfunction createTodo(title, description, date) {\n    return {\n        title: title,\n        description: description,\n        date: date\n    }\n};\n\nfunction addTask () {\n    addTodoForm.addEventListener('submit', e => {\n        e.preventDefault();\n        const newTodo = createTodo(addTodoForm.addTodo.value, addTodoForm.addDescription.value, addTodoForm.addDate.value);\n        _addProject_js__WEBPACK_IMPORTED_MODULE_0__.projectFolder.forEach(project => {\n            if(project.projectTitle === header.textContent) {\n                project.todos.push(newTodo);\n                function populateTodoList() {\n                    header.textContent = `${project.projectTitle}`;\n                    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(todoContainer);\n                    project.todos.forEach(todo => {\n                    const newTodo = document.createElement('div');\n                    newTodo.classList.add('todo');\n                    const newTodoTitle = document.createElement('div');\n                    newTodoTitle.textContent = `${todo.title}`;\n                    const newTodoDate = document.createElement('div');\n                    newTodoDate.textContent = `${todo.date}`;\n                    const newTodoTrash = document.createElement('img');\n                    newTodoTrash.src = './delete.png';\n                    newTodoTrash.classList.add('delete');\n                    newTodoTrash.addEventListener('click', () => {\n                        project.todos.splice(project.todos.indexOf(todo), 1);\n                        (0,_addProject_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(todoContainer);\n                        populateTodoList();\n                        console.log(_addProject_js__WEBPACK_IMPORTED_MODULE_0__.projectFolder);\n                    });\n                    newTodo.appendChild(newTodoTitle)\n                    newTodo.appendChild(newTodoDate);\n                    newTodo.appendChild(newTodoTrash);\n                    todoContainer.appendChild(newTodo);\n\n                    const newTodoDescription = document.createElement('div');\n                    newTodoDescription.classList.add('add-todo');\n                    newTodoDescription.textContent = `${todo.description}`;\n                    newTodo.appendChild(newTodoDescription);\n                    newTodo.addEventListener('click', () => {\n                        newTodoDescription.classList.toggle('displayShow');\n                    });\n                    \n                });  \n            }\n            populateTodoList();\n            addTodoForm.reset();\n           \n            }\n        })\n        ;(0,_addProject_js__WEBPACK_IMPORTED_MODULE_0__.save)();\n    });\n}\n\n//# sourceURL=webpack://todo-list/./src/addTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/subDays/index.js\");\n/* harmony import */ var _assets_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/search.png */ \"./src/assets/search.png\");\n/* harmony import */ var _assets_inbox_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/inbox.png */ \"./src/assets/inbox.png\");\n/* harmony import */ var _assets_calendar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/calendar.png */ \"./src/assets/calendar.png\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _assets_plus_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/plus.png */ \"./src/assets/plus.png\");\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/github.png */ \"./src/assets/github.png\");\n/* harmony import */ var _assets_project_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/project.png */ \"./src/assets/project.png\");\n/* harmony import */ var _assets_new_project_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/new-project.png */ \"./src/assets/new-project.png\");\n/* harmony import */ var _assets_light_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/light.png */ \"./src/assets/light.png\");\n/* harmony import */ var _assets_dark_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/dark.png */ \"./src/assets/dark.png\");\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addTask.js */ \"./src/addTask.js\");\n\n\nconsole.log((0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date(), 3), new Date(), { addSuffix: true }));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_addProject_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"])();\n\n\n\n(0,_addProject_js__WEBPACK_IMPORTED_MODULE_14__.addProjectToList)();\n(0,_addProject_js__WEBPACK_IMPORTED_MODULE_14__.populateInbox)();\n(0,_addProject_js__WEBPACK_IMPORTED_MODULE_14__.inboxButton)();\n\n(0,_addTask_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"])();\n\n\n//night mode\nconst nightModeBtn = document.querySelector('.dark-circle');\nconst main = document.querySelector('.main');\nconst body = document.querySelector('body');\nconst sideBar = document.querySelector('.side-bar');\n\nnightModeBtn.addEventListener('click', () => {\n    body.classList.toggle('dark-mode');\n    main.classList.toggle('dark-mode');\n    sideBar.classList.toggle('dark-mode');\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/calendar.png":
/*!*********************************!*\
  !*** ./src/assets/calendar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"calendar.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/calendar.png?");

/***/ }),

/***/ "./src/assets/dark.png":
/*!*****************************!*\
  !*** ./src/assets/dark.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dark.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/dark.png?");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"delete.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/delete.png?");

/***/ }),

/***/ "./src/assets/github.png":
/*!*******************************!*\
  !*** ./src/assets/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"github.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/github.png?");

/***/ }),

/***/ "./src/assets/inbox.png":
/*!******************************!*\
  !*** ./src/assets/inbox.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"inbox.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/inbox.png?");

/***/ }),

/***/ "./src/assets/light.png":
/*!******************************!*\
  !*** ./src/assets/light.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"light.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/light.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/new-project.png":
/*!************************************!*\
  !*** ./src/assets/new-project.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"new-project.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/new-project.png?");

/***/ }),

/***/ "./src/assets/plus.png":
/*!*****************************!*\
  !*** ./src/assets/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"plus.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/plus.png?");

/***/ }),

/***/ "./src/assets/project.png":
/*!********************************!*\
  !*** ./src/assets/project.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"project.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/project.png?");

/***/ }),

/***/ "./src/assets/search.png":
/*!*******************************!*\
  !*** ./src/assets/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"search.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/search.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;