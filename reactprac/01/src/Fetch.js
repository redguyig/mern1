import React,{useEffect,useState} from 'react'

//fetch using useEffect


const Fetch = () => {
const [users,setUsers]=useState([]);    
useEffect(()=>{
   fetch('https://api.github.com/users')
   .then (response=>response.json())
   .then(data=>setUsers(data))
   .catch(error=>{
    console.log("The actual error is",error);
    alert("There was an error fetching data")

   })   
},[])

    return (
    <div>
        <h1>User list </h1>
        <ul>
            {
                users.map(user=>{
                    return(<li key ={user.id}><a href={user.html_url}>{user.login}</a>
                    
                    </li>) 
                })
            }
        </ul>
    </div>
  )
}

export default Fetch