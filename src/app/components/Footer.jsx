// components/Footer.js
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10 px-8">
      <div className="container mx-auto">
        <div className="footer-cta py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="single-cta flex items-start">
              <FaMapMarkerAlt className="text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold">Find us</h4>
                <span>L-13/11 Ganeshpuri, Nasirpur, Susuwahi, Varanasi-221011, Uttar Pradesh, India</span>
              </div>
            </div>
            <div className="single-cta flex items-start">
              <FaPhone className="text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold">Call us</h4>
                <span>+91 9140101718, +91 8840352193</span>
              </div>
            </div>
            <div className="single-cta flex items-start">
              <FaEnvelopeOpen className="text-2xl mr-4" />
              <div>
                <h4 className="text-xl font-semibold">Mail us</h4>
                <span>info@bhartiyajyotishsansthanam.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="footer-logo mb-4">
                <a href="index.html">
                  <img src="/images/logo.jpg" className="h-12 rounded-full" alt="logo" />
                </a>
              </div>
              <p>
                इस सस्था के माध्यम से देश सेवा, धर्म एवं समाज सेवा का कार्य किया जाता है । 
                इस संस्थान को कार्य करने के लिए सम्पूर्ण भारत वर्ष में धर्म का प्रचार , शिक्षा में सुधार एवं शिक्षा को बढ़ावा , भारतीय संस्कृति एवं संस्कारो के बचाव एवं उत्थान हेतु सहयोग दें | आइये हम सभी भारत वासी मिलकर हाथ में धर्म , ज्ञान और एकता का मशाल लिए साथ चले| भारत को विकसित देश बनायें | सनातन धर्म को जागृत रखें |.
              </p>
              <div className="footer-social-icon mt-4">
                <span className="block mb-2">Follow us</span>
                <div className="flex space-x-2">
                  <a href="#" className="bg-blue-600 p-2 rounded-full">
                    <FaFacebookF className='text-white' />
                  </a>
                  <a href="#" className="bg-blue-400 p-2 rounded-full">
                    <FaTwitter className='text-white' />
                  </a>
                  <a href="#" className="bg-red-600 p-2 rounded-full">
                    <FaGooglePlusG className='text-white'/>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">About us</a></li>
                <li><a href="#" className="hover:text-blue-400">Our Services</a></li>
                <li><a href="#" className="hover:text-blue-400">What we do</a></li>
                <li><a href="#" className="hover:text-blue-400">Pandit ji</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Subscribe</h3>
              <p className="mb-4">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" className="p-2 border-2  rounded w-full mb-2" />
                  <button className="p-2 bg-blue-600 rounded-full w-full flex justify-center items-center">
                    <FaTelegramPlane className='text-white'/>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-3 py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-2 md:mb-0">© 2024 All Right Reserved</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
            <li><a href="#" className="hover:text-blue-400">Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
