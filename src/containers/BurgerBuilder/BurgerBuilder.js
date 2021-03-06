import React, { Component } from 'react'

// IMPORT COMPONENTS/CONTAINERS
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


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
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE PURCHASE STATE 
  updatePurchaseState = (ingredients) => {

    const sum = Object.keys(ingredients)// this will create an array of strings. 
      .map(item => {
        return ingredients[item] // this will be the amount of each key value.
      }).reduce((total, eachEl) => {
        return total + eachEl
      }, 0)

    this.setState({
      purchasable: sum > 0 // set to either true or false
    })
  } // END UPDATE PURCHASE STATE

  //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ADD INGREDIENT HANDLER
  // type will either by 'salad', 'cheese', 'bacon', or 'meat.'
  // this is how we will identify the changes since it will act like an index. 
  addIngredientHandler = (type) => {

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

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })

    this.updatePurchaseState(updatedIngredients) // pass in argument since setState may not be done when this method runs

  } // END ADD INGREDIENT HANDLER

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    })
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REMOVE INGREDIENT HANDLER
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

    this.updatePurchaseState(updatedStateIngredients) // pass in argument since setState may not be done when this function runs

  } // end removeIngredientHandler

  render() {
    const disabledInfo = { ...this.state.ingredients }

    for (let key in disabledInfo) {
      // if the value of each key is less than or equal to 0
      // return true. 
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>

        <div><Burger ingredients={this.state.ingredients} /></div>
        <div>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledInfo={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered = {this.purchaseHandler}
          />
        </div>
      </Aux>
    )

  }
}

export default BurgerBuilder; 
