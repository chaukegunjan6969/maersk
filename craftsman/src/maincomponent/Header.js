import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const getBackgroundColor = (item) => {
    return activeItem === item ? "bg-black" : "bg-transparent";
  };

  const getTextColor = (item) => {
    return activeItem === item ? "text-white" : "text-white";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar-default");
      const offset = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar-default"
      className="text-white bg-slate-800 dark:text-white border-gray-200 p-4"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dpok16gsr/image/upload/v1718360548/scissors_yr6srv.png"
            className="mr-3 h-10 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl sm:text-3xl font-semibold whitespace-nowrap dark:text-white">
            HindustanCrafts.com
          </span>
        </Link>

        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0">
            <li
              style={{
                backgroundColor: getBackgroundColor("home"),
                color: getTextColor("home"),
              }}
              onClick={() => handleItemClick("home")}
              className="rounded p-2"
            >
              <NavLink to="/" className="block md:inline">
                Home
              </NavLink>
            </li>

            <li
              style={{
                backgroundColor: getBackgroundColor("contact"),
                color: getTextColor("contact"),
              }}
              onClick={() => handleItemClick("contact")}
              className="rounded p-2"
            >
              <NavLink to="/contact" className="block md:inline">
                Contact
              </NavLink>
            </li>

            <li
              style={{
                backgroundColor: getBackgroundColor("product"),
                color: getTextColor("product"),
              }}
              onClick={() => handleItemClick("product")}
              className="rounded p-2"
            >
              <NavLink to="/product" className="block md:inline">
                Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
