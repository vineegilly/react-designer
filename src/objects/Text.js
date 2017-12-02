import React from 'react';
import Icon from '../Icon';

import Vector from './Vector';
import WebFont from 'webfontloader';

export default class Text extends Vector {
  static meta = {
    icon: <Icon icon={'text'} size={30} />,
    initial: {
      text: "Hi! I'm a text object...",
      rotate: 0,
      fontWeight: "bold",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 12,
      fontFamily: "Open Sans",
      letterSpacing: 0
    }
  };

  getStyle() {
    let object = this.props.object;
    return {
      ...super.getStyle(),
      dominantBaseline: "central",
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration,
      mixBlendMode: object.blendMode,
      WebkitUserSelect: "none",
      letterSpacing: object.letterSpacing
    };
  }

  getTransformMatrix({rotate, x, y}) {
    return `rotate(${rotate} ${x} ${y})`;
  }

  render() {
    let object = this.props.object;
    WebFont.load({
      google: {
        families: [object.fontFamily]
      }
    });
    return (
      <text style={this.getStyle()}
         {...this.getObjectAttributes()}
         textAnchor="right"
         fontSize={object.fontSize}
         fontFamily={object.fontFamily}>
        {object.text}
       </text>
    );
  }
}
