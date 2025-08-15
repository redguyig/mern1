import React, { useEffect,useState} from 'react'
// syntax for this is as follows 
const Useeffect = () => {
  // useEffect(()=>{
  //   //code to run after rendering your upda
  // },[dependency])  //basically the first part of the function consists of the whole effect that is to be applied via a function
  // //the dependency part explain when to apply the effect, i.e. the "when" part of the effect of when this side effect is to be applied 
  //always remember that if we pass any logic in the useEffect functiona and use return in it alonside some other commands
  //the the logic under return will be executed first and then the logic in the normal function will be executed later 
//this logic is exclusive to the useEffect

// That's an excellent observation, and it points to a common point of confusion. The behavior you're describing isn't true for normal JavaScript functions, but it is true for React's useEffect hook, which works in a special way.
// 
// In a Normal Function
// In any standard JavaScript function, return is the last thing that executes. Once a return statement is hit, the function immediately stops and exits.
// 
// JavaScript
// 
// function regularFunction() {
  // console.log("This message logs first.");
  // return "This value is returned.";
  // console.log("This line is never reached."); // The function has already exited.
// }
// 
// regularFunction();
// In React's useEffect Hook (The Real Reason)
// The behavior you saw happens specifically with useEffect. The function you return inside useEffect is not a standard return; it's a special cleanup function.
// 
// React holds onto this cleanup function and executes it at a specific time: before running the effect again.
// 
// Here is the lifecycle that explains why you see the "return" message first on updates:
// 
// 1. Initial Render (When the component first appears)
// The component renders.
// 
// The main effect function runs.
// 
// console.log("We r in Use state"); is printed.
// 
// React takes the cleanup function you returned and saves it for later. It does not run it yet.
// 
// 2. A Re-render (When state or props change)
// Something causes the component to re-render (e.g., a button click).
// 
// Before running the new effect, React must clean up the old one. It now executes the cleanup function it saved from the previous render.
// 
// console.log("return of use State"); is printed first.
// 
// After the cleanup is done, React runs the main effect function for the current render.
// 
// console.log("We r in Use state"); is printed second.
  useEffect(()=>{
    alert("We are in Use state ")
  },[clicked])
  
  const [clicked,setClicked] = useState();


  
  return (
    <div>
      <button onClick={()=>setClicked("Subscribe")}>
        Subscribe</button>
      <br>
      </br>
      <hr> 
      </hr>
      <button onClick={()=> setClicked("to")}>to</button>
      <hr></hr>
      <button onClick={()=>setClicked("DanTDM")}>DanTDM</button>
      <hr></hr>
      <h1>{clicked}</h1>
    </div>
  )
}

export default Useeffect