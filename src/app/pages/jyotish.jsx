import Image from 'next/image'; // Import Image component from Next.js for optimized images

const Jyotish = () => {
  return (
    <div className="bg-gray-100 py-16 px-5">
      <div className="container mx-auto py-md-3">
        <div className="text-center mx-auto">
          <h3 className="text-5xl hover:text-black text-red-500 font-bold mb-3">Jyotish </h3>
          <p className="mb-3 text-black">
            ज्योतिष एक विज्ञान है, जिसे ज्योतिष शास्त्र या ज्योतिष विज्ञान के
            नाम से जाना जाता है।
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          
          {/* Service Item 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <a href="page/23" className="flex items-center justify-center p-4">
              <div className="w-1/3">
                <Image
                  src="/images/karm-kand.png"
                  alt="karm kand"
                  width={120}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 px-4 ">
                <h4 className="text-xl text-red-700 font-bold mb-2">Karm Kaand</h4>
                <p className="text-lg text-red-500">Know About your Karm Kaand</p>
              </div>
            </a>
          </div>

          {/* Service Item 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <a href="page/23" className="flex items-center justify-center p-4">
              <div className="w-1/3">
                <Image
                  src="/images/rashifal.jpg"
                  alt="rashifal"
                  width={120}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 px-4 ">
                <h4 className="text-xl text-red-700 font-bold mb-2">Rashifal</h4>
                <p className="text-lg text-red-500">Know About your Rashifal</p>
              </div>
            </a>
          </div>

          {/* Service Item 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <a href="page/23" className="flex items-center justify-center p-4">
              <div className="w-1/3">
                <Image
                  src="/images/join.png"
                  alt="hast rekha"
                  width={120}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 px-4 ">
                <h4 className="text-xl text-red-700 font-bold mb-2">Join us</h4>
                <p className="text-lg text-red-500">Online</p>
              </div>
            </a>
          </div>

          {/* Service Item 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <a href="page/23" className="flex items-center justify-center p-4">
              <div className="w-1/3">
                <Image
                  src="/images/link.jpeg"
                  alt="hast rekha"
                  width={120}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 px-4 ">
                <h4 className="text-xl text-red-700 font-bold mb-2">E-book</h4>
                <p className="text-lg text-red-500">Library Links here</p>
              </div>
            </a>
          </div>

          {/* Service Item 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <a href="page/23" className="flex items-center justify-center p-4">
              <div className="w-1/3">
                <Image
                  src="/images/prashn-kundli.png"
                  alt="hast rekha"
                  width={120}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 px-4 ">
                <h4 className="text-xl text-red-700 font-bold mb-2">Prashn Kundli</h4>
                <p className="text-lg text-red-500">Know About your Prashn Kundali</p>
              </div>
            </a>
          </div>

          {/* Service Item 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <a href="page/23" className="flex items-center justify-center p-4">
              <div className="w-1/3">
                <Image
                  src="/images/hast_rekha.png"
                  alt="hast rekha"
                  width={120}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 px-4 ">
                <h4 className="text-xl text-red-700 font-bold mb-2">Hast Rekha</h4>
                <p className="text-lg text-red-500">Know About your Hand's Line</p>
              </div>
            </a>
          </div>

          {/* Repeat for other service items */}
        </div>
      </div>
    </div>
  );
};

export default Jyotish;
