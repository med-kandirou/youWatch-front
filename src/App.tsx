import * as React from 'react'
import {  ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login'
import Register from './pages/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter >
        </ChakraProvider>
    </>
  )
}

export default App
