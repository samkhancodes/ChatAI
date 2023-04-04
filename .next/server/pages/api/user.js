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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
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

/***/ "(api)/./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    const client = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"mongodb+srv://samkcode:iyjscjKRc69wgQcG@cluster0.2xbvge1.mongodb.net/?retryWrites=true&w=majority\");\n    const collection = client.db().collection(\"user\");\n    const { photoURL , email , uid , displayName  } = req.body;\n    const query = {\n        uid: uid\n    }; // Use the UID as the query parameter to check if the user already exists\n    try {\n        const existingUser = await collection.findOne(query);\n        if (existingUser) {\n            res.status(200).json({\n                message: \"User already exists\"\n            });\n        } else {\n            const data = {\n                photoURL: photoURL,\n                email: email,\n                uid: uid,\n                displayName: displayName\n            };\n            const result = await collection.insertOne(data);\n            res.status(200).json({\n                message: \"User Data inserted successfully\"\n            });\n        }\n    } catch (error) {\n        console.error(error, \"error api\");\n        res.status(500).json({\n            message: \"Error inserting user data\"\n        });\n    } finally{\n        client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUVuQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTLE1BQU1KLHdEQUFpQkEsQ0FDcEM7SUFHRixNQUFNSyxhQUFhRCxPQUFPRSxFQUFFLEdBQUdELFVBQVUsQ0FBQztJQUMxQyxNQUFNLEVBQUVFLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxJQUFHLEVBQUVDLFlBQVcsRUFBRSxHQUFHUixJQUFJUyxJQUFJO0lBQ3RELE1BQU1DLFFBQVE7UUFBRUgsS0FBS0E7SUFBSSxHQUFHLHlFQUF5RTtJQUNyRyxJQUFJO1FBQ0YsTUFBTUksZUFBZSxNQUFNUixXQUFXUyxPQUFPLENBQUNGO1FBRTlDLElBQUlDLGNBQWM7WUFDaEJWLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBc0I7UUFDeEQsT0FBTztZQUNMLE1BQU1DLE9BQU87Z0JBQ1hYLFVBQVVBO2dCQUNWQyxPQUFPQTtnQkFDUEMsS0FBS0E7Z0JBQ0xDLGFBQWFBO1lBQ2Y7WUFFQSxNQUFNUyxTQUFTLE1BQU1kLFdBQVdlLFNBQVMsQ0FBQ0Y7WUFDMUNmLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBa0M7UUFDcEUsQ0FBQztJQUNILEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBLE9BQU87UUFDckJsQixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNEI7SUFDOUQsU0FBVTtRQUNSYixPQUFPbUIsS0FBSztJQUNkO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS91c2VyLmpzPzhhNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gXCIuLi8uLi9saWIvbW9uZ29kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKFxuICAgIFwibW9uZ29kYitzcnY6Ly9zYW1rY29kZTppeWpzY2pLUmM2OXdnUWNHQGNsdXN0ZXIwLjJ4YnZnZTEubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG4gICk7XG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2VyXCIpO1xuICBjb25zdCB7IHBob3RvVVJMLCBlbWFpbCwgdWlkLCBkaXNwbGF5TmFtZSB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHF1ZXJ5ID0geyB1aWQ6IHVpZCB9OyAvLyBVc2UgdGhlIFVJRCBhcyB0aGUgcXVlcnkgcGFyYW1ldGVyIHRvIGNoZWNrIGlmIHRoZSB1c2VyIGFscmVhZHkgZXhpc3RzXG4gIHRyeSB7XG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lKHF1ZXJ5KTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHBob3RvVVJMOiBwaG90b1VSTCxcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBEYXRhIGluc2VydGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLCBcImVycm9yIGFwaVwiKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgaW5zZXJ0aW5nIHVzZXIgZGF0YVwiIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiY29sbGVjdGlvbiIsImRiIiwicGhvdG9VUkwiLCJlbWFpbCIsInVpZCIsImRpc3BsYXlOYW1lIiwiYm9keSIsInF1ZXJ5IiwiZXhpc3RpbmdVc2VyIiwiZmluZE9uZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSIsInJlc3VsdCIsImluc2VydE9uZSIsImVycm9yIiwiY29uc29sZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.js"));
module.exports = __webpack_exports__;

})();