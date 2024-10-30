import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl =
    "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/storage/";

  const [order_name, setOrder_name] = useState("");
  const [order_address, setOrder_address] = useState("");
  const [order_phone, setOrder_phone] = useState("");
  const [order_notes, setOrder_notes] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios.get(`/api/services/${id}`);

        const productWithFullImageUrl = {
          ...response.data,
          image_url: baseUrl + response.data.image,
        };
        setProduct(productWithFullImageUrl);
      } catch (err) {
        setError(err.response?.data?.message || "Produk tidak ditemukan");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/orders", {
        service_id: id,
        order_name,
        order_address,
        order_phone,
        order_notes,
      });
      setOrder_name("");
      setOrder_address("");
      setOrder_phone("");
      setOrder_notes("");

      navigate("/payment");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mb-24 mt-24 p-6">
      <h1 className="font-poppins mb-6 text-2xl font-medium text-primary">
        Formulir Booking
      </h1>

      <div className="flex rounded-lg border border-gray-200 p-6">
        <div className="w-1/3 border-r border-gray-200 bg-white pr-6">
          <div className="flex flex-col items-center rounded-lg border p-4">
            <img
              src={product.image_url}
              alt={product.name}
              className="mb-4 h-48 w-3/5 rounded-lg object-cover"
            />
            <div className="w-3/5">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="font-poppins font-medium text-orange-400">
                Rp{product.price}
              </p>
              <p className="font-poppins text-sm text-gray-500">
                {product.duration}
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/3 bg-white pl-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 grid grid-cols-1 gap-4">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Nama Pemesan
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama anda"
                  value={order_name}
                  onChange={(e) => setOrder_name(e.target.value)}
                  className="w-full rounded border p-2 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Alamat
                </label>
                <input
                  type="text"
                  placeholder="Masukkan alamat anda"
                  value={order_address}
                  onChange={(e) => setOrder_address(e.target.value)}
                  className="w-full rounded border p-2 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  No Handphone
                </label>
                <input
                  type="text"
                  placeholder="Masukkan no handphone anda"
                  value={order_phone}
                  onChange={(e) => setOrder_phone(e.target.value)}
                  className="w-full rounded border p-2 focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-semibold text-gray-700">
                Catatan Perbaikan
              </label>
              <textarea
                placeholder="Masukkan catatan anda"
                className="w-full rounded border p-2 focus:border-primary focus:outline-none"
                rows="4"
                value={order_notes}
                onChange={(e) => setOrder_notes(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-2/12 rounded-xl bg-primary py-3 text-white transition-colors hover:bg-primary/90"
              >
                Lanjut Pembayaran
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;