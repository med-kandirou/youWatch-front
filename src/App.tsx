import {  ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login'
import Register from './pages/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Video from './pages/videoPage'
import SearchPage from './pages/searchPage'


function App() {
  return (
    <>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch" element={<Video />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </BrowserRouter >
        </ChakraProvider>
    </>
  )
}

export default App
