import React, { useState } from "react";
import "./DynamicNavbar.css";
import Link from "../link/Link";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DynamicNavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Contact", path: "/contact" },
    { id: 3, name: "About", path: "/about" },
    { id: 6, name: "Services", path: "/services" },
    { id: 4, name: "Login", path: "/login" },
    { id: 5, name: "Logout", path: "/logout" },
  ];

  return (
    <nav className="bg-purple-800 text py-2">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars4Icon className="h-6 w-6 text-white" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex md:justify-around md:bg-purple-800 px-4 py-2 md:py-2 z-10 absolute md:static duration-1000 bg-purple-700  ${
          open ? "top-10" : "-top-40"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default DynamicNavBar;
