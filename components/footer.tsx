import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 md:px-0">
                <div className="mb-6 md:mb-0 md:pr-80">
                    <h2 className="text-3xl mb-4 font-semibold">Let&rsquo;s Connect</h2>
                    <p className="text-gray-300">Feel free to reach out to me through any of the platforms below. I&rsquo;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                </div>
                <div className="flex justify-center md:justify-end space-x-4 md:space-x-8">
                    <a href="https://linkedin.com/in/chamathishanka" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/chamathishanka" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://wa.me/0750692965" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                        <FaWhatsapp size={30} />
                    </a>
                    <a href="pkchamath2000@gmail.com" className="text-white hover:text-gray-300 transition-colors duration-300">
                        <FaEnvelope size={30} />
                    </a>
                    <a href="tel:+94750692965" className="text-white hover:text-gray-300 transition-colors duration-300">
                        <FaPhone size={30} />
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                <p className="text-sm">&copy; {new Date().getFullYear()} Chamath Ishanka. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;