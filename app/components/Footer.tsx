import React from 'react';
import {TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialGithubCircular} from 'react-icons/ti';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-slate-800'>
    <div className='w-full container mx-auto bg-transparent '>
        <div className='flex justify-between text-white p-3'>
            <div className='text-lg'>
                <p>Designed and Developed by Shahzad Ali</p>
            </div>
            <div className='text-lg'>
                <p>Copyright © 2023 SZ</p>
            </div>
            <div className='flex gap-5 cursor-pointer'>
                    <Link href="">
                        <TiSocialGithubCircular className='w-8 h-8' />
                    </Link>
                    <Link href="">
                        <TiSocialLinkedinCircular className='w-8 h-8' />
                    </Link>
                    <Link href="">
                        <TiSocialFacebookCircular className='w-8 h-8' />
                    </Link>
                    <Link href="">
                        <TiSocialTwitterCircular className='w-8 h-8' />
                    </Link>
                </div>
        </div>
    </div>
    </div>
  )
}
