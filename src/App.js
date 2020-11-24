import React, { Component } from 'react';
import './App.css';
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'

let ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Cheddar Cheese', color: '#f9a825'},
  {name: 'Portabello Mushroom', color: '#a1887f'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'},
  {name: 'Red Onion', color: '#880e4f'}
]

class App extends Component {
constructor() {
super()
this.state = {burger: []} 
}
add = (ing) => this.setState({burger: [ing,...this.state.burger]})
clear = () => this.setState({burger: []})  
render() { 
  return (
    <div className = "burgerBody">
    <header className = "burgerHeader">
    <h1>Burger Stacker</h1>
    </header>
    <main>
      <IngredientList ingredients = {ingredients} add = {this.add} />
        <BurgerPane  burger = {this.state.burger} clear = {this.clear}/>
        </main>
    </div>
  )
}
}
    

export default App;
