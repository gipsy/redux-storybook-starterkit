'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

var _Link = require('../../atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = _noParser2.default.nav.withConfig({
  displayName: 'PrimaryNavigation__Nav',
  componentId: 's17rfleh-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;}'], [' > :not(:first-child){margin-left:1rem;}'], [' a{font-weight:300;color:', (0, _styledTheme.palette)('grayscale', 2), ';font-size:1.25rem;}'], [' a.active{color:', (0, _styledTheme.palette)('grayscale', 0), ';}']]);

var PrimaryNavigation = function PrimaryNavigation(props) {
  return _react2.default.createElement(
    Nav,
    props,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _Link2.default,
        { to: '/', exact: true, activeClassName: 'active' },
        'Home'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _Link2.default,
        { to: '/sample-page', activeClassName: 'active' },
        'Sample page'
      )
    )
  );
};

PrimaryNavigation.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = PrimaryNavigation;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Nav, 'Nav', 'src/components/molecules/PrimaryNavigation/index.js');

  __REACT_HOT_LOADER__.register(PrimaryNavigation, 'PrimaryNavigation', 'src/components/molecules/PrimaryNavigation/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/molecules/PrimaryNavigation/index.js');
}();

;