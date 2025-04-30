import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton';
import HelloCGU from './cgu_helloCGU';

function App() {
  return (
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        {MultiButton(10)}
      </div>
    </div>
  );
}

export default App;
