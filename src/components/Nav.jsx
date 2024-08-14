import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-3 bg-pink-700 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        
        {/* Contenedor del logo y del botón de hamburguesa */}
        <div className="flex justify-between w-full lg:w-auto items-center">
          <button 
            className="text-white focus:outline-none lg:hidden" 
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <a href="/" className="font-bold text-2xl text-black text-center lg:text-left ml-4 lg:ml-0">
            Elysium <span className="text-white font-black">Amarres</span>
          </a>

          <div></div>
        </div>

        {/* Menú principal (incluye el menú móvil) */}
        <nav className={`flex-col lg:flex-row gap-3 mt-3 lg:mt-0 lg:flex ${isOpen ? 'flex' : 'hidden'} w-full lg:w-auto lg:ml-auto`}>
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-end w-full">
            <a href="/" className="text-white text-lg lg:text-xl uppercase font-bold p-2 hover:rounded-md hover:cursor-pointer hover:bg-pink-500 hover:text-black">
              Inicio
            </a>
            <Link to='servicios' smooth={true} duration={500} className="text-white text-lg lg:text-xl uppercase font-bold p-2 hover:rounded-md hover:cursor-pointer hover:bg-pink-500 hover:text-black">
              Servicios
            </Link>
            <Link to='testimonios' smooth={true} duration={500} className="text-white text-lg lg:text-xl uppercase font-bold p-2 hover:rounded-md hover:cursor-pointer hover:bg-pink-500 hover:text-black">
              Testimonios
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;