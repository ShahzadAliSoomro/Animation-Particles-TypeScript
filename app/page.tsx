import React from 'react'
import Design from './components/Design'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'


export default function Home() {
  return (
    <div className='w-full h-screen text-white relative '>
    <div className=''>
      
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>

    <div className='w-full h-screen absolute top-0 left-0'>
      
    </div>
  </div>
  )
}
