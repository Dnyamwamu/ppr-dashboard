import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-poppins">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-2/5 p-6 bg-white">
        <div className="max-w-md w-full">
          <div className="mb-8 text-center">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Logo Placeholder"
                className="mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold">PPR-G</h1>
            <p className="text-gray-600 mt-2">
              Eradicating PPR Goat disease. Designed to empower farmers and
              veterinarians in the fight against PPR (Peste des Petits
              Ruminants) disease among goats and sheep.
            </p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-orange-600 hover:bg-orange-200 hover:text-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
              >
                Sign In
              </button>
              <Link
                to="/"
                className="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-600 text-sm mt-14">
            Developed by Kenya Agricultural & Livestock Research Organization.
            Call 0729686414 for help!
          </p>
          <div className="flex justify-center items-center mt-8 space-x-6">
            <img src="Kalro.png" alt="Initiator Logo 1" className="w-22 h-20" />
            <img
              src="Kenya Emblem.png"
              alt="Initiator Logo 2"
              className="w-26 h-24"
            />
            <img
              src="World Bank.png"
              alt="Initiator Logo 3"
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-3/5 bg-gray-300">
        <img
          src="somali-goats.jpg"
          alt="Full Page Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
