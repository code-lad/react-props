import './App.css';
import Header from './Components/Header';
import Count from './Components/Count'
function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <div className="Container">
        <Count/>
      </div>
    </div>
  );
}
export default App;
