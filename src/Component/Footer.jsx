import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fc] text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Social + Language */}
        <div className="space-y-6">
          <div className="font-bold text-2xl">🎓 EDUCARE</div>
          <div className="flex space-x-4 text-gray-600 text-xl">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaYoutube />
          </div>
          <div>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Wikis</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Notion AI</li>
            <li>What’s new</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-3">Solutions</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Enterprise</li>
            <li>Small business</li>
            <li>Personal use</li>
            <li>Remote work</li>
            <li>Startups</li>
            <li>Education</li>
            <li>Nonprofits</li>
            <li>Engineering</li>
            <li>Product</li>
            <li>Design</li>
            <li>Managers</li>
          </ul>
        </div>

        {/* Download + Build + Learn */}
        <div>
          <h4 className="font-semibold mb-3">Download</h4>
          <ul className="space-y-1 text-sm text-gray-600 mb-4">
            <li>iOS & Android</li>
            <li>Mac & Windows</li>
            <li>Web Clipper</li>
          </ul>

          <h4 className="font-semibold mb-3">Build</h4>
          <ul className="space-y-1 text-sm text-gray-600 mb-4">
            <li>Connections</li>
            <li>Templates</li>
            <li>API docs</li>
            <li>Guides & tutorials</li>
            <li>Find a consultant</li>
            <li>Become an affiliate</li>
          </ul>

          <h4 className="font-semibold mb-3">Learn</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Customer stories</li>
            <li>Help center</li>
            <li>Webinars</li>
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Get Started + Resources */}
        <div>
          <h4 className="font-semibold mb-3">Get started</h4>
          <ul className="space-y-1 text-sm text-gray-600 mb-4">
            <li>Request a demo</li>
            <li>Switch from Evernote</li>
            <li>Switch from Confluence</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>

          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Pricing</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
            <li>Contact support</li>
            <li>Email us</li>
            <li>Security</li>
            <li>Cookie settings</li>
            <li>Terms & privacy</li>
            <li>California Privacy Notice</li>
            <li>Status</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 max-w-7xl mx-auto px-4 md:px-0">
        <h3 className="text-lg font-semibold">Subscribe To Our Newsletter</h3>
        <p className="text-sm text-gray-500 mb-4">Stay Up To Date</p>
        <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 border border-gray-300 rounded-full text-sm w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6">
          An Educare Systems Enterprise Architect © 2025 Educare Labs, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;