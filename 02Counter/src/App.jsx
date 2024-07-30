import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter , setcounter] = useState(0)

  const addValue = () => {
   if(counter <20){
    counter+= 1;
    console.log(counter)
    setcounter(counter)
   }
  }


  const removeValue =() => {
    if(counter >0){
      counter -=1;
    console.log(counter)
    setcounter(counter)
    }
  }

  return (
  
    <>
      <h1>Chai aur ReACT  </h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}> Add Value</button> <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>

  )
}

export default App
