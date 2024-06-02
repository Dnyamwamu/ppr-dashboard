import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faUserMd,
  faBell,
  faBook,
  faUserCog,
  faSignOutAlt,
  faArrowRight,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({ isSidebarExpanded, toggleSidebar }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`bg-orange-600 text-white ${
        isSidebarExpanded ? "w-64" : "w-20 lg:w-64"
      } transition-all duration-300 space-y-6 py-7 px-2 relative`}
    >
      {/* Image Placeholder at the Top */}
      <div className="flex justify-center items-center px-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
      </div>

      <div className="flex justify-center items-center px-4 mt-4">
        <div className="text-3xl font-semibold">PPR-G</div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none lg:hidden"
        >
          <FontAwesomeIcon icon={faTachometerAlt} />
        </button>
      </div>

      <nav className="mt-10 space-y-2">
        <Link
          to="/"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Dashboard
          </span>
          {isActive("/") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <Link
          to="/farmers"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/farmers")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Farmers
          </span>
          {isActive("/farmers") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <Link
          to="/veterinarians"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/veterinarians")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faUserMd} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Veterinarians
          </span>
          {isActive("/veterinarians") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <Link
          to="/cases"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/cases")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faClinicMedical} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Cases
          </span>
          {isActive("/cases") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <Link
          to="/alerts"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/alerts")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Alerts
          </span>
          {isActive("/alerts") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <Link
          to="/learn"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/learn")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Learn
          </span>
          {isActive("/learn") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <Link
          to="/user-management"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/user-management")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faUserCog} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            User Management
          </span>
          {isActive("/user-management") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
      </nav>

      {/* Logout Link and Footer Text at the Bottom */}
      <div className="absolute bottom-4 w-full text-center px-4 space-y-2">
        <Link
          to="/signin"
          className={`flex items-center justify-center py-2.5 px-4 rounded transition duration-200 ${
            isActive("/logout")
              ? "bg-white text-orange-600"
              : "hover:bg-white hover:text-orange-600"
          }`}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          <span
            className={`${isSidebarExpanded ? "block" : "hidden"} lg:block`}
          >
            Logout
          </span>
          {isActive("/logout") && (
            <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
          )}
        </Link>
        <p className="text-sm">This app is developed by KALRO</p>
      </div>
    </div>
  );
};

export default SideMenu;
