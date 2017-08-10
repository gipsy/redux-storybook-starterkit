'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _composer = require('styled-theme/composer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {}; // https://github.com/diegohaz/arc/wiki/Styling


theme.palette = {
  primary: ['#f6a623', '#d68a0c', '#f5c677', '#fee2b4', '#fceed6'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#ef828e', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fefefe', '#eee'],
  grayscale: ['#212121', '#4a4a4a', '#616161', '#e2e2e2', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

theme.fonts = {
  primary: 'OpenSans, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

var sizes = {
  desktop: 992,
  phone: 376

  // Iterate through the sizes and create a media template
};var media = (0, _keys2.default)(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return css([['@media (max-width:', sizes[label] / 16, 'em){'], ['{', css.apply(undefined, arguments), ';}}']]);
  };
  return acc;
}, {});

// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;
//
//   #<{(| Now we have our methods on media and can use them instead of raw queries |)}>#
//   ${media.desktop`background: #fff;`}
//   ${media.phone`background: #000;`}
// `;

var _default = theme;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', 'src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(sizes, 'sizes', 'src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(media, 'media', 'src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/themes/default.js');
}();

;