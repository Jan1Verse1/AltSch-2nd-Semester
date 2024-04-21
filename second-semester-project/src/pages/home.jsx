import React, { useState } from "react";
import Header from "../components/header";
import Statement from "../components/statement";
import Repos from "../gets/repos";
import NewRepo from "../gets/newRepo";

const home = () => {
  return (
    <div>
      <Header />
      <Statement />
      <NewRepo />
      <Repos />
    </div>
  );
};

export default home;
