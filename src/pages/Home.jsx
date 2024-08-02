import  Banner from "../components/Banner";
import  Nav from "../components/Nav";
import  Servicios from "../components/Servicios";
import  BtnWspp from "../components/BtnWspp";
import Testimonios from "../components/Testimonios";
import Footer from "../components/Footer";
import useFnWspp from "../hooks/useFnWspp";

const Home = () => {
  const {link, getRandomItem} = useFnWspp(['https://wa.me/2657264844', 'https://wa.me/2657507138']);
  return (
    <>
        <Nav />
        <Banner />
        <Servicios />
        <Testimonios />
        <BtnWspp  link={link} getRandomItem={getRandomItem}/>
        <Footer />
    </>
  )
}

export default Home