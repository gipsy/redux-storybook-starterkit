'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

var _Paragraph = require('../../atoms/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Link = require('../../atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Icon = require('../../atoms/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Footer__Wrapper',
  componentId: 'fschxx-0'
})([['{background-color:', (0, _styledTheme.palette)('grayscale', 1, true), ';padding:2rem;}']]);

var Credits = (0, _noParser2.default)(_Paragraph2.default).withConfig({
  displayName: 'Footer__Credits',
  componentId: 'fschxx-1'
})([['{vertical-align:center;text-align:center;margin:0;}']]);

var Footer = function Footer(props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Credits,
      null,
      'Made with ',
      _react2.default.createElement(_Icon2.default, { icon: 'heart' }),
      ' by ',
      _react2.default.createElement(
        _Link2.default,
        { href: 'https://github.com/gipsy' },
        'Taras'
      )
    )
  );
};

var _default = Footer;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(Credits, 'Credits', 'src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', 'src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/organisms/Footer/index.js');
}();

;