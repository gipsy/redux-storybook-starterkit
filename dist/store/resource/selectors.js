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

  __REACT_HOT_LOADER__.register(initialState, "initialState", "src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(initialResourceState, "initialResourceState", "src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getResourceState, "getResourceState", "src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getList, "getList", "src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getDetail, "getDetail", "src/store/resource/selectors.js");
}();

;