'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case _actions.MODAL_SHOW:
      return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, payload.name, true));
    case _actions.MODAL_HIDE:
      if (payload.name) {
        return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, payload.name, false));
      }
      return _selectors.initialState;
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

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/modal/reducer.js');
}();

;