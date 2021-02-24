import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';

const person1 = {name:'Wonderboy', framework:'Vue', rate:'90%', choice:'First Choice'}
const person2 = {name:'Wonderboy', framework:'React', rate:'85%', choice:'Second Choice'}
const person3 = {name:'Wonderboy', framework:'Angular', rate:'50%',choice:'Last Choice'}
function App() {
  return (
    <div className="App">
      <header>
      < Header / >
      </header>
      <div className="container">
        <Profile name={person1.name} framework={person1.framework} rate={person1.rate} choice={person1.choice}/>
        <Profile name={person2.name} framework={person2.framework} rate={person2.rate} choice={person1.choice}/>
        <Profile name={person3.name} framework={person3.framework} rate={person3.rate} choice={person1.choice}/>
      </div>
    </div>
  );
}
export default App;
