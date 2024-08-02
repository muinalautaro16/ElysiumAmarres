import CardTest from "./CardTest";
import test1 from '../assets/test1.jpeg';
import test2 from '../assets/test2.jpeg';
import test3 from '../assets/test3.jpeg';
import test4 from '../assets/test4.jpeg';
import test5 from '../assets/test5.jpeg';
import test6 from '../assets/test6.jpeg';

const testimonioData = [
  { imageSrc: test1 },
  { imageSrc: test2 },
  { imageSrc: test3 },
  { imageSrc: test4 },
  { imageSrc: test5 },
  { imageSrc: test6 },
];

const Testimonios = () => {
  return (
    <div id="testimonios" className="text-center bg-black p-9">
      <h2 className="text-6xl font-bold text-rose-400 uppercase">Testimonios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {testimonioData.map((testimonio, index) => (
          <CardTest
            key={index}
            imageSrc={testimonio.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonios