'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _Button = require('../../atoms/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerButton = _noParser2.default.div.withConfig({
  displayName: 'UserButton__InnerButton',
  componentId: 'cxiaby-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}']]);

var Image = _noParser2.default.img.withConfig({
  displayName: 'UserButton__Image',
  componentId: 'cxiaby-1'
})([['{margin-right:0.5rem;}']]);

var UserButton = function UserButton(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      props = (0, _objectWithoutProperties3.default)(_ref, ['user', 'onLogin', 'onLogout']);

  return _react2.default.createElement(
    'div',
    null,
    user && _react2.default.createElement(
      _Button2.default,
      (0, _extends3.default)({}, props, { onClick: onLogout }),
      _react2.default.createElement(
        InnerButton,
        null,
        _react2.default.createElement(Image, { src: user.picture, width: 20, height: 20 }),
        'Sign out'
      )
    ),
    !user && _react2.default.createElement(
      _Button2.default,
      (0, _extends3.default)({}, props, { onClick: onLogin }),
      'Sign in'
    )
  );
};

UserButton.propTypes = {
  user: _propTypes2.default.shape({
    picture: _propTypes2.default.string.isRequired
  }),
  onLogin: _propTypes2.default.func.isRequired,
  onLogout: _propTypes2.default.func.isRequired
};

var _default = UserButton;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InnerButton, 'InnerButton', 'src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(Image, 'Image', 'src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(UserButton, 'UserButton', 'src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/organisms/UserButton/index.js');
}();

;