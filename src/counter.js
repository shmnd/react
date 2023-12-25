import {useState} from 'react'
import './App.css'

function Counter(){
    const [count,Setcount]=useState(0)

    // let count=0

    // Arrow function
        const addCount=()=>{
                // count=count+1 
                Setcount(count+1)
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