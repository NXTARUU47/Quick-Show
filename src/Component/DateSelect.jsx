import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function DateSelect({ dateTime = {}, movieId, id = "dateSelect" }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) {
      toast("Please select a date");
      return;
    }

    if (!movieId) {
      toast("Movie not found");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate(`/movies/${movieId}/${selected}`);
  };

  return (
    <div id={id} className="pt-14 sm:pt-20">
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-primary/10 border border-primary/20 rounded-xl overflow-hidden">
        <BlurCircle
          top="-100px"
          left="-100px"
          className="pointer-events-none -z-10"
        />

        <BlurCircle
          top="-100px"
          right="-100px"
          className="pointer-events-none -z-10"
        />
        <div className="flex-1 w-full">
          <p className="text-base sm:text-lg font-semibold">Choose Date</p>

          <div className="flex items-start sm:items-center gap-2 sm:gap-4 mt-3 sm:mt-5">
            <ChevronLeftIcon
              size={20}
              className="cursor-pointer flex-shrink-0 mt-3 sm:mt-0 sm:w-7 sm:h-7"
            />

            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:flex md:flex-wrap gap-2 sm:gap-4 flex-1 place-items-center sm:place-items-stretch">
              {Object.keys(dateTime).length > 0 ? (
                Object.keys(dateTime).map((date) => (
                  <button
                    type="button"
                    key={date}
                    onClick={() => setSelected(date)}
                    className={`flex flex-col items-center justify-center h-11 w-11 sm:h-14 sm:w-14 rounded-lg transition cursor-pointer text-sm sm:text-base ${
                      selected === date
                        ? "bg-primary text-white"
                        : "border border-primary/70 hover:bg-primary/20"
                    }`}
                  >
                    <span>{new Date(date).getDate()}</span>

                    <span className="text-[10px] sm:text-xs">
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </button>
                ))
              ) : (
                <p className="text-gray-400 text-sm sm:text-base col-span-3">
                  No dates available
                </p>
              )}

              <ChevronRightIcon
                size={20}
                className="cursor-pointer flex-shrink-0 mt-3 sm:mt-3 sm:w-7 sm:h-7"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onBookHandler}
          className="w-full md:w-auto bg-primary text-white px-4 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-primary/90 transition cursor-pointer active:scale-95"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default DateSelect;
