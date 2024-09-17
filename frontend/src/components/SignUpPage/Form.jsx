import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="flex w-full min-w-20 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="block text-gray-600">Nama Lengkap</label>
        <input type="text" className="rounded-lg border-2 p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Alamat Email</label>
        <input type="name" className="rounded-lg border-2 p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Kata Sandi</label>
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
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Konfirmasi Kata Sandi</label>
        <div className="relative">
          <input
            type={`${showConfirmPassword ? "text" : "password"}`}
            className="w-full rounded-lg border-2 p-2"
          />
          {showConfirmPassword ? (
            <FaRegEye
              onClick={() => {
                setShowConfirmPassword(false);
              }}
              className="absolute right-5 top-[calc(50%-0.5em)] cursor-pointer text-gray-600"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => {
                setShowConfirmPassword(true);
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
        Sign Up
      </button>
    </form>
  );
};

export default Form;
