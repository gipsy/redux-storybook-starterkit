'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = function fontSize(_ref) {
  var level = _ref.level;
  return 0.75 + 1 * (1 / level) + 'rem';
};

var styles = (0, _noParser.css)([['{font-family:', (0, _styledTheme.font)('primary'), ';font-weight:500;font-size:', fontSize, ';margin:0;margin-top:0.85714em;margin-bottom:0.57142em;color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';}']]);

var Heading = (0, _noParser2.default)(function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      reverse = _ref2.reverse,
      palette = _ref2.palette,
      theme = _ref2.theme,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['level', 'children', 'reverse', 'palette', 'theme']);
  return _react2.default.createElement('h' + level, props, children);
}).withConfig({
  displayName: 'Heading__Heading',
  componentId: 'ashfmo-0'
})([['{', styles, ';}']]);

Heading.propTypes = {
  level: _propTypes2.default.number,
  children: _propTypes2.default.node,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale'
};

var _default = Heading;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', 'src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', 'src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(Heading, 'Heading', 'src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Heading/index.js');
}();

;