'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.createResource = createResource;
exports.readResourceList = readResourceList;
exports.readResourceDetail = readResourceDetail;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;
exports.watchResourceCreateRequest = watchResourceCreateRequest;
exports.watchResourceListReadRequest = watchResourceListReadRequest;
exports.watchResourceDetailReadRequest = watchResourceDetailReadRequest;
exports.watchResourceUpdateRequest = watchResourceUpdateRequest;
exports.watchResourceDeleteRequest = watchResourceDeleteRequest;

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [createResource, readResourceList, readResourceDetail, updateResource, deleteResource, watchResourceCreateRequest, watchResourceListReadRequest, watchResourceDetailReadRequest, watchResourceUpdateRequest, watchResourceDeleteRequest].map(_regenerator2.default.mark); // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource


function createResource(api, _ref, _ref2) {
  var data = _ref.data;
  var resource = _ref2.resource,
      thunk = _ref2.thunk;
  var detail;
  return _regenerator2.default.wrap(function createResource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)([api, api.post], '/' + resource, data);

        case 3:
          detail = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(actions.resourceCreateSuccess(resource, detail, { data: data }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)(actions.resourceCreateFailure(resource, _context.t0, { data: data }, thunk));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 8]]);
}

function readResourceList(api, _ref3, _ref4) {
  var params = _ref3.params;
  var resource = _ref4.resource,
      thunk = _ref4.thunk;
  var list;
  return _regenerator2.default.wrap(function readResourceList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)([api, api.get], '/' + resource, { params: params });

        case 3:
          list = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)(actions.resourceListReadSuccess(resource, list, { params: params }, thunk));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return (0, _effects.put)(actions.resourceListReadFailure(resource, _context2.t0, { params: params }, thunk));

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 8]]);
}

function readResourceDetail(api, _ref5, _ref6) {
  var needle = _ref5.needle;
  var resource = _ref6.resource,
      thunk = _ref6.thunk;
  var detail;
  return _regenerator2.default.wrap(function readResourceDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)([api, api.get], '/' + resource + '/' + needle);

        case 3:
          detail = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)(actions.resourceDetailReadSuccess(resource, detail, { needle: needle }, thunk));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return (0, _effects.put)(actions.resourceDetailReadFailure(resource, _context3.t0, { needle: needle }, thunk));

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 8]]);
}

function updateResource(api, _ref7, _ref8) {
  var needle = _ref7.needle,
      data = _ref7.data;
  var resource = _ref8.resource,
      thunk = _ref8.thunk;
  var detail;
  return _regenerator2.default.wrap(function updateResource$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)([api, api.put], '/' + resource + '/' + needle, data);

        case 3:
          detail = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)(actions.resourceUpdateSuccess(resource, detail, { needle: needle, data: data }, thunk));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return (0, _effects.put)(actions.resourceUpdateFailure(resource, _context4.t0, { needle: needle, data: data }, thunk));

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[0, 8]]);
}

function deleteResource(api, _ref9, _ref10) {
  var needle = _ref9.needle;
  var resource = _ref10.resource,
      thunk = _ref10.thunk;
  return _regenerator2.default.wrap(function deleteResource$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _effects.call)([api, api.delete], '/' + resource + '/' + needle);

        case 3:
          _context5.next = 5;
          return (0, _effects.put)(actions.resourceDeleteSuccess(resource, { needle: needle }, thunk));

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 11;
          return (0, _effects.put)(actions.resourceDeleteFailure(resource, _context5.t0, { needle: needle }, thunk));

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[0, 7]]);
}

function watchResourceCreateRequest(api) {
  var _ref11, payload, meta;

  return _regenerator2.default.wrap(function watchResourceCreateRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!true) {
            _context6.next = 10;
            break;
          }

          _context6.next = 3;
          return (0, _effects.take)(actions.RESOURCE_CREATE_REQUEST);

        case 3:
          _ref11 = _context6.sent;
          payload = _ref11.payload;
          meta = _ref11.meta;
          _context6.next = 8;
          return (0, _effects.call)(createResource, api, payload, meta);

        case 8:
          _context6.next = 0;
          break;

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function watchResourceListReadRequest(api) {
  var _ref12, payload, meta;

  return _regenerator2.default.wrap(function watchResourceListReadRequest$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (!true) {
            _context7.next = 10;
            break;
          }

          _context7.next = 3;
          return (0, _effects.take)(actions.RESOURCE_LIST_READ_REQUEST);

        case 3:
          _ref12 = _context7.sent;
          payload = _ref12.payload;
          meta = _ref12.meta;
          _context7.next = 8;
          return (0, _effects.call)(readResourceList, api, payload, meta);

        case 8:
          _context7.next = 0;
          break;

        case 10:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function watchResourceDetailReadRequest(api) {
  var _ref13, payload, meta;

  return _regenerator2.default.wrap(function watchResourceDetailReadRequest$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (!true) {
            _context8.next = 10;
            break;
          }

          _context8.next = 3;
          return (0, _effects.take)(actions.RESOURCE_DETAIL_READ_REQUEST);

        case 3:
          _ref13 = _context8.sent;
          payload = _ref13.payload;
          meta = _ref13.meta;
          _context8.next = 8;
          return (0, _effects.call)(readResourceDetail, api, payload, meta);

        case 8:
          _context8.next = 0;
          break;

        case 10:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function watchResourceUpdateRequest(api) {
  var _ref14, payload, meta;

  return _regenerator2.default.wrap(function watchResourceUpdateRequest$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (!true) {
            _context9.next = 10;
            break;
          }

          _context9.next = 3;
          return (0, _effects.take)(actions.RESOURCE_UPDATE_REQUEST);

        case 3:
          _ref14 = _context9.sent;
          payload = _ref14.payload;
          meta = _ref14.meta;
          _context9.next = 8;
          return (0, _effects.call)(updateResource, api, payload, meta);

        case 8:
          _context9.next = 0;
          break;

        case 10:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[8], this);
}

function watchResourceDeleteRequest(api) {
  var _ref15, payload, meta;

  return _regenerator2.default.wrap(function watchResourceDeleteRequest$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          if (!true) {
            _context10.next = 10;
            break;
          }

          _context10.next = 3;
          return (0, _effects.take)(actions.RESOURCE_DELETE_REQUEST);

        case 3:
          _ref15 = _context10.sent;
          payload = _ref15.payload;
          meta = _ref15.meta;
          _context10.next = 8;
          return (0, _effects.call)(deleteResource, api, payload, meta);

        case 8:
          _context10.next = 0;
          break;

        case 10:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked[9], this);
}

var _default = _regenerator2.default.mark(function _default(_ref16) {
  var api = _ref16.api;
  return _regenerator2.default.wrap(function _default$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.fork)(watchResourceCreateRequest, api);

        case 2:
          _context11.next = 4;
          return (0, _effects.fork)(watchResourceListReadRequest, api);

        case 4:
          _context11.next = 6;
          return (0, _effects.fork)(watchResourceDetailReadRequest, api);

        case 6:
          _context11.next = 8;
          return (0, _effects.fork)(watchResourceUpdateRequest, api);

        case 8:
          _context11.next = 10;
          return (0, _effects.fork)(watchResourceDeleteRequest, api);

        case 10:
        case 'end':
          return _context11.stop();
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

  __REACT_HOT_LOADER__.register(createResource, 'createResource', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceList, 'readResourceList', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceDetail, 'readResourceDetail', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(updateResource, 'updateResource', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(deleteResource, 'deleteResource', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceCreateRequest, 'watchResourceCreateRequest', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceListReadRequest, 'watchResourceListReadRequest', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDetailReadRequest, 'watchResourceDetailReadRequest', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceUpdateRequest, 'watchResourceUpdateRequest', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDeleteRequest, 'watchResourceDeleteRequest', 'src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/store/resource/sagas.js');
}();

;