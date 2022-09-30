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
    <nav>
      <div onClick={() => setOpen(!open)}>
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </div>

      <ul className="md:flex md:justify-center text-2xl">
        {routes.map((route) => (
          <Link route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
