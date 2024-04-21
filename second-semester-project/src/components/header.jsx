import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [profileData, setProfileData] = useState(null);

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
        <a
          href="https://github.com/Jan1Verse1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg shadow hover:shadow-lg active:shadow-xl p-4 rounded-xl transition duration-150 ease-in-out cursor-pointer"
        >
          My Repositories
        </a>
      </nav>
    </div>
  );
};

export default Header;
