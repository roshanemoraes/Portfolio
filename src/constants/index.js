import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

//export const HERO_CONTENT = `I'm a third-year Computer Science and Engineering undergraduate at the University of Moratuwa, passionate about full-stack development. I specialize in React, Next.js, Spring Boot, Node.js, and Flask, with experience in MySQL, MongoDB, and Firebase. I'm driven by a strong focus on achieving my goals and creating impactful, scalable solutions that enhance user experiences.`;
export const HERO_CONTENT = `I am a third-year undergraduate at the University of Moratuwa, passionately pursuing a degree in Computer Science and Engineering. With a strong foundation in both front-end and back-end development, I specialize in crafting dynamic and scalable web applications. Driven by a relentless enthusiasm for technology, I am goal-oriented and stay focused on my dreams of building innovative solutions that not only drive business growth but also deliver exceptional user experiences. I am committed to continuous learning and pushing the boundaries of what’s possible in the world of software development.`;

export const ABOUT_TEXT = `As a dedicated full-stack developer with a solid foundation in web development, I've honed my skills through years of experience and academic pursuits. After completing my schooling at Maris Stella College in Negombo, Sri Lanka, I've been pursuing my undergraduate degree in Computer Science at the University of Moratuwa. `;

export const ABOUT_TEXT_2 = `My passion for coding, coupled with a keen eye for detail, has enabled me to work proficiently with technologies such as React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. I've successfully contributed to several projects, including [project 1] and [project 2], where I demonstrated my ability to [highlight specific skills or accomplishments]. Beyond my technical skills, I'm a strong team player with excellent communication and problem-solving abilities. My long-term goal is to become a skilled full-stack engineer and contribute to innovative technological advancements.`;
export const EXPERIENCES = [
  {
    year: "2021  - Present",
    role: "3rd Year Undergraduate",
    company: "Computer Science and Engineering, University of Moratuwa",
    description: `I am a 3rd-year Computer Science and Engineering student at the University of Moratuwa, focusing on software engineering, algorithms, and databases. My coursework and hands-on projects have enhanced my technical skills and problem-solving abilities. I also actively participate in tech workshops and hackathons, gaining practical experience and collaboration skills.`,
    technologies: [],
  },
  {
    year: "2018 - 2020",
    role: "GCE Advanced Level",
    company: "Maris Stella Collge - Negombo",
    description: `Obtained 3As for Combined Mathematics, chemistry and Physics in physical science stream, and got selected to University of Moratuwa for B.sc (Hons) Engineering.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title:
      "Post Office MIS with Postman Assistant Mobile Application (Ongoing)",
    image: project1,
    description:
      "Led a 3-member team in the full-stack development of a cutting-edge microservices-based software solution tailored for the Sri Lankan Postal Service. It handles most of the postal administrative processes and mail delivery process of postmen. Efficient route optimization, mail sorting and delivering process, system communication, authentication authorization were key areas I developed.",
    technologies: ["React","Spring Boot", "Java", "HTML", "CSS", "MongoDB", "Firebase", "REST"],
  },
  {
    title: "Smart Wearable for Workplace Safety with Web Application",
    image: project2,
    description:
      "Collaborated in a 5-member team to develop a wearable device with a web application, that monitors health and environmental data in real-time to enhance worker safety. It’s Integrated with a node-red dashboard to display the statistics. I developed the full stack web application for the user, which involved the user designing the interface and sensor data processing.",
    technologies: ["React JS", "Node JS", "MySQL", "Arduino", "Node Red", "Git", "VS Code"],
  },
  {
    title: "Ecommerce Web Application With Flask & React.Js",
    image: project3,
    description:
      "A full-stack e-commerce platform with a strong emphasis on database integrity and security. Led the design and co-development of a normalized MySQL database schema adhering to Boyce-Codd Normal Form (BCNF). I Engineered a robust order checkout process, ensuring transactional integrity by utilizing triggers, stored procedures, and functions to enforce ACID properties. Implemented data validation and integrity constraints directly at the database level, enhancing security and maintaining data consistency across the application.",
    technologies: ["React JS", "Flask", "REST", "JWT", "Git", "VS Code"],
  },
  {
    title: "RPAL Interpreter With Python",
    image: project4,
    description:
      "Developed an interpreter for the functional programming language RPAL as part of a two-member team. The project involved building key components such as a lexical analyzer, parser, and a Control Stack Environment (CSE) machine. I was responsible for designing and implementing the CSE machine, which efficiently manages the evaluation of expressions and function applications by maintaining control and environment stacks. ",
    technologies: ["Python", "Git", "VS Code"],
  },
];

export const CONTACT = {
  address: "Bandaranayake Mawatha, Moratuwa 10400 ",
  phoneNo: "+94 71 616 8785",
  email: "adam.21@cse.mrt.ac.lk",
};
