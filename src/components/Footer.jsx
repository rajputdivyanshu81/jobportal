import React from 'react';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">100x Engineers</h2>
            <p className="mb-4">Connecting top talent with innovative companies. Find your dream job or hire exceptional engineers.</p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FiLinkedin />} />
              <SocialLink href="#" icon={<FiTwitter />} />
              <SocialLink href="#" icon={<FiFacebook />} />
              <SocialLink href="#" icon={<FiInstagram />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/jobs">Job Listings</FooterLink>
              <FooterLink href="/companies">Companies</FooterLink>
              <FooterLink href="/resources">Resources</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="flex flex-col sm:flex-row lg:flex-col">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 mb-2 sm:mb-0 lg:mb-2"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full sm:w-auto lg:w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:ml-2 lg:ml-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} 100x Engineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    
   <a href={href}  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    >
      {React.cloneElement(icon, { size: 24 })}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      
       <a href={href}
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}

export default Footer;