global.assets = require("./assets.json");
module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(121);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(25);

var config = {
  all: {
    env: "production" || 'development',
    isDev: "production" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    fbAppId: '991453140998882',
    googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    gtmId: 'GTM-WX5ZNVC'
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com'
  }
};

module.exports = merge(config.all, config[config.all.env]);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(124);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Containers
var req = __webpack_require__(123);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(137);

var req = __webpack_require__(128);

req.keys().forEach(function (key) {
  var storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  var fromName = 'from' + upperFirst(storeName);
  var selectors = req(key);
  var getState = function getState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state[storeName] || {};
  };

  module.exports[fromName] = {};

  Object.keys(selectors).forEach(function (name) {
    var selector = selectors[name];
    if (typeof selector === 'function') {
      module.exports[fromName][name] = function (state) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return selector.apply(undefined, [getState(state)].concat(args));
      };
    }
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITIES_RECEIVE", function() { return ENTITIES_RECEIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesReceive", function() { return entitiesReceive; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var ENTITIES_RECEIVE = 'ENTITIES_RECEIVE';

var entitiesReceive = function entitiesReceive(entities) {
  return {
    type: ENTITIES_RECEIVE,
    payload: entities
  };
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_CREATE_REQUEST", function() { return RESOURCE_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_CREATE_SUCCESS", function() { return RESOURCE_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_CREATE_FAILURE", function() { return RESOURCE_CREATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceCreateRequest", function() { return resourceCreateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceCreateSuccess", function() { return resourceCreateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceCreateFailure", function() { return resourceCreateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_LIST_READ_REQUEST", function() { return RESOURCE_LIST_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_LIST_READ_SUCCESS", function() { return RESOURCE_LIST_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_LIST_READ_FAILURE", function() { return RESOURCE_LIST_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceListReadRequest", function() { return resourceListReadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceListReadSuccess", function() { return resourceListReadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceListReadFailure", function() { return resourceListReadFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DETAIL_READ_REQUEST", function() { return RESOURCE_DETAIL_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DETAIL_READ_SUCCESS", function() { return RESOURCE_DETAIL_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DETAIL_READ_FAILURE", function() { return RESOURCE_DETAIL_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDetailReadRequest", function() { return resourceDetailReadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDetailReadSuccess", function() { return resourceDetailReadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDetailReadFailure", function() { return resourceDetailReadFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_UPDATE_REQUEST", function() { return RESOURCE_UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_UPDATE_SUCCESS", function() { return RESOURCE_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_UPDATE_FAILURE", function() { return RESOURCE_UPDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUpdateRequest", function() { return resourceUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUpdateSuccess", function() { return resourceUpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUpdateFailure", function() { return resourceUpdateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DELETE_REQUEST", function() { return RESOURCE_DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DELETE_SUCCESS", function() { return RESOURCE_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DELETE_FAILURE", function() { return RESOURCE_DELETE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDeleteRequest", function() { return resourceDeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDeleteSuccess", function() { return resourceDeleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDeleteFailure", function() { return resourceDeleteFailure; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST';
var RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS';
var RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE';

var resourceCreateRequest = function resourceCreateRequest(resource, data) {
  return {
    type: RESOURCE_CREATE_REQUEST,
    payload: { data: data },
    meta: {
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: resource + 'Create'
    }
  };
};

var resourceCreateSuccess = function resourceCreateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_CREATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
      entities: resource
    }
  };
};

var resourceCreateFailure = function resourceCreateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_CREATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: thunk
    }
  };
};

var RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST';
var RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS';
var RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE';

var resourceListReadRequest = function resourceListReadRequest(resource, params) {
  return {
    type: RESOURCE_LIST_READ_REQUEST,
    payload: { params: params },
    meta: {
      resource: resource,
      thunk: resource + 'ListRead'
    }
  };
};

var resourceListReadSuccess = function resourceListReadSuccess(resource, list, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_SUCCESS,
    payload: list,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceListReadFailure = function resourceListReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST';
var RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS';
var RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE';

var resourceDetailReadRequest = function resourceDetailReadRequest(resource, needle) {
  return {
    type: RESOURCE_DETAIL_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'DetailRead'
    }
  };
};

var resourceDetailReadSuccess = function resourceDetailReadSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceDetailReadFailure = function resourceDetailReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST';
var RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS';
var RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE';

var resourceUpdateRequest = function resourceUpdateRequest(resource, needle, data) {
  return {
    type: RESOURCE_UPDATE_REQUEST,
    payload: { needle: needle, data: data },
    meta: {
      resource: resource,
      thunk: resource + 'Update'
    }
  };
};

var resourceUpdateSuccess = function resourceUpdateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_UPDATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceUpdateFailure = function resourceUpdateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_UPDATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST';
var RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS';
var RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE';

var resourceDeleteRequest = function resourceDeleteRequest(resource, needle) {
  return {
    type: RESOURCE_DELETE_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'Delete'
    }
  };
};

var resourceDeleteSuccess = function resourceDeleteSuccess(resource, request, thunk) {
  return {
    type: RESOURCE_DELETE_SUCCESS,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var resourceDeleteFailure = function resourceDeleteFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DELETE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN", function() { return SOCIAL_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_PREPARE", function() { return SOCIAL_LOGIN_PREPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_REQUEST", function() { return SOCIAL_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_SUCCESS", function() { return SOCIAL_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_FAILURE", function() { return SOCIAL_LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGOUT", function() { return SOCIAL_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginPrepare", function() { return socialLoginPrepare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginRequest", function() { return socialLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginSuccess", function() { return socialLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginFailure", function() { return socialLoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLogout", function() { return socialLogout; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var SOCIAL_LOGIN = 'SOCIAL_LOGIN';
var SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE';
var SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
var SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
var SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
var SOCIAL_LOGOUT = 'SOCIAL_LOGOUT';

var socialLoginPrepare = function socialLoginPrepare(service) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref.clientId,
      options = _objectWithoutProperties(_ref, ['clientId']);

  return {
    type: SOCIAL_LOGIN_PREPARE,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options)
  };
};


var socialLoginRequest = function socialLoginRequest(service) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref2.clientId,
      options = _objectWithoutProperties(_ref2, ['clientId']);

  return {
    type: SOCIAL_LOGIN_REQUEST,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options),
    meta: {
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
      gtm: service
    }
  };
};


var socialLoginSuccess = function socialLoginSuccess(user, request) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request: request
    }
  };
};

var socialLoginFailure = function socialLoginFailure(error, request) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

var socialLogout = function socialLogout() {
  return { type: SOCIAL_LOGOUT };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities


var posts = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('posts');

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDenormalizedDetail", function() { return getDenormalizedDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDenormalizedList", function() { return getDenormalizedList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemas__ = __webpack_require__(18);
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities



var initialState = {};

var getEntity = function getEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  return state[entity] || {};
};

var getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return getEntity(state, entity)[id];
};

var getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (ids || Object.keys(getEntity(state, entity))).map(function (id) {
    return getDetail(state, entity, id);
  });
};

var getDenormalizedDetail = function getDenormalizedDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["denormalize"])(getDetail(state, entity, id), __WEBPACK_IMPORTED_MODULE_1__schemas__[entity], state);
};

var getDenormalizedList = function getDenormalizedList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["denormalize"])(getList(state, entity, ids), [__WEBPACK_IMPORTED_MODULE_1__schemas__[entity]], state);
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM", function() { return GTM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM_START", function() { return GTM_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM_FAILURE", function() { return GTM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gtmStart", function() { return gtmStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gtmFailure", function() { return gtmFailure; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
var GTM = 'GTM';
var GTM_START = 'GTM_START';
var GTM_FAILURE = 'GTM_FAILURE';

var gtmStart = function gtmStart(gtmId) {
  return {
    type: GTM_START,
    payload: {
      gtmId: gtmId
    }
  };
};

var gtmFailure = function gtmFailure(error, request) {
  return {
    type: GTM_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_SHOW", function() { return MODAL_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_HIDE", function() { return MODAL_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalShow", function() { return modalShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalHide", function() { return modalHide; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = 'MODAL_HIDE';

var modalShow = function modalShow(name) {
  return {
    type: MODAL_SHOW,
    payload: {
      name: name
    },
    meta: {
      gtm: name
    }
  };
};

var modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpen", function() { return isOpen; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = {};

var isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialResourceState", function() { return initialResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceState", function() { return getResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var initialState = {};

var initialResourceState = {
  list: [],
  detail: null
};

var getResourceState = function getResourceState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return state[resource] || initialResourceState;
};

var getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).list;
};

var getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).detail;
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var initialState = {
  user: null
};

var getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_server__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_store_configure__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_services_api__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components_App__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components_Html__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_components_Error__ = __webpack_require__(33);
/* eslint-disable no-console */


















var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_react_router__["StaticRouter"],
      { basename: __WEBPACK_IMPORTED_MODULE_10_config__["basename"], context: context, location: location },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_components_App__["a" /* default */], null)
    )
  ));
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_router_server__["renderToString"])(app);
};

var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var assets = global.assets;
  var state = '\n    window.__SERVER_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(serverState) + ';\n    window.__INITIAL_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(initialState) + ';\n  ';
  var html = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components_Html__["a" /* default */], { styles: styles, assets: assets, state: state, content: content });
  return '<!doctype html>\n' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToStaticMarkup"])(html);
};

var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_10_config__["basename"], __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.resolve(process.cwd(), 'dist/public')));

app.use(function (req, res, next) {
  var location = req.url;
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_store_configure__["a" /* default */])({}, { api: __WEBPACK_IMPORTED_MODULE_12_services_api__["a" /* default */].create() });
  var context = {};
  var sheet = new __WEBPACK_IMPORTED_MODULE_5_styled_components__["ServerStyleSheet"]();
  //const main = sheet.collectStyles(<Main />)
  //const styleTags = sheet.getStyleElement()

  renderApp({ store: store, context: context, location: location, sheet: sheet }).then(function (_ref3) {
    var serverState = _ref3.state,
        content = _ref3.html;

    if (context.status) {
      res.status(context.status);
    }
    if (context.url) {
      res.redirect(context.url);
    } else {
      var initialState = store.getState();
      res.send(renderHtml({ serverState: serverState, initialState: initialState, content: content, sheet: sheet }));
    }
  }).catch(next);
});

app.use(function (err, req, res, next) {
  var sheet = new __WEBPACK_IMPORTED_MODULE_5_styled_components__["ServerStyleSheet"]();
  var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToStaticMarkup"])(sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_components_Error__["a" /* default */], null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

app.listen(__WEBPACK_IMPORTED_MODULE_10_config__["port"], function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + __WEBPACK_IMPORTED_MODULE_10_config__["host"] + ':' + __WEBPACK_IMPORTED_MODULE_10_config__["port"] + __WEBPACK_IMPORTED_MODULE_10_config__["basename"] + '/'));
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_containers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__themes_default__ = __webpack_require__(82);
var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









// https://github.com/diegohaz/arc/wiki/Styling


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject);

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a,
      { titleTemplate: 'GetDinghy - %s' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        'Atomic React'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'UTF-8' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:site_name', content: 'GetDinghy' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:width', content: '1200' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:height', content: '630' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_containers__["GoogleTagManager"], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_styled_components__["ThemeProvider"],
      { theme: __WEBPACK_IMPORTED_MODULE_6__themes_default__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/', component: __WEBPACK_IMPORTED_MODULE_4____["HomePage"], exact: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/sample-page', component: __WEBPACK_IMPORTED_MODULE_4____["SamplePage"] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: __WEBPACK_IMPORTED_MODULE_4____["NotFoundPage"] })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ErrorPage = function ErrorPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable react/no-danger */




var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = __WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'body',
      bodyAttrs,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: path, src: path });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var Atom = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.span(['font-family:', ';color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])({ grayscale: 0 }, 1));

Atom.propTypes = {
  palette: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

Atom.defaultProps = {
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (Atom);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var Badge = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.span(['font-family:', ';font-size:0.75rem;line-height:1.5em;padding:0.1em 0.3em;color:', ';background-color:', ';border-radius:0.16667em;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 0, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])(1));

Badge.propTypes = {
  palette: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

Badge.defaultProps = {
  palette: 'primary'
};

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_tools__);





var Block = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['font-family:', ';background-color:', ';color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('opaque', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])(0, true), 'transparent'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])({ grayscale: 0 }, 1));

Block.propTypes = {
  palette: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  opaque: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

Block.defaultProps = {
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polished__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_polished__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 40 + 'rem';
};

var backgroundColor = function backgroundColor(_ref2) {
  var transparent = _ref2.transparent,
      disabled = _ref2.disabled;
  return transparent ? 'transparent' : disabled ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 3, true) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(0);
};

var foregroundColor = function foregroundColor(_ref3) {
  var transparent = _ref3.transparent,
      disabled = _ref3.disabled;
  return transparent ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(disabled ? 2 : 1) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 0, true);
};

var hoverBackgroundColor = function hoverBackgroundColor(_ref4) {
  var disabled = _ref4.disabled,
      transparent = _ref4.transparent;
  return !disabled && !transparent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(1);
};
var hoverForegroundColor = function hoverForegroundColor(_ref5) {
  var disabled = _ref5.disabled,
      transparent = _ref5.transparent;
  return !disabled && transparent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(0);
};

var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['display:inline-flex;font-family:', ';align-items:center;white-space:nowrap;font-size:14px;border:0.0625em solid ', ';height:2.5em;width:147px;justify-content:center;text-decoration:none;cursor:', ';appearance:none;padding:0 1em;border-radius:0.125em;box-sizing:border-box;pointer-events:', ';transition:background-color 250ms ease-out,color 250ms ease-out,border-color 250ms ease-out;background-color:', ';color:', ';&:hover,&:focus,&:active{background-color:', ';color:', ';}&:active{background-color:', '}&:focus{outline:none}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_styled_tools__["ifProp"])('transparent', 'currentcolor', 'transparent'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_styled_tools__["ifProp"])('disabled', 'default', 'pointer'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_styled_tools__["ifProp"])('disabled', 'none', 'auto'), backgroundColor, foregroundColor, hoverBackgroundColor, hoverForegroundColor, backgroundColor);

var StyledLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref6) {
  var disabled = _ref6.disabled,
      transparent = _ref6.transparent,
      reverse = _ref6.reverse,
      palette = _ref6.palette,
      height = _ref6.height,
      theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ['disabled', 'transparent', 'reverse', 'palette', 'height', 'theme']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link___default.a, props);
})(['', ''], styles);
var Anchor = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a(['', ''], styles);
var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button(['', ''], styles);

var Button = function Button(_ref7) {
  var type = _ref7.type,
      label = _ref7.label,
      props = _objectWithoutProperties(_ref7, ['type', 'label']);

  if (props.to) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      StyledLink,
      props,
      label
    );
  } else if (props.href) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Anchor,
      props,
      label
    );
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledButton,
    _extends({}, props, { type: type }),
    label
  );
};

Button.defaultProps = {
  label: 'Button label',
  palette: 'primary',
  type: 'button',
  height: 50
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var Caption = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.caption(['font-family:', ';color:', ';font-weight:500;line-height:2rem;font-size:0.875rem;text-transform:uppercase;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 1));

Caption.propTypes = {
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Caption);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var fontSize = function fontSize(_ref) {
  var level = _ref.level;
  return 0.75 + 1 * (1 / level) + 'rem';
};

var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['font-family:', ';font-weight:500;font-size:', ';margin:0;margin-top:0.85714em;margin-bottom:0.57142em;color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), fontSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])({ grayscale: 0 }, 1));

var Heading = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      reverse = _ref2.reverse,
      palette = _ref2.palette,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['level', 'children', 'reverse', 'palette', 'theme']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h' + level, props, children);
})(['', ''], styles);

Heading.propTypes = {
  level: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  palette: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var HorizontalRule = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.hr(['border:1px solid ', ';border-width:0 0 1px;width:100%;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])(1, true));

HorizontalRule.propTypes = {
  palette: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

HorizontalRule.defaultProps = {
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalRule);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_tools__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Example-components#icon






var fontSize = function fontSize(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var size = width || height;
  return size ? size / 16 + 'rem' : '1.25em';
};

var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(['display:inline-block;font-size:', ';color:', ';width:1em;height:1em;margin:0.1em;box-sizing:border-box;& > svg{width:100%;height:100%;fill:currentcolor;stroke:currentcolor;}'], fontSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])('palette', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])({ grayscale: 0 }, 1), 'currentcolor'));

var Icon = function Icon(_ref2) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ['icon']);

  var svg = __webpack_require__(122)("./" + icon + '.svg');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, _extends({}, props, { dangerouslySetInnerHTML: { __html: svg } }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polished__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polished___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_polished__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 35.5555555556 + 'rem';
};

var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['font-family:', ';display:block;width:100%;margin:0;box-sizing:border-box;font-size:0.875rem;padding:', ';height:', ';color:', ';background-color:', ';border:2px solid ', ';border-radius:1px;-webkit-appearance:none;', ' &[type=checkbox],&[type=radio]{display:inline-block;border:0;border-radius:0;width:auto;height:auto;margin:0 0.2rem 0 0;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])({ type: 'textarea' }, 'auto', '3.125rem'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])('invalid', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('danger', 2), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 3)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_polished__["placeholder"])({ 'color': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 3, true) }));

var StyledTextarea = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.textarea(['', ''], styles);
var StyledSelect = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.select(['', ''], styles);
var StyledInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input(['', ''], styles);

var Input = function Input(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.type === 'textarea') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledTextarea, props);
  } else if (props.type === 'select') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledSelect, props);
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledInput, _extends({ className: props.invalid ? "is--invalid" : null }, props));
};

Input.defaultProps = {
  type: 'text',
  height: 50
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var Label = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.label(['font-family:', ';color:', ';font-size:1.25rem;line-height:2em;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 1));

Label.propTypes = {
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_NavLink__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_NavLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom_NavLink__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['font-family:', ';text-decoration:none;font-weight:500;color:', ';&:hover{text-decoration:underline;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])({ grayscale: 0 }, 1));

var StyledNavLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref) {
  var theme = _ref.theme,
      reverse = _ref.reverse,
      palette = _ref.palette,
      props = _objectWithoutProperties(_ref, ['theme', 'reverse', 'palette']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom_NavLink___default.a, props);
})(['', ''], styles);
var Anchor = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a(['', ''], styles);

var Link = function Link(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.to) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledNavLink, props);
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anchor, props);
};

Link.defaultProps = {
  palette: 'primary'
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['font-family:', ';margin:1rem 0;padding-left:1.6rem;line-height:1.7rem;color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])({ grayscale: 0 }, 1));

var Ol = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.ol(['', ''], styles);
var Ul = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.ul(['', ''], styles);

var List = function List(_ref) {
  var ordered = _ref.ordered,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['ordered', 'children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ordered ? Ol : Ul, props, children);
};

List.defaultProps = {
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_svg__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var LogoImage = function LogoImage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({ alt: 'Logo' }, props, { src: __WEBPACK_IMPORTED_MODULE_1__logo_svg___default.a }));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoImage);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var Paragraph = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(['font-family:', ';color:', ';font-size:1rem;line-height:1.3;margin:1rem 0 0;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 0));

Paragraph.propTypes = {
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_tools__);





var PreformattedText = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.pre(['display:', ';font-family:', ';color:', ';background-color:', ';padding:', ';white-space:', ';overflow:auto;line-height:150%;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('block', 'block', 'inline'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["font"])('pre'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])({ grayscale: 0 }, 1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 1, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('block', '1em', '0 0.5em'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('wrap', 'pre-wrap', 'nowrap'));

PreformattedText.propTypes = {
  palette: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  block: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  wrap: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

PreformattedText.defaultProps = {
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (PreformattedText);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var spin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(['0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}']);

var Spinner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['position:relative;border:0.2em solid ', ';border-bottom-color:', ';border-radius:50%;margin:0 auto;width:1em;height:1em;animation:', ' 1s linear infinite;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 1, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])(1), spin);

Spinner.propTypes = {
  palette: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

Spinner.defaultProps = {
  palette: 'primary'
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['text-align:left;padding:0.75em;']);

var Th = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.th(['', ''], styles);
var Td = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.td(['', ''], styles);

var TableCell = function TableCell(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['heading', 'children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(heading ? Th : Td, props, children);
};

/* harmony default export */ __webpack_exports__["default"] = (TableCell);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);




var backgroundColor = function backgroundColor(_ref) {
  var filled = _ref.filled;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', filled ? 1 : 0, true);
};

var TableRow = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.tr(['background-color:', ';'], backgroundColor);

TableRow.propTypes = {
  filled: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  reverse: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opposite", function() { return opposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perpendicular", function() { return perpendicular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perpendicularOpposite", function() { return perpendicularOpposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perpendicularAxis", function() { return perpendicularAxis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_tools__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var opposites = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

var opposite = function opposite(_ref) {
  var position = _ref.position;
  return opposites[position];
};

var perpendicular = function perpendicular(_ref2) {
  var position = _ref2.position;
  return position === 'left' || position === 'right' ? 'top' : 'left';
};

var perpendicularOpposite = function perpendicularOpposite(props) {
  return opposites[perpendicular(props)];
};

var perpendicularAxis = function perpendicularAxis(_ref3) {
  var position = _ref3.position;
  return position === 'left' || position === 'right' ? 'Y' : 'X';
};

var backgroundColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])('reverse', 'rgba(255, 255, 255, 0.85)', 'rgba(0, 0, 0, 0.85)');

var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['position:relative;&:before,&:after{position:absolute;pointer-events:none;display:block;opacity:0;transition:opacity 100ms ease-in-out,', ' 100ms ease-in-out;will-change:', ';}&:hover:before,&:focus:before{opacity:1;', ':calc(100% + 1rem);}&:hover:after,&:focus:after{opacity:1;', ':100%;}&:before{content:attr(data-title);font-family:', ';white-space:nowrap;text-transform:none;font-size:0.8125rem;line-height:1.5;text-align:center;color:', ';background-color:', ';border-radius:0.15384em;padding:0.75em 1em;', ':calc(100% + 2rem);', '}&:after{', ':calc(100% + 1rem);', ':50%;border:solid transparent;content:\'\';height:0;width:0;border-', '-color:', ';border-width:0.5rem;margin-', ':-0.5rem;}'], opposite, opposite, opposite, opposite, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])('reverse', 'black', 'white'), backgroundColor, opposite, function (_ref4) {
  var align = _ref4.align;

  switch (align) {
    case 'start':
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['', ':0;'], perpendicular);
    case 'center':
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['', ':50%;transform:translate', '(-50%);'], perpendicular, perpendicularAxis);
    default:
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['', ':0;'], perpendicularOpposite);
  }
}, opposite, perpendicular, function (_ref5) {
  var position = _ref5.position;
  return position;
}, backgroundColor, perpendicular);

var Tooltip = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref6) {
  var position = _ref6.position,
      align = _ref6.align,
      reverse = _ref6.reverse,
      children = _ref6.children,
      theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ['position', 'align', 'reverse', 'children', 'theme']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, props);
})(['', ''], styles);

Tooltip.propTypes = {
  position: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['top', 'right', 'bottom', 'left']),
  align: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['start', 'center', 'end']),
  reverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  'data-title': __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
};

Tooltip.defaultProps = {
  position: 'top',
  align: 'center',
  tabIndex: 0
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var StyledBlockquote = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.blockquote(['position:relative;font-family:', ';font-style:italic;font-size:1.2rem;line-height:2rem;box-sizing:border-box;color:', ';border-left:5px solid ', ';margin:1rem 0;padding:0.5rem 0 0.5rem 1.5rem;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('quote'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 2, true));

var Cite = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.cite(['display:block;font-family:', ';font-weight:300;font-style:normal;margin-top:0.4rem;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'));

var Blockquote = function Blockquote(_ref) {
  var cite = _ref.cite,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['cite', 'children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledBlockquote,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      children
    ),
    cite && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Cite,
      null,
      cite
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Blockquote);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['position:relative;display:flex;padding:1rem;box-sizing:border-box;opacity:', ';@media screen and (max-width:640px){padding:0.5rem;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('soon', 0.4, 1));

var StyledIcon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_components__["Icon"])(['flex:none;@media screen and (max-width:640px){width:32px;}']);

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['margin-left:1rem;overflow:auto;>:first-child{margin:0;}']);

var StyledBadge = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_components__["Badge"])(['position:absolute;top:1rem;right:1rem;@media screen and (max-width:640px){top:0.5rem;right:0.5rem;}']);

var Feature = function Feature(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      link = _ref.link,
      code = _ref.code,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['icon', 'title', 'link', 'code', 'children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    icon && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledIcon, { icon: icon, width: 64 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Text,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["Heading"],
        { level: 2 },
        link ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_components__["Link"],
          { href: link },
          title
        ) : title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["Paragraph"],
        null,
        children
      ),
      code && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["PreformattedText"],
        { block: true },
        code
      )
    ),
    props.soon && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      StyledBadge,
      { palette: 'grayscale' },
      'soon'
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Error = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["Block"])(['margin:0.5rem 0 0;']);

var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['margin-bottom:1rem;input[type="checkbox"],input[type="radio"]{margin-right:0.5rem;}label{vertical-align:middle;}']);

var Field = function Field(_ref) {
  var error = _ref.error,
      name = _ref.name,
      invalid = _ref.invalid,
      label = _ref.label,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['error', 'name', 'invalid', 'label', 'type']);

  var inputProps = _extends({ id: name, name: name, type: type, invalid: invalid, 'aria-describedby': name + 'Error' }, props);
  var renderInputFirst = type === 'checkbox' || type === 'radio';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    null,
    renderInputFirst && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["Input"], inputProps),
    label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Label"],
      { htmlFor: inputProps.id },
      label
    ),
    renderInputFirst || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["Input"], inputProps),
    invalid && error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Error,
      { id: name + 'Error', role: 'alert', palette: 'danger' },
      error
    )
  );
};

Field.defaultProps = {
  type: 'text'
};

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var fadeIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["keyframes"])(['0%{display:none;opacity:0;}1%{display:block:opacity:0;}100%{display:block;opacity:1;}']);

var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_components__["Button"])(['max-width:', ';width:', ';padding:', ';flex:0 0 2.5em;box-sizing:border-box;', ' ', ''], function (props) {
  return props.hasText && !props.collapsed ? '100%' : '2.5em';
}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('hasText', 'auto', '2.5em'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('hasText', '0 0.4375em', 0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['overflow:hidden;transition:max-width 250ms ease-in-out;will-change:max-width;& .text{display:none;}&:hover{max-width:100%;& .text{display:block;animation:', ' 250ms;}}'], fadeIn)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('responsive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['@media screen and (max-width:', 'px){width:auto;flex:0 !important;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["prop"])('breakpoint'))));

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(['padding:0.4375em;@media screen and (max-width:', 'px){display:', ';}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["prop"])('breakpoint'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('responsive', 'none !important'));

var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display:flex;align-items:center;justify-content:center;width:100%;height:100%;']);

var StyledIcon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_components__["Icon"])(['flex:none;']);

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['icon', 'children']);

  var breakpoint = props.breakpoint,
      right = props.right,
      responsive = props.responsive,
      height = props.height;

  var iconElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledIcon, { height: height / 2.5, icon: icon });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledButton,
    _extends({ hasText: !!children }, props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Wrapper,
      null,
      right || iconElement,
      children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Text,
        { className: 'text', responsive: responsive, breakpoint: breakpoint },
        children
      ),
      right && iconElement
    )
  );
};

IconButton.defaultProps = {
  breakpoint: 420
};

/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height ? height / 3 / 16 + 'rem' : '0.75em';
};

var margin = function margin(_ref2) {
  var hasText = _ref2.hasText,
      right = _ref2.right;

  if (hasText) {
    return right ? '0 0 0 0.25em' : '0 0.25em 0 0';
  }
  return 0;
};

var StyledIcon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["Icon"])(['font-size:', ';margin:', ';@media screen and (max-width:420px){margin:', ';}'], fontSize, margin, function (_ref3) {
  var responsive = _ref3.responsive;
  return responsive && 0;
});

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(['@media screen and (max-width:420px){display:', ';}'], function (_ref4) {
  var responsive = _ref4.responsive;
  return responsive && 'none';
});

var IconLink = function IconLink(_ref5) {
  var height = _ref5.height,
      icon = _ref5.icon,
      right = _ref5.right,
      responsive = _ref5.responsive,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ['height', 'icon', 'right', 'responsive', 'children']);

  var iconElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledIcon, {
    height: height,
    icon: icon,
    hasText: !!children,
    right: right,
    responsive: responsive,
    palette: props.palette,
    reverse: props.reverse
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_components__["Link"],
    props,
    right || iconElement,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Text,
      { responsive: responsive },
      children
    ),
    right && iconElement
  );
};

/* harmony default export */ __webpack_exports__["default"] = (IconLink);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n'], ['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject);

var overlayStyles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['position:fixed;background-color:rgba(0,0,0,0.5);top:0;right:0;left:0;bottom:0;z-index:9999;transition:opacity 250ms ease-in-out;opacity:0;&[class*="after-open"]{opacity:1;}&[class*="before-close"]{opacity:0;}']);

var ModalBox = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_react_modal___default.a)(['position:absolute;display:flex;flex-direction:column;font-family:', ';font-size:1rem;background-color:', ';border-radius:0.125em;color:', ';top:calc(50% - 1rem);left:calc(50% - 1rem);right:auto;bottom:auto;margin:1rem calc(-50% + 1rem) 1rem 1rem;transform:translate(-50%,100%);transition:transform 250ms ease-in-out;outline:none;box-sizing:border-box;min-width:320px;max-width:calc(640px - 1rem);max-height:calc(100% - 1rem);padding-top:', ';@media screen and (max-width:640px){width:calc(100% - 1rem);min-width:0;}&[class*="after-open"]{transform:translate(-50%,-50%);}&[class*="before-close"]{transform:translate(-50%,100%);}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 0, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 0), function (_ref) {
  var hasHeader = _ref.hasHeader;
  return hasHeader ? 0 : '1rem';
});

var Header = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.header(['display:flex;align-items:center;padding:1rem;> *:first-child{flex:1;}']);

var StyledHeading = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_5_components__["Heading"])(['margin:0 1rem 0 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;']);

var Content = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['overflow:auto;padding:0 1rem;margin-bottom:1rem;']);

var StyledReactModal = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['className']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalBox, _extends({ overlayClassName: className, closeTimeoutMS: 250 }, props));
})(['', ''], overlayStyles);

var Modal = function Modal(_ref3) {
  var children = _ref3.children,
      title = _ref3.title,
      closeable = _ref3.closeable,
      onClose = _ref3.onClose,
      props = _objectWithoutProperties(_ref3, ['children', 'title', 'closeable', 'onClose']);

  var hasHeader = title || closeable;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledReactModal,
    _extends({
      contentLabel: title || 'Modal',
      onRequestClose: onClose,
      hasHeader: hasHeader
    }, props),
    hasHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Header,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledHeading,
        { level: 2, reverse: props.reverse },
        title
      ),
      closeable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["IconButton"], { icon: 'close', onClick: onClose, palette: 'white', reverse: true })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Content,
      null,
      children
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['font-family:', ';color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0));

var Molecule = function Molecule(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    children
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Molecule);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Article = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.article(['']);

var Post = function Post(_ref) {
  var title = _ref.title,
      body = _ref.body,
      props = _objectWithoutProperties(_ref, ['title', 'body']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Article,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Heading"],
      { level: 2 },
      title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Paragraph"],
      null,
      body
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);







var Nav = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.nav(['display:flex;list-style:none;>:not(:first-child){margin-left:1rem;}a{font-weight:300;color:', ';font-size:1.25rem;&.active{color:', ';}}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 2), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0));

var PrimaryNavigation = function PrimaryNavigation(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Nav,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["Link"],
        { to: '/', exact: true, activeClassName: 'active' },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["Link"],
        { to: '/sample-page', activeClassName: 'active' },
        'Sample page'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PrimaryNavigation);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_tools__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 35.5555555556 + 'rem';
};

var thumbColor = function thumbColor(_ref2) {
  var disabled = _ref2.disabled;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])(disabled ? 2 : 1);
};

var barColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 2, true);

var hoverThumbColor = function hoverThumbColor(_ref3) {
  var disabled = _ref3.disabled;
  return !disabled && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])(0);
};

var thumbHeight = '1.5em';
var thumbWidth = '1.5em';
var barHeight = '0.6em';

var border = '0.0625em solid transparent';
var borderRadius = '0.125em';

var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['font-family:', ';display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:', ';color:', ';background-color:transparent;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), fontSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0));

var Range = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input(['-webkit-appearance:none;margin:0 0.4375em;width:100%;height:1rem;background:transparent;&:focus{outline:none;}', ' &::-webkit-slider-thumb{-webkit-appearance:none;background:', ';border:', ';height:', ';width:', ';border-radius:', ';cursor:pointer;margin-top:-0.53em;transition:background .15s ease-in-out;&:hover{background:', ';}}&::-moz-range-thumb{background:', ';height:', ';width:', ';border:', ';border-radius:', ';cursor:pointer;transition:background .15s ease-in-out;&:hover{background:', ';}}&::-ms-thumb{height:', ';width:', ';cursor:pointer;border:', ';border-radius:', ';}', ' &::-webkit-slider-runnable-track{width:100%;height:', ';background:', ';border-radius:', ';border:', ';}&::-ms-track{width:100%;height:', ';border:', ';border-radius:', ';color:transparent;}&::-moz-range-track{width:100%;height:', ';background:', ';border-radius:', ';border:', ';}&::-ms-fill-lower{background:', ';border:', ';border-radius:', ';}&::-ms-fill-upper{background:', ';border:', ';border-radius:', '}'], '' /* Thumb */, thumbColor, border, thumbHeight, thumbWidth, borderRadius, hoverThumbColor, thumbColor, thumbHeight, thumbWidth, border, borderRadius, hoverThumbColor, thumbHeight, thumbWidth, border, borderRadius, '' /* Track */, barHeight, barColor, borderRadius, border, barHeight, border, borderRadius, barHeight, barColor, borderRadius, border, barColor, border, borderRadius, barColor, border, borderRadius);

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(['padding:0.4375em;@media screen and (max-width:', 'px){display:', ';}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["prop"])('breakpoint'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])('responsive', 'none !important'));

var Slider = function Slider(_ref4) {
  var id = _ref4.id,
      min = _ref4.min,
      max = _ref4.max,
      defaultValue = _ref4.defaultValue,
      step = _ref4.step,
      props = _objectWithoutProperties(_ref4, ['id', 'min', 'max', 'defaultValue', 'step']);

  var breakpoint = props.breakpoint,
      responsive = props.responsive;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Text,
      { responsive: responsive, breakpoint: breakpoint },
      min
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Range, _extends({ id: id, min: min, max: max, defaultValue: defaultValue, step: step }, props)),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Text,
      { responsive: responsive, breakpoint: breakpoint },
      max
    )
  );
};

Slider.defaultProps = {
  min: 0,
  max: 2,
  defaultValue: 1,
  step: 1,
  palette: 'primary',
  type: 'range',
  breakpoint: 420,
  responsive: false
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var StyledTable = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.table(['font-family:', ';border-collapse:collapse;width:100%;border:1px solid ', ';color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 1, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0));

var Table = function Table(_ref) {
  var caption = _ref.caption,
      head = _ref.head,
      foot = _ref.foot,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['caption', 'head', 'foot', 'children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledTable,
    props,
    caption && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_components__["Caption"],
      { reverse: props.reverse },
      caption
    ),
    head && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'thead',
      null,
      head
    ),
    foot && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tfoot',
      null,
      foot
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      null,
      children
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var Options = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display:flex;justify-content:flex-end;margin-top:1rem;> *:first-child{margin-right:0.5rem;}']);

var ConfirmModal = function ConfirmModal(_ref) {
  var children = _ref.children,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
      confirmLabel = _ref.confirmLabel,
      cancelLabel = _ref.cancelLabel,
      confirmProps = _ref.confirmProps,
      cancelProps = _ref.cancelProps,
      props = _objectWithoutProperties(_ref, ['children', 'onConfirm', 'onClose', 'confirmLabel', 'cancelLabel', 'confirmProps', 'cancelProps']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_containers__["Modal"],
    props,
    children || 'Do you want to proceed?',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Options,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_components__["Button"],
        _extends({ onClick: onConfirm }, confirmProps),
        confirmLabel
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_components__["Button"],
        _extends({ onClick: onClose, transparent: true }, cancelProps),
        cancelLabel
      )
    )
  );
};

ConfirmModal.defaultProps = {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  confirmProps: {},
  cancelProps: {}
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Grid = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['display:flex;flex-flow:row wrap;> *{width:calc(50% - 2rem);@media screen and (max-width:640px){width:100%;}}']);

var StyledHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_components__["Heading"])(['text-align:center;']);

var Description = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_components__["Paragraph"])(['text-align:center;margin:2rem;@media screen and (max-width:640px){margin:1rem;}']);

var StyledFeature = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_components__["Feature"])(['margin:1rem;@media screen and (max-width:640px){margin:0;}']);

var FeatureList = function FeatureList(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      StyledHeading,
      null,
      'Basic stack'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Description,
      null,
      'It includes everything necessary to build a tipical web app with focus on productivity and developer experience.',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_components__["Link"],
        { href: 'https://github.com/diegohaz/arc/wiki/Workflow' },
        'Learn more about the recomended workflow'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Grid,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledFeature,
        {
          icon: 'react',
          link: 'https://facebook.github.io/react',
          title: 'React',
          code: '<MyComponent attr="value" />'
        },
        'The Facebook\'s JavaScript library for building user interfaces using components.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledFeature,
        {
          icon: 'react-router',
          link: 'https://github.com/ReactTraining/react-router',
          title: 'React Router',
          code: '<Route path="/sample-page" />'
        },
        'The most popular declarative routing library for React and React Native.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledFeature,
        {
          icon: 'webpack',
          link: 'https://webpack.github.io/',
          title: 'Webpack',
          code: 'npm run build'
        },
        'The awesome module bundler with ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_components__["Link"],
          { href: 'https://webpack.github.io/docs/hot-module-replacement.html' },
          'Hot Module Replacement'
        ),
        ' enabled.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledFeature,
        {
          icon: 'jest',
          link: 'https://facebook.github.io/jest',
          title: 'Jest',
          code: 'npm run test'
        },
        'The great testing framework used by Facebook to test all their Javascript code.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      StyledHeading,
      null,
      'Optional features'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Description,
      null,
      'Features separated into another branches so you can use them only if you need to.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Grid,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledFeature,
        {
          icon: 'redux',
          link: 'https://github.com/diegohaz/arc/tree/redux',
          title: 'Redux',
          code: 'git clone -b redux https://github.com/diegohaz/arc my-app'
        },
        'The predictable state container for JavaScript apps.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledFeature,
        {
          icon: 'dist',
          link: 'https://github.com/diegohaz/arc/tree/redux-ssr',
          title: 'Server Side Rendering',
          code: 'git clone -b redux-ssr https://github.com/diegohaz/arc my-app'
        },
        'Write once and run on both server and client.'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureList);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);






var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['background-color:', ';padding:2rem;'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 1, true));

var Credits = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["Paragraph"])(['vertical-align:center;text-align:center;margin:0;']);

var Footer = function Footer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Credits,
      null,
      'Made with ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["Icon"], { icon: 'heart' }),
      ' by ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_components__["Link"],
        { href: 'https://github.com/gipsy' },
        'Taras'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["Block"])(['display:flex;justify-content:center;padding:1rem;@media screen and (max-width:640px){padding:0.5rem;}']);

var InnerWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['display:flex;align-items:center;width:100%;max-width:', ';>:not(:first-child){margin-left:1rem;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["size"])('maxWidth'));

var StyledPrimaryNavigation = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["PrimaryNavigation"])(['flex:1']);

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    _extends({ opaque: true, reverse: true }, props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      InnerWrapper,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["IconLink"], { to: '/', icon: 'arc', height: 100 }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledPrimaryNavigation, { reverse: true }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_containers__["UserButton"], { reverse: true, transparent: true })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["Block"])(['display:flex;justify-content:center;padding:2rem;box-sizing:border-box;@media screen and (max-width:640px){padding-left:0.25rem;padding-right:0.25rem;}']);

var InnerWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['display:flex;width:100%;max-width:', ';@media screen and (max-width:640px){flex-wrap:wrap;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["size"])('maxWidth'));

var Section = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.section(['display:flex;flex-direction:column;align-items:center;padding:2rem;box-sizing:border-box;&:first-child{flex:none;}@media screen and (max-width:640px){padding:0.25rem;width:100%;}']);

var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_components__["Paragraph"])(['color:', ';font-weight:300;font-size:1.35rem;line-height:1.35em;width:100%;letter-spacing:0.05em;@media screen and (max-width:640px){text-align:center;font-size:1rem;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_theme__["palette"])('grayscale', 3, true));

var ButtonGroup = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['margin-top:2rem;display:flex;>:not(:first-child){margin-left:0.5rem;}']);

var Instructions = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(['width:100%;margin-top:2rem;@media screen and (max-width:640px){margin-top:1rem;}']);

var Hero = function Hero(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    _extends({ opaque: true, reverse: true }, props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      InnerWrapper,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Section,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["LogoImage"], { height: 265 }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          ButtonGroup,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["Tooltip"],
            { reverse: true, 'data-title': 'Just a fancy tooltip \uD83D\uDE04' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_components__["IconButton"],
              { icon: 'github', href: 'https://github.com/diegohaz/arc' },
              'GitHub'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["Tooltip"],
            { reverse: true, 'data-title': 'Another tooltip aligned differently', align: 'end', position: 'bottom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_components__["IconButton"],
              { icon: 'docs', href: 'https://github.com/diegohaz/arc/wiki' },
              'Docs'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Section,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Text,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'ARc'
          ),
          ' is a ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconLink"],
            { reverse: true, icon: 'react', href: 'https://facebook.github.io/react/' },
            'React'
          ),
          ' starter kit based on the ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconLink"],
            { reverse: true, icon: 'atomic-design', href: 'http://bradfrost.com/blog/post/atomic-web-design/' },
            'Atomic Design'
          ),
          ' methodology. It\'s ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'progressive'
          ),
          ', which means that you can start with the basic boilerplate and try the other features when you are comfortable.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Instructions,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["Heading"],
            { level: 2, reverse: true },
            'Install'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["PreformattedText"],
            { block: true, reverse: true, wrap: true },
            'git clone -b master https://github.com/diegohaz/arc my-app'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconLink"],
            {
              icon: 'docs',
              right: true,
              reverse: true,
              href: 'https://github.com/diegohaz/arc/wiki/Setup'
            },
            'Learn more'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display:flex;flex-direction:column;> *{margin-bottom:0.5rem;}']);

var LoginModal = function (_Component) {
  _inherits(LoginModal, _Component);

  function LoginModal() {
    _classCallCheck(this, LoginModal);

    return _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).apply(this, arguments));
  }

  _createClass(LoginModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.user && nextProps.user) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onFacebookLogin = _props.onFacebookLogin,
          onGoogleLogin = _props.onGoogleLogin,
          props = _objectWithoutProperties(_props, ['onFacebookLogin', 'onGoogleLogin']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_containers__["Modal"],
        _extends({ title: 'Login', name: 'login', closeable: true }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Wrapper,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconButton"],
            { onClick: onFacebookLogin, icon: 'facebook' },
            'Connect with Facebook'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconButton"],
            { onClick: onGoogleLogin, icon: 'google' },
            'Connect with Google'
          )
        )
      );
    }
  }]);

  return LoginModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);





var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['font-family:', ';color:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])('grayscale', 0));

var Organism = function Organism(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    'content'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Organism);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);







var Form = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.form(['width:100%;box-sizing:border-box;padding:1rem;']);

var PostForm = function PostForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Form,
    { onSubmit: handleSubmit },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_components__["Heading"],
      { level: 2 },
      'Create a post'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'title', label: 'Title', component: __WEBPACK_IMPORTED_MODULE_4_components__["ReduxField"] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'body', label: 'Body', type: 'textarea', component: __WEBPACK_IMPORTED_MODULE_4_components__["ReduxField"] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_components__["Button"],
      { type: 'submit', disabled: submitting },
      'Create'
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['& > *{margin:1rem;}']);

var PostList = function PostList(_ref) {
  var list = _ref.list,
      loading = _ref.loading,
      failed = _ref.failed,
      props = _objectWithoutProperties(_ref, ['list', 'loading', 'failed']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    !list.length && loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'Loading'
    ),
    failed && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'Something went wrong while fetching posts. Please, try again later.'
    ),
    list.map(function (post) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["Post"], _extends({ key: post.id }, post));
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var ReduxField = function ReduxField(_ref) {
  var meta = _ref.meta,
      input = _ref.input,
      props = _objectWithoutProperties(_ref, ['meta', 'input']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["Field"], _extends({}, props, input, { invalid: meta.touched && !!meta.error, error: meta.error }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReduxField);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var InnerButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display:flex;align-items:center;']);

var Image = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.img(['margin-right:0.5rem;']);

var UserButton = function UserButton(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      props = _objectWithoutProperties(_ref, ['user', 'onLogin', 'onLogout']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Button"],
      _extends({}, props, { onClick: onLogout }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        InnerButton,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, { src: user.picture, width: 20, height: 20 }),
        'Sign out'
      )
    ),
    !user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Button"],
      _extends({}, props, { onClick: onLogin }),
      'Sign in'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_containers__["LoginModal"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (UserButton);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var GenericPage = function GenericPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Generic Page'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (GenericPage);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components__);
// https://github.com/diegohaz/arc/wiki/Atomic-Design




var HomePage = function HomePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_components__["PageTemplate"],
    { header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["Header"], null), hero: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["Hero"], null), footer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["Footer"], null) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["FeatureList"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);





var NotFoundPage = function NotFoundPage(_ref) {
  var staticContext = _ref.staticContext;

  if (staticContext) {
    // eslint-disable-next-line no-param-reassign
    staticContext.status = 404;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_components__["PageTemplate"],
    { header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["Header"], null), footer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["Footer"], null) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_components__["Heading"],
      null,
      '404 Not Found'
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers__);





var SamplePage = function SamplePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_components__["PageTemplate"],
    { header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["Header"], null), footer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["Footer"], null) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["PostForm"], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["PostList"], { limit: 15 })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (SamplePage);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display:flex;flex-direction:column;padding-top:3.75rem;min-height:100vh;box-sizing:border-box;']);

var Content = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.section(['width:100%;box-sizing:border-box;margin:2rem auto;max-width:920px;']);

var GenericTemplate = function GenericTemplate(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Content,
      null,
      children
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (GenericTemplate);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates





var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display:flex;flex-direction:column;padding-top:3.75rem;min-height:100vh;box-sizing:border-box;@media screen and (max-width:640px){padding-top:3.25rem;}']);

var Header = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.header(['position:fixed;top:0;width:100%;z-index:999;']);

var Hero = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.section(['']);

var Content = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.section(['width:100%;box-sizing:border-box;margin:2rem auto;max-width:', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["size"])('maxWidth'));

var Footer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.footer(['margin-top:auto;']);

var PageTemplate = function PageTemplate(_ref) {
  var header = _ref.header,
      hero = _ref.hero,
      children = _ref.children,
      footer = _ref.footer,
      props = _objectWithoutProperties(_ref, ['header', 'hero', 'children', 'footer']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Header,
      null,
      header
    ),
    hero && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Hero,
      null,
      hero
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Content,
      null,
      children
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Footer,
      null,
      footer
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PageTemplate);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_theme_composer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__);
// https://github.com/diegohaz/arc/wiki/Styling


var theme = {};

theme.palette = {
  primary: ['#f6a623', '#d68a0c', '#f5c677', '#fee2b4', '#fceed6'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#ef828e', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fefefe', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9b9b9b', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__["reversePalette"])(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

var sizes = {
  desktop: 992,
  phone: 376

  // Iterate through the sizes and create a media template
};var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return css(['@media (max-width:', 'em){', '}'], sizes[label] / 16, css.apply(undefined, arguments));
  };
  return acc;
}, {});

// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;
//
//   #<{(| Now we have our methods on media and can use them instead of raw queries |)}>#
//   ${media.desktop`background: #fff;`}
//   ${media.phone`background: #000;`}
// `;

/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);







var ConfirmModalContainer = function ConfirmModalContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["ConfirmModal"], props);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var name = _ref.name;
  return {
    onClose: function onClose() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["modalHide"])(name));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(undefined, mapDispatchToProps)(ConfirmModalContainer));

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);





var GenericContainer = function GenericContainer(_ref) {
  var loading = _ref.loading;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: loading ? 'loading' : '' });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromAsync"].isPending(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(GenericContainer));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_config__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-danger */






var GoogleTagManager = function (_Component) {
  _inherits(GoogleTagManager, _Component);

  function GoogleTagManager() {
    _classCallCheck(this, GoogleTagManager);

    return _possibleConstructorReturn(this, (GoogleTagManager.__proto__ || Object.getPrototypeOf(GoogleTagManager)).apply(this, arguments));
  }

  _createClass(GoogleTagManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.startGTM();
    }
  }, {
    key: 'render',
    value: function render() {
      var iframe = '\n      <iframe\n        src="//www.googletagmanager.com/ns.html?id=' + __WEBPACK_IMPORTED_MODULE_4_config__["gtmId"] + '"\n        height="0"\n        width="0"\n        style="display:none;visibility:hidden">\n      </iframe>\n    ';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('noscript', { dangerouslySetInnerHTML: { __html: iframe } });
    }
  }]);

  return GoogleTagManager;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startGTM: function startGTM() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["gtmStart"])(__WEBPACK_IMPORTED_MODULE_4_config__["gtmId"]));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(null, mapDispatchToProps)(GoogleTagManager));

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var LoginModalContainer = function (_Component) {
  _inherits(LoginModalContainer, _Component);

  function LoginModalContainer() {
    _classCallCheck(this, LoginModalContainer);

    return _possibleConstructorReturn(this, (LoginModalContainer.__proto__ || Object.getPrototypeOf(LoginModalContainer)).apply(this, arguments));
  }

  _createClass(LoginModalContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.prepareGoogle();
      this.props.prepareFacebook();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components__["LoginModal"], this.props);
    }
  }]);

  return LoginModalContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: __WEBPACK_IMPORTED_MODULE_4_store_selectors__["fromSocial"].getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    prepareGoogle: function prepareGoogle() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginPrepare"])('google', { clientId: __WEBPACK_IMPORTED_MODULE_3_config__["googleClientId"] }));
    },
    prepareFacebook: function prepareFacebook() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginPrepare"])('facebook', { clientId: __WEBPACK_IMPORTED_MODULE_3_config__["fbAppId"] }));
    },
    onFacebookLogin: function onFacebookLogin() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginRequest"])('facebook'));
    },
    onGoogleLogin: function onGoogleLogin() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginRequest"])('google'));
    },
    onClose: function onClose() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["modalHide"])('login'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LoginModalContainer));

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);








var ModalContainer = function ModalContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["Modal"], props);
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var name = _ref.name,
      isOpen = _ref.isOpen;
  return {
    isOpen: isOpen || __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromModal"].isOpen(state, name)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var name = _ref2.name;
  return {
    onClose: function onClose() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["modalHide"])(name));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ModalContainer));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_services_validation__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);







var PostFormContainer = function PostFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["PostForm"], props);
};

var onSubmit = function onSubmit(data, dispatch) {
  return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_store_actions__["resourceCreateRequest"])('posts', data));
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_services_validation__["a" /* createValidator */])({
  title: [__WEBPACK_IMPORTED_MODULE_3_services_validation__["b" /* required */]],
  body: [__WEBPACK_IMPORTED_MODULE_3_services_validation__["b" /* required */]]
});

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_form__["reduxForm"])({
  form: 'PostForm',
  destroyOnUnmount: false,
  onSubmit: onSubmit,
  validate: validate
})(PostFormContainer));

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_server__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var PostListContainer = function (_Component) {
  _inherits(PostListContainer, _Component);

  function PostListContainer() {
    _classCallCheck(this, PostListContainer);

    return _possibleConstructorReturn(this, (PostListContainer.__proto__ || Object.getPrototypeOf(PostListContainer)).apply(this, arguments));
  }

  _createClass(PostListContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          readList = _props.readList,
          hasServerState = _props.hasServerState,
          setServerState = _props.setServerState,
          cleanServerState = _props.cleanServerState;


      if (!hasServerState) {
        if (__WEBPACK_IMPORTED_MODULE_7_config__["isServer"]) {
          readList().then(setServerState, setServerState);
        } else {
          readList();
        }
      } else if (__WEBPACK_IMPORTED_MODULE_7_config__["isBrowser"]) {
        cleanServerState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          list = _props2.list,
          loading = _props2.loading,
          failed = _props2.failed;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_components__["PostList"], { list: list, loading: loading, failed: failed });
    }
  }]);

  return PostListContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PostListContainer.defaultProps = {
  limit: 20
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromEntities"].getList(state, 'posts', __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromResource"].getList(state, 'posts')),
    loading: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__["isPending"])(state, 'postsListRead'),
    failed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__["hasFailed"])(state, 'postsListRead')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var limit = _ref.limit;
  return {
    readList: function readList() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_store_actions__["resourceListReadRequest"])('posts', { _limit: limit }));
    }
  };
};

var withServerState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_server__["fetchState"])(function (state) {
  return {
    hasServerState: !!state.data
  };
}, function (actions) {
  return {
    setServerState: function setServerState(data) {
      return actions.done({ data: data });
    },
    cleanServerState: function cleanServerState() {
      return actions.done();
    }
  };
});

/* harmony default export */ __webpack_exports__["default"] = (withServerState(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(PostListContainer)));

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_selectors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);







var UserButtonContainer = function UserButtonContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["UserButton"], props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: __WEBPACK_IMPORTED_MODULE_2_store_selectors__["fromSocial"].getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogin: function onLogin() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["modalShow"])('login'));
    },
    onLogout: function onLogout() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["socialLogout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(UserButtonContainer));

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export checkStatus */
/* unused harmony export parseJSON */
/* unused harmony export parseSettings */
/* unused harmony export parseEndpoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/API-service





var checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = function parseJSON(response) {
  return response.json();
};

var parseSettings = function parseSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      data = _ref.data,
      locale = _ref.locale,
      otherSettings = _objectWithoutProperties(_ref, ['method', 'data', 'locale']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale
  };
  var settings = __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};


var parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : __WEBPACK_IMPORTED_MODULE_3_config__["apiUrl"] + endpoint;
  var querystring = params ? '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_query_string__["stringify"])(params) : '';
  return '' + url + querystring;
};

var api = {};

api.request = function (endpoint) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = _ref2.params,
      settings = _objectWithoutProperties(_ref2, ['params']);

  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(parseJSON);
};['delete', 'get'].forEach(function (method) {
  api[method] = function (endpoint, settings) {
    return api.request(endpoint, _extends({ method: method }, settings));
  };
});['post', 'put', 'patch'].forEach(function (method) {
  api[method] = function (endpoint, data, settings) {
    return api.request(endpoint, _extends({ method: method, data: data }, settings));
  };
});

api.create = function () {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    settings: settings,

    setToken: function setToken(token) {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: 'Bearer ' + token
      });
    },
    unsetToken: function unsetToken() {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: undefined
      });
    },
    request: function request(endpoint, settings) {
      return api.request(endpoint, __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({}, this.settings, settings));
    },
    post: function post(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'post', data: data }, settings));
    },
    get: function get(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'get' }, settings));
    },
    put: function put(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'put', data: data }, settings));
    },
    patch: function patch(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'patch', data: data }, settings));
    },
    delete: function _delete(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'delete' }, settings));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export email */
/* unused harmony export url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return required; });
/* unused harmony export minLength */
/* unused harmony export maxLength */
/* unused harmony export integer */
/* unused harmony export oneOf */
/* unused harmony export match */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL__);





var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

var email = function email(value) {
  return !isEmpty(value) && !__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(value) && 'Invalid email address';
};

var url = function url(value) {
  return !isEmpty(value) && !__WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL___default()(value) && 'Invalid URL';
};

var required = function required(value) {
  return isEmpty(value) && 'Required field';
};

var minLength = function minLength(min) {
  return function (value) {
    return !isEmpty(value) && value.length < min && 'Must be at least ' + min + ' characters';
  };
};

var maxLength = function maxLength(max) {
  return function (value) {
    return !isEmpty(value) && value.length > max && 'Must be no more than ' + max + ' characters';
  };
};

var integer = function integer(value) {
  return !__WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt___default()(value) && 'Must be an integer';
};

var oneOf = function oneOf(values) {
  return function (value) {
    return !__WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn___default()(value, values) && 'Must be one of: ' + values.join(', ');
  };
};

var match = function match(field) {
  return function (value, data) {
    return data && value !== data[field] && 'Must match';
  };
};

var createValidator = function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      var rule = join([].concat(rules[key]));
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__middlewares__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sagas__ = __webpack_require__(102);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/diegohaz/arc/wiki/Redux-modules







var devtools = __WEBPACK_IMPORTED_MODULE_2_config__["isDev"] && __WEBPACK_IMPORTED_MODULE_2_config__["isBrowser"] && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();

  var enhancers = [__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_3__middlewares___default.a).concat([sagaMiddleware])), devtools()];

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["compose"].apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_5__sagas__["a" /* default */], services);

  if (false) {
    module.hot.accept('./reducer', function () {
      var nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', function () {
      var nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(function () {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schemas__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities





var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var payload = action.payload,
          meta = action.meta;


      if (meta && meta.entities) {
        var schema = __WEBPACK_IMPORTED_MODULE_3__schemas__[meta.entities];

        if (schema) {
          var _normalize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["normalize"])(payload, Array.isArray(payload) ? [schema] : schema),
              result = _normalize.result,
              entities = _normalize.entities;

          store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["entitiesReceive"])(entities));
          return next(_extends({}, action, { payload: result }));
        }
        // istanbul ignore next
        if (__WEBPACK_IMPORTED_MODULE_1_config__["env"] === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[entities] There is no ' + meta.entities + ' schema on schemas.js');
        }
      }
      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(12);
// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["ENTITIES_RECEIVE"]) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith___default()({}, state, payload, function (objValue, srcValue) {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return undefined;
    });
  }
  return state;
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["track"] = track;
/* harmony export (immutable) */ __webpack_exports__["startGTM"] = startGTM;
/* harmony export (immutable) */ __webpack_exports__["watchAllActions"] = watchAllActions;
/* harmony export (immutable) */ __webpack_exports__["watchGTMStart"] = watchGTMStart;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_load_script__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(20);
var _marked = [track, startGTM, watchAllActions, watchGTMStart, _callee].map(regeneratorRuntime.mark);

// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm




function track(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      gtm = _ref.gtm;

  var payload;
  return regeneratorRuntime.wrap(function track$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = { event: type, label: gtm };
          _context.prev = 1;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(payload);
          _context.next = 6;
          return payload;

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](1);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["gtmFailure"](_context.t0, payload));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 8]]);
}

function startGTM(_ref2) {
  var gtmId = _ref2.gtmId;
  return regeneratorRuntime.wrap(function startGTM$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime()
          });
          _context2.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//www.googletagmanager.com/gtm.js?id=' + gtmId);

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["gtmFailure"](_context2.t0, { gtmId: gtmId }));

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 7]]);
}

function watchAllActions() {
  var _ref3, type, meta;

  return regeneratorRuntime.wrap(function watchAllActions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {
            _context3.next = 10;
            break;
          }

          _context3.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])('*');

        case 3:
          _ref3 = _context3.sent;
          type = _ref3.type;
          meta = _ref3.meta;
          _context3.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(track, type, meta);

        case 8:
          _context3.next = 0;
          break;

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function watchGTMStart() {
  var _ref4, payload;

  return regeneratorRuntime.wrap(function watchGTMStart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__actions__["GTM_START"]);

        case 2:
          _ref4 = _context4.sent;
          payload = _ref4.payload;
          _context4.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(startGTM, payload), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(watchAllActions)]);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchGTMStart);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(17),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(125);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["MODAL_SHOW"]:
      return _extends({}, state, _defineProperty({}, payload.name, true));
    case __WEBPACK_IMPORTED_MODULE_1__actions__["MODAL_HIDE"]:
      if (payload.name) {
        return _extends({}, state, _defineProperty({}, payload.name, false));
      }
      return __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
    default:
      return state;
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lean_redux__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lean_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lean_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__);
// https://github.com/diegohaz/arc/wiki/Reducers






__WEBPACK_IMPORTED_MODULE_2_lean_redux__["leanReducer"].setGlobalScope('lean');

var reducers = {
  form: __WEBPACK_IMPORTED_MODULE_3_redux_form__["reducer"],
  thunk: __WEBPACK_IMPORTED_MODULE_4_redux_saga_thunk__["reducer"]
};

var req = __webpack_require__(126);

req.keys().forEach(function (key) {
  var storeName = __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default()(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(reducers));

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_findIndex__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource





var updateOrDeleteReducer = function updateOrDeleteReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var resource = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'resource');
  var needle = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'request.needle');
  var needleIsObject = (typeof needle === 'undefined' ? 'undefined' : _typeof(needle)) === 'object';
  var list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getList"])(state, resource);
  var index = needleIsObject ? __WEBPACK_IMPORTED_MODULE_0_lodash_findIndex___default()(list, needle) : list.indexOf(needle);

  if (index < 0) {
    return state;
  }

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_UPDATE_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), [needleIsObject ? _extends({}, list[index], payload) : payload], _toConsumableArray(list.slice(index + 1)))
      })));
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DELETE_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1)))
      })));
    // istanbul ignore next
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"];
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload,
      meta = _ref2.meta;

  var resource = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'resource');

  if (!resource) {
    return state;
  }

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_CREATE_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: [payload].concat(_toConsumableArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getList"])(state, resource)))
      })));

    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_LIST_READ_REQUEST"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getList"])(__WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"], resource)
      })));
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_LIST_READ_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: payload
      })));

    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DETAIL_READ_REQUEST"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        detail: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getDetail"])(__WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"], resource)
      })));
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DETAIL_READ_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        detail: payload
      })));

    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_UPDATE_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DELETE_SUCCESS"]:
      return updateOrDeleteReducer(state, { type: type, payload: payload, meta: meta });

    default:
      return state;
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createResource"] = createResource;
/* harmony export (immutable) */ __webpack_exports__["readResourceList"] = readResourceList;
/* harmony export (immutable) */ __webpack_exports__["readResourceDetail"] = readResourceDetail;
/* harmony export (immutable) */ __webpack_exports__["updateResource"] = updateResource;
/* harmony export (immutable) */ __webpack_exports__["deleteResource"] = deleteResource;
/* harmony export (immutable) */ __webpack_exports__["watchResourceCreateRequest"] = watchResourceCreateRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceListReadRequest"] = watchResourceListReadRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceDetailReadRequest"] = watchResourceDetailReadRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceUpdateRequest"] = watchResourceUpdateRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceDeleteRequest"] = watchResourceDeleteRequest;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(13);
var _marked = [createResource, readResourceList, readResourceDetail, updateResource, deleteResource, watchResourceCreateRequest, watchResourceListReadRequest, watchResourceDetailReadRequest, watchResourceUpdateRequest, watchResourceDeleteRequest, _callee].map(regeneratorRuntime.mark);

// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource



function createResource(api, _ref, _ref2) {
  var data = _ref.data;
  var resource = _ref2.resource,
      thunk = _ref2.thunk;
  var detail;
  return regeneratorRuntime.wrap(function createResource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.post], '/' + resource, data);

        case 3:
          detail = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceCreateSuccess"](resource, detail, { data: data }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceCreateFailure"](resource, _context.t0, { data: data }, thunk));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 8]]);
}

function readResourceList(api, _ref3, _ref4) {
  var params = _ref3.params;
  var resource = _ref4.resource,
      thunk = _ref4.thunk;
  var list;
  return regeneratorRuntime.wrap(function readResourceList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.get], '/' + resource, { params: params });

        case 3:
          list = _context2.sent;
          _context2.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceListReadSuccess"](resource, list, { params: params }, thunk));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceListReadFailure"](resource, _context2.t0, { params: params }, thunk));

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 8]]);
}

function readResourceDetail(api, _ref5, _ref6) {
  var needle = _ref5.needle;
  var resource = _ref6.resource,
      thunk = _ref6.thunk;
  var detail;
  return regeneratorRuntime.wrap(function readResourceDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.get], '/' + resource + '/' + needle);

        case 3:
          detail = _context3.sent;
          _context3.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDetailReadSuccess"](resource, detail, { needle: needle }, thunk));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDetailReadFailure"](resource, _context3.t0, { needle: needle }, thunk));

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 8]]);
}

function updateResource(api, _ref7, _ref8) {
  var needle = _ref7.needle,
      data = _ref7.data;
  var resource = _ref8.resource,
      thunk = _ref8.thunk;
  var detail;
  return regeneratorRuntime.wrap(function updateResource$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.put], '/' + resource + '/' + needle, data);

        case 3:
          detail = _context4.sent;
          _context4.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceUpdateSuccess"](resource, detail, { needle: needle, data: data }, thunk));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceUpdateFailure"](resource, _context4.t0, { needle: needle, data: data }, thunk));

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[0, 8]]);
}

function deleteResource(api, _ref9, _ref10) {
  var needle = _ref9.needle;
  var resource = _ref10.resource,
      thunk = _ref10.thunk;
  return regeneratorRuntime.wrap(function deleteResource$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.delete], '/' + resource + '/' + needle);

        case 3:
          _context5.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDeleteSuccess"](resource, { needle: needle }, thunk));

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDeleteFailure"](resource, _context5.t0, { needle: needle }, thunk));

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[0, 7]]);
}

function watchResourceCreateRequest(api) {
  var _ref11, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceCreateRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (false) {
            _context6.next = 10;
            break;
          }

          _context6.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_CREATE_REQUEST"]);

        case 3:
          _ref11 = _context6.sent;
          payload = _ref11.payload;
          meta = _ref11.meta;
          _context6.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(createResource, api, payload, meta);

        case 8:
          _context6.next = 0;
          break;

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function watchResourceListReadRequest(api) {
  var _ref12, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceListReadRequest$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (false) {
            _context7.next = 10;
            break;
          }

          _context7.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_LIST_READ_REQUEST"]);

        case 3:
          _ref12 = _context7.sent;
          payload = _ref12.payload;
          meta = _ref12.meta;
          _context7.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(readResourceList, api, payload, meta);

        case 8:
          _context7.next = 0;
          break;

        case 10:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function watchResourceDetailReadRequest(api) {
  var _ref13, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceDetailReadRequest$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (false) {
            _context8.next = 10;
            break;
          }

          _context8.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_DETAIL_READ_REQUEST"]);

        case 3:
          _ref13 = _context8.sent;
          payload = _ref13.payload;
          meta = _ref13.meta;
          _context8.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(readResourceDetail, api, payload, meta);

        case 8:
          _context8.next = 0;
          break;

        case 10:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function watchResourceUpdateRequest(api) {
  var _ref14, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceUpdateRequest$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (false) {
            _context9.next = 10;
            break;
          }

          _context9.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_UPDATE_REQUEST"]);

        case 3:
          _ref14 = _context9.sent;
          payload = _ref14.payload;
          meta = _ref14.meta;
          _context9.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(updateResource, api, payload, meta);

        case 8:
          _context9.next = 0;
          break;

        case 10:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[8], this);
}

function watchResourceDeleteRequest(api) {
  var _ref15, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceDeleteRequest$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          if (false) {
            _context10.next = 10;
            break;
          }

          _context10.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_DELETE_REQUEST"]);

        case 3:
          _ref15 = _context10.sent;
          payload = _ref15.payload;
          meta = _ref15.meta;
          _context10.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(deleteResource, api, payload, meta);

        case 8:
          _context10.next = 0;
          break;

        case 10:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked[9], this);
}

function _callee(_ref16) {
  var api = _ref16.api;
  return regeneratorRuntime.wrap(function _callee$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceCreateRequest, api);

        case 2:
          _context11.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceListReadRequest, api);

        case 4:
          _context11.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceDetailReadRequest, api);

        case 6:
          _context11.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceUpdateRequest, api);

        case 8:
          _context11.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceDeleteRequest, api);

        case 10:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked[10], this);
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
var _marked = [_callee].map(regeneratorRuntime.mark);

// https://github.com/diegohaz/arc/wiki/Sagas


var req = __webpack_require__(127);

var sagas = req.keys().map(function (key) {
  return req(key).default;
});

function _callee() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])(sagas.map(function (saga) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SOCIAL_LOGIN_SUCCESS"]:
      return _extends({}, state, {
        user: payload
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SOCIAL_LOGOUT"]:
      return _extends({}, state, {
        user: __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"].user
      });
    default:
      return state;
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promises", function() { return promises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFbRoot", function() { return appendFbRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceAction", function() { return serviceAction; });
/* harmony export (immutable) */ __webpack_exports__["loginFacebook"] = loginFacebook;
/* harmony export (immutable) */ __webpack_exports__["prepareFacebook"] = prepareFacebook;
/* harmony export (immutable) */ __webpack_exports__["watchSocialLoginFacebook"] = watchSocialLoginFacebook;
/* harmony export (immutable) */ __webpack_exports__["loginGoogle"] = loginGoogle;
/* harmony export (immutable) */ __webpack_exports__["prepareGoogle"] = prepareGoogle;
/* harmony export (immutable) */ __webpack_exports__["watchSocialLoginGoogle"] = watchSocialLoginGoogle;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_load_script__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _marked = [loginFacebook, prepareFacebook, watchSocialLoginFacebook, loginGoogle, prepareGoogle, watchSocialLoginGoogle, _callee].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social




var promises = {
  fbLogin: function fbLogin(options) {
    return new Promise(function (resolve, reject) {
      window.FB.login(function (response) {
        // istanbul ignore else
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject(response.status);
        }
      }, options);
    });
  },
  fbGetMe: function fbGetMe(options) {
    return new Promise(function (resolve) {
      window.FB.api('/me', options, function (me) {
        return resolve(me);
      });
    });
  },
  loadGoogleAuth2: function loadGoogleAuth2() {
    return new Promise(function (resolve) {
      window.gapi.load('auth2', resolve);
    });
  }
};

var appendFbRoot = function appendFbRoot() {
  var fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);
};

var serviceAction = function serviceAction(suffix, service) {
  return function (_ref) {
    var type = _ref.type,
        payload = _ref.payload;
    return type === 'SOCIAL_LOGIN_' + suffix && payload && payload.service === service;
  };
};

function loginFacebook() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? 'public_profile' : _ref2$scope,
      _ref2$fields = _ref2.fields,
      fields = _ref2$fields === undefined ? 'id,name' : _ref2$fields,
      options = _objectWithoutProperties(_ref2, ['scope', 'fields']);

  var request, data, picture;
  return regeneratorRuntime.wrap(function loginFacebook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          request = _extends({ service: 'facebook', scope: scope, fields: fields }, options);
          _context.prev = 1;
          _context.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.fbLogin, _extends({ scope: scope }, options));

        case 4:
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.fbGetMe, { fields: fields });

        case 6:
          data = _context.sent;
          picture = 'https://graph.facebook.com/' + data.id + '/picture?type=normal';
          _context.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginSuccess"](_extends({}, data, { picture: picture }), request));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context.t0, request));

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 12]]);
}

function prepareFacebook(_ref3) {
  var clientId = _ref3.clientId,
      _ref3$version = _ref3.version,
      version = _ref3$version === undefined ? 'v2.8' : _ref3$version,
      options = _objectWithoutProperties(_ref3, ['clientId', 'version']);

  var request;
  return regeneratorRuntime.wrap(function prepareFacebook$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          request = _extends({ service: 'facebook', clientId: clientId, version: version }, options);
          _context2.prev = 1;
          _context2.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(appendFbRoot);

        case 4:
          _context2.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//connect.facebook.net/en_US/sdk.js');

        case 6:
          _context2.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([window.FB, window.FB.init], _extends({ appId: clientId, version: version }, options));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context2.t0, request));

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[1, 10]]);
}

function watchSocialLoginFacebook() {
  var _ref4, payload, _ref5, _payload;

  return regeneratorRuntime.wrap(function watchSocialLoginFacebook$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('PREPARE', 'facebook'));

        case 2:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          _context3.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(prepareFacebook, payload);

        case 6:
          if (false) {
            _context3.next = 15;
            break;
          }

          _context3.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('REQUEST', 'facebook'));

        case 9:
          _ref5 = _context3.sent;
          _payload = _ref5.payload;
          _context3.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(loginFacebook, _payload);

        case 13:
          _context3.next = 6;
          break;

        case 15:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function loginGoogle() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6$scope = _ref6.scope,
      scope = _ref6$scope === undefined ? 'profile' : _ref6$scope,
      options = _objectWithoutProperties(_ref6, ['scope']);

  var request, auth2, user, profile, name, picture;
  return regeneratorRuntime.wrap(function loginGoogle$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          request = _extends({ service: 'google', scope: scope }, options);
          _context4.prev = 1;
          _context4.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(window.gapi.auth2.getAuthInstance);

        case 4:
          auth2 = _context4.sent;
          _context4.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([auth2, auth2.signIn], _extends({ scope: scope }, options));

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([user, user.getBasicProfile]);

        case 10:
          profile = _context4.sent;
          _context4.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([profile, profile.getName]);

        case 13:
          name = _context4.sent;
          _context4.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([profile, profile.getImageUrl]);

        case 16:
          picture = _context4.sent;
          _context4.next = 19;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginSuccess"]({ name: name, picture: picture }, request));

        case 19:
          _context4.next = 25;
          break;

        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4['catch'](1);
          _context4.next = 25;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context4.t0, request));

        case 25:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[1, 21]]);
}

function prepareGoogle(_ref7) {
  var clientId = _ref7.clientId,
      options = _objectWithoutProperties(_ref7, ['clientId']);

  var request;
  return regeneratorRuntime.wrap(function prepareGoogle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          request = _extends({ service: 'google', clientId: clientId }, options);
          _context5.prev = 1;
          _context5.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//apis.google.com/js/platform.js');

        case 4:
          _context5.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.loadGoogleAuth2);

        case 6:
          _context5.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(window.gapi.auth2.init, _extends({ client_id: clientId }, options));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](1);
          _context5.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context5.t0, request));

        case 14:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[1, 10]]);
}

function watchSocialLoginGoogle() {
  var _ref8, payload, _ref9, _payload2;

  return regeneratorRuntime.wrap(function watchSocialLoginGoogle$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('PREPARE', 'google'));

        case 2:
          _ref8 = _context6.sent;
          payload = _ref8.payload;
          _context6.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(prepareGoogle, payload);

        case 6:
          if (false) {
            _context6.next = 15;
            break;
          }

          _context6.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('REQUEST', 'google'));

        case 9:
          _ref9 = _context6.sent;
          _payload2 = _ref9.payload;
          _context6.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(loginGoogle, _payload2);

        case 13:
          _context6.next = 6;
          break;

        case 15:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchSocialLoginFacebook);

        case 2:
          _context7.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchSocialLoginGoogle);

        case 4:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 184 164\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <g transform=\"matrix(1,0,0,1,-4.49912,-15.1442)\">\n        <g id=\"Symbol\" transform=\"matrix(0.446036,2.31112e-32,2.31112e-32,0.446036,-1.17751,-11.7517)\">\n            <g transform=\"matrix(0.730839,0,0,0.730839,-428.272,-103.233)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\" />\n            </g>\n            <g transform=\"matrix(-0.365419,-0.632925,0.632925,-0.365419,244.419,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.365419,-0.632925,-0.632925,-0.365419,191.319,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.849949,0,0,0.849949,-532.408,-149.626)\">\n                <circle cx=\"882.732\" cy=\"463.109\" r=\"40.177\"/>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"128.1 125.4 49.2 49.2\" enable-background=\"new 128.1 125.4 49.2 49.2\" xml:space=\"preserve\">\n  <g id=\"atom\">\n  \t<g>\n  \t\t<g>\n  \t\t\t<circle fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"152.7\" cy=\"150\" r=\"21.6\"></circle>\n  \t\t\t<circle stroke=\"none\" fill=\"#BE6700\" cx=\"152.7\" cy=\"150\" r=\"12.4\"></circle>\n  \t\t</g>\n  \t\t<path stroke=\"none\" fill=\"#BE6700\" d=\"M175.1,136.6c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.3-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3\n  \t\t\tC172.7,131.3,175.1,133.7,175.1,136.6z\"></path>\n  \t</g>\n  </g>\n</svg>\n"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32\" xml:space=\"preserve\" fill=\"none\">\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\" fill=\"none\"/>\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"24\" y1=\"8\" x2=\"8\" y2=\"24\" fill=\"none\"/>\n</svg>\n"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g stroke=\"none\">\n\t<path d=\"M18,8v12H9V8H18 M18,6H9C7.9,6,7,6.9,7,8v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6L18,6z\" stroke=\"none\"/>\n</g>\n<path d=\"M5,17V4h10V2H5C3.9,2,3,2.9,3,4v13H5z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<polygon stroke=\"none\" fill=\"#CFD8DC\" points=\"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26\n\t\"/>\r\n<rect x=\"17\" y=\"6\" stroke=\"none\" fill=\"#3F51B5\" width=\"14\" height=\"10\"/>\n<rect x=\"32\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"6\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"19\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n</svg>\r\n"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Слой_1\" x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\">\n<path d=\"M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3  c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3  c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4  c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2  c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3  c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2  C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032  c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2  C7.021,2,2.543,6.477,2.543,12c0,5.523,4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<path fill=\"#FF3D00\" stroke=\"none\" d=\"M32.635,8C29.027,8,25.855,9.828,24,12.597C22.145,9.828,18.973,8,15.365,8C9.641,8,5,12.598,5,18.269\n\tC5,28.487,21.15,33.411,24,40c2.85-6.589,19-11.428,19-21.731C43,12.598,38.359,8,32.635,8\"/>\n</svg>\n"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"283px\" viewBox=\"0 0 256 283\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z\" stroke=\"none\" fill=\"#C63D14\"></path>\n\t\t<path d=\"M246.399036,139.203 C246.399036,123.218 234.882036,109.88 219.711036,107.031 L256.000036,0 L84.4660355,0 L120.810036,107.248 C106.167036,110.507 95.1830355,123.593 95.1830355,139.203 C95.1830355,150.926 101.378036,161.223 110.663036,167.009 C106.197036,173.662 100.901036,179.923 94.8320355,185.648 C85.2080355,194.728 74.4850355,201.614 62.9250355,206.144 C51.2820355,198.83 46.3600355,185.038 51.4720355,173.022 L51.8720355,172.082 C52.1220355,171.494 52.3730355,170.904 52.6230355,170.314 C65.4110355,165.855 74.6160355,153.682 74.6160355,139.392 C74.6160355,121.337 59.9270355,106.649 41.8720355,106.649 C23.8170355,106.649 9.12903553,121.337 9.12903553,139.392 C9.12903553,148.505 12.8740355,156.757 18.9020355,162.699 C17.8090355,165.029 16.6600355,167.397 15.4790355,169.823 C9.96703553,181.144 3.72003553,193.976 1.35703553,208.225 C-3.33596447,236.524 4.23303553,259.146 22.6700355,271.924 C33.8580355,279.678 45.2190355,282.728 56.6520355,282.727 C78.1810355,282.726 99.9580355,271.911 121.258036,261.331 C136.599036,253.712 152.461036,245.833 168.130036,241.969 C173.960036,240.531 179.959036,239.666 186.310036,238.75 C198.904036,236.933 211.928036,235.055 223.464036,228.374 C236.835036,220.629 245.989036,207.637 248.577036,192.73 C250.799036,179.933 248.124036,167.117 241.602036,156.247 C244.643036,151.279 246.399036,145.443 246.399036,139.203 L246.399036,139.203 Z M233.545036,139.203 C233.545036,150.17 224.623036,159.093 213.655036,159.093 C202.689036,159.093 193.766036,150.17 193.766036,139.203 C193.766036,128.236 202.689036,119.314 213.655036,119.314 C224.623036,119.314 233.545036,128.236 233.545036,139.203 L233.545036,139.203 Z M238.069036,12.854 L206.024036,107.367 C204.635036,107.7 203.281036,108.12 201.966036,108.625 L170.310036,44.047 L138.562036,108.243 C137.190036,107.77 135.778036,107.381 134.330036,107.093 L102.395036,12.854 L238.069036,12.854 L238.069036,12.854 Z M127.926036,119.314 C138.893036,119.314 147.815036,128.236 147.815036,139.203 C147.815036,150.17 138.893036,159.093 127.926036,159.093 C116.960036,159.093 108.037036,150.17 108.037036,139.203 C108.037036,128.236 116.960036,119.314 127.926036,119.314 L127.926036,119.314 Z M41.8720355,119.503 C52.8400355,119.503 61.7620355,128.425 61.7620355,139.392 C61.7620355,150.359 52.8400355,159.282 41.8720355,159.282 C30.9060355,159.282 21.9830355,150.359 21.9830355,139.392 C21.9830355,128.425 30.9060355,119.503 41.8720355,119.503 L41.8720355,119.503 Z M235.912036,190.531 C233.977036,201.679 227.091036,211.418 217.021036,217.25 C207.634036,222.687 196.385036,224.31 184.475036,226.027 C178.095036,226.947 171.497036,227.899 165.052036,229.489 C148.010036,233.691 131.503036,241.89 115.540036,249.819 C83.5950355,265.686 56.0060355,279.388 29.9930355,261.359 C10.9380355,248.153 11.8180355,223.718 14.0380355,210.328 C16.0950355,197.923 21.6570355,186.498 27.0360355,175.449 C27.9670355,173.537 28.8710355,171.664 29.7580355,169.803 C32.4260355,170.87 35.2630355,171.597 38.2200355,171.927 C32.7450355,189.998 41.3560355,209.646 59.4290355,218.931 L61.9020355,220.202 L64.5220355,219.269 C78.8100355,214.181 91.9750355,206.015 103.653036,194.998 C111.202036,187.877 117.689036,179.998 123.023036,171.579 C124.623036,171.82 126.260036,171.947 127.926036,171.947 C145.981036,171.947 160.670036,157.259 160.670036,139.203 C160.670036,129.493 156.417036,120.761 149.681036,114.759 L170.259036,73.147 L191.046036,115.552 C184.809036,121.518 180.912036,129.911 180.912036,139.203 C180.912036,157.259 195.600036,171.947 213.655036,171.947 C220.592036,171.947 227.027036,169.773 232.327036,166.079 C236.007036,173.612 237.378036,182.088 235.912036,190.531 L235.912036,190.531 Z\" stroke=\"none\" fill=\"#FFFFFF\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"140px\" viewBox=\"0 0 256 140\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z\" stroke=\"none\" fill=\"#CF0920\"></path>\n\t\t<path d=\"M78.0720006,92.782 C65.2940006,92.784 54.8620006,82.355 54.8600006,69.579 C54.8580006,56.802 65.2870006,46.369 78.0630006,46.367 C90.8400006,46.365 101.272001,56.794 101.274001,69.57 C101.276001,82.347 90.8470006,92.78 78.0720006,92.782 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M23.1300737,139.2 C10.3630737,139.168 -0.0319263159,128.703 7.36840638e-05,115.915 C0.0320736841,103.148 10.4960737,92.753 23.2840737,92.786 C36.0510737,92.817 46.4460737,103.282 46.4140737,116.07 C46.3820737,128.837 35.9180737,139.232 23.1300737,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M232.962386,139.2 C220.162386,139.273 209.653386,128.92 209.580386,116.167 C209.507386,103.368 219.860386,92.858 232.613386,92.786 C245.412386,92.712 255.921386,103.064 255.995386,115.818 C256.068386,128.617 245.715386,139.127 232.962386,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns=\"http://www.w3.org/2000/svg\" height=\"780.18\" viewBox=\"0 0 875.02936 780.17639\" width=\"875.03\" version=\"1.1\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n <g stroke=\"none\" fill=\"#61dafb\">\n  <path d=\"m512.45 391.21a76.266 77.855 0 0 1 -76.266 77.855 76.266 77.855 0 0 1 -76.266 -77.855 76.266 77.855 0 0 1 76.266 -77.855 76.266 77.855 0 0 1 76.266 77.855z\"/>\n  <g fill-rule=\"evenodd\">\n   <path d=\"m277.8 477.26a437.52 180.08 59.793 0 1 -61.2 -466.18 437.52 180.08 59.793 0 1 376.3 291.6 437.52 180.08 59.793 0 1 61.2 466.18 437.52 180.08 59.793 0 1 -376.3 -291.6zm34.163-17.99a399.46 141.49 59.831 0 1 -75.73 -414.16 399.46 141.49 59.831 0 1 323.72 277.69 399.46 141.49 59.831 0 1 75.73 414.16 399.46 141.49 59.831 0 1 -323.72 -277.69z\"/>\n   <path d=\"m282.04 297.29a180.08 437.52 29.793 0 1 373.12 -286.09 180.08 437.52 29.793 0 1 -64.38 471.69 180.08 437.52 29.793 0 1 -373.12 286.09 180.08 437.52 29.793 0 1 64.38 -471.69zm32.661 20.591a141.49 399.46 29.831 0 1 320.81 -272.66 141.49 399.46 29.831 0 1 -78.63 419.19 141.49 399.46 29.831 0 1 -320.81 272.66 141.49 399.46 29.831 0 1 78.63 -419.19z\"/>\n   <path d=\"m440.7 210.54a180.08 437.52 89.793 0 1 434.32 180.09 180.08 437.52 89.793 0 1 -440.69 180.08 180.08 437.52 89.793 0 1 -434.32 -180.08 180.08 437.52 89.793 0 1 440.69 -180.09zm-1.5016 38.581a141.49 399.46 89.831 0 1 396.53 141.5 141.49 399.46 89.831 0 1 -402.35 141.5 141.49 399.46 89.831 0 1 -396.53 -141.5 141.49 399.46 89.831 0 1 402.35 -141.5z\"/>\n  </g>\n </g>\n</svg>\n"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n  <g stroke=\"none\" fill=\"#764ABC\">\n    <path d=\"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z\"/>\n    <path d=\"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z\"/>\n    <path d=\"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z\"/>\n  </g>\n</svg>\n"

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\">\n<title>icon-square-big</title>\n<path stroke=\"none\" fill=\"#FFF\" d=\"M600 0l530.3 300v600L600 1200 69.7 900V300z\"/>\n<path stroke=\"none\" fill=\"#8ED6FB\" class=\"st1\" d=\"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z\"/>\n<path stroke=\"none\" fill=\"#1C78C0\" d=\"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z\"/>\n</svg>\n"

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "405aaeeb621471c41441dbbf8bfebafb.svg";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/Atom/index.js": 35,
	"./atoms/Badge/index.js": 36,
	"./atoms/Block/index.js": 37,
	"./atoms/Button/index.js": 38,
	"./atoms/Caption/index.js": 39,
	"./atoms/Heading/index.js": 40,
	"./atoms/HorizontalRule/index.js": 41,
	"./atoms/Icon/index.js": 42,
	"./atoms/Input/index.js": 43,
	"./atoms/Label/index.js": 44,
	"./atoms/Link/index.js": 45,
	"./atoms/List/index.js": 46,
	"./atoms/LogoImage/index.js": 47,
	"./atoms/Paragraph/index.js": 48,
	"./atoms/PreformattedText/index.js": 49,
	"./atoms/Spinner/index.js": 50,
	"./atoms/TableCell/index.js": 51,
	"./atoms/TableRow/index.js": 52,
	"./atoms/Tooltip/index.js": 53,
	"./molecules/Blockquote/index.js": 54,
	"./molecules/Feature/index.js": 55,
	"./molecules/Field/index.js": 56,
	"./molecules/IconButton/index.js": 57,
	"./molecules/IconLink/index.js": 58,
	"./molecules/Modal/index.js": 59,
	"./molecules/Molecule/index.js": 60,
	"./molecules/Post/index.js": 61,
	"./molecules/PrimaryNavigation/index.js": 62,
	"./molecules/Slider/index.js": 63,
	"./molecules/Table/index.js": 64,
	"./organisms/ConfirmModal/index.js": 65,
	"./organisms/FeatureList/index.js": 66,
	"./organisms/Footer/index.js": 67,
	"./organisms/Header/index.js": 68,
	"./organisms/Hero/index.js": 69,
	"./organisms/LoginModal/index.js": 70,
	"./organisms/Organism/index.js": 71,
	"./organisms/PostForm/index.js": 72,
	"./organisms/PostList/index.js": 73,
	"./organisms/ReduxField/index.js": 74,
	"./organisms/UserButton/index.js": 75,
	"./pages/GenericPage/index.js": 76,
	"./pages/HomePage/index.js": 77,
	"./pages/NotFoundPage/index.js": 78,
	"./pages/SamplePage/index.js": 79,
	"./templates/GenericTemplate/index.js": 80,
	"./templates/PageTemplate/index.js": 81
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 121;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arc.svg": 105,
	"./atomic-design.svg": 106,
	"./close.svg": 107,
	"./copy.svg": 108,
	"./dist.svg": 109,
	"./docs.svg": 110,
	"./facebook.svg": 111,
	"./github.svg": 112,
	"./google.svg": 113,
	"./heart.svg": 114,
	"./jest.svg": 115,
	"./react-router.svg": 116,
	"./react.svg": 117,
	"./redux.svg": 118,
	"./webpack.svg": 119
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 122;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ConfirmModal.js": 83,
	"./Generic.js": 84,
	"./GoogleTagManager.js": 85,
	"./LoginModal.js": 86,
	"./Modal.js": 87,
	"./PostForm.js": 88,
	"./PostList.js": 89,
	"./UserButton.js": 90
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 123;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/actions.js": 12,
	"./gtm/actions.js": 20,
	"./modal/actions.js": 21,
	"./resource/actions.js": 13,
	"./social/actions.js": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 124;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/middleware.js": 94
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 125;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/reducer.js": 95,
	"./modal/reducer.js": 98,
	"./resource/reducer.js": 100,
	"./social/reducer.js": 103
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 126;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./gtm/sagas.js": 96,
	"./resource/sagas.js": 101,
	"./social/sagas.js": 104
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 127;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/selectors.js": 19,
	"./modal/selectors.js": 22,
	"./resource/selectors.js": 23,
	"./social/selectors.js": 24
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 128;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("lean-redux");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("lodash/mergeWith");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Link");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/NavLink");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isIn");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isInt");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ })
/******/ ]);