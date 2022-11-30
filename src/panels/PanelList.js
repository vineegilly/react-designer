import React, { Component } from 'react';
import Radium from 'radium';
import { Portal } from 'react-portal';

import styles from './styles';

class PanelList extends Component {
  render() {
    let {offset, objectComponent} = this.props;
    let style = {
      left: offset.width + offset.x,
      top: offset.y + window.scrollY,
    };
    let nodeContainer = document && document.getElementsByClassName('oc-panel-placeholer')[0]
    return (
      <Portal closeOnEsc closeOnOutsideClick isOpened={true} node={nodeContainer}>
        <div style={[styles.propertyPanel, style]} className='row'>
          {objectComponent.panels.map((Panel, i) => <div className={i==2?'col-12':'col-6'}><Panel key={i} {...this.props} /></div>)}
        </div>
      </Portal>
    );
  }
};

export default Radium(PanelList);
