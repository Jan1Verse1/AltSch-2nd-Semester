// MyModal.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MyModal.css";

const MyModal = ({ onClose, onAddNewRepo }) => {
  const [repoName, setRepoName] = useState("");
  const [language, setLanguage] = useState("");

  const handleRepoNameChange = (event) => {
    setRepoName(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = () => {
    const newRepo = { id: Date.now(), name: repoName, language: language };
    onAddNewRepo(newRepo);
    onClose(); // Close the modal after submitting
    // Clear input fields
    setRepoName("");
    setLanguage("");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="modalX">
            <FontAwesomeIcon
              icon={faTimes}
              className="icon"
              onClick={onClose}
            />
          </div>
          <div className="modalheadertext">
            <h1 className="modalHeader1">Create New Repository</h1>
            <h4 className="modalHeader2">
              Kindly enter the required information
            </h4>
          </div>
          <div className="formGroup">
            <label htmlFor="repoName" className="text-gray-800 block mb-1">
              Repository Name:
            </label>
            <input
              type="text"
              id="repoName"
              value={repoName}
              onChange={handleRepoNameChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="language" className="text-gray-800 block mb-1">
              Language:
            </label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4"
          >
            Create Repository
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
