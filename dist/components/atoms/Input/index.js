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

var _styledComponentsBreakpoint = require('styled-components-breakpoint');

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _styledTheme = require('styled-theme');

var _styledTools = require('styled-tools');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = (0, _noParser.css)([['{font-family:', (0, _styledTheme.font)('primary'), ';font-weight:600;display:block;width:100%;margin:0;box-sizing:border-box;color:', (0, _styledTheme.palette)('grayscale', 0), ';background-color:', (0, _styledTheme.palette)('grayscale', 0, true), ';border:2px solid ', (0, _styledTools.ifProp)('invalid', (0, _styledTheme.palette)('danger', 2), (0, _styledTheme.palette)('grayscale', 3)), ';}'], ['::-webkit-input-placeholder{color:', (0, _styledTheme.palette)('grayscale', 3, true), ';}'], ['::-moz-placeholder{color:', (0, _styledTheme.palette)('grayscale', 3, true), ';}'], [':-ms-input-placeholder{color:', (0, _styledTheme.palette)('grayscale', 3, true), ';}'], [':-moz-placeholder{color:', (0, _styledTheme.palette)('grayscale', 3, true), ';}'], ['[type=checkbox],'], ['[type=radio]{display:inline-block;border:0;border-radius:0;width:auto;height:auto;margin:0 0.2rem 0 0;}@media (max-width:420px){'], ['{font-size:', (0, _polished.rem)('14px'), ';height:', (0, _styledTools.ifProp)({ type: 'textarea' }, 'auto', (0, _polished.rem)('50px')), ';padding-top:', (0, _styledTools.ifProp)({ type: 'textarea' }, (0, _polished.rem)('16px'), (0, _polished.rem)('16px')), ';padding-bottom:', (0, _styledTools.ifProp)({ type: 'textarea' }, (0, _polished.rem)('16px'), (0, _polished.rem)('16px')), ';padding-left:', (0, _styledTools.ifProp)({ type: 'textarea' }, (0, _polished.rem)('25px'), (0, _polished.rem)('25px')), ';border-radius:1px;}}@media (min-width:421px){'], ['{font-size:', (0, _polished.rem)('18px'), ';height:', (0, _styledTools.ifProp)({ type: 'textarea' }, 'auto', (0, _polished.rem)('60px')), ';padding-top:', (0, _styledTools.ifProp)({ type: 'textarea' }, (0, _polished.rem)('19px'), (0, _polished.rem)('19px')), ';padding-bottom:', (0, _styledTools.ifProp)({ type: 'textarea' }, (0, _polished.rem)('19px'), (0, _polished.rem)('19px')), ';padding-left:', (0, _styledTools.ifProp)({ type: 'textarea' }, (0, _polished.rem)('30.5px'), (0, _polished.rem)('30.5px')), ';border-radius:3px;}}']]);

var StyledTextarea = _noParser2.default.textarea.withConfig({
  displayName: 'Input__StyledTextarea',
  componentId: 's17zul1l-0'
})([['{', styles, ';}']]);
var StyledSelect = _noParser2.default.select.withConfig({
  displayName: 'Input__StyledSelect',
  componentId: 's17zul1l-1'
})([['{', styles, ';padding-top:0 !important;padding-bottom:0 !important;}']]);
var StyledInput = _noParser2.default.input.withConfig({
  displayName: 'Input__StyledInput',
  componentId: 's17zul1l-2'
})([['{', styles, ';}']]);

var Input = function Input(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  if (props.type === 'textarea') {
    return _react2.default.createElement(StyledTextarea, props);
  } else if (props.type === 'select') {
    return _react2.default.createElement(StyledSelect, props);
  }
  return _react2.default.createElement(StyledInput, (0, _extends3.default)({ className: props.invalid ? "is--invalid" : null }, props));
};

Input.propTypes = {
  type: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  invalid: _propTypes2.default.bool
};

Input.defaultProps = {
  type: 'text',
  height: 50
};

var _default = Input;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', 'src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledTextarea, 'StyledTextarea', 'src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledSelect, 'StyledSelect', 'src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledInput, 'StyledInput', 'src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(Input, 'Input', 'src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Input/index.js');
}();

;