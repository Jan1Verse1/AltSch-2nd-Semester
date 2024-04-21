import React from "react";
import "./repocard.css";

const RepoCard = ({ name, visibility, updatedAt, language, htmlUrl }) => {
  return (
    <div className="card">
      <h1 className="repoName">{name}</h1>
      <div className="flex justify-between ">
        <h4 className="mb-5 h-10 w-max px-6 font-semibold rounded-full justify-center place-content-center bg-green-100 border-slate-00 text-slate-900">
          {visibility}
        </h4>
        <h4 className="mb-5 h-10 w-max px-6 font-semibold rounded-full justify-center place-content-center bg-cyan-700  text-cyan-300">
          {language}
        </h4>
      </div>

      <p className="date">
        Last Updated: {new Date(updatedAt).toLocaleDateString()}
      </p>
      <div className="mt-10">
        <a
          className="t-[200px] hover:cursor-pointer rounded-xl   bg-cyan-900   p-2 text-white   text-base"
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          See More
        </a>
      </div>
    </div>
  );
};
export default RepoCard;
