import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl mb-4">Let&rsquo;s Connect</h2>
                <div className="flex justify-center space-x-10">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaGithub size={30} />
                    </a>

                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaWhatsapp size={30} />
                    </a>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300">
                        <FaEnvelope size={30} />
                    </a>

                    <a href="tel:+1234567890" className="text-white hover:text-gray-300">
                        <FaPhone size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;