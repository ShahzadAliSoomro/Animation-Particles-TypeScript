"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import Link from "next/link";
import Design from "./Design";

const texts = [
  {
    heading: "Looking for",
    subheading: "NextJS Developer ?",
    emphasis: "NextJS",
  },
  {
    heading: "Passionate about",
    subheading: "Web Development ?",
    emphasis: "Web Development",
  },
  {
    heading: "Ready to build",
    subheading: "Amazing Websites ?",
    emphasis: "Amazing Websites",
  },
];
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const iconData = [
    {
      link: "https://github.com/ShahzadAliSoomro",
      icon: <TiSocialGithubCircular className="w-12 h-12" />,
      text: "Github",
    },
    {
      link: "https://www.linkedin.com/in/shahzad-ali-51748122b/",
      icon: <TiSocialLinkedinCircular className="w-12 h-12" />,
      text: "LinkedIn",
    },
    {
      link: "https://www.facebook.com/profile.php?id=100067543970671&mibextid=ZbWKwL",
      icon: <TiSocialFacebookCircular className="w-12 h-12" />,
      text: "Facebook",
    },
    {
      link: "https://twitter.com/Shahzad67656720?t=VTYdy-uo4cClxdvEI_4DiA&s=08",
      icon: <TiSocialTwitterCircular className="w-12 h-12" />,
      text: "Twitter",
    },
    {
      link: "https://instagram.com/shahzadhussain1731043?igshid=MzNlNGNkZWQ4Mg==",
      icon: <TiSocialInstagramCircular className="w-12 h-12" />,
      text: "Instagram",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharIndex((prevIndex) => {
        if (prevIndex === texts[currentIndex].emphasis.length - 1) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 100); // Change character every 100 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, currentCharIndex]);

  const { heading, subheading, emphasis } = texts[currentIndex];

  return (
    <div className="w-full relative h-[60vh]">
    <div className="max-w-[1440px] mx-auto container lg:p-10 p-4 ">
      <div className="flex justify-between pt-20 flex-wrap gap-6 lg:flex-nowrap lg:gap-0">
        <div className="flex flex-col gap-9">
          <h2 className="text-4xl">Hi There!</h2>
          <h1 className="text-6xl">I'M SHAHZAD ALI</h1>
          <div>
            <h1 className="lg:text-2xl text-lg font-bold flex gap-2 items-center">
              {heading}{" "}
              <span className="lg:text-5xl text-xl">
                {emphasis.slice(0, currentCharIndex + 1)}
              </span>
            </h1>
            <p className="lg:text-xl text-lg">{subheading}</p>
          </div>

          <div className="absolute top-[480px] left-[580px] cursor-pointer hidden md:block">
            <div className="flex gap-3 items-center border p-2 rounded-full w-[500px] ">
              {iconData.map((icon, index) => (
                <Link key={index} href={icon.link} className="relative group">
                  <div
                    className={`relative transition-all rounded-full text-gray-400 flex items-center ${
                      hoveredIcon === index
                        ? "border-2 border-green-500 text-white"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    {icon.icon}
                    {hoveredIcon === index && (
                      <div className="text-white py-1 px-3 text-lg font-semibold">
                        {icon.text}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="absolute top-12 right-0">
          <Image
            src="/hero3.avif"
            alt="hero"
            width={500}
            height={500}
            className="w-[600px] h-[550px]"
          />
        </div> */}
      </div>
      <Design />
    </div>
    <div className="w-[900px] h-[575px] absolute top-14 right-0 hidden md:block bg-[#011A26] ">
          <Image
            src="/vec-d.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-[600px] h-[605px] object-cover absolute top-0 right-[150px]"
          />
        </div>
    </div>
  );
}
