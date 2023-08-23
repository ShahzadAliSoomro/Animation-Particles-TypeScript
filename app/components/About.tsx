import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full mx-auto container p-10">
      <div className="text-4xl text-center pt-10">
        <h1>About</h1>
      </div>
      <div className="flex justify-between pt-5">
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl">I'm Shahzad Ali</h4>
          <p className="w-full lg:w-6/12 text-justify">
            Experienced frontend developer skilled in HTML, CSS, JavaScript,
            React, Next.js, and Tailwind CSS. Creates responsive and dynamic web
            applications with a strong grasp of HTML structure, CSS styling, and
            JavaScript functionality. Proficient in React and Next.js for
            scalable and performant applications. Utilizes Tailwind CSS for
            efficient and responsive styling. Offers expertise in the front-end
            development stack for modern and engaging web experiences.
          </p>
        </div>
        <div className="w-full">
          <Image src="/hero3.avif" alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
