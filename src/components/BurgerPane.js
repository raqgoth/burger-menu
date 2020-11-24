import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
  return (<div className = "burgerPane">
      <BurgerStack burger = {props.burger}/> 
      <ClearBurger clear = {props.clear} />
  </div>
  )
}
export default BurgerPane