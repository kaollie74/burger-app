import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import { array } from 'prop-types';

const burger = (props) => {

  // LOOK INTO THIS MORE
  let transformedIngredients = Object.keys(props.ingredients)
    .map((item) => {
      return [...Array(props.ingredients[item])]
        .map((_, i) => {
          return <BurgerIngredient key={item + i} type={item} />
        })
    }).reduce((prevArray, currentItem) => {
      return prevArray.concat(currentItem)
    }, [])
  console.log(transformedIngredients);

if(transformedIngredients.length === 0){
  transformedIngredients = <p>Please start adding ingredients</p>
}

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger; 