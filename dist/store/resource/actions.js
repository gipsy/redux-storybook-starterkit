'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var RESOURCE_CREATE_REQUEST = exports.RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST';
var RESOURCE_CREATE_SUCCESS = exports.RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS';
var RESOURCE_CREATE_FAILURE = exports.RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE';

var resourceCreateRequest = exports.resourceCreateRequest = function resourceCreateRequest(resource, data) {
  return {
    type: RESOURCE_CREATE_REQUEST,
    payload: { data: data },
    meta: {
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: resource + 'Create'
    }
  };
};

var resourceCreateSuccess = exports.resourceCreateSuccess = function resourceCreateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_CREATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
      entities: resource
    }
  };
};

var resourceCreateFailure = exports.resourceCreateFailure = function resourceCreateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_CREATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: thunk
    }
  };
};

var RESOURCE_LIST_READ_REQUEST = exports.RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST';
var RESOURCE_LIST_READ_SUCCESS = exports.RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS';
var RESOURCE_LIST_READ_FAILURE = exports.RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE';

var resourceListReadRequest = exports.resourceListReadRequest = function resourceListReadRequest(resource, params) {
  return {
    type: RESOURCE_LIST_READ_REQUEST,
    payload: { params: params },
    meta: {
      resource: resource,
      thunk: resource + 'ListRead'
    }
  };
};

var resourceListReadSuccess = exports.resourceListReadSuccess = function resourceListReadSuccess(resource, list, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_SUCCESS,
    payload: list,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceListReadFailure = exports.resourceListReadFailure = function resourceListReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DETAIL_READ_REQUEST = exports.RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST';
var RESOURCE_DETAIL_READ_SUCCESS = exports.RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS';
var RESOURCE_DETAIL_READ_FAILURE = exports.RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE';

var resourceDetailReadRequest = exports.resourceDetailReadRequest = function resourceDetailReadRequest(resource, needle) {
  return {
    type: RESOURCE_DETAIL_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'DetailRead'
    }
  };
};

var resourceDetailReadSuccess = exports.resourceDetailReadSuccess = function resourceDetailReadSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceDetailReadFailure = exports.resourceDetailReadFailure = function resourceDetailReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_UPDATE_REQUEST = exports.RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST';
var RESOURCE_UPDATE_SUCCESS = exports.RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS';
var RESOURCE_UPDATE_FAILURE = exports.RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE';

var resourceUpdateRequest = exports.resourceUpdateRequest = function resourceUpdateRequest(resource, needle, data) {
  return {
    type: RESOURCE_UPDATE_REQUEST,
    payload: { needle: needle, data: data },
    meta: {
      resource: resource,
      thunk: resource + 'Update'
    }
  };
};

var resourceUpdateSuccess = exports.resourceUpdateSuccess = function resourceUpdateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_UPDATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceUpdateFailure = exports.resourceUpdateFailure = function resourceUpdateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_UPDATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DELETE_REQUEST = exports.RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST';
var RESOURCE_DELETE_SUCCESS = exports.RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS';
var RESOURCE_DELETE_FAILURE = exports.RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE';

var resourceDeleteRequest = exports.resourceDeleteRequest = function resourceDeleteRequest(resource, needle) {
  return {
    type: RESOURCE_DELETE_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'Delete'
    }
  };
};

var resourceDeleteSuccess = exports.resourceDeleteSuccess = function resourceDeleteSuccess(resource, request, thunk) {
  return {
    type: RESOURCE_DELETE_SUCCESS,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var resourceDeleteFailure = exports.resourceDeleteFailure = function resourceDeleteFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DELETE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_REQUEST, 'RESOURCE_CREATE_REQUEST', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_SUCCESS, 'RESOURCE_CREATE_SUCCESS', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_FAILURE, 'RESOURCE_CREATE_FAILURE', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateRequest, 'resourceCreateRequest', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateSuccess, 'resourceCreateSuccess', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateFailure, 'resourceCreateFailure', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_REQUEST, 'RESOURCE_LIST_READ_REQUEST', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_SUCCESS, 'RESOURCE_LIST_READ_SUCCESS', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_FAILURE, 'RESOURCE_LIST_READ_FAILURE', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadRequest, 'resourceListReadRequest', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadSuccess, 'resourceListReadSuccess', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadFailure, 'resourceListReadFailure', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_REQUEST, 'RESOURCE_DETAIL_READ_REQUEST', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_SUCCESS, 'RESOURCE_DETAIL_READ_SUCCESS', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_FAILURE, 'RESOURCE_DETAIL_READ_FAILURE', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadRequest, 'resourceDetailReadRequest', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadSuccess, 'resourceDetailReadSuccess', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadFailure, 'resourceDetailReadFailure', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_REQUEST, 'RESOURCE_UPDATE_REQUEST', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_SUCCESS, 'RESOURCE_UPDATE_SUCCESS', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_FAILURE, 'RESOURCE_UPDATE_FAILURE', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateRequest, 'resourceUpdateRequest', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateSuccess, 'resourceUpdateSuccess', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateFailure, 'resourceUpdateFailure', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_REQUEST, 'RESOURCE_DELETE_REQUEST', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_SUCCESS, 'RESOURCE_DELETE_SUCCESS', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_FAILURE, 'RESOURCE_DELETE_FAILURE', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteRequest, 'resourceDeleteRequest', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteSuccess, 'resourceDeleteSuccess', 'src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteFailure, 'resourceDeleteFailure', 'src/store/resource/actions.js');
}();

;