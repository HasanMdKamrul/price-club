import React from "react";
import Price from "../Price/Price";

const Pricing = () => {
  const priceOptions = [
    {
      id: 1,
      price: 0,
      option: "Free",
      features: ["Awesome", "Best", "Standard", "Aweful", "Bad", "Worst"],
    },
    {
      id: 2,
      price: 9.99,
      option: "Medium",
      features: ["Awesome", "Best", "Standard", "Aweful", "Bad", "Worst"],
    },
    {
      id: 3,
      price: 19.99,
      option: "Premium",
      features: ["Awesome", "Best", "Standard", "Aweful", "Bad", "Worst"],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 my-12 gap-5">
        {priceOptions.map((option) => (
          <Price key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
