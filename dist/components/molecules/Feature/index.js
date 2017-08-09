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

var _styledTools = require('styled-tools');

var _Icon = require('../../atoms/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Link = require('../../atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Paragraph = require('../../atoms/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Heading = require('../../atoms/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Badge = require('../../atoms/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { PreformattedText } from '~/src/components/atoms/PreformattedText'

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Feature__Wrapper',
  componentId: 's1mqiwnd-0'
})([['{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem;box-sizing:border-box;opacity:', (0, _styledTools.ifProp)('soon', 0.4, 1), ';}@media screen and (max-width:640px){'], ['{padding:0.5rem;}}']]);

var StyledIcon = (0, _noParser2.default)(_Icon2.default).withConfig({
  displayName: 'Feature__StyledIcon',
  componentId: 's1mqiwnd-1'
})([['{-webkit-flex:none;-ms-flex:none;flex:none;}@media screen and (max-width:640px){'], ['{width:32px;}}']]);

var Text = _noParser2.default.div.withConfig({
  displayName: 'Feature__Text',
  componentId: 's1mqiwnd-2'
})([['{margin-left:1rem;overflow:auto;}'], [' > :first-child{margin:0;}']]);

var StyledBadge = (0, _noParser2.default)(_Badge2.default).withConfig({
  displayName: 'Feature__StyledBadge',
  componentId: 's1mqiwnd-3'
})([['{position:absolute;top:1rem;right:1rem;}@media screen and (max-width:640px){'], ['{top:0.5rem;right:0.5rem;}}']]);

var Feature = function Feature(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      link = _ref.link,
      code = _ref.code,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['icon', 'title', 'link', 'code', 'children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    icon && _react2.default.createElement(StyledIcon, { icon: icon, width: 64 }),
    _react2.default.createElement(
      Text,
      null,
      _react2.default.createElement(
        _Heading2.default,
        { level: 2 },
        link ? _react2.default.createElement(
          _Link2.default,
          { href: link },
          title
        ) : title
      ),
      _react2.default.createElement(
        _Paragraph2.default,
        null,
        children
      )
    ),
    props.soon && _react2.default.createElement(
      StyledBadge,
      { palette: 'grayscale' },
      'soon'
    )
  );
};

Feature.propTypes = {
  title: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string,
  link: _propTypes2.default.string,
  soon: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  code: _propTypes2.default.node
};

var _default = Feature;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', 'src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', 'src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(StyledBadge, 'StyledBadge', 'src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(Feature, 'Feature', 'src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/molecules/Feature/index.js');
}();

;