import React from 'react'
import './App.css'


function Counter2({title,counter}) {   /* we can use spread opretor in this way too */
  // const {title,counter}=props  {/* we can use spread opretor in this way also */}
  return (
    <div>
        {/* <h1>Counter:{props.counter}</h1> */}
        <h1>{title} {counter}</h1>

        
    </div>
  )
} 

export default Counter2
