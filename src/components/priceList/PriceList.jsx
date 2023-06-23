import React, { useEffect, useState } from "react";
import GymPriceCard from "../gymPriceCard/GymPriceCard";

const PriceList = () => {
  const [gymProduct, setGymProduct] = useState([]);
  useEffect(() => {
    fetch("gymFeatures.json")
      .then((response) => response.json())
      .then((data) => setGymProduct(data));
  }, []);
  return (
    <div className="md:mx-20 mt-5">
      <h1 className="font-bold text-center">Awesome Price List</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-10">
        {gymProduct.map((product) => (
          <GymPriceCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
