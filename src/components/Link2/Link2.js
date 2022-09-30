import React from "react";

const Link2 = ({ route: { name, address } }) => {
  return (
    <li className="mr-5">
      <a href={address}>{name}</a>
    </li>
  );
};

export default Link2;
