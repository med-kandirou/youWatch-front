import {  ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login'
import Register from './pages/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SearchPage from './pages/searchPage'
import VideoPage from './pages/videoPage'
import MyProfile from './pages/myProfile'
import Profile from './pages/profile'
import Trending from './pages/trending'
import Subscription from './pages/subscription'
import Statistiques from './pages/admin/statistiques'
import Categories from './pages/admin/categories'


function App() {
  return (
    <>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:id" element={<VideoPage />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/statistiques" element={<Statistiques />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search/:inputSearch" element={<SearchPage />} />
            </Routes>
          </BrowserRouter >
        </ChakraProvider>
    </>
  )
}

export default App
