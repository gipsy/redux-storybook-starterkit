'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends9 = require('babel-runtime/helpers/extends');

var _extends10 = _interopRequireDefault(_extends9);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var updateOrDeleteReducer = function updateOrDeleteReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var resource = (0, _get2.default)(meta, 'resource');
  var needle = (0, _get2.default)(meta, 'request.needle');
  var needleIsObject = (typeof needle === 'undefined' ? 'undefined' : (0, _typeof3.default)(needle)) === 'object';
  var list = (0, _selectors.getList)(state, resource);
  var index = needleIsObject ? (0, _findIndex2.default)(list, needle) : list.indexOf(needle);

  if (index < 0) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_UPDATE_SUCCESS:
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat((0, _toConsumableArray3.default)(list.slice(0, index)), [needleIsObject ? (0, _extends10.default)({}, list[index], payload) : payload], (0, _toConsumableArray3.default)(list.slice(index + 1)))
      })));
    case _actions.RESOURCE_DELETE_SUCCESS:
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat((0, _toConsumableArray3.default)(list.slice(0, index)), (0, _toConsumableArray3.default)(list.slice(index + 1)))
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
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
        list: [payload].concat((0, _toConsumableArray3.default)((0, _selectors.getList)(state, resource)))
      })));

    case _actions.RESOURCE_LIST_READ_REQUEST:
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
        list: (0, _selectors.getList)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_LIST_READ_SUCCESS:
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
        list: payload
      })));

    case _actions.RESOURCE_DETAIL_READ_REQUEST:
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
        detail: (0, _selectors.getDetail)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_DETAIL_READ_SUCCESS:
      return (0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, resource, (0, _extends10.default)({}, (0, _selectors.getResourceState)(state, resource), {
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
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateOrDeleteReducer, 'updateOrDeleteReducer', 'src/store/resource/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/resource/reducer.js');
}();

;