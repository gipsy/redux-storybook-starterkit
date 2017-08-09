'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = require('redux');

var _leanRedux = require('lean-redux');

var _reduxForm = require('redux-form');

var _reduxSagaThunk = require('redux-saga-thunk');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_leanRedux.leanReducer.setGlobalScope('lean'); // https://github.com/diegohaz/arc/wiki/Reducers


var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = require.context('.', true, /\.\/.+\/reducer\.js$/);

req.keys().forEach(function (key) {
  var storeName = (0, _camelCase2.default)(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

var _default = (0, _redux.combineReducers)(reducers);

exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', 'src/store/reducer.js');

  __REACT_HOT_LOADER__.register(req, 'req', 'src/store/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/reducer.js');
}();

;