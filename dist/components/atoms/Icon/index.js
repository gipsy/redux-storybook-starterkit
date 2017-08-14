'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

var _styledTools = require('styled-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = function fontSize(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var size = width || height;
  return size ? size / 16 + 'rem' : '1.25em';
}; // https://github.com/diegohaz/arc/wiki/Example-components#icon


var Wrapper = _noParser2.default.span.withConfig({
  displayName: 'Icon__Wrapper',
  componentId: 'ifod8b-0'
})([['{display:inline-block;font-size:', fontSize, ';color:', (0, _styledTools.ifProp)('palette', (0, _styledTheme.palette)({ grayscale: 0 }, 1), 'currentcolor'), ';width:1em;height:1em;margin:0.1em;box-sizing:border-box;}'], [' > svg{width:100%;height:100%;fill:currentcolor;stroke:currentcolor;}']]);

var Icon = function Icon(_ref2) {
  var icon = _ref2.icon,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['icon']);

  var svg = require('!raw-loader!./icons/' + icon + '.svg');
  return _react2.default.createElement(Wrapper, (0, _extends3.default)({}, props, { dangerouslySetInnerHTML: { __html: svg } }));
};

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

var _default = Icon;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', 'src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Icon, 'Icon', 'src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Icon/index.js');
}();

;