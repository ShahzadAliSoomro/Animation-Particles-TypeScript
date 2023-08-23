import React from 'react'
import Design from './components/Design'
import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div className='w-full h-screen text-white relative overflow-hidden'>
    <div className=''>
      <Header />
      <Hero />
    </div>

    <div className='w-full h-screen absolute top-0 left-0'>
      <Design />
    </div>
  </div>
  )
}
