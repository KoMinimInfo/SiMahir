
import { useParams } from "react-router-dom";
import { Product } from "./Data/Product";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
    
  const { id } = useParams();
  const product = Product.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Produk tidak ditemukan!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 pt-40 pb-40">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-2">{product.price}</p>
      <p className="text-sm text-gray-500 mb-2">
        {product.duration}
      </p>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            className={`${
              product.rating > index ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-500 text-sm font-poppins font-regular">{product.desc}</p>
    </div>
  );
};

export default ProductDetail;
