import '../App.css';
function VueDev (props){
  return(
    <div className="VueDev">
      <div>
        <h2>Component One</h2>
        <h2>Vue Framework Developer</h2>
        <p>Name : {props.name}</p>
        <p>Phone : {props.phone}</p>
        <p>e-Mail : {props.email}</p>
      </div>
    </div>
  )
}
export default VueDev;