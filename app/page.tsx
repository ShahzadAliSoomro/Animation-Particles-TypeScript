import React from 'react'
import Design from './components/Design'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
    
    <div className='w-full text-white'>
    <Hero />
    <About />
    <Project />
    <Contact />
    <Footer />
  </div>

  )
}
