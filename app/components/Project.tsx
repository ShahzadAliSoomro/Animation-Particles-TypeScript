import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = [
  {
    id: 1,
    video: "/shoes.mp4",
    text: "Frontend development for a brand shoes website showcasing the latest footwear collections. Utilized HTML, CSS, JavaScript, React, and Tailwind CSS to craft responsive and visually appealing web pages. Integrated interactive features to enhance user experience, ensuring seamless navigation through product listings. Created a dynamic and engaging frontend to highlight the brand's image and product offerings.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://shahzadalisoomro.github.io/Brand-Shoes-App/",
    
  },
  {
    id: 2,
    video: "/landing.mp4",
    text: "🚀 Created a cutting-edge single-page application in just 2 days using React and TypeScript, showcasing my mastery of web development technologies. The app is fully responsive thanks to Tailwind CSS and includes dynamic elements powered by React Slick for slick image carousels. Leveraged a range of powerful dependencies like React Icons for eye-catching visuals, Next Progress Bar for smooth user experiences, and Classnames for efficient CSS styling. Utilized PostCSS and Autoprefixer for optimal CSS processing. The result is an engaging user experience with seamless navigation and an eye-catching design.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 3,
    video: "/ezifuel.mp4",
    text: "Ezeefuil, a project I've built using Next.js and Tailwind CSS, aimed at revolutionizing professional networking. Ezeefuil combines the power of Next.js's server-side rendering and Tailwind CSS's utility-first approach to creating a seamless and visually appealing user experience. With optimized performance and a responsive design!",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://demo.example/project1",
  },
  {
    id: 4,
    video: "/ecomerce.mp4",
    text: "Successfully developed a feature-rich e-commerce website using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Crafted responsive and dynamic web pages that showcase a diverse range of products. Implemented advanced frontend functionalities, such as product filtering, sorting, and cart management. Leveraged React and Next.js for scalable and performant web applications. Ensured efficient and responsive styling using Tailwind CSS. The completed e-commerce website offers a seamless shopping experience and demonstrates expertise in modern front-end development.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://shahzadalisoomro.github.io/E-Commerce-website3/",
  },
  {
    id: 5,
    video: "/football.mp4",
    text: "Designed and developed an engaging football-themed website using HTML and CSS. Created responsive and interactive web pages that highlight the excitement of football. Proficiently utilized HTML to structure the content and CSS to style the website elements. The project showcases expertise in front-end development by delivering an attractive and immersive user experience.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://shahzadalisoomro.github.io/E-Commerce-Website/",
  },
  {
    id: 6,
    video: "/upwork.mp4",
    text: "Created the front page of an Upwork-themed website using HTML and CSS. Leveraged HTML to structure the content and CSS to style the layout and elements. The project demonstrates skills in frontend development, delivering an appealing and professional user interface that mirrors the Upwork platform's aesthetic.",
    githubLink: "https://github.com/example/project1",
    demoLink: "https://3rd-upwork.vercel.app/",
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
              <video controls width={700} height={600}>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <p> {project.text}</p>
            </div>
            <div className="flex justify-center gap-5 pt-3">
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
