"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jyotish from "./pages/jyotish";
export default function Home() {
  return (
    <>
      <Header />
      <img
        src="images/banner.jpg"
        className="max-h-screen w-full max-w-full object-cover mx-auto"
        alt="Banner"
      />
      <div className="flex flex-col md:flex-row items-center py-16 m-4">
        <div className="md:w-1/2 order-last md:order-first text-center md:text-left">
          <h6 className="text-red-700 text-3xl hover:text-gray-100 mt-12">भारतीय ज्योतिष संस्थानम</h6>
          
          <p className="mt-3 mb-5 text-wrap text-white">
            यह संस्था धर्मोत्थान, धार्मिक एवं सामाजिक सेवा कार्य हेतु सर्वदा
            तत्पर है ।. इस सस्था के माध्यम से देश सेवा, धर्म एवं समाज सेवा का
            कार्य किया जाता है । इस संस्थान को कार्य करने के लिए सम्पूर्ण भारत
            वर्ष में धर्म का प्रचार, शिक्षा में सुधार एवं शिक्षा को बढ़ावा,
            भारतीय संस्कृति एवं संस्कारो के बचाव एवं उत्थान हेतु सहयोग दें |
            आइये हम सभी भारत वासी मिलकर हाथ में धर्म, ज्ञान और एकता का मशाल लिए
            साथ चले| भारत को विकसित देश बनायें | सनातन धर्म को जागृत रखें|
          </p>
          <a
            href="/"
            className="btn btn-primary bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            View more..
          </a>
        </div>
        <div className="md:w-1/2 order-first md:order-last mt-5 md:mt-0 text-center">
          <div className="relative px-8 pb-12 border rounded-lg shadow-lg bg-white">
            
            <h3 className="text-2xl text-red-500 font-bold mt-12">Bhartiya Jyotish Sansthanam</h3>
            <table className="w-full mt-4">
              <thead>
                <tr className="bg-red-500 text-white">
                  <th className="py-2">Date</th>
                  <th className="py-2">BJS Notice Board</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-4 text-black">2023-01-02</td>
                  <td className="text-black border py-2 px-4">
                    Proin tincidunt, justo eget volutpat rhoncus, tortor tortor.
                  </td>
                </tr>
                <tr>
                  <td className="text-black border py-2 px-4">2023-01-01</td>
                  <td className="border text-black py-2 px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
            <div className="mt-4">
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
     <Jyotish/>
      <Footer />
    </>
  );
}
