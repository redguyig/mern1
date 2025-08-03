import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
//singular use state if I had to guess

function App() {
  const [count,setCount]=useState(0); //generally for any variable that we use for state we use the normal one as it is and for it's state changes we use set 
  console.log(count); //tells the current state 
  console.log(setCount); //function/variable with which we change the state of the app
  // console.log(useState("1"))  //was returning 2 values a string and a function f 
  const handleClickInc=()=>{
    setCount(count+1)
  }
  const handleClickDec=()=>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
    
}

export default App;
