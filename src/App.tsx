import * as React from 'react'
import {  ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login'


function App() {
  return (
    <>
        <ChakraProvider>
          <Login></Login>
        </ChakraProvider>
    </>
  )
}

export default App
