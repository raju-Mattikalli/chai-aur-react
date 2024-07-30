import { useState ,useCallback , useEffect ,useRef} from 'react'

import './App.css'

function App() {


  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")


//ref hook
const passwordRef =useRef(null)


  const passswordGenerator  = useCallback(() => {

    let pass ="";
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()_+~`[]{}/,<>" 

      for(let i=1 ; i<=length ; i++){
        
        let char = Math.floor(Math.random() * str.length+1)

        pass += str.charAt(char)

      }

      setPassword(pass)

  }, [length , numberAllowed , charAllowed , setPassword ]) 

  const copyPasswordToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passswordGenerator()},[length,numberAllowed , charAllowed  , passswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-gray-500 '>
        <h2 className='text-white text-center my-3'> Pasword Generator</h2>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password} className='outline-none w-full py-1 px-3' 
            placeholder='password'
            readOnly
            ref={passwordRef}
            />

            <button  onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' > copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>

              <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label className='text-white' > length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            checked={numberAllowed} 
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="number" className='text-white'>Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            checked={charAllowed} 
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="number" className='text-white'>charecters</label>

          </div>

        </div>


      </div>

    </>
  )
}

export default App
