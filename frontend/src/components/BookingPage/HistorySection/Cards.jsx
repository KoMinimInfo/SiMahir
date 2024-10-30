import React from 'react';
import { History } from '../Data/History';

const Cards = () => {
  // Function untuk menentukan warna button berdasarkan status
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'selesai':
      case 'done':
        return 'bg-green-600 text-white';
      case 'dalam proses':
      case 'on process':
        return 'bg-yellow-500 text-white';
      case 'dibatalkan':
      case 'cancelled':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Untuk debugging
  console.log('History Data:', History);

  return (
    <div className="container mx-auto mt-36 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {History.map((item) => {
          // Debug setiap item
          console.log('Item Status:', item.status);
          console.log('Status Style:', getStatusStyle(item.status));
          
          return (
            <div key={item.id} className="flex flex-col items-center w-3/5 max-w-sm border rounded-lg">
              <div className="flex flex-col items-center pt-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className='w-full p-4'>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-orange-400 font-poppins font-medium">{item.price}</p>
                  <p className='text-gray-500 text-sm font-poppins'>{item.duration}</p>
                  <div className="mt-4">
                    <button 
                      className={`w-full py-2 rounded-md text-center ${getStatusStyle(item.status)}`}
                      disabled
                    >
                      {item.status}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
