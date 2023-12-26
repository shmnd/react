import React from 'react'
import { useState } from 'react'

function Useeffect() {
    const [count,setCount]=useState(0)
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>Increament</button> 
       <h1>Hi, I'm component: {count}</h1>
    </div>
  )
}

export default Useeffect


