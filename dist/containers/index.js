'use strict';

// https://github.com/diegohaz/arc/wiki/Containers
var req = require.context('.', false, /^((?!index).)*\.js$/);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'src/containers/index.js');
}();

;