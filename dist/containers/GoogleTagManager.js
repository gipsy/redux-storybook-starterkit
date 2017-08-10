'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('../store/actions');

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleTagManager = function (_Component) {
  (0, _inherits3.default)(GoogleTagManager, _Component);

  function GoogleTagManager() {
    (0, _classCallCheck3.default)(this, GoogleTagManager);
    return (0, _possibleConstructorReturn3.default)(this, (GoogleTagManager.__proto__ || (0, _getPrototypeOf2.default)(GoogleTagManager)).apply(this, arguments));
  }

  (0, _createClass3.default)(GoogleTagManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.startGTM();
    }
  }, {
    key: 'render',
    value: function render() {
      var iframe = '\n      <iframe\n        src="//www.googletagmanager.com/ns.html?id=' + _config.gtmId + '"\n        height="0"\n        width="0"\n        style="display:none;visibility:hidden">\n      </iframe>\n    ';
      return _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: iframe } });
    }
  }]);
  return GoogleTagManager;
}(_react.Component); /* eslint-disable react/no-danger */


GoogleTagManager.propTypes = {
  startGTM: _propTypes2.default.func.isRequired
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startGTM: function startGTM() {
      return dispatch((0, _actions.gtmStart)(_config.gtmId));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(GoogleTagManager);

exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GoogleTagManager, 'GoogleTagManager', 'src/containers/GoogleTagManager.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/containers/GoogleTagManager.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/containers/GoogleTagManager.js');
}();

;