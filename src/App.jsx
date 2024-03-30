import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Pokemon from "./views/Pokemon"
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Pokemon />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;