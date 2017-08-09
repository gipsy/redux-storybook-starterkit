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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'GenericTemplate__Wrapper',
  componentId: 'n2lan4-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:3.75rem;min-height:100vh;box-sizing:border-box;}']]);

var Content = _noParser2.default.section.withConfig({
  displayName: 'GenericTemplate__Content',
  componentId: 'n2lan4-1'
})([['{width:100%;box-sizing:border-box;margin:2rem auto;max-width:920px;}']]);

var GenericTemplate = function GenericTemplate(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Content,
      null,
      children
    )
  );
};

GenericTemplate.propTypes = {
  children: _propTypes2.default.any.isRequired
};

var _default = GenericTemplate;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/templates/GenericTemplate/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', 'src/components/templates/GenericTemplate/index.js');

  __REACT_HOT_LOADER__.register(GenericTemplate, 'GenericTemplate', 'src/components/templates/GenericTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/templates/GenericTemplate/index.js');
}();

;