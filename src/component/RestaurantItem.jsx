import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from "./RatingStars";

const RestaurantItem = ({ restaurant }) => {
  return (
    <div className="border rounded-lg hover:shadow-xl hover:border-2 transition-all duration-300 ease-in-out">
      <img src={restaurant.photos[0]} alt={restaurant.name} className="w-full h-48 rounded-t-lg" />
      <div className="p-4 w-full">
        <h2 className="text-xl font-bold">{restaurant.name}</h2>
        <RatingStars rating={restaurant.rating} />
        <p className="text-gray-600 text-medium mt-4">{restaurant.categories[0]}. {restaurant.priceRange}</p>
        <div className='w-full text-end'>
          <p className={restaurant.isOpen ? 'text-green-500' : 'text-red-500'}>
            {restaurant.isOpen ? 'Open' : 'Closed'}
          </p>
        </div>
      </div>
      <Link 
          to={`/restaurant/${restaurant.id}`} 
          className="block text-center text-white bg-blue-500 hover:bg-blue-600 py-2 mt-4 rounded-b-md w-full"
        >
          Learn More
        </Link>
    </div>
  );
};

export default RestaurantItem;