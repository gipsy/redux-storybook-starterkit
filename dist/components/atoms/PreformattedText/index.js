'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

var _styledTools = require('styled-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreformattedText = _noParser2.default.pre.withConfig({
  displayName: 'PreformattedText__PreformattedText',
  componentId: 's174p9ge-0'
})([['{display:', (0, _styledTools.ifProp)('block', 'block', 'inline'), ';font-family:', (0, _styledTheme.font)('pre'), ';color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';background-color:', (0, _styledTheme.palette)('grayscale', 1, true), ';padding:', (0, _styledTools.ifProp)('block', '1em', '0 0.5em'), ';white-space:', (0, _styledTools.ifProp)('wrap', 'pre-wrap', 'nowrap'), ';overflow:auto;line-height:150%;}']]);

PreformattedText.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  wrap: _propTypes2.default.bool
};

PreformattedText.defaultProps = {
  palette: 'grayscale'
};

var _default = PreformattedText;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreformattedText, 'PreformattedText', 'src/components/atoms/PreformattedText/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/PreformattedText/index.js');
}();

;