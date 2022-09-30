import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "./components/Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      routeAddress: "/home",
    },
    {
      id: 2,
      name: "Products",
      routeAddress: "/products",
    },
    {
      id: 3,
      name: "Orders",
      routeAddress: "/orders",
    },
    {
      id: 4,
      name: "Contact",
      routeAddress: "/contact",
    },
    {
      id: 5,
      name: "About",
      routeAddress: "/about",
    },
  ];
  return (
    <nav className="bg-purple-200 w-full">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      {/* className={`bg-purple-200 md:flex w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`} */}
      <ul
        className={`bg-purple-200 md:flex w-full justify-center absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
