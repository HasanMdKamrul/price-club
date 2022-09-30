import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex ietms-center">
      <span className="mr-2">
        <CheckCircleIcon className="h-6 w-6 text-blue-500" />
      </span>
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
