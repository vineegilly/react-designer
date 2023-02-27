'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactHotkeys = require('react-hotkeys');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _InsertMenu = require('./panels/InsertMenu');

var _InsertMenu2 = _interopRequireDefault(_InsertMenu);

var _SVGRenderer = require('./SVGRenderer');

var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);

var _Handler = require('./Handler');

var _Handler2 = _interopRequireDefault(_Handler);

var _constants = require('./constants');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _objects = require('./objects');

var _PanelList = require('./panels/PanelList');

var _PanelList2 = _interopRequireDefault(_PanelList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Designer = function (_Component) {
  _inherits(Designer, _Component);

  function Designer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Designer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Designer.__proto__ || Object.getPrototypeOf(Designer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mode: _constants.modes.FREE,
      handler: {
        top: 200,
        left: 200,
        width: 50,
        height: 50,
        rotate: 0
      },
      currentObjectIndex: null,
      selectedObjectIndex: null,
      accessName: null,
      accessId: null,
      selectedTool: null
    }, _this.keyMap = {
      'removeObject': ['del', 'backspace'],
      'moveLeft': ['left', 'shift+left'],
      'moveRight': ['right', 'shift+right'],
      'moveUp': ['up', 'shift+up'],
      'moveDown': ['down', 'shift+down'],
      'closePath': ['enter']
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Designer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.objectRefs = {};
    }
  }, {
    key: 'showHandler',
    value: function showHandler(index) {
      var mode = this.state.mode;
      var objects = this.props.objects;

      var object = objects[index];

      if (mode !== _constants.modes.FREE) {
        return;
      }

      this.updateHandler(index, object);
      this.setState({
        currentObjectIndex: index,
        showHandler: true
      });
    }
  }, {
    key: 'hideHandler',
    value: function hideHandler() {
      var mode = this.state.mode;

      if (mode === _constants.modes.FREE) {
        this.setState({
          showHandler: false
        });
      }
    }
  }, {
    key: 'getStartPointBundle',
    value: function getStartPointBundle(event, object) {
      var currentObjectIndex = this.state.currentObjectIndex;
      var objects = this.props.objects;

      var mouse = this.getMouseCoords(event);
      object = object || objects[currentObjectIndex];
      return {
        clientX: mouse.x,
        clientY: mouse.y,
        objectX: object.x,
        objectY: object.y,
        width: object.width,
        height: object.height,
        rotate: object.rotate
      };
    }
  }, {
    key: 'startDrag',
    value: function startDrag(mode, event) {
      var currentObjectIndex = this.state.currentObjectIndex;

      this.setState({
        mode: mode,
        startPoint: this.getStartPointBundle(event),
        selectedObjectIndex: currentObjectIndex
      });
    }
  }, {
    key: 'resetSelection',
    value: function resetSelection() {
      this.setState({
        selectedObjectIndex: null
      });
    }
  }, {
    key: 'newObject',
    value: function newObject(event) {
      var _state = this.state,
          mode = _state.mode,
          selectedTool = _state.selectedTool;


      this.resetSelection(event);

      if (mode !== _constants.modes.DRAW) {
        return;
      }

      var _getObjectComponent = this.getObjectComponent(selectedTool),
          meta = _getObjectComponent.meta;

      var mouse = this.getMouseCoords(event);

      var _props = this.props,
          objects = _props.objects,
          onUpdate = _props.onUpdate;

      var object = _extends({}, meta.initial, {
        type: selectedTool,
        x: mouse.x,
        y: mouse.y
      });

      onUpdate([].concat(_toConsumableArray(objects), [object]));

      this.setState({
        currentObjectIndex: objects.length,
        selectedObjectIndex: objects.length,
        startPoint: this.getStartPointBundle(event, object),
        mode: meta.editor ? _constants.modes.EDIT_OBJECT : _constants.modes.SCALE,
        selectedTool: null
      });
    }
  }, {
    key: 'updatePath',
    value: function updatePath(object) {
      var path = object.path;

      var diffX = object.x - object.moveX;
      var diffY = object.y - object.moveY;

      var newPath = path.map(function (_ref2) {
        var x1 = _ref2.x1,
            y1 = _ref2.y1,
            x2 = _ref2.x2,
            y2 = _ref2.y2,
            x = _ref2.x,
            y = _ref2.y;
        return {
          x1: diffX + x1,
          y1: diffY + y1,
          x2: diffX + x2,
          y2: diffY + y2,
          x: diffX + x,
          y: diffY + y
        };
      });

      return _extends({}, object, {
        path: newPath,
        moveX: object.x,
        moveY: object.y
      });
    }
  }, {
    key: 'updateObject',
    value: function updateObject(objectIndex, changes, updatePath) {
      var _this2 = this;

      var _props2 = this.props,
          objects = _props2.objects,
          onUpdate = _props2.onUpdate;

      onUpdate(objects.map(function (object, index) {
        if (index === objectIndex) {
          var newObject = _extends({}, object, changes);
          return updatePath ? _this2.updatePath(newObject) : newObject;
        } else {
          return object;
        }
      }));
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var parent = this.svgElement.getBoundingClientRect();

      var _getCanvas = this.getCanvas(),
          canvasWidth = _getCanvas.canvasWidth,
          canvasHeight = _getCanvas.canvasHeight;

      return {
        x: parent.left,
        y: parent.top,
        width: canvasWidth,
        height: canvasHeight
      };
    }
  }, {
    key: 'applyOffset',
    value: function applyOffset(bundle) {
      var offset = this.getOffset();
      return _extends({}, bundle, {
        x: bundle.x - offset.x,
        y: bundle.y - offset.y
      });
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(index, object) {
      var target = this.objectRefs[index];
      var bbox = target.getBoundingClientRect();

      var _getCanvas2 = this.getCanvas(),
          canvasOffsetX = _getCanvas2.canvasOffsetX,
          canvasOffsetY = _getCanvas2.canvasOffsetY;

      var handler = _extends({}, this.state.handler, {
        width: object.width || bbox.width,
        height: object.height || bbox.height,
        top: object.y + canvasOffsetY,
        left: object.x + canvasOffsetX,
        rotate: object.rotate
      });

      if (!object.width) {
        var offset = this.getOffset();
        handler = _extends({}, handler, {
          left: bbox.left - offset.x,
          top: bbox.top - offset.y
        });
      }

      this.setState({
        handler: handler
      });
    }
  }, {
    key: 'snapCoordinates',
    value: function snapCoordinates(_ref3) {
      var x = _ref3.x,
          y = _ref3.y;
      var snapToGrid = this.props.snapToGrid;

      return {
        x: x - x % snapToGrid,
        y: y - y % snapToGrid
      };
    }
  }, {
    key: 'getMouseCoords',
    value: function getMouseCoords(_ref4) {
      var clientX = _ref4.clientX,
          clientY = _ref4.clientY;

      var coords = this.applyOffset({
        x: clientX,
        y: clientY
      });

      return this.snapCoordinates(coords);
    }
  }, {
    key: 'onItemClick',
    value: function onItemClick(event) {
      var currentObjectIndex = this.state.currentObjectIndex;
      var objects = this.props.objects;

      var object = objects[currentObjectIndex];
      if (this.props.onObjectSelect) {
        this.props.onObjectSelect(object);
      }
    }
  }, {
    key: 'onDrag',
    value: function onDrag(event) {
      var _map;

      var _state2 = this.state,
          currentObjectIndex = _state2.currentObjectIndex,
          startPoint = _state2.startPoint,
          mode = _state2.mode;
      var objects = this.props.objects;

      var object = objects[currentObjectIndex];
      var mouse = this.getMouseCoords(event);

      var scale = actions.scale,
          rotate = actions.rotate,
          drag = actions.drag;


      var map = (_map = {}, _defineProperty(_map, _constants.modes.SCALE, scale), _defineProperty(_map, _constants.modes.ROTATE, rotate), _defineProperty(_map, _constants.modes.DRAG, drag), _map);

      var action = map[mode];

      if (action) {
        var newObject = action({
          object: object,
          startPoint: startPoint,
          mouse: mouse,
          objectIndex: currentObjectIndex,
          objectRefs: this.objectRefs
        });

        this.updateObject(currentObjectIndex, newObject);
        this.updateHandler(currentObjectIndex, newObject);
      }

      if (currentObjectIndex !== null) {
        this.detectOverlappedObjects(event);
      }
    }
  }, {
    key: 'detectOverlappedObjects',
    value: function detectOverlappedObjects(event) {
      var _this3 = this;

      var currentObjectIndex = this.state.currentObjectIndex;

      var mouse = this.getMouseCoords(event);

      var refs = this.objectRefs,
          keys = Object.keys(refs),
          offset = this.getOffset();

      var currentRect = refs[currentObjectIndex].getBoundingClientRect();

      keys.filter(function (object, index) {
        return index !== currentObjectIndex;
      }).forEach(function (key) {
        var rect = refs[key].getBoundingClientRect();
        var left = rect.left,
            top = rect.top,
            width = rect.width,
            height = rect.height;


        left -= offset.x;
        top -= offset.y;

        var isOverlapped = mouse.x > left && mouse.x < left + width && mouse.y > top && mouse.y < top + height && currentRect.width > width && currentRect.height > height;

        if (isOverlapped) {
          _this3.showHandler(Number(key));
        }
      });
    }
  }, {
    key: 'stopDrag',
    value: function stopDrag() {
      var _state3 = this.state,
          mode = _state3.mode,
          currentObjectIndex = _state3.currentObjectIndex;

      // Disables shape drag out of bounds 

      if (mode === _constants.modes.DRAG) {
        var objects = this.props.objects;

        var object = objects[currentObjectIndex];
        var offset = this.getOffset();
        if (object.x < 0) {
          object.x = 0;
        };
        if (object.y < 0) {
          object.y = 0;
        };
        if (object.x + object.width > offset.width) {
          object.x = offset.width - object.width;
        }
        if (object.y + object.height > offset.height) {
          object.y = offset.height - object.height;
        }
        this.updateObject(currentObjectIndex, object);
        this.updateHandler(currentObjectIndex, object);
      }

      if (_lodash2.default.includes([_constants.modes.DRAG, _constants.modes.ROTATE, _constants.modes.SCALE], mode)) {
        this.setState({
          mode: _constants.modes.FREE
        });
      }
    }
  }, {
    key: 'showEditor',
    value: function showEditor() {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects,
          currentObject = objects[selectedObjectIndex],
          objectComponent = this.getObjectComponent(currentObject.type);


      if (objectComponent.meta.editor) {
        this.setState({
          mode: _constants.modes.EDIT_OBJECT,
          showHandler: false
        });
      }
    }
  }, {
    key: 'getObjectComponent',
    value: function getObjectComponent(type) {
      var objectTypes = this.props.objectTypes;

      return objectTypes[type];
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height;
      var _props4 = this.props,
          _props4$canvasWidth = _props4.canvasWidth,
          canvasWidth = _props4$canvasWidth === undefined ? width : _props4$canvasWidth,
          _props4$canvasHeight = _props4.canvasHeight,
          canvasHeight = _props4$canvasHeight === undefined ? height : _props4$canvasHeight;

      return {
        width: width, height: height, canvasWidth: canvasWidth, canvasHeight: canvasHeight,
        canvasOffsetX: (canvasWidth - width) / 2,
        canvasOffsetY: (canvasHeight - height) / 2
      };
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG() {
      var _this4 = this;

      var canvas = this.getCanvas();
      var _props5 = this.props,
          background = _props5.background,
          objects = _props5.objects,
          objectTypes = _props5.objectTypes,
          backgroundImage = _props5.backgroundImage;


      return _react2.default.createElement(_SVGRenderer2.default, {
        background: background,
        backgroundImage: backgroundImage,
        width: canvas.width,
        canvas: canvas,
        height: canvas.height,
        objects: objects,
        onMouseOver: this.showHandler.bind(this),
        objectTypes: objectTypes,
        objectRefs: this.objectRefs,
        onRender: function onRender(ref) {
          return _this4.svgElement = ref;
        },
        onMouseDown: this.newObject.bind(this) });
    }
  }, {
    key: 'selectTool',
    value: function selectTool(tool) {
      this.setState({
        selectedTool: tool,
        mode: _constants.modes.DRAW,
        currentObjectIndex: null,
        showHandler: false,
        handler: null
      });
    }
  }, {
    key: 'handleObjectChange',
    value: function handleObjectChange(key, value) {
      var selectedObjectIndex = this.state.selectedObjectIndex;

      this.updateObject(selectedObjectIndex, _defineProperty({}, key, value));
    }
  }, {
    key: 'handleArrange',
    value: function handleArrange(arrange) {
      var _this5 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;

      var object = objects[selectedObjectIndex];

      var arrangers = {
        'front': function front(rest, object) {
          return [[].concat(_toConsumableArray(rest), [object]), rest.length];
        },
        'back': function back(rest, object) {
          return [[object].concat(_toConsumableArray(rest)), 0];
        }
      };

      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });

      this.setState({
        selectedObjectIndex: null
      }, function () {

        var arranger = arrangers[arrange];

        var _arranger = arranger(rest, object),
            _arranger2 = _slicedToArray(_arranger, 2),
            arranged = _arranger2[0],
            newIndex = _arranger2[1];

        _this5.props.onUpdate(arranged);
        _this5.setState({
          selectedObjectIndex: newIndex
        });
      });
    }
  }, {
    key: 'removeCurrent',
    value: function removeCurrent() {
      var _this6 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;


      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });

      this.setState({
        currentObjectIndex: null,
        selectedObjectIndex: null,
        showHandler: false,
        handler: null
      }, function () {
        _this6.objectRefs = {};
        _this6.props.onUpdate(rest);
      });
    }
  }, {
    key: 'accessibilityCurrent',
    value: function accessibilityCurrent() {
      var _this7 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;


      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });

      this.setState({
        accessName: objects.name,
        accessId: 1
      }, function () {
        _this7.objectRefs = {};
        _this7.props.onUpdate(rest);
      });
    }
  }, {
    key: 'moveSelectedObject',
    value: function moveSelectedObject(attr, points, event, key) {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;

      var object = objects[selectedObjectIndex];

      if (key.startsWith('shift')) {
        points *= 10;
      }

      var changes = _extends({}, object, _defineProperty({}, attr, object[attr] + points));

      this.updateObject(selectedObjectIndex, changes);
      this.updateHandler(selectedObjectIndex, changes);
    }
  }, {
    key: 'getKeymapHandlers',
    value: function getKeymapHandlers() {
      var _this8 = this;

      var handlers = {
        removeObject: this.removeCurrent.bind(this),
        moveLeft: this.moveSelectedObject.bind(this, 'x', -1),
        moveRight: this.moveSelectedObject.bind(this, 'x', 1),
        moveUp: this.moveSelectedObject.bind(this, 'y', -1),
        moveDown: this.moveSelectedObject.bind(this, 'y', 1),
        closePath: function closePath() {
          return _this8.setState({ mode: _constants.modes.FREE });
        }
      };

      return _lodash2.default.mapValues(handlers, function (handler) {
        return function (event, key) {
          if (event.target.tagName !== 'INPUT') {
            event.preventDefault();
            handler(event, key);
          }
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      var _state4 = this.state,
          showHandler = _state4.showHandler,
          handler = _state4.handler,
          mode = _state4.mode,
          selectedObjectIndex = _state4.selectedObjectIndex,
          selectedTool = _state4.selectedTool;
      var _props6 = this.props,
          objects = _props6.objects,
          objectTypes = _props6.objectTypes,
          InsertMenuComponent = _props6.insertMenu;


      var currentObject = objects[selectedObjectIndex],
          isEditMode = mode === _constants.modes.EDIT_OBJECT,
          showPropertyPanel = selectedObjectIndex !== null;

      var _getCanvas3 = this.getCanvas(),
          width = _getCanvas3.width,
          height = _getCanvas3.height,
          canvasWidth = _getCanvas3.canvasWidth,
          canvasHeight = _getCanvas3.canvasHeight;

      var objectComponent = void 0,
          objectWithInitial = void 0,
          ObjectEditor = void 0;
      var accessibilityTagButton = this.props.accessibilityTagButton;
      if (currentObject) {
        objectComponent = this.getObjectComponent(currentObject.type);
        objectWithInitial = _extends({}, objectComponent.meta.initial, currentObject);
        ObjectEditor = objectComponent.meta.editor;
      }

      return _react2.default.createElement(
        _reactHotkeys.HotKeys,
        {
          keyMap: this.keyMap,
          style: styles.keyboardManager,
          handlers: this.getKeymapHandlers() },
        _react2.default.createElement(
          'div',
          { className: 'container',
            style: _extends({}, styles.container, this.props.style, {
              width: canvasWidth,
              height: canvasHeight
            }),
            onMouseMove: !this.props.isPreview ? this.onDrag.bind(this) : function () {},
            onMouseUp: !this.props.isPreview ? this.stopDrag.bind(this) : function () {},
            onClick: this.props ? this.onItemClick.bind(this) : function () {}
          },
          isEditMode && ObjectEditor && _react2.default.createElement(ObjectEditor, { object: currentObject,
            offset: this.getOffset(),
            onUpdate: function onUpdate(object) {
              return _this9.updateObject(selectedObjectIndex, object);
            },
            onClose: function onClose() {
              return _this9.setState({ mode: _constants.modes.FREE });
            },
            width: width,
            height: height }),
          showHandler && _react2.default.createElement(_Handler2.default, {
            boundingBox: handler,
            canResize: (0, _lodash2.default)(currentObject).has('width') || (0, _lodash2.default)(currentObject).has('height'),
            canRotate: (0, _lodash2.default)(currentObject).has('rotate'),
            onMouseLeave: this.hideHandler.bind(this),
            onDoubleClick: this.showEditor.bind(this),
            isPreview: this.props.isPreview,
            onClick: this.startDrag.bind(this, _constants.modes.FREE),
            onDrag: this.startDrag.bind(this, _constants.modes.DRAG),
            onResize: this.startDrag.bind(this, _constants.modes.SCALE),
            onRotate: this.startDrag.bind(this, _constants.modes.ROTATE) }),
          !this.props.isPreview && InsertMenuComponent && _react2.default.createElement(InsertMenuComponent, { tools: objectTypes,
            currentTool: selectedTool,
            onSelect: this.selectTool.bind(this) }),
          this.renderSVG(),
          !this.props.isPreview && showPropertyPanel && _react2.default.createElement(_PanelList2.default, {
            offset: this.getOffset(),
            object: objectWithInitial,
            onArrange: this.handleArrange.bind(this),
            onChange: this.handleObjectChange.bind(this),
            onDelete: this.removeCurrent.bind(this),
            onAccess: this.accessibilityCurrent.bind(this),
            objectComponent: objectComponent,
            accessibilityTagButton: accessibilityTagButton
          })
        )
      );
    }
  }]);

  return Designer;
}(_react.Component);

Designer.defaultProps = {
  objectTypes: {
    'text': _objects.Text,
    'rectangle': _objects.Rect,
    'circle': _objects.Circle,
    'polygon': _objects.Path
  },
  snapToGrid: 1,
  svgStyle: {},
  isPreview: false,
  insertMenu: _InsertMenu2.default
};
var styles = exports.styles = {
  container: {
    position: 'relative'
  },
  keyboardManager: {
    outline: 'none'
  }
};

exports.default = (0, _radium2.default)(Designer);