'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactColor = require('react-color');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorInput = function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorInput.__proto__ || Object.getPrototypeOf(ColorInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.toggleVisibility = function (event) {
      if (event.preventDefault) {
        event.preventDefault();
      }

      var show = _this.state.show;

      _this.setState({
        show: !show
      });
    }, _this.handleChange = function (color) {
      var _color$rgb = color.rgb,
          r = _color$rgb.r,
          g = _color$rgb.g,
          b = _color$rgb.b,
          a = _color$rgb.a;

      _this.props.onChange('rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')');
    }, _this.handleClose = function (event) {
      if (event.preventDefault) {
        event.preventDefault();
      }

      _this.setState({
        show: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorInput, [{
    key: 'render',
    value: function render() {
      var show = this.state.show;
      var value = this.props.value;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: '#',
            style: _styles2.default.colorInput,
            onClick: this.toggleVisibility.bind(this) },
          _react2.default.createElement('span', { style: _extends({}, _styles2.default.color, { backgroundColor: value }) })
        ),
        show && _react2.default.createElement(
          'div',
          { style: _styles2.default.colorPopover },
          _react2.default.createElement('div', { style: _styles2.default.colorCover, onClick: this.handleClose }),
          _react2.default.createElement(_reactColor.ChromePicker, {
            color: value,
            onChange: this.handleChange
          })
        )
      );
    }
  }]);

  return ColorInput;
}(_react.Component);

exports.default = ColorInput;