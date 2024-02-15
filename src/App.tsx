import * as React from 'react'
import {  ChakraProvider } from '@chakra-ui/react'
import Register from './pages/register'
import Video from './components/video'
function App() {

  return (
    <>
        <ChakraProvider>
          {/* <Register /> */}
          <Video />
        </ChakraProvider>
    </>
  )
}

export default App
