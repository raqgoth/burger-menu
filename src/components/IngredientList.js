import React from 'react';
import Ingredient from './Ingredient'
const IngredientList = (props) =>{
  return(
    <div>
      <ul>
          {props.ingredients.map((ing,i) => 
          <Ingredient 
          key={i} 
          name={ing.name} 
          color={ing.color} 
          add={props.add} 
          />
          )}
        </ul>
    </div>
  );
} 
  
export default IngredientList