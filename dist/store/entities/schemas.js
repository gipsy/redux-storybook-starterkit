'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts = undefined;

var _normalizr = require('normalizr');

var posts = exports.posts = new _normalizr.schema.Entity('posts'); // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(posts, 'posts', 'src/store/entities/schemas.js');
}();

;