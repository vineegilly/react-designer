import React from 'react';
import Radium from 'radium';

import styles from './styles';

const Column = ({showIf=true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }

  return (
    <div style={[styles.column, props.style]}>
      {props.children ||
        <input style={[styles.input, styles.integerInput, props.inputStyle]} value={props.value}
               onChange={(e) => {
                const inputValue = ((props.type === "number") && (e.target.value !== '')) ? parseInt(e.target.value) : e.target.value;
                props.onChange(inputValue);
               }} />
      }
      {props.label &&
        <div className="helpertext" style={styles.inputHelper}>{props.label}</div>}
    </div>
  );
};

export default Radium(Column);
