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
exports.id = "pages/api/getSearch";
exports.ids = ["pages/api/getSearch"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase(url) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFDdkIsZUFBZUMsa0JBQWtCQyxHQUFHLEVBQUU7SUFDbkQsTUFBTUMsU0FBUyxNQUFNSCx3REFBbUIsQ0FBQ0UsS0FBSztRQUM1Q0csaUJBQWlCLElBQUk7UUFDckJDLG9CQUFvQixJQUFJO0lBQzFCO0lBQ0EsT0FBT0g7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSh1cmwpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB9KTtcbiAgcmV0dXJuIGNsaWVudDtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwidXJsIiwiY2xpZW50IiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/getSearch.js":
/*!********************************!*\
  !*** ./pages/api/getSearch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    const client = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"mongodb+srv://samkcode:iyjscjKRc69wgQcG@cluster0.2xbvge1.mongodb.net/?retryWrites=true&w=majority\");\n    const collection = client.db().collection(\"searches\");\n    const { uid  } = req.query;\n    const query = {\n        uid: uid\n    };\n    try {\n        const existingUser = await collection.find(query).toArray();\n        if (existingUser) {\n            res.status(200).json({\n                message: \"user have searches history\",\n                existingUser\n            });\n        } else {\n            res.status(200).json({\n                message: \"User have not searches history\"\n            });\n        }\n    } catch (error) {\n        console.error(error, \"error get searches api\");\n        res.status(500).json({\n            message: \"Error inserting user data\"\n        });\n    } finally{\n        client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBRW5DLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVMsTUFBTUosd0RBQWlCQSxDQUNwQztJQUVGLE1BQU1LLGFBQWFELE9BQU9FLEVBQUUsR0FBR0QsVUFBVSxDQUFDO0lBQzFDLE1BQU0sRUFBRUUsSUFBRyxFQUFFLEdBQUdMLElBQUlNLEtBQUs7SUFDekIsTUFBTUEsUUFBUTtRQUFFRCxLQUFLQTtJQUFJO0lBQ3pCLElBQUk7UUFDRixNQUFNRSxlQUFlLE1BQU1KLFdBQVdLLElBQUksQ0FBQ0YsT0FBT0csT0FBTztRQUN6RCxJQUFJRixjQUFjO1lBQ2hCTixJQUNHUyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUE4Qkw7WUFBYTtRQUNoRSxPQUFPO1lBQ0xOLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUM7UUFDbkUsQ0FBQztJQUNILEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBLE9BQU87UUFDckJaLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUE0QjtJQUM5RCxTQUFVO1FBQ1JWLE9BQU9hLEtBQUs7SUFDZDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZ2V0U2VhcmNoLmpzP2ZhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gXCIuLi8uLi9saWIvbW9uZ29kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKFxuICAgIFwibW9uZ29kYitzcnY6Ly9zYW1rY29kZTppeWpzY2pLUmM2OXdnUWNHQGNsdXN0ZXIwLjJ4YnZnZTEubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG4gICk7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwic2VhcmNoZXNcIik7XG4gIGNvbnN0IHsgdWlkIH0gPSByZXEucXVlcnk7XG4gIGNvbnN0IHF1ZXJ5ID0geyB1aWQ6IHVpZCB9O1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZChxdWVyeSkudG9BcnJheSgpO1xuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcInVzZXIgaGF2ZSBzZWFyY2hlcyBoaXN0b3J5XCIsIGV4aXN0aW5nVXNlciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgaGF2ZSBub3Qgc2VhcmNoZXMgaGlzdG9yeVwiIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLCBcImVycm9yIGdldCBzZWFyY2hlcyBhcGlcIik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yIGluc2VydGluZyB1c2VyIGRhdGFcIiB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNvbGxlY3Rpb24iLCJkYiIsInVpZCIsInF1ZXJ5IiwiZXhpc3RpbmdVc2VyIiwiZmluZCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSearch.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSearch.js"));
module.exports = __webpack_exports__;

})();