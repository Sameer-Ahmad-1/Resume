import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About / Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Sameer Ahmad</h3>
          <p className="text-sm text-gray-400">
            Passionate Frontend Developer building modern, scalable, and elegant
            web experiences.
          </p>
        </div>

        {/* Projects / Portfolio Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Projects</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#project1" className="hover:underline">
                MailVail
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Music App
              </a>
            </li>
            <li>
              <a href="#project3" className="hover:underline">
                Portfolio Website
              </a>
            </li>
            <li>
              <a href="#project4" className="hover:underline">
                More...
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:underline">
                Download Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> Toba Tek Singh,
              Punjab
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> sameerahmad0182@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" /> 03451543286
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sami Gujjar. All rights reserved. |
        <a
          href="https://github.com/settings/profile"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
