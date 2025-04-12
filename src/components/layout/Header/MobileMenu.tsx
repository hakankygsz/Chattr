import Logo from '@/assets/images/Logo.png';
import { IoCloseOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const navItems = [
    { title: 'Anasayfa', link: '/' },
    { title: 'Projelerim', link: '/projects' },
    { title: 'İletişim', link: '/contact' }
];

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
    const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        toggleMenu();
        navigate(link);
    };

    return (
        <div className={`lg:hidden fixed inset-0 z-30 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="fixed right-0 top-0 w-full h-full border-l bg-white/90 dark:bg-black/90">
                <div className="h-24 flex items-center justify-between px-8 border-b bg-white dark:bg-black">
                    <Link to="/" className="text-6xl text-blue-600">
                        <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
                    </Link>

                    <button className="text-5xl text-black dark:text-white hover:ring-2 hover:ring-blue-600 rounded-full p-0.5 duration-300 transition-shadow" onClick={() => toggleMenu()}>
                        <IoCloseOutline />
                    </button>
                </div>

                <ul className="flex flex-col justify-center gap-10 mt-14 px-8">
                    {navItems.map(({ title, link }) => (
                        <li key={link} className="relative group">
                            <button
                                onClick={() => handleNavigation(link)}
                                className="flex items-center text-xl font-medium text-black dark:text-white hover:text-blue-600 transition-all duration-300">
                                {title}
                            </button>
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;
