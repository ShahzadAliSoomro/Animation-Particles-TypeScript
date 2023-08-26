import React from "react";
import Project from "../components/Project";

export default function Page() {
  return (
    <div className="w-full pt-20 ">
      <div className="w-full bg-[#fff] z-50 opacity-60">
        <div className="mx-auto container flex justify-center items-center text-center">
          <div className="p-8 space-y-8 text-black">
            <h2 className="lg:text-5xl text-3xl font-bold">
              Explore Our Portfolio
            </h2>
            <div className="flex justify-center items-center">
              <p className="w-full lg:w-5/12">
                Browse through our showcased projects and uncover the ingenuity
                and originality that define our work. We take pride in
                delivering exceptional solutions tailored to meet your unique
                requirements.
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
        <Project />
      </div>
     
    </div>
  );
}
