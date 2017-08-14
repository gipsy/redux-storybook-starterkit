'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = _noParser2.default.label.withConfig({
  displayName: 'Label__Label',
  componentId: 's1cupmrt-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)('grayscale', 1), ';display:inline-block;}@media (max-width:420px){'], ['{font-size:', (0, _polished.rem)('18px'), ';line-height:', (0, _polished.rem)('18px'), ';margin-bottom:', (0, _polished.rem)('20px'), ';}}@media (min-width:421px){'], ['{font-size:', (0, _polished.rem)('20px'), ';line-height:', (0, _polished.rem)('22px'), ';margin-bottom:', (0, _polished.rem)('23px'), ';}}']]);

Label.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Label;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Label, 'Label', 'src/components/atoms/Label/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Label/index.js');
}();

;