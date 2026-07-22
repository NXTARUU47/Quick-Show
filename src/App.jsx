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
import Layout from "./Pages/admin/Layout";
import Dashboard from "./Pages/admin/Dashboard";
import AddShows from "./Pages/admin/AddShows";
import ListBookings from "./Pages/admin/ListBookings";
import ListShows from "./Pages/admin/ListShows";

function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetalis />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path="Add-shows" element={<AddShows/>} />
         <Route path="list-bookings" element={<ListBookings />} />          <Route path="list-shows" element={<ListShows/>} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
