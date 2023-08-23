"use client";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";

export default function Header() {
  
  return (
    <div className="fixed w-full">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            <p>Shahzad</p>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <NavItem icon={<AiOutlineHome />} label="Home" />
            <NavItem icon={<AiOutlineUser />} label="About" />
            <NavItem icon={<AiOutlineFundProjectionScreen />} label="Project" />
            <NavItem icon={<BiSortDown />} label="Resume" />
            <NavItem icon={<AiOutlineContacts />} label="Contact" />
          </div>
         
        </div>
      </div>
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



// import React from "react";
// import {
//   AiOutlineHome,
//   AiOutlineUser,
//   AiOutlineFundProjectionScreen,
//   AiOutlineContacts,
// } from "react-icons/ai";
// import { BiSortDown } from "react-icons/bi";

// export default function Header() {
//   return (
//     <div className="w-full mx-auto container p-5 fixed">
//       <div className="flex justify-between">
//         <div className="flex text-white text-lg font-semibold">
//           <p>Shahzad</p>
//         </div>
//         <div className="flex gap-6 font-semibold">
//           <div className="flex gap-1 ">
//             <AiOutlineHome className="w-5 h-5" />
//             <p>Home</p>
//           </div>
//           <div className="flex gap-1">
//             <AiOutlineUser className="w-5 h-5" />
//             <p>About</p>
//           </div>
//           <div className="flex gap-1">
//             <AiOutlineFundProjectionScreen className="w-5 h-5" />
//             <p>Project</p>
//           </div>
//           <div className="flex gap-1">
//             <BiSortDown className="w-5 h-5" />
//             <p>Resume</p>
//           </div>
//           <div className="flex gap-1">
//             <AiOutlineContacts className="w-5 h-5" />
//             <p>Contact</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
