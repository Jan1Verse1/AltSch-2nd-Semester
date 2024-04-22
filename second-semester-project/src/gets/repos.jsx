import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/pagination";
import RepoCard from "../components/repoCard";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const repoSize = 12;
  const GITHUB_TOKEN = import.meta.env.GITHUB_PERSONAL_TOKEN;

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer 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
            `,
          },
        };

        const response = await axios.get(
          `https://api.github.com/users/Jan1Verse1/repos`,
          config
        );
        setRepos(response.data);
        console.log("Repos:", response.data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchGitHubRepos();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterLanguage(e.target.value);
  };

  const filteredRepos = repos
    .filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((repo) =>
      filterLanguage ? repo.language === filterLanguage : true
    );

  const renderRepoCards = () => {
    const startIndex = (currentPage - 1) * repoSize;
    const endIndex = startIndex + repoSize;
    const currentRepos = searchQuery || filterLanguage ? filteredRepos : repos;
    const slicedRepos = currentRepos.slice(startIndex, endIndex);

    return slicedRepos.map((repo) => (
      <RepoCard
        key={repo.id}
        name={repo.name}
        visibility={repo.visibility}
        language={repo.language}
        updatedAt={repo.updated_at}
        htmlUrl={repo.html_url}
      />
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="width-auto p-10 max-w-6xl flex-col justify-between items-center">
      <h3 className="text-xl font-semibold mb-4">My Repositories</h3>
      <div className="mb-4 justify-end mt-6  sm:flex-col">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md mr-2"
        />
        <select
          value={filterLanguage}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="Shell">Shell</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {renderRepoCards()}
      </div>
      <div className="flex justify-end mt-6">
        <Pagination
          currentPage={currentPage}
          totalCount={
            searchQuery || filterLanguage ? filteredRepos.length : repos.length
          }
          pageSize={repoSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Repos;
