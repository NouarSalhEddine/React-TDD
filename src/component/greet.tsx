import React, { useState } from 'react'

type greetProps = {
  name?: String 
 
}
export default function Greet(props: greetProps) {
 const [number1 , setMumber1] = useState<String>('') 
  const [number2, setMumber2] = useState<String>('') 
  const [result, setResult] = useState<Number>() 
  
  const handleClick = () => {
  setResult(Number(number1)+Number(number2))
}

  return (
    <>
      <div>Hello {props.name}</div>
      <input type="text" placeholder='input1' onChange={(e)=> setMumber1(e.target.value)} />
      <hr />
      <input type="text" placeholder='input2' onChange={(e)=> setMumber2(e.target.value)}  />
      <button onClick={handleClick}>add</button>
     {typeof result === 'number' && <h1>result : {result}</h1>}
    </>
    
  )
}
