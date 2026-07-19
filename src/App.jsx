import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetalis from "./Pages/MovieDetalis";
import SeatLayout from "./Pages/SeatLayout";
import MyBooking from "./Pages/MyBooking";
import Favorite from "./Pages/Favorite";
import Footer from "./Component/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster/>
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetalis />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="my-booings" element={<MyBooking />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      
      
    </>
  );
}

export default App;
