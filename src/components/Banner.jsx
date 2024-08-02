import Btn from "../components/Btn";
import useFnWspp from "../hooks/useFnWspp";

const Banner = () => {
  const {link, getRandomItem }= useFnWspp(['https://wa.me/2657264844', 'https://wa.me/2657507138']);

  return (
    <div className="relative bg-banner bg-center bg-cover h-screen flex flex-col items-center gap-4 justify-center text-center text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">Amarres poderosos</h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mb-6">
        Si estás pasando un momento difícil con tu pareja, amigos, familia, o estás mal económicamente, nosotros contamos con profesionales que pueden ayudarte a dar un giro en tu vida.
      </p>
      <Btn link={link} getRandomItem={getRandomItem}/>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 font-bold">
        Este sitio va dirigido exclusivamente a <span className="text-rose-400">mayores de 18 años.</span>
      </p>
    </div>
  );
};

export default Banner;