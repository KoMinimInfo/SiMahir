import React from 'react';
import { useNavigate } from "react-router-dom";
import PengecatanRumah from "../../assets/pengecatan-rumah.svg";

const BookingForm = () => {
  const navigate = useNavigate();
  
  const handlePembayaran = (e) => {
    e.preventDefault(); 
    navigate('/payment');
  };

  return (
    <div className="container mx-auto p-6 mt-24 mb-24">
      <h1 className="text-2xl text-primary mb-6 font-poppins font-medium">Formulir Booking</h1>
      
      <div className="flex border border-gray-200 rounded-lg p-6">
        <div className="w-1/3 bg-white pr-6 border-r border-gray-200">
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <img 
              src={PengecatanRumah} 
              alt="Pengecatan Rumah" 
              className="w-3/5 h-48 object-cover rounded-lg mb-4"
            />
            <div className='w-3/5'>
              <h2 className="text-xl font-semibold">Pengecatan Rumah</h2>
              <p className="text-orange-400 font-poppins font-medium">Rp350.000</p>
              <p className='text-gray-500 text-sm font-poppins'>1 - 2 hari pengerjaan</p>
            </div>
          </div>
        </div>

        <div className="w-2/3 bg-white pl-6">
          <form onSubmit={handlePembayaran}>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nama Pemesan</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama anda" 
                  className="w-full p-2 border rounded focus:outline-none focus:border-primary" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Alamat</label>
                <input 
                  type="text" 
                  placeholder="Masukkan alamat anda" 
                  className="w-full p-2 border rounded focus:outline-none focus:border-primary" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">No Handphone</label>
                <input 
                  type="text" 
                  placeholder="Masukkan no handphone anda" 
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
