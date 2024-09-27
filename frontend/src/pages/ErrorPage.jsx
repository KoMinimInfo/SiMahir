import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404 Not Found</h1>
        <p className="mt-2 text-xl">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
