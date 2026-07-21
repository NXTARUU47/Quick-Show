import React, { useEffect, useState } from "react";
import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  UsersIcon,
} from "lucide-react";
import { dummyDashboardData } from "../../assets/assets";
import Loading from "../../Component/Loading";
import Title from "../../Component/admin/Title";
import BlurCircle from "../../Component/BlurCircle";
import { StarIcon } from "lucide-react";
import { dateFormat } from "../../lib/dateFormat";
function Dashboard() {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings,
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: `${currency}${dashboardData.totalRevenue}`,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Shows",
      value: dashboardData.activeShows.length,
      icon: PlayCircleIcon,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUser,
      icon: UsersIcon,
    },
  ];

  const fetchDashboardData = async () => {
    try {
      setDashboardData(dummyDashboardData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Title text1="Admin" text2="Dashboard" />

      {/* Stat cards */}
      <div className="relative mt-6">
        <BlurCircle top="-100px" left="0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md w-full"
            >
              <div className="min-w-0">
                <h1 className="text-xs sm:text-sm truncate">{card.title}</h1>

                <p className="text-lg sm:text-xl font-medium mt-1 truncate">
                  {card.value}
                </p>
              </div>

              <card.icon className="w-6 h-6 shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-lg font-medium">Active Shows</p>

      {/* Active shows */}
      <div className="relative grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 max-w-5xl">
        <BlurCircle top="100px" left="-10%" />

        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-full rounded-lg overflow-hidden pb-3 bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300"
          >
            <img
              src={show.movie.poster_path}
              alt={show.movie.title}
              className="h-48 sm:h-60 w-full object-cover"
            />

            <p className="font-medium p-2 truncate">{show.movie.title}</p>

            <div className="flex items-center justify-between px-2 flex-wrap gap-1">
              <p className="text-base sm:text-lg font-medium">
                {currency} {show.showPrice}
              </p>

              <p className="flex items-center gap-1 text-sm text-gray-400 pr-1">
                <StarIcon className="w-4 h-4 text-primary fill-primary" />
                {show.movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="px-2 pt-2 text-sm text-gray-500">
              {dateFormat(show.showDateTime)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;