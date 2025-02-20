import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating, size = 20 }) => { // Tambahkan prop size dengan default 20px
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" size={size} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" size={size} />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <FaRegStar key={index} className="text-gray-300" size={size} />
      ))}
      <span className="ml-2 text-yellow-500" style={{ fontSize: size * 0.8 }}>{rating}</span>
    </div>
  );
};

export default RatingStars;
