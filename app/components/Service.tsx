import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'

const services = [
    {
        id: 1,
        title: "Sketches",
        text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
    },
    {
        id: 2,
        title: "Sketches",
        text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
    },
    {
        id: 3,
        title: "Sketches",
        text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
    },
    {
        id: 4,
        title: "Sketches",
        text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
    },
    {
        id: 5,
        title: "Sketches",
        text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
    },
    {
        id: 6,
        title: "Sketches",
        text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
    },
    
]

export default function Service() {
  return (
    <div className='w-full bg-[#1E293B] p-4'>
        <div className='max-w-[1440px] mx-auto px-10'>
        <div className="text-4xl flex flex-col justify-center items-center pt-10 gap-1">
        
        <h1 className="">Service</h1>
        <p className="border-b-2 w-32 border-green-500"></p>
      </div>

    <div className='max-w-[1440px] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 pt-10'>
        {services.map((servic) => (
            <div className='border flex justify-center items-center hover:bg-green-500 hover:shadow-lg hover:scale-105 transition-all duration-500
            '>
            <div className='flex flex-col justify-center items-center p-8 gap-4
            '>
            <div>
                <AiOutlineHome className="w-12 h-12"/>
            </div>
            <h3 className='text-xl'>{servic.title}</h3>
            <p className='w-full lg:w-80'>{servic.text}</p>
            </div>
        </div>
        ))}
        
    </div>
        </div>
    </div>
  )
}
