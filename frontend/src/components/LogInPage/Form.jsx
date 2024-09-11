import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="block text-gray-600">Email</label>
        <input
          className="rounded-lg border-2 p-2"
          placeholder="Masukkan Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Password</label>
        <input
          className="rounded-lg border-2 p-2"
          placeholder="Masukkan Kata Sandi"
        />
      </div>

      <Link to="/" className="self-end underline">
        Lupa kata sandi?
      </Link>
      <button className="bg-primary rounded-full p-2 text-white">Login</button>
    </form>
  );
};

export default Form;
