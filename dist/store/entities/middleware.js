'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _normalizr = require('normalizr');

var _config = require('../../config');

var _actions = require('./actions');

var _schemas = require('./schemas');

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var payload = action.payload,
          meta = action.meta;


      if (meta && meta.entities) {
        var schema = schemas[meta.entities];

        if (schema) {
          var _normalize = (0, _normalizr.normalize)(payload, Array.isArray(payload) ? [schema] : schema),
              result = _normalize.result,
              entities = _normalize.entities;

          store.dispatch((0, _actions.entitiesReceive)(entities));
          return next((0, _extends3.default)({}, action, { payload: result }));
        }
        // istanbul ignore next
        if (_config.env === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[entities] There is no ' + meta.entities + ' schema on schemas.js');
        }
      }
      return next(action);
    };
  };
};

var _default = middleware;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, 'middleware', 'src/store/entities/middleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/entities/middleware.js');
}();

;