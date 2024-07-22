import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import About from '../components/About'
import AnimatedCounter from '../components/AnimatedCounter'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Career from '../components/Career'


const Home = () => {
    
  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto pt-20 px-6">
        <HeroSection />
        <ServicesSection />
        <About />
        <AnimatedCounter />
        <Projects />
        <Career />
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}

export default Home
