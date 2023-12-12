import React, { useState } from 'react'
import { skillsProps } from './skillsProps'

function Skills(props: skillsProps) {
  
  const { skills } = props
  const [isLoggedin, setIsLoggedin] = useState(false)

  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {isLoggedin === false ? <button onClick={() => setIsLoggedin(true)} >Login</button> : <button >start learning</button>}
    </>
  )
}

export default Skills