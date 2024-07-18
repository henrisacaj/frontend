import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import About from '../components/About'
import AnimatedCounter from '../components/AnimatedCounter'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'


const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
  return (
    <>
      <Navbar />
      <div className={`${darkMode ? "dark" : ""} max-w-full mx-auto pt-20 px-6`}>
        <HeroSection />
        <ServicesSection />
        <About />
        <AnimatedCounter />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}

export default Home
