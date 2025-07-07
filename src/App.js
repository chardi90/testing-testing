import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Weather</h1>
        <h2>Type in a city to get started!</h2>
        <SearchEngine />
      </header>
    </div>
  );
}

export default App;
