import  Banner from "../components/Banner";
import  Nav from "../components/Nav";
import  Servicios from "../components/Servicios";
import  BtnWspp from "../components/BtnWspp";
import Testimonios from "../components/Testimonios";
import Footer from "../components/Footer";
// import useFnWspp from "../hooks/useFnWspp";
// link={link} getRandomItem={getRandomItem} esto va en el btnWspp
const Home = () => {
  // const {link, getRandomItem} = useFnWspp(['https://wa.me/', 'https://wa.me/']);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Banner className="w-full sm:w-3/4 lg:w-1/2 mx-auto"/>
      <Servicios className="flex-grow" />
      <Testimonios className="flex-grow" />
      <BtnWspp className="fixed bottom-4 right-4" />
      <Footer />
    </div>
  );
};

export default Home