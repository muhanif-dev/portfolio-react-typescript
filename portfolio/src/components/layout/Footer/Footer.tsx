import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-white py-16 px-6 border-t border-gray-800/80 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        
        {/* Top Brand / Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-tight">
            MUHAMMAD <span className="text-[#FF6A3D]">HANIF</span>
          </span>
        </div>

        {/* Sub-categories / Focus areas */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]"></span>
            <span>Frontend Development</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]"></span>
            <span>React.js & TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]"></span>
            <span>Full-Stack Solutions</span>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-gray-800/80 my-2"></div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-300">
          <li>
            <a href="#works" className="hover:text-[#FF6A3D] transition-colors duration-200">Works</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#FF6A3D] transition-colors duration-200">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#FF6A3D] transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#FF6A3D] transition-colors duration-200">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#FF6A3D] transition-colors duration-200">Contact us</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 pt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4">
          <a href="#terms" className="hover:text-gray-400 transition-colors">Terms & Conditions</a>
          <span>|</span>
          <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#disclosures" className="hover:text-gray-400 transition-colors">Disclosures</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 Muhammad Hanif. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;