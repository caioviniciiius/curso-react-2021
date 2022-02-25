import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import CadastroProduto from "./views/produtos/cadastro";

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro-produtos" element={<CadastroProduto />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
