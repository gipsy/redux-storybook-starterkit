"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var initialState = exports.initialState = {
  user: null
};

var getUser = exports.getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "src/store/social/selectors.js");

  __REACT_HOT_LOADER__.register(getUser, "getUser", "src/store/social/selectors.js");
}();

;