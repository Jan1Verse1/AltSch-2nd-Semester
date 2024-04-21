import React from "react";

const NewRepoTable = ({ repos, onDeleteRepo }) => {
  const handleDelete = (id) => {
    onDeleteRepo(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Language
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td className="px-6 py-4 whitespace-nowrap">{repo.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{repo.language}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(repo.id)}
                  className="text-red-600 hover:text-red-900 border-2 p-1 border-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewRepoTable;
