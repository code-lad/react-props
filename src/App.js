import './App.css';
import Header from './components/Header';
import VueDev from './components/VueDev';
import ReactDev from './components/ReactDev'

const person = {name:'Wonderboy', phone:'067 023 8089', email:'wonderboy@gmail.com'}
function App() {
  return (
    <div className="App">
      < Header />
      <div className="container">
      <VueDev name={person.name} phone={person.phone} email={person.email}/>
      < ReactDev 
      name = {person.name}
      phone = {person.phone}
      email = {person.email}
      />
      </div>
    </div>
  );
}
  
export default App;
