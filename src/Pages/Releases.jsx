import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUpcomingMoviesData } from "../assets/assets";
import MovieCard from "../Component/MovieCard";
import Loading from "../Component/Loading";
import { CalendarIcon } from "lucide-react";

const Releases = () => {
  const navigate = useNavigate();
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Only movies releasing today or in the future count as "upcoming"
    const filtered = dummyUpcomingMoviesData
      .filter((movie) => new Date(movie.release_date) >= today)
      .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

    setUpcomingMovies(filtered);
  }, []);

  if (upcomingMovies === null) return <Loading />;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-36 pt-24 sm:pt-28 pb-10 min-h-screen">
      {upcomingMovies.length > 0 && (
        <>
          <h1 className="text-lg sm:text-xl font-medium mb-1">
            Upcoming Releases
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mb-6">
            Movies coming soon to theaters
          </p>
        </>
      )}

      {upcomingMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {upcomingMovies.map((movie) => (
            <div key={movie._id} className="relative">
              <MovieCard movie={movie} showActions={false} />

              {/* Release date badge */}
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] sm:text-xs text-primary">
                <CalendarIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-lg sm:text-xl font-medium">
            No upcoming releases right now
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Check back soon for new movie announcements.
          </p>
          <div className="flex justify-center mt-20">
            <button
              onClick={() => {
                navigate("/movies");
                scrollTo(0, 0);
              }}
              className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
            >
              {" "}
              Check Now Showing Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Releases;