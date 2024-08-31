import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        
        {/* Social Media Links */}
        <div className="flex space-x-6 ">
          <a href="https://github.com/beingzuhairkhan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500 transition-colors" />
          </a>
          <a href="https://x.com/beingzuhairkhan" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/zuhair-khan-55b9a624a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://nexuslinks.netlify.app/" target="_blank" rel="noopener noreferrer">
            <FaLink className="text-2xl hover:text-green-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-500 mt-4">
        © 2024 Headliner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
