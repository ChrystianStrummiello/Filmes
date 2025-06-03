import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./index.css";
import "swiper/css/bundle";
import "swiper/css/virtual";
import Perfil from "./pages/Perfil.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
