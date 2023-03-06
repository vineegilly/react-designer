import React, { Component } from 'react';
import Radium from 'radium';
import styles from './styles';

class PanelList extends Component {
  render() {
    let {canvas, objectComponent} = this.props;
    let style = {
      left: canvas.width + 30,
      top: 0,
    };
    return (
        <div style={[styles.propertyPanel, style]}>
          {objectComponent.panels.map((Panel, i) => <Panel key={i} {...this.props} />)}
          <div className="additionalinfo"></div>
        </div>
    );
  }
};

export default Radium(PanelList);
