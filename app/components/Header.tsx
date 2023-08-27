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

const colorOptions = [
  "bg-green-700",
  "bg-red-700",
  "bg-blue-700",
  "bg-yellow-700",
  "bg-purple-700",
  "bg-black",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");
  const [activeNavItem, setActiveNavItem] = useState(""); // State to track active navigation item
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      setCurrentColor(randomColor);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavItemClick = (label: any) => {
    setActiveNavItem(label); // Set the clicked navigation item as active
    setMobileMenuOpen(false); // Close mobile menu after clicking
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
      className={`fixed w-full transition-all duration-300
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
            <Link href="/">
              <p className="-my-7 lg:my-0 pl-3 lg:pl-0">Shahzad</p>
            </Link>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick} // Pass the function here
            />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed top-12 left-end w-full bg-slate-800">
          <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              // navbarBgColor={navbarBgColor}
              activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
              handleNavItemClick={handleNavItemClick} // Pass the click handler
            />
          </div>
        </div>
      )}
      {/* <div
        className={`hidden md:block w-full container mx-auto p-10 ${
          isVisible ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="flex ">
          <div
            className={`w-full text-lg font-semibold flex items-center ${
              navbarBgColor === "white" ? "text-black" : "text-white"
            }`}
          >
            <p className="border-r-8 border-black h-36"></p>
            <div className="flex flex-col">
              <h1 className="text-2xl pl-3 font-bold flex gap-2 items-center">
                {heading}{" "}
                <span className="text-5xl">
                  {emphasis.slice(0, currentCharIndex + 1)}
                </span>
              </h1>
              <p className="text-xl pl-3">{subheading}</p>
              <div className="flex pl-3">
           <button className={`mt-6 px-4 py-2 rounded bg-black text-white ${currentColor} shimmer`}>
          Order Now
        </button>
           </div>
            </div>
           
          </div>
         
          <div className="w-full flex justify-end">
            <Image src="/bgg.png" alt="hero" width={500} height={500} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

function NavItem({
  icon,
  label,
  link,
  navbarBgColor,
  activeNavItem,
  handleNavItemClick,
}: any) {
  const navItemClassName = `flex gap-1 items-center cursor-pointer transition duration-300 ${
    navbarBgColor === "white" ? "text-black" : "text-white"
  } ${activeNavItem === label ? "border-b-2 border-blue-500" : ""}`; // Add border class for active item
  const navItemStyle = {
    backgroundColor:
      navbarBgColor === "white" ? "rgba(255, 255, 255, 0.1)" : "transparent",
  };

  // Check if the link is for the resume PDF
  const isResumeLink = link === "/public/ShahzadAli.pdf";

  if (isResumeLink) {
    return (
      <div className={navItemClassName} style={navItemStyle}>
        <a
          href={link}
          download="ShahzadAli.pdf" // Set the download attribute
          className="flex gap-1 items-center" // No need for hover styles for direct download links
          style={navItemStyle}
        >
          {icon}
          <p
            className={navbarBgColor === "white" ? "text-black" : "text-white"}
          >
            {label}
          </p>
        </a>
      </div>
    );
  } else {
    // For other links, use the original Link component
    return (
      <div
        className={navItemClassName}
        style={navItemStyle}
        onClick={() => handleNavItemClick(label)} // Handle click to change active item
      >
        <Link href={link}>
          <div className="flex gap-1 items-center">
            {icon}
            <p
              className={
                navbarBgColor === "white" ? "text-black" : "text-white"
              }
            >
              {label}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
