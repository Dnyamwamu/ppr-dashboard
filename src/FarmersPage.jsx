import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faUsers,
  faEllipsisV,
  faSearch,
  faEye,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import TopMenu from "./components/TopMenu";

const farmersData = [
  {
    name: "Albert Daniel",
    phone: "0712 345 678",
    county: "Narok",
    subCounty: "Narok North",
    ward: "Ntulele",
  },
  {
    name: "Dennis Nyamwamu",
    phone: "0700 000000",
    county: "Kajiado",
    subCounty: "Kitengela",
    ward: "Kabati",
  },
  {
    name: "Ronald Richards",
    phone: "0700 000000",
    county: "Baringo",
    subCounty: "Tenges",
    ward: "Ambale",
  },
  {
    name: "Marvin McKinney",
    phone: "0700 000000",
    county: "Kilifi",
    subCounty: "Ganze",
    ward: "Chonyi",
  },
  {
    name: "Pammy Kirimi",
    phone: "0700 000000",
    county: "West Pokot",
    subCounty: "Tenges",
    ward: "Westi",
  },
  {
    name: "Kathryn Murphy",
    phone: "0700 000000",
    county: "Uasin Gishu",
    subCounty: "Eldoret",
    ward: "Tao",
  },
  {
    name: "Kevin Mwangi",
    phone: "0700 000000",
    county: "Kiambu",
    subCounty: "Limuru",
    ward: "Banana",
  },
];

const FarmersPage = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedSubCounty, setSelectedSubCounty] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedActionIndex, setSelectedActionIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleActionClick = (index) => {
    if (selectedActionIndex === index) {
      setDropdownVisible(!dropdownVisible);
    } else {
      setSelectedActionIndex(index);
      setDropdownVisible(true);
    }
  };

  const filteredFarmers = farmersData.filter((farmer) =>
    Object.values(farmer).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <TopMenu role="Researcher" />
      <hr className="pb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 shadow rounded flex items-center space-x-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-4xl text-gray-600"
              />
            </div>
          </div>
          <div>
            <h2 className="text-gray-600">Total Farmers</h2>
            <p className="text-2xl font-bold">3,605,423</p>
            <div className="flex space-x-4">
              <p className="text-sm text-gray-500">Male: 2,356,786</p>
              <p className="text-sm text-gray-500">Female: 1,356,937</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 shadow rounded mb-4">
          <div className="flex space-x-4">
            <select
              className="bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded"
              onChange={(e) => setSelectedCounty(e.target.value)}
              value={selectedCounty}
            >
              <option>Select County</option>
              {/* Add options here */}
            </select>
            <select
              className="bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded"
              onChange={(e) => setSelectedSubCounty(e.target.value)}
              value={selectedSubCounty}
            >
              <option>Select Sub County</option>
              {/* Add options here */}
            </select>
            <select
              className="bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded"
              onChange={(e) => setSelectedWard(e.target.value)}
              value={selectedWard}
            >
              <option>Select Ward</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="bg-gray-50 p-4 rounded flex space-x-4">
            <p>Selected County: {selectedCounty || "None"}</p>
            <p>Selected Sub County: {selectedSubCounty || "None"}</p>
            <p>Selected Ward: {selectedWard || "None"}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-600">All Farmers</h2>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="w-64 border-gray-300 border-2 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute top-2 left-3">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
            </div>
            <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Search
            </button>
            <button className="ml-4 py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              <FontAwesomeIcon icon={faFileExport} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Farmer Name</th>
                <th className="py-2 px-4 border-b text-left">Phone Number</th>
                <th className="py-2 px-4 border-b text-left">County</th>
                <th className="py-2 px-4 border-b text-left">Sub County</th>
                <th className="py-2 px-4 border-b text-left">Ward</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFarmers.map((farmer, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{farmer.name}</td>
                  <td className="py-2 px-4 border-b">{farmer.phone}</td>
                  <td className="py-2 px-4 border-b">{farmer.county}</td>
                  <td className="py-2 px-4 border-b">{farmer.subCounty}</td>
                  <td className="py-2 px-4 border-b">{farmer.ward}</td>
                  <td className="py-2 px-4 border-b relative">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleActionClick(index)}
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    {dropdownVisible && selectedActionIndex === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                        <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center">
                          <FontAwesomeIcon icon={faEye} className="mr-2" />
                          View
                        </button>
                        <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center">
                          <FontAwesomeIcon icon={faArchive} className="mr-2" />
                          Archive
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Showing data 1 to {filteredFarmers.length} of {farmersData.length}{" "}
            entries
          </p>
        </div>
      </div>
    </>
  );
};

export default FarmersPage;
