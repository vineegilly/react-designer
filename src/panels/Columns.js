import React from 'react';
import Radium from 'radium';

import styles from './styles';

const Columns = ({showIf=true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }
  return (
    <div style={styles.columns}>
      <div className="formlabel" style={styles.panelTitle}>{props.label}</div>
      {props.children}
    </div>
  )
};

export default Radium(Columns);
