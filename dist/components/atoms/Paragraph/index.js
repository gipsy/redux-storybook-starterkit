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

var Paragraph = _noParser2.default.p.withConfig({
  displayName: 'Paragraph__Paragraph',
  componentId: 's1gkc3ph-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)('grayscale', 0), ';font-size:1rem;line-height:1.3;margin:1rem 0 0;}']]);

Paragraph.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Paragraph;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Paragraph, 'Paragraph', 'src/components/atoms/Paragraph/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Paragraph/index.js');
}();

;