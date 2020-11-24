const ClearBurger = (props) => {
    return (
    <button onClick = {() => 
        props.clear()
        }>
        <h3>Clear Burger</h3>
    </button>
    )
}
export default ClearBurger