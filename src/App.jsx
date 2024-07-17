import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import About from './components/About'
import AnimatedCounter from './components/AnimatedCounter'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto pt-20 px-6">
        <HeroSection />
        <ServicesSection />
        <About />
        <AnimatedCounter />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
