'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responsiveMixin = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.truncate = truncate;

var _noParser = require('styled-components/no-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function truncate(width) {
  return '\n    width: ' + width + ';\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ';
}

//#TODO it's usage renders into style completely wrong
var responsiveMixin = exports.responsiveMixin = function responsiveMixin() {
  var sizes = {
    default: 99999,
    desktop: 992,
    tablet: 768,
    phone: 376
  };

  // Iterate through the sizes and create a media template
  var media = (0, _keys2.default)(sizes).reduce(function (acc, label) {
    acc[label] = function () {
      return (0, _noParser.css)([['@media (max-width:', sizes[label] / 16, 'em){'], ['{', _noParser.css.apply(undefined, arguments), ';}}']]);
    };
    return acc;
  }, {});

  return media;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(truncate, 'truncate', 'src/components/styled/style-utils.js');

  __REACT_HOT_LOADER__.register(responsiveMixin, 'responsiveMixin', 'src/components/styled/style-utils.js');
}();

;