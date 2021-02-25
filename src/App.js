import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Users from './components/Users';
function App() {
const UsersPost = Users.map(posts => <Post posts={posts}/>)
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <div className="Cont">
        <div className="Posts">
            {UsersPost}
        </div>
      </div>
    </div>
  );
}
export default App;
