import React from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineContacts }from 'react-icons/ai';
import {BiSortDown} from 'react-icons/bi';

export default function Header() {
  return (
    <div className='w-full mx-auto container p-5'>
        <div className='flex justify-between'>
            <div className='flex text-white text-lg font-semibold'>
                <p>Shahzad</p>
            </div>
            <div className='flex gap-6 font-semibold'>
                <div className='flex gap-1 '>
                    <AiOutlineHome className='w-5 h-5'/>
                    <p>Home</p>
                </div>
                <div className='flex gap-1'>
                    <AiOutlineUser className='w-5 h-5'/>
                    <p>About</p>
                </div>
                <div className='flex gap-1'>
                    <AiOutlineFundProjectionScreen className='w-5 h-5'/>
                    <p>Project</p>
                </div>
                <div className='flex gap-1'>
                    <BiSortDown className='w-5 h-5'/>
                    <p>Resume</p>
                </div>
                <div className='flex gap-1'>
                    <AiOutlineContacts className='w-5 h-5'/>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    
  </div>
  )
}
