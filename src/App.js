import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Hello World, Hello Weather
        </h1>
        <Weather city="Stuttgart" />
      </header>
    </div>
  );
}

export default App;
