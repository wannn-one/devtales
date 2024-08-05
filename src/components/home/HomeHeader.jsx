import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { navbarContent } from '../../data/data'
import { useEffect, useState } from 'react'
import Auth from '../auth/Auth'

const HomeHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const scrolled = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrolled);
    return () => window.removeEventListener("scroll", scrolled);
  }, []);

  const openAuthModal = () => {
    setIsAuthOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthOpen(false);
  };

  return (
    <header className={`border-b border-black sticky top-0 z-50
      ${isActive ? "bg-white" : "bg-banner"}
      transition-all duration-500`}>
      <div className="size h-[70px] flex items-center justify-between">
        <Link to="/">
          <img
            className='h-[3rem]'
            src={Logo}
            alt='logo'
          />
        </Link>
        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {navbarContent.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className='hover:underline'
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className='relative'>
            <button 
              className='hidden text-sm sm:flex items-center gap-5 hover:underline'
              onClick={openAuthModal}
            >
              Sign In
            </button>
          </div>
          <button 
            className={`text-white rounded-full px-3 p-2 text-sm font-medium ${isActive ? "bg-green-700" : "bg-black"} transition-all duration-500`}
            onClick={openAuthModal}
          >
            Get Started
          </button>
        </div>
      </div>
      <Auth isOpen={isAuthOpen} onClose={closeAuthModal} />
    </header>
  )
}

export default HomeHeader