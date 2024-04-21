import React from "react";
import Header from "../components/header";
import Statement from "../components/statement";
import Repos from "../gets/repos";

const home = () => {
  return (
    <div>
      <Header />
      <Statement />
      <Repos />
    </div>
  );
};

export default home;
