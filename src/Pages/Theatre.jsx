import React, { useState } from "react";
import { MapPinIcon, StarIcon } from "lucide-react";

// Dummy theater data — replace with real data from your backend once available.
const dummyTheatresData = [
  {
    _id: "t1",
    name: "PVR Icon",
    city: "Ahmedabad",
    address: "Alpha One Mall, Vastrapur",
    amenities: ["IMAX", "Dolby Atmos", "Recliner"],
    rating: 4.4,
  },
  {
    _id: "t2",
    name: "INOX Megaplex",
    city: "Ahmedabad",
    address: "AlphaOne Mall, S.G. Highway",
    amenities: ["4DX", "Dolby Atmos"],
    rating: 4.2,
  },
  {
    _id: "t3",
    name: "Cinepolis",
    city: "Mumbai",
    address: "Viviana Mall, Thane",
    amenities: ["IMAX", "Recliner"],
    rating: 4.5,
  },
  {
    _id: "t4",
    name: "PVR Phoenix",
    city: "Mumbai",
    address: "Phoenix Marketcity, Kurla",
    amenities: ["Dolby Atmos", "4DX", "Recliner"],
    rating: 4.3,
  },
  {
    _id: "t5",
    name: "INOX Forum",
    city: "Bengaluru",
    address: "Forum Mall, Koramangala",
    amenities: ["IMAX", "Dolby Atmos"],
    rating: 4.1,
  },
  {
    _id: "t6",
    name: "Cinepolis DLF",
    city: "Delhi",
    address: "DLF Promenade, Vasant Kunj",
    amenities: ["4DX", "Recliner"],
    rating: 4.6,
  },
];

const cities = ["All", ...new Set(dummyTheatresData.map((t) => t.city))];

const Theatre = () => {
  const [selectedCity, setSelectedCity] = useState("All");

  const filteredTheatres =
    selectedCity === "All"
      ? dummyTheatresData
      : dummyTheatresData.filter((t) => t.city === selectedCity);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-36 pt-24 sm:pt-28 pb-10 min-h-screen">
      <h1 className="text-lg sm:text-xl font-medium mb-1">Theaters</h1>
      <p className="text-xs sm:text-sm text-gray-400 mb-6">
        Find a cinema near you
      </p>

      {/* City filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-1.5 text-xs sm:text-sm rounded-full border transition cursor-pointer ${
              selectedCity === city
                ? "bg-primary border-primary text-white"
                : "border-gray-600 text-gray-300 hover:border-primary"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Theater grid */}
      {filteredTheatres.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTheatres.map((theatre) => (
            <div
              key={theatre._id}
              className="bg-gray-800 rounded-xl p-4 sm:p-5 hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  {theatre.name}
                </h3>
                <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 shrink-0">
                  <StarIcon className="w-3.5 h-3.5 text-primary fill-primary" />
                  {theatre.rating}
                </p>
              </div>

              <p className="flex items-start gap-1.5 text-xs sm:text-sm text-gray-400 mt-2">
                <MapPinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5" />
                {theatre.address}, {theatre.city}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {theatre.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-lg sm:text-xl font-medium">
            No theaters found in {selectedCity}
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Try selecting a different city.
          </p>
        </div>
      )}
    </div>
  );
};

export default Theatre;