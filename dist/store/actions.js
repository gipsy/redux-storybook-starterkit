'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Actions
var req = require.context('.', true, /\.\/.+\/actions\.js$/);

req.keys().forEach(function (key) {
  var actions = req(key);

  (0, _keys2.default)(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'src/store/actions.js');
}();

;