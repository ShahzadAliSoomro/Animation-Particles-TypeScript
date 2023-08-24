import React from 'react';
import {IoLocationOutline, IoCallOutline} from 'react-icons/io5';
import {SiMinutemailer} from 'react-icons/si';

export default function Contact() {
  return (
    <div className="w-full container mx-auto">
    <div className="py-14 px-4 md:px-0">
      <div className="w-full mx-auto border-b border-white">
        <h1 className="text-2xl pb-3 text-white">CONTACT US</h1>
      </div>
      <div className="w-full flex lg:space-x-20 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-6/12 flex flex-col gap-5">
          <h3 className="text-xl text-white pt-5">
          Fill out the contact form and shahzad will contact you directly.
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 py-3 outline-none text-white border-2 placeholder:text-lg placeholder:font-semibold border-gray-200 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-2 py-3 outline-none text-white border-2 placeholder:text-lg placeholder:font-semibold border-gray-200 bg-transparent"
          />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea
                placeholder="Message"
                typeof="text"
                className=" no-resize appearance-none block w-full text-white border-2 placeholder:text-lg placeholder:font-semibold border-gray-200 bg-transparent py-2 px-2 mb-3 leading-tight focus:outline-none  h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <button className="w-full py-3 border-2 border-green-500 hover:text-white hover:bg-green-500 rounded-full text-green-500 font-bold text-lg">
            Send
          </button>
          <p className="text-white text-sm font-semibold">
            This site is protected by CAPTCHA and the Google{" "}
            <a href="#" className="text-green-500">
              {" "}
              Privacy Policy{" "}
            </a>
            and{" "}
            <a href="#" className="text-green-500">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>

        <div className="w-full lg:w-6/12 flex flex-col space-y-10  ">
          <h3 className="text-xl font-semibold text-white pt-5 ">
            {`Better yet, see us in person!`}
          </h3>
          <div className='flex gap-1 text-lg'>
            <IoLocationOutline className="w-10 h-10"/>
            <p className="text-white w-72">House No.1562 Sector I10/1 Main Double Road, Islamabad</p>
          </div>
          <div className='flex gap-1 text-lg'>
            <IoCallOutline className="w-10 h-10"/>
            <div>
            <p className="text-white">Phone: +92 304-1797211</p>
            <p className="text-white ">Whatsaap No: 03041797211</p>
            </div>
          </div>
          <div className='flex gap-1 text-lg'>
            <SiMinutemailer className="w-10 h-10 bg-transparent opacity-50 bg-slate-50 rounded-full"/>
            <p className="text-white ">Email: info@yoursite.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
