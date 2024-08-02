
const CardTest = ({ imageSrc }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <img src={imageSrc} alt="Testimonio" className="object-contain w-full h-full rounded-lg" />
    </div>
  );
};

export default CardTest;