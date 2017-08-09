'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialLogout = exports.socialLoginFailure = exports.socialLoginSuccess = exports.socialLoginRequest = exports.socialLoginPrepare = exports.SOCIAL_LOGOUT = exports.SOCIAL_LOGIN_FAILURE = exports.SOCIAL_LOGIN_SUCCESS = exports.SOCIAL_LOGIN_REQUEST = exports.SOCIAL_LOGIN_PREPARE = exports.SOCIAL_LOGIN = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var SOCIAL_LOGIN = exports.SOCIAL_LOGIN = 'SOCIAL_LOGIN';
var SOCIAL_LOGIN_PREPARE = exports.SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE';
var SOCIAL_LOGIN_REQUEST = exports.SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
var SOCIAL_LOGIN_SUCCESS = exports.SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
var SOCIAL_LOGIN_FAILURE = exports.SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
var SOCIAL_LOGOUT = exports.SOCIAL_LOGOUT = 'SOCIAL_LOGOUT';

var socialLoginPrepare = function socialLoginPrepare(service) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref.clientId,
      options = (0, _objectWithoutProperties3.default)(_ref, ['clientId']);
  return {
    type: SOCIAL_LOGIN_PREPARE,
    payload: (0, _extends3.default)({
      service: service,
      clientId: clientId
    }, options)
  };
};

exports.socialLoginPrepare = socialLoginPrepare;
var socialLoginRequest = function socialLoginRequest(service) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref2.clientId,
      options = (0, _objectWithoutProperties3.default)(_ref2, ['clientId']);
  return {
    type: SOCIAL_LOGIN_REQUEST,
    payload: (0, _extends3.default)({
      service: service,
      clientId: clientId
    }, options),
    meta: {
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
      gtm: service
    }
  };
};

exports.socialLoginRequest = socialLoginRequest;
var socialLoginSuccess = exports.socialLoginSuccess = function socialLoginSuccess(user, request) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request: request
    }
  };
};

var socialLoginFailure = exports.socialLoginFailure = function socialLoginFailure(error, request) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

var socialLogout = exports.socialLogout = function socialLogout() {
  return { type: SOCIAL_LOGOUT };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN, 'SOCIAL_LOGIN', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_PREPARE, 'SOCIAL_LOGIN_PREPARE', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_REQUEST, 'SOCIAL_LOGIN_REQUEST', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_SUCCESS, 'SOCIAL_LOGIN_SUCCESS', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_FAILURE, 'SOCIAL_LOGIN_FAILURE', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGOUT, 'SOCIAL_LOGOUT', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginPrepare, 'socialLoginPrepare', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginRequest, 'socialLoginRequest', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginSuccess, 'socialLoginSuccess', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginFailure, 'socialLoginFailure', 'src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLogout, 'socialLogout', 'src/store/social/actions.js');
}();

;