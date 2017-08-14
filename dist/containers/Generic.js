'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _selectors = require('store/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericContainer = function GenericContainer(_ref) {
  var loading = _ref.loading;
  return _react2.default.createElement('div', { className: loading ? 'loading' : '' });
};

GenericContainer.propTypes = {
  loading: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: _selectors.fromAsync.isPending(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(GenericContainer);

exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GenericContainer, 'GenericContainer', 'src/containers/Generic.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/containers/Generic.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/containers/Generic.js');
}();

;