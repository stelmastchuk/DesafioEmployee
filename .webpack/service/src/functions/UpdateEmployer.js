/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UseCases/UpdateEmployerUseCase.ts":
/*!***********************************************!*\
  !*** ./src/UseCases/UpdateEmployerUseCase.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpdateEmployerUseCase\": () => (/* binding */ UpdateEmployerUseCase)\n/* harmony export */ });\nclass UpdateEmployerUseCase {\r\n    constructor(employeeRepository) {\r\n        this.employeeRepository = employeeRepository;\r\n    }\r\n    async execute({ id, office, age, employerName }) {\r\n        const idAlredyExists = await this.employeeRepository.findById(id);\r\n        console.log(idAlredyExists);\r\n        if (!idAlredyExists) {\r\n            return true;\r\n        }\r\n        const employee = await this.employeeRepository.update({ id, office, age, employerName });\r\n        return employee;\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlQ2FzZXMvVXBkYXRlRW1wbG95ZXJVc2VDYXNlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtcmVnaXN0cmF0aW9uLy4vc3JjL1VzZUNhc2VzL1VwZGF0ZUVtcGxveWVyVXNlQ2FzZS50cz9kN2EyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElVcGRhdGVFbXBsb3llZSB9IGZyb20gXCJAcmVwb3NpdG9yaWVzL0RUTy9JVXBkYXRlRW1wbG95ZWVEVE9cIjtcclxuaW1wb3J0IHsgSUVtcGxveWVlUmVwb3NpdG9yeSB9IGZyb20gXCJAcmVwb3NpdG9yaWVzL1JlcG9zaXRvcnkvSUVtcGxveWVlUmVwb3NpdG9yeVwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFVwZGF0ZUVtcGxveWVyVXNlQ2FzZSB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZW1wbG95ZWVSZXBvc2l0b3J5OiBJRW1wbG95ZWVSZXBvc2l0b3J5XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW1wbG95ZWVSZXBvc2l0b3J5OiBJRW1wbG95ZWVSZXBvc2l0b3J5KSB7XHJcblxyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVSZXBvc2l0b3J5ID0gZW1wbG95ZWVSZXBvc2l0b3J5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBleGVjdXRlKHsgaWQsIG9mZmljZSwgYWdlLCBlbXBsb3llck5hbWUgfTogSVVwZGF0ZUVtcGxveWVlKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaWRBbHJlZHlFeGlzdHMgPSBhd2FpdCB0aGlzLmVtcGxveWVlUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkQWxyZWR5RXhpc3RzKTtcclxuXHJcbiAgICAgICAgaWYgKCFpZEFscmVkeUV4aXN0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgdGhpcy5lbXBsb3llZVJlcG9zaXRvcnkudXBkYXRlKHsgaWQsIG9mZmljZSwgYWdlLCBlbXBsb3llck5hbWUgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZW1wbG95ZWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IFVwZGF0ZUVtcGxveWVyVXNlQ2FzZSB9Il0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7QUFLQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFJQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UseCases/UpdateEmployerUseCase.ts\n");

/***/ }),

/***/ "./src/entities/Employer.ts":
/*!**********************************!*\
  !*** ./src/entities/Employer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Employer\": () => (/* binding */ Employer)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass Employer {\r\n    constructor() {\r\n        if (!this.id) {\r\n            this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();\r\n        }\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvRW1wbG95ZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS1yZWdpc3RyYXRpb24vLi9zcmMvZW50aXRpZXMvRW1wbG95ZXIudHM/NjAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5cclxuY2xhc3MgRW1wbG95ZXIge1xyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBhZ2U6IHN0cmluZztcclxuICAgIGVtcGxveWVyTmFtZTogc3RyaW5nXHJcbiAgICBvZmZpY2U6IHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgRW1wbG95ZXIgfSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entities/Employer.ts\n");

/***/ }),

/***/ "./src/functions/UpdateEmployer.ts":
/*!*****************************************!*\
  !*** ./src/functions/UpdateEmployer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _repositories_Repository_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repositories/Repository/EmployeeRepository */ \"./src/repositories/Repository/EmployeeRepository.ts\");\n/* harmony import */ var src_UseCases_UpdateEmployerUseCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/UseCases/UpdateEmployerUseCase */ \"./src/UseCases/UpdateEmployerUseCase.ts\");\n\r\n\r\nconst handle = async (event) => {\r\n    const { id } = event.pathParameters;\r\n    const { office, age, employerName } = JSON.parse(event.body);\r\n    const employeeRepository = new _repositories_Repository_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__.EmployeeRepository();\r\n    const updateEmployerUseCase = new src_UseCases_UpdateEmployerUseCase__WEBPACK_IMPORTED_MODULE_1__.UpdateEmployerUseCase(employeeRepository);\r\n    const res = await updateEmployerUseCase.execute({ id, office, age, employerName });\r\n    if (res) {\r\n        return {\r\n            statusCode: 400,\r\n            body: JSON.stringify({ message: \"User does not exists!\" }),\r\n            headers: { \"Content-type\": \"application/json\" },\r\n        };\r\n    }\r\n    else {\r\n        return {\r\n            statusCode: 201,\r\n            body: JSON.stringify({ message: \"Update Sucess!\" }),\r\n            headers: { \"Content-type\": \"application/json\" },\r\n        };\r\n    }\r\n    ;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL1VwZGF0ZUVtcGxveWVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtcmVnaXN0cmF0aW9uLy4vc3JjL2Z1bmN0aW9ucy9VcGRhdGVFbXBsb3llci50cz9jMmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElVcGRhdGVFbXBsb3llZSB9IGZyb20gXCJAcmVwb3NpdG9yaWVzL0RUTy9JVXBkYXRlRW1wbG95ZWVEVE9cIjtcclxuaW1wb3J0IHsgRW1wbG95ZWVSZXBvc2l0b3J5IH0gZnJvbSBcIkByZXBvc2l0b3JpZXMvUmVwb3NpdG9yeS9FbXBsb3llZVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgVXBkYXRlRW1wbG95ZXJVc2VDYXNlIH0gZnJvbSBcInNyYy9Vc2VDYXNlcy9VcGRhdGVFbXBsb3llclVzZUNhc2VcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBpZCB9ID0gZXZlbnQucGF0aFBhcmFtZXRlcnNcclxuXHJcbiAgICBjb25zdCB7IG9mZmljZSwgYWdlLCBlbXBsb3llck5hbWUgfSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSkgYXMgSVVwZGF0ZUVtcGxveWVlXHJcblxyXG5cclxuICAgIGNvbnN0IGVtcGxveWVlUmVwb3NpdG9yeSA9IG5ldyBFbXBsb3llZVJlcG9zaXRvcnkoKTtcclxuICAgIGNvbnN0IHVwZGF0ZUVtcGxveWVyVXNlQ2FzZSA9IG5ldyBVcGRhdGVFbXBsb3llclVzZUNhc2UoZW1wbG95ZWVSZXBvc2l0b3J5KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVFbXBsb3llclVzZUNhc2UuZXhlY3V0ZSh7IGlkLCBvZmZpY2UsIGFnZSwgZW1wbG95ZXJOYW1lIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIGlmIChyZXMpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAwLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVXNlciBkb2VzIG5vdCBleGlzdHMhXCIgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlVwZGF0ZSBTdWNlc3MhXCIgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/UpdateEmployer.ts\n");

/***/ }),

/***/ "./src/repositories/Repository/EmployeeRepository.ts":
/*!***********************************************************!*\
  !*** ./src/repositories/Repository/EmployeeRepository.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmployeeRepository\": () => (/* binding */ EmployeeRepository)\n/* harmony export */ });\n/* harmony import */ var src_entities_Employer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/entities/Employer */ \"./src/entities/Employer.ts\");\n/* harmony import */ var _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dynamodbCliente */ \"./src/utils/dynamodbCliente.ts\");\n\r\n\r\nclass EmployeeRepository {\r\n    findByName(employerName) {\r\n        throw new Error(\"Method not implemented.\");\r\n    }\r\n    async create({ age, employerName, office }) {\r\n        const employer = new src_entities_Employer__WEBPACK_IMPORTED_MODULE_0__.Employer();\r\n        const id = employer.id;\r\n        try {\r\n            await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.put({\r\n                TableName: \"Employeers\",\r\n                Item: {\r\n                    id,\r\n                    age,\r\n                    employerName,\r\n                    office\r\n                }\r\n            }).promise();\r\n        }\r\n        catch (error) {\r\n            throw new Error(error);\r\n        }\r\n        ;\r\n    }\r\n    async update({ id, age, office, employerName }) {\r\n        if (age) {\r\n            await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.update({\r\n                TableName: \"Employeers\",\r\n                Key: { \"id\": id },\r\n                UpdateExpression: \"SET age = :a\",\r\n                ExpressionAttributeValues: {\r\n                    \":a\": age\r\n                },\r\n                ReturnValues: \"UPDATED_NEW\"\r\n            }).promise();\r\n        }\r\n        if (office) {\r\n            await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.update({\r\n                TableName: \"Employeers\",\r\n                Key: { \"id\": id },\r\n                UpdateExpression: \"SET office = :c\",\r\n                ExpressionAttributeValues: {\r\n                    \":c\": office\r\n                },\r\n                ReturnValues: \"UPDATED_NEW\"\r\n            }).promise();\r\n        }\r\n        if (employerName) {\r\n            await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.update({\r\n                TableName: \"Employeers\",\r\n                Key: { \"id\": id },\r\n                UpdateExpression: \"SET employerName = :d \",\r\n                ExpressionAttributeValues: {\r\n                    \":d\": employerName\r\n                },\r\n                ReturnValues: \"UPDATED_NEW\"\r\n            }).promise();\r\n        }\r\n    }\r\n    async delete(id) {\r\n        await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.delete({\r\n            TableName: \"Employeers\",\r\n            Key: { \"id\": id },\r\n        }).promise();\r\n    }\r\n    async list(id) {\r\n        const employer = await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.get({\r\n            TableName: \"Employeers\",\r\n            Key: { \"id\": id },\r\n        }).promise();\r\n        return employer.Item;\r\n    }\r\n    async findById(id) {\r\n        const employer = await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.get({\r\n            TableName: \"Employeers\",\r\n            Key: { \"id\": id },\r\n        }).promise();\r\n        return employer.Item;\r\n    }\r\n    async listAll() {\r\n        const employer = await _utils_dynamodbCliente__WEBPACK_IMPORTED_MODULE_1__.document.scan({\r\n            TableName: \"Employeers\",\r\n        }).promise();\r\n        return employer.Items;\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3NpdG9yaWVzL1JlcG9zaXRvcnkvRW1wbG95ZWVSZXBvc2l0b3J5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtcmVnaXN0cmF0aW9uLy4vc3JjL3JlcG9zaXRvcmllcy9SZXBvc2l0b3J5L0VtcGxveWVlUmVwb3NpdG9yeS50cz83MDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDcmVhdGVFbXBsb3llZURUTyB9IGZyb20gXCJAcmVwb3NpdG9yaWVzL0RUTy9JQ3JlYXRlRW1wbG95ZWVEVE9cIjtcclxuaW1wb3J0IHsgSVVwZGF0ZUVtcGxveWVlIH0gZnJvbSBcIkByZXBvc2l0b3JpZXMvRFRPL0lVcGRhdGVFbXBsb3llZURUT1wiO1xyXG5pbXBvcnQgeyBFbXBsb3llciB9IGZyb20gXCJzcmMvZW50aXRpZXMvRW1wbG95ZXJcIlxyXG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9keW5hbW9kYkNsaWVudGVcIlxyXG5pbXBvcnQgeyBJRW1wbG95ZWVSZXBvc2l0b3J5IH0gZnJvbSBcIi4vSUVtcGxveWVlUmVwb3NpdG9yeVwiO1xyXG5cclxuY2xhc3MgRW1wbG95ZWVSZXBvc2l0b3J5IGltcGxlbWVudHMgSUVtcGxveWVlUmVwb3NpdG9yeSB7XHJcbiAgICBmaW5kQnlOYW1lKGVtcGxveWVyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgY3JlYXRlKHsgYWdlLCBlbXBsb3llck5hbWUsIG9mZmljZSB9OiBJQ3JlYXRlRW1wbG95ZWVEVE8pOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXIgPSBuZXcgRW1wbG95ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBlbXBsb3llci5pZFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgZG9jdW1lbnQucHV0KHtcclxuICAgICAgICAgICAgICAgIFRhYmxlTmFtZTogXCJFbXBsb3llZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBJdGVtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZpY2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkucHJvbWlzZSgpO1xyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZSh7IGlkLCBhZ2UsIG9mZmljZSwgZW1wbG95ZXJOYW1lIH06IElVcGRhdGVFbXBsb3llZSk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBpZiAoYWdlKSB7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBkb2N1bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgVGFibGVOYW1lOiBcIkVtcGxveWVlcnNcIixcclxuICAgICAgICAgICAgICAgIEtleTogeyBcImlkXCI6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVFeHByZXNzaW9uOiBcIlNFVCBhZ2UgPSA6YVwiLFxyXG4gICAgICAgICAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiOmFcIjogYWdlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIFJldHVyblZhbHVlczogXCJVUERBVEVEX05FV1wiXHJcbiAgICAgICAgICAgIH0pLnByb21pc2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2ZmaWNlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYWJsZU5hbWU6IFwiRW1wbG95ZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgS2V5OiB7IFwiaWRcIjogaWQgfSxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIG9mZmljZSA9IDpjXCIsXHJcbiAgICAgICAgICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCI6Y1wiOiBvZmZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBSZXR1cm5WYWx1ZXM6IFwiVVBEQVRFRF9ORVdcIlxyXG4gICAgICAgICAgICB9KS5wcm9taXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW1wbG95ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRvY3VtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYWJsZU5hbWU6IFwiRW1wbG95ZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgS2V5OiB7IFwiaWRcIjogaWQgfSxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIGVtcGxveWVyTmFtZSA9IDpkIFwiLFxyXG4gICAgICAgICAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiOmRcIjogZW1wbG95ZXJOYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBSZXR1cm5WYWx1ZXM6IFwiVVBEQVRFRF9ORVdcIlxyXG4gICAgICAgICAgICB9KS5wcm9taXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBkZWxldGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBhd2FpdCBkb2N1bWVudC5kZWxldGUoe1xyXG4gICAgICAgICAgICBUYWJsZU5hbWU6IFwiRW1wbG95ZWVyc1wiLFxyXG4gICAgICAgICAgICBLZXk6IHsgXCJpZFwiOiBpZCB9LFxyXG4gICAgICAgIH0pLnByb21pc2UoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGxpc3QoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgZG9jdW1lbnQuZ2V0KHtcclxuICAgICAgICAgICAgVGFibGVOYW1lOiBcIkVtcGxveWVlcnNcIixcclxuICAgICAgICAgICAgS2V5OiB7IFwiaWRcIjogaWQgfSxcclxuICAgICAgICB9KS5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbXBsb3llci5JdGVtO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZmluZEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgZG9jdW1lbnQuZ2V0KHtcclxuICAgICAgICAgICAgVGFibGVOYW1lOiBcIkVtcGxveWVlcnNcIixcclxuICAgICAgICAgICAgS2V5OiB7IFwiaWRcIjogaWQgfSxcclxuICAgICAgICB9KS5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbXBsb3llci5JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxpc3RBbGwoKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBkb2N1bWVudC5zY2FuKHtcclxuICAgICAgICAgICAgVGFibGVOYW1lOiBcIkVtcGxveWVlcnNcIixcclxuICAgICAgICB9KS5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbXBsb3llci5JdGVtcztcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgRW1wbG95ZWVSZXBvc2l0b3J5IH0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFLQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/repositories/Repository/EmployeeRepository.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbCliente.ts":
/*!**************************************!*\
  !*** ./src/utils/dynamodbCliente.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffLine = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffLine()\r\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\r\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnRlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtcmVnaXN0cmF0aW9uLy4vc3JjL3V0aWxzL2R5bmFtb2RiQ2xpZW50ZS50cz9jZDBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZWdpb246IFwibG9jYWxob3N0XCIsXHJcbiAgICBlbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIlxyXG59XHJcblxyXG5jb25zdCBpc09mZkxpbmUgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LklTX09GRkxJTkU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmTGluZSgpXHJcbiAgICA/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKVxyXG4gICAgOiBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamodbCliente.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/UpdateEmployer.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;