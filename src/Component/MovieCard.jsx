import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon, HeartIcon } from "lucide-react";
import timeFormate from "../lib/timeFormate";

const FAVORITES_KEY = "favoriteMovies";

function getStoredFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function MovieCard({ movie, showActions = true }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getStoredFavorites();
    setIsFavorite(favorites.some((id) => id === movie._id));
  }, [movie._id]);

  const goToMovie = () => {
    navigate(`/movies/${movie._id}`);
    scrollTo(0, 0);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = getStoredFavorites();
    let updated;
    if (favorites.includes(movie._id)) {
      updated = favorites.filter((id) => id !== movie._id);
    } else {
      updated = [...favorites, movie._id];
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    setIsFavorite(!isFavorite);

    // notify other components (e.g. a Favorites page) that favorites changed
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className="group flex flex-col justify-between p-2.5 sm:p-3 bg-gray-800 rounded-xl sm:rounded-2xl hover:-translate-y-1 transition duration-300 w-full">
      <div className="relative">
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="rounded-lg aspect-[2/3] w-full object-cover object-top cursor-pointer"
          onClick={goToMovie}
        />
        <button
          onClick={toggleFavorite}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className={`absolute top-2 right-2 p-1.5 rounded-full bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 cursor-pointer
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100
          ${isFavorite ? "opacity-100" : ""}`}
        >
          <HeartIcon
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
              isFavorite
                ? "text-red-500 fill-red-500"
                : "text-white fill-transparent"
            }`}
          />
        </button>
      </div>

      <p className="font-semibold mt-2 truncate text-sm sm:text-base">
        {movie.title}
      </p>

      <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2 truncate">
        {movie.release_date
          ? new Date(movie.release_date).getFullYear()
          : "N/A"}{" "}
        •{" "}
        {(movie.genres || [])
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" | ")}{" "}
        • {timeFormate(movie.runtime)}
      </p>

      {showActions && (
        <div className="flex items-center justify-between mt-3 sm:mt-4 pb-2 sm:pb-3 gap-2">
          <button
            onClick={goToMovie}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer whitespace-nowrap"
          >
            Buy Tickets
          </button>
          <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 mt-1 pr-1 shrink-0">
            <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" />
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;