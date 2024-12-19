import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Logo from "../../src/assets/vb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#eeeded] text-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto pb-2 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-6">
              <a
                href="/"
                className="flex items-center space-x-3 text-2xl font-semibold text-[#165a94]"
              >
                <img
                  src={Logo}
                  alt="Voyagers Logo"
                  width="64"
                  height="64"
                  className="w-16"
                />
                <span>
                  Voyagers Beat <br />
                  <span className="text-lg text-[#165a94]">
                    (Live to Travel)
                  </span>
                </span>
              </a>
              <p className="max-w-md text-gray-600">
                Discover the world with Voyagers Beat—your ultimate travel
                companion. From offbeat adventures to curated group trips.
              </p>
              {/* Social Media Links */}
              <div className="flex space-x-6 text-gray-700">
                <a
                  href="https://www.linkedin.com/company/voyagersbeat07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin size={23} />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  <FaYoutube size={23} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaTwitter size={23} />
                </a>
                <a
                  href="https://www.facebook.com/voyagersBeat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <FaFacebook size={23} />
                </a>
                <a
                  href="https://www.instagram.com/voyagersbeat?igsh=OGI2cGh0NzdvamE4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  <FaInstagram size={23} />
                </a>
                <a
                  href="https://wa.me/8448591315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  <FaWhatsapp size={23} />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:col-span-2 gap-6">
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Our Solutions
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="https://voyagersbeat.com/"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Voyagers Beat
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.maplecomputers.in/index.html"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Maple Computers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-[#1e73be]">
                      Voyagers Blogs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Resources
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="/destination"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-and-conditions"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/career"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact-us"
                      className="text-gray-600 hover:text-[#1e73be]"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800">Address</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <span className="text-gray-800 font-semibold">
                      Head Office:
                    </span>
                    <br />
                    2nd Floor, C 2/13, Phase 2, Ashok Vihar, Delhi, 110052
                  </li>
                  <li>
                    <span className="text-gray-800 font-semibold">
                      Branch Office:
                    </span>
                    <br />
                    H7 B8 Aggarwal Plaza, Netaji Subhash Place, Delhi, 110033
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-300 pt-6 text-center">
            <p className="text-gray-600 text-sm">
              © 2024. Crafted with <FaHeart className="inline text-red-600" />{" "}
              by{" "}
              <a
                href="https://voyagersbeat.com/"
                className="text-[#1e73be] hover:text-blue-900 ml-1"
              >
                Voyagers Beat
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
