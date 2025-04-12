import Logo from '@/assets/images/Logo.png';
import useTheme from '@/hooks/useTheme';
import { useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const navItems = [
  { title: 'Anasayfa', link: '/' },
  { title: 'Projelerim', link: '/projects' },
  { title: 'İletişim', link: '/contact' }
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpenned, setMobileMenuOpenned] = useState(false);

  const toggleMobileMenuOpenned = () => setMobileMenuOpenned(prev => !prev);

  return (
    <header className='overflow-hidden sticky top-0 left-0 z-40 flex justify-between items-center h-24 px-8 lg:px-48 bg-white dark:bg-[#080816]'>
      <div className='flex items-center justify-between'>
        <Link to="/" className="text-6xl text-blue-600 cursor-pointer select-none">
          <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
        </Link>
        <ul className="hidden lg:flex items-center justify-between space-x-16 ml-24 font-medium">
          {navItems.map(({ title, link }) => (
            <Link key={link} to={link} className="relative group text-base font-roboto font-normal text-black dark:text-white">
              {title}
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-black dark:bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className='text-black dark:text-neutral-200 dark:border-neutral-800 h-12 w-12 flex items-center justify-center border rounded-full text-2xl hover:ring transition-shadow duration-300'>
          {theme == 'dark' ? <CiDark /> : <CiLight />}
        </button>

        <button onClick={toggleMobileMenuOpenned} className="lg:hidden text-5xl text-neutral-800 dark:text-neutral-300">
          <IoMenu />
        </button>
      </div>

      <MobileMenu isOpen={mobileMenuOpenned} toggleMenu={toggleMobileMenuOpenned} />
    </header>
  )
}

export default Header;
