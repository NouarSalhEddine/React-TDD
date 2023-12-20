import React from 'react';
import './App.css';
import ThemeMode from './components/Examples/theme-mode/ThemeMode';
import { ChakraProvider } from '@chakra-ui/react';


function App() { 

  return (

        <ChakraProvider>
        <ThemeMode  />
      </ChakraProvider>

  );
}

export default App;
