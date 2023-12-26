import {useState} from 'react'
import Counter2 from './Counter2'

function App(){
  const [count,setCount]=useState(0)

    const addCount  =()=> {
        setCount(count+1)   
    }

    return(
        <div>
            <button onClick={addCount}>Add</button>
            <Counter2 title='1st count' counter={count} />
            <Counter2 title='2nd count' counter={count} />

        </div>
    );
}

export default App




// import  Header from './components/Header';

// import Banner from './components/Header';

// function App() {

//   const data='IT IS THE DATA INSERTED'

//   const jaba='SAMPLE DATA FOR TESTING'

//   return (
//     <div>

//       <h1 style={{backgroundColor:'red'}}>Hello mars </h1>

//       <br/>

//       <p style={{color:'blue'}}>{data}</p>

//       <h2 className='mac'>hooi saitama</h2>

//       <h2 className='stac'>hooi gokuuuu</h2>

//       {/* <Shami/>
//         <Shami/>
//         <Shami/>
//         <Eldho/>
//         <Eldho/> 
//       */}

//       <Header datta={data} />
//       <Banner jabba={jaba} />

//    </div>
//   );
// }

// export default App;


// function Shami(){ //need use captial letter first letter
//   return(
//     <h5 className='mac'>batman</h5>
//   )
// }

// function Eldho(){
//   return(
//   <h1 className='stac'>superman</h1>
//   )
// }







