import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ArchiveModal = ({ isOpen, onClose, farmer, onArchive }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Archive Farmer</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mb-4">
          <p>Are you sure you want to archive the following farmer?</p>
          <p>
            <strong>Name:</strong> {farmer.name}
          </p>
          <p>
            <strong>Phone:</strong> {farmer.phone}
          </p>
          <p>
            <strong>County:</strong> {farmer.county}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onArchive}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchiveModal;
