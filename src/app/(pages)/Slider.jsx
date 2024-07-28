
"use client"
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const images = [
    "/images/sliderimage1.jpg",
    "/images/sliderimage2.jpg",
    "/images/sliderimage3.jpg",
    "/images/sliderimage4.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full h-[28rem]">
      {/* Image Slider */}
      <div className="relative lg:w-3/4 h-2/3 lg:h-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full  object-fill transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-black"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-black"
        >
          <FaArrowRight />
        </button>
      </div>

<div className="w-full lg:w-1/4 h-1/3 lg:h-full bg-blue-500 px-6 py-2 pt-0 flex flex-col justify-center overflow-hidden">
  <h2 className="text-3xl text-nowrap sm:text-2xl pt-2 text-white font-bold mb-4">भारतीय ज्योतिष संस्थानम</h2>
  <div className="relative h-1/2 w-full">
    <div className="absolute inset-0 flex flex-col items-center justify-start">
      <p className="mb-4 my-4 text-white text-xs sm:text-base font-medium animate-slide-up">
        यह संस्था धर्मोत्थान, धार्मिक एवं सामाजिक सेवा कार्य हेतु सर्वदा तत्पर है ।. इस सस्था के माध्यम से देश सेवा, धर्म एवं समाज सेवा का कार्य किया जाता है । इस संस्थान को कार्य करने के लिए सम्पूर्ण भारत वर्ष में धर्म का प्रचार, शिक्षा में सुधार एवं शिक्षा को बढ़ावा, भारतीय संस्कृति एवं संस्कारो के बचाव एवं उत्थान हेतु सहयोग दें | आइये हम सभी भारत वासी मिलकर हाथ में धर्म, ज्ञान और एकता का मशाल लिए साथ चले| भारत को विकसित देश बनायें | सनातन धर्म को जागृत रखें|
      </p>
    </div>
  </div>
  <style jsx>{`
    @keyframes slide-up {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(-20%);
      }
    }
    .animate-slide-up {
      animation: slide-up 5s linear infinite;
    }
    @media (min-width: 480px) {
      .animate-slide-up {
        animation: none;
      }
    }
  `}</style>
</div>

    </div>
  );
};

export default Slider;
