import React, { useState, useEffect } from "react";
import data from "../data/food.json";

const Section = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Restaurant List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="border rounded-none overflow-hidden">
            <img
              src={restaurant.photos[0]}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-600">Category: {restaurant.categories[0]}</p>
              <p className="text-gray-600">Rating: {restaurant.rating}</p>
              <p className="text-gray-600">Price: {restaurant.price}</p>
              <p className={`font-bold uppercase ${restaurant.isOpen ? "text-green-600" : "text-red-600"}`}>
                {restaurant.isOpen ? "Open" : "Closed"}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
