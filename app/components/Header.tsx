// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   AiOutlineHome,
//   AiOutlineUser,
//   AiOutlineFundProjectionScreen,
//   AiOutlineContacts,
//   AiOutlineMenu,
// } from "react-icons/ai";
// import { BiSortDown } from "react-icons/bi";
// import Link from "next/link";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [navbarBgColor, setNavbarBgColor] = useState("transparent");
//   const [activeNavItem, setActiveNavItem] = useState(""); // State to track active navigation item
//   const headerRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleNavItemClick = (label: any) => {
//     setActiveNavItem(label); // Set the clicked navigation item as active
//     setMobileMenuOpen(false); // Close mobile menu after clicking
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get the header's height to adjust for scrolling offsets
//       const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;

//       // Calculate the scroll position and find the currently visible section
//       const scrollY = window.scrollY + headerHeight;

//       interface Sections {
//         home: HTMLElement | null;
//         hero: HTMLElement | null;
//         about: HTMLElement | null;
//         project: HTMLElement | null;
//         contact: HTMLElement | null;
//       }

//       const sections: Sections = {
//         home: document.getElementById("home"),
//         hero: document.getElementById("hero"),
//         about: document.getElementById("about"),
//         project: document.getElementById("project"),
//         contact: document.getElementById("contact"),
//       };

//       let currentSection = "home";

//       // Use Object.keys to get an array of keys and then iterate over them
//       (Object.keys(sections) as (keyof Sections)[]).forEach((sectionName) => {
//         const section = sections[sectionName];
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;
//           if (scrollY >= sectionTop && scrollY < sectionBottom) {
//             currentSection = sectionName;
//           }
//         }
//       });

//       // Update the activeNavItem based on the current section
//       setActiveNavItem(currentSection);

//       // Update the background color based on scroll position
//       if (window.scrollY > 100) {
//         setNavbarBgColor("white");
//       } else {
//         setNavbarBgColor("transparent");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed w-full transition-all duration-300
//     ${navbarBgColor === "white" ? "bg-white opacity-80" : "bg-transparent"}`}
//       style={{ zIndex: 100 }}
//       ref={headerRef}
//     >
//       <div className="max-w-[1440px] mx-auto py-4 lg:px-10 px-0">
//         <div
//           className={`md:hidden pr-3 flex justify-end ${
//             navbarBgColor === "white" ? "text-black" : "text-white"
//           }`}
//         >
//           <button onClick={toggleMobileMenu}>
//             <AiOutlineMenu className="w-8 h-8" />
//           </button>
//         </div>
//         <div className="flex justify-between items-center">
//           <div
//             className={`text-lg font-semibold ${
//               navbarBgColor === "white" ? "text-black" : "text-white"
//             }`}
//           >
//             <Link href="/">
//               <p className="-my-7 lg:my-0 pl-3 lg:pl-0">Shahzad</p>
//             </Link>
//           </div>
//           <div className="hidden md:flex gap-6 font-semibold">
//             <NavItem
//               icon={<AiOutlineHome />}
//               label="Home"
//               link="/"
//               navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem}
//               handleNavItemClick={handleNavItemClick} // Pass the function here
//             />
//             <NavItem
//               icon={<AiOutlineUser />}
//               label="About"
//               link="/about"
//               navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem}
//               handleNavItemClick={handleNavItemClick} // Pass the function here
//             />
//             <NavItem
//               icon={<AiOutlineFundProjectionScreen />}
//               label="Project"
//               link="/project"
//               navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem}
//               handleNavItemClick={handleNavItemClick} // Pass the function here
//             />
//             <NavItem
//               icon={<BiSortDown />}
//               label="Resume"
//               link="/public/ShahzadAli.pdf"
//               navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem}
//               handleNavItemClick={handleNavItemClick} // Pass the function here
//             />
//             <NavItem
//               icon={<AiOutlineContacts />}
//               label="Contact"
//               link="/contact"
//               navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem}
//               handleNavItemClick={handleNavItemClick} // Pass the function here
//             />
//           </div>
//         </div>
//       </div>
//       {mobileMenuOpen && (
//         <div className="fixed top-12 left-end w-full bg-slate-800">
//           <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
//             <NavItem
//               icon={<AiOutlineHome />}
//               label="Home"
//               link="/"
//               // navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
//               handleNavItemClick={handleNavItemClick} // Pass the click handler
//             />
//             <NavItem
//               icon={<AiOutlineUser />}
//               label="About"
//               link="/about"
//               // navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
//               handleNavItemClick={handleNavItemClick} // Pass the click handler
//             />
//             <NavItem
//               icon={<AiOutlineFundProjectionScreen />}
//               label="Project"
//               link="/project"
//               // navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
//               handleNavItemClick={handleNavItemClick} // Pass the click handler
//             />
//             <NavItem
//               icon={<BiSortDown />}
//               label="Resume"
//               link="/public/ShahzadAli.pdf"
//               // navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
//               handleNavItemClick={handleNavItemClick} // Pass the click handler
//             />
//             <NavItem
//               icon={<AiOutlineContacts />}
//               label="Contact"
//               link="/contact"
//               // navbarBgColor={navbarBgColor}
//               activeNavItem={activeNavItem} // Pass activeNavItem to the NavItem component
//               handleNavItemClick={handleNavItemClick} // Pass the click handler
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function NavItem({
//   icon,
//   label,
//   link,
//   navbarBgColor,
//   activeNavItem,
//   handleNavItemClick,
// }: any) {
//   const navItemClassName = `flex gap-1 items-center cursor-pointer transition duration-300 ${
//     navbarBgColor === "white" ? "text-black" : "text-white"
//   } ${activeNavItem === label ? "border-b-2 border-blue-500" : ""}`; // Add border class for the active item
//   const navItemStyle = {
//     backgroundColor:
//       navbarBgColor === "white" ? "rgba(255, 255, 255, 0.1)" : "transparent",
//   };

//   // Check if the link is for the resume PDF
//   const isResumeLink = link === "/public/ShahzadAli.pdf";

//   if (isResumeLink) {
//     return (
//       <div className={navItemClassName} style={navItemStyle}>
//         <a
//           href={link}
//           download="ShahzadAli.pdf" // Set the download attribute
//           className="flex gap-1 items-center" // No need for hover styles for direct download links
//           style={navItemStyle}
//         >
//           {icon}
//           <p
//             className={navbarBgColor === "white" ? "text-black" : "text-white"}
//           >
//             {label}
//           </p>
//         </a>
//       </div>
//     );
//   } else {
//     // For other links, use the original Link component
//     return (
//       <div
//         className={navItemClassName}
//         style={navItemStyle}
//         onClick={() => handleNavItemClick(label)} // Handle click to change the active item
//       >
//         <Link href={link}>
//           <div className="flex gap-1 items-center">
//             {icon}
//             <p
//               className={
//                 navbarBgColor === "white" ? "text-black" : "text-white"
//               }
//             >
//               {label}
//             </p>
//           </div>
//         </Link>
//       </div>
//     );
//   }
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineContacts, AiOutlineMenu } from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import Link from "next/link";

interface HeaderProps {
  // Define any props you need for your Header component here
}

export default function Header(props: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState<"transparent" | "white">("transparent");
  const [activeNavItem, setActiveNavItem] = useState<string>("home");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;
      const scrollY = window.scrollY + headerHeight;

      let currentSection = "home";

      for (const sectionName in sectionRefs) {
        if (sectionRefs.hasOwnProperty(sectionName)) {
          const sectionRef = sectionRefs[sectionName as keyof typeof sectionRefs];
          if (sectionRef && sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
              currentSection = sectionName;
              break;
            }
          }
        }
      }

      setActiveNavItem(currentSection);

      if (scrollY > 100) {
        setNavbarBgColor("white");
      } else {
        setNavbarBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full transition-all duration-300 ${
        navbarBgColor === "white" ? "bg-white opacity-80" : "bg-transparent"
      }`}
      style={{ zIndex: 100 }}
      ref={headerRef}
    >
      <div className="max-w-[1440px] mx-auto py-4 lg:px-10 px-0">
        <div
          className={`md:hidden pr-3 flex justify-end ${
            navbarBgColor === "white" ? "text-black" : "text-white"
          }`}
        >
          <button onClick={toggleMobileMenu}>
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
              active={activeNavItem === "home"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              active={activeNavItem === "about"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              active={activeNavItem === "project"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              active={activeNavItem === "resume"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              active={activeNavItem === "contact"}
              handleNavItemClick={handleNavItemClick}
            />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed top-12 left-0 w-full bg-slate-800">
          <div className="mt-2 py-2 px-4 rounded flex flex-col gap-2 text-xl">
            <NavItem
              icon={<AiOutlineHome />}
              label="Home"
              link="/"
              active={activeNavItem === "home"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<AiOutlineUser />}
              label="About"
              link="/about"
              active={activeNavItem === "about"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<AiOutlineFundProjectionScreen />}
              label="Project"
              link="/project"
              active={activeNavItem === "project"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<BiSortDown />}
              label="Resume"
              link="/public/ShahzadAli.pdf"
              active={activeNavItem === "resume"}
              handleNavItemClick={handleNavItemClick}
            />
            <NavItem
              icon={<AiOutlineContacts />}
              label="Contact"
              link="/contact"
              active={activeNavItem === "contact"}
              handleNavItemClick={handleNavItemClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  link: string;
  active: boolean;
  handleNavItemClick: (label: string) => void;
}

function NavItem({
  icon,
  label,
  link,
  active,
  handleNavItemClick,
}: NavItemProps) {
  const navItemClassName = `flex gap-1 items-center cursor-pointer transition duration-300 ${
    active ? "border-b-2 border-blue-500" : ""
  }`;

  return (
    <div className={navItemClassName} onClick={() => handleNavItemClick(label)}>
      <Link href={link}>
        <div className="flex gap-1 items-center">
          {icon}
          <p className={active ? "text-black" : "text-white"}>{label}</p>
        </div>
      </Link>
    </div>
  );
}


