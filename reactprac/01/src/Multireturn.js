import React,{useState,useEffect} from 'react'



const Multireturn = () => {
    const [users,setUsers]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
      async function fetchUsers(){
        try{
           const response = await fetch('https://api.github.com/users');
           const data = await response.json();
           setUsers(data);
           setIsLoading(false);
        }
        catch(error){
          setError(error);
          setIsLoading(false);
        }
      }
      fetchUsers();
    })
    if (isLoading){
      return <p>Loading your shi bruh relax</p>;
    }
    if (error){
      return <p>Error : {error.message}</p>;
    }
    return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user=>{
          return <li key={user.id}><a href={user.html_url}>{user.login}</a></li>

        })}
      </ul>
    </div>
  )
}

export default Multireturn