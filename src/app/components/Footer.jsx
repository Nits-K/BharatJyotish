const Footer = () => {
    return (
      <footer className="bg-black text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <h6 className="text-lg font-bold text-[#aa0001]">
                भारतीय ज्योतिष संस्थानम, भारत
              </h6>
              <h6 className="text-lg font-bold text-white">
                BhartiyaJyotishSansthanam.com
              </h6>
              <ul className="mt-4 space-y-2">
                <li>
                  <p>
                    <strong>Call us:</strong> +91 9140101718, +91 8840352193
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Corporate Email:</strong>{" "}
                    <a href="mailto:info@sssorg.in" className="text-red-500">
                      info@bhartiyajyotishsansthanam.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Support:</strong>{" "}
                    <a
                      href="mailto:bhartiyajyotishsansthanam@gmail.com"
                      className="text-red-500"
                    >
                      bhartiyajyotishsansthanam@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Technical Hotline:</strong>{" "}
                    <a
                      href="mailto:Tech@bhartiyajyotishsansthanam.com"
                      className="text-red-500"
                    >
                      Tech@bhartiyajyotishsansthanam.com
                    </a>
                  </p>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/bhartiyajyotishsansthanam"
                  title="Facebook"
                >
                  <img
                    src="assets/frontend/images/softtechno-facebook.png"
                    className="h-9"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/bhartiyajyotishsansthanam/"
                  title="Instagram"
                >
                  <img
                    src="assets/frontend/images/softtechno-instagram.png"
                    className="h-9"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@bhartiyajyotishsansthanamt9673"
                  title="YouTube"
                >
                  <img
                    src=""
                    className="h-9"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h6 className="text-lg font-bold">Quick Links</h6>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="about" className="hover:text-red-500">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="award-achievement" className="hover:text-red-500">
                      Award Achievement
                    </a>
                  </li>
                  <li>
                    <a href="social-work" className="hover:text-red-500">
                      All-Services
                    </a>
                  </li>
                  <li>
                    <a href="pages" className="hover:text-red-500">
                      Jyotish
                    </a>
                  </li>
                  <li>
                    <a href="mission-objective" className="hover:text-red-500">
                      President's Message
                    </a>
                  </li>
                  <li>
                    <a href="team" className="hover:text-red-500">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="blogs" className="hover:text-red-500">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="our-photos" className="hover:text-red-500">
                      Program Gallery
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="hover:text-red-500">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-bold">Address:</h6>
                <ul className="mt-4 space-y-2">
                  <li>
                    Regd. Address: L-13/11 Ganeshpuri, Nasirpur, Susuwahi,
                    Varanasi-221011, Uttar Pradesh, India
                  </li>
                  <li>Support: PAN India &amp; Across the world</li>
                  <li>
                    <a
                      href="donate"
                      className="bg-red-600 text-white py-2 px-4 mt-2 inline-block"
                    >
                      Donate Now
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-bold">Useful Links</h6>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="social/36" className="hover:text-red-500">
                      Yoga
                    </a>
                  </li>
                  <li>
                    <a href="page/32" className="hover:text-red-500">
                      E-Book-Library links
                    </a>
                  </li>
                  <li>
                    <a href="social/16" className="hover:text-red-500">
                      Online Classes
                    </a>
                  </li>
                  <li>
                    <a href="downloads" className="hover:text-red-500">
                      Downloads
                    </a>
                  </li>
                  <li>
                    <a
                      href="enquiry"
                      className="bg-red-600 text-white py-2 px-4 mt-2 inline-block"
                    >
                      Enquiry
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" text-center py-4 mt-8">
            <p>
              © 2024 Bhartiya Jyotish Sansthanam All Rights Reserved. | Designed
              By{" "}
              <a
                href="/"
                className="text-black hover:underline"
              >
                Nitin
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  