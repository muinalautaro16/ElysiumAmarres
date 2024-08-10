// import logotipo5 from "../assets/logotipo5.png";
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
  return (
    <header className="py-3 bg-pink-700 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
      <a href="/" className="font-bold text-2xl text-black text-center lg:text-left">
          Elysium <span className="text-white font-black">Amarres</span>
        </a>
        {/* <a href="/">
          <img src={logotipo5} alt="logo" className="h-12 w-60"/>
        </a> */}
        
        
        <nav className="flex flex-col items-center lg:flex-row gap-3 mt-3 lg:mt-0">
          <a href="/" className="text-white text-lg lg:text-xl uppercase font-bold p-2 hover:rounded-md  hover:cursor-pointer hover:bg-pink-500 hover:text-black">
            Inicio
          </a>
          <Link to='servicios' smooth={true} duration={500} className="text-white text-lg lg:text-xl uppercase font-bold p-2 hover:rounded-md  hover:cursor-pointer hover:bg-pink-500 hover:text-black ">
            Servicios
          </Link>
          <Link to='testimonios' smooth={true} duration={500} className="text-white text-lg lg:text-xl uppercase font-bold p-2 hover:rounded-md  hover:cursor-pointer hover:bg-pink-500 hover:text-black">
            Testimonios
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;