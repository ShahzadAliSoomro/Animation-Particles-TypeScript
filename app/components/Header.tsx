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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

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
    <div className={`fixed w-full transition-all duration-300 
    ${navbarBgColor === "white" ? "bg-white opacity-90" : "bg-transparent"}`} style={{ zIndex: 100 }}>
      <div className="container mx-auto py-4">
        <div className={`md:hidden pr-3 flex justify-end ${navbarBgColor === "white" ? "text-black" : "text-white"}`}>
          <button onClick={() => setMobileMenuOpen(prevState => !prevState)}>
            <AiOutlineMenu className="w-8 h-8"/>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className={`text-lg font-semibold ${navbarBgColor === "white" ? "text-black" : "text-white"}`}>
            <p className="-my-7 lg:my-0 pl-3 lg:pl-0">Shahzad</p>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <NavItem icon={<AiOutlineHome />} label="Home" link="/" navbarBgColor={navbarBgColor} />
            <NavItem icon={<AiOutlineUser />} label="About" link="/about" navbarBgColor={navbarBgColor} />
            <NavItem icon={<AiOutlineFundProjectionScreen />} label="Project" link="/project" navbarBgColor={navbarBgColor} />
            <NavItem icon={<BiSortDown />} label="Resume" link="/public/ShahzadAli.pdf" navbarBgColor={navbarBgColor} />
            <NavItem icon={<AiOutlineContacts />} label="Contact" link="/contact" navbarBgColor={navbarBgColor} />
          </div>
         
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed top-12 left-end w-full bg-slate-800 ">
          <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
          <NavItem icon={<AiOutlineHome />} label="Home" link="/" navbarBgColor={navbarBgColor}  />
          <NavItem icon={<AiOutlineUser />} label="About" link="/about" navbarBgColor={navbarBgColor} />
          <NavItem
            icon={<AiOutlineFundProjectionScreen />}
            label="Project"
            link="/project" navbarBgColor={navbarBgColor}
          />
          <NavItem
            icon={<BiSortDown />}
            label="Resume"
            link="/public/ShahzadAli.pdf" navbarBgColor={navbarBgColor} 
          />
          <NavItem icon={<AiOutlineContacts />} label="Contact" link="/contact" navbarBgColor={navbarBgColor} />
        </div>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon, label, link, navbarBgColor }: any) {
  const navItemClassName = `flex gap-1 items-center cursor-pointer transition duration-300 hover:text-blue-500 ${navbarBgColor === "white" ? "text-black" : "text-white"}`;
  const navItemStyle = { backgroundColor: navbarBgColor === "white" ? "rgba(255, 255, 255, 0.1)" : "transparent" };
  return (
    <div className={navItemClassName} style={navItemStyle}>
      <Link href={link}>
        <div className="flex gap-1 items-center">
          {icon}
          <p className={navbarBgColor === "white" ? "text-black" : "text-white"}>{label}</p>
        </div>
      </Link>
    </div>
  );
}