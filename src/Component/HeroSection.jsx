import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-3 sm:gap-4 
      px-4 sm:px-6 md:px-10 lg:px-36 
      bg-[url("/backgroundImage.png")] bg-cover bg-center bg-no-repeat 
      min-h-screen w-full'>
      <img
        src={assets.marvelLogo}
        alt="marvellogo"
        className="max-h-8 sm:max-h-9 lg:h-11 mt-16 sm:mt-20"
      />
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[70px] md:leading-[1.15] lg:leading-18 font-semibold max-w-full sm:max-w-110">
        Guardians <br className="hidden sm:block" /> of the Galaxy
      </h1>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          2h 8m
        </div>
      </div>
      <p className="max-w-xs sm:max-w-md text-sm sm:text-base text-gray-300">
        In a post-apocalyptic world where cities ride on wheels and consume each
        other to survive, two people meet in London and try to stop a
        conspiracy.
      </p>
      <button
        className="flex items-center gap-1 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm 
        bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer mb-16 sm:mb-0"
        onClick={() => navigate("/movies")}
      >
        Explore Movies
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
