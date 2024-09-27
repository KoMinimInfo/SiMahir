import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CardsOnlyBooking = ({ product, onBooking }) => {
  const navigate = useNavigate();

  // Function to handle when the card is clicked
  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // Navigate to a different destination for the card
  };

  // Function to handle when the Booking button is clicked
  const handleBookingClick = (e) => {
    e.stopPropagation(); // Prevent card's onClick from firing
    navigate('/bookingform'); // Navigate to payment when button is clicked
  };

  return (
    <div 
      className="border border-gray-300 p-4 rounded-2xl shadow-md cursor-pointer" 
      onClick={handleCardClick} // Card click navigation
    >
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-auto object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg text-left font-poppins font-medium">{product.name}</h3>
      <p className="text-left text-orange-400 font-poppins font-medium">{product.price}</p>
      <p className="text-left text-gray-500 text-sm font-poppins font-regular pt-1">
        {product.duration}
      </p>

      <div className="flex items-center mb-2 pt-2">
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            className={`${
              product.rating > index ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleBookingClick} // Booking button click navigation
          className="bg-primary text-white px-10 py-2 rounded-md hover:bg-orange-400"
        >
          Booking
        </button>
      </div>
    </div>
  );
};

export default CardsOnlyBooking;
