"use client";
import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharIndex((prevIndex) => {
        if (prevIndex === texts[currentIndex].emphasis.length - 1) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 300); // Change character every 100 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, currentCharIndex]);

  const { heading, subheading, emphasis } = texts[currentIndex];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarBgColor("white");
    } else {
      setNavbarBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-2/4 transition-all duration-300
    ${navbarBgColor === "white" ? "bg-white opacity-80" : "bg-transparent"}`}
      style={{ zIndex: 100 }}
    >
      <div className="container mx-auto py-4 lg:px-10 px-0">
        <div
          className={`md:hidden pr-3 flex justify-end ${
            navbarBgColor === "white" ? "text-black" : "text-white"
          }`}
        >
          <button onClick={() => setMobileMenuOpen((prevState) => !prevState)}>
            <AiOutlineMenu className="w-8 h-8" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`text-lg font-semibold ${
              navbarBgColor === "white" ? "text-black" : "text-white"
            }`}
          >
            <p className="-my-7 lg:my-0 pl-3 lg:pl-0">Shahzad</p>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              navbarBgColor={navbarBgColor}
            />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed top-12 left-end w-full bg-slate-800 ">
          <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              navbarBgColor={navbarBgColor}
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              navbarBgColor={navbarBgColor}
            />
          </div>
        </div>
      )}
      <div
        className={`hidden md:block w-full container mx-auto p-10 ${
          isVisible ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="flex justify-between">
          <div
            className={`w-full text-lg font-semibold flex items-center ${
              navbarBgColor === "white" ? "text-black" : "text-white"
            }`}
          >
            <p className="border-r-8 border-black h-28"></p>
            <div className="flex flex-col">
              <h1 className="text-2xl pl-3 font-bold flex gap-2 items-center">
                {heading}{" "}
                <span className="text-6xl">
                  {emphasis.slice(0, currentCharIndex + 1)}
                </span>
              </h1>
              <p className="text-xl pl-3">{subheading}</p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Image src="/bgg.png" alt="hero" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, link, navbarBgColor }: any) {
  const navItemClassName = `flex gap-1 items-center cursor-pointer transition duration-300 hover:text-blue-500 ${
    navbarBgColor === "white" ? "text-black" : "text-white"
  }`;
  const navItemStyle = {
    backgroundColor:
      navbarBgColor === "white" ? "rgba(255, 255, 255, 0.1)" : "transparent",
  };
  return (
    <div className={navItemClassName} style={navItemStyle}>
      <Link href={link}>
        <div className="flex gap-1 items-center">
          {icon}
          <p
            className={navbarBgColor === "white" ? "text-black" : "text-white"}
          >
            {label}
          </p>
        </div>
      </Link>
    </div>
  );
}
