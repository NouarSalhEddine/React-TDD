import { Button, Heading, useColorMode } from '@chakra-ui/react'
import React from 'react'


function ThemeMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
     <Button onClick={toggleColorMode}>switch color</Button>
     <Heading>{`${colorMode} mode`}</Heading>
    </>
  )
}


export default ThemeMode
