import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Repo = () => {
  const [repo, setRepo] = useState();
  let location = useLocation();
  let data = location.pathname.slice(7);
  useEffect(() => {
    fetch(`https://api.github.com/repos/Jan1Verse1/${data}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("GitHub API response:", res); // Log for debugging
        setRepo(res);
      })
      .catch((err) => console.error("Error", err));
  }, [data]);
  console.log(repo);
  console.log(data);

  return (
    <div className="p-10 ">
      <Link
        to="/"
        className="md:ml-8 card-btn rounded-sm p-2 text-white bg-blue-300 "
      >
        Go back
      </Link>
      {repo ? (
        <div className="md:flex rounded-xl p-8">
          <div>
            <img
              src={`${repo.owner.avatar_url}`}
              className="md:w-80 md:h-auto md:rounded-none rounded-full mx-auto"
              alt=""
            />
          </div>

          <div className=" md:p-8 md:h-58  text-left space-y-1">
            <h1 className="text-4xl font-bold">{repo.name}</h1>
            <p>Description: {repo.description}</p>
            <p>Name of Repository: {repo.full_name}</p>
            <p>Visibility: {repo.visibility}</p>
            <p>Language used: {repo.language}</p>
            <p>Default Branch: {repo.default_branch}</p>
            <p>Date Created: {repo.created_at}</p>
            <p>Open Issues: {repo.open_issues}</p>

            <div className="mt-10 flex flex-col md:flex-row">
              <button className="rounded-sm p-2 text-white hover:bg-blue-800 bg-blue-300">
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  Project Live link
                </a>
              </button>

              <button className="rounded-sm mt-6 md:mt-0 p-2 text-white hover:bg-blue-800 bg-blue-300 md:mx-7">
                <a href={repo.git_url} target="_blank" rel="noreferrer">
                  Repository Link{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Repo;

// md:mx-7
