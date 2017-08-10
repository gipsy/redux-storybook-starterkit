'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageTemplate = require('components/templates/PageTemplate');

var _PageTemplate2 = _interopRequireDefault(_PageTemplate);

var _Header = require('components/organisms/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('components/organisms/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Atomic-Design
var HomePage = function HomePage() {
  return _react2.default.createElement(_PageTemplate2.default, { header: _react2.default.createElement(_Header2.default, null), footer: _react2.default.createElement(_Footer2.default, null) });
};

var _default = HomePage;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', 'src/components/pages/HomePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/pages/HomePage/index.js');
}();

;