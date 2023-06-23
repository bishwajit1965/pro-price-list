import React from "react";

const Link = ({ route }) => {
  return (
    <li>
      <a className="text-white hover:text-green-400" href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

export default Link;