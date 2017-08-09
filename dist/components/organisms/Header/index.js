'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

var _IconLink = require('../../molecules/IconLink');

var _IconLink2 = _interopRequireDefault(_IconLink);

var _PrimaryNavigation = require('../../molecules/PrimaryNavigation');

var _PrimaryNavigation2 = _interopRequireDefault(_PrimaryNavigation);

var _Block = require('../../atoms/Block');

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = (0, _noParser2.default)(_Block2.default).withConfig({
  displayName: 'Header__Wrapper',
  componentId: 's6247cy-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem;}@media screen and (max-width:640px){'], ['{padding:0.5rem;}}']]);

var InnerWrapper = _noParser2.default.div.withConfig({
  displayName: 'Header__InnerWrapper',
  componentId: 's6247cy-1'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;max-width:', (0, _styledTheme.size)('maxWidth'), ';}'], [' > :not(:first-child){margin-left:1rem;}']]);

var StyledPrimaryNavigation = (0, _noParser2.default)(_PrimaryNavigation2.default).withConfig({
  displayName: 'Header__StyledPrimaryNavigation',
  componentId: 's6247cy-2'
})([['{-webkit-flex:1;-ms-flex:1;flex:1;}']]);

var Header = function Header(props) {
  return _react2.default.createElement(
    Wrapper,
    (0, _extends3.default)({ opaque: true, reverse: true }, props),
    _react2.default.createElement(
      InnerWrapper,
      null,
      _react2.default.createElement(_IconLink2.default, { to: '/', icon: 'arc', height: 100 }),
      _react2.default.createElement(StyledPrimaryNavigation, { reverse: true })
    )
  );
};

var _default = Header;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(InnerWrapper, 'InnerWrapper', 'src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(StyledPrimaryNavigation, 'StyledPrimaryNavigation', 'src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', 'src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/organisms/Header/index.js');
}();

;