import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiMoon, FiSun, FiBriefcase, FiInfo, FiBook, FiMail } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">Hire 100x Engineers</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            <NavLink href="/jobs" icon={<FiBriefcase />}>Jobs</NavLink>
            <NavLink href="/about" icon={<FiInfo />}>About</NavLink>
            <NavLink href="/resources" icon={<FiBook />}>Resources</NavLink>
            <NavLink href="/contact" icon={<FiMail />}>Contact</NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchBar />
            <CTAButton>Post a Job</CTAButton>
            <UserActions isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600 dark:focus:text-blue-400">
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600 dark:focus:text-blue-400">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="/jobs" icon={<FiBriefcase />}>Jobs</NavLink>
              <NavLink href="/about" icon={<FiInfo />}>About</NavLink>
              <NavLink href="/resources" icon={<FiBook />}>Resources</NavLink>
              <NavLink href="/contact" icon={<FiMail />}>Contact</NavLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <SearchBar />
              <div className="mt-3 space-y-1">
                <CTAButton fullWidth>Post a Job</CTAButton>
                <UserActions isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} mobile />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children, icon }) {
  return (
    <a href={href} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
}

function SearchBar() {
  return (
    <div className="relative w-full sm:w-64">
      <input
        type="text"
        placeholder="Search jobs..."
        className="w-full px-4 py-2 rounded-full text-sm bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
        <FiSearch size={18} />
      </button>
    </div>
  );
}

function CTAButton({ children, fullWidth }) {
  return (
    <button className={`${fullWidth ? 'w-full' : ''} bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
      {children}
    </button>
  );
}

function UserActions({ isDarkMode, toggleDarkMode, mobile }) {
  const buttonClass = mobile
    ? "flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600 dark:focus:text-blue-400";

  return (
    <>
      <button className={buttonClass}>
        <FiUser size={mobile ? 18 : 20} className={mobile ? "mr-3" : ""} />
        {mobile && "Account"}
      </button>
      {!mobile && (
        <button onClick={toggleDarkMode} className={buttonClass}>
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      )}
    </>
  );
}

export default Header;