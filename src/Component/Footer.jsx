import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full mt-24 sm:mt-32 lg:mt-40 px-5 sm:px-8 md:px-16 lg:px-36 text-gray-300">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 border-t border-gray-800 py-12">

    {/* Logo */}
    <div className="text-center md:text-left flex flex-col items-center md:items-start">
      <Link to="/">
        <img
          src={assets.logo}
          alt="QuickShow"
          className="h-9 sm:h-10"
        />
      </Link>

      <p className="mt-5 text-sm leading-7 text-gray-400 max-w-sm">
        QuickShow is your ultimate movie companion—discover the latest
        blockbusters, book your favorite seats, and enjoy a seamless cinema
        experience with fast, secure, and hassle-free booking.
      </p>

      <div className="flex gap-3 mt-5 flex-wrap justify-center md:justify-start">
        <img
          src={assets.googlePlay}
          alt="Google Play"
          className="h-10 cursor-pointer hover:scale-105 transition"
        />

        <img
          src={assets.appStore}
          alt="App Store"
          className="h-10 cursor-pointer hover:scale-105 transition"
        />
      </div>

  
    </div>

    {/* Company */}

    <div className="text-center md:text-left">
      <h2 className="text-lg font-semibold text-white mb-5">
        Company
      </h2>

      <ul className="space-y-3 text-gray-400">
        <li>
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/movies" className="hover:text-primary transition">
            Movies
          </Link>
        </li>

        <li>
          <Link to="/favorite" className="hover:text-primary transition">
            Favorites
          </Link>
        </li>

        <li>
          <Link to="/releases" className="hover:text-primary transition">
            Upcoming
          </Link>
        </li>
      </ul>
    </div>

    {/* Contact */}

    <div className="text-center md:text-left">
      <h2 className="text-lg font-semibold text-white mb-5">
        Contact
      </h2>

      <div className="space-y-4 text-gray-400">

        <div className="flex justify-center md:justify-start items-center gap-3">
          <MdPhone className="text-primary text-xl" />
          <span>+91 98765 43210</span>
        </div>

        <div className="flex justify-center md:justify-start items-center gap-3">
          <MdEmail className="text-primary text-xl" />
          <span>support@quickshow.com</span>
        </div>

      </div>
    </div>

  </div>

  {/* Bottom */}

  <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm text-gray-500">

    <p>
      © {new Date().getFullYear()}{" "}
      <span className="text-white font-medium">
        QuickShow
      </span>
      . All rights reserved.
    </p>

    <div className="flex flex-wrap justify-center gap-5">
      <Link
        to="/privacy"
        className="hover:text-primary transition"
      >
        Privacy Policy
      </Link>

      <Link
        to="/terms"
        className="hover:text-primary transition"
      >
        Terms of Service
      </Link>
    </div>

  </div>

</footer>
  );
}

export default Footer;