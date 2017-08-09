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

var _Field = require('../../molecules/Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReduxField = function ReduxField(_ref) {
  var meta = _ref.meta,
      input = _ref.input,
      props = (0, _objectWithoutProperties3.default)(_ref, ['meta', 'input']);

  return _react2.default.createElement(_Field2.default, (0, _extends3.default)({}, props, input, { invalid: meta.touched && !!meta.error, error: meta.error }));
};

ReduxField.propTypes = {
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool,
    error: _propTypes2.default.string
  }).isRequired,
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired
};

var _default = ReduxField;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ReduxField, 'ReduxField', 'src/components/organisms/ReduxField/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/organisms/ReduxField/index.js');
}();

;