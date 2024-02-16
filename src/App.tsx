import * as React from 'react'
import {  ChakraProvider } from '@chakra-ui/react'
import Register from './pages/register'
import Login from './pages/login'
import Video from './components/video'
function App() {

  return (
    <>
        <ChakraProvider>
          {/* <Register /> */}
          {/* <Video /> */}
          <Login />
        </ChakraProvider>
    </>
  )
}

export default App
