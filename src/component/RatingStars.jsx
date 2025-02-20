import React from "react";

const RatingStars = ({ rating }) => {
  // Jumlah bintang penuh
  const fullStars = Math.floor(rating);
  // Apakah ada setengah bintang?
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {/* Menampilkan bintang penuh */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-500 text-xl">&#9733;</span>
      ))}

      {/* Menampilkan setengah bintang jika ada */}
      {hasHalfStar && <span className="text-yellow-500 text-xl">&#9734;</span>}

      {/* Menampilkan bintang kosong untuk sisa */}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <span key={index} className="text-gray-300 text-xl">&#9733;</span>
      ))}

      {/* Menampilkan angka rating */}
      <span className="ml-2 text-yellow-500">{rating}</span>
    </div>
  );
};

export default RatingStars;