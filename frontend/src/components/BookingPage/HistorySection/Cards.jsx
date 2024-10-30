import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [orders, setOrders] = useState([]);
  const baseStorageUrl = "https://9000-idx-simahir-1729422412747.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersResponse = await axios.get(`${baseStorageUrl}/api/orders`);

        const ordersWithServices = await Promise.all(
          ordersResponse.data.data.map(async (order) => {
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

  const getStatusStyle = (status) => {
    if (!status) return 'bg-gray-500 text-white';
    
    switch (status) {
      case 'Done':
        return 'bg-green-600 text-white';
      case 'Pending':
        return 'bg-yellow-500 text-white';
      case 'On Process':
        return 'bg-blue-500 text-white';
      case 'Canceled':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="container mx-auto mt-36 pb-24 w-9/12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-10 justify-items-center">
        {orders.map((item) => (
          <div key={item.id} className="flex flex-col items-center w-4/5 max-w-sm border rounded-lg">
            <div className="flex flex-col items-center pt-4">
              <img 
                src={item.service.image}
                alt={item.service.name} 
                className="w-2/2 h-48 object-cover rounded-t-lg"
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
