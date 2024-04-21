import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MyModal from "./modals/MyModal";

const Header = () => {
  const [profileData, setProfileData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Jan1Verse1"
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchGitHubProfile();
  }, []);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div className="bg-cyan-900">
      <nav className="p-4 flex justify-between items-center">
        <NavLink
          className=" flex row items-center shadow hover:shadow-lg active:shadow-xl p-4 rounded-xl transition duration-150 ease-in-out cursor-pointer"
          to="/"
        >
          {profileData && (
            <div>
              <img
                src={profileData.avatar_url}
                alt="My GitHub Avatar"
                className="h-12 w-12 rounded-full mr-2"
              />
            </div>
          )}
          <h4 className="text-white text-lg"> Jan1Verse1</h4>
        </NavLink>
        {/* <button
          onClick={openModal}
          className="text-white text-lg  duration-150 ease-in-out cursor-pointer"
        >
          Add A Repository
        </button> */}
      </nav>
      {showModal && <MyModal onClose={closeModal} />}
    </div>
  );
};

export default Header;
