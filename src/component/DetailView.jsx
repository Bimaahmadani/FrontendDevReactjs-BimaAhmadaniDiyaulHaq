import React from 'react';
import { useParams, Link } from 'react-router-dom';
import restaurants from '../data/restaurants.json';
import RatingStars from "./RatingStars";
import MapComponent from "./MapComponent";
import { IoIosArrowBack } from "react-icons/io";


const DetailView = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div className="text-center text-red-500 text-xl">Restaurant not found</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
    
        <Link to="/" className="flex items-center  text-gray-500 py-4 ">
            <IoIosArrowBack size={40} /> <span className='text-xl font-medium text-gray-400 ml-4'>Go Back</span> 
        </Link>
  
      <div className="flex flex-col md:flex-row gap-6">
        <img 
          src={restaurant.photos[0]} 
          alt={restaurant.name} 
          className="w-full md:w-1/2 object-cover rounded-lg shadow-md" 
        />
        <div className="flex flex-col justify-between w-full">
        <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <RatingStars rating={restaurant.rating} size={30} />
          <p className="text-gray-700 text-xl font-medium">Category: {restaurant.categories[0]}</p>
          <p className="text-gray-700 text-xl font-medium">Price Range: {restaurant.priceRange}</p>
          <p className={restaurant.isOpen ? 'text-green-500 text-lg' : 'text-red-500 text-lg'}>
            {restaurant.isOpen ? 'Open Now' : 'Closed'}
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold">Location</h2>
        <MapComponent latitude={restaurant.latitude} longitude={restaurant.longitude} name={restaurant.name} />
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold">Reviews</h2>
        <div className="space-y-4">
          {restaurant.reviews.map(review => (
            <div key={review.id} className="border p-4 rounded-lg shadow-md flex gap-4 items-center">
              <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full border" />
              <div>
                <p className="font-bold text-lg">{review.name}</p>
                <RatingStars rating={review.rating} size={18} />
                <p className="text-gray-700">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default DetailView;
