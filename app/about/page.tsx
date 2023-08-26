import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="w-full pt-20">
      <div className="w-full">
        <div className="mx-auto container flex justify-center items-center text-center">
          <div className="p-8 space-y-8 text-white">
            <h2 className="lg:text-5xl text-3xl font-bold">
              Welcome to Our Portfolio
            </h2>
            <div className="flex justify-center items-center">
              <p className="w-full lg:w-5/12">
                Explore our latest projects and discover the creativity and
                innovation that defines our work. We take pride in delivering
                exceptional solutions tailored to your needs.
              </p>
            </div>
            <div className="">
              <button className="bg-[#fff] text-black z-50 p-3 font-semibold text-lg rounded shadow-md hover:-translate-y-3 transition-all duration-500">
                Get Inspired
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      {/* <div className='justify-evenly'>
            <Footer />
        </div> */}
    </div>
  );
}
