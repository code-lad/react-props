function Profile(props) {
  const style = {fontWeight:"600", color:"blue"}
  return(
    <div className="Profile">
      <h2>Full Stack Dev</h2>
      <p>Name : <span style={style}>{props.Person.name}</span></p>
      <p>Framework: <span style={style}>{props.Person.framework}</span></p>
      <p>Rating: <span style={style}>{props.Person.rate}</span></p>
      <p>Choice: <span style={style}>{props.Person.choice}</span></p>
    </div>
  )
}
export default Profile;