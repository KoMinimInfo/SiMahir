import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [orders, setOrders] = useState([]);
  const baseStorageUrl = "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Fetch orders
        const ordersResponse = await axios.get(`${baseStorageUrl}/api/orders`);

        // Log status yang diterima dari API
        console.log('Orders status:', ordersResponse.data.data.map(order => order.status));

        // Ambil 3 order teratas
        const topOrders = ordersResponse.data.data.slice(0, 3);

        // Fetch service details untuk setiap order
        const ordersWithServices = await Promise.all(
          topOrders.map(async (order) => {
            const serviceResponse = await axios.get(
              `${baseStorageUrl}/api/services/${order.service_id}`
            );
            const serviceData = serviceResponse.data.data;

            return {
              ...order,
              service: {
                name: serviceData.name,
                price: serviceData.price,
                duration: serviceData.duration,
                image: baseStorageUrl + "/storage/" + serviceData.image,
              },
              status: order.order_status,
            };
          })
        );

        setOrders(ordersWithServices);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchOrders();
  }, []);

  // Function untuk menentukan warna button berdasarkan status
  const getStatusStyle = (status) => {
    if (!status) return 'bg-gray-500 text-white';
    
    switch (status.toLowerCase()) {
      case 'completed':
      case 'selesai':
        return 'bg-green-600 text-white';
      case 'pending':
      case 'menunggu':
        return 'bg-yellow-500 text-white';
      case 'process':
      case 'diproses':
        return 'bg-blue-500 text-white';
      case 'cancelled':
      case 'dibatalkan':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="container mx-auto mt-36 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {orders.map((item) => (
          <div key={item.id} className="flex flex-col items-center w-3/5 max-w-sm border rounded-lg">
            <div className="flex flex-col items-center pt-4">
              <img 
                src={item.service.image}
                alt={item.service.name} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className='w-full p-4'>
                <h2 className="text-xl font-semibold">{item.service.name}</h2>
                <p className="text-orange-400 font-poppins font-medium">Rp {item.service.price}</p>
                <p className='text-gray-500 text-sm font-poppins'>{item.service.duration}</p>
                <div className="mt-4">
                  <button 
                    className={`w-full py-2 rounded-md text-center ${getStatusStyle(item.order_status)}`}
                    disabled
                  >
                    {item.order_status}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
