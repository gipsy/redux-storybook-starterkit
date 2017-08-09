'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PageTemplate = require('../../templates/PageTemplate');

var _PageTemplate2 = _interopRequireDefault(_PageTemplate);

var _Header = require('../../organisms/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../../organisms/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Heading = require('../../atoms/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var staticContext = _ref.staticContext;

  if (staticContext) {
    // eslint-disable-next-line no-param-reassign
    staticContext.status = 404;
  }

  return _react2.default.createElement(
    _PageTemplate2.default,
    { header: _react2.default.createElement(_Header2.default, null), footer: _react2.default.createElement(_Footer2.default, null) },
    _react2.default.createElement(
      _Heading2.default,
      null,
      '404 Not Found'
    )
  );
};

NotFoundPage.propTypes = {
  staticContext: _propTypes2.default.object
};

var _default = NotFoundPage;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFoundPage, 'NotFoundPage', 'src/components/pages/NotFoundPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/pages/NotFoundPage/index.js');
}();

;