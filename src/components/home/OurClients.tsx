
// import { useState, useEffect } from 'react';
// import img1 from '../../assets/ourClientIcons/img1.png';
// import img2 from '../../assets/ourClientIcons/img2.png';
// import img3 from '../../assets/ourClientIcons/img3.png';
// import img4 from '../../assets/ourClientIcons/img4.png';
// import img5 from '../../assets/ourClientIcons/img5.png';
// import img6 from '../../assets/ourClientIcons/img6.png';

// const OurClients = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [numVisibleImages, setNumVisibleImages] = useState(6); // Default number of visible images

//   // Detect screen size and update the number of visible images
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         // Mobile view: 1 image, 6 buttons
//         setNumVisibleImages(1);
//       } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
//         // Tablet view: 4 images, 4 buttons
//         setNumVisibleImages(4);
//       } else {
//         // Desktop view: 6 images, 2 buttons
//         setNumVisibleImages(6);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initialize the number of visible images
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const prevSlide = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex === 0 ? ourClientsData.length - numVisibleImages : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex === ourClientsData.length - numVisibleImages ? 0 : prevIndex + 1
//     );
//   };

//   const ourClientsData = [
//     { id: 1, img: img1 },
//     { id: 2, img: img2 },
//     { id: 3, img: img3 },
//     { id: 4, img: img4 },
//     { id: 5, img: img5 },
//     { id: 6, img: img6 },
//   ];

//   return (
//     <div>
//       <h1 className='text-center font-bold text-3xl py-10'>Our Clients</h1>
//       <div className="flex justify-center items-center flex-col">
//         <div className="flex overflow-x-hidden relative">
//           <div
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${startIndex * (100 / numVisibleImages)}%)` }}
//           >
//             {ourClientsData.map((data) => (
//               <div
//                 key={data.id}
//                 className="mr-4"
//                 style={{ flex: `0 0 ${100 / numVisibleImages}%` }}
//               >
//                 <img src={data.img} alt="" />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-4">
//           {[...Array(numVisibleImages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={index === 0 ? prevSlide : nextSlide}
//               className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300"
//               style={{ fontSize: '38px' }}
//             >
//               &bull;
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurClients;





 import { useState } from 'react';
import img1 from '../../assets/ourClientIcons/img1.png';
import img2 from '../../assets/ourClientIcons/img2.png';
import img3 from '../../assets/ourClientIcons/img3.png';
import img4 from '../../assets/ourClientIcons/img4.png';
import img5 from '../../assets/ourClientIcons/img5.png';
import img6 from '../../assets/ourClientIcons/img6.png';

const OurClients = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? ourClientsData.length - 5 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === ourClientsData.length - 5 ? 0 : prevIndex + 1
    );
  };

  const ourClientsData = [
    { id: 1, img: img1 },
    { id: 1, img: img2 },
    { id: 1, img: img3 },
    { id: 1, img: img4 },
    { id: 1, img: img5 },
    { id: 1, img: img6 },
  ];


  
  return (
    <div>
      <h1 className='text-center font-bold text-3xl py-10'>Our Clients</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="flex overflow-x-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / 5)}%)` }}
          >
            {ourClientsData.map((data) => (
              <div
                key={data.id}
                className="mr-4"
                style={{ flex: `0 0 ${100 / 5}%` }}
              >
                <img src={data.img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={prevSlide}
            className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300"
            style={{ fontSize: '38px' }}
          >
          &bull;
          </button>
          <button
            onClick={nextSlide}
            className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300"
            style={{ fontSize: '38px' }}
          >
         &bull;
          </button>
        </div>
      </div>
    </div>
    
    
  );
};

export default OurClients;

