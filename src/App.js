import React from "react";
import "./App.css";

const App = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Developed a fully functional e-commerce website using MERN stack. Implemented features such as user authentication, product listings, and cart functionality.",
      type: "Major Project"
    },
    {
      title: "Portfolio Website",
      description: "Designed and built a personal portfolio website using React.js. Integrated dynamic content and interactive components to showcase skills and projects.",
      type: "Minor Project"
    },
    {
      title: "Weather App",
      description: "Created a weather application that provides real-time weather updates using a third-party API. Implemented responsive design for various devices.",
      type: "Minor Project"
    }
  ];

  const skills = [
    "Proficient in JavaScript, React.js, Node.js",
    "Familiar with HTML, CSS, MongoDB",
    "Participated in multiple coding hackathons",
    "Won 1st prize in National Coding Competition",
    "Member of the VIT Coding Club"
  ];

  return (
    <div className="portfolio">
      <div className="header">
        <h1>Parthu</h1>
        <h2>Registration No: 21BIT0512</h2>
        <h2>Studying at VIT Vellore, IT Department</h2>
        <h3>Native Place: Kurnool, AP, India</h3>
        <h3>Email: parthu.m2021@vitstudent.ac.in</h3>
        <h3>Contact: 7799177079</h3>
      </div>
      <div className="body">
        <div className="section">
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Type: {project.type}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
