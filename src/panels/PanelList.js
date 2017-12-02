import React, { Component } from 'react';
import Radium from 'radium';
import { Portal } from 'react-portal';

import styles from './styles';

class PanelList extends Component {
  render() {
    let {offset, objectComponent} = this.props;
    let style = {
      left: (offset.width*3.779528) + offset.x,
      top: offset.y + window.scrollY,
    };
    // console.log(style, offset.width, offset.x, typeof(offset.width), typeof(offset.x), offset.width + offset.x)

    return (
      <Portal className="propertyPanel" closeOnEsc closeOnOutsideClick isOpened={true}>
        <div style={[styles.propertyPanel, style]}>
          {objectComponent.panels.map((Panel, i) => <Panel key={i} id={id} {...this.props} />)}
        </div>
      </Portal>
    );
  }
};

export default Radium(PanelList);
