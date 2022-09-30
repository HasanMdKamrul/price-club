import React from "react";
import Feature from "../Feature/Feature";

const Price = ({ option: { option, price, features } }) => {
  return (
    <div className="bg-cyan-400 p-12 rounded-lg text-white shadow-xl">
      <h1 className="text-6xl text-gray-800 font-semibold">{price}</h1>
      <span className="text-sky-700 text-xl">/Mon</span>
      <p>
        <span className="text-3xl">{option}</span>
      </p>
      <div>
        {features.map((feature) => (
          <Feature feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Price;
