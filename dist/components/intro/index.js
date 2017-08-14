"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function (_React$Component) {
  (0, _inherits3.default)(Intro, _React$Component);

  function Intro() {
    (0, _classCallCheck3.default)(this, Intro);
    return (0, _possibleConstructorReturn3.default)(this, (Intro.__proto__ || (0, _getPrototypeOf2.default)(Intro)).apply(this, arguments));
  }

  (0, _createClass3.default)(Intro, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "App-intro" },
        _react2.default.createElement(
          "h1",
          null,
          "Quick start"
        ),
        _react2.default.createElement(
          "p",
          null,
          "At the heart of this project the desire to collect the best practices of application development via ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/storybooks/react-storybook" },
            "React-Storybook"
          ),
          "environment. This project is transparent and friendly for developers. You do not need to eject anything. Therefore you can easily add your own configuration and extend it using any packages."
        ),
        _react2.default.createElement(
          "p",
          null,
          "It contains the ",
          _react2.default.createElement(
            "span",
            null,
            "fully-charged"
          ),
          " setup of the Storybook with pre-installed ",
          _react2.default.createElement(
            "span",
            null,
            "plugins"
          ),
          ", configuration, quick examples, and tips."
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Instal the project"
        ),
        _react2.default.createElement(
          "code",
          null,
          "git clone https://github.com/sm-react/react-theming.git",
          _react2.default.createElement("br", null),
          "cd react-theming",
          _react2.default.createElement("br", null),
          "npm i",
          _react2.default.createElement("br", null),
          "npm start",
          _react2.default.createElement("br", null)
        ),
        _react2.default.createElement(
          "p",
          null,
          "Press ",
          _react2.default.createElement(
            "code",
            null,
            "Ctrl-Shft-F"
          ),
          " to exit from ",
          _react2.default.createElement(
            "code",
            null,
            "Full screen"
          ),
          " mode"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Let's select another theme for this page. Do it via dropdown list at the bottom panel. Out of the box there are three themes: 'Light', 'Dark' and 'Gray'. Check out them."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Okay, now let's look at the panel on the left. In fact, our application consists of two components:",
          _react2.default.createElement(
            "code",
            null,
            "src/Header.jsx"
          ),
          " and ",
          _react2.default.createElement(
            "code",
            null,
            "src/Intro.jsx"
          ),
          ". Selecting the appropriate items in the left-side list you switch to an isolated view of the component. It's how ",
          _react2.default.createElement(
            "span",
            null,
            "React Storybook"
          ),
          "works - allows you 'step-by-step' to create and works with React components. You can improve the quality of development by applying different addons to Storybook. Most of them is already pre-installed in this project. You will find excellent ",
          _react2.default.createElement(
            "a",
            { href: "https://getstorybook.io/docs/" },
            "documentation and examples"
          ),
          " on the React Storybook website."
        ),
        _react2.default.createElement(
          "p",
          null,
          "A short guide for other Storybook Addons will be here..."
        ),
        _react2.default.createElement(
          "h2",
          null,
          "ThemeProvider:"
        ),
        _react2.default.createElement(
          "code",
          null,
          "<ThemeProvider>",
          _react2.default.createElement("br", null),
          "\xA0\xA0",
          "<YourThemedComponentOrPlainHTML />",
          _react2.default.createElement("br", null),
          "</ThemeProvider>"
        ),
        _react2.default.createElement(
          "p",
          null,
          "A generic theme provider and (very) simple CSS styler"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "What is Theme?"
        ),
        _react2.default.createElement(
          "p",
          null,
          "It's just plain javascript object, typically with two levels of nesting."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Primer:"
        ),
        _react2.default.createElement(
          "code",
          null,
          'const greyTheme = {',
          _react2.default.createElement("br", null),
          "\xA0\xA0themeName: 'Grey Theme',",
          _react2.default.createElement("br", null),
          "\xA0\xA0themeFile: 'greyTheme.json',",
          _react2.default.createElement("br", null),
          "\xA0\xA0palette: {",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0primary1Color: '#00bcd4',",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0alternateTextColor: '#4a4a4a',",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0canvasColor: '#616161',",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0textColor: '#bdbdbd',",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0secondaryTextColor: 'rgba(255, 255, 255, 0.54)',",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0disabledColor: '#757575',",
          _react2.default.createElement("br", null),
          "\xA0\xA0\xA0\xA0accent1Color: '#607d8b',",
          _react2.default.createElement("br", null),
          "\xA0\xA0},",
          _react2.default.createElement("br", null),
          "};",
          _react2.default.createElement("br", null)
        ),
        _react2.default.createElement(
          "h2",
          null,
          "What is CSSrule?"
        ),
        _react2.default.createElement(
          "p",
          null,
          "a string containing CSS rules. Typically it's a template string with passed theme props:"
        ),
        _react2.default.createElement(
          "code",
          null,
          ".themed div {",
          _react2.default.createElement("br", null),
          "\xA0\xA0color: ${palette.textColor};",
          _react2.default.createElement("br", null),
          "\xA0\xA0background-color: ${palette.canvasColor};",
          _react2.default.createElement("br", null),
          "}",
          _react2.default.createElement("br", null),
          _react2.default.createElement("br", null),
          ".themed a {",
          _react2.default.createElement("br", null),
          "\xA0\xA0color: ${palette.primary1Color};",
          _react2.default.createElement("br", null),
          "}",
          _react2.default.createElement("br", null)
        ),
        _react2.default.createElement(
          "p",
          null,
          "if you use it without any props ",
          _react2.default.createElement(
            "span",
            null,
            "inside"
          ),
          " the ",
          _react2.default.createElement(
            "span",
            null,
            "MuiThemeProvider"
          ),
          ", it will provide CSS style for your html elements based on the current theme"
        ),
        _react2.default.createElement(
          "p",
          null,
          "if you use it without any props ",
          _react2.default.createElement(
            "span",
            null,
            "outside"
          ),
          " the ",
          _react2.default.createElement(
            "span",
            null,
            "MuiThemeProvider"
          ),
          ", it will provide CSS style for your html elements based on the default theme and pass this theme to your components via context same way as MuiThemeProvider."
        ),
        _react2.default.createElement(
          "p",
          null,
          "See project's ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/sm-react/react-theme-provider" },
            "repo"
          )
        ),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null)
      );
    }
  }]);
  return Intro;
}(_react2.default.Component); /* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */

var _default = Intro;
exports.default = _default;
module.exports = exports["default"];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Intro, "Intro", "src/components/intro/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/intro/index.js");
}();

;