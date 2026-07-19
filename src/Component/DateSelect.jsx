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

    navigate(`/movies/${movieId}/${selected}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id={id} className="pt-32">
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-4 sm:p-6 md:p-8 bg-primary/10 border border-primary/20 rounded-xl overflow-hidden">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="-100px" right="-100px" />

        <div className="flex-1 w-full">
          <p className="text-lg font-semibold">Choose Date</p>

          <div className="flex items-center gap-4 mt-5">
            <ChevronLeftIcon
              size={28}
              className="cursor-pointer flex-shrink-0"
            />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap gap-4 flex-1">
              {Object.keys(dateTime).length > 0 ? (
                Object.keys(dateTime).map((date) => (
                  <button
                    type="button"
                    key={date}
                    onClick={() => setSelected(date)}
                    className={`flex flex-col items-center justify-center h-14 w-14 rounded-lg transition cursor-pointer
                      ${
                        selected === date
                          ? "bg-primary text-white"
                          : "border border-primary/50 hover:bg-primary/20"
                      }`}
                  >
                    <span>{new Date(date).getDate()}</span>

                    <span className="text-xs">
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </button>
                ))
              ) : (
                <p className="text-gray-400">No dates available</p>
              )}
              <ChevronRightIcon
              size={28}
              className="cursor-pointer flex-shrink-0"
            />
            </div>

            
          </div>
        </div>

        <button
          type="button"
          onClick={onBookHandler}
          className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transitionv cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default DateSelect;
