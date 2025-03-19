import "./styles/Footer.css";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaFilePdf } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li><Link to="/"><FaHome className="logo"/><br/>HOME</Link></li>
        <li><Link to="/about"><FaUser className="logo"/><br/>About</Link></li>
        <li><Link to="/skills"><FaProjectDiagram className="logo"/><br/>Skills</Link></li>
        <li><Link to="/resume"><FaFilePdf className="logo"/><br/>Resume</Link></li>
        <li><Link to="/projects"><FaTools className="logo"/><br/>Projects</Link></li>
        <li><Link to="/contact"><FaEnvelope className="logo"/><br/>Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default Footer;
