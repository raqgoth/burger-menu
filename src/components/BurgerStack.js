const BurgerStack = (props) => {
    return (
        <div>
            <ul>
                {props.burger.map((ing, i) => <li key = {i} style ={{backgroundColor: ing.color}}>
                    <h3>{ing.name}</h3>
                    </li>
                    )}
                    </ul>
                    </div>
    )
}
export default BurgerStack