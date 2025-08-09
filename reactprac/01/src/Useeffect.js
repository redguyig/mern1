import React, { useEffect,useState} from 'react'
// syntax for this is as follows 
const Useeffect = () => {
  // useEffect(()=>{
  //   //code to run after rendering your upda
  // },[dependency])  //basically the first part of the function consists of the whole effect that is to be applied via a function
  // //the dependency part explain when to apply the effect, i.e. the "when" part of the effect of when this side effect is to be applied 
  useEffect(()=>{
    alert("We are in Use state ")
  },[])
  
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