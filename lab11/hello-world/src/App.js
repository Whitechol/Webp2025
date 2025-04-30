import logo from './logo.svg';
import './App.css';

const changeText=(event)=>{
  console.log(event.target)
  event.target.innerText = event.target.innerText + '被點了'  
}
const styleArg = {fontSize: '100px', color: 'red'};

function App() {
  return (
    <div className="App">
      <h1 style={ styleArg } onClick={ changeText }>hello CGU!!</h1>
    </div>
  );
}

export default App;
