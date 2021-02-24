function List(props) {
  const styling = {fontWeight:'600'}
return(
    <div className="List">
    <h2>Fruits</h2>
    <p><span style={styling}>Fruit Type:</span> {props.Fruit.name}</p>
    <p><span style={styling}>Fruit Vitamin:</span> {props.Fruit.vitamin}</p>
    <p><span style={styling}>Fruit Color:</span> {props.Fruit.color}</p>
    <p><span style={styling}>Fruit Price:</span> {props.Fruit.price}</p>
  </div>  
)
}
export default List