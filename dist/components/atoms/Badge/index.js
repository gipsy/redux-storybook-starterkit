'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = _noParser2.default.span.withConfig({
  displayName: 'Badge__Badge',
  componentId: 's1ymi0ry-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';font-size:0.75rem;line-height:1.5em;padding:0.1em 0.3em;color:', (0, _styledTheme.palette)('grayscale', 0, true), ';background-color:', (0, _styledTheme.palette)(1), ';border-radius:0.16667em;}']]);

Badge.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Badge.defaultProps = {
  palette: 'primary'
};

var _default = Badge;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Badge, 'Badge', 'src/components/atoms/Badge/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Badge/index.js');
}();

;