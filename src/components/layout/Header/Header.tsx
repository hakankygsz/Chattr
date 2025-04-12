import { RootState } from '@/app/store';
import Logo from '@/assets/images/Logo.png';
import { useEffect, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import UserBox from './UserBox';

const Header = () => {

  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const userBoxRef = useRef<HTMLDivElement>(null);

  const [mobileMenuOpenned, setMobileMenuOpenned] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen(prev => !prev);
  const toggleMobileMenuOpenned = () => setMobileMenuOpenned(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isUserMenuOpen && userBoxRef.current && !userBoxRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <header className='overflow-hidden sticky top-0 left-0 z-40 flex justify-between items-center h-24 px-6 lg:px-48 backdrop-blur-md'>
      <Link to="/" className="text-5xl text-blue-600 cursor-pointer select-none transition duration-300 hover:scale-105">
        <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
      </Link>

      <label className='absolute left-1/2 -translate-x-1/2 max-w-3xl w-full h-14 hidden lg:flex items-center justify-between bg-white dark:bg-neutral-900 border rounded-lg duration-300 transition-all hover:bg-neutral-100'>
        <IoIosSearch className='h-full w-16 text-black dark:text-neutral-500 p-3 border-r' />
        <input
          type='text'
          placeholder='Ne arıyorsunuz?'
          className='w-full outline-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-500 mx-4'
        />
      </label>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className='relative flex items-center justify-center gap-4'>
            <button onClick={toggleUserMenu} className="relative rounded-full overflow-hidden border-2 border-neutral-300 dark:border-neutral-700 p-1 transition-all duration-300 hover:ring-2">
              {user?.photo_url ? (
                <img loading="lazy" src={user.photo_url} className="w-12 h-12 object-cover rounded-full" alt="User" referrerPolicy="no-referrer" crossOrigin='anonymous' />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold text-2xl uppercase">
                  {user?.username?.charAt(0).toUpperCase() || '?'}
                </div>
              )}
            </button>
            {isUserMenuOpen && (
              <div id='user-box' className="absolute top-full right-1/2 translate-x-1/2">
                <UserBox MenuOpen={isUserMenuOpen} SetMenuOpen={setIsUserMenuOpen} />
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/auth/sign-in')} className="hidden lg:flex flex-col items-center justify-center py-2 px-6 text-xl border text-neutral-900 dark:text-neutral-100 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 duration-300">
            Giriş Yap
            <span className="text-neutral-500 dark:text-neutral-400 text-xs">veya kayıt ol</span>
          </button>
        )}
        <button onClick={toggleMobileMenuOpenned} className="lg:hidden text-5xl text-neutral-800 dark:text-neutral-300">
          <IoMenu />
        </button>
      </div>

      <MobileMenu isOpen={mobileMenuOpenned} toggleMenu={toggleMobileMenuOpenned} />
    </header>
  )
}

export default Header;
