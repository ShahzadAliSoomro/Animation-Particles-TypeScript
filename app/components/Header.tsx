"use client";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="fixed w-full z-40">
      <div className="container mx-auto py-4">
        <div className="md:hidden pr-3 flex justify-end text-white">
          <button onClick={toggleMobileMenu}>
            <AiOutlineMenu className="w-8 h-8"/>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            <p className="-my-7 lg:my-0 pl-3 lg:pl-0">Shahzad</p>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <NavItem icon={<AiOutlineHome />} label="Home" />
            <NavItem icon={<AiOutlineUser />} label="About" />
            <NavItem icon={<AiOutlineFundProjectionScreen />} label="Project" />
            <NavItem icon={<BiSortDown />} label="Resume" link="/public/ShahzadAli.pdf" />
            <NavItem icon={<AiOutlineContacts />} label="Contact" />
          </div>
         
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed top-12 left-end w-full bg-slate-800 ">
          <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
          <NavItem icon={<AiOutlineHome />} label="Home" />
          <NavItem icon={<AiOutlineUser />} label="About" />
          <NavItem
            icon={<AiOutlineFundProjectionScreen />}
            label="Project"
          />
          <NavItem
            icon={<BiSortDown />}
            label="Resume"
            link="/public/ShahzadAli.pdf"
          />
          <NavItem icon={<AiOutlineContacts />} label="Contact" />
        </div>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon, label }: any) {
  return (
    <div className="flex gap-1 items-center cursor-pointer transition duration-300 hover:text-blue-500">
      {icon}
      <p className="text-white">{label}</p>
    </div>
  );
}