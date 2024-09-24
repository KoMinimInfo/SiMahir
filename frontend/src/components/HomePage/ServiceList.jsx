import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ServiceList = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-10/12 md:w-4/12 text-center">
        <h1 className="text-primary text-3xl font-poppins font-medium">
          Jasa Perbaikan Rumah
        </h1>
        <p className="mt-1 text-gray-400 text-2xl font-poppins">
          Gunakan jasa perbaikan untuk kerusakan sederhana pada rumahmu
        </p>

        <form className="max-w-md w-full mt-6">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
              <svg className="w-4 h-4 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
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

        <div className="">
        </div>
      
      </div>
    </div>
  );
};

export default ServiceList;
