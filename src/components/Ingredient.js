import React from 'react'
const Ingredient = (props) => {
  
  return ( 
        <li 
        onClick={() => 
        props.add({
            name: props.name, 
            color: props.color
            })} 
            style = {{
                backgroundColor: props.color
                }}>
        <h3>{props.name}</h3>
          </li>
        )
}
export default Ingredient

