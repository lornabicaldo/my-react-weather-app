import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          Stuttgart
          Valletta
          Manila
          Tokyo
        </li>
      </ul>
        <Weather city="Stuttgart" />
      
    </div>
  );
}

export default App;
