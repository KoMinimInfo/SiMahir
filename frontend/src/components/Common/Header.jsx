import IconSiMahir from "../../assets/si-mahir.svg";

const Header = () => {
  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between px-6 shadow-lg">
      <img src={IconSiMahir} alt="Si Mahir" className="w-40" />
      <div className="space-x-4">
        <button className="bg-primary rounded-xl px-8 py-2 text-white">
          Login
        </button>
        <button className="border-primary text-primary rounded-xl border-2 px-8 py-2">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
