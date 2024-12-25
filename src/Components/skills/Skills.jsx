import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.css"; // استيراد ملف CSS
import { 
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, 
  FaFigma 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiRedux, SiNextdotjs, SiMui, 
  SiJquery, SiSass, SiReactquery, SiReduxsaga 
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "react" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "next" },
    { name: "Redux", icon: <SiRedux />, color: "redux" },
    { name: "Redux Toolkit", icon: <SiReduxsaga />, color: "redux-toolkit" },
    { name: "React Query", icon: <SiReactquery />, color: "react-query" },
    { name: "Context API", icon: <FaReact />, color: "context" },
    { name: "DOM", icon: <FaHtml5 />, color: "dom" },
    { name: "BOM", icon: <FaCss3Alt />, color: "bom" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "tailwind" },
    { name: "SASS", icon: <SiSass />, color: "sass" },
    { name: "MUI", icon: <SiMui />, color: "mui" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "bootstrap" },
    { name: "Git", icon: <FaGitAlt />, color: "git" },
    { name: "Figma", icon: <FaFigma />, color: "figma" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="skills-page flex">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${skill.color}`}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
