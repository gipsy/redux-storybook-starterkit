'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var req = require.context('.', true, /\.\/.+\/sagas\.js$/); // https://github.com/diegohaz/arc/wiki/Sagas


var sagas = req.keys().map(function (key) {
  return req(key).default;
});

var _default = _regenerator2.default.mark(function _default() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _regenerator2.default.wrap(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(sagas.map(function (saga) {
            return (0, _effects.fork)(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'src/store/sagas.js');

  __REACT_HOT_LOADER__.register(sagas, 'sagas', 'src/store/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/sagas.js');
}();

;