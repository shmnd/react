import React from 'react'
import { useEffect,useState } from 'react'

function Useeffect() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log('mounting...');
    console.log('UPDATING...'+count);
    return()=>{
        console.log('cleanup...'+count)
    }
  },[count])
    // const [count,setCount]=useState(0)
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>Increament</button> 
       <h1>Hi, I'm component: {count}</h1>
    </div>
  )
}

export default Useeffect


