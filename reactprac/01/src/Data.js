import React,{useState} from 'react';
import data from "./datas.json";
//singular use state ig 

const Data = () => {
  const [ndata,setndata]=useState(data)
  // console.log(ndata[0].id)
  const handleClick=()=>{
    setndata([])
  }
  const handleRemove=(itemId)=>{
    setndata(ndata.filter(item=>
      item.id !== itemId))
  }
  const handleUpdate=(itemId)=>{
    setndata(ndata.map(items=>{
      if (items.id === itemId){
        return{name:"new_Name"}
      }
      else{
        return items;
      }
    }))
  }
  return (
    <div>
    <ul>
      {
        ndata.map(items=>
        
          <li key={items.id}>
            {/* {console.log(items.id)} */}
            <button onClick={()=>handleUpdate(items.id)}>Update</button>
            
            {items.name}
            <br/>
            <button onClick={()=>handleRemove(items.id)}>Remove</button>
          </li>
        )
      }
      
    </ul>
    <button onClick={handleClick}>clear</button>
    </div>
  )
}

export default Data