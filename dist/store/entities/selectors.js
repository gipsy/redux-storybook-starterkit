'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDenormalizedList = exports.getDenormalizedDetail = exports.getList = exports.getDetail = exports.getEntity = exports.initialState = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _normalizr = require('normalizr');

var _schemas = require('./schemas');

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var initialState = exports.initialState = {};

var getEntity = exports.getEntity = function getEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  return state[entity] || {};
};

var getDetail = exports.getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return getEntity(state, entity)[id];
};

var getList = exports.getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (ids || (0, _keys2.default)(getEntity(state, entity))).map(function (id) {
    return getDetail(state, entity, id);
  });
};

var getDenormalizedDetail = exports.getDenormalizedDetail = function getDenormalizedDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return (0, _normalizr.denormalize)(getDetail(state, entity, id), schemas[entity], state);
};

var getDenormalizedList = exports.getDenormalizedList = function getDenormalizedList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (0, _normalizr.denormalize)(getList(state, entity, ids), [schemas[entity]], state);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getEntity, 'getEntity', 'src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDetail, 'getDetail', 'src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getList, 'getList', 'src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDenormalizedDetail, 'getDenormalizedDetail', 'src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDenormalizedList, 'getDenormalizedList', 'src/store/entities/selectors.js');
}();

;