'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _styledTheme = require('styled-theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Organism__Wrapper',
  componentId: 'na63z3-0'
})([['{font-family:', (0, _styledTheme.font)('primary'), ';color:', (0, _styledTheme.palette)('grayscale', 0), ';}']]);

var Organism = function Organism(props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    'content'
  );
};

Organism.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Organism;
exports.default = _default;
module.exports = exports['default'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', 'src/components/organisms/Organism/index.js');

  __REACT_HOT_LOADER__.register(Organism, 'Organism', 'src/components/organisms/Organism/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/organisms/Organism/index.js');
}();

;