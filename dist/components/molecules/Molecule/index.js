'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Molecule__Wrapper',
  componentId: 's1sk5p2x-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)('grayscale', 0), ';}']]);

var Molecule = function Molecule(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    children
  );
};

Molecule.propTypes = {
  reverse: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var _default = Molecule;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/molecules/Molecule/index.js');

  __REACT_HOT_LOADER__.register(Molecule, 'Molecule', 'src/components/molecules/Molecule/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/molecules/Molecule/index.js');
}();

;