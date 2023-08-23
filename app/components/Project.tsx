import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = [
  {
    id: 1,
    video: "/ezifuel.mp4",
    text: "Experienced frontend developer skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Creates responsive and dynamic web applications with a strong grasp of HTML structure, CSS styling, and JavaScript functionality. Proficient in React and Next.js for scalable and performant applications. Utilizes Tailwind CSS for efficient and responsive styling. Offers expertise in the front-end development stack for modern and engaging web experiences.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 2,
    image: "/hero3.avif",
    text: "Experienced frontend developer skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Creates responsive and dynamic web applications with a strong grasp of HTML structure, CSS styling, and JavaScript functionality. Proficient in React and Next.js for scalable and performant applications. Utilizes Tailwind CSS for efficient and responsive styling. Offers expertise in the front-end development stack for modern and engaging web experiences.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 3,
    image: "/hero3.avif",
    text: "Experienced frontend developer skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Creates responsive and dynamic web applications with a strong grasp of HTML structure, CSS styling, and JavaScript functionality. Proficient in React and Next.js for scalable and performant applications. Utilizes Tailwind CSS for efficient and responsive styling. Offers expertise in the front-end development stack for modern and engaging web experiences.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 4,
    image: "/hero3.avif",
    text: "Experienced frontend developer skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Creates responsive and dynamic web applications with a strong grasp of HTML structure, CSS styling, and JavaScript functionality. Proficient in React and Next.js for scalable and performant applications. Utilizes Tailwind CSS for efficient and responsive styling. Offers expertise in the front-end development stack for modern and engaging web experiences.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 5,
    image: "/hero3.avif",
    text: "Experienced frontend developer skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Creates responsive and dynamic web applications with a strong grasp of HTML structure, CSS styling, and JavaScript functionality. Proficient in React and Next.js for scalable and performant applications. Utilizes Tailwind CSS for efficient and responsive styling. Offers expertise in the front-end development stack for modern and engaging web experiences.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 6,
    image: "/hero3.avif",
    text: "Experienced frontend developer skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Creates responsive and dynamic web applications with a strong grasp of HTML structure, CSS styling, and JavaScript functionality. Proficient in React and Next.js for scalable and performant applications. Utilizes Tailwind CSS for efficient and responsive styling. Offers expertise in the front-end development stack for modern and engaging web experiences.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
];

export default function Project() {
  return (
    <div className="w-full mx-auto container p-10 ">
      <div className="text-4xl text-center pt-10">
        <h1>Project</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-5">
        {Projects.map((project) => (
          <div key={project.id} className="flex flex-col border shadow p-3">
            <div className="w-full ">
            <video controls width={500} height={500}>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <p> {project.text}</p>
            </div>
            <div className="flex justify-center gap-5">
              <Link href={project.githubLink}>
                <button className="bg-green-500 text-white p-2 rounded-lg">
                  Github
                </button>
              </Link>
              <Link href={project.demoLink}>
                <button className="bg-green-500 text-white p-2 rounded-lg">
                  Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
