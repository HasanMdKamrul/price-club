import React from "react";
import Feature from "../Feature/Feature";

const Price = ({ option: { option, price, features } }) => {
  return (
    <div className="bg-cyan-400 p-12 rounded-lg text-white shadow-2xl">
      <h1 className="text-6xl text-gray-800 font-semibold">{price}</h1>
      <span className="text-sky-700 text-xl">/Mon</span>
      <p>
        <span className="text-3xl">{option}</span>
      </p>
      <div>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <button className="w-full text-2xl bg-green-500 rounded-lg py-2 mt-5 font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default Price;
