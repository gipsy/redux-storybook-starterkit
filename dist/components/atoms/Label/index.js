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

var Label = _noParser2.default.label.withConfig({
  displayName: 'Label__Label',
  componentId: 's1lk4w0r-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)('grayscale', 1), ';font-size:1.25rem;line-height:2em;}']]);

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