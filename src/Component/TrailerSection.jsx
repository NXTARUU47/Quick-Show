import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

function TrailerSection() {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-44 py-12 md:py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto mb-6">
        Trailers
      </p>

      <div className="relative max-w-5xl mx-auto">
        <BlurCircle top="-100px" right="-100px" />

        <div className="overflow-hidden rounded-2xl aspect-video">
          <ReactPlayer
            src={currentTrailer.videoUrl}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="group grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mt-6">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 group-hover:opacity-60 hover:!opacity-100"
          >
            <img
              src={trailer.image}
              alt="Trailer"
              className="w-full aspect-video object-cover brightness-75"
            />

            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 text-white -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrailerSection;