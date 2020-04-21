/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\nclass Button {\r\n  constructor(root, label, classNames, onClick) {\r\n    this.root = root;\r\n    this.label = label;\r\n    this.onClick = onClick;\r\n    this.classNames = classNames;\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.element = document.createElement('button');\r\n    if (this.onClick !== undefined) {\r\n      this.element.addEventListener('click', () => {\r\n        this.onClick();\r\n      });\r\n    }\r\n\r\n    this.element.textContent = this.label;\r\n    this.element.classList.add('btn');\r\n    this.element.classList.add(this.classNames);\r\n    this.root.append(this.element);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/button.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signUpForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signUpForm.js */ \"./src/js/signUpForm.js\");\n/* harmony import */ var _otherForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otherForm.js */ \"./src/js/otherForm.js\");\n\r\n\r\nconst formContainer = document.querySelector('.sign-up-container');\r\nconst formContainer2 = document.querySelector('.test');\r\nnew _signUpForm_js__WEBPACK_IMPORTED_MODULE_0__[\"SignUpForm\"](formContainer);\r\nnew _otherForm_js__WEBPACK_IMPORTED_MODULE_1__[\"OtherForm\"](formContainer2);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/inputField.js":
/*!******************************!*\
  !*** ./src/js/inputField.js ***!
  \******************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputField\", function() { return InputField; });\nclass InputField {\n  constructor(root, type, placeholder, label, classNames) {\n    this.root = root;\n    this.type = type;\n    this.placeholder = placeholder;\n    this.label = label;\n    this.classNames = classNames;\n    this.render();\n  }\n\n  render() {\n    this.element = document.createElement('label');\n    this.nameElement = document.createElement('span');\n    this.error = document.createElement('span');\n    this.error.classList.add('input-field__error');\n\n    this.nameElement.textContent = this.label;\n    this.realInput = document.createElement('input');\n    this.realInput.classList.add('input-field__input');\n    this.realInput.placeholder = this.placeholder;\n    this.realInput.type = this.type;\n\n    this.element.classList.add('input-field');\n    this.element.classList.add(this.classNames);\n    this.element.append(this.nameElement);\n    this.element.append(this.realInput);\n    this.element.append(this.error);\n    this.root.append(this.element);\n  }\n\n  value() {\n    return this.realInput.value;\n  }\n\n  setError(message) {\n    this.error.textContent = message;\n    this.error.style.color = 'red';\n    this.realInput.style.border = '1px solid red';\n  }\n\n  clearError() {\n    this.error.textContent = '';\n    this.error.style.color = '';\n    this.realInput.style.border = '1px solid transparent';\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/inputField.js?");

/***/ }),

/***/ "./src/js/otherForm.js":
/*!*****************************!*\
  !*** ./src/js/otherForm.js ***!
  \*****************************/
/*! exports provided: OtherForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OtherForm\", function() { return OtherForm; });\n/* harmony import */ var _inputField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputField.js */ \"./src/js/inputField.js\");\n\nclass OtherForm {\n  constructor(root) {\n    this.root = root;\n    this.isValid = true;\n    this.render();\n  }\n\n  render() {\n    this.form = document.createElement('form');\n\n    this.email = new _inputField_js__WEBPACK_IMPORTED_MODULE_0__[\"InputField\"](this.form, 'text', 'Hello', 'World:');\n    this.root.append(this.form);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/otherForm.js?");

/***/ }),

/***/ "./src/js/signUpForm.js":
/*!******************************!*\
  !*** ./src/js/signUpForm.js ***!
  \******************************/
/*! exports provided: SignUpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignUpForm\", function() { return SignUpForm; });\n/* harmony import */ var _inputField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputField.js */ \"./src/js/inputField.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.js */ \"./src/js/button.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../common/scripts/Ajax.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n\n\n\n\n\nconst API_URL = 'https://bloggers-crm-fe-prod.herokuapp.com/api';\n\nclass SignUpForm {\n  constructor(root) {\n    this.root = root;\n    this.isValid = true;\n    this.render();\n  }\n\n  render() {\n    this.form = document.createElement('form');\n    this.form.classList.add('sign-up-form');\n    this.email = new _inputField_js__WEBPACK_IMPORTED_MODULE_0__[\"InputField\"](\n      this.form,\n      'email',\n      'Enter email',\n      'Email:',\n      'sign-up-form__input'\n    );\n    this.password = new _inputField_js__WEBPACK_IMPORTED_MODULE_0__[\"InputField\"](\n      this.form,\n      'password',\n      'Enter password',\n      'Password:',\n      'sign-up-form__input'\n    );\n    this.confirmPassword = new _inputField_js__WEBPACK_IMPORTED_MODULE_0__[\"InputField\"](\n      this.form,\n      'password',\n      'Enter confirm password',\n      'Confirm password:',\n      'sign-up-form__input'\n    );\n    this.btn = new _button_js__WEBPACK_IMPORTED_MODULE_1__[\"Button\"](this.form, 'Sign up', 'sign-up-form__button');\n    this.form.addEventListener('submit', eventObject => {\n      eventObject.preventDefault();\n      this.signUp();\n    });\n    this.root.append(this.form);\n  }\n\n  signUp() {\n    this.clear();\n    this.validate();\n    if (this.isValid === false) {\n      console.error('FORM IS INVALID!');\n      return;\n    }\n    const request = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../common/scripts/Ajax.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(API_URL + '/signup');\n    const signUpData = {\n      email: this.email.value(),\n      password: this.password.value(),\n      confirmPassword: this.confirmPassword.value()\n    };\n    console.log(signUpData);\n    const successHandler = responseData => {\n      const newUrl = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"getFullUrl\"])('/sign_in.html');\n      window.location.href = newUrl;\n    };\n    request.post(successHandler, signUpData);\n    console.log('Send data to server');\n  }\n\n  validate() {\n    if (!this.email.value()) {\n      this.email.setError('Пустое поле');\n      this.isValid = false;\n    }\n    if (!this.password.value()) {\n      this.password.setError('Пустое поле');\n      this.isValid = false;\n    }\n    if (!this.confirmPassword.value()) {\n      this.confirmPassword.setError('Пустое поле');\n      this.isValid = false;\n    }\n  }\n\n  clear() {\n    this.email.clearError();\n    this.password.clearError();\n    this.confirmPassword.clearError();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/signUpForm.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getFullUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFullUrl\", function() { return getFullUrl; });\nconst getFullUrl = newRoute => {\n  const currentUrl = window.location.href;\n  const urlArray = currentUrl.split('/');\n  urlArray.pop();\n  const permanentUrl = urlArray.join('/');\n  console.log(permanentUrl);\n  return permanentUrl + newRoute;\n};\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });