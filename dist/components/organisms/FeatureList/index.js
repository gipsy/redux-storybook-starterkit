'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _Feature = require('../../molecules/Feature');

var _Feature2 = _interopRequireDefault(_Feature);

var _Link = require('../../atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Heading = require('../../atoms/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = require('../../atoms/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = _noParser2.default.div.withConfig({
  displayName: 'FeatureList__Grid',
  componentId: 'ncc5x1-0'
})([['{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}'], [' > *{width:calc(50% - 2rem);}@media screen and (max-width:640px){'], [' > *{width:100%;}}']]);

var StyledHeading = (0, _noParser2.default)(_Heading2.default).withConfig({
  displayName: 'FeatureList__StyledHeading',
  componentId: 'ncc5x1-1'
})([['{text-align:center;}']]);

var Description = (0, _noParser2.default)(_Paragraph2.default).withConfig({
  displayName: 'FeatureList__Description',
  componentId: 'ncc5x1-2'
})([['{text-align:center;margin:2rem;}@media screen and (max-width:640px){'], ['{margin:1rem;}}']]);

var StyledFeature = (0, _noParser2.default)(_Feature2.default).withConfig({
  displayName: 'FeatureList__StyledFeature',
  componentId: 'ncc5x1-3'
})([['{margin:1rem;}@media screen and (max-width:640px){'], ['{margin:0;}}']]);

var FeatureList = function FeatureList(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);
  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      StyledHeading,
      null,
      'Basic stack'
    ),
    _react2.default.createElement(
      Description,
      null,
      'It includes everything necessary to build a tipical web app with focus on productivity and developer experience.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _Link2.default,
        { href: 'https://github.com/diegohaz/arc/wiki/Workflow' },
        'Learn more about the recomended workflow'
      )
    ),
    _react2.default.createElement(
      Grid,
      null,
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'react',
          link: 'https://facebook.github.io/react',
          title: 'React',
          code: '<MyComponent attr="value" />'
        },
        'The Facebook\'s JavaScript library for building user interfaces using components.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'react-router',
          link: 'https://github.com/ReactTraining/react-router',
          title: 'React Router',
          code: '<Route path="/sample-page" />'
        },
        'The most popular declarative routing library for React and React Native.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'webpack',
          link: 'https://webpack.github.io/',
          title: 'Webpack',
          code: 'npm run build'
        },
        'The awesome module bundler with ',
        _react2.default.createElement(
          _Link2.default,
          { href: 'https://webpack.github.io/docs/hot-module-replacement.html' },
          'Hot Module Replacement'
        ),
        ' enabled.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'jest',
          link: 'https://facebook.github.io/jest',
          title: 'Jest',
          code: 'npm run test'
        },
        'The great testing framework used by Facebook to test all their Javascript code.'
      )
    ),
    _react2.default.createElement(
      StyledHeading,
      null,
      'Optional features'
    ),
    _react2.default.createElement(
      Description,
      null,
      'Features separated into another branches so you can use them only if you need to.'
    ),
    _react2.default.createElement(
      Grid,
      null,
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'redux',
          link: 'https://github.com/diegohaz/arc/tree/redux',
          title: 'Redux',
          code: 'git clone -b redux https://github.com/diegohaz/arc my-app'
        },
        'The predictable state container for JavaScript apps.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'dist',
          link: 'https://github.com/diegohaz/arc/tree/redux-ssr',
          title: 'Server Side Rendering',
          code: 'git clone -b redux-ssr https://github.com/diegohaz/arc my-app'
        },
        'Write once and run on both server and client.'
      )
    )
  );
};

var _default = FeatureList;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Grid, 'Grid', 'src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(StyledHeading, 'StyledHeading', 'src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(Description, 'Description', 'src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(StyledFeature, 'StyledFeature', 'src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(FeatureList, 'FeatureList', 'src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/organisms/FeatureList/index.js');
}();

;