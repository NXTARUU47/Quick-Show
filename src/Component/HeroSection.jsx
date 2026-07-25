import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import odysseyLogo from "../assets/odysseyLogo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-start justify-center gap-3 sm:gap-4
  px-4 sm:px-6 md:px-10 lg:px-36
  bg-[url('/backgroundImage.png')] bg-cover bg-center bg-no-repeat
  min-h-screen w-full"
    >
      {/* <img
        src={assets.odysseyLogo}
        alt="The Odyssey"
        className="h-10 sm:h-12 lg:h-14 mt-20"
      /> */}

      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[70px] md:leading-[1.15] lg:leading-18 font-semibold max-w-full sm:max-w-110">
        The <br className="hidden sm:block" /> Odyssey
      </h1>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-300">
        <span>Action | Adventure | Epic</span>

        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          2026
        </div>

        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          2h 45m
        </div>
      </div>

      <p className="max-w-xs sm:max-w-md text-sm sm:text-base text-gray-300 leading-7">
        After the fall of Troy, the legendary warrior Odysseus embarks on a
        perilous journey home. Battling mythical creatures, ruthless gods, and
        impossible trials, he must overcome every obstacle to reunite with his
        family and fulfill his destiny.
      </p>

      <button
        className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3
    bg-primary hover:bg-primary-dull transition-all duration-300
    rounded-full font-medium cursor-pointer mb-16 sm:mb-0"
        onClick={() => navigate("/movies")}
      >
        Explore Movies
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
