import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      </Routes>
      
    </>
  )
}

export default App
