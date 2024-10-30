import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CardsOnlyBooking = ({id, name, price, duration, ratings_avg_rating_value, image}) => {
  const navigate = useNavigate();
  

  return (
        <div 
          key={id}
          className="border border-gray-300 p-4 rounded-2xl shadow-md cursor-pointer" 
          onClick={() => navigate(`/product/${id}`)}
        >
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt={name}
              className="w-60 h-auto object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg text-left font-poppins font-medium">{name}</h3>
          <p className="text-left text-orange-400 font-poppins font-medium">{price}</p>
          <p className="text-left text-gray-500 text-sm font-poppins font-regular pt-1">
            {duration}
          </p>

          <div className="flex items-center mb-2 pt-2">
            {[...Array(5)].map((_, index) => (
              <AiFillStar
                key={index}
                className={`${
                  ratings_avg_rating_value > index ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/bookingform/${id}`);
              }}
              className="bg-primary text-white px-10 py-2 rounded-md hover:bg-orange-400"
            >
              Booking
            </button>
          </div>
        </div>
  );
};

export default CardsOnlyBooking;
