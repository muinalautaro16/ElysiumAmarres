
// Definir el componente de tarjeta reutilizable
const Card = ({ imageSrc, title, description, altText }) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg h-full rounded overflow-hidden shadow-lg shadow-gray-500 bg-white hover:shadow-xl hover:shadow-pink-700">
      <div className="h-64 md:h-80 lg:h-96 w-full flex justify-center items-center overflow-hidden">
        <img className="object-cover object-center h-full w-full" src={imageSrc} alt={altText} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">{title}</div>
        <p className="text-gray-700 text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

// Definir los valores por defecto para las props
Card.defaultProps = {
  altText: 'Image',
};

// Exportar el componente
export default Card;