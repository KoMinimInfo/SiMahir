import React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseStorageUrl = "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/storage/";

  const [order_name, setOrder_name] = useState('');
  const [order_address, setOrder_address] = useState('');
  const [order_phone, setOrder_phone] = useState('');
  const [order_notes, setOrder_notes] = useState('');

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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      
      const response = await axios.post(
        `https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/api/orders`, 
        {
          service_id: id,
          order_name,
          order_address,
          order_phone,
          order_notes
        },{withCredentials: true}
        
      );
      
      setOrder_name("");
      setOrder_address("");
      setOrder_phone("");
      setOrder_notes("");

      navigate('/payment');
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response?.status === 401) {
        alert('Silakan login terlebih dahulu');
        navigate('/login');
      } else {
        alert('Terjadi kesalahan saat memproses pesanan');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 mt-24 mb-24">
      <h1 className="text-2xl text-primary mb-6 font-poppins font-medium">Formulir Booking</h1>
      
      <div className="flex border border-gray-200 rounded-lg p-6">
        <div className="w-1/3 bg-white pr-6 border-r border-gray-200">
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-3/5 h-48 object-cover rounded-lg mb-4"
            />
            <div className='w-3/5'>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-orange-400 font-poppins font-medium">Rp{product.price}</p>
              <p className='text-gray-500 text-sm font-poppins'>{product.duration}</p>
            </div>
          </div>
        </div>

        <div className="w-2/3 bg-white pl-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nama Pemesan</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama anda" 
                  value={order_name}  
                  onChange={(e) => setOrder_name(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:border-primary" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Alamat</label>
                <input 
                  type="text" 
                  placeholder="Masukkan alamat anda" 
                  value={order_address}  
                  onChange={(e) => setOrder_address(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:border-primary" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">No Handphone</label>
                <input 
                  type="text" 
                  placeholder="Masukkan no handphone anda" 
                  value={order_phone}  
                  onChange={(e) => setOrder_phone(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:border-primary" 
                  required 
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Catatan Perbaikan</label>
              <textarea 
                placeholder="Masukkan catatan anda" 
                className="w-full p-2 border rounded focus:outline-none focus:border-primary" 
                rows="4"
                value={order_notes}  
                onChange={(e) => setOrder_notes(e.target.value)}
                ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="w-2/12 bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition-colors"
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
