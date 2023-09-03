import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="w-full text-white">
      {/* Here's what each part of the code does: 
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
      {/* Here's what each part of the code does:
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
      
      <Service />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
