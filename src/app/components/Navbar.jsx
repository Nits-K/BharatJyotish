"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const menuItems = [
    { name: "Home", hasDropdown: false, link: "/" },
    {
      name: "About us",
      hasDropdown: true,
      submenus: [
        { name: "What we do", link: "/about/what-we-do" },
        { name: "Our target", link: "/about/our-target" },
        { name: "Our team", link: "/about/our-team" }
      ],
    },
    {
      name: "Education",
      hasDropdown: true,
      submenus: [
        { name: "Our courses", link: "/education/our-courses" },
        { name: "Online Classes", link: "/education/online-classes" },
        { name: "Our teachers", link: "/education/our-teachers" },
        { name: "Our students", link: "/education/our-students" },
        { name: "E-book library", link: "/education/e-book-library" },
        { name: "Exam and results", link: "/education/exam-and-results" }
      ],
    },
    {
      name: "Our Services",
      hasDropdown: true,
      submenus: [
        { name: "HastRekha", link: "/services/hastrekha" },
        { name: "Kundali", link: "/services/kundali" },
        { name: "Janam Kundali", link: "/services/janamkundali" }
      ],
    },
    {
      name: "Pandit Ji",
      hasDropdown: true,
      submenus: [
        { name: "Our Astrologer", link: "/pandit/astrologer" }
      ],
    },
    { name: "Donation", hasDropdown: false, link: "/donation" },
  ];

  return (
    <header className="bg-orange-500 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button
                className="px-3 py-2 flex items-center hover:text-blue-500"
                onClick={() => item.hasDropdown && toggleDropdown(index)}
              >
                {item.hasDropdown ? (
                  <>
                    {item.name}
                    <FaChevronDown className="ml-1" />
                  </>
                ) : (
                  <Link href={item.link}>
                    <p>{item.name}</p>
                  </Link>
                )}
              </button>
              {item.hasDropdown && dropdownOpen === index && (
                <div className="absolute z-50 left-0 mt-2 w-48 bg-white text-black shadow-lg">
                  {item.submenus &&
                    item.submenus.map((submenu, subindex) => (
                      <Link key={subindex} href={submenu.link}>
                        <p className="block px-4 py-2 hover:bg-gray-200">
                          {submenu.name}
                        </p>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-400 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="space-y-4 p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button
                className="w-full text-left flex items-center hover:text-red-500"
                onClick={() => item.hasDropdown && toggleDropdown(index)}
              >
                {item.hasDropdown ? (
                  <>
                    {item.name}
                    <FaChevronDown className="ml-1" />
                  </>
                ) : (
                  <Link href={item.link}>
                    <p>{item.name}</p>
                  </Link>
                )}
              </button>
              {item.hasDropdown && dropdownOpen === index && (
                <div className="mt-2 bg-white text-black">
                  {item.submenus &&
                    item.submenus.map((submenu, subindex) => (
                      <Link key={subindex} href={submenu.link}>
                        <p className="block px-4 py-2 hover:bg-gray-200">
                          {submenu.name}
                        </p>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
