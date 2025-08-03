import React,{useState}from 'react'
// HANDLING MULTIPLE USE STATES 
// AT FIRST IT WAS DONE BY USING MULTIPLE USE STATES FOR EACH COMPONENT BUT THAT METHOD IS PRETTY REDUNDANT AND INCREASES COMPLEXITY 
// so the commented out code is the earlier method 
// now we convert the multiple states into a single state
const Form = () => {
  // const [name,setName] = useState('');
  // const[email,setEmail]=useState('');
  // const[password,setPassword]=useState('');
  const [formData,setFormData]= useState({
    name:"",
    email:"",
    password:""
  })
//   const handleName=(e)=>
// {
//     console.log(e.target.value);
//     setName(e.target.value);
// }
//   const handleEmail=(e)=>
// {
//     console.log(e.target.value);
//     setEmail(e.target.value);
// }
//   const handlePassword=(e)=>
// {
//     console.log(e.target.value);
//     setPassword(e.target.value);
// }
//instead of having 3 function now we use one
const handleInput=(e)=>{
  // console.log(e.target.name);
  // console.log(e.target.value)
  const {name,value}=e.target;
  setFormData({
    ...formData,[name]:value
  })
}
const handleSubmit=(e)=>{
  e.preventDefault();
}
  return (
    
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <br></br>
            <input
            type="text"
            value ={formData.name}
            name="name"
            onChange={handleInput}
            placeholder="Enter your name"/>
        </label>
        <br></br>
      {/* {name} this is just for if I want the name as well to be 
      written on the screen alongside the form */}
      <label>
            E-mail:
            <br></br>
            <input
             type="email"
             value ={formData.email}
             name="email"
             onChange={handleInput}
             placeholder="Enter your E-mail"/>
      </label>
      <br></br>
      <label>
            Password:
            <br></br>
            <input
            type="password" 
            value ={formData.password}
            name="password"
            onChange={handleInput}
            placeholder="Enter your Password"/>
        </label> 
        <br></br> 
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form