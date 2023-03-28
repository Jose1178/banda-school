import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="bg-black p-4">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Banda School
            </span>
          </a>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-yellow-500 font-bold underline" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "text-yellow-500 font-bold underline" : "")}
              >
                Courses
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-yellow-500 font-bold underline" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-yellow-500 font-bold underline" : "")}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;