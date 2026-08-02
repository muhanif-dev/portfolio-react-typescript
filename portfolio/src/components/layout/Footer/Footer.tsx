import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";


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
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `transition-colors duration-200 no-underline ${isActive ? 'text-[#FF6A3D]' : 'hover:text-[#FF6A3D]'}`
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/services" 
      className={({ isActive }) => 
        `transition-colors duration-200 no-underline ${isActive ? 'text-[#FF6A3D]' : 'hover:text-[#FF6A3D]'}`
      }
    >
      Services
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/about" 
      className={({ isActive }) => 
        `transition-colors duration-200 no-underline ${isActive ? 'text-[#FF6A3D]' : 'hover:text-[#FF6A3D]'}`
      }
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/projects" 
      className={({ isActive }) => 
        `transition-colors duration-200 no-underline ${isActive ? 'text-[#FF6A3D]' : 'hover:text-[#FF6A3D]'}`
      }
    >
      Projects
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/contact" 
      className={({ isActive }) => 
        `transition-colors duration-200 no-underline ${isActive ? 'text-[#FF6A3D]' : 'hover:text-[#FF6A3D]'}`
      }
    >
      Contact us
    </NavLink>
  </li>
</ul>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 pt-2">
          <a href="https://github.com/muhanif-dev" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hanif-92a127358/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#121826] border border-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF6A3D] hover:bg-[#FF6A3D]/10 transition-all duration-300 shadow-md">
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
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