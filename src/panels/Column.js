import React from 'react';
import Radium from 'radium';

import styles from './styles';

const Column = ({showIf=true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }

  const handleOnchange = (e) => {
    let result = e.target.value;
    if(e.target.value !== '') {
      if (props.type === "number") {
        if (isNaN(e.target.value) === false) {
          result = parseInt(e.target.value);
          if((props.label === 'width' || props.label === 'height') && result < 5 ){
            result = 5;
          }
        } else if(props.label === 'width' || props.label === 'height'){
          result = 5;
        }else{
          result = 1;
        }
      }
    }
    props.onChange(result);
  }

  return (
    <div style={[styles.column, props.style]}>
      {props.children ||
        <input style={[styles.input, styles.integerInput, props.inputStyle]} value={props.value}
               onChange={(e) => handleOnchange(e)} />
      }
      {props.label &&
        <div className="helpertext" style={styles.inputHelper}>{props.label}</div>}
    </div>
  );
};

export default Radium(Column);
