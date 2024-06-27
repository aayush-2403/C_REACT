import { useState, useCallback , useEffect , useRef} from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numAllowwed , setNumAllowed]= useState(false)
  const [charAllowed , setCharAllowed]= useState(false)
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowwed) str += "0123456789"
    if(charAllowed) str += "/*-+@#$%^&()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
       pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[length ,numAllowwed, charAllowed, setPassword])

  const copyPass = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowwed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
rounded-lg px-4 py-3 my-8 ☐ text-orange-500 bg-gray-700'>
  <h1 className='text-white text text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}/>

        <button
        onClick={copyPass} 
        className='outline-none bg-blue-700 text-white
px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
  <input
  type='range'
  min={8}
  max={26}
  value={length}
  className='cursor-pointer'
  onChange={(e) => {setlength(e.target.value)}}
  
  />
  <label>Length: {length}</label>
  </div>
    <input
    type="checkbox"
    defaultValue={numAllowwed}
    onChange={() => {setNumAllowed((prev)=> !prev)}}
    
    />
    <label>Numbers</label>

    <input
    type="checkbox"
    defaultValue={numAllowwed}
    onChange={() => {setCharAllowed((prev)=> !prev)}}
    
    />
    <label>Characters</label>
  </div>  

</div>
    </>
  )
}

export default App
