'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.breakpoint = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['(max-width: ', 'em)'], ['(max-width: ', 'em)']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['(min-width: ', 'em)'], ['(min-width: ', 'em)']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['print'], ['print']); // https://github.com/diegohaz/arc/wiki/Styling


var _webfontloader = require('webfontloader');

var _webfontloader2 = _interopRequireDefault(_webfontloader);

var _composer = require('styled-theme/composer');

var _styledMediaQueries = require('styled-media-queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_webfontloader2.default.load({
  google: {
    families: ['Lato:100,100i,300,300i,400,400i,700,700i,900,900i', 'sans-serif']
  }
});

// Totally optional: define some re-usable breakpoint numbers.
var breakpoint = exports.breakpoint = {
  medium: 666,
  large: 888,
  wide: 999,
  extraWide: 1111
};

var media = exports.media = {
  smallOnly: (0, _styledMediaQueries.mediaQuery)(_templateObject, (breakpoint.medium - 1) / 16),
  medium: (0, _styledMediaQueries.mediaQuery)(_templateObject2, breakpoint.medium / 16),
  large: (0, _styledMediaQueries.mediaQuery)(_templateObject2, breakpoint.large / 16),
  wide: (0, _styledMediaQueries.mediaQuery)(_templateObject2, breakpoint.wide / 16),
  extraWide: (0, _styledMediaQueries.mediaQuery)(_templateObject2, breakpoint.extraWide / 16),
  print: (0, _styledMediaQueries.mediaQuery)(_templateObject3)
};

var theme = {};

theme.palette = {
  primary: ['#f6a623', '#d68a0c', '#f5c677', '#fee2b4', '#fceed6'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#ee828e', '#ef828e', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fefefe', '#eee'],
  grayscale: ['#333333', '#4a4a4a', '#616161', '#e2e2e2', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

theme.fonts = {
  primary: 'Lato, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

var _default = theme;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(breakpoint, 'breakpoint', 'src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(media, 'media', 'src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(theme, 'theme', 'src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/themes/default.js');
}();

;