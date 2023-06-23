import React from "react";
import "./GymPriceCard.css";
import Features from "../features/Features";

const GymPriceCard = ({ product }) => {
  return (
    <div className="card bg-indigo-500 text-white rounded-md shadow-lg relative">
      <h2 className="text-2xl font-bold text-center">{product.name}</h2>
      <h2 className="text-2xl font-bold text-center mb-4">Awesome Features:</h2>
      <h4 className="text-3xl font-bold text-center mb-2">
        Pricing: {product.price}/mon
      </h4>
      <div className="mb-12">
        {product.features.map((feature) => (
          <Features key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default GymPriceCard;
