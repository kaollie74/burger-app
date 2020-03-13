import React from 'react';

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

// variable the holds an Array of objects
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <h2>Current Price: {props.price.toFixed(2)}</h2>
      {controls.map((item, i) => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            added={() => props.ingredientAdded(item.type)} // passed in prop comes from BurgerBuilder.js
            remove={() => props.removeIngredient(item.type)}
            disabledInfo={props.disabledInfo[item.type]} // have access to each type and need to identify each on specifically
          // so it the right one gets disabled. 


          />
        )
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>


    </div>
  )
}

export default buildControls; 