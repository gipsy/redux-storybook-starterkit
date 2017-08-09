'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var ENTITIES_RECEIVE = exports.ENTITIES_RECEIVE = 'ENTITIES_RECEIVE';

var entitiesReceive = exports.entitiesReceive = function entitiesReceive(entities) {
  return {
    type: ENTITIES_RECEIVE,
    payload: entities
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ENTITIES_RECEIVE, 'ENTITIES_RECEIVE', 'src/store/entities/actions.js');

  __REACT_HOT_LOADER__.register(entitiesReceive, 'entitiesReceive', 'src/store/entities/actions.js');
}();

;