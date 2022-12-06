import React from 'react'
import Header from './components/Header/index'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Login from './components/Login/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Header />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App