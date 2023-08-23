import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='w-full mx-auto container p-10'>
        <div className='flex justify-between pt-20'>
            <div className='flex flex-col gap-9'>
                <h2 className='text-4xl'>Hi There!</h2>
                <h1 className='text-6xl'>I'M SHAHZAD ALI</h1>
                <h2 className='text-4xl pt-20'>Frontend Developer</h2>
            </div>
            <div className=''>
                <Image src="/hero3.avif" alt='hero' width={500} height={500} />
            </div>
        </div>
    </div>
  )
}
