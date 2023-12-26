// 


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


// import {useState} from 'react'
// import Counter2 from './Counter2'

// function App(){
//   const [count,setCount]=useState(0)

//     const addCount  =()=> {
//         setCount(count+1)   
//     }


//     let obj={
//         title:'1st counter :',
//         counter:count ,//we only using name because the name is same that's why we not assign a value
//         place:'manjeri'

//     }

//     return(
//         <div>
//             <button onClick={addCount}>Add</button>
//             <Counter2 {...obj} />      {/* spread opretor */}
//             {/* <Counter2 title='2nd count' counter={count} /> */}

//         </div>
//     );
// }

// export default App




import Employee from './Employee'

function App(){

    let emp=[
                {name:'shamnad',age:23},
                {name:'elon musk',age:44},
                {name:'steve jobs',age:85}
            ]
  
      return(

          <div>
            {
                emp.map((obj,index)=>
                // if we don't give cruly bracket of arrow function it return all the data's inside  and don't need to use return statement and if there multiple data it should be inside the bracket () a

                    (
                        <Employee key={index} {...obj}  />
                    )
                )
            }
          </div>

      );
  }
  
  export default App
  