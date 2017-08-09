'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.track = track;
exports.startGTM = startGTM;
exports.watchAllActions = watchAllActions;
exports.watchGTMStart = watchGTMStart;

var _simpleLoadScript = require('simple-load-script');

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [track, startGTM, watchAllActions, watchGTMStart].map(_regenerator2.default.mark); // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm


function track(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      gtm = _ref.gtm;

  var payload;
  return _regenerator2.default.wrap(function track$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = { event: type, label: gtm };
          _context.prev = 1;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(payload);
          _context.next = 6;
          return payload;

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](1);
          _context.next = 12;
          return (0, _effects.put)(actions.gtmFailure(_context.t0, payload));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 8]]);
}

function startGTM(_ref2) {
  var gtmId = _ref2.gtmId;
  return _regenerator2.default.wrap(function startGTM$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime()
          });
          _context2.next = 5;
          return (0, _effects.call)(_simpleLoadScript2.default, '//www.googletagmanager.com/gtm.js?id=' + gtmId);

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return (0, _effects.put)(actions.gtmFailure(_context2.t0, { gtmId: gtmId }));

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 7]]);
}

function watchAllActions() {
  var _ref3, type, meta;

  return _regenerator2.default.wrap(function watchAllActions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!true) {
            _context3.next = 10;
            break;
          }

          _context3.next = 3;
          return (0, _effects.take)('*');

        case 3:
          _ref3 = _context3.sent;
          type = _ref3.type;
          meta = _ref3.meta;
          _context3.next = 8;
          return (0, _effects.call)(track, type, meta);

        case 8:
          _context3.next = 0;
          break;

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function watchGTMStart() {
  var _ref4, payload;

  return _regenerator2.default.wrap(function watchGTMStart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.take)(actions.GTM_START);

        case 2:
          _ref4 = _context4.sent;
          payload = _ref4.payload;
          _context4.next = 6;
          return (0, _effects.all)([(0, _effects.call)(startGTM, payload), (0, _effects.call)(watchAllActions)]);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

var _default = _regenerator2.default.mark(function _default() {
  return _regenerator2.default.wrap(function _default$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.fork)(watchGTMStart);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(track, 'track', 'src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(startGTM, 'startGTM', 'src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchAllActions, 'watchAllActions', 'src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchGTMStart, 'watchGTMStart', 'src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/gtm/sagas.js');
}();

;