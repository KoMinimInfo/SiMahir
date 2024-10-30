import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      setIsLoading(false);
      localStorage.setItem("accessToken", response.data.access_token);
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex w-full min-w-20 flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label className="block text-gray-600">Email</label>
        <input
          type="email"
          className="rounded-lg border-2 p-2"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Password</label>
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            className="w-full rounded-lg border-2 p-2"
            placeholder="Masukkan Password"
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

      <Link to="/" className="self-end underline">
        Lupa kata sandi?
      </Link>
      <button
        type="submit"
        className="rounded-full bg-primary p-2 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Login..." : "Login"}
      </button>
    </form>
  );
};

export default Form;
