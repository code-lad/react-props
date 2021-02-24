import '../App.css';
function ReactDev(props){
  return(
    <div className="ReactDev">
      <h2>Component Two</h2>
      <h2>React Framework Developer</h2>
        <p>Name : {props.name}</p>
        <p>Phone : {props.phone}</p>
        <p>e-Mail : {props.email}</p>
    </div>
  )
}
export default ReactDev;