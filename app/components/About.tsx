import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full mx-auto container p-10">
      <div className="text-4xl text-center pt-10">
        <h1>About</h1>
      </div>
      <div className="flex justify-between pt-5 flex-wrap gap-6 lg:flex-nowrap lg:gap-0">
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl">I'm Shahzad Ali</h4>
          <p className="w-full lg:w-6/12 text-justify">
            I'm Shahzad, a skilled Web Developer with over 2 years of hands-on
            experience. Proficient in HTML, CSS, Bootstrap, JavaScript,
            Typescript, ReactJs, NextJs, Tailwindcss, and API Integration, I
            create seamless web experiences that captivate users. I prioritize
            maintainability and code quality as a developer. With a proven track
            record of developing websites from scratch, I ensure every detail is
            meticulously crafted. Expect exceptional quality, well-organized
            source code, and prompt communication for timely updates. Customer
            satisfaction and transparency are my core values, ensuring a
            seamless.
          </p>
        </div>
        <div className="w-full">
          <Image src="/bgg.png" alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
