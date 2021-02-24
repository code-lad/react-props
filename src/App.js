import './App.css';
import Header from './components/Header';
import List from './components/List';
import Fruits from './components/Fruits';

function App() {
const FruitsList = Fruits.map(list => <List Fruit = {list}/>) 
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <div className="container">
      {FruitsList}
      </div>
    </div>
  );
}
export default App;
