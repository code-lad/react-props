function Post(props){
  return(
    <div className="Post">
      <div className="Container">
      <h2>{props.posts.name}</h2>
      <p>{props.posts.post}</p>
      <p></p>
      </div>
    </div>
  )
}
export default Post;