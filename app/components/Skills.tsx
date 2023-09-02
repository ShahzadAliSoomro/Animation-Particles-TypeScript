// import React from "react";
// import Image from "next/image";

// const skillsData = [
//   { name: "HTML", percentage: 80 },
//   { name: "CSS", percentage: 75 },
//   { name: "JavaScript", percentage: 60 },
//   { name: "React-JS", percentage: 90 },
//   { name: "NEXT-JS", percentage: 90 },
//   { name: "TAILWIND", percentage: 90 },
// ];

// export default function Skills() {
//   return (
//     <div className="w-full bg-[#1E293B] p-4">
//       <div className="max-w-[1440px] mx-auto px-10">
//         <div className="text-4xl flex flex-col justify-center items-center pt-10 gap-1">
//           <h1 className="">SKILLS</h1>
//           <p className="border-b-2 w-32 border-green-500"></p>
//         </div>
//         <div className="w-full flex justify-center gap-10">
//           <div className="">
//           <div className="w-[450px] h-[450px] mt-5">
//             <Image src="/prr.avif" alt="hero" width={500} height={500} className="mx-auto" />
//           </div>
//           </div>
//           <div className="flex flex-col justify-center">
//             <div className="w-full">
//               <div className="relative text-gray-700 antialiased text-sm font-semibold">
//                 <div className="hidden sm:block w-1 bg-green-500 absolute h-full transform -translate-x-1/2"></div>
                
//                 {skillsData.map((skill, index) => (
//                   <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
//                     <div className="flex flex-col sm:flex-row items-center mt-5">
//                       <div className="flex pl-8 w-full mx-auto items-center">
//                         <div className="w-full sm:w-1/2">
//                           <h1 className="text-white">
//                             {skill.name}{" "}
//                             <span className="text-xs text-yellow-400">{skill.percentage}%</span>
//                           </h1>
//                           <div className="mb-4 h-4 relative w-full lg:w-96 rounded-full overflow-hidden bg-gray-200">
//                             <div
//                               className="h-full bg-yellow-400 sm:bg-green-500 absolute"
//                               style={{ width: `${skill.percentage}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="rounded-full bg-blue-500 border-white border-4 w-12 h-8 absolute sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
//                         <span className="text-white text-sm">{skill.percentage}%</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

const skillsData = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 75 },
  { name: "JavaScript", percentage: 60 },
  { name: "React-JS", percentage: 90 },
  { name: "NEXT-JS", percentage: 90 },
  { name: "TAILWIND", percentage: 90 },
];

export default function Skills() {
  return (
    <div className="w-full bg-[#1E293B]">
      <div className="max-w-[1440px] mx-auto relative p-4">
        <div className="text-4xl flex flex-col justify-center items-center pt-10 gap-1">
          <h1 className="text-white">SKILLS</h1>
          <div className="border-b-2 w-32 border-green-500"></div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-5 lg:gap-16 mt-10 ">
          <div className="w-full lg:w-[500px] lg:h-[500px] lg:ml-44 ml-0  ">
            <Image src="/prr.avif" alt="hero" width={500} height={500} className="mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 flex pt-9 lg:pt-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className=" sm:block w-1 bg-green-500 absolute left-5 lg:left-0 h-full transform -translate-x-1/2"></div>
              
              {skillsData.map((skill, index) => (
                <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center lg:mt-5 mt-0">
                    <div className="flex lg:pl-8 w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 lg:pl-0 pl-14">
                        <h1 className="text-white">
                          {skill.name}{" "}
                          {/* <span className="text-xs text-yellow-400">{skill.percentage}%</span> */}
                        </h1>
                        <div className="mb-4 h-4 relative w-72 lg:w-72 rounded-full overflow-hidden bg-gray-200">
                          <div
                            className="h-full bg-yellow-400 sm:bg-green-500 absolute" 
                            style={{ width: `${skill.percentage}%` }} data-aos="fade-right"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-12 h-8 absolute left-5 lg:left-0 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <span className="text-white text-sm ">{skill.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
