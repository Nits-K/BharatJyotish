"use client";
import React, { useState, useEffect } from 'react';

// Slider Component
const Slider = () => {
  const slides = [
    { id: 1, content: "इस सस्था के माध्यम से देश सेवा, धर्म एवं समाज सेवा का कार्य किया जाता है" },
    { id: 2, content: " इस संस्थान को कार्य करने के लिए सम्पूर्ण भारत वर्ष में धर्म का प्रचार, शिक्षा में सुधार एवं शिक्षा को बढ़ावा, भारतीय संस्कृति एवं संस्कारो के बचाव एवं उत्थान हेतु सहयोग दें | आइये हम सभी भारत वासी मिलकर हाथ में धर्म, ज्ञान और एकता का मशाल लिए साथ चले | भारत को विकसित देश बनायें | सनातन धर्म को जागृत रखें |" },
    { id: 3, content: "यह संस्था धर्मोत्थान, धार्मिक एवं सामाजिक सेवा कार्य हेतु सर्वदा तत्पर व है ।" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Auto-slide every 3000 ms

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-92 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="-top-4 mx-auto w-11/12 bg-blue-500 text-white text-center py-3 rounded-t-lg">
        <h2 className='font-bold'>भारतीय ज्योतिष संस्थानम.</h2>
      </div>
      <div className="relative h-80 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-full h-full flex items-center justify-center p-4">
              <p className="text-center text-black font-semibold">{slide.content}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

// Cards Component
const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center bg-gray-100 justify-center space-y-4 md:space-y-0 md:space-x-4 p-4">
      <Slider />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="-top-4 mx-auto w-11/12 bg-blue-500 font-bold text-white text-center py-3 rounded-t-lg">
          <h2>भारतीय ज्योतिष संस्थानम विश्वविद्यालय की स्थापना</h2>
        </div>
        <div className="p-4 text-black h-80 overflow-y-auto">
          <ul className="list-disc list-inside">
            <li className="border-b hover:text-blue-500 "><a title="" target="_blank" href="#">संस्कृत विद्या धर्म विज्ञान संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">कला संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">सामाजिक विज्ञान संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">संगीत एवं मंच कला संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="r" target="_blank" href="#">विज्ञान संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">वाणिज्य संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">विधि संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="r" target="_blank" href="#">चिकित्सा संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="r" target="_blank" href="#">प्रबन्ध संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">प्रौद्योगिकी संकाय</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">साइबर लाइब्रेरी की स्थापना</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">व्यायामशाला एवं क्रीड़ाक्षेत्र की स्थापना</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">छात्रावासों की स्थापना</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">भोजनालय की स्थापना</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">मंदिर एवं ध्यान कक्ष की स्थापना</a></li>
            <li className="border-b hover:text-blue-500"><a title="" target="_blank" href="#">चिकित्सालय की स्थापना</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="-top-4 mx-auto w-11/12 bg-blue-500 text-white text-center font-bold py-3 rounded-t-lg">
          <h2>Advertisement</h2>
        </div>
        <div className="p-4 text-black h-80 overflow-y-auto">
          <ul className="list-disc list-inside">
          <li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    1 - B J S एकेडमी- सर्वप्रथम कक्षा 1 से 12 तक के एक विद्यालय की स्थापना की जाएगी। इस विद्यालय में प्राच्य एवं पाश्चात्य सभी विद्याओं की शिक्षा दी जाएगी। निर्धन छात्रों के लिये छात्रवृत्ति का प्रावधान भी किया जाएगा।
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    2 - विभिन्न संकायों की स्थापना- स्नातक एवं परास्नातक की शिक्षा के लिये निम्नलिखित संकायों की स्थापना की जाएगी-
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    3 - पुस्तकालय- विश्वविद्यालय परिसर में एक वृहद पुस्तकालय का निर्माण किया जाएगा।
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    4 - संग्रहालय- विश्वविद्यालय परिसर में एक ऐसे संग्रहालय की स्थापना की जाएगी जहाँ मिर्जापुर के इतिहास से सम्बंधित वस्तुएँ विशेष रूप से रखी जाएंगी।
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    5 - वेधशाला की स्थापना
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    6 - विश्वनाथ आश्रम की स्थापना-
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    हमारा विश्वास है कि विश्वनाथ के देश में कोई अनाथ नहीं है। अतः अनाथ, वृद्ध, विधवाओं एवं दिव्यांगों के लिये विश्वनाथ आश्रम की स्थापना की जाएगी। इन अशक्त लोगों के लिये भोजनादि की निःशुल्क व्यवस्था की जाएगी।
  </a>
</li>
<li className="border-b hover:text-blue-500">
  <a target="_blank" href="">
    दिव्यांग बच्चों की चिकित्सा तथा पालन-पोषण के लिये भी निःशुल्क व्यवस्था की जाएगी।
  </a>
</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
