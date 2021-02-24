function Profile(props) {
  const style = {fontWeight:"600", color:"blue"}
  return(
    <div className="Profile">
      <h2>Full Stack Dev</h2>
      <p>Name : <span style={style}>{props.name}</span></p>
      <p>Framework: <span style={style}>{props.framework}</span></p>
      <p>Rating: <span style={style}>{props.rate}</span></p>
      <p>Choice: <span style={style}>{props.choice}</span></p>
    </div>
  )
}
export default Profile;