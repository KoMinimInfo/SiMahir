import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="flex w-full min-w-20 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="block text-gray-600">Nama Lengkap</label>
        <input className="rounded-lg border-2 p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Alamat Email</label>
        <input className="rounded-lg border-2 p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Kata Sandi</label>
        <input className="rounded-lg border-2 p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Konfirmasi Kata Sandi</label>
        <input className="rounded-lg border-2 p-2" />
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
