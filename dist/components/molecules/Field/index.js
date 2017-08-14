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

var _polished = require('polished');

var _Label = require('../../atoms/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Input = require('../../atoms/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Block = require('../../atoms/Block');

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = (0, _noParser2.default)(_Block2.default).withConfig({
  displayName: 'Field__Error',
  componentId: 's11en7sr-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';font-weight:600;color:', (0, _styledTheme.palette)({ danger: 1 }, 2), ';}@media (max-width:420px){'], ['{font-size:', (0, _polished.rem)('14px'), ';margin-top:', (0, _polished.rem)('10px'), ';}}@media (min-width:421px){'], ['{font-size:', (0, _polished.rem)('16px'), ';margin-top:', (0, _polished.rem)('15px'), ';}}']]);

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Field__Wrapper',
  componentId: 's11en7sr-1'
})([['@media (max-width:420px){'], ['{margin-bottom:', (0, _polished.rem)('20px'), ';}}@media (min-width:421px){'], ['{margin-bottom:', (0, _polished.rem)('25px'), ';}}'], [' input[type="checkbox"],'], [' input[type="radio"]{margin-right:0.5rem;}'], [' label{vertical-align:middle;}']]);

var Field = function Field(_ref) {
  var error = _ref.error,
      name = _ref.name,
      invalid = _ref.invalid,
      label = _ref.label,
      type = _ref.type,
      props = (0, _objectWithoutProperties3.default)(_ref, ['error', 'name', 'invalid', 'label', 'type']);

  var inputProps = (0, _extends3.default)({ id: name, name: name, type: type, invalid: invalid, 'aria-describedby': name + 'Error' }, props);
  var renderInputFirst = type === 'checkbox' || type === 'radio';
  return _react2.default.createElement(
    Wrapper,
    null,
    renderInputFirst && _react2.default.createElement(_Input2.default, inputProps),
    label && _react2.default.createElement(
      _Label2.default,
      { htmlFor: inputProps.id },
      label
    ),
    renderInputFirst || _react2.default.createElement(_Input2.default, inputProps),
    invalid && error && _react2.default.createElement(
      Error,
      { id: name + 'Error', role: 'alert', palette: 'danger' },
      error
    )
  );
};

Field.propTypes = {
  name: _propTypes2.default.string.isRequired,
  invalid: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  label: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Field.defaultProps = {
  type: 'text'
};

var _default = Field;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Error, 'Error', 'src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(Field, 'Field', 'src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/molecules/Field/index.js');
}();

;