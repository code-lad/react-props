import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Details from './components/Details'

function App() {
const PersonData = Details.map(item => <Profile Person ={item}/>)
  return (
    <div className="App">
      <header>
      < Header / >
      </header>
      <div className="container">
        {PersonData}
      </div>
    </div>
  );
}
export default App;
