import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full bg-[#1E293B] ">
      <div className="max-w-[1340px] mx-auto container lg:p-10 p-4">
        <div className="text-4xl flex flex-col justify-center items-center gap-1">
          <h1 className="">About Me</h1>
          <p className="border-b-2 w-44 border-green-500"></p>
        </div>
        <div className="w-full flex flex-col lg:flex-row pt-12 lg:space-x-10">
          <div className="w-full lg:w-6/12 mb-10 lg:mb-0" data-aos="fade-right">
            <Image
              src="/prr.avif"
              alt="hero"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="w-full lg:w-6/12 flex flex-col gap-6">
            <h3 className="text-4xl font-semibold">
              Hi There! I'm Shahzad Ali
            </h3>
            <h5 className="text-2xl text-green-500">Web Developer</h5>
            <p className="text-lg text-gray-400">
              I am a skilled Web Developer with a passion for crafting seamless
              web experiences. Proficient in HTML, CSS, JavaScript, and React, I
              create responsive and user-friendly web applications. My goal is
              to provide innovative solutions that engage users and enhance
              their online interactions.
            </p>
            <div className="flex flex-col gap-4 text-lg text-gray-400">
              <div className="flex gap-9">
                <p className="font-semibold">Birthday:</p>
                <p>Jun 20, 1998</p>
              </div>
              <div className="flex gap-12">
                <p className="font-semibold">Phone:</p>
                <p>+92 304 1797211</p>
              </div>
              <div className="flex gap-14">
                <p className="font-semibold">Email:</p>
                <p className="">shahzadhussain 1731043@gmail.com</p>
              </div>
              <div className="flex gap-14">
                <p className="font-semibold">From:</p>
                <p>Pakistan</p>
              </div>
              <div className="flex gap-3">
                <p className="font-semibold">Language:</p>
                <p>Urdu, English</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Freelancer:</p>
                <p>Availble</p>
              </div>
            </div>
            <div className="mt-3">
              <button className="bg-green-500 text-lg p-4 py-2 rounded-full hover:-translate-y-3 transition-all duration-500">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
