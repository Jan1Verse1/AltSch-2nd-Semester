import React, { useState, useEffect } from "react";
import axios from "axios";

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Jan1Verse1/repos?page=2"
        );
        setRepos(response.data);
        console.log("Repos:", response.data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchGitHubRepos();
  }, []);

  return <div className="bg-cyan-900">{/* Your navigation component */}</div>;
};

export default Repos;
