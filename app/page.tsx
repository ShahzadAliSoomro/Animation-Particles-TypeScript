import React from 'react'
import Design from './components/Design'
import Header from './components/Header'

export default function Home() {
  return (
    <div className='w-full h-screen text-white relative overflow-hidden'>
    <div className='mx-w-7xl mx-auto'>
      <Header />
    </div>
    <div className='w-full h-screen absolute top-0 left-0'>
      <Design />
    </div>
  </div>
  )
}
