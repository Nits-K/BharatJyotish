
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <section className="py-4 px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between  items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/images/logo.jpg" alt="BJS Logo" className="h-16 rounded-full mr-4" />
            <h4 className="text-lg text-black font-semibold">
              <span>Welcome to The Bhartiya Jyotish Sansthanam</span>
              <br />
              <span>भारतीय ज्योतिष संस्थानम</span>
            </h4>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
