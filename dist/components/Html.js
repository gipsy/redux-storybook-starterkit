'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    (0, _extends3.default)({ lang: 'en' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
}; /* eslint-disable react/no-danger */


Html.propTypes = {
  styles: _propTypes2.default.node.isRequired,
  assets: _propTypes2.default.shape({
    css: _propTypes2.default.array.isRequired,
    js: _propTypes2.default.array.isRequired
  }).isRequired,
  state: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired
};

var _default = Html;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', 'src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Html.js');
}();

;