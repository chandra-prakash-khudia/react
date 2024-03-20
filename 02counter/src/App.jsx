import { useState } from 'react'

import './App.css'

function App() {
  let [count,setCount]=useState(0)
  // let count = 0;
  const addValue=()=>{
    // count= count+1;
    setCount(count+1)
  };
  const RemoveValue=()=>{
    if(count-1 <0){
      setCount(0)
    }else{
      setCount(count-1)
    }
  };
  return (
    <>
     <h1>chandra prakash</h1>
     <h2>Counter : {count}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
