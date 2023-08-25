"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const texts = [
  "I'm Shahzad Ali",
  "I'm a web developer",
  "I'm a frontend developer"
];

export default function About() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharIndex((prevIndex) => {
        const word = texts[currentTextIndex].split(" ")[currentWordIndex];
        if (prevIndex === word.length - 1) {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % texts[currentTextIndex].split(" ").length);
          if (currentWordIndex === 0) {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
          return 0;
        }
        return prevIndex + 1;
      });
    }, 300); // Change letter every 100 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [currentTextIndex, currentWordIndex, currentCharIndex]);
  return (
    <div className="w-full mx-auto container p-10">
      <div className="text-4xl text-center pt-10">
        <h1>About</h1>
      </div>
      <div className="flex justify-between pt-5 flex-wrap gap-6 lg:flex-nowrap lg:gap-0">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
        {texts[currentTextIndex].split(" ").map((word, wordIndex) => (
        <h4 key={wordIndex} className="text-2xl ">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className={
                wordIndex < currentWordIndex || (wordIndex === currentWordIndex && charIndex <= currentCharIndex)
                  ? ""
                  : "hidden"
              }
            >
              {char}
            </span>
          ))}
          {wordIndex < texts[currentTextIndex].split(" ").length - 1 && " "}
        </h4>
      ))}
      </div>
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
