import React, { Component } from 'react';
import Radium from 'radium';

class InsertMenu extends Component {

  render() {
    let {currentTool, tools} = this.props;
    let keys = Object.keys(tools);

    return (
      <div style={styles.insertMenu}>
        <ul style={styles.toolBox}>
          {keys.map((type, i) => (
            <li className={currentTool === type ? "insertmenu insertmenuactive" : "insertmenu"} style={[
              styles.toolBoxItem,
              currentTool === type && styles.currentToolboxItem
              ]}
                onMouseDown={this.props.onSelect.bind(this, type)}
                key={i}>
              {tools[type].meta.icon} <br />{type}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  insertMenu: {
    font: "inherit",
    position: 'absolute',
    marginTop: 0,
    marginLeft: -90,
    height: 'auto',
    width: 90,
    cursor: "pointer",
    textTransform: "capitalize"
  },
  toolBox: {
    margin: 0,
    padding: 0,
  },
  toolBoxItem: {
    listStyle: "none",
    padding: "5px 5px",
    ":hover": {
      background: "#ebebeb"
    }
  },
  currentToolboxItem: {
    background: "#ebebeb"
  },
  mainIcon: {
    padding: "10px 5px",
    borderBottom: "1px solid #e0e0e0"
  }

};

export default Radium(InsertMenu);
