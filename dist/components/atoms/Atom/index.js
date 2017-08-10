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

var Atom = _noParser2.default.span.withConfig({
  displayName: 'Atom__Atom',
  componentId: 's2tt14q-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)({ grayscale: 0 }, 1), ';}']]);

Atom.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Atom.defaultProps = {
  palette: 'grayscale'
};

var _default = Atom;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Atom, 'Atom', 'src/components/atoms/Atom/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/atoms/Atom/index.js');
}();

;