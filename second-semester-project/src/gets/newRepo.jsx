import React, { useState } from "react";
import MyModal from "../components/modals/MyModal";
import NewRepoTable from "../components/NewRepoTable";

const NewRepoPage = () => {
  const [reposData, setReposData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddNewRepo = (newRepo) => {
    setReposData([...reposData, newRepo]);
    closeModal();
  };

  const handleDeleteRepo = (id) => {
    setReposData(reposData.filter((repo) => repo.id !== id));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex-col p-8">
      <h2 className="text-xl font-semibold mb-4">Newly Created Repos</h2>
      <NewRepoTable repos={reposData} onDeleteRepo={handleDeleteRepo} />
      {showModal && (
        <MyModal onClose={closeModal} onAddNewRepo={handleAddNewRepo} />
      )}
      <button
        onClick={openModal}
        className="btn-primary mt-4 underline text-sky-600"
      >
        Create New Repository
      </button>
    </div>
  );
};

export default NewRepoPage;
