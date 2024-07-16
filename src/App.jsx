import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
