import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../Component/MovieCard";
import Loading from "../Component/Loading";

const FAVORITES_KEY = "favoriteMovies";

function getStoredFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function Favorite() {
  const [favoriteMovies, setFavoriteMovies] = useState(null);

  const loadFavorites = () => {
    const favoriteIds = getStoredFavorites();
    // Replace dummyShowsData with your real movies source (API/context)
    // once you have one — this just filters the same list MovieCard reads from.
    const matched = dummyShowsData.filter((movie) =>
      favoriteIds.includes(movie._id)
    );
    setFavoriteMovies(matched);
  };

  useEffect(() => {
    loadFavorites();

    // keep this page in sync if a favorite is toggled elsewhere
    window.addEventListener("favoritesUpdated", loadFavorites);
    return () =>
      window.removeEventListener("favoritesUpdated", loadFavorites);
  }, []);

  if (favoriteMovies === null) return <Loading />;

  return favoriteMovies.length > 0 ? (
    <div className="px-4 sm:px-6 md:px-10 lg:px-36 pt-24 sm:pt-28 pb-10 min-h-screen">
      <h1 className="text-lg sm:text-xl font-medium mb-6">My Favorites</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-xl sm:text-2xl font-medium">
        No favorite movies yet
      </h1>
      <p className="text-sm sm:text-base text-gray-400 mt-2">
        Hover a movie card and tap the heart icon to add one.
      </p>
    </div>
  );
}

export default Favorite;