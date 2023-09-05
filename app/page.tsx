"use client";
import React from "react";
import dynamic from "next/dynamic";
// import Hero from "./components/Hero";
import About from "./components/About";
// import Project from "./components/Project";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Skills from "./components/Skills";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
// const About = dynamic(() => import("./components/About"), { ssr: false });
const Project = dynamic(() => import("./components/Project"), { ssr: false });
// const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
// const Service = dynamic(() => import("./components/Service"), { ssr: false });
// const Skills = dynamic(() => import("./components/Skills"), { ssr: false });

export default function Home() {
  return (
    <div className="w-full text-white">
      {/* Explanation of the "Hero" component
      1. The Hero component contains various state variables to manage animations and interactions. It also
      includes data for text and social media icons. 
      2. The useEffect hook is used to delay the display of icons (showIcons) after a certain time. 
      3. The iconData array contains information about social media icons along with their links. 
      4. Another useEffect hook is used for animating the text in the hero section. 
      5. The component renders the hero section, including text, social media icons, and an image. 
      6. The Image component from Next.js is used to display an image. 
      7. The animated icons are displayed with the help of the data-aos attribute, and the ParticlesAnimation
      component is also rendered. 
      To use this Hero component, you can include it
      in your main application file or in any page where you want to display the
      hero section. Just make sure to import the necessary dependencies and set
      up any required styling and animations. */}
      <Hero />
      {/* Explanation of the "About" component
      1. The "About" component is a section of your webpage that provides information about you, 
      including your image, job title, description, and personal details.
      2. It uses the next/image package to display an image efficiently. You have provided the 
      path to the image (src), its alt attribute, and its dimensions (width and height).
      3. The component is divided into two sections: the left section containing the image and 
      the right section containing text.
      4. The "About Me" title is displayed at the top, followed by an underlined separator.
      5. In the right section, your name, job title, and a description of yourself are displayed.
      6. Below the description, there is a section with your personal information, including your 
      birthday, phone number, email, location, languages, and availability.
      7. Finally, a "Download CV" button is provided with hover animation effects.
      To use this "About" component, you can include it in your main application file or in any 
      page where you want to display information about yourself. Simply import the component and 
      render it within your desired page or layout. */}
      <About />
      {/* Explanation of the "Service" component 
      1.The "Service" component displays a set of service cards, each containing information 
      about a particular service you offer. It uses various icons from different libraries to
      represent these services. 
      2. The services array holds objects representing each service. Each object has an id, title,
      text, and icon property. id: A unique identifier for the service.title: The title or name of the service.
      text: A description or text explaining the service.icon: An icon representing the service, chosen from different icon components. 
      3. The component begins by rendering a "Service" title and an underlined separator. 
      4. It then creates a grid layout to display the service cards. The number of columns in the grid 
      adjusts based on screen size (responsive design). 
      5. For each service in the services array, a service card is generated. The card includes: The service icon.The service title.The
      service text (description). 
      6. Hover effects (background color change, shadow, and scale) are applied to the service cards to provide interactivity. 
      To use this "Service" component, you can import it into your main application file or any page where you want to showcase your
      services. Simply include the component in your JSX code to display the
      services you offer. */}
      <Service />
      {/* Explanation of the "Skills" component
      1. The "Skills" component displays a set of skills with their proficiency percentages in a visually appealing format.
      2. The skillsData array holds objects representing each skill. Each object has a name (the skill name) and a percentage (the proficiency percentage).
      3. The component is divided into two main sections: * The left section displays an image (your photo, for example).
      * The right section lists the skills and their proficiency percentages.
      4. The image is displayed using the next/image component with responsive sizing.
      5. Skills and their percentages are displayed in a column on the right side: * Each skill is listed with its name (e.g., HTML) and proficiency percentage (e.g., 80%).
      * A visual bar represents the proficiency percentage using a yellow background. * A rounded percentage badge is displayed beside each skill.
      6. The data-aos attribute is used to apply a fade-in animation to the skills section when it appears on the screen.
      To use this "Skills" component, simply import it into your main application file or any page where you want to showcase your skills. 
      You can customize the skillsData array to include your own skills and proficiency percentages. */}
      <Skills />
      {/* Explanation of the "Projects" component
      1. The "Projects" component is designed to showcase a list of projects with video previews, descriptions, GitHub links, and demo links.
      2. The Projects array holds objects representing each project. Each object has an id, video (path to the project video), 
      text (project description), githubLink (GitHub repository link), and demoLink (link to the live demo or project webpage).
      3. The component is divided into sections for each project, displayed in a grid layout.
      4. For each project: * A video component is used to display a video preview of the project. It allows users to control the video playback.
      * The project description is provided beneath the video. * GitHub and Demo buttons are displayed, allowing users to navigate to the project's GitHub repository or demo page.
      5. The data-aos attribute is used to apply a fade-up animation when each project appears on the screen.
      To use this "Projects" component, simply import it into your main application file or any page where you want to showcase your projects. 
      Update the Projects array with your own project details, including video paths, descriptions, GitHub links, and demo links. */}
      <Project />
      {/* Explanation of the "Contact" component
      1. The "Contact" component is designed to display contact information, including a contact form and details like location, phone numbers, and email.
      2. The component is divided into two main sections, with the left column containing the contact form and the right column containing contact information.
      3. The contact form includes fields for Name, Email, and Message. Users can enter their details and send a message directly through the form.
      4. The "Send" button allows users to submit the form. You can specify the form action and method when you are ready to handle form submissions on your server.
      5. Information such as the website's Privacy Policy and Terms of Service are provided with links.
      6. The right column displays contact information, including the physical location, phone numbers (Phone and WhatsApp), and the email address.
      To use this "Contact" component, import it into your main application file or any page where you want to provide contact information and a contact form. 
      You can further customize the styling and layout to match your website's design. */}
      <Contact />
    </div>
  );
}
