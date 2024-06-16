import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImLocation } from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-8 flex flex-col lg:flex-row justify-center">
      <div className="container mx-auto flex flex-wrap justify-center">

        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0 flex flex-col justify-start items-center text-center sm:text-left">
          <div className="mb-2 font-bold">Ask Us</div>
          <div className="flex items-center mb-2 justify-center sm:justify-start">
            <FaPhone className="mr-2" />
            <span>Phone: +91-72192 05988</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <FaEnvelope className="mr-2" />
            <span>Email: gunjanchauke916@gmail.com</span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0 flex flex-col justify-start items-center text-center sm:text-left">
          <div className="mb-2 font-bold">ADDRESS</div>
          <div className="flex items-center mb-2 justify-center sm:justify-start">
            <ImLocation className="mr-2" />
            <span>Walchand College of Engineering, Sangli.</span>
          </div>
          <div className="text-center sm:text-left">Sangli - Miraj Rd, Vishrambag, Sangli, Maharashtra 416415</div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0 flex flex-col justify-start items-center text-center sm:text-left">
          <div className="mb-2 font-bold">Social Media</div>
          <div className="flex items-center justify-center sm:justify-start">
            <a href="https://www.linkedin.com/company/tedxwce-sangli/" target="_blank" rel="noopener noreferrer" className="mr-2">
              <FaLinkedin className="text-white" />
            </a>
            <a href="https://www.instagram.com/tedx_wce_sangli/" className="mr-2">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://twitter.com/tedx_wce_sangli/" className="mr-2">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
