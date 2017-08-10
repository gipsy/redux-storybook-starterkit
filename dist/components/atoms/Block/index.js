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

var Block = _noParser2.default.div.withConfig({
  displayName: 'Block__Block',
  componentId: 's1ow7xdi-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';background-color:', (0, _styledTools.ifProp)('opaque', (0, _styledTheme.palette)(0, true), 'transparent'), ';color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';}']]);

Block.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  opaque: _propTypes2.default.bool
};

Block.defaultProps = {
  palette: 'grayscale'
};

var _default = Block;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Block, 'Block', 'src/components/atoms/Block/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Block/index.js');
}();

;