import React, { Component } from 'react'

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }
  // ADD INGREDIENT HANDLER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // type will either by 'salad', 'cheese', 'bacon', or 'meat.'
  // this is how we will identify the changes since it will act like an index. 
  addIngredientHandler = (type) => {
    console.log('type: ', type);
    // grab the current ingredient type that is in state
    const oldCount = this.state.ingredients[type]
    // updated that incrementing by 1
    const updatedCount = oldCount + 1;
    // grab state since its best to set state this way.
    const updatedIngredients = {
      ...this.state.ingredients
    }
    // update to the specific type that is in the copy state by
    // the specific type.
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]
    console.log(priceAddition);
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  } // end addIngredientHandler 

  removeIngredientHandler = (type) => {
    const currentIng = this.state.ingredients[type];

    // check the value of currentIng. If less than or equal to 0 return 
    // this will exit the function and the rest of the code will not be executed. 
    if (currentIng <= 0) {
      return;
    } // end IF
    const updateIng = currentIng - 1;
    const updatedStateIngredients = { ...this.state.ingredients };

    updatedStateIngredients[type] = updateIng;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const currentTotalPrice = this.state.totalPrice;
    const newTotalPrice = currentTotalPrice - priceSubtraction;

    this.setState({
      totalPrice: newTotalPrice,
      ingredients: updatedStateIngredients
    })


  }

  render() {
    const disabledInfo = { ...this.state.ingredients}

    for(let key in disabledInfo) {
      // if the value of each key is less than or equal to 0
      // return true. 
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <div><Burger ingredients={this.state.ingredients} /></div>
        <div>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledInfo = {disabledInfo}
          />
        </div>
      </Aux>
    )
  }
}

export default BurgerBuilder; 
