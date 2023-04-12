'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propertyGroup;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  propertyPanel: {
    position: "absolute",
    width: 250,
    top: 0,
    left: 0,
    padding: '0 5px 6px 5px',
    fontFamily: '"inherit',
    fontSize: 'inherit',
    zIndex: 1000
  },
  propertyGroup: (_propertyGroup = {
    backgroundColor: '#fff',
    overflow: 'hidden',
    paddingBottom: 12,
    paddingTop: 2,
    paddingLeft: 10,
    border: '0px solid #d3d3d3',
    marginBottom: 5
  }, _defineProperty(_propertyGroup, 'border', '1px solid #000'), _defineProperty(_propertyGroup, 'borderRadius', 5), _propertyGroup),
  inputHelper: {
    fontSize: 9,
    color: 'grey',
    paddingTop: 2,
    paddingLeft: 5
  },
  inlineInputHelper: {
    fontSize: 9,
    display: 'inline-block',
    marginLeft: 10
  },
  panelTitle: {
    float: 'left',
    width: 60,
    padding: 3,
    color: '#000'
  },
  columns: {
    overflow: 'hidden',
    marginTop: 10
  },
  column: {
    float: 'left',
    marginRight: 5
  },
  input: {
    background: '#fff',
    borderWidth: 1,
    padding: '3px 5px',
    color: '#000',
    borderRadius: 3
  },
  select: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    borderWidth: 0,
    padding: '3px 3px 3px 5px',
    outline: 'none',
    borderRadius: 0,
    borderRight: '3px solid #b7b7b7',
    color: 'gray',
    width: 75
  },
  integerInput: {
    width: 50,
    outline: 'none'
  },
  textInput: {
    marginTop: 2,
    outline: 'none',
    width: '100%',
    padding: 3
  },
  colorInput: {
    width: 18,
    height: 18,
    borderRadius: '50%',
    display: 'inline-block',
    background: 'white',
    marginRight: 3
  },
  color: {
    marginLeft: 2,
    marginTop: 2,
    width: 14,
    height: 14,
    display: 'inline-block',
    borderRadius: '50%',
    border: '2px solid grey'
  },
  empty: {
    display: 'none'
  },
  button: {
    color: '#515151',
    textDecoration: 'none',
    display: 'block',
    padding: '2px 0'
  }
};