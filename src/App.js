import logo from './logo.svg';
import './App.css';
import UrlShortener from "./components/UrlShortener";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          talharic
        </p>
        <UrlShortener/>
      </header>
    </div>
  );
}

export default App;
