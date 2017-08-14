'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidator = exports.match = exports.oneOf = exports.integer = exports.maxLength = exports.minLength = exports.required = exports.url = exports.email = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isEmail = require('validator/lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isInt = require('validator/lib/isInt');

var _isInt2 = _interopRequireDefault(_isInt);

var _isIn = require('validator/lib/isIn');

var _isIn2 = _interopRequireDefault(_isIn);

var _isURL = require('validator/lib/isURL');

var _isURL2 = _interopRequireDefault(_isURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

var email = exports.email = function email(value) {
  return !isEmpty(value) && !(0, _isEmail2.default)(value) && 'Invalid email address';
};

var url = exports.url = function url(value) {
  return !isEmpty(value) && !(0, _isURL2.default)(value) && 'Invalid URL';
};

var required = exports.required = function required(value) {
  return isEmpty(value) && 'Required field';
};

var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return !isEmpty(value) && value.length < min && 'Must be at least ' + min + ' characters';
  };
};

var maxLength = exports.maxLength = function maxLength(max) {
  return function (value) {
    return !isEmpty(value) && value.length > max && 'Must be no more than ' + max + ' characters';
  };
};

var integer = exports.integer = function integer(value) {
  return !(0, _isInt2.default)(value) && 'Must be an integer';
};

var oneOf = exports.oneOf = function oneOf(values) {
  return function (value) {
    return !(0, _isIn2.default)(value, values) && 'Must be one of: ' + values.join(', ');
  };
};

var match = exports.match = function match(field) {
  return function (value, data) {
    return data && value !== data[field] && 'Must match';
  };
};

var createValidator = exports.createValidator = function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    (0, _keys2.default)(rules).forEach(function (key) {
      var rule = join([].concat(rules[key]));
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isEmpty, 'isEmpty', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(join, 'join', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(email, 'email', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(url, 'url', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(required, 'required', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(minLength, 'minLength', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(maxLength, 'maxLength', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(integer, 'integer', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(match, 'match', 'src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(createValidator, 'createValidator', 'src/services/validation/index.js');
}();

;