"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "आचार्य अम्बिकेश दुबे",
    title: "अखिल भारतीय राष्ट्रीय अध्यक्ष",
    image: "/images/team1.jpg",
    city: "Varanasi",
    state: "Uttar Pradesh",
    qualification: "Ph.D. in Astrology",
  },
  {
    name: "आचार्य धनञ्जय शर्मा जी",
    title: "अखिल भारतीय राष्ट्रीय महासचिव",
    image: "/images/team2.jpg",
    city: "Kanpur",
    state: "Uttar Pradesh",
    qualification: "Ph.D. in Astrology",
  },
  {
    name: "आचार्य धीरज दूबे जी",
    title: "अखिल भारतीय राष्ट्रीय संगठन प्रमुख",
    image: "/images/team3.png",
    city: "Jaipur",
    state: "Rajasthan",
    qualification: "Ph.D. in Astrology",
  },
  {
    name: "श्री श्रीकुमार मिश्र (आचारी जी)",
    title: "अखिल भारतीय राष्ट्रीय शिक्षा प्रमुख",
    image: "/images/team4.jpg",
    city: "Patna",
    state: "Bihar",
    qualification: "Ph.D. in Astrology",
  },
  {
    name: "पं श्रवण कुमार मिश्रा (पवन मिश्रा)",
    title: "अखिल भारतीय राष्ट्रीय सम्पर्क प्रमुख",
    image: "/images/team5.jpg",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    qualification: "Ph.D. in Astrology",
  },
  {
    name: "आचार्य दीनदयाल शुक्ला जी",
    title: "सहकार्यक्रम प्रमुख एवं शिक्षा प्रमुख उत्तर प्रदेश",
    image: "/images/team6.jpg",
    city: "Jamshedpur",
    state: "Jharkhand",
    qualification: "Ph.D. in Astrology",
  },
];

const teachers = () => {
  return (
    <>
      <section id="team" className="py-12 px-8 bg-gray-100 text-center ">
        <div className="container mx-auto">
          <h1 className="text-5xl text-black hover:text-orange-500 font-bold mb-8">Our Teachers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-blue-200  rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105"
              >
                <img
                  className="w-full h-80 object-contain p-2"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h5 className="text-xl text-gray-600 font-semibold mb-2">
                    {member.name}
                  </h5>
                  <h6 className="text-gray-600 mb-4">{member.title}</h6>
                  <p className="text-gray-500 mb-2">
                    {member.city}, {member.state}
                  </p>
                  <p className="text-gray-500 mb-4">{member.qualification}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-800">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default teachers;
