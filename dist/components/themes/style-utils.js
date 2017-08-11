'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = undefined;

var _noParser = require('styled-components/no-parser');

var media = exports.media = {
  handheld: function handheld() {
    return (0, _noParser.css)([['@media (max-width:420px){'], ['{', _noParser.css.apply(undefined, arguments), ';}}']]);
  },
  tablet: function tablet() {
    return (0, _noParser.css)([['@media (min-width:421px){'], ['{', _noParser.css.apply(undefined, arguments), ';}}']]);
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(media, 'media', 'src/components/themes/style-utils.js');
}();

;