import React from 'react'

import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {
  
  // convert object into array of keys 
      // Ex. {salad: 'value', bacon: 'value', cheese: 'value'} => [salad, bacon, cheese]
  // then map() through them to get the values. 
  const ingredientSummary = Object.keys(props.ingredients)
    .map((item) => {
      return (
        <li key={item}>
          <span style={{ textTransform: 'capitalize' }}>{item}</span>: {props.ingredients[item]}
        </li>
      )
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
    </Aux>
  )
}

export default OrderSummary;
