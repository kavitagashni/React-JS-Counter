import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0);
  const[massage, setmassage]=useState("")

  function increase() {
    setcounter(counter + 1)
    if(counter>=10){
      setmassage("You have crossed 10")}
  }
  function decrease() {
    setcounter(counter - 1)
    if(counter<=10){
      setmassage("")
    }
  }
 
  function reset() {
    setcounter(0)
  }

  return (
    <div className="App">
      <div className='display-screen' >{counter}</div>
      <div className='all-buttons'>
        <button onClick={increase} className="increase">+</button>
        <button onClick={reset} className="reset">reset</button>
        <button onClick={decrease} className="decrease">-</button>
      </div>
      <p>{massage}</p>
    </div>
  );
}

export default App;
