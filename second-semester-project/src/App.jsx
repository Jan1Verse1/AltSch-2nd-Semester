import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "../src/pages/notFound";
import FallBack from "../src/pages/fallBack";
// import Repo from "./gets/repo";

import Home from "../src/pages/home";

const App = () => {
  const handleError = (error, info) => {
    // Handle errors here
    console.error("Error:", error);
    console.error("Error info:", info);
  };

  return (
    <ErrorBoundary FallbackComponent={FallBack} onError={handleError}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/repos/:name" element={<Repo />} /> */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>{" "}
    </ErrorBoundary>
  );
};

export default App;
