'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _noParser = require('styled-components/no-parser');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _HomePage = require('./pages/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _SamplePage = require('./pages/SamplePage');

var _SamplePage2 = _interopRequireDefault(_SamplePage);

var _NotFoundPage = require('./pages/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _GoogleTagManager = require('../containers/GoogleTagManager');

var _GoogleTagManager2 = _interopRequireDefault(_GoogleTagManager);

var _default2 = require('./themes/default');

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _noParser.injectGlobal)([['body{margin:0;}']]);

// https://github.com/diegohaz/arc/wiki/Styling


var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      { titleTemplate: 'GetDinghy - %s' },
      _react2.default.createElement(
        'title',
        null,
        'Atomic React'
      ),
      _react2.default.createElement('meta', { charSet: 'UTF-8' }),
      _react2.default.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'GetDinghy' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    _react2.default.createElement(_GoogleTagManager2.default, null),
    _react2.default.createElement(
      _noParser.ThemeProvider,
      { theme: _default3.default },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _HomePage2.default, exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/sample-page', component: _SamplePage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _NotFoundPage2.default })
      )
    )
  );
};

var _default = App;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/App.js');
}();

;