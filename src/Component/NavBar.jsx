import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, Search, X } from "lucide-react";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { TicketPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo */}
      <Link
        to="/"
        className="flex-shrink-0"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur bg-white/10 border border-gray-300/20">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/">Theaters</Link>
          <Link to="/">Releases</Link>
          <Link to="/favorite">Favorites</Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <Search className="hidden md:block w-6 h-6 cursor-pointer" />

        {!user ? (
          <button
            onClick={() => openSignIn()}
            className="px-4 sm:px-7 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer rounded-full"
          >
            Login
          </button>
        ) : (
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
            afterSignOutUrl="/"
          >
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus size={16} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        {!isOpen && (
          <Menu
            className="md:hidden w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center gap-8 text-lg font-medium transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <X
          className="absolute top-6 right-6 w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <Link to="/" onClick={handleNavigation}>
          Home
        </Link>

        <Link to="/movies" onClick={handleNavigation}>
          Movies
        </Link>

        <Link to="/" onClick={handleNavigation}>
          Theaters
        </Link>

        <Link to="/" onClick={handleNavigation}>
          Releases
        </Link>

        <Link to="/favorite" onClick={handleNavigation}>
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
