import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'


const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} /> 
            <Route path='/home' element={<Home/>} /> 
            <Route path='/impressum' element={<Impressum/>} />
            <Route path='/datenschutz' element={<Datenschutz/>} /> 
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App
