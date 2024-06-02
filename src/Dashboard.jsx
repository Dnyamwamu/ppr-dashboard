import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TopMenu from "./components/TopMenu";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStethoscope,
  faVirus,
  faChartBar,
  faMapMarkerAlt,
  faGlobe,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

// Mock Data for Charts
const chartOptions = {
  chart: {
    type: "column",
  },
  title: {
    text: "Cases from 1-12 Dec, 2024",
  },
  xAxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  yAxis: {
    min: 0,
    title: {
      text: "Cases",
    },
  },
  series: [
    {
      name: "Cases",
      data: [
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
    {
      name: "Confirmed PPR Cases",
      data: [
        42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,
      ],
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            enabled: false,
          },
          yAxis: {
            title: {
              text: "",
            },
          },
          subtitle: {
            text: "",
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
};

const Dashboard = () => {
  // Custom marker icon for Leaflet
  const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

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
            <h2 className="text-gray-600">No. of Veterinarians</h2>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded flex items-center">
          <div className="bg-orange-100 p-2 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-orange-600 text-2xl"
            />
          </div>
          <div>
            <h2 className="text-gray-600">Cases Reported</h2>
            <p className="text-2xl font-bold">605,423</p>
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
            <h2 className="text-gray-600">Confirmed PPR cases</h2>
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
            <h2 className="text-gray-600">Confirmed PPR Cases</h2>
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
            <h2 className="text-gray-600">Cases Reported</h2>
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

        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-gray-600">Cases Reported</h2>
          <p className="text-2xl font-bold">18,931,000</p>
          <p className="text-orange-500">All Counties</p>
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
                      { name: "Open", y: 60 },
                      { name: "Closed", y: 40 },
                    ],
                  },
                ],
              }}
              containerProps={{ style: { width: "100%", height: "100%" } }}
            />
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded">
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

      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-gray-600">PPR Cases Distribution Rate by County</h2>
        <p className="text-2xl font-bold">18,931,000</p>
        <p className="text-orange-500">+2.1% PPR Cases increase rate</p>
        <div className="h-72">
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            containerProps={{ style: { width: "100%", height: "100%" } }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-gray-600">PPR Spread</h2>
          <div className="h-72">
            <MapContainer
              center={[-1.286389, 36.817223]}
              zoom={6}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[-1.286389, 36.817223]} icon={icon}>
                <Popup>Nairobi</Popup>
              </Marker>
              <Marker position={[-0.091702, 34.768536]} icon={icon}>
                <Popup>Kisumu</Popup>
              </Marker>
              <Marker position={[-4.043477, 39.668206]} icon={icon}>
                <Popup>Mombasa</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded text-center">
            <div className="bg-orange-100 p-2 rounded-full mb-2 inline-block">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-orange-600 text-2xl"
              />
            </div>
            <h2 className="text-gray-600">37</h2>
            <p className="text-gray-600">Counties</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <div className="bg-orange-100 p-2 rounded-full mb-2 inline-block">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-orange-600 text-2xl"
              />
            </div>
            <h2 className="text-gray-600">237</h2>
            <p className="text-gray-600">Sub Counties</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <div className="bg-orange-100 p-2 rounded-full mb-2 inline-block">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-orange-600 text-2xl"
              />
            </div>
            <h2 className="text-gray-600">1237</h2>
            <p className="text-gray-600">Wards</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
