import React from "react";

const Course = () => {
  return (
    <section className="flex flex-col items-center py-10 px-10 bg-gray-100" id="courses">
      <h2 className="text-4xl text-orange-500 font-bold mb-8">Our Courses</h2>
      <div className="w-full max-w-4xl">
        {/* <h2 className="text-3xl font-semibold mb-6">Jyotish Gyaan</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
          <article className="bg-blue-200 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <img src="/images/course1.jpg" alt="Course Image 1" />
            <div className="p-6">
              <h3 className="text-xl text-black  font-semibold mb-4">Jyotish Fundamentals</h3>
              <p className="text-gray-700 mb-4">An introductory course covering the basics of Vedic astrology.</p>
            </div>
          </article>
          <article className="bg-blue-200 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <img src="/images/course2.jpg" alt="Course Image 2" />
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-4">Advanced Horoscope Analysis</h3>
              <p className="text-gray-700 mb-4">Dive deep into horoscope analysis techniques and predictions.</p>
            </div>
          </article>
          <article className="bg-blue-200 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <img src="/images/course3.jpg" alt="Course Image 3" />
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-4">Astrological Remedies</h3>
              <p className="text-gray-700 mb-4">Learn about various remedies used in astrology to mitigate negative influences.</p>
            </div>
          </article>
          <article className="bg-blue-200 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <img src="/images/course4.jpg" alt="Course Image 4" />
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-4">Numerology</h3>
              <p className="text-gray-700 mb-4">Understand the significance of numbers and their influence on human life.</p>
            </div>
          </article>
          <article className="bg-blue-200 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <img src="/images/course5.jpg" alt="Course Image 5" />
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-4">Palmistry</h3>
              <p className="text-gray-700 mb-4">Explore the ancient art of palmistry and its practical applications.</p>
            </div>
          </article>
          <article className="bg-blue-200 shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <img src="/images/course6.jpg" alt="Course Image 6" />
            <div className="p-6">
              <h3 className="text-xl text-black font-semibold mb-4">Vastu Shastra</h3>
              <p className="text-gray-700 mb-4">Learn the principles of Vastu Shastra for designing harmonious living spaces.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Course;
