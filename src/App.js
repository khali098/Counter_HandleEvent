import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);

  function handleUp(){
    setCounter(++counter);
  }
  
  function handleDown(){
  if (counter>0){
    setCounter(--counter);
  }
  else{
    alert("0 cannot be decreased");
  }
    
  }
  
  function handleReset(){
    setCounter(0);
  }
  
  

  return (
    <div className="App">

     <h2>Counter App</h2>
     <span className="counter" >{counter}</span>

      <div class="div_button">

      <button id="buttonIncrease" onClick={() => handleUp()}>+</button>
      <button id="buttonDecrease " onClick={() => handleDown()}>-</button>
      <button id="buttonReset " onClick={() => handleReset()}>0</button>

    </div>

    </div>
  );
}

export default App;
