import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post("/api/register", {
          name,
          email,
          password,
        });
        console.log(response.data.access_token);
        localStorage.setItem("accessToken", response.data.access_token);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form
      className="flex w-full min-w-20 flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label className="block text-gray-600">Nama Lengkap</label>
        <input
          type="text"
          className="rounded-lg border-2 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Alamat Email</label>
        <input
          type="email"
          className="rounded-lg border-2 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Kata Sandi</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full rounded-lg border-2 p-2"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            type={showConfirmPassword ? "text" : "password"}
            className="w-full rounded-lg border-2 p-2"
            minLength="8"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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