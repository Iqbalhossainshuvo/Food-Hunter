import slide2bgNewsletter from '../../assets/NewsLetter/slide2-bg.webp';
const Newsletter = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
    style={{
      backgroundImage: `url(${slide2bgNewsletter})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative',
    }}
  >
    <div className="p-4 md:p-8 lg:p-12 rounded-lg shadow-lg bg-opacity-80 backdrop-blur-md">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-white">
        Newsletter
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-4 text-center text-white">
        Will be used in accordance with our Privacy Policy.
      </p>
      <form className="flex items-center justify-center flex-col md:flex-row ">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 mb-2 md:mb-0 md:mr-0 w-full md:w-64 border-t border-b border-l text-gray-800 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="text-white py-2 px-4 bg-primary  w-full md:w-auto "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Newsletter;
