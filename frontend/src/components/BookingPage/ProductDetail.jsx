import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseStorageUrl = "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/storage/";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/api/services/${id}`);
        if (!response.ok) {
          throw new Error('Produk tidak ditemukan');
        }
        const { data } = await response.json();
        const productWithFullImageUrl = {
          ...data,
          image_url: baseStorageUrl + data.image
        };
        setProduct(productWithFullImageUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, baseStorageUrl]);

  if (loading) {
    return <div className="max-w-2xl mx-auto p-4 pt-40">Memuat...</div>;
  }

  if (error) {
    return <div className="max-w-2xl mx-auto p-4 pt-40 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="max-w-2xl mx-auto p-4 pt-40">Produk tidak ditemukan!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 pt-40 pb-40">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-2">Rp {product.price}</p>
      <p className="text-sm text-gray-500 mb-2">
        {product.duration}
      </p>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            className={`${
              product.ratings_avg_rating_value > index ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-500 text-sm font-poppins font-regular">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
