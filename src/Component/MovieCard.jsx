import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";
import timeFormate from "../lib/timeFormate";
function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between p-2.5 sm:p-3 bg-gray-800 rounded-xl sm:rounded-2xl hover:-translate-y-1 transition duration-300 w-full">
      <img
        src={movie.backdrop_path}
        alt="imgmovie"
        className="rounded-lg h-40 sm:h-48 md:h-52 w-full object-cover object-right-bottom cursor-pointer"
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
      />
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
      <div className="flex items-center justify-between mt-3 sm:mt-4 pb-2 sm:pb-3 gap-2">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer whitespace-nowrap"
        >
          Buy Tickets
        </button>
        <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 mt-1 pr-1 shrink-0">
          <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
export default MovieCard;