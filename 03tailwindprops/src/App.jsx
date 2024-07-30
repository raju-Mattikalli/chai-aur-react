import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let obj ={
    usernAme : "hitesh" ,
    age : 21 ,
  }

  return (
   <>

      <h1 className='bg-green-500 text-black p-4 rounded-xl '>Hello World</h1>

    <Card username ="Darshan"/>
    <Card username ="Mattikalli"/>
    
   </>
  )

}


export default App
