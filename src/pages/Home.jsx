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
    <>
        <Nav />
        <Banner />
        <Servicios />
        <Testimonios />
        <BtnWspp  />
        <Footer />
    </>
  )
}

export default Home