import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex w-full min-w-20 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="block text-gray-600">Email</label>
        <input
          className="rounded-lg border-2 p-2"
          placeholder="Masukkan Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Password</label>
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            className="w-full rounded-lg border-2 p-2"
          />
          {showPassword ? (
            <FaRegEye
              onClick={() => {
                setShowPassword(false);
              }}
              className="absolute right-5 top-[calc(50%-0.5em)] cursor-pointer text-gray-600"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => {
                setShowPassword(true);
              }}
              className="absolute right-5 top-[calc(50%-0.5em)] cursor-pointer text-gray-600"
            />
          )}
        </div>
      </div>

      <Link to="/" className="self-end underline">
        Lupa kata sandi?
      </Link>
      <button type="submit" className="rounded-full bg-primary p-2 text-white">
        Login
      </button>
    </form>
  );
};

export default Form;
