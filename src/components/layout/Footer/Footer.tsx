import Logo from '@/assets/images/Logo.png';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: "https://www.instagram.com/hakankygsz", icon: <FaInstagram className="w-6 h-6 transition-all duration-300 transform hover:scale-110 hover:text-red-600 dark:hover:text-yellow-400" aria-label="Instagram" /> },
  { href: "https://github.com/hakankygsz", icon: <FaGithub className="w-6 h-6 transition-all duration-300 transform hover:scale-110 hover:text-violet-500 dark:hover:text-violet-700" aria-label="Github" /> },
  { href: "https://www.linkedin.com/in/hakankygsz/", icon: <FaLinkedin className="w-6 h-6 transition-all duration-300 transform hover:scale-110 hover:text-blue-800 dark:hover:text-blue-700" aria-label="LinkedIn" /> },
  { href: "https://api.whatsapp.com/send/?phone=905544985528&text&type=phone_number&app_absent=0", icon: <FaWhatsapp className="w-6 h-6 transition-all duration-300 transform hover:scale-110 hover:text-green-500 dark:hover:text-green-400" aria-label="WhatsApp" /> },
];

const footerLinks = [
  {
    title: "Hızlı Bağlantılar",
    links: [
      { text: "Anasayfa", href: "/" },
      { text: "Projelerim", href: "/projects" },
      { text: "İletişim", href: "/contact-us" },
    ],
  }
];

const Footer = () => (
  <footer className="p-8">
    <div className="mx-auto max-w-screen-2xl">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex items-center">
          <Link to="/" className="text-6xl text-blue-600 cursor-pointer select-none">
            <img src={Logo} alt="Logo" className="h-24 w-24 object-contain" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-8 md:gap-24">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">{section.title}</h2>
              <ul className="flex flex-col text-neutral-800 dark:text-neutral-400 gap-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} target="_blank" className="hover:underline transition-colors duration-300">{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 sm:mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-neutral-800 sm:text-center dark:text-cyan-600">Hakan Kaygusuz tarafından geliştirilmiştir</span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {socialLinks.map((social, idx) => (
            <Link key={idx} to={social.href} target="_blank" className="z-10 text-neutral-500 hover:text-black dark:hover:text-white duration-300" aria-label={social.icon.props['aria-label']}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
