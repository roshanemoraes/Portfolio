import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 bg-opacity-80 backdrop-blur-md' : 'bg-black'
      }`}
    >
      <button
        className="navbar-menu-icon md:hidden text-white"
        onClick={toggleMenu}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>
      <div className="flex-grow flex justify-center">
        <nav
          className={`navbar-menu ${menuOpen ? 'block' : 'hidden'} md:flex gap-12 transition-all duration-300 w-full md:w-auto`}
        >
          <a
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            href="#about-me"
          >
            ABOUT ME
          </a>
          <a
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            href="/#technologies"
          >
            TECHNOLOGIES
          </a>
          <a
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            href="/#experience"
          >
            EDUCATION
          </a>
          <a
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            href="/#projects"
          >
            PROJECTS
          </a>
          
          <a
            className="text-lg font-medium text-gray-300 transition-colors hover:text-white underline-animation"
            href="/#contact-me"
          >
            CONTACT ME
          </a>
          
        </nav>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a
          href="https://github.com/WimukthiMadushan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            className="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* GitHub Icon Path */}
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/wimukthi-madushan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* LinkedIn Icon Path */}
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
