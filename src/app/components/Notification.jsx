// components/Notification.js
"use client"

const Notification = () => {
  const message = "यह संस्था धर्मोत्थान, धार्मिक एवं सामाजिक सेवा कार्य हेतु सर्वदा तत्पर है । इस सस्था के माध्यम से देश सेवा, धर्म एवं समाज सेवा का कार्य किया जाता है । इस संस्थान को कार्य करने के लिए सम्पूर्ण भारत वर्ष में धर्म का प्रचार , शिक्षा में सुधार एवं शिक्षा को बढ़ावा , भारतीय संस्कृति एवं संस्कारो के बचाव एवं उत्थान हेतु सहयोग दें |आइये हम सभी भारत वासी मिलकर हाथ में धर्म , ज्ञान और एकता का मशाल लिए साथ चले| भारत को विकसित देश बनायें | सनातन धर्म को जागृत रखें|";

  return (
    <div className="flex flex-col md:flex-row items-center h-16 md:h-12 bg-orange-500 shadow-lg">
      <div className="w-full md:w-1/6 text-center md:text-right pr-4 p-2 bg-blue-500 text-white rounded-b-md md:rounded-b-none md:rounded-e-full">
        Notifications
      </div>
      <div className="w-full md:w-5/6 pl-5 overflow-hidden text-wrap">
        <div
          className="marquee whitespace-nowrap"
          
          onMouseOver={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseOut={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          <ul className="list-none">
            <li>
              <a
                title="Notification Message"
                target="_blank"
                
                href="#"
                className="hover:underline"
              >
                {message}
              </a>
            </li>
          </ul>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Notification;
