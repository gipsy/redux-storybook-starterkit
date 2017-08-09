'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = exports.MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = exports.MODAL_HIDE = 'MODAL_HIDE';

var modalShow = exports.modalShow = function modalShow(name) {
  return {
    type: MODAL_SHOW,
    payload: {
      name: name
    },
    meta: {
      gtm: name
    }
  };
};

var modalHide = exports.modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MODAL_SHOW, 'MODAL_SHOW', 'src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(MODAL_HIDE, 'MODAL_HIDE', 'src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalShow, 'modalShow', 'src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalHide, 'modalHide', 'src/store/modal/actions.js');
}();

;