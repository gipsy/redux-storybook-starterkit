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

var _NavLink = require('react-router-dom/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = (0, _noParser.css)([['{font-family:', (0, _styledTheme.font)('primary'), ';text-decoration:none;font-weight:500;color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';}'], [':hover{text-decoration:underline;}']]);

var StyledNavLink = (0, _noParser2.default)(function (_ref) {
  var theme = _ref.theme,
      reverse = _ref.reverse,
      palette = _ref.palette,
      props = (0, _objectWithoutProperties3.default)(_ref, ['theme', 'reverse', 'palette']);
  return _react2.default.createElement(_NavLink2.default, props);
}).withConfig({
  displayName: 'Link__StyledNavLink',
  componentId: 't9uq8z-0'
})([['{', styles, ';}']]);
var Anchor = _noParser2.default.a.withConfig({
  displayName: 'Link__Anchor',
  componentId: 't9uq8z-1'
})([['{', styles, ';}']]);

var Link = function Link(_ref2) {
  var props = (0, _objectWithoutProperties3.default)(_ref2, []);

  if (props.to) {
    return _react2.default.createElement(StyledNavLink, props);
  }
  return _react2.default.createElement(Anchor, props);
};

Link.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  to: _propTypes2.default.string
};

Link.defaultProps = {
  palette: 'primary'
};

var _default = Link;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', 'src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(StyledNavLink, 'StyledNavLink', 'src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(Anchor, 'Anchor', 'src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(Link, 'Link', 'src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Link/index.js');
}();

;