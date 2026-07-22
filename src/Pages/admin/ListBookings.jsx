import React, { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import Loading from "../../Component/Loading";
import Title from "../../Component/admin/Title";
import { dateFormat } from "../../lib/dateFormat";
function ListBookings() {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const [bookings, setBookings] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getAllBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllBookings();
  }, []);
  return !isloading ? (
    <>
      <Title text1="List" text2="Bookings" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {bookings.map((item, index) => (
              <tr
                key={index}
                className="border-b border-primary/20 bg-primary/5 even:bg-primary/10"
              >
                {/* User Name */}
                <td className="p-2 min-w-45 pl-5">{item.user.name}</td>

                {/* Movie Name */}
                <td className="p-2">{item.show.movie.title}</td>

                {/* Show Time */}
                <td className="p-2">{dateFormat(item.show.showDateTime)}</td>

                {/* Booked Seats */}
                <td className="p-2">
                  {Object.keys(item.bookedSeats)
                    .flatMap((seat) => item.bookedSeats[seat])
                    .join(", ")}
                </td>

                {/* Amount */}
                <td className="p-2">
                  {currency}
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default ListBookings;
