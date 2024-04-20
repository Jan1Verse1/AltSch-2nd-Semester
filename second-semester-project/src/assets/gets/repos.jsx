import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/pagination";
import RepoCard from "../components/repoCard";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const repoSize = 12;

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/Jan1Verse1/repos`
        );
        setRepos(response.data);
        console.log("Repos:", response.data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchGitHubRepos();
  }, []);

  const renderRepoCards = () => {
    const startIndex = (currentPage - 1) * repoSize;
    const endIndex = startIndex + repoSize;
    const currentRepos = repos.slice(startIndex, endIndex);

    return currentRepos.map((repo) => (
      <RepoCard
        key={repo.id}
        name={repo.name}
        visibility={repo.visibility}
        updatedAt={repo.updated_at}
        htmlUrl={repo.html_url}
      />
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-10 max-w-6xl flex-col justify-between items-center">
      <h3 className="text-2xl font-semibold mb-4">My Repositories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {renderRepoCards()}
      </div>
      <div className="flex justify-end mt-6 ">
        <Pagination
          currentPage={currentPage}
          totalCount={repos.length}
          pageSize={repoSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Repos;
