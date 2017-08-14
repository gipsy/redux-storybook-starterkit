'use strict';

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

  __REACT_HOT_LOADER__.register(GTM, 'GTM', 'src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_START, 'GTM_START', 'src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_FAILURE, 'GTM_FAILURE', 'src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmStart, 'gtmStart', 'src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmFailure, 'gtmFailure', 'src/store/gtm/actions.js');
}();

;