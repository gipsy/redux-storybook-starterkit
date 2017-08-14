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

var _Icon = require('../../atoms/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Link = require('../../atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height ? height / 3 / 16 + 'rem' : '0.75em';
};

var margin = function margin(_ref2) {
  var hasText = _ref2.hasText,
      right = _ref2.right;

  if (hasText) {
    return right ? '0 0 0 0.25em' : '0 0.25em 0 0';
  }
  return 0;
};

var StyledIcon = (0, _noParser2.default)(_Icon2.default).withConfig({
  displayName: 'IconLink__StyledIcon',
  componentId: 's14osjwd-0'
})([['{font-size:', fontSize, ';margin:', margin, ';}@media screen and (max-width:420px){'], ['{margin:', function (_ref3) {
  var responsive = _ref3.responsive;
  return responsive && 0;
}, ';}}']]);

var Text = _noParser2.default.span.withConfig({
  displayName: 'IconLink__Text',
  componentId: 's14osjwd-1'
})([['@media screen and (max-width:420px){'], ['{display:', function (_ref4) {
  var responsive = _ref4.responsive;
  return responsive && 'none';
}, ';}}']]);

var IconLink = function IconLink(_ref5) {
  var height = _ref5.height,
      icon = _ref5.icon,
      right = _ref5.right,
      responsive = _ref5.responsive,
      children = _ref5.children,
      props = (0, _objectWithoutProperties3.default)(_ref5, ['height', 'icon', 'right', 'responsive', 'children']);

  var iconElement = _react2.default.createElement(StyledIcon, {
    height: height,
    icon: icon,
    hasText: !!children,
    right: right,
    responsive: responsive,
    palette: props.palette,
    reverse: props.reverse
  });
  return _react2.default.createElement(
    _Link2.default,
    props,
    right || iconElement,
    _react2.default.createElement(
      Text,
      { responsive: responsive },
      children
    ),
    right && iconElement
  );
};

IconLink.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var _default = IconLink;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', 'src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(margin, 'margin', 'src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', 'src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', 'src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(IconLink, 'IconLink', 'src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/molecules/IconLink/index.js');
}();

;