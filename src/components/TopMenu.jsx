import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faBell,
  faEnvelope,
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// TopMenu Component
const TopMenu = ({ role }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-6 relative w-full">
        <h1 className="text-2xl font-bold">
          {role === "researcher" ? "Hello Researcher" : "Hello Admin"}
        </h1>
        <div className="flex items-center relative">
          <div className="flex items-center mr-4">
            <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-600 text-2xl"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="ml-2 text-sm hidden sm:block">{role}</div>
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hidden sm:flex items-center focus:outline-none"
            >
              <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            </button>
            <button
              onClick={toggleMenu}
              className="sm:hidden flex items-center focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-gray-600" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faBell} className="mr-2" />
                      Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signin"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full bg-white rounded-md shadow-lg z-10 sm:hidden">
          <ul className="py-1">
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faBell} className="mr-2" />
                Notifications
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Messages
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
      <hr className="border-gray-300 w-full mt-2" />
    </div>
  );
};

export default TopMenu;
