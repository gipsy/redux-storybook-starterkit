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

var _Link = require('react-router-dom/Link');

var _Link2 = _interopRequireDefault(_Link);

var _styledTheme = require('styled-theme');

var _styledTools = require('styled-tools');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 40 + 'rem';
};

var backgroundColor = function backgroundColor(_ref2) {
  var transparent = _ref2.transparent,
      disabled = _ref2.disabled;
  return transparent ? 'transparent' : disabled ? (0, _styledTheme.palette)('grayscale', 3, true) : (0, _styledTheme.palette)(0);
};

var foregroundColor = function foregroundColor(_ref3) {
  var transparent = _ref3.transparent,
      disabled = _ref3.disabled;
  return transparent ? (0, _styledTheme.palette)(disabled ? 2 : 1) : (0, _styledTheme.palette)('grayscale', 0, true);
};

var hoverBackgroundColor = function hoverBackgroundColor(_ref4) {
  var disabled = _ref4.disabled,
      transparent = _ref4.transparent;
  return !disabled && !transparent && (0, _styledTheme.palette)(1);
};
var hoverForegroundColor = function hoverForegroundColor(_ref5) {
  var disabled = _ref5.disabled,
      transparent = _ref5.transparent;
  return !disabled && transparent && (0, _styledTheme.palette)(0);
};

var styles = (0, _noParser.css)([['{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-family:', (0, _styledTheme.font)('primary'), ';-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;white-space:nowrap;font-size:14px;border:0.0625em solid ', (0, _styledTools.ifProp)('transparent', 'currentcolor', 'transparent'), ';height:2.5em;width:147px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-decoration:none;cursor:', (0, _styledTools.ifProp)('disabled', 'default', 'pointer'), ';-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 1em;border-radius:0.125em;box-sizing:border-box;pointer-events:', (0, _styledTools.ifProp)('disabled', 'none', 'auto'), ';-webkit-transition:background-color 250ms ease-out,color 250ms ease-out,border-color 250ms ease-out;transition:background-color 250ms ease-out,color 250ms ease-out,border-color 250ms ease-out;background-color:', backgroundColor, ';color:', foregroundColor, ';}'], [':hover,'], [':focus,'], [':active{background-color:', hoverBackgroundColor, ';color:', hoverForegroundColor, ';}'], [':active{background-color:', backgroundColor, ';}'], [':focus{outline:none;}']]);

var StyledLink = (0, _noParser2.default)(function (_ref6) {
  var disabled = _ref6.disabled,
      transparent = _ref6.transparent,
      reverse = _ref6.reverse,
      palette = _ref6.palette,
      height = _ref6.height,
      theme = _ref6.theme,
      props = (0, _objectWithoutProperties3.default)(_ref6, ['disabled', 'transparent', 'reverse', 'palette', 'height', 'theme']);
  return _react2.default.createElement(_Link2.default, props);
}).withConfig({
  displayName: 'Button__StyledLink',
  componentId: 's1w4l3od-0'
})([['{', styles, ';}']]);
var Anchor = _noParser2.default.a.withConfig({
  displayName: 'Button__Anchor',
  componentId: 's1w4l3od-1'
})([['{', styles, ';}']]);
var StyledButton = _noParser2.default.button.withConfig({
  displayName: 'Button__StyledButton',
  componentId: 's1w4l3od-2'
})([['{', styles, ';}']]);

var Button = function Button(_ref7) {
  var type = _ref7.type,
      label = _ref7.label,
      props = (0, _objectWithoutProperties3.default)(_ref7, ['type', 'label']);

  if (props.to) {
    return _react2.default.createElement(
      StyledLink,
      props,
      label
    );
  } else if (props.href) {
    return _react2.default.createElement(
      Anchor,
      props,
      label
    );
  }
  return _react2.default.createElement(
    StyledButton,
    (0, _extends3.default)({}, props, { type: type }),
    label
  );
};

Button.propTypes = {
  /**
    Label for the button.
  */
  label: _propTypes2.default.string.isRequired,
  /**
    State for the button.
  */
  disabled: _propTypes2.default.bool,
  palette: _propTypes2.default.string,
  transparent: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  type: _propTypes2.default.string,
  to: _propTypes2.default.string,
  href: _propTypes2.default.string
};

Button.defaultProps = {
  label: 'Button label',
  palette: 'primary',
  type: 'button',
  height: 50
};

var _default = Button;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(backgroundColor, 'backgroundColor', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(foregroundColor, 'foregroundColor', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(hoverBackgroundColor, 'hoverBackgroundColor', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(hoverForegroundColor, 'hoverForegroundColor', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(StyledLink, 'StyledLink', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(Anchor, 'Anchor', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(StyledButton, 'StyledButton', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(Button, 'Button', 'src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Button/index.js');
}();

;