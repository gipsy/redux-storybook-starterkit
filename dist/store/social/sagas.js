'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceAction = exports.appendFbRoot = exports.promises = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.loginFacebook = loginFacebook;
exports.prepareFacebook = prepareFacebook;
exports.watchSocialLoginFacebook = watchSocialLoginFacebook;
exports.loginGoogle = loginGoogle;
exports.prepareGoogle = prepareGoogle;
exports.watchSocialLoginGoogle = watchSocialLoginGoogle;

var _simpleLoadScript = require('simple-load-script');

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [loginFacebook, prepareFacebook, watchSocialLoginFacebook, loginGoogle, prepareGoogle, watchSocialLoginGoogle].map(_regenerator2.default.mark); // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social


var promises = exports.promises = {
  fbLogin: function fbLogin(options) {
    return new _promise2.default(function (resolve, reject) {
      window.FB.login(function (response) {
        // istanbul ignore else
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject(response.status);
        }
      }, options);
    });
  },
  fbGetMe: function fbGetMe(options) {
    return new _promise2.default(function (resolve) {
      window.FB.api('/me', options, function (me) {
        return resolve(me);
      });
    });
  },
  loadGoogleAuth2: function loadGoogleAuth2() {
    return new _promise2.default(function (resolve) {
      window.gapi.load('auth2', resolve);
    });
  }
};

var appendFbRoot = exports.appendFbRoot = function appendFbRoot() {
  var fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);
};

var serviceAction = exports.serviceAction = function serviceAction(suffix, service) {
  return function (_ref) {
    var type = _ref.type,
        payload = _ref.payload;
    return type === 'SOCIAL_LOGIN_' + suffix && payload && payload.service === service;
  };
};

function loginFacebook() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? 'public_profile' : _ref2$scope,
      _ref2$fields = _ref2.fields,
      fields = _ref2$fields === undefined ? 'id,name' : _ref2$fields,
      options = (0, _objectWithoutProperties3.default)(_ref2, ['scope', 'fields']);
  var request, data, picture;
  return _regenerator2.default.wrap(function loginFacebook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          request = (0, _extends3.default)({ service: 'facebook', scope: scope, fields: fields }, options);
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(promises.fbLogin, (0, _extends3.default)({ scope: scope }, options));

        case 4:
          _context.next = 6;
          return (0, _effects.call)(promises.fbGetMe, { fields: fields });

        case 6:
          data = _context.sent;
          picture = 'https://graph.facebook.com/' + data.id + '/picture?type=normal';
          _context.next = 10;
          return (0, _effects.put)(actions.socialLoginSuccess((0, _extends3.default)({}, data, { picture: picture }), request));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return (0, _effects.put)(actions.socialLoginFailure(_context.t0, request));

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 12]]);
}

function prepareFacebook(_ref3) {
  var clientId = _ref3.clientId,
      _ref3$version = _ref3.version,
      version = _ref3$version === undefined ? 'v2.8' : _ref3$version,
      options = (0, _objectWithoutProperties3.default)(_ref3, ['clientId', 'version']);
  var request;
  return _regenerator2.default.wrap(function prepareFacebook$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          request = (0, _extends3.default)({ service: 'facebook', clientId: clientId, version: version }, options);
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(appendFbRoot);

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_simpleLoadScript2.default, '//connect.facebook.net/en_US/sdk.js');

        case 6:
          _context2.next = 8;
          return (0, _effects.call)([window.FB, window.FB.init], (0, _extends3.default)({ appId: clientId, version: version }, options));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 14;
          return (0, _effects.put)(actions.socialLoginFailure(_context2.t0, request));

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[1, 10]]);
}

function watchSocialLoginFacebook() {
  var _ref4, payload, _ref5, _payload;

  return _regenerator2.default.wrap(function watchSocialLoginFacebook$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.take)(serviceAction('PREPARE', 'facebook'));

        case 2:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          _context3.next = 6;
          return (0, _effects.call)(prepareFacebook, payload);

        case 6:
          if (!true) {
            _context3.next = 15;
            break;
          }

          _context3.next = 9;
          return (0, _effects.take)(serviceAction('REQUEST', 'facebook'));

        case 9:
          _ref5 = _context3.sent;
          _payload = _ref5.payload;
          _context3.next = 13;
          return (0, _effects.call)(loginFacebook, _payload);

        case 13:
          _context3.next = 6;
          break;

        case 15:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function loginGoogle() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6$scope = _ref6.scope,
      scope = _ref6$scope === undefined ? 'profile' : _ref6$scope,
      options = (0, _objectWithoutProperties3.default)(_ref6, ['scope']);
  var request, auth2, user, profile, name, picture;
  return _regenerator2.default.wrap(function loginGoogle$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          request = (0, _extends3.default)({ service: 'google', scope: scope }, options);
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(window.gapi.auth2.getAuthInstance);

        case 4:
          auth2 = _context4.sent;
          _context4.next = 7;
          return (0, _effects.call)([auth2, auth2.signIn], (0, _extends3.default)({ scope: scope }, options));

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return (0, _effects.call)([user, user.getBasicProfile]);

        case 10:
          profile = _context4.sent;
          _context4.next = 13;
          return (0, _effects.call)([profile, profile.getName]);

        case 13:
          name = _context4.sent;
          _context4.next = 16;
          return (0, _effects.call)([profile, profile.getImageUrl]);

        case 16:
          picture = _context4.sent;
          _context4.next = 19;
          return (0, _effects.put)(actions.socialLoginSuccess({ name: name, picture: picture }, request));

        case 19:
          _context4.next = 25;
          break;

        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4['catch'](1);
          _context4.next = 25;
          return (0, _effects.put)(actions.socialLoginFailure(_context4.t0, request));

        case 25:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[1, 21]]);
}

function prepareGoogle(_ref7) {
  var clientId = _ref7.clientId,
      options = (0, _objectWithoutProperties3.default)(_ref7, ['clientId']);
  var request;
  return _regenerator2.default.wrap(function prepareGoogle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          request = (0, _extends3.default)({ service: 'google', clientId: clientId }, options);
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _effects.call)(_simpleLoadScript2.default, '//apis.google.com/js/platform.js');

        case 4:
          _context5.next = 6;
          return (0, _effects.call)(promises.loadGoogleAuth2);

        case 6:
          _context5.next = 8;
          return (0, _effects.call)(window.gapi.auth2.init, (0, _extends3.default)({ client_id: clientId }, options));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](1);
          _context5.next = 14;
          return (0, _effects.put)(actions.socialLoginFailure(_context5.t0, request));

        case 14:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[1, 10]]);
}

function watchSocialLoginGoogle() {
  var _ref8, payload, _ref9, _payload2;

  return _regenerator2.default.wrap(function watchSocialLoginGoogle$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.take)(serviceAction('PREPARE', 'google'));

        case 2:
          _ref8 = _context6.sent;
          payload = _ref8.payload;
          _context6.next = 6;
          return (0, _effects.call)(prepareGoogle, payload);

        case 6:
          if (!true) {
            _context6.next = 15;
            break;
          }

          _context6.next = 9;
          return (0, _effects.take)(serviceAction('REQUEST', 'google'));

        case 9:
          _ref9 = _context6.sent;
          _payload2 = _ref9.payload;
          _context6.next = 13;
          return (0, _effects.call)(loginGoogle, _payload2);

        case 13:
          _context6.next = 6;
          break;

        case 15:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

var _default = _regenerator2.default.mark(function _default() {
  return _regenerator2.default.wrap(function _default$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.fork)(watchSocialLoginFacebook);

        case 2:
          _context7.next = 4;
          return (0, _effects.fork)(watchSocialLoginGoogle);

        case 4:
        case 'end':
          return _context7.stop();
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

  __REACT_HOT_LOADER__.register(promises, 'promises', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(appendFbRoot, 'appendFbRoot', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(serviceAction, 'serviceAction', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(loginFacebook, 'loginFacebook', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(prepareFacebook, 'prepareFacebook', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(watchSocialLoginFacebook, 'watchSocialLoginFacebook', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(loginGoogle, 'loginGoogle', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(prepareGoogle, 'prepareGoogle', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(watchSocialLoginGoogle, 'watchSocialLoginGoogle', 'src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/social/sagas.js');
}();

;