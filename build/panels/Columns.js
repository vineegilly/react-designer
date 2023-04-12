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

var Columns = function Columns(_ref) {
  var _ref$showIf = _ref.showIf,
      showIf = _ref$showIf === undefined ? true : _ref$showIf,
      props = _objectWithoutProperties(_ref, ['showIf']);

  if (!showIf) {
    return _react2.default.createElement('div', { style: _styles2.default.empty });
  }
  return _react2.default.createElement(
    'div',
    { style: _styles2.default.columns },
    _react2.default.createElement(
      'div',
      { className: 'formlabel', style: _styles2.default.panelTitle },
      props.label,
      ' ',
      props.isrequired && _react2.default.createElement(
        'font',
        { color: 'red' },
        '*'
      )
    ),
    props.children
  );
};

exports.default = (0, _radium2.default)(Columns);