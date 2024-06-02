import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ViewModal = ({ isOpen, onClose, farmer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Farmer Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mb-4">
          <p>
            <strong>Name:</strong> {farmer.name}
          </p>
          <p>
            <strong>Gender:</strong> {farmer.gender}
          </p>
          <p>
            <strong>Phone:</strong> {farmer.phone}
          </p>
          <p>
            <strong>County:</strong> {farmer.county}
          </p>
          <p>
            <strong>Sub County:</strong> {farmer.subCounty}
          </p>
          <p>
            <strong>Ward:</strong> {farmer.ward}
          </p>
          <p>
            <strong>No of Goats:</strong> {farmer.goats}
          </p>
          <p>
            <strong>No of Sheep:</strong> {farmer.sheep}
          </p>
          <p>
            <strong>No of Cases Reported:</strong> {farmer.casesReported}
          </p>
          <p>
            <strong>No of Confirmed PPR Cases:</strong>{" "}
            {farmer.confirmedPPRCases}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
