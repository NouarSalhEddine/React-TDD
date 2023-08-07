import React from 'react'

type GreetProps = {
  name?:String
}
const Greet = (props: GreetProps) => {
  const [input1 , setInput1] = React.useState<Number>()
  const [input2, setInput2] = React.useState<Number>()
  const [result, setResult] = React.useState<Number>()
  
  const sum = () => {
  setResult(Number(input1) + Number(input2)) 
}
  return (
    <>
      <div>
        Hello {props.name}
        <input onChange={(e)=> setInput1(Number(e.target.value))} type="number" placeholder='input1' />
        <input onChange={(e)=> setInput2(Number(e.target.value))} type="number" placeholder='input2' />
        <button onClick={sum}>add</button>
        <div>
        {String(result)}

        </div>

      </div>
    </>
  )
}

export default Greet