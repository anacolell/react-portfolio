import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
  FaMobileAlt,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { SiRails, SiHeroku } from "react-icons/si";
import { DiRuby, DiPostgresql, DiMongodb } from "react-icons/di";

export const skillsData = [
  { id: 1, name: "HTML", logo: <FaHtml5 /> },
  { id: 2, name: "CSS", logo: <FaCss3 /> },
  { id: 3, name: "JavaScript", logo: <FaJs /> },
  { id: 4, name: "React", logo: <FaReact /> },
  { id: 5, name: "Ruby", logo: <DiRuby /> },
  { id: 6, name: "Rails", logo: <SiRails /> },
  { id: 7, name: "Git", logo: <FaGitAlt /> },
  { id: 8, name: "Sass", logo: <FaSass /> },
  { id: 9, name: "Bootstrap", logo: <FaBootstrap /> },
  { id: 10, name: "Postgresql", logo: <DiPostgresql /> },
  { id: 11, name: "Postgresql", logo: <DiMongodb /> },
  { id: 12, name: "Responsive", logo: <FaMobileAlt /> },
  { id: 13, name: "Heroku", logo: <SiHeroku /> },
];
