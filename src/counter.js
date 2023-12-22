import './App.css'
import { useState } from 'react'

function Counter(){

    let count=0

    // Arrow function
        const addCount=()=>{
                count=count+1 
                console.log(count);
            }

    // normal function
        // function addCount(){
        //     count=count+1 
        //     console.log(count);
        // }


    return(

        <div className="mac">
            <button onClick={addCount}>Add</button>
            <h1>Counter:{count}</h1>
        </div>
    );
}

export default Counter