import React from 'react';
import Radium from 'radium';

import styles from './styles';

const Column = ({showIf=true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }

  const handleOnchange = (val) => {
    let result = val;
    if(val !== '') {
      if (props.type === "number") {
        if (isNaN(val) === false) {
          result = parseInt(val);
        } else {
          result = 0;
        }
      }
    }
    props.onChange(result);
  }

  return (
    <div style={[styles.column, props.style]}>
      {props.children ||
        <input style={[styles.input, styles.integerInput, props.inputStyle]} value={props.value}
               onChange={(e) => handleOnchange(e.target.value)} />
      }
      {props.label &&
        <div className="helpertext" style={styles.inputHelper}>{props.label}</div>}
    </div>
  );
};

export default Radium(Column);
