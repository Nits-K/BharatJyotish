"use client";
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const menuItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'About', hasDropdown: true, submenus: ['What we do', "President's Message", 'Our team', 'Award and Achievement'] },
    { name: 'Our Works', hasDropdown: true, submenus: ['Our courses', 'Yoga', 'Certificates'] },
    { name: 'Jyotish', hasDropdown: true ,submenus:["HastRekha",'Kundali','Janam Kundali']},
    { name: 'Program Gallery', hasDropdown: true },
    { name: 'Pages', hasDropdown: true, submenus: ['Registrations', 'Blog'] },
    { name: 'Pandit Ji', hasDropdown: false },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <img src="images/logo.jpg" className="w-14 h-14" alt="logo" />
        </div>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button
                className="px-3 py-2 flex items-center hover:text-red-500"
                onClick={() => item.hasDropdown && toggleDropdown(index)}
              >
                {item.name}
                {item.hasDropdown && <FaChevronDown className="ml-1" />}
              </button>
              {item.hasDropdown && dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg">
                  {item.submenus && item.submenus.map((submenu, subindex) => (
                    <a key={subindex} href="#" className="block px-4 py-2 hover:bg-gray-200">{submenu}</a>
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
      {isOpen && (
        <div className="md:hidden ml-4 bg-black text-white">
          <div className="space-y-4 p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="group relative">
                <button
                  className="w-full text-left flex items-center hover:text-red-500"
                  onClick={() => item.hasDropdown && toggleDropdown(index)}
                >
                  {item.name}
                  {item.hasDropdown && <FaChevronDown className="ml-1" />}
                </button>
                {item.hasDropdown && dropdownOpen === index && (
                  <div className="mt-2 bg-white text-black">
                    {item.submenus && item.submenus.map((submenu, subindex) => (
                      <a key={subindex} href="#" className="block px-4 py-2 hover:bg-gray-200">{submenu}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
