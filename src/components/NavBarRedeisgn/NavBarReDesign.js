import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link2 from "../Link2/Link2";

const NavBarReDesign = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      address: "/home",
    },
    {
      id: 2,
      name: "Products",
      address: "/products",
    },
    {
      id: 3,
      name: "Orders",
      address: "/orders",
    },
    {
      id: 4,
      name: "Contact",
      address: "/contact",
    },
    {
      id: 5,
      name: "About",
      address: "/about",
    },
  ];

  return (
    <div className="w-full bg-purple-200">
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6 " />
        )}
      </div>
      <ul
        className={`md:flex w-full bg-purple-200 md:justify-center md:static absolute duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        } `}
      >
        {routes.map((route) => (
          <Link2 route={route} key={route.id} />
        ))}
      </ul>
    </div>
  );
};

export default NavBarReDesign;
<h1>Nav</h1>;
