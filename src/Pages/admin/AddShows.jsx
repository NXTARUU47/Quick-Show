import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Title from "../../Component/admin/Title";
import Loading from "../../Component/Loading";
import { CheckIcon, StarIcon, Trash2Icon } from "lucide-react";
import { KConverter } from "../../lib/KConverter";

function AddShows() {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  useEffect(() => {
    setNowPlayingMovies(dummyShowsData);
  }, []);

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;

    const [date, time] = dateTimeInput.split("T");

    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];

      if (times.includes(time)) return prev;

      return {
        ...prev,
        [date]: [...times, time].sort(),
      };
    });

    setDateTimeInput("");
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = (prev[date] || []).filter((t) => t !== time);

      if (filteredTimes.length === 0) {
        const { [date]: removed, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [date]: filteredTimes,
      };
    });
  };

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />

      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

      <div className="overflow-x-auto pb-4 no-scrollbar">
        <div className="flex gap-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie.id)}
              className="relative w-40 cursor-pointer hover:-translate-y-1 transition"
            >
              <div className="relative rounded-lg overflow-hidden mt-5">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full h-60 object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/70 flex items-center justify-between p-2 text-sm">
                  <p className="flex items-center gap-1 text-gray-300">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {movie.vote_average.toFixed(1)}
                  </p>

                  <p className="text-gray-300">
                    {KConverter(movie.vote_count)} Votes
                  </p>
                </div>
              </div>

              {selectedMovie === movie.id && (
                <div className="absolute top-7 right-2 bg-primary rounded flex items-center justify-center w-6 h-6">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
              )}

              <p className="font-medium truncate mt-2">{movie.title}</p>

              <p className="text-gray-400 text-sm">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show Price */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">
          Show Price
        </label>

        <div className="inline-flex items-center gap-2 border border-gray-600 rounded-md px-3 py-2">
          <span>{currency}</span>

          <input
            type="number"
            min="0"
            placeholder="Enter Show Price"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            className="bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Date Time */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>

        <div className="inline-flex items-center gap-5 border border-gray-600 rounded-lg p-1 pl-3">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="bg-transparent outline-none"
          />

          <button
            onClick={handleDateTimeAdd}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition cursor-pointer"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected Times */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-medium mb-3">
            Selected Date-Time
          </h2>

          <ul className="space-y-4">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <li key={date}>
                <p className="font-semibold">{date}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="flex items-center gap-2 border border-primary rounded px-3 py-1"
                    >
                      <span>{time}</span>

                      <Trash2Icon
                        size={15}
                        onClick={() =>
                          handleRemoveTime(date, time)
                        }
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    <button className="bg-primary text-white px-8  py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer">
      Add Show
    </button>
    </>

  ) : (
    <Loading />
  );
}

export default AddShows;