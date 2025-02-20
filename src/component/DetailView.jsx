import React from 'react';
import { useParams } from 'react-router-dom';
import restaurants from '../data/restaurants.json';

const DetailView = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <p className="text-yellow-500">Rating: {restaurant.rating}</p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Reviews</h2>
        {restaurant.reviews.map(review => (
          <div key={review.id} className="border p-4 mt-2 rounded-lg">
            <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
            <p className="font-bold">{review.name}</p>
            <p className="text-yellow-500">Rating: {review.rating}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailView;