import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Features = ({ feature }) => {
  return (
    <div className="p-2">
      <ul>
        <li className="flex ">
          <CheckCircleIcon className="h-8 w-8 pr-2 text-white" />
          {feature.feature}
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 w-full">
        <button className="bg-indigo-700 hover:bg-lime-500 w-full rounded-b-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Features;
