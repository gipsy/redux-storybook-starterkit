'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'PageTemplate__Wrapper',
  componentId: 's1w5g671-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:3.75rem;min-height:100vh;box-sizing:border-box;}@media screen and (max-width:640px){'], ['{padding-top:3.25rem;}}']]);

var Header = _noParser2.default.header.withConfig({
  displayName: 'PageTemplate__Header',
  componentId: 's1w5g671-1'
})([['{position:fixed;top:0;width:100%;z-index:999;}']]);

var Hero = _noParser2.default.section.withConfig({
  displayName: 'PageTemplate__Hero',
  componentId: 's1w5g671-2'
})([]);

var Content = _noParser2.default.section.withConfig({
  displayName: 'PageTemplate__Content',
  componentId: 's1w5g671-3'
})([['{width:100%;box-sizing:border-box;margin:2rem auto;max-width:', (0, _styledTheme.size)('maxWidth'), ';}']]);

var Footer = _noParser2.default.footer.withConfig({
  displayName: 'PageTemplate__Footer',
  componentId: 's1w5g671-4'
})([['{margin-top:auto;}']]);

var PageTemplate = function PageTemplate(_ref) {
  var header = _ref.header,
      hero = _ref.hero,
      children = _ref.children,
      footer = _ref.footer,
      props = (0, _objectWithoutProperties3.default)(_ref, ['header', 'hero', 'children', 'footer']);

  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Header,
      null,
      header
    ),
    hero && _react2.default.createElement(
      Hero,
      null,
      hero
    ),
    _react2.default.createElement(
      Content,
      null,
      children
    ),
    _react2.default.createElement(
      Footer,
      null,
      footer
    )
  );
};

PageTemplate.propTypes = {
  header: _propTypes2.default.node.isRequired,
  hero: _propTypes2.default.node,
  footer: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.any.isRequired
};

var _default = PageTemplate;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', 'src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Hero, 'Hero', 'src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', 'src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', 'src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(PageTemplate, 'PageTemplate', 'src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/templates/PageTemplate/index.js');
}();

;