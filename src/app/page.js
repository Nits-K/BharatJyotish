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
      <div className="flex px-4  flex-col md:flex-row items-center py-16 m-4">
        <div className="md:w-1/2 order-last md:order-first text-center md:text-left">
          <h6 className="text-red-700 text-3xl hover:text-gray-100 mt-12">भारतीय ज्योतिष संस्थानम</h6>
          
          <p className="mt-4 mr-4 mb-5 text-wrap text-white">
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
      <section className="bg-gray-100 p-8">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 lg:mr-10">
            <h2 className="text-4xl lg:text-5xl text-red-500 font-bold mb-4">वेद दर्शन</h2>
            <p className="text-lg text-black mb-4">
              इस सस्था के माध्यम से देश सेवा, धर्म एवं समाज सेवा का कार्य किया जाता है। इस संस्थान को कार्य
              करने के लिए सम्पूर्ण भारत वर्ष में धर्म का प्रचार, शिक्षा में सुधार एवं शिक्षा को बढ़ावा, भारतीय संस्कृति
              एवं संस्कारो के बचाव एवं उत्थान हेतु सहयोग दें। आइये हम सभी भारत वासी मिलकर हाथ में धर्म, ज्ञान और
              एकता का मशाल लिए साथ चले। भारत को विकसित देश बनायें। सनातन धर्म को जागृत रखें।
            </p>
            <ul className="text-lg text-black mb-6">
              <li>
                <span className="font-bold">कार्य-</span> भारतीय ज्योतिष संस्थानम ट्रस्ट सनातन धर्म के उत्थान एवं रक्षा
                के लिये सतत प्रयत्नशील है। इसके लिये अब तक निम्नलिखित कार्य किये गए हैं:
              </li>
              <li>
                माँ विन्ध्यवासिनी जन्मोत्सव शोभायात्रा - जनश्रुति के अनुसार, मिर्जापुर में माँ विंध्यवासिनी का प्राकट्य
                कजली पर्व के दिन हुआ था। भारतीय ज्योतिष संस्थानम ट्रस्ट के द्वारा प्रतिवर्ष इस दिन भव्य शोभायात्रा
                निकाली जाती है। इस परंपरा का प्रारम्भ हमारे ट्रस्ट के द्वारा ही किया गया है। पिछले 3 वर्षों से कजली
                पर्व के दिन यह शोभायात्रा निकाली जाती है।
              </li>
              <li>
                श्रीमद्भागवत महापुराण अमृत कथा ज्ञानयज्ञ - भारतीय ज्योतिष संस्थानम ट्रस्ट के द्वारा पिछले 3 वर्षों से
                श्रीमद्भागवत पुराण कथा का आयोजन प्रतिवर्ष किया जा रहा है।
              </li>
              <li>
                शिव पुराण एवं रामकथा - भारतीय ज्योतिष संस्थानम ट्रस्ट द्वारा प्रतिवर्ष धार्मिक कार्यक्रमों का आयोजन
                किया जाता है। इसी क्रम में शिव पुराण कथा एवं रामकथा का आयोजन भी हो चुका है।
              </li>
              <li>
                श्री महालक्ष्मी महायज्ञ - मिर्जापुर के इतिहास में पहली बार विराट महालक्ष्मी महायज्ञ एवं भागवत कथा का
                आयोजन हुआ। इस यज्ञ का आयोजन मिर्जापुर तथा समस्त भारतवर्ष की आर्थिक उन्नति के उद्देश्य से किया गया।
                यज्ञ की समाप्ति पर विशाल भण्डारे का आयोजन भी किया गया। भारतीय ज्योतिष संस्थानम ट्रस्ट के सभी बड़े
                कार्यक्रमों में इसी भाँति भण्डारे का आयोजन किया जाता है।
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 lg:ml-10 mt-6 lg:mt-0">
            <img
              src="images/astrolger.png"
              className="rounded-lg shadow-lg mx-auto lg:mx-0"
              alt="Astrologer"
            />
          </div>
        </div>
      </div>
    </section>
     <Jyotish/>
      <Footer />
    </>
  );
}
