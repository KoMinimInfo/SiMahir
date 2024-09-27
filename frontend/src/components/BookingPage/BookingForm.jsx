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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-36">
      <h1 className="text-2xl text-primary mb-4 font-poppins font-medium">Formulir Booking</h1>
      
      <div className="flex mb-4">
        <img src={PengecatanRumah} alt="Pengecatan Rumah" className="w-1/3 h-auto mr-4" />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Pengecatan Rumah</h2>
          <p className="text-orange-400 font-poppins font-medium">Rp350.000</p>
          <p className='text-gray-500 text-sm font-poppins'>1 - 2 hari pengerjaan</p>
        </div>
      </div>
      
      <form onSubmit={handlePembayaran}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Nama Pemesan</label>
          <input type="text" placeholder="Masukkan nama anda" className="w-full p-2 border rounded" required />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Alamat</label>
          <input type="text" placeholder="Masukkan alamat anda" className="w-full p-2 border rounded" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">No Handphone</label>
          <input type="text" placeholder="Masukkan no handphone anda" className="w-full p-2 border rounded" required />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Catatan Perbaikan</label>
          <textarea placeholder="Masukkan catatan anda" className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">Lanjut Pembayaran</button>
      </form>
    </div>
  );
};

export default BookingForm;
