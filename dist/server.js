require("source-map-support").install();
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
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components/no-parser");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(10);

var config = {
  all: {
    env: "development" || 'development',
    isDev: "development" !== 'production',
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/config.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var RESOURCE_CREATE_REQUEST = exports.RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST';
var RESOURCE_CREATE_SUCCESS = exports.RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS';
var RESOURCE_CREATE_FAILURE = exports.RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE';

var resourceCreateRequest = exports.resourceCreateRequest = function resourceCreateRequest(resource, data) {
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

var resourceCreateSuccess = exports.resourceCreateSuccess = function resourceCreateSuccess(resource, detail, request, thunk) {
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

var resourceCreateFailure = exports.resourceCreateFailure = function resourceCreateFailure(resource, error, request, thunk) {
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

var RESOURCE_LIST_READ_REQUEST = exports.RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST';
var RESOURCE_LIST_READ_SUCCESS = exports.RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS';
var RESOURCE_LIST_READ_FAILURE = exports.RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE';

var resourceListReadRequest = exports.resourceListReadRequest = function resourceListReadRequest(resource, params) {
  return {
    type: RESOURCE_LIST_READ_REQUEST,
    payload: { params: params },
    meta: {
      resource: resource,
      thunk: resource + 'ListRead'
    }
  };
};

var resourceListReadSuccess = exports.resourceListReadSuccess = function resourceListReadSuccess(resource, list, request, thunk) {
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

var resourceListReadFailure = exports.resourceListReadFailure = function resourceListReadFailure(resource, error, request, thunk) {
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

var RESOURCE_DETAIL_READ_REQUEST = exports.RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST';
var RESOURCE_DETAIL_READ_SUCCESS = exports.RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS';
var RESOURCE_DETAIL_READ_FAILURE = exports.RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE';

var resourceDetailReadRequest = exports.resourceDetailReadRequest = function resourceDetailReadRequest(resource, needle) {
  return {
    type: RESOURCE_DETAIL_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'DetailRead'
    }
  };
};

var resourceDetailReadSuccess = exports.resourceDetailReadSuccess = function resourceDetailReadSuccess(resource, detail, request, thunk) {
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

var resourceDetailReadFailure = exports.resourceDetailReadFailure = function resourceDetailReadFailure(resource, error, request, thunk) {
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

var RESOURCE_UPDATE_REQUEST = exports.RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST';
var RESOURCE_UPDATE_SUCCESS = exports.RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS';
var RESOURCE_UPDATE_FAILURE = exports.RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE';

var resourceUpdateRequest = exports.resourceUpdateRequest = function resourceUpdateRequest(resource, needle, data) {
  return {
    type: RESOURCE_UPDATE_REQUEST,
    payload: { needle: needle, data: data },
    meta: {
      resource: resource,
      thunk: resource + 'Update'
    }
  };
};

var resourceUpdateSuccess = exports.resourceUpdateSuccess = function resourceUpdateSuccess(resource, detail, request, thunk) {
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

var resourceUpdateFailure = exports.resourceUpdateFailure = function resourceUpdateFailure(resource, error, request, thunk) {
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

var RESOURCE_DELETE_REQUEST = exports.RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST';
var RESOURCE_DELETE_SUCCESS = exports.RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS';
var RESOURCE_DELETE_FAILURE = exports.RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE';

var resourceDeleteRequest = exports.resourceDeleteRequest = function resourceDeleteRequest(resource, needle) {
  return {
    type: RESOURCE_DELETE_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'Delete'
    }
  };
};

var resourceDeleteSuccess = exports.resourceDeleteSuccess = function resourceDeleteSuccess(resource, request, thunk) {
  return {
    type: RESOURCE_DELETE_SUCCESS,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var resourceDeleteFailure = exports.resourceDeleteFailure = function resourceDeleteFailure(resource, error, request, thunk) {
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_REQUEST, 'RESOURCE_CREATE_REQUEST', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_SUCCESS, 'RESOURCE_CREATE_SUCCESS', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_FAILURE, 'RESOURCE_CREATE_FAILURE', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateRequest, 'resourceCreateRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateSuccess, 'resourceCreateSuccess', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateFailure, 'resourceCreateFailure', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_REQUEST, 'RESOURCE_LIST_READ_REQUEST', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_SUCCESS, 'RESOURCE_LIST_READ_SUCCESS', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_FAILURE, 'RESOURCE_LIST_READ_FAILURE', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadRequest, 'resourceListReadRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadSuccess, 'resourceListReadSuccess', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadFailure, 'resourceListReadFailure', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_REQUEST, 'RESOURCE_DETAIL_READ_REQUEST', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_SUCCESS, 'RESOURCE_DETAIL_READ_SUCCESS', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_FAILURE, 'RESOURCE_DETAIL_READ_FAILURE', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadRequest, 'resourceDetailReadRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadSuccess, 'resourceDetailReadSuccess', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadFailure, 'resourceDetailReadFailure', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_REQUEST, 'RESOURCE_UPDATE_REQUEST', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_SUCCESS, 'RESOURCE_UPDATE_SUCCESS', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_FAILURE, 'RESOURCE_UPDATE_FAILURE', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateRequest, 'resourceUpdateRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateSuccess, 'resourceUpdateSuccess', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateFailure, 'resourceUpdateFailure', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_REQUEST, 'RESOURCE_DELETE_REQUEST', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_SUCCESS, 'RESOURCE_DELETE_SUCCESS', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_FAILURE, 'RESOURCE_DELETE_FAILURE', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteRequest, 'resourceDeleteRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteSuccess, 'resourceDeleteSuccess', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteFailure, 'resourceDeleteFailure', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/actions.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

var _styledTools = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/Example-components#icon


var fontSize = function fontSize(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var size = width || height;
  return size ? size / 16 + 'rem' : '1.25em';
};

var Wrapper = _noParser2.default.span.withConfig({
  displayName: 'Icon__Wrapper',
  componentId: 'ifod8b-0'
})([['{display:inline-block;font-size:', fontSize, ';color:', (0, _styledTools.ifProp)('palette', (0, _styledTheme.palette)({ grayscale: 0 }, 1), 'currentcolor'), ';width:1em;height:1em;margin:0.1em;box-sizing:border-box;}'], [' > svg{width:100%;height:100%;fill:currentcolor;stroke:currentcolor;}']]);

var Icon = function Icon(_ref2) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ['icon']);

  var svg = __webpack_require__(54)("./" + icon + '.svg');
  return _react2.default.createElement(Wrapper, _extends({}, props, { dangerouslySetInnerHTML: { __html: svg } }));
};

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

var _default = Icon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Icon, 'Icon', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Icon/index.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

var _NavLink = __webpack_require__(71);

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = (0, _noParser.css)([['{font-family:', (0, _styledTheme.font)('primary'), ';text-decoration:none;font-weight:500;color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';}'], [':hover{text-decoration:underline;}']]);

var StyledNavLink = (0, _noParser2.default)(function (_ref) {
  var theme = _ref.theme,
      reverse = _ref.reverse,
      palette = _ref.palette,
      props = _objectWithoutProperties(_ref, ['theme', 'reverse', 'palette']);

  return _react2.default.createElement(_NavLink2.default, props);
}).withConfig({
  displayName: 'Link__StyledNavLink',
  componentId: 't9uq8z-0'
})([['{', styles, ';}']]);
var Anchor = _noParser2.default.a.withConfig({
  displayName: 'Link__Anchor',
  componentId: 't9uq8z-1'
})([['{', styles, ';}']]);

var Link = function Link(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.to) {
    return _react2.default.createElement(StyledNavLink, props);
  }
  return _react2.default.createElement(Anchor, props);
};

Link.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  to: _propTypes2.default.string
};

Link.defaultProps = {
  palette: 'primary'
};

var _default = Link;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(StyledNavLink, 'StyledNavLink', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(Anchor, 'Anchor', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(Link, 'Link', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Link/index.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
var GTM = exports.GTM = 'GTM';
var GTM_START = exports.GTM_START = 'GTM_START';
var GTM_FAILURE = exports.GTM_FAILURE = 'GTM_FAILURE';

var gtmStart = exports.gtmStart = function gtmStart(gtmId) {
  return {
    type: GTM_START,
    payload: {
      gtmId: gtmId
    }
  };
};

var gtmFailure = exports.gtmFailure = function gtmFailure(error, request) {
  return {
    type: GTM_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GTM, 'GTM', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_START, 'GTM_START', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_FAILURE, 'GTM_FAILURE', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmStart, 'gtmStart', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmFailure, 'gtmFailure', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/actions.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(59);

var _path = __webpack_require__(66);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(60);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(75);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _noParser = __webpack_require__(1);

var _server = __webpack_require__(68);

var _reactRedux = __webpack_require__(12);

var _reactRouter = __webpack_require__(69);

var _reactRouterServer = __webpack_require__(72);

var _config = __webpack_require__(4);

var _configure = __webpack_require__(31);

var _configure2 = _interopRequireDefault(_configure);

var _api = __webpack_require__(29);

var _api2 = _interopRequireDefault(_api);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(19);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(18);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { basename: _config.basename, context: context, location: location },
      _react2.default.createElement(_App2.default, null)
    )
  ));
  return (0, _reactRouterServer.renderToString)(app);
};

var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var assets = global.assets;
  var state = '\n    window.__SERVER_STATE__ = ' + (0, _serializeJavascript2.default)(serverState) + ';\n    window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(initialState) + ';\n  ';
  var html = _react2.default.createElement(_Html2.default, { styles: styles, assets: assets, state: state, content: content });
  return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(html);
};

var app = (0, _express2.default)();

app.use(_config.basename, _express2.default.static(_path2.default.resolve(process.cwd(), 'dist/public')));

app.use(function (req, res, next) {
  var location = req.url;
  var store = (0, _configure2.default)({}, { api: _api2.default.create() });
  var context = {};
  var sheet = new _noParser.ServerStyleSheet();
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
  var sheet = new _noParser.ServerStyleSheet();
  var content = (0, _server.renderToStaticMarkup)(sheet.collectStyles(_react2.default.createElement(_Error2.default, null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

app.listen(_config.port, function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + _config.host + ':' + _config.port + _config.basename + '/'));
  }
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/server.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/server.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(70);

var _noParser = __webpack_require__(1);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _HomePage = __webpack_require__(25);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _GoogleTagManager = __webpack_require__(28);

var _GoogleTagManager2 = _interopRequireDefault(_GoogleTagManager);

var _default2 = __webpack_require__(27);

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _noParser.injectGlobal)([['body{margin:0;}']]);

// https://github.com/diegohaz/arc/wiki/Styling


var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      { titleTemplate: 'GetDinghy - %s' },
      _react2.default.createElement(
        'title',
        null,
        'Atomic React'
      ),
      _react2.default.createElement('meta', { charSet: 'UTF-8' }),
      _react2.default.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'GetDinghy' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    _react2.default.createElement(_GoogleTagManager2.default, null),
    _react2.default.createElement(
      _noParser.ThemeProvider,
      { theme: _default3.default },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _HomePage2.default, exact: true })
      )
    )
  );
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/App.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

var _default = ErrorPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorPage, 'ErrorPage', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/Error.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/Error.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
};

Html.propTypes = {
  styles: _propTypes2.default.node.isRequired,
  assets: _propTypes2.default.shape({
    css: _propTypes2.default.array.isRequired,
    js: _propTypes2.default.array.isRequired
  }).isRequired,
  state: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired
};

var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/Html.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

var _styledTools = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = _noParser2.default.div.withConfig({
  displayName: 'Block__Block',
  componentId: 's1ow7xdi-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';background-color:', (0, _styledTools.ifProp)('opaque', (0, _styledTheme.palette)(0, true), 'transparent'), ';color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';}']]);

Block.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  opaque: _propTypes2.default.bool
};

Block.defaultProps = {
  palette: 'grayscale'
};

var _default = Block;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Block, 'Block', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Block/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Block/index.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = _noParser2.default.p.withConfig({
  displayName: 'Paragraph__Paragraph',
  componentId: 's1gkc3ph-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)('grayscale', 0), ';font-size:1rem;line-height:1.3;margin:1rem 0 0;}']]);

Paragraph.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Paragraph;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Paragraph, 'Paragraph', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Paragraph/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/atoms/Paragraph/index.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _Icon = __webpack_require__(7);

var _Icon2 = _interopRequireDefault(_Icon);

var _Link = __webpack_require__(8);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var StyledIcon = (0, _noParser2.default)(_Icon2.default).withConfig({
  displayName: 'IconLink__StyledIcon',
  componentId: 's14osjwd-0'
})([['{font-size:', fontSize, ';margin:', margin, ';}@media screen and (max-width:420px){'], ['{margin:', function (_ref3) {
  var responsive = _ref3.responsive;
  return responsive && 0;
}, ';}}']]);

var Text = _noParser2.default.span.withConfig({
  displayName: 'IconLink__Text',
  componentId: 's14osjwd-1'
})([['@media screen and (max-width:420px){'], ['{display:', function (_ref4) {
  var responsive = _ref4.responsive;
  return responsive && 'none';
}, ';}}']]);

var IconLink = function IconLink(_ref5) {
  var height = _ref5.height,
      icon = _ref5.icon,
      right = _ref5.right,
      responsive = _ref5.responsive,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ['height', 'icon', 'right', 'responsive', 'children']);

  var iconElement = _react2.default.createElement(StyledIcon, {
    height: height,
    icon: icon,
    hasText: !!children,
    right: right,
    responsive: responsive,
    palette: props.palette,
    reverse: props.reverse
  });
  return _react2.default.createElement(
    _Link2.default,
    props,
    right || iconElement,
    _react2.default.createElement(
      Text,
      { responsive: responsive },
      children
    ),
    right && iconElement
  );
};

IconLink.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var _default = IconLink;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(margin, 'margin', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(IconLink, 'IconLink', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/molecules/IconLink/index.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

var _Paragraph = __webpack_require__(21);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Link = __webpack_require__(8);

var _Link2 = _interopRequireDefault(_Link);

var _Icon = __webpack_require__(7);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Footer__Wrapper',
  componentId: 'fschxx-0'
})([['{background-color:', (0, _styledTheme.palette)('grayscale', 1, true), ';padding:2rem;}']]);

var Credits = (0, _noParser2.default)(_Paragraph2.default).withConfig({
  displayName: 'Footer__Credits',
  componentId: 'fschxx-1'
})([['{vertical-align:center;text-align:center;margin:0;}']]);

var Footer = function Footer(props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Credits,
      null,
      'Made with ',
      _react2.default.createElement(_Icon2.default, { icon: 'heart' }),
      ' by ',
      _react2.default.createElement(
        _Link2.default,
        { href: 'https://github.com/gipsy' },
        'Taras'
      )
    )
  );
};

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(Credits, 'Credits', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Footer/index.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

var _IconLink = __webpack_require__(22);

var _IconLink2 = _interopRequireDefault(_IconLink);

var _Block = __webpack_require__(20);

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = (0, _noParser2.default)(_Block2.default).withConfig({
  displayName: 'Header__Wrapper',
  componentId: 's14tu382-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem;}@media screen and (max-width:640px){'], ['{padding:0.5rem;}}']]);

var InnerWrapper = _noParser2.default.div.withConfig({
  displayName: 'Header__InnerWrapper',
  componentId: 's14tu382-1'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;max-width:', (0, _styledTheme.size)('maxWidth'), ';}'], [' > :not(:first-child){margin-left:1rem;}']]);

var Header = function Header(props) {
  return _react2.default.createElement(
    Wrapper,
    _extends({ opaque: true, reverse: true }, props),
    _react2.default.createElement(
      InnerWrapper,
      null,
      _react2.default.createElement(_IconLink2.default, { to: '/', icon: 'arc', height: 100 })
    )
  );
};

var _default = Header;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(InnerWrapper, 'InnerWrapper', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/organisms/Header/index.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageTemplate = __webpack_require__(26);

var _PageTemplate2 = _interopRequireDefault(_PageTemplate);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(23);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Atomic-Design
var HomePage = function HomePage() {
  return _react2.default.createElement(_PageTemplate2.default, { header: _react2.default.createElement(_Header2.default, null), footer: _react2.default.createElement(_Footer2.default, null) });
};

var _default = HomePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/pages/HomePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/pages/HomePage/index.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1);

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/Atomic-Design#templates


var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'PageTemplate__Wrapper',
  componentId: 's1w5g671-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:3.75rem;min-height:100vh;box-sizing:border-box;}@media screen and (max-width:640px){'], ['{padding-top:3.25rem;}}']]);

var Header = _noParser2.default.header.withConfig({
  displayName: 'PageTemplate__Header',
  componentId: 's1w5g671-1'
})([['{position:fixed;top:0;width:100%;z-index:999;}']]);

var Hero = _noParser2.default.section.withConfig({
  displayName: 'PageTemplate__Hero',
  componentId: 's1w5g671-2'
})([]);

var Content = _noParser2.default.section.withConfig({
  displayName: 'PageTemplate__Content',
  componentId: 's1w5g671-3'
})([['{width:100%;box-sizing:border-box;margin:2rem auto;max-width:', (0, _styledTheme.size)('maxWidth'), ';}']]);

var Footer = _noParser2.default.footer.withConfig({
  displayName: 'PageTemplate__Footer',
  componentId: 's1w5g671-4'
})([['{margin-top:auto;}']]);

var PageTemplate = function PageTemplate(_ref) {
  var header = _ref.header,
      hero = _ref.hero,
      children = _ref.children,
      footer = _ref.footer,
      props = _objectWithoutProperties(_ref, ['header', 'hero', 'children', 'footer']);

  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Header,
      null,
      header
    ),
    hero && _react2.default.createElement(
      Hero,
      null,
      hero
    ),
    _react2.default.createElement(
      Content,
      null,
      children
    ),
    _react2.default.createElement(
      Footer,
      null,
      footer
    )
  );
};

PageTemplate.propTypes = {
  header: _propTypes2.default.node.isRequired,
  hero: _propTypes2.default.node,
  footer: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.any.isRequired
};

var _default = PageTemplate;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Hero, 'Hero', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(PageTemplate, 'PageTemplate', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/templates/PageTemplate/index.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = __webpack_require__(77);

var theme = {}; // https://github.com/diegohaz/arc/wiki/Styling


theme.palette = {
  primary: ['#f6a623', '#d68a0c', '#f5c677', '#fee2b4', '#fceed6'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#ef828e', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fefefe', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9b9b9b', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

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
    return css([['@media (max-width:', sizes[label] / 16, 'em){'], ['{', css.apply(undefined, arguments), ';}}']]);
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

var _default = theme;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(sizes, 'sizes', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(media, 'media', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/components/themes/default.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(12);

var _actions = __webpack_require__(30);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-danger */


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
      var iframe = '\n      <iframe\n        src="//www.googletagmanager.com/ns.html?id=' + _config.gtmId + '"\n        height="0"\n        width="0"\n        style="display:none;visibility:hidden">\n      </iframe>\n    ';
      return _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: iframe } });
    }
  }]);

  return GoogleTagManager;
}(_react.Component);

GoogleTagManager.propTypes = {
  startGTM: _propTypes2.default.func.isRequired
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startGTM: function startGTM() {
      return dispatch((0, _actions.gtmStart)(_config.gtmId));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(GoogleTagManager);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GoogleTagManager, 'GoogleTagManager', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/containers/GoogleTagManager.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/containers/GoogleTagManager.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/containers/GoogleTagManager.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(61);

var _queryString = __webpack_require__(67);

var _merge = __webpack_require__(10);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/API-service


var checkStatus = exports.checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = exports.parseJSON = function parseJSON(response) {
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
  var settings = (0, _merge2.default)({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};

exports.parseSettings = parseSettings;
var parseEndpoint = exports.parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : _config.apiUrl + endpoint;
  var querystring = params ? '?' + (0, _queryString.stringify)(params) : '';
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
      return api.request(endpoint, (0, _merge2.default)({}, this.settings, settings));
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

var _default = api;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkStatus, 'checkStatus', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseSettings, 'parseSettings', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseEndpoint, 'parseEndpoint', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(api, 'api', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/services/api/index.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(55);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/actions.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _reduxSaga = __webpack_require__(74);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(4);

var _middlewares = __webpack_require__(33);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(34);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(38);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // https://github.com/diegohaz/arc/wiki/Redux-modules


var devtools = _config.isDev && _config.isBrowser && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var enhancers = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(_middlewares2.default).concat([sagaMiddleware])), devtools()];

  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(_sagas2.default, services);

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

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(devtools, 'devtools', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/configure.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/configure.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/configure.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;
exports.startGTM = startGTM;
exports.watchAllActions = watchAllActions;
exports.watchGTMStart = watchGTMStart;

var _simpleLoadScript = __webpack_require__(76);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(6);

var _actions = __webpack_require__(9);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [track, startGTM, watchAllActions, watchGTMStart].map(regeneratorRuntime.mark); // https://github.com/diegohaz/arc/wiki/Sagas
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
          return (0, _effects.put)(actions.gtmFailure(_context.t0, payload));

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
          return (0, _effects.call)(_simpleLoadScript2.default, '//www.googletagmanager.com/gtm.js?id=' + gtmId);

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return (0, _effects.put)(actions.gtmFailure(_context2.t0, { gtmId: gtmId }));

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
          return (0, _effects.take)('*');

        case 3:
          _ref3 = _context3.sent;
          type = _ref3.type;
          meta = _ref3.meta;
          _context3.next = 8;
          return (0, _effects.call)(track, type, meta);

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
          return (0, _effects.take)(actions.GTM_START);

        case 2:
          _ref4 = _context4.sent;
          payload = _ref4.payload;
          _context4.next = 6;
          return (0, _effects.all)([(0, _effects.call)(startGTM, payload), (0, _effects.call)(watchAllActions)]);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

var _default = regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.fork)(watchGTMStart);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(track, 'track', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(startGTM, 'startGTM', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchAllActions, 'watchAllActions', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchGTMStart, 'watchGTMStart', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/gtm/sagas.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(14),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(56);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/middlewares.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(63);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(13);

var _leanRedux = __webpack_require__(62);

var _reduxForm = __webpack_require__(73);

var _reduxSagaThunk = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_leanRedux.leanReducer.setGlobalScope('lean'); // https://github.com/diegohaz/arc/wiki/Reducers


var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = __webpack_require__(57);

req.keys().forEach(function (key) {
  var storeName = (0, _camelCase2.default)(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

var _default = (0, _redux.combineReducers)(reducers);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(req, 'req', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/reducer.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource


var _findIndex = __webpack_require__(64);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _get = __webpack_require__(65);

var _get2 = _interopRequireDefault(_get);

var _selectors = __webpack_require__(37);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var updateOrDeleteReducer = function updateOrDeleteReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var resource = (0, _get2.default)(meta, 'resource');
  var needle = (0, _get2.default)(meta, 'request.needle');
  var needleIsObject = (typeof needle === 'undefined' ? 'undefined' : _typeof(needle)) === 'object';
  var list = (0, _selectors.getList)(state, resource);
  var index = needleIsObject ? (0, _findIndex2.default)(list, needle) : list.indexOf(needle);

  if (index < 0) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_UPDATE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), [needleIsObject ? _extends({}, list[index], payload) : payload], _toConsumableArray(list.slice(index + 1)))
      })));
    case _actions.RESOURCE_DELETE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1)))
      })));
    // istanbul ignore next
    default:
      return state;
  }
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload,
      meta = _ref2.meta;

  var resource = (0, _get2.default)(meta, 'resource');

  if (!resource) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_CREATE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [payload].concat(_toConsumableArray((0, _selectors.getList)(state, resource)))
      })));

    case _actions.RESOURCE_LIST_READ_REQUEST:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: (0, _selectors.getList)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_LIST_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: payload
      })));

    case _actions.RESOURCE_DETAIL_READ_REQUEST:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        detail: (0, _selectors.getDetail)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_DETAIL_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        detail: payload
      })));

    case _actions.RESOURCE_UPDATE_SUCCESS:
    case _actions.RESOURCE_DELETE_SUCCESS:
      return updateOrDeleteReducer(state, { type: type, payload: payload, meta: meta });

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateOrDeleteReducer, 'updateOrDeleteReducer', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/reducer.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResource = createResource;
exports.readResourceList = readResourceList;
exports.readResourceDetail = readResourceDetail;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;
exports.watchResourceCreateRequest = watchResourceCreateRequest;
exports.watchResourceListReadRequest = watchResourceListReadRequest;
exports.watchResourceDetailReadRequest = watchResourceDetailReadRequest;
exports.watchResourceUpdateRequest = watchResourceUpdateRequest;
exports.watchResourceDeleteRequest = watchResourceDeleteRequest;

var _effects = __webpack_require__(6);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [createResource, readResourceList, readResourceDetail, updateResource, deleteResource, watchResourceCreateRequest, watchResourceListReadRequest, watchResourceDetailReadRequest, watchResourceUpdateRequest, watchResourceDeleteRequest].map(regeneratorRuntime.mark); // https://github.com/diegohaz/arc/wiki/Sagas
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
          return (0, _effects.call)([api, api.post], '/' + resource, data);

        case 3:
          detail = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(actions.resourceCreateSuccess(resource, detail, { data: data }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)(actions.resourceCreateFailure(resource, _context.t0, { data: data }, thunk));

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
          return (0, _effects.call)([api, api.get], '/' + resource, { params: params });

        case 3:
          list = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)(actions.resourceListReadSuccess(resource, list, { params: params }, thunk));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return (0, _effects.put)(actions.resourceListReadFailure(resource, _context2.t0, { params: params }, thunk));

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
          return (0, _effects.call)([api, api.get], '/' + resource + '/' + needle);

        case 3:
          detail = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)(actions.resourceDetailReadSuccess(resource, detail, { needle: needle }, thunk));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return (0, _effects.put)(actions.resourceDetailReadFailure(resource, _context3.t0, { needle: needle }, thunk));

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
          return (0, _effects.call)([api, api.put], '/' + resource + '/' + needle, data);

        case 3:
          detail = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)(actions.resourceUpdateSuccess(resource, detail, { needle: needle, data: data }, thunk));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return (0, _effects.put)(actions.resourceUpdateFailure(resource, _context4.t0, { needle: needle, data: data }, thunk));

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
          return (0, _effects.call)([api, api.delete], '/' + resource + '/' + needle);

        case 3:
          _context5.next = 5;
          return (0, _effects.put)(actions.resourceDeleteSuccess(resource, { needle: needle }, thunk));

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 11;
          return (0, _effects.put)(actions.resourceDeleteFailure(resource, _context5.t0, { needle: needle }, thunk));

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
          return (0, _effects.take)(actions.RESOURCE_CREATE_REQUEST);

        case 3:
          _ref11 = _context6.sent;
          payload = _ref11.payload;
          meta = _ref11.meta;
          _context6.next = 8;
          return (0, _effects.call)(createResource, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_LIST_READ_REQUEST);

        case 3:
          _ref12 = _context7.sent;
          payload = _ref12.payload;
          meta = _ref12.meta;
          _context7.next = 8;
          return (0, _effects.call)(readResourceList, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_DETAIL_READ_REQUEST);

        case 3:
          _ref13 = _context8.sent;
          payload = _ref13.payload;
          meta = _ref13.meta;
          _context8.next = 8;
          return (0, _effects.call)(readResourceDetail, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_UPDATE_REQUEST);

        case 3:
          _ref14 = _context9.sent;
          payload = _ref14.payload;
          meta = _ref14.meta;
          _context9.next = 8;
          return (0, _effects.call)(updateResource, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_DELETE_REQUEST);

        case 3:
          _ref15 = _context10.sent;
          payload = _ref15.payload;
          meta = _ref15.meta;
          _context10.next = 8;
          return (0, _effects.call)(deleteResource, api, payload, meta);

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

var _default = regeneratorRuntime.mark(function _default(_ref16) {
  var api = _ref16.api;
  return regeneratorRuntime.wrap(function _default$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.fork)(watchResourceCreateRequest, api);

        case 2:
          _context11.next = 4;
          return (0, _effects.fork)(watchResourceListReadRequest, api);

        case 4:
          _context11.next = 6;
          return (0, _effects.fork)(watchResourceDetailReadRequest, api);

        case 6:
          _context11.next = 8;
          return (0, _effects.fork)(watchResourceUpdateRequest, api);

        case 8:
          _context11.next = 10;
          return (0, _effects.fork)(watchResourceDeleteRequest, api);

        case 10:
        case 'end':
          return _context11.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createResource, 'createResource', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceList, 'readResourceList', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceDetail, 'readResourceDetail', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(updateResource, 'updateResource', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(deleteResource, 'deleteResource', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceCreateRequest, 'watchResourceCreateRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceListReadRequest, 'watchResourceListReadRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDetailReadRequest, 'watchResourceDetailReadRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceUpdateRequest, 'watchResourceUpdateRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDeleteRequest, 'watchResourceDeleteRequest', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/sagas.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var initialState = exports.initialState = {};

var initialResourceState = exports.initialResourceState = {
  list: [],
  detail: null
};

var getResourceState = exports.getResourceState = function getResourceState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return state[resource] || initialResourceState;
};

var getList = exports.getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).list;
};

var getDetail = exports.getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).detail;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(initialResourceState, "initialResourceState", "/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getResourceState, "getResourceState", "/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getList, "getList", "/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getDetail, "getDetail", "/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/resource/selectors.js");
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(6);

var req = __webpack_require__(58); // https://github.com/diegohaz/arc/wiki/Sagas


var sagas = req.keys().map(function (key) {
  return req(key).default;
});

var _default = regeneratorRuntime.mark(function _default() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(sagas.map(function (saga) {
            return (0, _effects.fork)(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(sagas, 'sagas', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Entertainment/Sites/RSS_DESIGN_SYSTEM/src/store/sagas.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 184 164\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <g transform=\"matrix(1,0,0,1,-4.49912,-15.1442)\">\n        <g id=\"Symbol\" transform=\"matrix(0.446036,2.31112e-32,2.31112e-32,0.446036,-1.17751,-11.7517)\">\n            <g transform=\"matrix(0.730839,0,0,0.730839,-428.272,-103.233)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\" />\n            </g>\n            <g transform=\"matrix(-0.365419,-0.632925,0.632925,-0.365419,244.419,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.365419,-0.632925,-0.632925,-0.365419,191.319,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.849949,0,0,0.849949,-532.408,-149.626)\">\n                <circle cx=\"882.732\" cy=\"463.109\" r=\"40.177\"/>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"128.1 125.4 49.2 49.2\" enable-background=\"new 128.1 125.4 49.2 49.2\" xml:space=\"preserve\">\n  <g id=\"atom\">\n  \t<g>\n  \t\t<g>\n  \t\t\t<circle fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"152.7\" cy=\"150\" r=\"21.6\"></circle>\n  \t\t\t<circle stroke=\"none\" fill=\"#BE6700\" cx=\"152.7\" cy=\"150\" r=\"12.4\"></circle>\n  \t\t</g>\n  \t\t<path stroke=\"none\" fill=\"#BE6700\" d=\"M175.1,136.6c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.3-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3\n  \t\t\tC172.7,131.3,175.1,133.7,175.1,136.6z\"></path>\n  \t</g>\n  </g>\n</svg>\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32\" xml:space=\"preserve\" fill=\"none\">\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\" fill=\"none\"/>\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"24\" y1=\"8\" x2=\"8\" y2=\"24\" fill=\"none\"/>\n</svg>\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g stroke=\"none\">\n\t<path d=\"M18,8v12H9V8H18 M18,6H9C7.9,6,7,6.9,7,8v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6L18,6z\" stroke=\"none\"/>\n</g>\n<path d=\"M5,17V4h10V2H5C3.9,2,3,2.9,3,4v13H5z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<polygon stroke=\"none\" fill=\"#CFD8DC\" points=\"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26\n\t\"/>\r\n<rect x=\"17\" y=\"6\" stroke=\"none\" fill=\"#3F51B5\" width=\"14\" height=\"10\"/>\n<rect x=\"32\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"6\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"19\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n</svg>\r\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Слой_1\" x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\">\n<path d=\"M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3  c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3  c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4  c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2  c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3  c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2  C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032  c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2  C7.021,2,2.543,6.477,2.543,12c0,5.523,4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<path fill=\"#FF3D00\" stroke=\"none\" d=\"M32.635,8C29.027,8,25.855,9.828,24,12.597C22.145,9.828,18.973,8,15.365,8C9.641,8,5,12.598,5,18.269\n\tC5,28.487,21.15,33.411,24,40c2.85-6.589,19-11.428,19-21.731C43,12.598,38.359,8,32.635,8\"/>\n</svg>\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"283px\" viewBox=\"0 0 256 283\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z\" stroke=\"none\" fill=\"#C63D14\"></path>\n\t\t<path d=\"M246.399036,139.203 C246.399036,123.218 234.882036,109.88 219.711036,107.031 L256.000036,0 L84.4660355,0 L120.810036,107.248 C106.167036,110.507 95.1830355,123.593 95.1830355,139.203 C95.1830355,150.926 101.378036,161.223 110.663036,167.009 C106.197036,173.662 100.901036,179.923 94.8320355,185.648 C85.2080355,194.728 74.4850355,201.614 62.9250355,206.144 C51.2820355,198.83 46.3600355,185.038 51.4720355,173.022 L51.8720355,172.082 C52.1220355,171.494 52.3730355,170.904 52.6230355,170.314 C65.4110355,165.855 74.6160355,153.682 74.6160355,139.392 C74.6160355,121.337 59.9270355,106.649 41.8720355,106.649 C23.8170355,106.649 9.12903553,121.337 9.12903553,139.392 C9.12903553,148.505 12.8740355,156.757 18.9020355,162.699 C17.8090355,165.029 16.6600355,167.397 15.4790355,169.823 C9.96703553,181.144 3.72003553,193.976 1.35703553,208.225 C-3.33596447,236.524 4.23303553,259.146 22.6700355,271.924 C33.8580355,279.678 45.2190355,282.728 56.6520355,282.727 C78.1810355,282.726 99.9580355,271.911 121.258036,261.331 C136.599036,253.712 152.461036,245.833 168.130036,241.969 C173.960036,240.531 179.959036,239.666 186.310036,238.75 C198.904036,236.933 211.928036,235.055 223.464036,228.374 C236.835036,220.629 245.989036,207.637 248.577036,192.73 C250.799036,179.933 248.124036,167.117 241.602036,156.247 C244.643036,151.279 246.399036,145.443 246.399036,139.203 L246.399036,139.203 Z M233.545036,139.203 C233.545036,150.17 224.623036,159.093 213.655036,159.093 C202.689036,159.093 193.766036,150.17 193.766036,139.203 C193.766036,128.236 202.689036,119.314 213.655036,119.314 C224.623036,119.314 233.545036,128.236 233.545036,139.203 L233.545036,139.203 Z M238.069036,12.854 L206.024036,107.367 C204.635036,107.7 203.281036,108.12 201.966036,108.625 L170.310036,44.047 L138.562036,108.243 C137.190036,107.77 135.778036,107.381 134.330036,107.093 L102.395036,12.854 L238.069036,12.854 L238.069036,12.854 Z M127.926036,119.314 C138.893036,119.314 147.815036,128.236 147.815036,139.203 C147.815036,150.17 138.893036,159.093 127.926036,159.093 C116.960036,159.093 108.037036,150.17 108.037036,139.203 C108.037036,128.236 116.960036,119.314 127.926036,119.314 L127.926036,119.314 Z M41.8720355,119.503 C52.8400355,119.503 61.7620355,128.425 61.7620355,139.392 C61.7620355,150.359 52.8400355,159.282 41.8720355,159.282 C30.9060355,159.282 21.9830355,150.359 21.9830355,139.392 C21.9830355,128.425 30.9060355,119.503 41.8720355,119.503 L41.8720355,119.503 Z M235.912036,190.531 C233.977036,201.679 227.091036,211.418 217.021036,217.25 C207.634036,222.687 196.385036,224.31 184.475036,226.027 C178.095036,226.947 171.497036,227.899 165.052036,229.489 C148.010036,233.691 131.503036,241.89 115.540036,249.819 C83.5950355,265.686 56.0060355,279.388 29.9930355,261.359 C10.9380355,248.153 11.8180355,223.718 14.0380355,210.328 C16.0950355,197.923 21.6570355,186.498 27.0360355,175.449 C27.9670355,173.537 28.8710355,171.664 29.7580355,169.803 C32.4260355,170.87 35.2630355,171.597 38.2200355,171.927 C32.7450355,189.998 41.3560355,209.646 59.4290355,218.931 L61.9020355,220.202 L64.5220355,219.269 C78.8100355,214.181 91.9750355,206.015 103.653036,194.998 C111.202036,187.877 117.689036,179.998 123.023036,171.579 C124.623036,171.82 126.260036,171.947 127.926036,171.947 C145.981036,171.947 160.670036,157.259 160.670036,139.203 C160.670036,129.493 156.417036,120.761 149.681036,114.759 L170.259036,73.147 L191.046036,115.552 C184.809036,121.518 180.912036,129.911 180.912036,139.203 C180.912036,157.259 195.600036,171.947 213.655036,171.947 C220.592036,171.947 227.027036,169.773 232.327036,166.079 C236.007036,173.612 237.378036,182.088 235.912036,190.531 L235.912036,190.531 Z\" stroke=\"none\" fill=\"#FFFFFF\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"140px\" viewBox=\"0 0 256 140\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z\" stroke=\"none\" fill=\"#CF0920\"></path>\n\t\t<path d=\"M78.0720006,92.782 C65.2940006,92.784 54.8620006,82.355 54.8600006,69.579 C54.8580006,56.802 65.2870006,46.369 78.0630006,46.367 C90.8400006,46.365 101.272001,56.794 101.274001,69.57 C101.276001,82.347 90.8470006,92.78 78.0720006,92.782 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M23.1300737,139.2 C10.3630737,139.168 -0.0319263159,128.703 7.36840638e-05,115.915 C0.0320736841,103.148 10.4960737,92.753 23.2840737,92.786 C36.0510737,92.817 46.4460737,103.282 46.4140737,116.07 C46.3820737,128.837 35.9180737,139.232 23.1300737,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M232.962386,139.2 C220.162386,139.273 209.653386,128.92 209.580386,116.167 C209.507386,103.368 219.860386,92.858 232.613386,92.786 C245.412386,92.712 255.921386,103.064 255.995386,115.818 C256.068386,128.617 245.715386,139.127 232.962386,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns=\"http://www.w3.org/2000/svg\" height=\"780.18\" viewBox=\"0 0 875.02936 780.17639\" width=\"875.03\" version=\"1.1\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n <g stroke=\"none\" fill=\"#61dafb\">\n  <path d=\"m512.45 391.21a76.266 77.855 0 0 1 -76.266 77.855 76.266 77.855 0 0 1 -76.266 -77.855 76.266 77.855 0 0 1 76.266 -77.855 76.266 77.855 0 0 1 76.266 77.855z\"/>\n  <g fill-rule=\"evenodd\">\n   <path d=\"m277.8 477.26a437.52 180.08 59.793 0 1 -61.2 -466.18 437.52 180.08 59.793 0 1 376.3 291.6 437.52 180.08 59.793 0 1 61.2 466.18 437.52 180.08 59.793 0 1 -376.3 -291.6zm34.163-17.99a399.46 141.49 59.831 0 1 -75.73 -414.16 399.46 141.49 59.831 0 1 323.72 277.69 399.46 141.49 59.831 0 1 75.73 414.16 399.46 141.49 59.831 0 1 -323.72 -277.69z\"/>\n   <path d=\"m282.04 297.29a180.08 437.52 29.793 0 1 373.12 -286.09 180.08 437.52 29.793 0 1 -64.38 471.69 180.08 437.52 29.793 0 1 -373.12 286.09 180.08 437.52 29.793 0 1 64.38 -471.69zm32.661 20.591a141.49 399.46 29.831 0 1 320.81 -272.66 141.49 399.46 29.831 0 1 -78.63 419.19 141.49 399.46 29.831 0 1 -320.81 272.66 141.49 399.46 29.831 0 1 78.63 -419.19z\"/>\n   <path d=\"m440.7 210.54a180.08 437.52 89.793 0 1 434.32 180.09 180.08 437.52 89.793 0 1 -440.69 180.08 180.08 437.52 89.793 0 1 -434.32 -180.08 180.08 437.52 89.793 0 1 440.69 -180.09zm-1.5016 38.581a141.49 399.46 89.831 0 1 396.53 141.5 141.49 399.46 89.831 0 1 -402.35 141.5 141.49 399.46 89.831 0 1 -396.53 -141.5 141.49 399.46 89.831 0 1 402.35 -141.5z\"/>\n  </g>\n </g>\n</svg>\n"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n  <g stroke=\"none\" fill=\"#764ABC\">\n    <path d=\"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z\"/>\n    <path d=\"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z\"/>\n    <path d=\"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z\"/>\n  </g>\n</svg>\n"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\">\n<title>icon-square-big</title>\n<path stroke=\"none\" fill=\"#FFF\" d=\"M600 0l530.3 300v600L600 1200 69.7 900V300z\"/>\n<path stroke=\"none\" fill=\"#8ED6FB\" class=\"st1\" d=\"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z\"/>\n<path stroke=\"none\" fill=\"#1C78C0\" d=\"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z\"/>\n</svg>\n"

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arc.svg": 39,
	"./atomic-design.svg": 40,
	"./close.svg": 41,
	"./copy.svg": 42,
	"./dist.svg": 43,
	"./docs.svg": 44,
	"./facebook.svg": 45,
	"./github.svg": 46,
	"./google.svg": 47,
	"./heart.svg": 48,
	"./jest.svg": 49,
	"./react-router.svg": 50,
	"./react.svg": 51,
	"./redux.svg": 52,
	"./webpack.svg": 53
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
webpackContext.id = 54;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./gtm/actions.js": 9,
	"./resource/actions.js": 5
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
webpackContext.id = 55;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 56;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./resource/reducer.js": 35
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
webpackContext.id = 57;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./gtm/sagas.js": 32,
	"./resource/sagas.js": 36
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
webpackContext.id = 58;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("lean-redux");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/NavLink");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map