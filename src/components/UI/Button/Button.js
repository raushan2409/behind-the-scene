import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("Button Running");
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
    
      {props.children}
    </button>
  );
};

// export default Button;
export default React.memo(Button);
// the button running again and again because of its props value did change (this funciton that we r passing to the button is recreated, this is a brand new funcito for every render or every execution cycle of the app function (new false and new function is always created in every execution cycle , false is aboolean and booleans like strings and number are primitive valuein js props.show === props.previous.show comparison))
// functions are just object in js so here a new function object is createdwith every times the app function runs and this function object pass to the onclick props now therefore buttons in the end compares (props.onclick === props.previous.onclick ) like thatand in there we have two function objects 
// now two object even if have the same component are not equal in js n therefore react memo find that the value changes

