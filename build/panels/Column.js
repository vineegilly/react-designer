'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Column = function Column(_ref) {
  var _ref$showIf = _ref.showIf,
      showIf = _ref$showIf === undefined ? true : _ref$showIf,
      props = _objectWithoutProperties(_ref, ['showIf']);

  if (!showIf) {
    return _react2.default.createElement('div', { style: _styles2.default.empty });
  }

  var handleOnchange = function handleOnchange(val) {
    var result = val;
    if (val !== '') {
      if (props.type === "number") {
        if (isNaN(val) === false) {
          result = parseInt(val);
        } else {
          result = 0;
        }
      }
    }
    props.onChange(result);
  };

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.column, props.style] },
    props.children || _react2.default.createElement('input', { style: [_styles2.default.input, _styles2.default.integerInput, props.inputStyle], value: props.value,
      onChange: function onChange(e) {
        return handleOnchange(e.target.value);
      } }),
    props.label && _react2.default.createElement(
      'div',
      { className: 'helpertext', style: _styles2.default.inputHelper },
      props.label
    )
  );
};

exports.default = (0, _radium2.default)(Column);