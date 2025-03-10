import './Footer.css';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li><a href='#'><FaHome className='logo'/><br/>HOME</a></li>
        <li><a href='#'><FaUser className='logo'/><br/>About</a></li>
        <li><a href='#'><FaProjectDiagram className='logo'/><br/>Skill</a></li>
        <li><a href='#'><FaTools className='logo'/><br/>Projects</a></li>
        <li><a href='#'><FaEnvelope className='logo'/><br/>Contect Us</a></li>
      </ul>
    </div>
  );
}

export default Footer;