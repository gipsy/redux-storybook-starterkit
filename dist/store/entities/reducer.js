'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith = require('lodash/mergeWith');

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  if (type === _actions.ENTITIES_RECEIVE) {
    return (0, _mergeWith2.default)({}, state, payload, function (objValue, srcValue) {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return undefined;
    });
  }
  return state;
}; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities


exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/entities/reducer.js');
}();

;