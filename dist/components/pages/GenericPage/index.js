'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericPage = function GenericPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Generic Page'
  );
};

var _default = GenericPage;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GenericPage, 'GenericPage', 'src/components/pages/GenericPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/pages/GenericPage/index.js');
}();

;