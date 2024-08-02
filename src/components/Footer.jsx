const Footer = () => {
  return (
    <footer className="bg-pink-700 text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-6 sm:py-2">
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 mb-4 sm:mb-0">
          <p className="text-white font-bold">Desarrollado por:</p>
          <a 
            className="font-bold text-white p-2 hover:rounded-md  hover:cursor-pointer hover:bg-pink-500 hover:text-blue-600"
            href="https://www.linkedin.com/in/lautaro-mui%C3%B1a-b2a256217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lautaro Muiña
          </a>
        </div>
        <p className="font-bold text-white">
          Elysium Amarres.
          <br className="sm:hidden" />
          Todos los derechos reservados
        </p>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;