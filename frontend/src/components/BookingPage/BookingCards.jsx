import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import CardsOnlyBooking from "../BookingPage/CardsOnlyBooking";
import { Link } from "react-router-dom";
import axios from "axios";


const BookingCards = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const baseStorageUrl = "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev";
  const handleBooking = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(baseStorageUrl + "/api/services");
        const productsWithImages = response.data.data.map(product => ({
          ...product,
          image: baseStorageUrl + "/storage/" + product.image
        }));
        setProducts(productsWithImages);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    })();
  }, []);

  return (
    <div className="flex items-center justify-center pt-40">
      <div className="w-full lg:w-10/12 xl:w-9/12 2xl:w-6/12 text-center">
        <h1 className="text-primary text-3xl font-poppins font-medium">
          Jasa Perbaikan Rumah
        </h1>
        <p className="mt-1 ml-44 mr-44 text-gray-400 text-2xl font-poppins">
          Gunakan jasa perbaikan untuk kerusakan sederhana pada rumahmu
        </p>

        <form className="max-w-md w-full mt-6 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
              <svg
                className="w-4 h-4 text-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-12 text-sm text-gray-900 border border-black rounded-lg bg-white focus:ring-primary focus:border-primary"
              placeholder="Search "
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-5 ">
          {products.map((product) => (
            <CardsOnlyBooking
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              duration={product.duration}
              rating={product.rating}
              image={product.image}
              onBooking={handleBooking}
            />
          ))}
        </div>
        <div className="flex justify-end pb-24">
          <Link to="/history">
            <button className="text-white bg-primary hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              Lihat Riwayat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCards;
