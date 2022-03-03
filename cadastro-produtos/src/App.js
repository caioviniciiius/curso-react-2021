import React from "react";
import Navbar from "./components/navbar";
import Rotas from "./rotas";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Rotas />
        </div>
      </Router>
    </>
  );
}

export default App;
