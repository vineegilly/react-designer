import React from 'react';
import Icon from '../Icon';

import Vector from './Vector';

export default class Rect extends Vector {
  static meta = {
    icon: <Icon icon={'rectangle'} size={30} />,
    initial: {
      width: 50,
      height: 50,
      fill: "transparent",
      strokeWidth: 1,
      stroke: "rgba(0,0,0,1)",
      radius: 0,
      blendMode: "normal",
      rotate: 0
    }
  };

  render() {
    let object = this.props.object;
    return (
      <rect style={this.getStyle()}
         {...this.getObjectAttributes()}
         rx={object.radius}
         width={object.width}
         height={object.height} />
    );
  }
}
