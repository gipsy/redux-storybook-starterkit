'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

require('isomorphic-fetch');

var _queryString = require('query-string');

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/API-service
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
      otherSettings = (0, _objectWithoutProperties3.default)(_ref, ['method', 'data', 'locale']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale
  };
  var settings = (0, _merge2.default)({
    body: data ? (0, _stringify2.default)(data) : undefined,
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
      settings = (0, _objectWithoutProperties3.default)(_ref2, ['params']);
  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(parseJSON);
};['delete', 'get'].forEach(function (method) {
  api[method] = function (endpoint, settings) {
    return api.request(endpoint, (0, _extends3.default)({ method: method }, settings));
  };
});['post', 'put', 'patch'].forEach(function (method) {
  api[method] = function (endpoint, data, settings) {
    return api.request(endpoint, (0, _extends3.default)({ method: method, data: data }, settings));
  };
});

api.create = function () {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    settings: settings,

    setToken: function setToken(token) {
      this.settings.headers = (0, _extends3.default)({}, this.settings.headers, {
        Authorization: 'Bearer ' + token
      });
    },
    unsetToken: function unsetToken() {
      this.settings.headers = (0, _extends3.default)({}, this.settings.headers, {
        Authorization: undefined
      });
    },
    request: function request(endpoint, settings) {
      return api.request(endpoint, (0, _merge2.default)({}, this.settings, settings));
    },
    post: function post(endpoint, data, settings) {
      return this.request(endpoint, (0, _extends3.default)({ method: 'post', data: data }, settings));
    },
    get: function get(endpoint, settings) {
      return this.request(endpoint, (0, _extends3.default)({ method: 'get' }, settings));
    },
    put: function put(endpoint, data, settings) {
      return this.request(endpoint, (0, _extends3.default)({ method: 'put', data: data }, settings));
    },
    patch: function patch(endpoint, data, settings) {
      return this.request(endpoint, (0, _extends3.default)({ method: 'patch', data: data }, settings));
    },
    delete: function _delete(endpoint, settings) {
      return this.request(endpoint, (0, _extends3.default)({ method: 'delete' }, settings));
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

  __REACT_HOT_LOADER__.register(checkStatus, 'checkStatus', 'src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', 'src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseSettings, 'parseSettings', 'src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseEndpoint, 'parseEndpoint', 'src/services/api/index.js');

  __REACT_HOT_LOADER__.register(api, 'api', 'src/services/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/services/api/index.js');
}();

;