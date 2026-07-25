import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../Component/MovieCard";
import Loading from "../Component/Loading";

const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setMovies(dummyShowsData);
  }, []);

  if (movies === null) return <Loading />;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-36 pt-24 sm:pt-28 pb-10 min-h-screen">
      <h1 className="text-lg sm:text-xl font-medium mb-1">Now Showing</h1>
      <p className="text-xs sm:text-sm text-gray-400 mb-6">
        Book tickets for the latest movies
      </p>

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-lg sm:text-xl font-medium">
            No movies showing right now
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Check back soon for new releases.
          </p>
        </div>
      )}
    </div>
  );
};

export default Movies;