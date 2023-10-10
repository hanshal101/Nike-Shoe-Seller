import { secureHeapUsed } from "crypto";
import React from "react";
import PopularProdCard from "../components/PopularProdCard";
import { products } from "../constants";

const PopularProducts: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="sm:w-2/5 w-full ">
        <span className="text-4xl font-bold font-montserrat">
          Our <span className="text-coral-red">Popular</span> Products
        </span>
        <p className="mt-2 text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="flex gap-16 mt-12 flex-col sm:flex-row">
      {products.map((prod) => (
        <div key={prod.imgURL} className="">
          <PopularProdCard imgURL={prod.imgURL} name={prod.name} price={prod.price} />
        </div>
       
      ))}
      </div>
    </section>
  );
};

export default PopularProducts;
