import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../component/auth/Login";
import Register from "../component/auth/Register";
import Accueil from "../component/auth/pages/Accueil";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/accueil" element={<Accueil />} />
    </Routes>
  );
}
export default Pages;
