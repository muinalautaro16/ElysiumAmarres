import Btn from "../components/Btn";
import useFnWspp from "../hooks/useFnWspp";


const Banner = () => {
  const { link, getRandomItem } = useFnWspp(['https://wa.me/529844520396', 'https://wa.me/529844520396']);

  return (
    <div className="relative bg-banner bg-center bg-cover w-full h-screen flex flex-col items-center gap-4 justify-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
        Amarres poderosos
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mb-6">
        Si estás pasando un momento difícil con tu pareja, amigos, familia, o estás mal económicamente, nosotros contamos con profesionales que pueden ayudarte a dar un giro en tu vida.
      </p>
      <Btn link={link} getRandomItem={getRandomItem} />
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 font-bold">
        Este sitio va dirigido exclusivamente a <span className="text-rose-400">mayores de 18 años.</span>
      </p>
    </div>
  );
};

export default Banner;