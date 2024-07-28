import React from "react";

const Donation = () => {
  return (
    <section className="flex flex-col bg-white items-center py-10 px-4" id="donation">
      <h2 className="text-4xl text-orange-500 font-bold mb-8">Donation</h2>
      <p className="text-lg text-black mb-6 text-center font-medium max-w-2xl">भारतीय ज्योतिष संस्थानम को दान देने पर आपका धन्यवाद। आपका समर्थन हमें ज्योतिष शास्त्र की समृद्ध धरोहर को बढ़ावा देने और संरक्षित करने और समुदाय को शैक्षिक सेवाएं प्रदान करने के हमारे मिशन में मदद करता है।
      </p>
      <div className="w-full max-w-xl bg-gray-100 p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Full Name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="amount"
            >
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Donation Amount"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Donation;
