import React from 'react'

import classes from "./Modal.css";

// this Modal will be used as a wrapper
// give it classes.Modal for styling
// pass in props.children so anything it wraps
// will be within the modal wrapper and inherit the styling. 
const Modal = (props) => {
  return (
    <div 
    className={classes.Modal}
    style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}
    >
      {props.children}
    </div>
  )
}

export default Modal
