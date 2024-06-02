import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faUsers,
  faEllipsisV,
  faSearch,
  faEye,
  faArchive,
  faUser,
  faStethoscope,
  faVirus,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import TopMenu from "./components/TopMenu";
import ViewModal from "./components/ViewModal";
import ArchiveModal from "./components/ArchiveModal";

const farmersData = [
  {
    name: "Albert Daniel",
    gender: "Male",
    phone: "0712 345 678",
    county: "Narok",
    subCounty: "Narok North",
    ward: "Ntulele",
    goats: 50,
    sheep: 30,
    casesReported: 10,
    confirmedPPRCases: 5,
  },
  {
    name: "Dennis Nyamwamu",
    gender: "Male",
    phone: "0700 000000",
    county: "Kajiado",
    subCounty: "Kitengela",
    ward: "Kabati",
    goats: 40,
    sheep: 20,
    casesReported: 8,
    confirmedPPRCases: 4,
  },
  {
    name: "Ronald Richards",
    gender: "Male",
    phone: "0700 000000",
    county: "Baringo",
    subCounty: "Tenges",
    ward: "Ambale",
    goats: 60,
    sheep: 35,
    casesReported: 12,
    confirmedPPRCases: 6,
  },
  {
    name: "Marvin McKinney",
    gender: "Male",
    phone: "0700 000000",
    county: "Kilifi",
    subCounty: "Ganze",
    ward: "Chonyi",
    goats: 45,
    sheep: 25,
    casesReported: 9,
    confirmedPPRCases: 5,
  },
  {
    name: "Pammy Kirimi",
    gender: "Female",
    phone: "0700 000000",
    county: "West Pokot",
    subCounty: "Tenges",
    ward: "Westi",
    goats: 55,
    sheep: 28,
    casesReported: 11,
    confirmedPPRCases: 5,
  },
  {
    name: "Kathryn Murphy",
    gender: "Female",
    phone: "0700 000000",
    county: "Uasin Gishu",
    subCounty: "Eldoret",
    ward: "Tao",
    goats: 42,
    sheep: 22,
    casesReported: 7,
    confirmedPPRCases: 3,
  },
  {
    name: "Kevin Mwangi",
    gender: "Male",
    phone: "0700 000000",
    county: "Kiambu",
    subCounty: "Limuru",
    ward: "Banana",
    goats: 48,
    sheep: 26,
    casesReported: 10,
    confirmedPPRCases: 4,
  },
];

const FarmersPage = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedSubCounty, setSelectedSubCounty] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedActionIndex, setSelectedActionIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const handleActionClick = (index) => {
    if (selectedActionIndex === index) {
      setDropdownVisible(!dropdownVisible);
    } else {
      setSelectedActionIndex(index);
      setDropdownVisible(true);
    }
  };

  const handleActionSelect = (index, action) => {
    setSelectedFarmer(filteredFarmers[index]);
    if (action === "view") {
      setIsViewModalOpen(true);
    } else if (action === "archive") {
      setIsArchiveModalOpen(true);
    }
    setDropdownVisible(false);
  };

  const handleArchive = () => {
    console.log(`Archiving farmer: ${selectedFarmer.name}`);
    setIsArchiveModalOpen(false);
  };

  const filteredFarmers = farmersData.filter((farmer) =>
    Object.values(farmer).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <TopMenu role="Researcher" />
      <hr className="pb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded flex items-center">
          <div className="bg-orange-100 p-2 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-orange-600 text-2xl"
            />
          </div>
          <div>
            <h2 className="text-gray-600">Total Farmers</h2>
            <p className="text-2xl font-bold">3,605,423</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center">
          <div className="bg-orange-100 p-2 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="text-orange-600 text-2xl"
            />
          </div>
          <div>
            <h2 className="text-gray-600">No. of Cases Reported</h2>
            <p className="text-2xl font-bold">18,931</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center">
          <div className="bg-orange-100 p-2 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faVirus}
              className="text-orange-600 text-2xl"
            />
          </div>
          <div>
            <h2 className="text-gray-600">No. of Goats</h2>
            <p className="text-2xl font-bold">15,083</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center">
          <div className="bg-orange-100 p-2 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faChartBar}
              className="text-orange-600 text-2xl"
            />
          </div>
          <div>
            <h2 className="text-gray-600">No. of Sheeps</h2>
            <p className="text-2xl font-bold">18,931,000</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-gray-600">Farmers</h2>
          <p className="text-2xl font-bold">3,605,423</p>
          <p className="text-orange-500">Registered</p>
          <div className="h-48">
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {
                  type: "pie",
                },
                title: {
                  text: "",
                },
                series: [
                  {
                    data: [
                      { name: "Male", y: 50 },
                      { name: "Female", y: 30 },
                      { name: "Others", y: 20 },
                    ],
                  },
                ],
              }}
              containerProps={{ style: { width: "100%", height: "100%" } }}
            />
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded md:col-span-2">
          <h2 className="text-gray-600">No of Farmers by County</h2>
          <div className="h-48">
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {
                  type: "column",
                },
                title: {
                  text: "",
                },
                xAxis: {
                  categories: ["Kajiado", "Narok", "Baringo", "West", "Pokot"],
                },
                yAxis: {
                  min: 0,
                  title: {
                    text: "Farmers",
                  },
                },
                series: [
                  {
                    data: [50, 30, 40, 10, 20],
                  },
                ],
              }}
              containerProps={{ style: { width: "100%", height: "100%" } }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Filter by</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-2">
            <div className="bg-white p-6 shadow rounded mb-4">
              <div className="flex flex-col md:flex-row md:space-x-4 md:items-center">
                <select
                  className="flex-grow bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded mb-2 md:mb-0"
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  value={selectedCounty}
                >
                  <option>Select County</option>
                  {/* Add options here */}
                </select>
                <select
                  className="flex-grow bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded mb-2 md:mb-0"
                  onChange={(e) => setSelectedSubCounty(e.target.value)}
                  value={selectedSubCounty}
                >
                  <option>Select Sub County</option>
                  {/* Add options here */}
                </select>
                <select
                  className="flex-grow bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded"
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
                <th className="py-2 px-4 border-b text-left">Gender</th>
                <th className="py-2 px-4 border-b text-left">Phone Number</th>
                <th className="py-2 px-4 border-b text-left">County</th>
                <th className="py-2 px-4 border-b text-left">Sub County</th>
                <th className="py-2 px-4 border-b text-left">Ward</th>
                <th className="py-2 px-4 border-b text-left">No of Goats</th>
                <th className="py-2 px-4 border-b text-left">No of Sheep</th>
                <th className="py-2 px-4 border-b text-left">Cases Reported</th>
                <th className="py-2 px-4 border-b text-left">
                  Confirmed PPR Cases
                </th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFarmers.map((farmer, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{farmer.name}</td>
                  <td className="py-2 px-4 border-b">{farmer.gender}</td>
                  <td className="py-2 px-4 border-b">{farmer.phone}</td>
                  <td className="py-2 px-4 border-b">{farmer.county}</td>
                  <td className="py-2 px-4 border-b">{farmer.subCounty}</td>
                  <td className="py-2 px-4 border-b">{farmer.ward}</td>
                  <td className="py-2 px-4 border-b">{farmer.goats}</td>
                  <td className="py-2 px-4 border-b">{farmer.sheep}</td>
                  <td className="py-2 px-4 border-b">{farmer.casesReported}</td>
                  <td className="py-2 px-4 border-b">
                    {farmer.confirmedPPRCases}
                  </td>
                  <td className="py-2 px-4 border-b relative">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleActionClick(index)}
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    {dropdownVisible && selectedActionIndex === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <button
                          className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center"
                          onClick={() => handleActionSelect(index, "view")}
                        >
                          <FontAwesomeIcon icon={faEye} className="mr-2" />
                          View
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center"
                          onClick={() => handleActionSelect(index, "archive")}
                        >
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

      <ViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        farmer={selectedFarmer}
      />
      <ArchiveModal
        isOpen={isArchiveModalOpen}
        onClose={() => setIsArchiveModalOpen(false)}
        farmer={selectedFarmer}
        onArchive={handleArchive}
      />
    </>
  );
};

export default FarmersPage;
