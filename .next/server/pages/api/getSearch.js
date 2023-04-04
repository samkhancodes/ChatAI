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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    const client = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"mongodb+srv://samkcode:iyjscjKRc69wgQcG@cluster0.2xbvge1.mongodb.net/?retryWrites=true&w=majority\");\n    const collection = client.db().collection(\"searches\");\n    //   console.log(req.query.uid, \"body\");\n    const { uid  } = req.query;\n    const query = {\n        uid: uid\n    };\n    // console.log(query);\n    //   const query = { uid: uid }; // Use the UID as the query parameter to check if the user already exists\n    try {\n        const existingUser = await collection.find(query).toArray();\n        // console.log(existingUser, \"hello \");\n        // console.log(uid, \"uid\");\n        if (existingUser) {\n            res.status(200).json({\n                message: \"user have searches history\",\n                existingUser\n            });\n        } else {\n            res.status(200).json({\n                message: \"User have not searches history\"\n            });\n        }\n    } catch (error) {\n        console.error(error, \"error get searches api\");\n        res.status(500).json({\n            message: \"Error inserting user data\"\n        });\n    } finally{\n        client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBRW5DLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVMsTUFBTUosd0RBQWlCQSxDQUNwQztJQUdGLE1BQU1LLGFBQWFELE9BQU9FLEVBQUUsR0FBR0QsVUFBVSxDQUFDO0lBQzFDLHdDQUF3QztJQUN4QyxNQUFNLEVBQUVFLElBQUcsRUFBRSxHQUFHTCxJQUFJTSxLQUFLO0lBQ3pCLE1BQU1BLFFBQVE7UUFBRUQsS0FBS0E7SUFBSTtJQUN6QixzQkFBc0I7SUFDdEIsMEdBQTBHO0lBQzFHLElBQUk7UUFDRixNQUFNRSxlQUFlLE1BQU1KLFdBQVdLLElBQUksQ0FBQ0YsT0FBT0csT0FBTztRQUN6RCx1Q0FBdUM7UUFDdkMsMkJBQTJCO1FBRTNCLElBQUlGLGNBQWM7WUFDaEJOLElBQ0dTLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQThCTDtZQUFhO1FBQ2hFLE9BQU87WUFDTE4sSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFpQztRQUNuRSxDQUFDO0lBQ0gsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0EsT0FBTztRQUNyQlosSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTRCO0lBQzlELFNBQVU7UUFDUlYsT0FBT2EsS0FBSztJQUNkO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9nZXRTZWFyY2guanM/ZmEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoXG4gICAgXCJtb25nb2RiK3NydjovL3NhbWtjb2RlOml5anNjaktSYzY5d2dRY0dAY2x1c3RlcjAuMnhidmdlMS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcInNlYXJjaGVzXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS51aWQsIFwiYm9keVwiKTtcbiAgY29uc3QgeyB1aWQgfSA9IHJlcS5xdWVyeTtcbiAgY29uc3QgcXVlcnkgPSB7IHVpZDogdWlkIH07XG4gIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgLy8gICBjb25zdCBxdWVyeSA9IHsgdWlkOiB1aWQgfTsgLy8gVXNlIHRoZSBVSUQgYXMgdGhlIHF1ZXJ5IHBhcmFtZXRlciB0byBjaGVjayBpZiB0aGUgdXNlciBhbHJlYWR5IGV4aXN0c1xuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZChxdWVyeSkudG9BcnJheSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGV4aXN0aW5nVXNlciwgXCJoZWxsbyBcIik7XG4gICAgLy8gY29uc29sZS5sb2codWlkLCBcInVpZFwiKTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcInVzZXIgaGF2ZSBzZWFyY2hlcyBoaXN0b3J5XCIsIGV4aXN0aW5nVXNlciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgaGF2ZSBub3Qgc2VhcmNoZXMgaGlzdG9yeVwiIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLCBcImVycm9yIGdldCBzZWFyY2hlcyBhcGlcIik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yIGluc2VydGluZyB1c2VyIGRhdGFcIiB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNvbGxlY3Rpb24iLCJkYiIsInVpZCIsInF1ZXJ5IiwiZXhpc3RpbmdVc2VyIiwiZmluZCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSearch.js\n");

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