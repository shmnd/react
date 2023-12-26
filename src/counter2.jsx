import React from 'react'
import './App.css'


function Counter2(props) {
  const {title,counter}=props
  return (
    <div>
        {/* <h1>Counter:{props.counter}</h1> */}
        <h1>{title} {counter}</h1>

        
    </div>
  )
} 

export default Counter2
