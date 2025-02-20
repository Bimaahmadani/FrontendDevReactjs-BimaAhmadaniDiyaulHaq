import React, { useState } from "react";
import RestaurantItem from "./RestaurantItem";
import restaurants from "../data/restaurants.json";

const Main = () => {
  const [openNow, setOpenNow] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [categories, setCategories] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (!openNow || restaurant.isOpen) && // Filter Open Now
      (!priceFilter || restaurant.priceRange === priceFilter) && // Filter Price
      (!categories || restaurant.categories.includes(categories)) // Filter Categories
    );
  });

  return (
    <div className="p-4 border-gray-400 my-4"> 
    <div className="mb-8 ">
        <p className="text-4xl font-thin">Restaurant</p>
        <p className="text-lg font-normal mt-4 text-gray-400">
            Selamat datang di daftar restoran pilihan kami! Temukan berbagai macam kuliner dari seluruh dunia, 
            mulai dari sushi Jepang yang segar, hidangan pedas khas Thailand, hingga pasta autentik Italia. 
            Gunakan fitur filter untuk menyesuaikan pencarian berdasarkan kategori, harga, dan status buka restoran. 
            Temukan tempat makan favoritmu dan nikmati pengalaman kuliner terbaik!
            </p>
    </div>

    <div className="mb-4 flex space-x-4 border-t-2 border-b-2 p-2 items-center">
        <p className="text-xl">Filter by :</p>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="openNow"
              value="all"
              checked={!openNow}
              onChange={() => setOpenNow(false)}
              className="mr-2"
            />
            Show All
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="openNow"
              value="open"
              checked={openNow}
              onChange={() => setOpenNow(true)}
              className="mr-2"
            />
            Open Now
          </label>
        </div>
        
        
        <select
          onChange={(e) => setPriceFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        
    
        <select
          onChange={(e) => setCategories(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Japanese">Japanese</option>
          <option value="Thai">Thai</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="French">French</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
          <option value="Mediterranean">Mediterranean</option>
        </select>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Main;