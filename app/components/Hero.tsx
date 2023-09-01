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
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIcons(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const iconData = [
    // icon data
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
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, currentCharIndex]);

  const { heading, subheading, emphasis } = texts[currentIndex];

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
        <div className="flex justify-between pt-24">
          <div className="w-full lg:w-6/12">
            <div className="flex flex-col gap-12 lg:pt-10 pt-0">
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
              <div className="md:flex md:gap-3 items-center border p-2 rounded-full w-full md:w-[500px]">
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

          <div
            className="w-full lg:w-6/12 hidden md:block 
          "
          >
            <div className="flex justify-end">
              <div className="">
                <Image
                  src="/vec-d.png"
                  alt="vector"
                  width={1000}
                  height={1000}
                  className="w-[580px] h-[580px] object-cover "
                />
              </div>
              {showIcons && (
                <div className="absolute top-[200px] right-[100px]">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-[300px] px-[60px]">
                      <div data-aos="fade-up-left" data-aos-duration="2500">
                        <Image
                          src="/react.png"
                          alt="react"
                          width={100}
                          height={100}
                          className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className="mr-[100px]"
                      >
                        <Image
                          src="/nodejs.png"
                          alt="node"
                          width={100}
                          height={100}
                          className="w-[73px] h-[73px] rounded animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[420px]">
                      <div data-aos="fade-up-left" data-aos-duration="2500">
                        <Image
                          src="/javascript.png"
                          alt="react"
                          width={100}
                          height={100}
                          className="w-[90px] h-[90px] rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className=""
                      >
                        <Image
                          src="/tailwind.png"
                          alt="node"
                          width={100}
                          height={100}
                          className="w-[73px] h-[73px] rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[480px]">
                      <div data-aos="fade-up-left" data-aos-duration="2500">
                        <Image
                          src="/html.png"
                          alt="react"
                          width={100}
                          height={100}
                          className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className="rounded-e-full "
                      >
                        <Image
                          src="/typescript.png"
                          alt="node"
                          width={100}
                          height={100}
                          className="w-[73px] h-[73px] animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[550px]">
                      <div data-aos="fade-up-left" data-aos-duration="2500">
                        <Image
                          src="/nextjs.png"
                          alt="next"
                          width={160}
                          height={100}
                          className="w-[140px] h-[100px] object-cover rounded-full animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="2500"
                        className=""
                      >
                        <Image
                          src="/express.png"
                          alt="express"
                          width={100}
                          height={100}
                          className="w-[83px] h-[83px] object-cover animate-fadeInFromCenter animate-spin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Design />
    </div>

    // <div className="w-full">
    //   <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
    //     <div className="flex flex-col lg:flex-row lg:justify-between pt-20">
    //       <div className="flex flex-col gap-9">
    //         <h2 className="text-4xl">Hi There!</h2>
    //         <h1 className="text-6xl">I'M SHAHZAD ALI</h1>
    //         <div>
    //           <h1 className="lg:text-2xl text-lg font-bold flex gap-2 items-center">
    //             {heading}{" "}
    //             <span className="lg:text-5xl text-xl">
    //               {emphasis.slice(0, currentCharIndex + 1)}
    //             </span>
    //           </h1>
    //           <p className="lg:text-xl text-lg">{subheading}</p>
    //         </div>
    //         <div className="md:flex md:gap-3 items-center border p-2 rounded-full w-full md:w-[500px]">
    //           {iconData.map((icon, index) => (
    //             <Link key={index} href={icon.link} className="relative group">
    //               <div
    //                 className={`relative transition-all rounded-full text-gray-400 flex items-center ${
    //                   hoveredIcon === index
    //                     ? "border-2 border-green-500 text-white"
    //                     : ""
    //                 }`}
    //                 onMouseEnter={() => setHoveredIcon(index)}
    //                 onMouseLeave={() => setHoveredIcon(null)}
    //               >
    //                 {icon.icon}
    //                 {hoveredIcon === index && (
    //                   <div className="text-white py-1 px-3 text-lg font-semibold">
    //                     {icon.text}
    //                   </div>
    //                 )}
    //               </div>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="hidden md:block  ">
    //     <Image
    //       src="/vec-d.png"
    //       alt="hero"
    //       width={1000}
    //       height={1000}
    //       className="w-[700px] h-[605px] object-cover"
    //     />

    //      {showIcons && (
    //       <>
    //         <div className="flex justify-between px-40 ">
    //           <div data-aos="fade-up-left" data-aos-duration="2500">
    //           <Image
    //             src="/react.png"
    //             alt="react"
    //             width={100}
    //             height={100}
    //             className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //           <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[82px]">
    //           <Image
    //             src="/nodejs.png"
    //             alt="node"
    //             width={100}
    //             height={100}
    //             className="w-[73px] h-[73px] rounded animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //         </div>
    //         <div className="flex justify-between px-20">
    //           <div data-aos="fade-up-left" data-aos-duration="2500">
    //           <Image
    //             src="/javascript.png"
    //             alt="react"
    //             width={100}
    //             height={100}
    //             className="w-[90px] h-[90px] rounded-full animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //           <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[85px]">
    //           <Image
    //             src="/tailwind.png"
    //             alt="node"
    //             width={100}
    //             height={100}
    //             className="w-[73px] h-[73px] rounded-full animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //         </div>
    //         <div className="flex justify-between px-12">
    //           <div data-aos="fade-up-left" data-aos-duration="2500">
    //           <Image
    //             src="/html.png"
    //             alt="react"
    //             width={100}
    //             height={100}
    //             className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //           <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[80px] rounded-e-full">
    //           <Image
    //             src="/typescript.png"
    //             alt="node"
    //             width={100}
    //             height={100}
    //             className="w-[73px] h-[73px] animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //         </div>
    //         <div className="flex justify-between -mx-3">
    //           <div data-aos="fade-up-left" data-aos-duration="2500">
    //           <Image
    //             src="/nextjs.png"
    //             alt="next"
    //             width={160}
    //             height={100}
    //             className="w-[140px] h-[100px] object-cover rounded-full animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //           <div data-aos="fade-up-right" data-aos-duration="2500" className="pr-28">
    //           <Image
    //             src="/express.png"
    //             alt="express"
    //             width={100}
    //             height={100}
    //             className="w-[83px] h-[83px] object-cover animate-fadeInFromCenter animate-spin"
    //           />
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    //     </div>
    //     <Design />
    //   </div>
    // </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   TiSocialLinkedinCircular,
//   TiSocialTwitterCircular,
//   TiSocialFacebookCircular,
//   TiSocialGithubCircular,
//   TiSocialInstagramCircular,
// } from "react-icons/ti";
// import Link from "next/link";
// import Design from "./Design";

// const texts = [
//   {
//     heading: "Looking for",
//     subheading: "NextJS Developer ?",
//     emphasis: "NextJS",
//   },
//   {
//     heading: "Passionate about",
//     subheading: "Web Development ?",
//     emphasis: "Web Development",
//   },
//   {
//     heading: "Ready to build",
//     subheading: "Amazing Websites ?",
//     emphasis: "Amazing Websites",
//   },
// ];
// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);
//   const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
//   const [showIcons, setShowIcons] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowIcons(true);
//     }, 1000);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, []);

//   const iconData = [
//     {
//       link: "https://github.com/ShahzadAliSoomro",
//       icon: <TiSocialGithubCircular className="w-12 h-12" />,
//       text: "Github",
//     },
//     {
//       link: "https://www.linkedin.com/in/shahzad-ali-51748122b/",
//       icon: <TiSocialLinkedinCircular className="w-12 h-12" />,
//       text: "LinkedIn",
//     },
//     {
//       link: "https://www.facebook.com/profile.php?id=100067543970671&mibextid=ZbWKwL",
//       icon: <TiSocialFacebookCircular className="w-12 h-12" />,
//       text: "Facebook",
//     },
//     {
//       link: "https://twitter.com/Shahzad67656720?t=VTYdy-uo4cClxdvEI_4DiA&s=08",
//       icon: <TiSocialTwitterCircular className="w-12 h-12" />,
//       text: "Twitter",
//     },
//     {
//       link: "https://instagram.com/shahzadhussain1731043?igshid=MzNlNGNkZWQ4Mg==",
//       icon: <TiSocialInstagramCircular className="w-12 h-12" />,
//       text: "Instagram",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentCharIndex((prevIndex) => {
//         if (prevIndex === texts[currentIndex].emphasis.length - 1) {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//           return 0;
//         }
//         return prevIndex + 1;
//       });
//     }, 100); // Change character every 100 milliseconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex, currentCharIndex]);

//   const { heading, subheading, emphasis } = texts[currentIndex];

//   return (
//     <div className="w-full relative h-[61vh]">
//       <div className="max-w-[1440px] mx-auto container lg:p-10 p-4">
//         <div className="flex justify-between pt-20 flex-wrap gap-6 lg:flex-nowrap lg:gap-0">
//           <div className="flex flex-col gap-9">
//             <h2 className="text-4xl">Hi There!</h2>
//             <h1 className="text-6xl">I'M SHAHZAD ALI</h1>
//             <div>
//               <h1 className="lg:text-2xl text-lg font-bold flex gap-2 items-center">
//                 {heading}{" "}
//                 <span className="lg:text-5xl text-xl">
//                   {emphasis.slice(0, currentCharIndex + 1)}
//                 </span>
//               </h1>
//               <p className="lg:text-xl text-lg">{subheading}</p>
//             </div>
//             <div className="absolute top-[480px] left-[690px] cursor-pointer hidden md:block">
//               <div className="flex gap-3 items-center border p-2 rounded-full w-[500px]">
//                 {iconData.map((icon, index) => (
//                   <Link key={index} href={icon.link} className="relative group">
//                     <div
//                       className={`relative transition-all rounded-full text-gray-400 flex items-center ${
//                         hoveredIcon === index
//                           ? "border-2 border-green-500 text-white"
//                           : ""
//                       }`}
//                       onMouseEnter={() => setHoveredIcon(index)}
//                       onMouseLeave={() => setHoveredIcon(null)}
//                     >
//                       {icon.icon}
//                       {hoveredIcon === index && (
//                         <div className="text-white py-1 px-3 text-lg font-semibold">
//                           {icon.text}
//                         </div>
//                       )}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="xl:w-[900px] lg:w-[500px] xl:h-[575px] lg:h-[40px] hidden md:block  ">
//         <Image
//           src="/vec-d.png"
//           alt="hero"
//           width={1000}
//           height={1000}
//           className="w-[700px] h-[605px] object-cover absolute top-0 right-[150px]"
//         />

//          {showIcons && (
//           <>
//             <div className="flex justify-between px-40 pt-16">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/react.png"
//                 alt="react"
//                 width={100}
//                 height={100}
//                 className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[82px]">
//               <Image
//                 src="/nodejs.png"
//                 alt="node"
//                 width={100}
//                 height={100}
//                 className="w-[73px] h-[73px] rounded animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//             <div className="flex justify-between px-20">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/javascript.png"
//                 alt="react"
//                 width={100}
//                 height={100}
//                 className="w-[90px] h-[90px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[85px]">
//               <Image
//                 src="/tailwind.png"
//                 alt="node"
//                 width={100}
//                 height={100}
//                 className="w-[73px] h-[73px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//             <div className="flex justify-between px-12">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/html.png"
//                 alt="react"
//                 width={100}
//                 height={100}
//                 className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[80px] rounded-e-full">
//               <Image
//                 src="/typescript.png"
//                 alt="node"
//                 width={100}
//                 height={100}
//                 className="w-[73px] h-[73px] animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//             <div className="flex justify-between -mx-3">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/nextjs.png"
//                 alt="next"
//                 width={160}
//                 height={100}
//                 className="w-[140px] h-[100px] object-cover rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="pr-28">
//               <Image
//                 src="/express.png"
//                 alt="express"
//                 width={100}
//                 height={100}
//                 className="w-[83px] h-[83px] object-cover animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//         </div>

//       </div>
//       {/* <div className="xl:w-[900px] lg:w-[500px] xl:h-[575px] lg:h-[40px] hidden md:block  ">
//         <Image
//           src="/vec-d.png"
//           alt="hero"
//           width={1000}
//           height={1000}
//           className="w-[700px] h-[605px] object-cover absolute top-0 right-[150px]"
//         />

//          {showIcons && (
//           <>
//             <div className="flex justify-between px-40 pt-16">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/react.png"
//                 alt="react"
//                 width={100}
//                 height={100}
//                 className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[82px]">
//               <Image
//                 src="/nodejs.png"
//                 alt="node"
//                 width={100}
//                 height={100}
//                 className="w-[73px] h-[73px] rounded animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//             <div className="flex justify-between px-20">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/javascript.png"
//                 alt="react"
//                 width={100}
//                 height={100}
//                 className="w-[90px] h-[90px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[85px]">
//               <Image
//                 src="/tailwind.png"
//                 alt="node"
//                 width={100}
//                 height={100}
//                 className="w-[73px] h-[73px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//             <div className="flex justify-between px-12">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/html.png"
//                 alt="react"
//                 width={100}
//                 height={100}
//                 className="w-[80px] h-[80px] rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="mr-[80px] rounded-e-full">
//               <Image
//                 src="/typescript.png"
//                 alt="node"
//                 width={100}
//                 height={100}
//                 className="w-[73px] h-[73px] animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//             <div className="flex justify-between -mx-3">
//               <div data-aos="fade-up-left" data-aos-duration="2500">
//               <Image
//                 src="/nextjs.png"
//                 alt="next"
//                 width={160}
//                 height={100}
//                 className="w-[140px] h-[100px] object-cover rounded-full animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//               <div data-aos="fade-up-right" data-aos-duration="2500" className="pr-28">
//               <Image
//                 src="/express.png"
//                 alt="express"
//                 width={100}
//                 height={100}
//                 className="w-[83px] h-[83px] object-cover animate-fadeInFromCenter animate-spin"
//               />
//               </div>
//             </div>
//           </>
//         )}
//       </div> */}
//       <Design />
//     </div>
//   );
// }
