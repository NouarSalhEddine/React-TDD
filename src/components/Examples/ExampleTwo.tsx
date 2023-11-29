import React from 'react'
import { exampleTwoProps } from './ExampleTwoProps'

function ExampleTwo(props: exampleTwoProps) {
  
  return (
    <div>hello { props.name}</div>  
  )
}

export default ExampleTwo