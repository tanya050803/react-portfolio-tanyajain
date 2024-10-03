import logo from "../assets/TanyaJainLogo.png";
import { FaDownload } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-10 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-20 h-8 w-8" src={logo} alt="logo"></img>
    </div>
    
    <div className="m-8 flex items-center justify-center gap-5 text-2xl">
      <a href="https://drive.google.com/file/d/1VxUblUqBof0wkSjJHwQoPZu7IB2SsP4o/view?usp=sharing" download="TanyaJain_resume.pdf" className="relative flex items-center"><FaDownload></FaDownload></a>
      <span className="absolute"></span>
      <a href="https://www.linkedin.com/in/tanya-jain-88257a238/" target="_blank"><FaLinkedin></FaLinkedin></a>
      <a href="https://github.com/tanya050803" target="_black"><FaGithub></FaGithub></a>
      <a href="https://www.instagram.com/__tanya0508__/" target="_blank" ><FaInstagram></FaInstagram></a>
    </div>
  </nav>
  );
};

export default Navbar;