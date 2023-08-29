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
    { link: "https://github.com/ShahzadAliSoomro", icon: <TiSocialGithubCircular className="w-12 h-12" />, text: "Github" },
    { link: "https://www.linkedin.com/in/shahzad-ali-51748122b/", icon: <TiSocialLinkedinCircular className="w-12 h-12" />, text: "LinkedIn" },
    { link: "https://www.facebook.com/profile.php?id=100067543970671&mibextid=ZbWKwL", icon: <TiSocialFacebookCircular className="w-12 h-12" />, text: "Facebook" },
    { link: "https://twitter.com/Shahzad67656720?t=VTYdy-uo4cClxdvEI_4DiA&s=08", icon: <TiSocialTwitterCircular className="w-12 h-12" />, text: "Twitter" },
    { link: "https://instagram.com/shahzadhussain1731043?igshid=MzNlNGNkZWQ4Mg==", icon: <TiSocialInstagramCircular className="w-12 h-12" />, text: "Instagram" },
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
    
    <div className="max-w-[1440px] mx-auto container lg:p-10 p-4" >
      
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

   <div className="flex cursor-pointer">
  <div className="flex gap-5 items-center border p-2 rounded-full">
    {iconData.map((icon, index) => (
      <Link key={index} href={icon.link} className="relative group">
        <div
          className={`relative transition-all rounded-full text-gray-400 flex items-center ${
            hoveredIcon === index ? 'border-2 border-green-500 text-white' : ''
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
          {/* <div className="flex group cursor-pointer">
            <div className="flex gap-5 border p-2">
            <Link href="https://github.com/ShahzadAliSoomro" className="">
              <TiSocialGithubCircular className="w-10 h-10 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/shahzad-ali-51748122b/">
              <TiSocialLinkedinCircular className="w-10 h-10 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100067543970671&mibextid=ZbWKwL">
              <TiSocialFacebookCircular className="w-10 h-10 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://twitter.com/Shahzad67656720?t=VTYdy-uo4cClxdvEI_4DiA&s=08">
              <TiSocialTwitterCircular className="w-10 h-10 hover:bg-green-500 rounded-full" />
            </Link>
            <Link href="https://instagram.com/shahzadhussain1731043?igshid=MzNlNGNkZWQ4Mg==">
                <TiSocialInstagramCircular className="w-10 h-10 hover:bg-green-500 rounded-full" />
            </Link>
            </div>
            <div className="absolute top-[420px] left-[120px] group-hover:block text-white">
              <p>Contact</p>
            </div>
          </div> */}
        </div>
        <div className="bg-transparent">
          <Image src="/hero3.avif" alt="hero" width={500} height={500} className=""/>
        </div>
      </div>
      <Design />
    </div>
  );
}
