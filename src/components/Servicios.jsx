import Card from "./Card";
import servicio1 from '../assets/servicio1.jpeg';
import servicio2 from '../assets/servicio2.jpeg';
import servicio3 from '../assets/servicio3.jpeg';
import servicio4 from '../assets/servicio4.jpeg';
import servicio5 from '../assets/servicio5.jpeg';
import servicio6 from '../assets/servicio6.jpeg';

const serviciosData = [
  { imageSrc: servicio1, title: "Rituales de atracción", description: "Ofrecemos amarres de amor personalizados para fortalecer tu relación y atraer a esa persona especial.", altText: "Rituales de atracción" },
  { imageSrc: servicio2, title: "Consultas amorosas", description: "Cada caso es único. Ofrecemos consultas personalizadas para entender y resolver tu situación amorosa.", altText: "Consultas amorosas" },
  { imageSrc: servicio3, title: "Lectura de Tarot", description: "Nuestros rituales de retorno están diseñados para reconectar corazones y restaurar el amor perdido.", altText: "Lectura de Tarot" },
  { imageSrc: servicio4, title: "Amarres sexuales", description: "Con años de experiencia, nuestros especialistas en amarres garantizan discreción y resultados rápidos.", altText: "Amarres sexuales" },
  { imageSrc: servicio5, title: "Rituales personalizados", description: "Ofrecemos rituales de amor personalizados para atraer a la persona que amas y mejorar tu relación.", altText: "Rituales personalizados" },
  { imageSrc: servicio6, title: "Rituales de retorno", description: "Utilizamos técnicas ancestrales y modernas para asegurarnos de que tu ser amado regrese a tu lado.", altText: "Rituales de retorno" }
];

const Servicios = () => {
  return (
    <div id="servicios" className="text-center p-6 sm:p-10 lg:p-20">
      <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold uppercase">Nuestros Servicios</h2>
      <p className="text-lg sm:text-xl lg:text-2xl pt-4 sm:pt-5 max-w-7xl mx-auto">
        El amor verdadero no se pierde, se recupera. Confía en nuestros servicios de amarre y retorno. Con años de experiencia, nuestros especialistas garantizan discreción y resultados rápidos. Cada caso es único. Ofrecemos consultas personalizadas y gratuitas para entender y resolver tu situación con: Lectura de Tarot, Trabajos de amarre de amor, Rituales de Retorno de parejas, de protección, prosperidad económica, limpiezas energéticas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-9 mb-6 sm:mb-9">
        {serviciosData.map((servicio, index) => (
          <Card
            key={index}
            imageSrc={servicio.imageSrc}
            title={servicio.title}
            description={servicio.description}
            altText={servicio.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Servicios;