import "./footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer bg-gray-300">
      <h1 className="text-4xl font-bold">anurag</h1>
      <div className="social-links flex justify-center space-x-4 text-3xl">
        <a href="https://www.instagram.com/anu.raags_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/anurag-kumar-61788124a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/anuragkoff/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      <p className="text-center text-sm text-gray-500 py-4">
        &copy; 2026 Your Company. All rights reserved.
      </p>
    </div>
  )
}
