import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] =useState("usd")
  const [ to , setTo ] = useState("inr")
  const[convertedAmount , setConvertedAount] =useState(0)

  const currencyInfo = useCurrencyInfo(from)
  object

  return (
    <>
        <h1 className='text-3xl bg-orange-600'>Currency converter app with chai</h1>
        <InputBox/>
        
    </>
  )
}

export default App
