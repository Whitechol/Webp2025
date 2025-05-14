import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton';
import HelloCGU from './cgu_helloCGU';
import SignInSide from './cgu_login';

function App() {
  return (
    <div className="App">
      <div>
        {SignInSide()}
      </div>
    </div>
  );
}

export default App;
