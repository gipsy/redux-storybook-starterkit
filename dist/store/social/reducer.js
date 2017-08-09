'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions.SOCIAL_LOGIN_SUCCESS:
      return (0, _extends3.default)({}, state, {
        user: payload
      });
    case _actions.SOCIAL_LOGOUT:
      return (0, _extends3.default)({}, state, {
        user: _selectors.initialState.user
      });
    default:
      return state;
  }
};

exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/social/reducer.js');
}();

;